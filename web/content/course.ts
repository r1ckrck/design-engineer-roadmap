import type { Course } from "./types";

// Course structure — phases and day metadata. Full day content lives in content/days/.

export const course: Course = {
  title: "Design Engineer Roadmap",
  tagline: "From designer to design engineer — build and ship with Claude Code.",
  phases: [
    {
      id: 0, title: "Orient", focus: "Setup and mindset", arc: "foundations", dayIds: [1],
      mapFirst: ["What is each tool for, and which one will you actually talk to?"],
    },
    {
      id: 1, title: "Operate", focus: "Terminal and IDE, just enough", arc: "foundations", dayIds: [2, 3],
      mapFirst: ["Where am I in the file system, and where do I want to end up?"],
    },
    {
      id: 2, title: "Version control", focus: "Git and GitHub", arc: "foundations", dayIds: [4, 5],
      mapFirst: ["What is a commit, and what is a repository?"],
    },
    {
      id: 3, title: "Claude Code core", focus: "Your primary tool", arc: "foundations", dayIds: [6, 7],
      mapFirst: ["What can Claude Code do natively, before you add anything?"],
    },
    {
      id: 4, title: "Context engineering", focus: "Structure a project so an agent thrives", arc: "engineering", dayIds: [8, 9, 10],
      mapFirst: ["What kinds of things live here?", "What is the smallest set of files a task needs?"],
    },
    {
      id: 5, title: "Web, guided", focus: "Read and direct real code", arc: "engineering", dayIds: [11, 12, 13],
      mapFirst: ["What is this technology for, and how does it fit with the others?"],
    },
    {
      id: 6, title: "See it running", focus: "Local hosting and the feedback loop", arc: "engineering", dayIds: [14, 15, 16],
      mapFirst: ["Where is this running, and how do I reach it?"],
    },
    {
      id: 7, title: "Design-to-code seam", focus: "Tokens as the contract", arc: "engineering", dayIds: [17, 18, 19],
      mapFirst: ["Where does each design decision live?"],
    },
    {
      id: 8, title: "Extending Claude Code", focus: "Skills and MCPs", arc: "engineering", dayIds: [20, 21, 22, 23],
      mapFirst: ["Everywhere, or just here? That decides where a skill or MCP goes."],
    },
    {
      id: 9, title: "Orchestration and harness tools", focus: "Plan mode and workflows", arc: "engineering", dayIds: [24, 25, 26],
      mapFirst: ["Does this task earn orchestration, or is a plain prompt enough?"],
    },
    {
      id: 10, title: "Capstone and deploy", focus: "Design to shipped", arc: "engineering", dayIds: [27, 28],
      mapFirst: ["What is this, how much does it need, and where will it run?"],
    },
  ],
};

export const dayTitles: Record<number, string> = {
  1: "Getting Oriented and Installing Your Tools",
  2: "Moving Around the Terminal",
  3: "Working in the Editor",
  4: "Tracking Changes Locally",
  5: "Backing Up to GitHub",
  6: "Meeting Claude Code",
  7: "Web, Planning, and Your First Real Files",
  8: "Structure by Concern and the Router File",
  9: "Tiers, Load Tables, and Iteration Discipline",
  10: "Make It Portable",
  11: "The Bones and the Skin",
  12: "Components and Why They Exist",
  13: "Tailwind and Design Tokens",
  14: "Local Hosting and the Browser",
  15: "The Feedback Loop and Other Ways to Run",
  16: "Driving a Real Browser with Playwright",
  17: "Tokens as the Contract",
  18: "Components That Document Themselves",
  19: "Working with Media Assets",
  20: "How a Skill Is Built",
  21: "Build Your Own Skill",
  22: "Scope, and Installing the Bundled Skills",
  23: "Connecting MCPs",
  24: "Plan Mode",
  25: "Workflows and Parallel Agents",
  26: "Sub-Agents and Slash Commands",
  27: "From Design to Built",
  28: "Package, Ship, and Look Back",
};

// The two arcs, in order — shared by the nav list and the journey map.
export const arcs = [
  { key: "foundations", label: "Foundations" },
  { key: "engineering", label: "Design Engineering" },
] as const;
