---
title: "Phase 8: Extending Claude Code"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
     PHASE 8 : EXTENDING CLAUDE CODE

     two ways to extend:

     SKILLS = moves you teach it
        SKILL.md : name + trigger + steps
        load the detail on demand

     MCPs   = services you connect
        Figma . Context7

     scope: user (everywhere) . project (one repo)

        Days 20-23   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 8: Extending Claude Code

**Days 20-23 | ~1 hour per day**

Claude Code does a lot out of the box. This phase teaches you to give it more.

There are two ways to extend it. A *skill* is a repeatable move you teach it — a packaged set of instructions it follows when a matching task comes up. An *MCP* is a connection to an outside service, like Figma or a documentation source. Skills are moves you author; MCPs are services you plug in. Both are how you shape Claude Code around your own work.

::: tip
**Map first.** Before installing anything, ask where it should live. Something you will use in every project belongs at the user level, available everywhere. Something specific to one project belongs inside that project, travelling with it when shared. That single question — everywhere, or just here — decides where every skill and MCP goes.
:::

## Day 20: How a Skill Is Built

**Goal:** Understand the anatomy of a skill by reading a real one.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand what a skill is**
   - A skill is a folder with a `SKILL.md` file at its center. That file tells Claude when to use the skill and how to do the task.
   - Ask Claude: `Explain what a Claude Code skill is and what a SKILL.md file contains.`

2. **Learn the trigger description**
   - The frontmatter at the top of `SKILL.md` has a name and a description. The description is a trigger — it tells Claude the kinds of requests this skill should handle.
   - Ask Claude: `Explain how a skill's description acts as a trigger, using examples of phrases that would match.`

3. **Understand progressive disclosure**
   - A good skill keeps its `SKILL.md` short and pushes deeper detail into separate reference files that load only when needed. This keeps context lean.
   - Ask Claude: `Explain "progressive disclosure" in a skill — a short main file that points to references loaded on demand.`

4. **Read a real skill**
   - Ask Claude: `Find a SKILL.md on my system and walk me through its parts — frontmatter, body, and any references.`
   - Seeing a real one makes the pattern concrete.

## Day 21: Build Your Own Skill

**Goal:** Create a small skill for a repeatable task in your project.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Pick a repeatable job**
   - Think of something you do more than once — for example, "add a new page with the site's standard layout and styling."
   - A good skill captures a task you would otherwise re-explain every time.

2. **Draft the skill**
   - Ask Claude: `Help me create a skill that adds a new page using this site's layout and tokens. Start with the SKILL.md.`
   - Read the description it writes — that is the trigger that will fire the skill later.

3. **Keep it lean with references**
   - If the instructions get long, ask Claude: `Move the detailed steps into a reference file and keep SKILL.md short, pointing to it.`
   - You just applied progressive disclosure to your own skill.

4. **Try it out**
   - Ask Claude: `Use the skill to add an About page.`
   - Watch it follow your own instructions. You have taught Claude Code a move that is yours.

5. **Understand orchestrator versus portable**
   - Some skills are self-contained and work anywhere (portable). Others coordinate a specific project and reference its paths (orchestrator).
   - Ask Claude: `Is the skill I built portable or project-specific, and what would make it one or the other?`

## Day 22: Scope, and Installing the Bundled Skills

**Goal:** Understand user versus project scope, and install the eight skills that come with this course.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand the two scopes**
   - User level lives in your home folder's `.claude/skills/` and is available in every project.
   - Project level lives in the project's own `.claude/skills/` and travels with the repo when someone clones it.
   - The rule: general tools go user level; project-specific tools go project level.

2. **Decide where your new skill belongs**
   - Ask Claude: `My new page-adding skill is tied to this site. Which scope should it use, and why?`
   - Because it depends on this project, it belongs at project level, committed with the repo.

3. **Meet the eight bundled skills**
   - This course provides eight skills worth having everywhere. Install them at user level.

| Skill | What it does |
|--------------------|--------------------------------------------|
| atelier | Decide the tech stack a build needs |
| markset | Turn markdown into a polished PDF |
| coding-standards | Write clean, consistent code |
| code-simplifier | Refine code for clarity |
| frontend-design | Produce distinctive, production UI |
| testing | Verify it works; debug what breaks |
| media-processing | Convert, resize, optimize media |
| playwright-cli | Drive a real browser |
: The eight bundled skills, installed at user level.

4. **Install them, on either OS**
   - On macOS, skills are usually linked into place with a symlink so one source stays live everywhere.
   - On Windows, copying the skill folder into your user `.claude/skills/` is simplest, since symlinks need extra permissions.
   - Ask Claude: `Install these eight skills at user level. I am on macOS (or Windows) — use the right method for me.`

5. **Confirm they are available**
   - Ask Claude: `Which skills are now available to me, and where are they installed?`

::: note
**Symlink versus copy.** A symlink points to one source folder, so editing the source updates the skill everywhere — good when you author it. A copy is a fixed snapshot — perfectly fine when you are just using a skill someone gave you. On Windows, copying avoids the admin rights symlinks require. Either way, the skill ends up in your user `.claude/skills/`.
:::

## Day 23: Connecting MCPs

**Goal:** Understand MCPs and connect two that earn their place — Figma and Context7.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand what an MCP is**
   - An MCP connects Claude Code to an outside service, giving it new abilities beyond your files — like reading a Figma design or fetching live documentation.
   - Ask Claude: `Explain what an MCP is and how it differs from a skill.`

2. **Keep MCPs minimal**
   - Most people need very few. Two are worth it for a design engineer, and both belong at user level because you use them across projects.

3. **Connect the Figma MCP**
   - The Figma MCP lets Claude read your designs — variables, tokens, screenshots — and bring them into code. This is what makes the design-to-code seam reach all the way back to Figma.
   - Ask Claude: `Help me connect the Figma MCP at user level and explain what it lets you do.`

4. **Connect the Context7 MCP**
   - Context7 fetches current documentation for libraries and frameworks, so Claude is not relying on older knowledge when it writes code.
   - Ask Claude: `Help me connect the Context7 MCP at user level and explain when it helps.`

5. **Understand the payoff together**
   - Ask Claude: `With Figma and Context7 connected, how does my design-to-code workflow improve?`
   - Figma feeds real design decisions in; Context7 keeps the code current. The seam you built in Phase 7 now has both ends anchored.

## Phase 8 Checklist

By the end of Phase 8, you should be comfortable with:

- What a skill is and what `SKILL.md` contains
- The description as a trigger, and progressive disclosure
- Building your own skill for a repeatable task
- Orchestrator versus portable skills
- User versus project scope, for skills and MCPs
- Installing the eight bundled skills (symlink on Mac, copy on Windows)
- What an MCP is and how it differs from a skill
- Connecting the Figma and Context7 MCPs at user level

## Quick Reference

| Concept | In short |
|--------------------|-----------------------------------------------|
| Skill | A repeatable move you teach Claude Code |
| SKILL.md | Name, trigger description, steps, references |
| Progressive disclosure | Short main file, detail loaded on demand |
| MCP | A connection to an outside service |
| User scope | Available in every project |
| Project scope | Lives in one repo, travels with it |
| Figma MCP | Brings design decisions into code |
| Context7 MCP | Fetches current library documentation |
: Skills and MCPs, at a glance.

## Next

Claude Code is now shaped around your work. In **Phase 9: Orchestration and Harness Tools**, you learn the moves that multiply your output — planning before building, and launching many agents at once.
