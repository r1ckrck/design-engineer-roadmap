import type { Day } from "../types";

export const day13: Day = {
  id: 13,
  phaseId: 5,
  title: "Tailwind and Design Tokens",
  estMinutes: 60,
  goal: "Style with Tailwind and understand design tokens — the seam where design decisions become code.",
  outcome: "A home page styled with Tailwind and driven by a few design tokens you defined and changed.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand Tailwind",
      body: [
        {
          type: "text",
          md: "[Tailwind](https://tailwindcss.com) is a way to style by applying small, named utility classes directly to elements, instead of writing separate CSS files.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Add Tailwind to the project and explain how utility classes work, with an example from my page.",
        },
      ],
    },
    {
      n: 2,
      title: "Meet design tokens",
      body: [
        {
          type: "text",
          md: "A design token is a named design decision — a color, a spacing value, a font size — defined once and reused everywhere. A concept you already know from design tools, now in code.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what design tokens are and why defining colors and spacing once, by name, matters.",
        },
      ],
    },
    {
      n: 3,
      title: "Define your tokens",
      body: [
        {
          type: "text",
          md: "Set up a small set of tokens for this site so later steps can reference them by name.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Set up a few design tokens for this site — a primary color, a background, and a base spacing — and explain where they live.",
        },
      ],
    },
    {
      n: 4,
      title: "Use them and see the payoff",
      body: [
        {
          type: "text",
          md: "Restyle using the tokens, then change one and watch it ripple. This is the design-to-code seam you go deep on in Phase 7.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Restyle the home page using those tokens, then change the primary color token and show me everything that updates.",
        },
        {
          type: "callout",
          kind: "tip",
          body: "One change rippling everywhere is the power of tokens — a design decision made once, applied consistently by name.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand the whole picture",
      body: [
        {
          type: "text",
          md: "Tie the phase together: how HTML, CSS, React, Tailwind, and tokens fit into one project.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Summarize how HTML, CSS, React, Tailwind, and tokens fit together in this project.",
        },
        {
          type: "text",
          md: "Then commit your work.",
        },
        {
          type: "ostabs",
          mac: [{ type: "text", md: "Open the Terminal app." }],
          windows: [{ type: "text", md: "Open Git Bash." }],
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "Add Tailwind and design tokens" && git push',
        },
      ],
    },
  ],
  recap:
    "You styled with Tailwind and defined design tokens — changing one token rippled everywhere, the heart of the design-to-code seam.",
};
