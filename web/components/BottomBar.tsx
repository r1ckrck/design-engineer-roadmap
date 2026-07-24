"use client";

import Link from "next/link";
import type { Day } from "@/content/types";
import { neighbors } from "@/content";
import { site } from "@/content/site";
import { downloadDay } from "@/lib/day-markdown";
import { useDayDone, useProgress } from "@/lib/progress";

// Sticky bottom bar. Inner content is constrained to the text measure and centered, so it
// aligns to the reading column rather than the full viewport.
export function BottomBar({ day }: { day: Day }) {
  const { prev, next } = neighbors(day.id);
  const { done, toggle } = useDayDone(day.id);
  const progress = useProgress();

  const completed = Object.values(progress).filter(Boolean).length;
  const percent = Math.round((completed / site.totalDays) * 100);

  return (
    <div className="sticky bottom-0 z-20 border-t border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-[42rem] items-center justify-between gap-3 px-6 py-3 text-sm">
        {prev ? (
          <Link href={`/day/${prev}`} className="shrink-0 text-accent hover:underline">
            {"←"} Day {prev}
          </Link>
        ) : (
          <span className="shrink-0" />
        )}

        {/* Progress, download, and mark-complete are desktop-only; mobile keeps just prev/next. */}
        <div className="hidden items-center gap-2 lg:flex">
          <span className="font-mono text-xs text-muted">
            Day {day.id} of {site.totalDays} · {percent}%
          </span>
          <button
            type="button"
            onClick={() => downloadDay(day)}
            className="rounded-sm border border-border px-2.5 py-1 text-muted hover:text-fg"
          >
            Download .md
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={done}
            className={`rounded-sm border px-2.5 py-1 ${
              done ? "border-accent bg-accent text-white" : "border-border text-muted hover:text-fg"
            }`}
          >
            {done ? "Completed" : "Mark complete"}
          </button>
        </div>

        {next ? (
          <Link href={`/day/${next}`} className="shrink-0 text-accent hover:underline">
            Day {next} {"→"}
          </Link>
        ) : (
          <span className="shrink-0" />
        )}
      </div>
    </div>
  );
}
