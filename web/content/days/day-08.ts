import type { Day } from "../types";

export const day08: Day = {
  id: 8,
  phaseId: 4,
  title: "Structure by Concern and the Router File",
  estMinutes: 60,
  goal: "Organize the project by what things are, and make CLAUDE.md a router that points rather than repeats.",
  outcome: "A project sorted into clear kinds of place, with a short CLAUDE.md that points to docs/design.md and docs/notes.md instead of duplicating them.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand structure by concern",
      body: [
        {
          type: "text",
          md: "Group files by what they *are*, not by when you made them. Notes go with notes, code with code, generated files on their own.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: 'Explain what "organizing a project by concern" means and why it helps an AI agent work in it.',
        },
      ],
    },
    {
      n: 2,
      title: "Give the project a notes home",
      body: [
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Create a docs folder with a design.md that describes this site's look in a few lines, and a notes.md for decisions.",
        },
        {
          type: "text",
          md: "Now the project has three clear kinds of place: `docs` for thinking, `css`/`js` for code, and the pages themselves.",
        },
      ],
    },
    {
      n: 3,
      title: "Learn the router pattern",
      body: [
        {
          type: "text",
          md: "A router file points to detail that lives elsewhere; it never copies that detail in. One fact, one home.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: 'Explain the "router" pattern for a CLAUDE.md — pointing to other docs instead of duplicating them.',
        },
      ],
    },
    {
      n: 4,
      title: "Turn CLAUDE.md into a router",
      body: [
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Rewrite CLAUDE.md so it briefly describes the project and points to docs/design.md and docs/notes.md, without repeating their contents.",
        },
        {
          type: "text",
          md: "Open it and read. The root file is now short and stable; the details live in the files it points to.",
        },
        {
          type: "disclosure",
          summary: "Why a router beats one big file",
          body: [
            {
              type: "text",
              md: "When every fact has one home, there is nothing to keep in sync. Change the look? Edit `docs/design.md` alone. A file that duplicates its docs drifts out of date the moment one copy changes.",
            },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Test that it holds",
      body: [
        {
          type: "text",
          md: "Check that the pointer actually works by asking a question the router should answer.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "If I want to change the site's look, which file should I edit?",
        },
        {
          type: "callout",
          kind: "note",
          body: "It should send you to docs/design.md, because CLAUDE.md pointed there. That is the router working — context is findable, not scattered.",
        },
      ],
    },
  ],
  recap:
    "You sorted the project by concern and turned CLAUDE.md into a router that points to its docs instead of repeating them.",
};
