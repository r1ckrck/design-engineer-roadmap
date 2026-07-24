import type { Day } from "../types";
import { links } from "../links";

export const day25: Day = {
  id: 25,
  phaseId: 9,
  title: "Workflows and Parallel Agents",
  estMinutes: 60,
  goal: "Use a workflow to run several pieces of work at once and get one consolidated result.",
  outcome: "One merged summary produced by several agents working in parallel.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand sub-agents",
      body: [
        {
          type: "text",
          md: `[Claude Code](${links.claudeCode}) can launch helper agents — sub-agents — that work on their own and report back. The main session stays your point of contact.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain what a sub-agent is and why the main session uses them.",
        },
      ],
    },
    {
      n: 2,
      title: "Understand a workflow",
      body: [
        {
          type: "text",
          md: "A workflow launches many sub-agents at the same time, each on a different piece, then merges their results. Instead of researching five things one after another, you research all five at once.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain how a workflow runs many agents in parallel and consolidates their output.",
        },
      ],
    },
    {
      n: 3,
      title: "Run a parallel research task",
      body: [
        {
          type: "text",
          md: "Give it something genuinely multi-part. Several agents work at once; you get a single merged answer far faster than doing each in turn.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Research five ways to improve this site — accessibility, performance, layout, color, and copy — in parallel, then give me one consolidated summary.",
        },
      ],
    },
    {
      n: 4,
      title: "Read the consolidated result",
      body: [
        {
          type: "text",
          md: "Notice you received one organized summary, not five scattered ones. The workflow did the gathering and the merging.",
        },
      ],
    },
    {
      n: 5,
      title: "Know when to use it",
      body: [
        {
          type: "text",
          md: "Workflows shine when work splits into independent parts that can run at once. For a single, linear task, a normal prompt is better.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Given how workflows work, what kinds of tasks are they best and worst for?",
        },
      ],
    },
  ],
  recap:
    "You ran one ask across several agents at once and got a single merged result — the workflow gathered the pieces and consolidated them for you.",
};
