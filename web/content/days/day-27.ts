import type { Day } from "../types";
import { links } from "../links";

export const day27: Day = {
  id: 27,
  phaseId: 10,
  title: "From Design to Built",
  estMinutes: 60,
  goal: "Take a small design and build it end to end, using everything from the earlier phases.",
  outcome: "A working interface built from a real design — right-sized stack, clean context skeleton, tokens seam, committed.",
  setup:
    "Open Claude Code. Choose a small design to build — a landing page, a simple tool, or a polished version of your practice site.",
  steps: [
    {
      n: 1,
      title: "Pick the stack with atelier",
      body: [
        {
          type: "text",
          md: "Start by right-sizing. The atelier skill triages how much this project actually needs and routes you to a fitting stack instead of the biggest one.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Using the atelier skill, decide the right stack for this project.",
        },
        {
          type: "text",
          md: "Read its reasoning — you are learning to right-size, not over-build.",
        },
      ],
    },
    {
      n: 2,
      title: "Lay the context skeleton",
      body: [
        {
          type: "text",
          md: "This is Phase 4 in action: organize by concern, a router CLAUDE.md that points rather than dumps, portability files in place.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Set up the project structure and a router CLAUDE.md for this build.",
        },
      ],
    },
    {
      n: 3,
      title: "Build through the tokens seam",
      body: [
        {
          type: "text",
          md: "This is Phase 7 in action: decisions become tokens, tokens become components, nothing hardcoded.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Define the design tokens for this design, then build the interface using them.",
        },
        {
          type: "callout",
          kind: "tip",
          body: `If you have a [Figma](${links.figma}) design, use the Figma MCP to pull the decisions in directly.`,
        },
      ],
    },
    {
      n: 4,
      title: "Run it and refine",
      body: [
        {
          type: "text",
          md: "Start the dev server, open it, and run the look-feedback-change loop until it feels right. Use the guided habit throughout: understand what each part does as it comes together.",
        },
      ],
    },
    {
      n: 5,
      title: "Commit your progress",
      body: [
        { type: "text", md: "Save the capstone so far." },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: 'git add . && git commit -m "Build the capstone" && git push',
        },
      ],
    },
  ],
  recap:
    "You carried a design from stack choice through a clean skeleton and the tokens seam to a running interface — the whole build, in your hands.",
};
