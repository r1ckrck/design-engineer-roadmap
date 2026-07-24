---
title: "Phase 10: Capstone and Deploy"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
       PHASE 10 : CAPSTONE & DEPLOY

     design
       |  atelier picks the stack
       |  context skeleton
       |  tokens seam -> components
       |  a skill for the repeat work
       v
     deploy -> live at a public URL

     designer ... now design engineer

        Days 27-28   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 10: Capstone and Deploy

**Days 27-28 | ~1 hour per day**

This is where everything comes together.

You will take a design and carry it all the way to a live, shipped product — choosing the stack, structuring the project, building through the tokens seam, packaging a repeatable part into a skill, and deploying it so anyone can reach it. Nothing new to learn here. This is you, doing the whole job, with the tools now in your hands.

::: tip
**Map first, one last time.** Before you build the capstone, map it: what is this thing, how much does it need, where will its pieces live, and where will it run when it ships? You have asked versions of this question in every phase. Now it is second nature — and that instinct is what makes you an engineer.
:::

## Day 27: From Design to Built

**Goal:** Take a small design and build it end to end, using everything from the earlier phases.

**Setup:** Open Claude Code. Choose a small design to build — a landing page, a simple tool, or a polished version of your practice site.

1. **Pick the stack with atelier**
   - Ask Claude: `Using the atelier skill, decide the right stack for this project.`
   - Atelier triages how much the project actually needs and routes you to a fitting stack. Read its reasoning — you are learning to right-size, not over-build.

2. **Lay the context skeleton**
   - Ask Claude: `Set up the project structure and a router CLAUDE.md for this build.`
   - This is Phase 4 in action: organized by concern, a router file that points, portability files in place.

3. **Build through the tokens seam**
   - Ask Claude: `Define the design tokens for this design, then build the interface using them.`
   - This is Phase 7 in action: decisions become tokens, tokens become components, nothing hardcoded. If you have a Figma design, use the Figma MCP to pull the decisions in directly.

4. **Run it and refine**
   - Start the dev server, open it, and run the look-feedback-change loop until it feels right.
   - Use the guided habit throughout: understand what each part does as it comes together.

5. **Commit your progress**
   - Run `git add .`, `git commit -m "Build the capstone"`, `git push`.

## Day 28: Package, Ship, and Look Back

**Goal:** Capture a repeatable part as a skill, deploy the project live, and reflect on how far you have come.

**Setup:** Open Claude Code in your capstone project.

1. **Write a skill for the repeat work**
   - Find one task you did more than once and capture it. Ask Claude: `Turn this repeated task into a skill for the project.`
   - Decide its scope: project level if it is tied to this build, user level if you will want it everywhere. This is Phase 8 in action.

2. **Understand what deploying means**
   - Deploying puts your project on a real server so anyone can reach it at a public web address — not just you on `localhost`.
   - Ask Claude: `Explain what happens when I deploy this site and how a public address is different from localhost.`

3. **Deploy it live**
   - The common path is a hosting service that connects to your GitHub repo, builds the project, and serves it at a public URL. Your own server is the alternative when you want full control.
   - Ask Claude: `Help me deploy this project to a hosting service, and walk me through each step.`

4. **See it in the world**
   - Open your public address. Your work is live, reachable by anyone. You took it from an empty folder to a shipped product.

5. **Look back at the whole journey**
   - You started by installing four tools. You now structure projects, direct an AI agent with intent, build real interfaces, run and test them, connect design to code through tokens, extend your tools with skills and MCPs, and ship. That is a design engineer.

::: note
**Where to go from here.** Growth from this point is practice, not new theory. Build more projects, each a little more ambitious than the last — a project with real data, one with a backend, one that others use. Every phase's habits carry forward. The tools stay the same; your reach keeps growing.
:::

## Phase 10 Checklist

By the end of Phase 10, you should be able to:

- Right-size a project's stack with atelier
- Lay a clean context skeleton with a router `CLAUDE.md`
- Build an interface through the tokens seam
- Run the feedback loop to refine a real design
- Capture a repeatable task as a skill, at the right scope
- Deploy a project live to a public address
- Describe your own end-to-end workflow as a design engineer

## Quick Reference

| Capstone step | Draws on |
|----------------------|----------------------------------------|
| Pick the stack | atelier (Phase 8) |
| Structure the project | Context engineering (Phase 4) |
| Build the interface | Web and the seam (Phases 5, 7) |
| Run and refine | Local hosting (Phase 6) |
| Package a skill | Extending Claude Code (Phase 8) |
| Ship it | Deploy to a public host |
: The capstone, and where each step comes from.

## The Journey, Complete

From a designer who describes to a design engineer who builds and ships. You held the intent at every step, understood what you directed, and never let the tools outrun your judgment. Keep building — that is the whole practice now.
