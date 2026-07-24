import Link from "next/link";
import { course } from "@/content";
import { site } from "@/content/site";
import { links } from "@/content/links";
import { SiteHeader } from "@/components/SiteHeader";
import { JourneyMap } from "@/components/JourneyMap";
import { ResetProgress } from "@/components/ResetProgress";

const howToUse = [
  { label: "macOS / Windows", desc: "Pick your system top-right — every command adapts to it." },
  { label: "Light / dark", desc: "Toggle top-right. Defaults to dark." },
  { label: "Search", desc: "Press Cmd/Ctrl-K to jump to any day or step." },
  { label: "Navigate", desc: "← → arrow keys, or the buttons at the foot of each day." },
  { label: "Progress", desc: "Mark a day complete; the map above fills in." },
  { label: "Download", desc: "Grab any day as markdown, or the skills as zip files." },
  { label: "Share", desc: "Copy a link to any page from the header." },
  { label: "Glossary", desc: "Hover any jargon term for a plain definition." },
];

export default function Home() {
  const totalDays = course.phases.reduce((n, p) => n + p.dayIds.length, 0);

  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-3 font-display text-5xl text-fg">{course.title}</h1>
        <p className="mb-6 text-lg text-muted">{course.tagline}</p>

        <p className="mb-6 text-fg/90">
          A self-paced path, about an hour a day, across {totalDays} days. Two arcs: Foundations
          first, then Design Engineering. You will not hand-write code — you will direct Claude
          Code, and understand what it builds.
        </p>

        <Link
          href="/day/1"
          className="inline-block rounded-lg bg-accent px-5 py-2.5 font-medium text-white"
        >
          Start — Day 1
        </Link>

        {/* The journey map — the primary way in. */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-fg">The journey</h2>
          <JourneyMap />
        </section>

        {/* How the site works. */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-fg">How to use this site</h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            {howToUse.map((item) => (
              <div key={item.label} className="rounded-md border border-border p-3">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">{item.label}</dt>
                <dd className="mt-1 text-sm text-fg/90">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* A little before-you-start. */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-semibold text-fg">Before you start</h2>
          <ul className="list-disc space-y-1 pl-5 text-fg/90">
            <li>
              You will need a Claude Pro or Max account for{" "}
              <a
                href={links.claudeCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                Claude Code
              </a>
              .
            </li>
            <li>
              Grab the{" "}
              <Link href="/skills" className="text-accent underline underline-offset-2">
                eight bundled skills
              </Link>{" "}
              — you install them in Phase 8.
            </li>
          </ul>
        </section>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-sm text-muted">
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg"
          >
            View on GitHub
          </a>
          <ResetProgress />
        </div>
      </div>
    </>
  );
}
