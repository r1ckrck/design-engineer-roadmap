import type { Day } from "../types";

export const day28: Day = {
  id: 28,
  phaseId: 10,
  title: "Package, Ship, and Look Back",
  estMinutes: 60,
  goal: "Capture a repeatable part as a skill, deploy the project live, and reflect on how far you have come.",
  outcome: "A skill for the repeat work, the project live at a public address, and a clear view of your own end-to-end workflow.",
  setup: "Open Claude Code in your capstone project.",
  steps: [
    {
      n: 1,
      title: "Write a skill for the repeat work",
      body: [
        {
          type: "text",
          md: "Find one task you did more than once and capture it. This is Phase 8 in action.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Turn this repeated task into a skill for the project.",
        },
        {
          type: "text",
          md: "Decide its scope: project level if it is tied to this build, user level if you will want it everywhere.",
        },
      ],
    },
    {
      n: 2,
      title: "Understand what deploying means",
      body: [
        {
          type: "text",
          md: "Deploying puts your project on a real server so anyone can reach it at a public web address — not just you on `localhost`.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what happens when I deploy this site and how a public address is different from localhost.",
        },
      ],
    },
    {
      n: 3,
      title: "Deploy it live",
      body: [
        {
          type: "text",
          md: "The common path is a hosting service that connects to your GitHub repo, builds the project, and serves it at a public URL. Your own server is the alternative when you want full control.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Help me deploy this project to a hosting service, and walk me through each step.",
        },
      ],
    },
    {
      n: 4,
      title: "See it in the world",
      body: [
        {
          type: "text",
          md: "Open your public address. Your work is live, reachable by anyone. You took it from an empty folder to a shipped product.",
        },
      ],
    },
    {
      n: 5,
      title: "Look back at the whole journey",
      body: [
        {
          type: "text",
          md: "You started by installing four tools. You now structure projects, direct an AI agent with intent, build real interfaces, run and test them, connect design to code through tokens, extend your tools with skills and MCPs, and ship. That is a design engineer.",
        },
        {
          type: "callout",
          kind: "note",
          body: "Where to go from here. Growth from this point is practice, not new theory. Build more projects, each a little more ambitious than the last — a project with real data, one with a backend, one that others use. The tools stay the same; your reach keeps growing.",
        },
      ],
    },
  ],
  recap:
    "You packaged the repeat work into a skill, shipped the project to a public address, and named the workflow that is now yours — a design engineer who builds and ships.",
};
