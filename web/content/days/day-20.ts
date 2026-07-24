import type { Day } from "../types";
import { links } from "../links";

export const day20: Day = {
  id: 20,
  phaseId: 8,
  title: "How a Skill Is Built",
  estMinutes: 60,
  goal: "Understand the anatomy of a skill by reading a real one.",
  outcome: "A clear mental model of what a SKILL.md contains and how it triggers.",
  setup: "Open Claude Code inside `my-first-site`.",
  steps: [
    {
      n: 1,
      title: "Understand what a skill is",
      body: [
        {
          type: "text",
          md: `A [skill](${links.claudeCodeSkills}) is a folder with a \`SKILL.md\` file at its center. That file tells Claude when to use the skill and how to do the task — a repeatable move you teach it once and reuse.`,
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain what a Claude Code skill is and what a SKILL.md file contains.",
        },
      ],
    },
    {
      n: 2,
      title: "Learn the trigger description",
      body: [
        {
          type: "text",
          md: "The frontmatter at the top of `SKILL.md` holds a name and a description. The description is a trigger — it tells Claude the kinds of requests this skill should handle.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain how a skill's description acts as a trigger, using examples of phrases that would match.",
        },
      ],
    },
    {
      n: 3,
      title: "Understand progressive disclosure",
      body: [
        {
          type: "text",
          md: "A good skill keeps its `SKILL.md` short and pushes deeper detail into separate reference files that load only when needed. This keeps context lean.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: 'Explain "progressive disclosure" in a skill — a short main file that points to references loaded on demand.',
        },
        {
          type: "disclosure",
          summary: "Why keep the main file short",
          body: [
            {
              type: "text",
              md: "Everything in `SKILL.md` loads the moment the skill fires, whether or not the task needs it. Detail parked in references stays out of context until Claude reaches for it — so the skill can be deep without being heavy.",
            },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Read a real skill",
      body: [
        {
          type: "text",
          md: "Seeing a real one makes the pattern concrete. Have Claude open one already on your system and walk you through its parts.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Find a SKILL.md on my system and walk me through its parts — frontmatter, body, and any references.",
        },
      ],
    },
  ],
  recap:
    "A skill is a folder built around SKILL.md — a triggering description up top, steps in the body, and deeper detail in references loaded only when needed.",
};
