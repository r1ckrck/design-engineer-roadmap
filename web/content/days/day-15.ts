import type { Day } from "../types";

export const day15: Day = {
  id: 15,
  phaseId: 6,
  title: "The Feedback Loop and Other Ways to Run",
  estMinutes: 60,
  goal: "Practice the look-feedback-change loop, and understand that different things run in different ways.",
  outcome: "A worked loop of directed improvements, and the ability to tell apart the three ways software runs.",
  setup: "Have your dev server running, with the site open in your browser.",
  steps: [
    {
      n: 1,
      title: "Run the loop deliberately",
      body: [
        {
          type: "text",
          md: "Look at your site and name one thing you would improve as a designer. Tell Claude the change in plain terms. Watch the browser update. Judge the result. Repeat.",
        },
        {
          type: "callout",
          kind: "tip",
          body: "This loop — look, feedback, change, look — is how real interfaces get good. The seeing is the skill, not the typing.",
        },
      ],
    },
    {
      n: 2,
      title: "Understand: not everything runs the same way",
      body: [
        {
          type: "text",
          md: "Your site runs through a Node dev server. Other things run differently, and it helps to recognize which is which — because how something runs tells you how to view it and give feedback on it.",
        },
      ],
    },
    {
      n: 3,
      title: "Node dev server",
      body: [
        {
          type: "text",
          md: "Modern web projects, like yours, run with a dev server you start with a command. It serves on a `localhost` port with live reload.",
        },
      ],
    },
    {
      n: 4,
      title: "Python-hosted",
      body: [
        {
          type: "text",
          md: "Some tools are built in Python and run their own small server. A 3D model viewer or a data tool might start with a Python command and open on its own `localhost` port.",
        },
      ],
    },
    {
      n: 5,
      title: "Static file",
      body: [
        {
          type: "text",
          md: "The simplest case: a single HTML file with no server at all. You just open the file in a browser. No `localhost`, no port.",
        },
      ],
    },
    {
      n: 6,
      title: "Know which you are looking at",
      body: [
        {
          type: "text",
          md: "Ask Claude to place your project among the three, so recognizing the shape becomes automatic.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "For this project, which of these three is it, and how would that change if it were a plain HTML file or a Python tool?",
        },
      ],
    },
  ],
  recap:
    "You ran the look-feedback-change loop by hand, and learned to tell a Node dev server, a Python-hosted tool, and a static file apart.",
};
