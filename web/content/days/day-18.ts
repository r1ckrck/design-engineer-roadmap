import type { Day } from "../types";

export const day18: Day = {
  id: 18,
  phaseId: 7,
  title: "Components That Document Themselves",
  estMinutes: 60,
  goal: "Make components self-describing so their documentation is generated, not hand-written.",
  outcome:
    "A component that carries its own metadata and a doc page generated from it — one that cannot silently fall out of date.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "See why docs drift",
      body: [
        {
          type: "text",
          md: "Hand-written documentation goes stale the moment the code changes and nobody updates the doc. The fix is to generate docs from the code itself.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain why manually written component docs drift out of date, and how generating them from the code fixes it.",
        },
      ],
    },
    {
      n: 2,
      title: "Make a component describe itself",
      body: [
        {
          type: "text",
          md: "The component now carries its own facts, next to its code.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Take a component in the project and give it a small metadata description — its name, purpose, and options.",
        },
      ],
    },
    {
      n: 3,
      title: "Generate documentation from it",
      body: [
        {
          type: "text",
          md: "Because the docs are built from the metadata, they cannot silently fall out of date.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Generate a simple documentation page for that component from its metadata, and explain how this stays in sync automatically.",
        },
        {
          type: "disclosure",
          summary: "Why generated docs can't drift",
          body: [
            {
              type: "text",
              md: "The metadata lives beside the code, so changing the component means changing its facts in the same edit. The doc page reads those facts at build time, so it always reflects the current component — there is no second copy to forget.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Understand the principle",
      body: [
        {
          type: "text",
          md: "This is how real design systems keep dozens of components documented without an army of writers.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: 'Summarize the idea of a "self-describing component" and why it matters for a design system.',
        },
      ],
    },
    {
      n: 5,
      title: "Commit the seam work",
      body: [
        { type: "text", md: "Save the tokens seam and the self-describing component together." },
        {
          type: "ostabs",
          mac: [{ type: "text", md: "Open the Terminal app." }],
          windows: [{ type: "text", md: "Open Git Bash." }],
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "Build the tokens seam and self-describing component" && git push',
        },
      ],
    },
  ],
  recap:
    "You gave a component its own metadata and generated its docs from it, so the documentation stays true to the code by construction.",
};
