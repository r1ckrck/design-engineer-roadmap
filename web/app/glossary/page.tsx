import { SiteHeader } from "@/components/SiteHeader";
import { glossary } from "@/content/glossary";

const terms = Object.entries(glossary).sort(([a], [b]) => a.localeCompare(b));

export default function GlossaryPage() {
  return (
    <>
      <SiteHeader title="Glossary" />
      <div className="mx-auto max-w-[42rem] px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold text-fg">Glossary</h1>
        <p className="mb-6 text-muted">
          The technical terms this course uses, defined plainly. In the lessons, each term shows
          its definition on hover the first time it appears.
        </p>
        <dl className="divide-y divide-border">
          {terms.map(([term, definition]) => (
            <div key={term} className="py-3">
              <dt className="font-mono text-sm uppercase tracking-wide text-fg">{term}</dt>
              <dd className="mt-0.5 text-sm text-muted">{definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
