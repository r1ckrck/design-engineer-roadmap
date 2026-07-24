import type { Day } from "../types";

export const day11: Day = {
  id: 11,
  phaseId: 5,
  title: "The Bones and the Skin",
  estMinutes: 60,
  goal: "Understand HTML (structure) and CSS (style) by directing changes to your home page.",
  outcome: "A styled home page you directed and can read — you know which lines set structure and which set style.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand HTML as structure",
      body: [
        {
          type: "text",
          md: "HTML is the skeleton of a page. Headings, paragraphs, sections, buttons. It says *what* things are, not how they look.",
        },
        {
          type: "callout",
          kind: "important",
          body: "The pattern for every day this phase: build, then understand. First ask Claude to make something, then ask it to walk you through what it wrote. The walk-through is where the learning happens.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Walk me through my index.html and explain how HTML describes the structure of a page.",
        },
      ],
    },
    {
      n: 2,
      title: "Understand CSS as style",
      body: [
        {
          type: "text",
          md: "CSS controls how things look — color, size, spacing, layout. It says *how* things appear. Structure and style are separate jobs: HTML is the bones, CSS is the skin.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Add some clean CSS to style the home page, then explain how CSS selectors target elements.",
        },
      ],
    },
    {
      n: 3,
      title: "Meet the box model",
      body: [
        {
          type: "text",
          md: "Every element on a page is a box with four parts: content, padding, a border, and margin. This one idea explains most of layout.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Explain the box model using the elements on my page as examples.",
        },
        {
          type: "disclosure",
          summary: "Why the box model is worth internalizing",
          body: [
            {
              type: "text",
              md: "Once you see every element as a box with padding inside its border and margin outside it, spacing stops feeling arbitrary. Most layout confusion is really box-model confusion.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Direct a real change",
      body: [
        {
          type: "text",
          md: "Now make a design decision and understand its implementation — the core loop of a design engineer.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Make the heading larger and add breathing room around the paragraph.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Show me exactly which lines changed and what each one does.",
        },
      ],
    },
  ],
  recap:
    "You directed a real style change and read the code behind it — HTML sets what things are, CSS sets how they look.",
};
