import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { DownloadButton } from "@/components/DownloadButton";
import { allSkillsZip, skillZip } from "@/content/links";

const skills = [
  { name: "atelier", desc: "Decide the tech stack a build actually needs." },
  { name: "markset", desc: "Turn markdown into a polished PDF." },
  { name: "coding-standards", desc: "Write clean, consistent, readable code." },
  { name: "code-simplifier", desc: "Refine code for clarity without changing behavior." },
  { name: "frontend-design", desc: "Produce distinctive, production-grade UI." },
  { name: "testing", desc: "Verify it works; debug what is broken." },
  { name: "media-processing", desc: "Convert, resize, and optimize media (FFmpeg + ImageMagick)." },
  { name: "playwright-cli", desc: "Drive a real browser — view, test, get past bot-blocking." },
];

export default function SkillsPage() {
  return (
    <>
      <SiteHeader title="Skills" />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold text-fg">Bundled skills</h1>
        <p className="mb-6 text-muted">
          Eight Claude Code skills that ship with the course. Install them at user level so
          every project can use them — you do this in{" "}
          <Link href="/day/22" className="text-accent underline underline-offset-2">
            Day 22
          </Link>
          .
        </p>

        <div className="mb-8">
          <DownloadButton href={allSkillsZip}>Download all skills (.zip)</DownloadButton>
        </div>

        <ul className="divide-y divide-border">
          {skills.map((skill) => (
            <li key={skill.name} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <div className="font-mono text-sm text-fg">{skill.name}</div>
                <div className="text-sm text-muted">{skill.desc}</div>
              </div>
              <DownloadButton href={skillZip(skill.name)}>.zip</DownloadButton>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
