import type { Day } from "../types";

export const day02: Day = {
  id: 2,
  phaseId: 1,
  title: "Moving Around the Terminal",
  estMinutes: 60,
  goal: "Navigate your file system and create the project folder you will use for the rest of the course.",
  outcome: "A my-first-site folder with css and js subfolders, made entirely from the terminal.",
  setup: "Open your terminal — the Terminal app on macOS, or Git Bash on Windows.",
  steps: [
    {
      n: 1,
      title: "See where you are",
      body: [
        {
          type: "text",
          md: "Run `pwd` to print your current folder — the **working directory**. This answers the first map question: where am I?",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "pwd",
        },
      ],
    },
    {
      n: 2,
      title: "See what is around you",
      body: [
        {
          type: "text",
          md: "`ls` lists the files and folders in your current location. `ls -la` shows everything, including hidden files, with details.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "ls",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "ls -la",
        },
      ],
    },
    {
      n: 3,
      title: "Move into a folder",
      body: [
        {
          type: "text",
          md: "`cd Documents` moves into your Documents folder. Run `pwd` again to confirm you moved. `cd ..` goes back up one level — `..` always means the folder above this one.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "cd Documents",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "cd ..",
        },
      ],
    },
    {
      n: 4,
      title: "Create your project folder",
      body: [
        {
          type: "text",
          md: "Make sure you are in Documents, then create the project you will carry through the whole course and move into it.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "cd Documents",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "mkdir my-first-site",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "cd my-first-site",
        },
      ],
    },
    {
      n: 5,
      title: "Give the project some structure",
      body: [
        {
          type: "text",
          md: "Create two folders inside it in one command, then confirm both appear. This is the skeleton of a simple website — a place for styles and a place for scripts.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "mkdir css js",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "ls",
        },
      ],
    },
    {
      n: 6,
      title: "Practice the file-moving basics",
      body: [
        {
          type: "text",
          md: "`cp source.txt copy.txt` duplicates a file. `mv oldname.txt newname.txt` renames; `mv file.txt css/` moves it into the css folder. `rm file.txt` removes a file.",
        },
        {
          type: "callout",
          kind: "important",
          body: "rm has no undo. Read the name twice before pressing enter.",
        },
      ],
    },
    {
      n: 7,
      title: "Read a file and clear the screen",
      body: [
        {
          type: "text",
          md: "`cat filename` prints a file's contents to the terminal. `clear` wipes the screen clean when it gets cluttered.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "clear",
        },
      ],
    },
  ],
  recap:
    "You can find where you are, see what is around you, move between folders, and you built my-first-site with css and js inside it — all from the terminal.",
};
