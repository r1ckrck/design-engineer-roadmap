---
title: "Phase 9: Orchestration and Harness Tools"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
   PHASE 9 : ORCHESTRATION & HARNESS TOOLS

     PLAN MODE
       draft -> review -> accept -> build

     WORKFLOW
       one ask -> many agents at once -> merged
          +--> research A
          +--> research B   (all in parallel)
          +--> research C

     small: sub-agents . slash commands

        Days 24-26   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 9: Orchestration and Harness Tools

**Days 24-26 | ~1 hour per day**

You know how to direct Claude Code on one task. This phase is about directing bigger work.

These are the capabilities built into Claude Code itself — the harness around the agent. Plan mode lets you settle an approach before any code is written. Workflows let Claude run many agents at once. Used well, they change what one person can take on in an hour. Kept in proportion, they never get in the way of simple work.

::: tip
**Map first.** Before reaching for orchestration, ask whether the task earns it. A one-line change does not need a plan or a fleet of agents. A large, uncertain, or multi-part task does. Matching the tool to the size of the work is itself a skill — power you do not need is just friction.
:::

## Day 24: Plan Mode

**Goal:** Use plan mode to settle an approach before building, end to end.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand why planning first helps**
   - For anything beyond a small change, deciding the approach before writing code prevents wasted work and surprises. You review the thinking while it is still cheap to change.
   - Ask Claude: `Explain when planning before building is worth it, and when it is overkill.`

2. **Enter plan mode**
   - Plan mode tells Claude to research and propose a plan without changing anything yet.
   - Give it a real task: `In plan mode, plan how to add a simple contact page to this site.`

3. **Review the plan**
   - Claude returns a plan — the files it would touch, the steps, the approach. Read it as the decision-maker.
   - This is your moment to steer. Adjust anything that does not match your intent.

4. **Accept and build**
   - When the plan is right, approve it. Claude then builds exactly what you agreed to.
   - Ask Claude afterwards: `Walk me through what you built against the plan.` The plan and the result should match.

5. **Feel the difference**
   - Plan mode is the full version of the light planning you tried in Phase 3. For real features, this draft-review-accept-build loop is how you keep control of larger work.

## Day 25: Workflows and Parallel Agents

**Goal:** Use a workflow to run several pieces of work at once and get one consolidated result.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand sub-agents**
   - Claude Code can launch helper agents — sub-agents — that work on their own and report back. The main session stays your point of contact.
   - Ask Claude: `Explain what a sub-agent is and why the main session uses them.`

2. **Understand a workflow**
   - A workflow launches many sub-agents at the same time, each on a different piece, then merges their results. Instead of researching five things one after another, you research all five at once.
   - Ask Claude: `Explain how a workflow runs many agents in parallel and consolidates their output.`

3. **Run a parallel research task**
   - Give it something genuinely multi-part: `Research five ways to improve this site — accessibility, performance, layout, color, and copy — in parallel, then give me one consolidated summary.`
   - Several agents work at once; you get a single merged answer far faster than doing each in turn.

4. **Read the consolidated result**
   - Notice you received one organized summary, not five scattered ones. The workflow did the gathering and the merging.

5. **Know when to use it**
   - Workflows shine when work splits into independent parts that can run at once. For a single, linear task, a normal prompt is better.
   - Ask Claude: `Given how workflows work, what kinds of tasks are they best and worst for?`

## Day 26: Sub-Agents and Slash Commands, Briefly

**Goal:** Round out your picture of the harness with two smaller tools.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Defining your own sub-agent**
   - Beyond the ones Claude spawns automatically, you can define a sub-agent with a specific role and instructions, for a job you repeat.
   - Ask Claude: `Briefly explain how I would define my own sub-agent and when it is worth doing.`

2. **Keep it in proportion**
   - Most of the time, the session and its automatic helpers are all you need. Defining your own is for narrow, repeated roles — not everyday work.

3. **Understand slash commands**
   - A slash command is a shortcut you type as `/name` to run a saved instruction — a quick way to trigger something you do often.
   - Ask Claude: `Briefly explain slash commands and give an example of a useful one.`

4. **See how the pieces relate**
   - Ask Claude: `Summarize how skills, sub-agents, workflows, and slash commands differ, in one line each.`
   - Skills teach moves; sub-agents do delegated work; workflows run many at once; slash commands are quick triggers. Together they are your orchestration toolkit.

## Phase 9 Checklist

By the end of Phase 9, you should be comfortable with:

- When planning before building is worth it
- Running plan mode end to end: draft, review, accept, build
- What a sub-agent is
- Using a workflow to run parallel work and get one consolidated result
- Knowing which tasks suit workflows and which do not
- The basic idea of defining a sub-agent
- What slash commands are

## Quick Reference

| Tool | What it does |
|-----------------|------------------------------------------------|
| Plan mode | Settle the approach before any code is written |
| Sub-agent | A helper agent that works and reports back |
| Workflow | Many agents at once, results merged into one |
| Slash command | A quick `/name` trigger for a saved instruction |
: The orchestration and harness toolkit.

## Next

You now have the full toolkit — from the terminal to orchestration. In **Phase 10: Capstone and Deploy**, you put all of it together to take a design from nothing to a real, shipped product.
