import type { Day } from "../types";
import { links } from "../links";

export const day24: Day = {
  id: 24,
  phaseId: 9,
  title: "Plan Mode",
  estMinutes: 60,
  goal: "Use plan mode to settle an approach before building, end to end.",
  outcome: "A feature you shipped through the full draft-review-accept-build loop.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand why planning first helps",
      body: [
        {
          type: "text",
          md: "For anything beyond a small change, deciding the approach before writing code prevents wasted work and surprises. You review the thinking while it is still cheap to change.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain when planning before building is worth it, and when it is overkill.",
        },
      ],
    },
    {
      n: 2,
      title: "Enter plan mode",
      body: [
        {
          type: "text",
          md: `[Plan mode](${links.claudeCode}) tells Claude to research and propose a plan without changing anything yet.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "In plan mode, plan how to add a simple contact page to this site.",
        },
      ],
    },
    {
      n: 3,
      title: "Review the plan",
      body: [
        {
          type: "text",
          md: "Claude returns a plan — the files it would touch, the steps, the approach. Read it as the decision-maker.",
        },
        {
          type: "callout",
          kind: "tip",
          body: "This is your moment to steer. Adjust anything that does not match your intent before a single line is written.",
        },
      ],
    },
    {
      n: 4,
      title: "Accept and build",
      body: [
        {
          type: "text",
          md: "When the plan is right, approve it. Claude then builds exactly what you agreed to.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Walk me through what you built against the plan.",
        },
        {
          type: "text",
          md: "The plan and the result should match.",
        },
      ],
    },
    {
      n: 5,
      title: "Feel the difference",
      body: [
        {
          type: "text",
          md: "Plan mode is the full version of the light planning you tried in Phase 3. For real features, this draft-review-accept-build loop is how you keep control of larger work.",
        },
      ],
    },
  ],
  recap:
    "You ran a feature through plan mode end to end — drafting an approach, reviewing it, accepting it, and building exactly what you agreed to.",
};
