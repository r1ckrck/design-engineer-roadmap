import type { Day } from "../types";

// Sample fully-authored day, proving the content model end to end.
// It exercises every block type: text, disclosure, copyable, callout, ostabs.

export const day09: Day = {
  id: 9,
  phaseId: 4,
  title: "Tiers, Load Tables, and Iteration Discipline",
  estMinutes: 60,
  goal: "Learn how context scales with tiers and load tables, and set the working rules that keep an agent precise.",
  outcome: "A CLAUDE.md with a load table and your working rules, committed.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand the three tiers",
      body: [
        {
          type: "text",
          md: "Real projects layer their context. A root CLAUDE.md says how you work overall. A sub-project CLAUDE.md says how that part runs. A leaf file describes one single piece.",
        },
        {
          type: "disclosure",
          summary: "Why this matters",
          body: [
            {
              type: "text",
              md: "Each tier answers a different question, and none repeats another. As a project grows, detail pushes down into the folder it belongs to, so no single file becomes a dumping ground.",
            },
          ],
        },
      ],
    },
    {
      n: 2,
      title: "See why tiers matter",
      body: [
        {
          type: "text",
          md: "Your practice site is small, so it needs only the root file today. The pattern is what you are learning — the shape scales even when this project does not need all of it yet.",
        },
      ],
    },
    {
      n: 3,
      title: "Add a load table",
      body: [
        {
          type: "text",
          md: "A load table maps a task to the file Claude should read for it, so it loads only what is needed, not everything.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Add a small table to CLAUDE.md mapping tasks to the doc to read — styling to docs/design.md, decisions to docs/notes.md.",
        },
      ],
    },
    {
      n: 4,
      title: "Understand iteration discipline",
      body: [
        {
          type: "text",
          md: "How you direct an agent matters as much as structure. One change at a time. Predict before editing. Diagnose before fixing.",
        },
        {
          type: "callout",
          kind: "note",
          body: "These rules keep an agent from making sweeping, hard-to-review changes. Small, confirmed steps stay in your control.",
        },
      ],
    },
    {
      n: 5,
      title: "Write the rules down",
      body: [
        {
          type: "text",
          md: "Rules you put in CLAUDE.md load every session, so the project itself remembers how you want to work.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: 'Add a short "how we work" section to CLAUDE.md: one change at a time, explain before editing, diagnose before fixing.',
        },
      ],
    },
    {
      n: 6,
      title: "Commit the structure",
      body: [
        { type: "text", md: "Save the structure so far." },
        {
          type: "ostabs",
          mac: [{ type: "text", md: "Open the Terminal app." }],
          windows: [{ type: "text", md: "Open Git Bash." }],
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "Structure the project and its context" && git push',
        },
      ],
    },
  ],
  recap:
    "You added a load table and wrote your working rules into CLAUDE.md — the project now teaches Claude how to work with you.",
};
