// Zips each bundled skill into public/downloads/skills/ so the static site can offer
// them as downloads. Runs before dev and build. Source of truth is the repo-root skills/.

import { createWriteStream } from "node:fs";
import { mkdir, readdir, rm, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// archiver is CommonJS; createRequire loads it cleanly under Node's ESM loader.
const require = createRequire(import.meta.url);
const archiver = require("archiver");

const here = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(here, "..", "..", "skills");
const outDir = join(here, "..", "public", "downloads", "skills");

async function zipDirectory(sourceDir, outPath, rootName) {
  await new Promise((resolve, reject) => {
    const output = createWriteStream(outPath);
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", resolve);
    archive.on("error", reject);
    archive.pipe(output);
    // Nest under rootName/ so the zip extracts into a named folder, not loose files.
    archive.directory(sourceDir, rootName);
    archive.finalize();
  });
}

async function listSkillFolders() {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const skills = await listSkillFolders();
  for (const name of skills) {
    const out = join(outDir, `${name}.zip`);
    await zipDirectory(join(skillsDir, name), out, name);
  }

  // One archive of everything, each skill nested under its own folder.
  await new Promise((resolve, reject) => {
    const output = createWriteStream(join(outDir, "all-skills.zip"));
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", resolve);
    archive.on("error", reject);
    archive.pipe(output);
    for (const name of skills) archive.directory(join(skillsDir, name), name);
    archive.finalize();
  });

  const sizes = await Promise.all(
    skills.map(async (name) => {
      const info = await stat(join(outDir, `${name}.zip`));
      return `${name} (${Math.round(info.size / 1024)}kb)`;
    }),
  );
  console.log(`Zipped ${skills.length} skills: ${sizes.join(", ")}`);
}

main().catch((error) => {
  console.error("build-downloads failed:", error);
  process.exit(1);
});
