---
title: "Phase 3: Claude Code Core"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
        PHASE 3 : CLAUDE CODE CORE

     you  -- plain english -->  Claude Code
                                     |
                                     v
            +------------------------------+
            | reads . plans . writes       |
            | edits . runs  . searches web |
            +------------------------------+
                        |
          guided, not blind: build + explain

         Days 6-7   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 3: Claude Code Core

**Days 6-7 | ~1 hour per day**

This is the tool everything else runs on.

Claude Code is an AI agent that lives in your terminal. You talk to it in plain English, and it reads your files, writes and edits code, runs commands, and searches the web — all on your direction, and always asking before it changes anything. From here on, it is your primary way of building.

::: important
**Guided, not blind.** The single habit that makes this course work: never accept code you do not understand. After Claude builds something, ask it to explain what it wrote and why. You are the designer directing the work — you keep the intent and the understanding, Claude keeps the typing. Blind prompting ("just build it, I don't care how") is how people end up with software they cannot fix or change.
:::

## Day 6: Meeting Claude Code

**Goal:** Start Claude Code, learn how it asks permission, and give it project context.

**Setup:** Open your terminal inside `my-first-site` (or the editor's built-in terminal there).

1. **Start Claude Code**
   - Run `claude`. An interactive session opens in your terminal.
   - You are now talking to the agent. Type in plain English, not commands.

2. **Ask it to look around**
   - Type: `What files and folders are in this project?`
   - Claude reads the project and answers. Notice it worked out the structure itself — you did not have to explain it.

3. **Practice the guided habit immediately**
   - Type: `Explain what an index.html file is for, in simple terms.`
   - Reading its explanation is the point. You are building understanding alongside the work, from the very first prompt.

4. **Understand permissions**
   - When Claude wants to change a file or run a command, it asks first and shows you what it will do.
   - You approve or decline each time. This is your safety net — nothing happens to your project without your yes.
   - As you trust a task, you can allow it to proceed without asking, but start by reading each request.

5. **Give the project a memory with CLAUDE.md**
   - `CLAUDE.md` is a plain file Claude reads automatically every session. It holds facts about your project so you do not repeat yourself.
   - Ask Claude: `Create a CLAUDE.md that says this is a simple practice website with css and js folders.`
   - Open the file it made and read it. This small file is the seed of a big idea you will grow in Phase 4.

6. **See what Claude is working with**
   - Type `/context`. This shows what Claude currently has loaded — your files, the CLAUDE.md, and more.
   - Understanding what is in context is understanding what Claude "knows" right now. It is the map of the agent's attention.

## Day 7: Web, Planning, and Your First Real Files

**Goal:** Use Claude Code's built-in web abilities, try planning before building, and create your first real files — with understanding.

**Setup:** Continue your Claude Code session inside `my-first-site`.

1. **Let Claude search the web**
   - Type: `Search the web for what a favicon is and summarize it.`
   - Claude has web search built in. It looks it up and reports back — no extra setup, no browser.

2. **Let Claude read a specific page**
   - Type: `Read the page at example.com and tell me what is on it.`
   - This is Claude fetching a single page's content directly. Between search and fetch, Claude can research on its own.

3. **Try planning before building**
   - Type: `Plan out a simple home page for this site before writing anything.`
   - Claude proposes an approach first, so you can steer before any code exists. You review, adjust, then let it proceed. This is a light taste of "plan mode," which you will use fully in Phase 9.

4. **Build your first real file**
   - Type: `Create a simple, clean index.html for this practice site with a heading and a short paragraph.`
   - Approve the change when Claude asks. Your empty `index.html` now has real content.

5. **Understand what it built**
   - Type: `Walk me through the index.html you just wrote, line by line, in plain terms.`
   - This is the guided habit in full. You now understand your own file, even though you did not type it.

6. **Save the snapshot**
   - Leave Claude Code (type `/exit`) or open another terminal.
   - Run `git add .` and `git commit -m "Add home page content"`, then `git push`.
   - Your first Claude-built work is now in your history and backed up.

::: note
**Native web first.** Claude Code can search the web and read pages on its own, with no extra tools. Remember this: later, in Phase 6, you will add Playwright to drive a full browser — but that is only for special cases like testing your own site or getting past sites that block simple reads. For looking things up and reading pages, these built-in abilities are the default. Do not forget they exist.
:::

## Phase 3 Checklist

By the end of Phase 3, you should be comfortable with:

- Starting Claude Code with `claude` inside a project
- Prompting in plain English and reading the responses
- The guided habit: asking Claude to explain what it built
- Approving or declining permission requests
- Creating and reading a basic `CLAUDE.md`
- Checking what Claude has loaded with `/context`
- Using Claude's built-in web search and page reading
- Asking Claude to plan before it builds

## Quick Reference

| Action | How |
|-------------------------------------|-----------------------------------|
| Start Claude Code | `claude` (inside a project) |
| Ask something | Type plain English |
| See what Claude has loaded | `/context` |
| Give the project lasting facts | A `CLAUDE.md` file |
| Understand any code | "Walk me through what you wrote" |
| Leave the session | `/exit` |
: Working with Claude Code, at a glance.

## Next

Claude Code writes files for you now. In **Phase 4: Context Engineering**, you learn to structure a project so it works with you brilliantly — the difference between an agent that guesses and one that knows exactly where everything belongs.
