import type { Day } from "../types";

export const day05: Day = {
  id: 5,
  phaseId: 2,
  title: "Backing Up to GitHub",
  estMinutes: 60,
  goal: "Push your local history to GitHub so it is safe and shareable.",
  outcome: "Your project mirrored on GitHub, with the everyday push loop in hand.",
  setup: "Create a free account at [github.com](https://github.com) if you do not have one.",
  steps: [
    {
      n: 1,
      title: "Create an empty repository online",
      body: [
        {
          type: "text",
          md: "On [GitHub](https://github.com), click the plus button, then New repository. Name it `my-first-site` and set it to Private or Public as you prefer.",
        },
        {
          type: "callout",
          kind: "important",
          body: "Do not add a README or .gitignore — your project already has files. Then click Create repository.",
        },
      ],
    },
    {
      n: 2,
      title: "Copy the connection address",
      body: [
        {
          type: "text",
          md: "GitHub shows a setup page with an HTTPS address ending in `.git`. Copy it; it looks like `https://github.com/you/my-first-site.git`.",
        },
      ],
    },
    {
      n: 3,
      title: "Connect your local project to GitHub",
      body: [
        {
          type: "text",
          md: "Back in your terminal, inside my-first-site, run the command below with your address. `origin` is just the standard nickname for your main cloud copy.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git remote add origin https://github.com/you/my-first-site.git",
        },
      ],
    },
    {
      n: 4,
      title: "Name your main branch",
      body: [
        {
          type: "text",
          md: "Rename your branch so it matches GitHub's default.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git branch -M main",
        },
      ],
    },
    {
      n: 5,
      title: "Push your history up",
      body: [
        {
          type: "text",
          md: "The `-u` sets this as the default destination, so future pushes are just `git push`. You may be asked to log in the first time.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "git push -u origin main",
        },
      ],
    },
    {
      n: 6,
      title: "See it on GitHub",
      body: [
        {
          type: "text",
          md: "Refresh your repository page. Your files and commit messages are now there.",
        },
      ],
    },
    {
      n: 7,
      title: "Practice the everyday loop",
      body: [
        {
          type: "text",
          md: "Change a file locally, commit it, then push to send it up. Refresh GitHub to watch it appear.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "your message" && git push',
        },
        {
          type: "callout",
          kind: "note",
          body: "Cloning is the reverse direction: git clone <address> downloads any repository — with its full history — onto your machine. It is how a teammate on Windows gets your project and runs it, an idea you will make solid in Phase 4.",
        },
      ],
    },
  ],
  recap:
    "You mirrored your local history to GitHub and learned the commit-then-push loop that keeps your work backed up and shareable.",
};
