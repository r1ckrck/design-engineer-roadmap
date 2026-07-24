import { describe, expect, it } from "vitest";
import type { Day } from "@/content/types";
import { dayToMarkdown } from "./day-markdown";

describe("dayToMarkdown", () => {
  it("renders header, goal, and a numbered step with a copyable", () => {
    const day: Day = {
      id: 9,
      phaseId: 4,
      title: "Tiers",
      goal: "Learn tiers.",
      steps: [
        {
          n: 1,
          title: "Add a load table",
          body: [
            { type: "text", md: "A load table maps a task to a file." },
            {
              type: "copyable",
              kind: "prompt",
              label: "Paste into Claude Code",
              text: "Add a load table to CLAUDE.md.",
            },
          ],
        },
      ],
    };

    const md = dayToMarkdown(day);

    expect(md).toContain("# Day 9: Tiers");
    expect(md).toContain("**Goal:** Learn tiers.");
    expect(md).toContain("## 1. Add a load table");
    expect(md).toContain("A load table maps a task to a file.");
    expect(md).toContain("**Paste into Claude Code**");
    expect(md).toContain("```\nAdd a load table to CLAUDE.md.\n```");
  });

  it("renders OS tabs as both platforms", () => {
    const day: Day = {
      id: 6,
      phaseId: 3,
      title: "OS example",
      steps: [
        {
          n: 1,
          title: "Open a terminal",
          body: [
            {
              type: "ostabs",
              mac: [{ type: "text", md: "Open Terminal." }],
              windows: [{ type: "text", md: "Open Git Bash." }],
            },
          ],
        },
      ],
    };

    const md = dayToMarkdown(day);

    expect(md).toContain("**macOS**");
    expect(md).toContain("Open Terminal.");
    expect(md).toContain("**Windows**");
    expect(md).toContain("Open Git Bash.");
  });

  it("handles a day with no steps without throwing", () => {
    const day: Day = { id: 1, phaseId: 0, title: "Stub" };
    const md = dayToMarkdown(day);
    expect(md).toContain("# Day 1: Stub");
    expect(md.endsWith("\n")).toBe(true);
  });
});
