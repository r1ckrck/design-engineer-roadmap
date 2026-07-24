import type { Day } from "../types";
import { links } from "../links";

export const day26: Day = {
  id: 26,
  phaseId: 9,
  title: "Sub-Agents and Slash Commands",
  estMinutes: 60,
  goal: "Round out your picture of the harness with two smaller tools.",
  outcome: "A clear one-line grasp of how skills, sub-agents, workflows, and slash commands differ.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Defining your own sub-agent",
      body: [
        {
          type: "text",
          md: "Beyond the ones Claude spawns automatically, you can define a sub-agent with a specific role and instructions, for a job you repeat.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Briefly explain how I would define my own sub-agent and when it is worth doing.",
        },
      ],
    },
    {
      n: 2,
      title: "Keep it in proportion",
      body: [
        {
          type: "callout",
          kind: "note",
          body: "Most of the time, the session and its automatic helpers are all you need. Defining your own is for narrow, repeated roles — not everyday work.",
        },
      ],
    },
    {
      n: 3,
      title: "Understand slash commands",
      body: [
        {
          type: "text",
          md: `A [slash command](${links.claudeCode}) is a shortcut you type as \`/name\` to run a saved instruction — a quick way to trigger something you do often.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Briefly explain slash commands and give an example of a useful one.",
        },
      ],
    },
    {
      n: 4,
      title: "See how the pieces relate",
      body: [
        {
          type: "text",
          md: "Skills teach moves; sub-agents do delegated work; workflows run many at once; slash commands are quick triggers. Together they are your orchestration toolkit.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Summarize how skills, sub-agents, workflows, and slash commands differ, in one line each.",
        },
      ],
    },
  ],
  recap:
    "You rounded out the harness — defining your own sub-agents and using slash commands — and can now place skills, sub-agents, workflows, and slash commands in one picture.",
};
