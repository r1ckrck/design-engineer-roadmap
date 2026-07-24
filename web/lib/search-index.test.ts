import { describe, expect, it } from "vitest";
import { search } from "./search-index";

describe("search", () => {
  it("returns nothing for an empty query", () => {
    expect(search("")).toEqual([]);
    expect(search("   ")).toEqual([]);
  });

  it("finds a day by its title", () => {
    const hits = search("terminal");
    expect(hits.length).toBeGreaterThan(0);
    // Day 2 is "Moving Around the Terminal".
    expect(hits.some((h) => h.dayId === 2)).toBe(true);
  });

  it("finds steps and links them with an anchor", () => {
    const hits = search("commit");
    const stepHit = hits.find((h) => h.kind === "step");
    expect(stepHit).toBeDefined();
    expect(stepHit?.stepAnchor).toMatch(/^step-\d+$/);
  });

  it("respects the result limit", () => {
    expect(search("the", 5).length).toBeLessThanOrEqual(5);
  });
});
