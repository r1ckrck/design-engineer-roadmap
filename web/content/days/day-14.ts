import type { Day } from "../types";

export const day14: Day = {
  id: 14,
  phaseId: 6,
  title: "Local Hosting and the Browser",
  estMinutes: 60,
  goal: "Run your site on your own machine and view it in a browser.",
  outcome: "Your site running live at a localhost address, updating as you direct changes.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand localhost and ports",
      body: [
        {
          type: "text",
          md: "`localhost` means \"this computer.\" When you run a website in development, your machine acts as a small web server, serving the site to you and no one else.",
        },
        {
          type: "text",
          md: "A port is a numbered door on that server, like `5173`. The full address `localhost:5173` means \"the site being served on door 5173 of this computer.\"",
        },
      ],
    },
    {
      n: 2,
      title: "Start the dev server",
      body: [
        {
          type: "text",
          md: "Ask Claude to run the project. Behind this is usually the `npm run dev` command, which starts the server and prints a `localhost` address.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Start the development server for this site and tell me the address to open.",
        },
      ],
    },
    {
      n: 3,
      title: "Open it and look",
      body: [
        {
          type: "text",
          md: "Open the address in your browser. There is your site, running live. This is the first time you see what you have been directing — take it in as a designer.",
        },
      ],
    },
    {
      n: 4,
      title: "Watch it update live",
      body: [
        {
          type: "text",
          md: "With the server still running, ask Claude to change something visible — a color, a heading. Switch to the browser. It updates almost instantly. This live-reload is why development feels fast.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand what is happening",
      body: [
        {
          type: "text",
          md: "Ask Claude to explain the mechanics, so local hosting stops being magic.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: 'Explain what "npm run dev" is doing and why the browser updates when a file changes.',
        },
        {
          type: "disclosure",
          summary: "Why the browser updates on its own",
          body: [
            {
              type: "text",
              md: "The dev server watches your files. When one changes, it pushes just that change to the open page instead of reloading everything — so you see the result the moment you direct it.",
            },
          ],
        },
      ],
    },
  ],
  recap:
    "You started a dev server, opened your site at a localhost address, and watched it update live as you directed changes.",
};
