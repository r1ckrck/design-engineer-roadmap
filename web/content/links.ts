// Canonical external URLs. Content references these so every "install X" or "read the
// docs" points somewhere correct and consistent. Update a URL here, it updates everywhere.

export const links = {
  claudeCode: "https://code.claude.com/docs",
  claudeCodeSetup: "https://code.claude.com/docs/en/setup",
  claudeCodeSkills: "https://code.claude.com/docs/en/skills",
  claudeCodeMcp: "https://code.claude.com/docs/en/mcp",
  anthropic: "https://claude.com",
  node: "https://nodejs.org",
  git: "https://git-scm.com",
  gitForWindows: "https://git-scm.com/downloads/win",
  github: "https://github.com",
  vscode: "https://code.visualstudio.com",
  cursor: "https://cursor.com",
  react: "https://react.dev",
  tailwind: "https://tailwindcss.com",
  vite: "https://vite.dev",
  playwright: "https://playwright.dev",
  figma: "https://www.figma.com",
  context7: "https://github.com/upstash/context7",
  ffmpeg: "https://ffmpeg.org",
} as const;

// Download paths for the bundled skill zips (generated into public/downloads/skills/).
export function skillZip(name: string): string {
  return `/downloads/skills/${name}.zip`;
}

export const allSkillsZip = "/downloads/skills/all-skills.zip";
