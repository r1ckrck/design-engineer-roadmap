import type { Day } from "../types";
import { links } from "../links";

export const day03: Day = {
  id: 3,
  phaseId: 1,
  title: "Working in the Editor",
  estMinutes: 60,
  goal: "Open your project in the editor, learn the panels, create your first files, and find the built-in terminal.",
  outcome: "my-first-site open in the editor with index.html and css/styles.css created by hand.",
  setup: `Open [VS Code](${links.vscode}).`,
  steps: [
    {
      n: 1,
      title: "Open your project folder",
      body: [
        {
          type: "text",
          md: "Go to File, then Open Folder, and choose the `my-first-site` folder you made yesterday. The left panel now shows your project — the css and js folders are there.",
        },
        {
          type: "ostabs",
          mac: [{ type: "text", md: "Open Folder shortcut: `Cmd + O`." }],
          windows: [{ type: "text", md: "Open Folder shortcut: `Ctrl + O`." }],
        },
      ],
    },
    {
      n: 2,
      title: "Learn the four regions",
      body: [
        {
          type: "text",
          md: "The **file explorer** on the left lists your files and folders. The **editor** in the center is where you read and change code. The **status bar** along the bottom shows the current file's details. The **activity bar** on the far left switches between files, search, and extensions.",
        },
      ],
    },
    {
      n: 3,
      title: "Create your first file",
      body: [
        {
          type: "text",
          md: "Right-click in the file explorer and choose New File. Name it `index.html` — this will be your site's home page. Leave it empty for now; Claude Code fills it in during Phase 5.",
        },
      ],
    },
    {
      n: 4,
      title: "Create a file inside a folder",
      body: [
        {
          type: "text",
          md: "Right-click the `css` folder, choose New File, and name it `styles.css`. Notice the file appears nested under css, matching the structure you built in the terminal.",
        },
      ],
    },
    {
      n: 5,
      title: "Open files fast",
      body: [
        {
          type: "text",
          md: "Start typing `index` in the quick-open box and the editor filters to matching files; press Enter to open. This is much faster than clicking.",
        },
        {
          type: "ostabs",
          mac: [{ type: "text", md: "Quick open: `Cmd + P`." }],
          windows: [{ type: "text", md: "Quick open: `Ctrl + P`." }],
        },
      ],
    },
    {
      n: 6,
      title: "Search across the project",
      body: [
        {
          type: "text",
          md: "Search inside the open file, or search across every file at once.",
        },
        {
          type: "ostabs",
          mac: [
            {
              type: "text",
              md: "In-file: `Cmd + F`. Across all files: `Cmd + Shift + F`.",
            },
          ],
          windows: [
            {
              type: "text",
              md: "In-file: `Ctrl + F`. Across all files: `Ctrl + Shift + F`.",
            },
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Find the built-in terminal",
      body: [
        {
          type: "text",
          md: "Press `` Ctrl + ` `` (the backtick key, below Escape) to open a terminal inside the editor. It already sits in your project folder — run `ls` to confirm. This is where you will run Claude Code from Phase 3 on, so your editor becomes your whole workbench.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "ls",
        },
        {
          type: "callout",
          kind: "note",
          body: "Windows: inside the editor you can pick which terminal opens. Choose Git Bash if prompted, so the commands you run match the Mac examples in this course. Set it in the terminal panel's dropdown, or in settings under \"default profile.\"",
        },
      ],
    },
  ],
  recap:
    "You opened your project in the editor, learned its four regions, created index.html and styles.css by hand, and found the built-in terminal where Claude Code will live.",
};
