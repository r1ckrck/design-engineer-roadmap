import type { Day } from "../types";

export const day17: Day = {
  id: 17,
  phaseId: 7,
  title: "Tokens as the Contract",
  estMinutes: 60,
  goal: "Build the pipeline from design decisions to tokens to components, with nothing hardcoded.",
  outcome:
    "A traceable seam: a decisions doc, a token file, and components that read tokens by name — never raw values.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand the seam as a contract",
      body: [
        {
          type: "text",
          md: "Tokens are the agreement between design and code. Design names the decisions; code consumes them by name. Neither side hardcodes a raw value.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain how design tokens act as a contract between a design and its code.",
        },
        {
          type: "disclosure",
          summary: "Why a contract, not a copy",
          body: [
            {
              type: "text",
              md: "When an engineer retypes a hex value, the design and the code become two separate copies that drift the moment one changes. A named token is one shared source both sides point at, so they can't disagree.",
            },
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Separate decisions from values",
      body: [
        {
          type: "text",
          md: "Keep two homes. A decisions doc holds the reasoning — why the primary color is what it is, what the spacing scale means. A token file holds the actual values.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Create a docs/design-decisions.md for the reasoning, and make sure the real values live in the token file. Explain the split.",
        },
      ],
    },
    {
      n: 3,
      title: "Trace a value end to end",
      body: [
        {
          type: "text",
          md: "Following one value along its full path is how you understand the seam. Every on-screen value should trace back to a single decision.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Take the primary color and show me its full path — from the decision, to the token, to the CSS variable, to where a component uses it.",
        },
      ],
    },
    {
      n: 4,
      title: "Understand design as the source",
      body: [
        {
          type: "text",
          md: "In real work the decisions often start in a design tool like [Figma](https://www.figma.com), and the tokens are pulled from it so code and design never drift. You will connect Figma directly in Phase 8; today the point is the pipeline itself.",
        },
      ],
    },
    {
      n: 5,
      title: "Prove the payoff",
      body: [
        {
          type: "text",
          md: "One decision, many updates, all traceable — that is the contract holding.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Change one token and list every place on the site that updates.",
        },
        {
          type: "callout",
          kind: "tip",
          body: "When you can trace a color on screen back to a single named decision, the seam is working.",
        },
      ],
    },
  ],
  recap:
    "You built the design-to-code seam: decisions, tokens, and components that read values by name, so one change flows everywhere.",
};
