import type { Day } from "@/content/types";

// Day title and framing. Marking a day complete lives in the bottom bar (one home for it).
export function DayHeader({ day }: { day: Day }) {
  return (
    <header className="mb-8">
      <div className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">Day {day.id}</div>
      <h1 className="mb-3 text-3xl font-semibold text-fg">{day.title}</h1>
      {day.estMinutes && <div className="text-sm text-muted">~{day.estMinutes} min</div>}
      {day.goal && (
        <p className="mt-4 text-fg/90">
          <span className="font-medium">Goal — </span>
          {day.goal}
        </p>
      )}
      {day.outcome && (
        <p className="mt-1 text-fg/90">
          <span className="font-medium">By the end — </span>
          {day.outcome}
        </p>
      )}
    </header>
  );
}
