"use client";

import Link from "next/link";
import { arcs, course, dayTitles } from "@/content";
import { useProgress } from "@/lib/progress";

// The whole 28-day journey at a glance: two arcs, 11 phases, each day a clickable chip that
// fills in as it's completed.
export function JourneyMap() {
  const done = useProgress();

  return (
    <div className="space-y-6">
      {arcs.map((arc) => (
        <div key={arc.key}>
          <div className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">{arc.label}</div>
          <div className="space-y-2">
            {course.phases
              .filter((p) => p.arc === arc.key)
              .map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col gap-2 rounded-md border border-border p-3 sm:flex-row sm:items-center"
                >
                  <div className="shrink-0 text-sm font-medium text-fg sm:w-52">
                    {p.id} &middot; {p.title}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.dayIds.map((d) => (
                      <Link
                        key={d}
                        href={`/day/${d}`}
                        title={`Day ${d} — ${dayTitles[d]}`}
                        className={`flex h-7 w-7 items-center justify-center rounded-sm border text-xs ${
                          done[d]
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-border text-muted hover:border-accent hover:text-fg"
                        }`}
                      >
                        {done[d] ? "✓" : d}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
