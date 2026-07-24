---
title: "Phase 4: Context Engineering"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
       PHASE 4 : CONTEXT ENGINEERING

     root CLAUDE.md   (how we work)
         |  points to, never repeats
         +--> docs/design.md   (the how)
         +--> docs/notes.md    (decisions)
         +--> sub/CLAUDE.md    (this part)

     structure by concern . load what's needed
     portable: anyone, any OS, can clone + run

         Days 8-10   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 4: Context Engineering

**Days 8-10 | ~1 hour per day**

This is the spine of the whole course.

An AI agent is only as good as the context it works in. Give Claude Code a well-structured project with clear notes, and it makes precise, correct moves. Give it a messy pile of files, and it guesses. Context engineering is the craft of shaping a project so the agent — and any human — always knows where things belong and what to load. It is the clearest place where you stop being a prompt-typist and start being an engineer.

::: tip
**Map first.** Before you organize anything, ask: what *kinds* of things live in this project? Notes are different from code, which is different from generated output. Good structure keeps those kinds apart. And ask: when Claude works on a task, what is the smallest set of files it needs to read? Structure exists to make that set obvious.
:::

## Day 8: Structure by Concern and the Router File

**Goal:** Organize the project by what things are, and make `CLAUDE.md` a router that points rather than repeats.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand structure by concern**
   - Group files by what they *are*, not by when you made them. Notes go with notes, code with code, generated files on their own.
   - Ask Claude: `Explain what "organizing a project by concern" means and why it helps an AI agent work in it.`

2. **Give the project a notes home**
   - Ask Claude: `Create a docs folder with a design.md that describes this site's look in a few lines, and a notes.md for decisions.`
   - Now the project has three clear kinds of place: `docs` for thinking, `css`/`js` for code, and the pages themselves.

3. **Learn the router pattern**
   - A router file points to detail that lives elsewhere; it never copies that detail in. One fact, one home.
   - Ask Claude: `Explain the "router" pattern for a CLAUDE.md — pointing to other docs instead of duplicating them.`

4. **Turn CLAUDE.md into a router**
   - Ask Claude: `Rewrite CLAUDE.md so it briefly describes the project and points to docs/design.md and docs/notes.md, without repeating their contents.`
   - Open it and read. The root file is now short and stable; the details live in the files it points to.

5. **Test that it holds**
   - Ask Claude: `If I want to change the site's look, which file should I edit?`
   - It should send you to `docs/design.md`, because CLAUDE.md pointed there. That is the router working — context is findable, not scattered.

## Day 9: Tiers, Load Tables, and Iteration Discipline

**Goal:** Learn how context scales with tiers and load tables, and set the working rules that keep an agent precise.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand the three tiers**
   - Real projects layer their context. A root `CLAUDE.md` says how you work overall. A sub-project `CLAUDE.md` (inside a folder) says how that part runs. A leaf file describes one single piece.
   - Each tier answers a different question, and none repeats another. Ask Claude to explain this with an example if it helps.

2. **See why tiers matter**
   - Your practice site is small, so it needs only the root file today. But the pattern is what you are learning: as a project grows, you push detail down into the folder it belongs to, so no single file becomes a dumping ground.

3. **Add a load table**
   - A load table maps a task to the file Claude should read for it — so it loads only what is needed, not everything.
   - Ask Claude: `Add a small table to CLAUDE.md mapping tasks to the doc to read — styling to docs/design.md, decisions to docs/notes.md.`

4. **Understand iteration discipline**
   - How you direct an agent matters as much as structure. A few rules keep it sharp.
   - One change at a time: make a single, clear change, confirm it, then move on.
   - Predict before editing: ask Claude to say what a change will do before it does it.
   - Diagnose before fixing: when something is wrong, understand why before changing anything.

5. **Write the rules down**
   - Ask Claude: `Add a short "how we work" section to CLAUDE.md: one change at a time, explain before editing, diagnose before fixing.`
   - These rules now load every session. You have taught the project how you want to be worked with.

6. **Commit the structure**
   - Run `git add .` and `git commit -m "Structure the project and its context"`, then `git push`.

## Day 10: Make It Portable

**Goal:** Set up the project so anyone, on any operating system, can clone it and run it without changes.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand the portability problem**
   - You build on your machine. Someone else clones it onto theirs — maybe a different operating system. What has to be true for it to just work?
   - The answer is a handful of small files that travel in the repo and settle these questions once.

2. **Keep generated files out of Git**
   - Some files are regenerated automatically and should never be tracked — they bloat the repo and differ per machine.
   - Ask Claude: `Create a .gitignore that excludes node_modules and common build output folders.`

3. **Pin the Node version**
   - Different Node versions can break a project. Pinning one keeps everyone aligned.
   - Ask Claude: `Add an .nvmrc file pinning a recent LTS Node version, and explain how a teammate uses it.`

4. **Pin the package manager**
   - Projects should agree on which tool installs their dependencies.
   - Ask Claude: `Add a packageManager field so everyone uses the same tool, and explain what "corepack enable" does.`

5. **Settle line endings**
   - Windows and Mac store line endings differently, which can create noise in Git. One file fixes it for everyone.
   - Ask Claude: `Add a .gitattributes that normalizes line endings across operating systems.`

6. **Understand what you just did**
   - Ask Claude: `Summarize what these four files do and why they make the project portable.`
   - Commit the result: `git add .`, `git commit -m "Make the project portable"`, `git push`. Now anyone can clone and run it.

::: note
**Why this is a design-engineer skill.** Making a project clone-able by anyone is not busywork — it is what turns a personal experiment into something a team can use. These four small files are the difference between "works on my machine" and "works everywhere." You did each with one prompt, but you now understand each one.
:::

## Phase 4 Checklist

By the end of Phase 4, you should be comfortable with:

- Organizing a project by concern (notes, code, output kept apart)
- The router pattern: `CLAUDE.md` points, it does not duplicate
- The idea of context tiers (root, sub-project, leaf)
- Adding a load table so Claude reads only what a task needs
- The iteration rules: one change, explain first, diagnose before fixing
- The four portability files: `.gitignore`, `.nvmrc`, `packageManager`, `.gitattributes`

## Quick Reference

| Piece | Purpose |
|--------------------|------------------------------------------------|
| Structure by concern | Keep kinds of files apart so context is clear |
| Router `CLAUDE.md` | Point to detail; never copy it in |
| Context tiers | Root, sub-project, leaf — each a different job |
| Load table | Map a task to the one file it needs |
| Iteration rules | One change, explain first, diagnose first |
| Portability files | Clone and run on any machine, any OS |
: The context-engineering toolkit.

## Next

Your project is structured and portable. In **Phase 5: Web, Guided**, Claude Code starts building a real web interface — and you learn what HTML, CSS, and components are by directing and reading, never by hand-typing code.
