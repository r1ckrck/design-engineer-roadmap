import { notFound } from "next/navigation";
import { allDayIds, course, getDay, neighbors } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { DayHeader } from "@/components/DayHeader";
import { Step } from "@/components/Step";
import { Callout } from "@/components/Callout";
import { DayVisual } from "@/components/DayVisual";
import { BottomBar } from "@/components/BottomBar";
import { KeyboardNav } from "@/components/KeyboardNav";

export function generateStaticParams() {
  return allDayIds().map((id) => ({ id: String(id) }));
}

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const day = getDay(Number(id));
  if (!day) notFound();

  const phase = course.phases.find((p) => p.id === day.phaseId);
  const showMapFirst = phase?.mapFirst && day.id === phase.dayIds[0];
  const { prev, next } = neighbors(day.id);

  return (
    // .day-page + .day-content reflow via globals.css: mobile is an app-like column where the
    // text and illustration are horizontal scroll-snap panels; desktop is centered text + rail.
    <div className="day-page">
      <KeyboardNav prev={prev} next={next} />
      <SiteHeader
        eyebrow={phase ? `Phase ${phase.id} · ${phase.title}` : undefined}
        title={`Day ${day.id} · ${day.title}`}
      />

      <div className="day-content">
        <article className="day-text">
          <DayHeader day={day} />

          {showMapFirst && <Callout kind="tip" body={`Map first — ${phase!.mapFirst!.join(" ")}`} />}

          {day.steps ? (
            day.steps.map((step) => <Step key={step.n} step={step} />)
          ) : (
            <p className="italic text-muted">{"This day's content is being prepared."}</p>
          )}

          {day.recap && (
            <p className="mt-8 text-fg/90">
              <span className="font-medium">Recap — </span>
              {day.recap}
            </p>
          )}
        </article>

        <div className="day-viz">
          <DayVisual id={day.id} />
        </div>
      </div>

      <BottomBar day={day} />
    </div>
  );
}
