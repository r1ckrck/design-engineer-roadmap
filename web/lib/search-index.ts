import { allDayIds, course, getDay } from "@/content";

export interface SearchHit {
  dayId: number;
  phaseTitle: string;
  label: string;
  kind: "day" | "step";
  stepAnchor?: string;
}

interface IndexEntry {
  hit: SearchHit;
  haystack: string;
}

let cached: IndexEntry[] | null = null;

function buildIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];
  for (const id of allDayIds()) {
    const day = getDay(id);
    if (!day) continue;
    const phase = course.phases.find((p) => p.id === day.phaseId);
    const phaseTitle = phase ? `Phase ${phase.id} · ${phase.title}` : "";

    entries.push({
      hit: { dayId: id, phaseTitle, label: day.title, kind: "day" },
      haystack: `${day.title} ${day.goal ?? ""}`.toLowerCase(),
    });

    for (const step of day.steps ?? []) {
      entries.push({
        hit: { dayId: id, phaseTitle, label: step.title, kind: "step", stepAnchor: `step-${step.n}` },
        haystack: step.title.toLowerCase(),
      });
    }
  }
  return entries;
}

// Substring search over day titles/goals and step titles. Client-side, no index build step.
export function search(query: string, limit = 20): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  if (!cached) cached = buildIndex();

  const hits: SearchHit[] = [];
  for (const entry of cached) {
    if (entry.haystack.includes(q)) {
      hits.push(entry.hit);
      if (hits.length >= limit) break;
    }
  }
  return hits;
}
