import type { Day } from "../types";
import { links } from "../links";

export const day10: Day = {
  id: 10,
  phaseId: 4,
  title: "Make It Portable",
  estMinutes: 60,
  goal: "Set up the project so anyone, on any operating system, can clone it and run it without changes.",
  outcome: "Four small files committed — .gitignore, .nvmrc, packageManager, .gitattributes — that let anyone clone the project and run it on any machine.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand the portability problem",
      body: [
        {
          type: "text",
          md: "You build on your machine. Someone else clones it onto theirs — maybe a different operating system. What has to be true for it to just work?",
        },
        {
          type: "text",
          md: "The answer is a handful of small files that travel in the repo and settle these questions once.",
        },
      ],
    },
    {
      n: 2,
      title: "Keep generated files out of Git",
      body: [
        {
          type: "text",
          md: "Some files are regenerated automatically and should never be tracked — they bloat the repo and differ per machine.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Create a .gitignore that excludes node_modules and common build output folders.",
        },
      ],
    },
    {
      n: 3,
      title: "Pin the Node version",
      body: [
        {
          type: "text",
          md: `Different [Node](${links.node}) versions can break a project. Pinning one keeps everyone aligned.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Add an .nvmrc file pinning a recent LTS Node version, and explain how a teammate uses it.",
        },
      ],
    },
    {
      n: 4,
      title: "Pin the package manager",
      body: [
        {
          type: "text",
          md: "Projects should agree on which tool installs their dependencies.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: 'Add a packageManager field so everyone uses the same tool, and explain what "corepack enable" does.',
        },
      ],
    },
    {
      n: 5,
      title: "Settle line endings",
      body: [
        {
          type: "text",
          md: "Windows and Mac store line endings differently, which can create noise in Git. One file fixes it for everyone.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Add a .gitattributes that normalizes line endings across operating systems.",
        },
      ],
    },
    {
      n: 6,
      title: "Understand what you just did",
      body: [
        {
          type: "text",
          md: "Before committing, ask for a plain-language summary so you own each file, not just the result.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Summarize what these four files do and why they make the project portable.",
        },
        {
          type: "callout",
          kind: "important",
          body: "Why this is a design-engineer skill: these four small files are the difference between \"works on my machine\" and \"works everywhere.\" You did each with one prompt, but you now understand each one.",
        },
        {
          type: "text",
          md: "Commit the result. Now anyone can clone and run it.",
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
          text: 'git add . && git commit -m "Make the project portable" && git push',
        },
      ],
    },
  ],
  recap:
    "You added four small files that make the project clone-and-run on any machine, turning a personal experiment into something a team can use.",
};
