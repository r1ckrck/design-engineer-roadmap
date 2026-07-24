import type { Day } from "./types";
import { arcs, course, dayTitles } from "./course";
import { day01 } from "./days/day-01";
import { day02 } from "./days/day-02";
import { day03 } from "./days/day-03";
import { day04 } from "./days/day-04";
import { day05 } from "./days/day-05";
import { day06 } from "./days/day-06";
import { day07 } from "./days/day-07";
import { day08 } from "./days/day-08";
import { day09 } from "./days/day-09";
import { day10 } from "./days/day-10";
import { day11 } from "./days/day-11";
import { day12 } from "./days/day-12";
import { day13 } from "./days/day-13";
import { day14 } from "./days/day-14";
import { day15 } from "./days/day-15";
import { day16 } from "./days/day-16";
import { day17 } from "./days/day-17";
import { day18 } from "./days/day-18";
import { day19 } from "./days/day-19";
import { day20 } from "./days/day-20";
import { day21 } from "./days/day-21";
import { day22 } from "./days/day-22";
import { day23 } from "./days/day-23";
import { day24 } from "./days/day-24";
import { day25 } from "./days/day-25";
import { day26 } from "./days/day-26";
import { day27 } from "./days/day-27";
import { day28 } from "./days/day-28";

// Every day's full content, keyed by id. A missing id falls back to a metadata stub.
const fullDays: Record<number, Day> = {
  1: day01, 2: day02, 3: day03, 4: day04, 5: day05, 6: day06, 7: day07,
  8: day08, 9: day09, 10: day10, 11: day11, 12: day12, 13: day13, 14: day14,
  15: day15, 16: day16, 17: day17, 18: day18, 19: day19, 20: day20, 21: day21,
  22: day22, 23: day23, 24: day24, 25: day25, 26: day26, 27: day27, 28: day28,
};

export function allDayIds(): number[] {
  return course.phases.flatMap((p) => p.dayIds).sort((a, b) => a - b);
}

export function phaseOf(id: number) {
  return course.phases.find((p) => p.dayIds.includes(id)) ?? null;
}

export function getDay(id: number): Day | null {
  if (fullDays[id]) return fullDays[id];
  const phase = phaseOf(id);
  if (!phase) return null;
  return { id, phaseId: phase.id, title: dayTitles[id] ?? `Day ${id}` };
}

export function neighbors(id: number): { prev: number | null; next: number | null } {
  const ids = allDayIds();
  const i = ids.indexOf(id);
  return {
    prev: i > 0 ? ids[i - 1] : null,
    next: i >= 0 && i < ids.length - 1 ? ids[i + 1] : null,
  };
}

export { arcs, course, dayTitles };
