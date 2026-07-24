import type { ComponentType } from "react";
import Day01Visual from "./day-01";
import Day02Visual from "./day-02";
import Day03Visual from "./day-03";
import Day04Visual from "./day-04";
import Day05Visual from "./day-05";
import Day06Visual from "./day-06";
import Day07Visual from "./day-07";
import Day08Visual from "./day-08";
import Day09Visual from "./day-09";
import Day10Visual from "./day-10";
import Day11Visual from "./day-11";
import Day12Visual from "./day-12";
import Day13Visual from "./day-13";
import Day14Visual from "./day-14";
import Day15Visual from "./day-15";
import Day16Visual from "./day-16";
import Day17Visual from "./day-17";
import Day18Visual from "./day-18";
import Day19Visual from "./day-19";
import Day20Visual from "./day-20";
import Day21Visual from "./day-21";
import Day22Visual from "./day-22";
import Day23Visual from "./day-23";
import Day24Visual from "./day-24";
import Day25Visual from "./day-25";
import Day26Visual from "./day-26";
import Day27Visual from "./day-27";
import Day28Visual from "./day-28";

// Registry of per-day visuals. A day with no entry renders no visual.
export const dayVisuals: Record<number, ComponentType> = {
  1: Day01Visual, 2: Day02Visual, 3: Day03Visual, 4: Day04Visual, 5: Day05Visual,
  6: Day06Visual, 7: Day07Visual, 8: Day08Visual, 9: Day09Visual, 10: Day10Visual,
  11: Day11Visual, 12: Day12Visual, 13: Day13Visual, 14: Day14Visual, 15: Day15Visual,
  16: Day16Visual, 17: Day17Visual, 18: Day18Visual, 19: Day19Visual, 20: Day20Visual,
  21: Day21Visual, 22: Day22Visual, 23: Day23Visual, 24: Day24Visual, 25: Day25Visual,
  26: Day26Visual, 27: Day27Visual, 28: Day28Visual,
};
