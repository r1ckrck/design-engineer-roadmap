import type { Day } from "../types";

export const day12: Day = {
  id: 12,
  phaseId: 5,
  title: "Components and Why They Exist",
  estMinutes: 60,
  goal: "Understand why modern sites are built from reusable components, and set up a React project.",
  outcome: "A React project scaffolded with Vite, committed — and a feel for what a component is.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "See the problem components solve",
      body: [
        {
          type: "text",
          md: "On a plain HTML page, repeating a card or a button means copying the code everywhere. Changing it means editing every copy — tedious and error-prone as a site grows.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain why copying HTML for repeated elements becomes a problem as a site grows.",
        },
      ],
    },
    {
      n: 2,
      title: "Meet the idea of a component",
      body: [
        {
          type: "text",
          md: "A component is a reusable piece of interface you define once and use many times. Change it once, it updates everywhere it appears.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what a UI component is, using a button or a card as the example.",
        },
      ],
    },
    {
      n: 3,
      title: "Understand what React is",
      body: [
        {
          type: "text",
          md: "[React](https://react.dev) is the most common tool for building interfaces out of components. It is why \"components\" is the language of modern web work.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what React is and why it exists, in plain terms for a designer.",
        },
      ],
    },
    {
      n: 4,
      title: "Set up a modern project, guided",
      body: [
        {
          type: "text",
          md: "[Vite](https://vite.dev) is a fast tool that scaffolds and runs a React project. Let Claude set it up and explain what it creates.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Set up a simple React project for this site using Vite, and explain the main folders and files it creates.",
        },
        {
          type: "callout",
          kind: "note",
          body: "Approve the steps as it goes. Then read its explanation of the structure — src, the entry file, the first component.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand the shape",
      body: [
        {
          type: "text",
          md: "See how the smallest component turns into what you see on screen — that is the whole idea in miniature.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Show me the smallest component in the project and explain how it turns into what I see on screen.",
        },
        {
          type: "text",
          md: "Then commit it.",
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
          text: 'git add . && git commit -m "Set up React project" && git push',
        },
      ],
    },
  ],
  recap:
    "You learned why components exist and scaffolded a React project with Vite — the foundation for building interfaces from reusable parts.",
};
