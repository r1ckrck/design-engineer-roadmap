---
title: "Design Engineer Upskilling Roadmap"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
            DESIGNER  -->  DESIGN ENGINEER

     FOUNDATIONS               DESIGN ENGINEERING
    +-------------+           +--------------------+
    | CLI   Git   |           | Context   Web      |
    | Claude Code |    -->     | Seam    Skills     |
    +-------------+           | Orchestrate  Ship  |
                              +--------------------+
      operate the machine       build and ship real things

        1 hour a day  |  macOS + Windows  |  self-paced
  \end{lstlisting}
---

# Design Engineer Upskilling Roadmap

A self-paced path for UX designers to become design engineers — able to *build and ship* real products with Claude Code, not just design them.

You will not be hand-writing code. You'll be directing Claude Code to write it, and — this is the point — understanding what it writes and how it all fits together.

**Time:** ~1 hour a day, self-paced. The days are sequential, not calendar-bound — move at your own pace.

**Platform:** macOS and Windows, side by side throughout.

**Format:** self-guided tasks. From Phase 3 onward, Claude Code is both your build partner and your tutor.

## Who this is for

Designers who think in flows and hierarchy and are new to the technical side. No prior coding required. The goal isn't to turn you into a traditional engineer — it's to give you enough architecture literacy to direct an AI agent with intent and ship the result.

## The core mindset: Map before you make

The one habit that separates a design engineer from a vibe-coder: **understand the architecture before you build.** At every step — where are files stored, how is the AI called, what server is running, where does this actually run — ask the question, figure out the answer, *then* build. Never blind-prompt "just build it."

You hold the system in your head. Every phase opens with a **Map first** prompt: the two or three things to understand before you touch anything.

## The journey

Two arcs. **Foundations** gets your machine and fundamentals in place, fast. **Design Engineering** — where the real work lives — builds the context, the design-to-code seam, reusable skills, and orchestration that let you ship.

### Arc 1 — Foundations

| Phase | Focus | Days |
|-------|------------------------------------------|------|
| **0 · Orient** | What a design engineer is; install your tools; the "Map before you make" mindset | 1 |
| **1 · Operate** | Just enough terminal and IDE to navigate, edit, and run | 2 |
| **2 · Version control** | Track your work with Git; back it up on GitHub | 2 |
| **3 · Claude Code core** | Your primary tool — first prompts, `CLAUDE.md`, context, native web search | 2 |
: Arc 1 gets you operational.

### Arc 2 — Design Engineering

| Phase | Focus | Days |
|-------|------------------------------------------|------|
| **4 · Context engineering** | Structure a project so an agent works well in it — folders, router `CLAUDE.md`, portability | 3 |
| **5 · Web, guided** | React, Tailwind, and tokens — written through Claude Code, understood by you | 3 |
| **6 · See it running** | Local hosting, the feedback loop, and driving a real browser with Playwright | 3 |
| **7 · Design-to-code seam** | Tokens as the contract between design and code; media assets with FFmpeg | 3 |
| **8 · Extending Claude Code** | Author your own skills; connect MCPs; user vs project scope | 3–4 |
| **9 · Orchestration & harness tools** | Plan mode, parallel research workflows, sub-agents, slash commands | 3 |
| **10 · Capstone + deploy** | Take a design all the way to a shipped, hosted product | 2–3 |
: Arc 2 is where you become a design engineer.

Total: roughly **27–28 days** at an hour a day.

## Phase breakdown

### Phase 0 · Orient
What a design engineer is, and why the workflow looks the way it does. Install your editor, Node.js, Claude Code, and Git — on macOS or Windows, no IT gatekeeping. Set the "Map before you make" stance.
*Deliverable: a working machine and a written note on what you want to understand.*

### Phase 1 · Operate
Enough command line to navigate and run things, and enough IDE to open, edit, and run a project. Deliberately minimal — Claude Code creates and searches files for you; you just need to move around confidently.
*Deliverable: comfort navigating files and running commands.*

### Phase 2 · Version control
Track changes locally with Git, then back up and share on GitHub: init, add, commit, log, push, clone. Undo is provided as a reference card, not a drill.
*Deliverable: your first repository pushed to GitHub.*

### Phase 3 · Claude Code core
Claude Code as your primary tool: setup, your first prompts, the `CLAUDE.md` file, the `/context` command, and permissions. Learn the difference between guided prompting (you understand what's built) and blind prompting. See what Claude Code does natively — including web search and page reading — before reaching for heavier tools later.
*Deliverable: your first files, built with understanding.*

### Phase 4 · Context engineering
The spine of the whole course. How to structure a project so an agent — and a human — can work in it: folders organized by concern, the router `CLAUDE.md` pattern (a file that points, not duplicates), loading the right context on demand, and iteration discipline. Includes making a project portable so anyone can clone and run it.
*Deliverable: a structured project skeleton with a router `CLAUDE.md`.*

### Phase 5 · Web, guided
React, Tailwind, and design tokens — written *through* Claude Code, but guided so you understand the structure by reading generated code rather than typing it by hand. You learn what HTML, CSS, and components are by directing their creation and having Claude walk you through them.
*Deliverable: a small site whose every part you can explain.*

### Phase 6 · See it running
The invisible skill: how do you actually look at what you're building and give feedback? Local hosting and ports; the difference between a Node dev server, a Python-hosted viewer, and a plain static file; the look-feedback-change loop. Then Playwright CLI for driving a real browser — download Chromium, run headless vs headed, and get past bot-blocking when it appears. Native web search and fetch come first; Playwright is the exception, not the default. Closes with a note on deployment: local to preview, then a server to ship.
*Deliverable: your site running on localhost, plus a Playwright browser run.*

### Phase 7 · Design-to-code seam
Where design becomes code, deterministically. Design tokens as the single contract: Figma to tokens to CSS variables to components. The split between a decisions document (the *why*) and a token file (the *values*), with traceability between them. Self-describing components that generate their own documentation. Handling media assets with FFmpeg — convert, resize, optimize, extract frames, turn video into a GIF.
*Deliverable: a component built from a design, with tokens traceable end to end.*

### Phase 8 · Extending Claude Code — skills & MCPs
The two ways to extend Claude Code: **skills** you author, and **MCPs** you connect. Skill anatomy (the trigger description, progressive disclosure), orchestrator vs portable skills, and building one of your own. The scope rule for both skills and MCPs — user level for what you use everywhere, project level for what belongs to one repo. Install the eight bundled skills, and connect two MCPs: Figma and Context7.
*Deliverable: your own working skill, plus eight skills and two MCPs installed.*

### Phase 9 · Orchestration & harness tools
The Claude Code capabilities that multiply your output. **Plan mode** — draft a plan, review it, accept it, then build from it. **Workflows** — launching many sub-agents in parallel to, say, research five things at once and get one consolidated answer. Sub-agents and slash commands, kept brief.
*Deliverable: a full plan-mode run and a parallel research workflow.*

### Phase 10 · Capstone + deploy
Everything, applied. Take a design; use atelier to decide the stack; lay down the context skeleton; build components through the tokens seam; write a skill for a repeatable part; and host it live.
*Deliverable: a real thing, designed and shipped to a server.*

## What you'll install

### Skills

Eight skills ship with this course. Install them at user level so they're available in every project.

| Skill | What it does |
|-------------------|--------------------------------------------------|
| `atelier` | Decide the tech stack a build actually needs |
| `markset` | Turn markdown into a polished PDF |
| `coding-standards` | Write clean, consistent, readable code |
| `code-simplifier` | Refine code for clarity without changing behavior |
| `frontend-design` | Produce distinctive, production-grade UI |
| `testing` | Verify that things work; debug what's broken |
| `media-processing` | Convert, resize, and optimize media (FFmpeg + ImageMagick) |
| `playwright-cli` | Open and drive a real browser — view, test, get past bot-blocking |
: The eight bundled skills.

### MCPs

Two MCP servers (external services Claude Code connects to), kept deliberately minimal. Both go at user level.

| MCP | What it is |
|-------------|----------------------------------------------------------|
| Figma | Reads designs, variables, tokens, and screenshots into code — and writes back |
| Context7 | Fetches current library documentation so Claude Code isn't guessing from stale training data |
: Two MCPs earn their place; don't collect more than you need.

## Cross-platform note

Claude Code runs natively on Windows — no WSL, no Linux VM required. Install Git for Windows so Claude Code uses a Bash shell, and the command examples in this course match on both operating systems. Small **Windows notes** appear where they genuinely differ — mainly Node version management and a couple of path and activation-syntax details. Nothing in the course is macOS-only.

## The final deliverable

By Phase 10 you will take a design and ship it: pick the stack, structure the project, build components through a real tokens seam, write a skill for the repetitive part, and deploy it live. Not a toy — a real product, designed and built by a designer who now engineers.
