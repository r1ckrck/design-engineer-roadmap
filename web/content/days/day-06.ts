import type { Day } from "../types";

export const day06: Day = {
  id: 6,
  phaseId: 3,
  title: "Meeting Claude Code",
  estMinutes: 60,
  goal: "Start Claude Code, learn how it asks permission, and give it project context.",
  outcome: "A running Claude Code session and a CLAUDE.md that seeds your project's memory.",
  setup: "Open your terminal inside my-first-site (or the editor's built-in terminal there).",
  steps: [
    {
      n: 1,
      title: "Start Claude Code",
      body: [
        {
          type: "text",
          md: "[Claude Code](https://code.claude.com/docs) is an AI agent that lives in your terminal. Starting it opens an interactive session — you are now talking to the agent.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "claude",
        },
        {
          type: "text",
          md: "From here you type in plain English, not commands. Say what you want; the agent works out how.",
        },
      ],
    },
    {
      n: 2,
      title: "Ask it to look around",
      body: [
        {
          type: "text",
          md: "Claude can read your project on its own. Ask it what is here and watch it work out the structure without you explaining it.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "What files and folders are in this project?",
        },
      ],
    },
    {
      n: 3,
      title: "Practice the guided habit immediately",
      body: [
        {
          type: "text",
          md: "Never accept work you do not understand. From the very first prompt, ask Claude to explain — reading its answer is the point, not a detour.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what an index.html file is for, in simple terms.",
        },
        {
          type: "callout",
          kind: "important",
          body: "Guided, not blind. You are the designer directing the work — you keep the intent and understanding, Claude keeps the typing. Blind prompting is how people end up with software they cannot fix.",
        },
      ],
    },
    {
      n: 4,
      title: "Understand permissions",
      body: [
        {
          type: "text",
          md: "When Claude wants to change a file or run a command, it asks first and shows you exactly what it will do. You approve or decline each time.",
        },
        {
          type: "callout",
          kind: "note",
          body: "This is your safety net — nothing happens to your project without your yes. As you trust a task you can let it proceed without asking, but start by reading each request.",
        },
      ],
    },
    {
      n: 5,
      title: "Give the project a memory with CLAUDE.md",
      body: [
        {
          type: "text",
          md: "CLAUDE.md is a plain file Claude reads automatically every session. It holds facts about your project so you do not repeat yourself. Ask Claude to create one, then open it and read what it made.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Create a CLAUDE.md that says this is a simple practice website with css and js folders.",
        },
        {
          type: "disclosure",
          summary: "Why this matters",
          body: [
            {
              type: "text",
              md: "This small file is the seed of a big idea you will grow in Phase 4. Context you write down once loads every session, so the project itself remembers how it is built.",
            },
          ],
        },
      ],
    },
    {
      n: 6,
      title: "See what Claude is working with",
      body: [
        {
          type: "text",
          md: "Run /context to show what Claude currently has loaded — your files, the CLAUDE.md, and more. Understanding what is in context is understanding what Claude knows right now.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "/context",
        },
      ],
    },
  ],
  recap:
    "You started Claude Code, saw how it asks permission before changing anything, and gave the project its first memory with a CLAUDE.md.",
};
