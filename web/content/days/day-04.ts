import type { Day } from "../types";

export const day04: Day = {
  id: 4,
  phaseId: 2,
  title: "Tracking Changes Locally",
  estMinutes: 60,
  goal: "Turn my-first-site into a tracked repository and record your first snapshots.",
  outcome: "my-first-site under Git, with a few commits and a readable history.",
  setup: "Open your terminal (or the editor's built-in terminal) inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Tell Git who you are",
      body: [
        {
          type: "text",
          md: "[Git](https://git-scm.com) stamps every commit with a name and email. Set them once, globally, and every project inherits them.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git config --global user.name "Your Name"',
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git config --global user.email "you@example.com"',
        },
      ],
    },
    {
      n: 2,
      title: "Start tracking the project",
      body: [
        {
          type: "text",
          md: "Make sure you are inside my-first-site (run `pwd` to check). Then start tracking — this creates a hidden `.git` folder, and Git now watches this project.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git init",
        },
      ],
    },
    {
      n: 3,
      title: "Check the status",
      body: [
        {
          type: "text",
          md: 'Git lists your files as "untracked" — it can see them but is not yet saving them.',
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git status",
        },
      ],
    },
    {
      n: 4,
      title: "Stage your files",
      body: [
        {
          type: "text",
          md: "Staging chooses what goes into the next snapshot. The `.` means \"everything here.\" Run status again and the files show as staged, ready to commit.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git add .",
        },
      ],
    },
    {
      n: 5,
      title: "Take your first snapshot",
      body: [
        {
          type: "text",
          md: "The text in quotes is your message — a short note on what this snapshot contains.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git commit -m "Initial commit: project structure"',
        },
      ],
    },
    {
      n: 6,
      title: "Confirm and repeat",
      body: [
        {
          type: "text",
          md: 'Run status again; it should say "nothing to commit, working tree clean." Now make any small change and repeat the loop.',
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "describe the change"',
        },
        {
          type: "callout",
          kind: "note",
          body: "That loop — change, add, commit — is the heartbeat of version control.",
        },
      ],
    },
    {
      n: 7,
      title: "Read your history",
      body: [
        {
          type: "text",
          md: "See your snapshots, one per line, newest first. Each line is a short code (the commit's ID) and your message.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git log --oneline",
        },
        {
          type: "disclosure",
          summary: "Undo: a reference, not a drill",
          body: [
            {
              type: "text",
              md: "You do not need to memorize these today. Reach for them when you need them: `git restore <file>` discards unsaved changes to a file, `git restore --staged <file>` unstages while keeping the changes, `git commit --amend -m \"new\"` fixes the last commit's message, and `git log` shows the full history in detail.",
            },
          ],
        },
      ],
    },
  ],
  recap:
    "You put my-first-site under Git and learned the change-add-commit loop that records every snapshot of your work.",
};
