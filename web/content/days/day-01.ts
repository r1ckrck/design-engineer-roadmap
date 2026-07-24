import type { Day } from "../types";

export const day01: Day = {
  id: 1,
  phaseId: 0,
  title: "Getting Oriented and Installing Your Tools",
  estMinutes: 60,
  goal: "Understand the role you are growing into, then install the toolchain on macOS or Windows.",
  outcome:
    "The four tools installed and confirmed working, plus your own note on what each one is for.",
  setup: "Set aside about an hour. You will install on either macOS or Windows — no IT and no WSL needed.",
  steps: [
    {
      n: 1,
      title: "Know what a design engineer is",
      body: [
        {
          type: "text",
          md: "A design engineer is a designer who can build and ship the thing, not just describe it. You already think in flows, hierarchy, and structure. What you are adding is the ability to turn that thinking into working software — with an AI coding partner doing the typing while you hold the intent.",
        },
        {
          type: "text",
          md: "You will not be memorizing code. You will direct an agent called Claude Code to write it, read what it produces, and understand enough of the architecture to steer. That is the whole game: judgment over syntax.",
        },
      ],
    },
    {
      n: 2,
      title: "Meet the four tools",
      body: [
        {
          type: "text",
          md: "Four tools make up your workbench, each with one job. You do not need to understand them deeply yet — you need them installed and confirmed working. Understanding arrives as you use them.",
        },
        {
          type: "text",
          md: "The **editor** ([VS Code](https://code.visualstudio.com) or [Cursor](https://cursor.com)) is where you see and organize files. **[Node](https://nodejs.org)** is a JavaScript runtime that runs the websites and tools you build. **[Claude Code](https://code.claude.com/docs/en/setup)** is an AI coding agent in your terminal that writes and edits code on your direction. **[Git](https://git-scm.com)** is a version-control system that tracks every change and backs your work up.",
        },
      ],
    },
    {
      n: 3,
      title: "Get a code editor",
      body: [
        {
          type: "text",
          md: "Download [VS Code](https://code.visualstudio.com) or [Cursor](https://cursor.com). Install it the normal way — drag to Applications on Mac, run the installer on Windows — then open it once to confirm it launches. This course uses VS Code from here on.",
        },
      ],
    },
    {
      n: 4,
      title: "Install Git",
      body: [
        {
          type: "text",
          md: "The order matters on Windows: install Git before Claude Code, so Claude Code can find it.",
        },
        {
          type: "ostabs",
          mac: [
            {
              type: "text",
              md: "Open the Terminal app and check whether Git is already there. If it is missing, macOS offers to install it — accept.",
            },
            {
              type: "copyable",
              kind: "command",
              label: "Run in terminal",
              text: "git --version",
            },
          ],
          windows: [
            {
              type: "text",
              md: "Download [Git for Windows](https://git-scm.com/downloads/win) and run the installer with its default options. This also gives you Git Bash — see the note below.",
            },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Install Node.js",
      body: [
        {
          type: "text",
          md: "Go to [nodejs.org](https://nodejs.org) and download the LTS (long-term support) version. Run the installer with default options on either platform. This gives you both `node` and `npm` (Node's package installer).",
        },
      ],
    },
    {
      n: 6,
      title: "Install Claude Code",
      body: [
        {
          type: "text",
          md: "On macOS, open Terminal and run the install command. On Windows, open PowerShell (not Command Prompt) and run the PowerShell command. See the [setup docs](https://code.claude.com/docs/en/setup) if you get stuck.",
        },
        {
          type: "ostabs",
          mac: [
            {
              type: "copyable",
              kind: "command",
              label: "Run in terminal",
              text: "curl -fsSL https://claude.ai/install.sh | bash",
            },
          ],
          windows: [
            {
              type: "copyable",
              kind: "command",
              label: "Run in terminal",
              runIn: "powershell",
              text: "irm https://claude.ai/install.ps1 | iex",
            },
          ],
        },
        {
          type: "callout",
          kind: "note",
          body: "Claude Code requires a Claude Pro or Max subscription (or API access). The first time you run `claude`, it opens your browser to log in. If `claude --version` works but login fails, check your plan at claude.com.",
        },
      ],
    },
    {
      n: 7,
      title: "Confirm everything works",
      body: [
        {
          type: "text",
          md: "Close and reopen your terminal first, so it picks up the new tools. Then run each command below — each should print a version number, not an error.",
        },
        {
          type: "copyable",
          kind: "command",
          label: "Run in terminal",
          text: "node --version\ngit --version\nclaude --version",
        },
        {
          type: "callout",
          kind: "note",
          body: "Windows: no WSL, and why Git matters. Older guides told you to install WSL (a Linux system inside Windows). You no longer need it — Claude Code runs natively on Windows. Installing Git for Windows also gives you Git Bash, a terminal that behaves like the Mac one, so the commands in this course match on both systems. On Windows, prefer Git Bash.",
        },
      ],
    },
    {
      n: 8,
      title: "Map before you make",
      body: [
        {
          type: "text",
          md: "Before you close this session, do one small thing that sets the tone. Open a plain text note and answer, in your own words: what is each of these four tools for, and which one will you actually be talking to? You just read the answers — writing them yourself is the point.",
        },
        {
          type: "callout",
          kind: "tip",
          body: "This is the map-before-you-make habit in miniature. At every step from here, you pause to understand the layout before building on it — where files live, how the AI is called, what is running where. You never blind-prompt \"just build it.\" Holding the system in your head is what makes you an engineer rather than a passenger.",
        },
        {
          type: "disclosure",
          summary: "Turn your note into a habit",
          body: [
            {
              type: "text",
              md: "Once Claude Code is running, you can hand it the same question and compare answers — a fast way to check your own understanding against its explanation.",
            },
            {
              type: "copyable",
              kind: "prompt",
              label: "Paste into Claude Code",
              text: "In plain language, tell me what each of these four tools is for — a code editor, Node, Claude Code, and Git — and which one I actually talk to.",
            },
          ],
        },
      ],
    },
  ],
  recap:
    "You learned what a design engineer is and installed the four tools — editor, Node, Claude Code, and Git — confirming each prints a version, so your machine is ready to build.",
};
