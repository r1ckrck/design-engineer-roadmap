import type { Day } from "../types";
import { links } from "../links";

export const day23: Day = {
  id: 23,
  phaseId: 8,
  title: "Connecting MCPs",
  estMinutes: 60,
  goal: "Understand MCPs and connect two that earn their place — Figma and Context7.",
  outcome: "The Figma and Context7 MCPs connected at user level, anchoring both ends of the design-to-code seam.",
  setup: "Open Claude Code inside `my-first-site`.",
  steps: [
    {
      n: 1,
      title: "Understand what an MCP is",
      body: [
        {
          type: "text",
          md: `An [MCP](${links.claudeCodeMcp}) connects Claude Code to an outside service, giving it new abilities beyond your files — like reading a Figma design or fetching live documentation. A skill is a move you author; an MCP is a service you plug in.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain what an MCP is and how it differs from a skill.",
        },
      ],
    },
    {
      n: 2,
      title: "Keep MCPs minimal",
      body: [
        {
          type: "text",
          md: "Most people need very few. Two are worth it for a design engineer, and both belong at user level because you use them across projects.",
        },
      ],
    },
    {
      n: 3,
      title: "Connect the Figma MCP",
      body: [
        {
          type: "text",
          md: `The [Figma](${links.figma}) MCP lets Claude read your designs — variables, tokens, screenshots — and bring them into code. This is what makes the design-to-code seam reach all the way back to Figma.`,
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "claude mcp add --scope user figma -- npx -y figma-developer-mcp",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Help me connect the Figma MCP at user level and explain what it lets you do.",
        },
      ],
    },
    {
      n: 4,
      title: "Connect the Context7 MCP",
      body: [
        {
          type: "text",
          md: `[Context7](${links.context7}) fetches current documentation for libraries and frameworks, so Claude is not relying on older knowledge when it writes code.`,
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "claude mcp add --scope user context7 -- npx -y @upstash/context7-mcp",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Help me connect the Context7 MCP at user level and explain when it helps.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand the payoff together",
      body: [
        {
          type: "text",
          md: "Figma feeds real design decisions in; Context7 keeps the code current. The seam you built in Phase 7 now has both ends anchored.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "With Figma and Context7 connected, how does my design-to-code workflow improve?",
        },
      ],
    },
  ],
  recap:
    "You learned what an MCP is, connected Figma and Context7 at user level, and anchored both ends of the design-to-code seam — real designs in, current docs alongside.",
};
