import type { Day } from "../types";

export const day07: Day = {
  id: 7,
  phaseId: 3,
  title: "Web, Planning, and Your First Real Files",
  estMinutes: 60,
  goal: "Use Claude Code's built-in web abilities, try planning before building, and create your first real files — with understanding.",
  outcome: "A real index.html that Claude built and you understand line by line, committed to git.",
  setup: "Continue your Claude Code session inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Let Claude search the web",
      body: [
        {
          type: "text",
          md: "[Claude Code](https://code.claude.com/docs) has web search built in. Ask it to look something up and it reports back — no extra setup, no browser.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Search the web for what a favicon is and summarize it.",
        },
      ],
    },
    {
      n: 2,
      title: "Let Claude read a specific page",
      body: [
        {
          type: "text",
          md: "Claude can also fetch a single page directly. Between search and fetch, it can research on its own.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Read the page at example.com and tell me what is on it.",
        },
      ],
    },
    {
      n: 3,
      title: "Try planning before building",
      body: [
        {
          type: "text",
          md: "Ask Claude to propose an approach first, so you can steer before any code exists. You review, adjust, then let it proceed. This is a light taste of plan mode, which you use fully in Phase 9.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Plan out a simple home page for this site before writing anything.",
        },
      ],
    },
    {
      n: 4,
      title: "Build your first real file",
      body: [
        {
          type: "text",
          md: "Now let Claude write it. Approve the change when it asks — your empty index.html gets real content.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Create a simple, clean index.html for this practice site with a heading and a short paragraph.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand what it built",
      body: [
        {
          type: "text",
          md: "The guided habit in full: have Claude walk you through the file. You now understand your own index.html, even though you did not type it.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Walk me through the index.html you just wrote, line by line, in plain terms.",
        },
      ],
    },
    {
      n: 6,
      title: "Save the snapshot",
      body: [
        {
          type: "text",
          md: "Leave Claude Code so you are back at your normal terminal prompt.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "/exit",
        },
        {
          type: "text",
          md: "Then commit your first Claude-built work into your history and push it.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "Add home page content" && git push',
        },
        {
          type: "callout",
          kind: "note",
          body: "Native web first. Claude Code can search the web and read pages on its own, with no extra tools. In Phase 6 you add Playwright to drive a full browser, but that is only for special cases like testing your own site. For looking things up, these built-in abilities are the default.",
        },
      ],
    },
  ],
  recap:
    "You used Claude's built-in web search and reading, planned before building, and shipped your first real page — one you understand and have committed.",
};
