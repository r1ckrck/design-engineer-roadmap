import type { Day } from "../types";
import { links } from "../links";

export const day22: Day = {
  id: 22,
  phaseId: 8,
  title: "Scope, and Installing the Bundled Skills",
  estMinutes: 60,
  goal: "Understand user versus project scope, and install the eight skills that come with this course.",
  outcome: "The eight bundled skills installed at user level, available in every project.",
  setup: "Open Claude Code inside `my-first-site`.",
  steps: [
    {
      n: 1,
      title: "Understand the two scopes",
      body: [
        {
          type: "text",
          md: "**User level** lives in your home folder's `.claude/skills/` and is available in every project. **Project level** lives in the project's own `.claude/skills/` and travels with the repo when someone clones it. The rule: general tools go user level; project-specific tools go project level.",
        },
      ],
    },
    {
      n: 2,
      title: "Decide where your new skill belongs",
      body: [
        {
          type: "text",
          md: "Your page-adding skill from yesterday is tied to this site, so it belongs at project level, committed with the repo. Let Claude confirm the reasoning.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "My new page-adding skill is tied to this site. Which scope should it use, and why?",
        },
      ],
    },
    {
      n: 3,
      title: "Meet the eight bundled skills",
      body: [
        {
          type: "text",
          md: `This course provides eight [skills](${links.claudeCodeSkills}) worth having everywhere — from deciding a stack to driving a browser. Install them at user level so every project can reach them. The eight are laid out in the panel beside this step.`,
        },
      ],
    },
    {
      n: 4,
      title: "Install them, on either OS",
      body: [
        {
          type: "text",
          md: "How you install differs by platform. On macOS a symlink keeps one source live everywhere; on Windows a copy avoids the permissions symlinks need. Either way the skill ends up in your user `.claude/skills/`.",
        },
        {
          type: "ostabs",
          mac: [
            {
              type: "text",
              md: "Link the skill folder into your user `.claude/skills/` so one source stays live everywhere:",
            },
            {
              type: "copyable",
              kind: "command",
              label: "Run in terminal",
              text: "ln -s ~/skills/atelier ~/.claude/skills/atelier",
            },
          ],
          windows: [
            {
              type: "text",
              md: "Copy the skill folder into your user `.claude/skills/` — a fixed snapshot, no extra permissions needed:",
            },
            {
              type: "copyable",
              kind: "command",
              label: "Run in PowerShell",
              text: "Copy-Item -Recurse ~\\skills\\atelier ~\\.claude\\skills\\atelier",
            },
          ],
        },
        {
          type: "text",
          md: "Or just let Claude do all eight for you — tell it which OS you are on.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Install these eight skills at user level. I am on macOS (or Windows) — use the right method for me.",
        },
        {
          type: "callout",
          kind: "note",
          body: "Symlink versus copy. A symlink points to one source folder, so editing the source updates the skill everywhere — good when you author it. A copy is a fixed snapshot — perfectly fine when you are just using a skill someone gave you. On Windows, copying avoids the admin rights symlinks require. Either way, the skill ends up in your user .claude/skills/.",
        },
      ],
    },
    {
      n: 5,
      title: "Confirm they are available",
      body: [
        {
          type: "text",
          md: "Check that all eight registered and see where they landed.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Which skills are now available to me, and where are they installed?",
        },
      ],
    },
  ],
  recap:
    "You learned user versus project scope — general tools go everywhere, project tools travel with the repo — and installed the eight bundled skills at user level.",
};
