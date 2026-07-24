import type { Day } from "../types";
import { links } from "../links";

export const day21: Day = {
  id: 21,
  phaseId: 8,
  title: "Build Your Own Skill",
  estMinutes: 60,
  goal: "Create a small skill for a repeatable task in your project.",
  outcome: "A working skill of your own that Claude fires on a matching request.",
  setup: "Open Claude Code inside `my-first-site`.",
  steps: [
    {
      n: 1,
      title: "Pick a repeatable job",
      body: [
        {
          type: "text",
          md: 'Think of something you do more than once — for example, "add a new page with the site\'s standard layout and styling." A good skill captures a task you would otherwise re-explain every time.',
        },
      ],
    },
    {
      n: 2,
      title: "Draft the skill",
      body: [
        {
          type: "text",
          md: `Have Claude scaffold the [skill](${links.claudeCodeSkills}), starting with the \`SKILL.md\`. Read the description it writes — that is the trigger that will fire the skill later.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Help me create a skill that adds a new page using this site's layout and tokens. Start with the SKILL.md.",
        },
      ],
    },
    {
      n: 3,
      title: "Keep it lean with references",
      body: [
        {
          type: "text",
          md: "If the instructions get long, split them. You just applied progressive disclosure to your own skill.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Move the detailed steps into a reference file and keep SKILL.md short, pointing to it.",
        },
      ],
    },
    {
      n: 4,
      title: "Try it out",
      body: [
        {
          type: "text",
          md: "Watch it follow your own instructions. You have taught Claude Code a move that is yours.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Use the skill to add an About page.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand orchestrator versus portable",
      body: [
        {
          type: "text",
          md: "Some skills are self-contained and work anywhere — **portable**. Others coordinate a specific project and reference its paths — **orchestrator**. Which one you built depends on whether it leans on this project.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Is the skill I built portable or project-specific, and what would make it one or the other?",
        },
      ],
    },
  ],
  recap:
    "You built a skill from a repeatable task, kept it lean with a reference file, ran it, and learned the portable-versus-orchestrator distinction.",
};
