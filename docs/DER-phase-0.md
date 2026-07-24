---
title: "Phase 0: Orient"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
              PHASE 0 : ORIENT

     designer  --- install the tools -->  ready

   +----------+  +------+  +--------+  +-----+
   |  editor  |  | node |  | claude |  | git |
   +----------+  +------+  +--------+  +-----+

      macOS + Windows   |   no IT, no WSL

       Day 1   |   ~1 hour   |   setup + stance
  \end{lstlisting}
---

# Phase 0: Orient

**Day 1 | ~1 hour**

Welcome. This is the first hour of the journey, and the only one where you install rather than build.

By the end of today you will know what a design engineer actually is, you will have the four tools installed on your machine, and you will have set the one mindset that carries through everything else.

::: tip
**Map before you make.** The habit that separates a design engineer from someone who just types prompts: understand the shape of what you are working with before you build it. Today the questions are simple — what are these four tools, and what does each one do? Answer those, and you start with intent instead of guesswork.
:::

## Day 1: Getting Oriented and Installing Your Tools

**Goal:** Understand the role you are growing into, then install the toolchain on macOS or Windows.

### What a Design Engineer Is

A design engineer is a designer who can build and ship the thing, not just describe it.

You already think in flows, hierarchy, and structure. What you are adding is the ability to turn that thinking into working software — with an AI coding partner doing the typing while you hold the intent.

You will not be memorizing code. You will be directing an agent called Claude Code to write it, reading what it produces, and understanding enough of the architecture to steer. That is the whole game: judgment over syntax.

### The Toolchain

Four tools make up your workbench. Each has one job.

| Tool | What it is | Its one job |
|--------|--------------------------|-------------------------------------|
| Editor | A code editor (VS Code or Cursor) | Where you see and organize files |
| Node | A JavaScript runtime | Runs the websites and tools you build |
| Claude Code | An AI coding agent in your terminal | Writes and edits code on your direction |
| Git | A version-control system | Tracks every change; backs work up |
: The four tools you install today.

You do not need to understand them deeply yet. You need them installed and confirmed working. Understanding arrives as you use them.

### Install Your Tools

Work through these in order. The order matters on Windows: Git before Claude Code, so Claude Code can find it.

1. **Get a code editor**
   - Download Cursor from [cursor.com](https://cursor.com) or VS Code from [code.visualstudio.com](https://code.visualstudio.com).
   - Install it the normal way (drag to Applications on Mac; run the installer on Windows).
   - Open it once to confirm it launches.

2. **Install Git**
   - On macOS, open the Terminal app and run `git --version`. If Git is missing, macOS offers to install it — accept.
   - On Windows, download Git for Windows from [git-scm.com](https://git-scm.com/downloads/win) and run the installer with its default options.

3. **Install Node.js**
   - Go to [nodejs.org](https://nodejs.org) and download the LTS (long-term support) version.
   - Run the installer with default options on either platform.
   - This gives you both `node` and `npm` (Node's package installer).

4. **Install Claude Code**
   - On macOS, open Terminal and run the install command below.
   - On Windows, open PowerShell (not Command Prompt) and run the PowerShell command below.

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
irm https://claude.ai/install.ps1 | iex
```

5. **Confirm everything works**
   - Close and reopen your terminal first, so it picks up the new tools.
   - Run each of these; each should print a version number, not an error.

```bash
node --version
git --version
claude --version
```

::: note
**Windows: no WSL, and why Git matters.** Older guides told you to install WSL (a Linux system inside Windows). You no longer need it — Claude Code runs natively on Windows. Installing Git for Windows also gives you Git Bash, a terminal that behaves like the Mac one, so the commands in this course match on both systems. When you open a terminal on Windows, prefer Git Bash.
:::

::: note
**Account needed.** Claude Code requires a Claude Pro or Max subscription (or API access). The first time you run `claude`, it opens your browser to log in. If `claude --version` works but login fails, check your plan at [claude.com](https://claude.com).
:::

### Map Before You Make

Before you close this session, do one small thing that sets the tone for everything ahead.

Open a plain text note and answer, in your own words: what is each of these four tools for, and which one will you actually be talking to? You just read the answers — writing them yourself is the point.

This is the "map before you make" habit in miniature. At every step from here, you pause to understand the layout before building on it — where files live, how the AI is called, what is running where. You never blind-prompt "just build it." You hold the system in your head, and that is what makes you an engineer rather than a passenger.

## Phase 0 Checklist

By the end of Phase 0, you should have:

- A clear, one-line answer to "what is a design engineer?"
- A code editor installed and opening
- Git installed (`git --version` prints a version)
- Node.js installed (`node --version` prints a version)
- Claude Code installed and logged in (`claude --version` prints a version)
- Your own written note on what each tool is for

## Quick Reference

| Tool | macOS install | Windows install |
|--------|-----------------------------|-------------------------------|
| Editor | Download Cursor or VS Code | Download Cursor or VS Code |
| Git | `git --version` (prompts) | Git for Windows installer |
| Node | nodejs.org LTS installer | nodejs.org LTS installer |
| Claude | `curl ... install.sh \| bash` | `irm ... install.ps1 \| iex` |
: Install commands at a glance.

## Next

Your machine is ready. In **Phase 1: Operate**, you meet the terminal and the editor properly — just enough to move around, and you will create the practice project you carry through the rest of the course.
