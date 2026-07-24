---
title: "Phase 2: Version Control"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
           PHASE 2 : VERSION CONTROL

     commit    commit    commit    commit
       o ------- o ------- o ------- o  --> now
       |         |         |         |
      init      add      log      push

     local history            cloud backup
     +-----------+            +-----------+
     |   Git     |  -- push ->|  GitHub   |
     +-----------+            +-----------+

        Days 4-5   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 2: Version Control

**Days 4-5 | ~1 hour per day**

You have a project. Now you make it safe.

Version control is a system that records every change you make, so you can look back, undo, and never lose work. Git does this on your machine; GitHub keeps a copy in the cloud. Once this is in place, you can experiment freely — because you can always return to a working state.

::: tip
**Map first.** Two ideas unlock all of Git. A *commit* is a saved snapshot of your project at a moment in time. A *repository* (repo) is the full timeline of those snapshots. Everything you do today is either taking a snapshot or moving along that timeline. Hold that and the commands make sense.
:::

## Day 4: Tracking Changes Locally

**Goal:** Turn `my-first-site` into a tracked repository and record your first snapshots.

**Setup:** Open your terminal (or the editor's built-in terminal) inside `my-first-site`.

1. **Tell Git who you are**
   - Git stamps every commit with a name and email. Set them once, globally.
   - Run `git config --global user.name "Your Name"`.
   - Run `git config --global user.email "you@example.com"`.

2. **Start tracking the project**
   - Make sure you are inside `my-first-site` (`pwd` to check).
   - Run `git init`. This creates a hidden `.git` folder — Git now watches this project.

3. **Check the status**
   - Run `git status`. Git lists your files as "untracked" — it can see them but is not yet saving them.

4. **Stage your files**
   - Staging chooses what goes into the next snapshot.
   - Run `git add .` (the `.` means "everything here").
   - Run `git status` again — the files are now staged, ready to commit.

5. **Take your first snapshot**
   - Run `git commit -m "Initial commit: project structure"`.
   - The text in quotes is your message — a short note on what this snapshot contains.

6. **Confirm and repeat**
   - Run `git status`; it should say "nothing to commit, working tree clean."
   - Make any small change, then run `git add .` and `git commit -m "describe the change"` again. That loop — change, add, commit — is the heartbeat of version control.

7. **Read your history**
   - Run `git log --oneline` to see your snapshots, one per line, newest first.
   - Each line is a short code (the commit's ID) and your message.

## Day 5: Backing Up to GitHub

**Goal:** Push your local history to GitHub so it is safe and shareable.

**Setup:** Create a free account at [github.com](https://github.com) if you do not have one.

1. **Create an empty repository online**
   - On GitHub, click the plus button, then New repository.
   - Name it `my-first-site` and set it to Private or Public as you prefer.
   - Do not add a README or .gitignore — your project already has files.
   - Click Create repository.

2. **Copy the connection address**
   - GitHub shows a setup page with an HTTPS address ending in `.git`.
   - Copy it; it looks like `https://github.com/you/my-first-site.git`.

3. **Connect your local project to GitHub**
   - Back in your terminal, inside `my-first-site`, run the command below with your address.
   - `origin` is just the standard nickname for your main cloud copy.

```bash
git remote add origin https://github.com/you/my-first-site.git
```

4. **Name your main branch**
   - Run `git branch -M main` so your branch name matches GitHub's default.

5. **Push your history up**
   - Run `git push -u origin main`.
   - The `-u` sets this as the default destination, so future pushes are just `git push`.
   - You may be asked to log in the first time.

6. **See it on GitHub**
   - Refresh your repository page. Your files and commit messages are now there.

7. **Practice the everyday loop**
   - Change a file locally, then run `git add .` and `git commit -m "your message"`.
   - Run `git push` to send it up. Refresh GitHub to watch it appear.

::: note
**Cloning: the reverse direction.** `git clone <address>` downloads any repository — with its full history — onto your machine. You will use this constantly: to pick up a project on another computer, or to work from something someone shared. It is how a teammate on Windows gets your project and runs it, a portability idea you will make solid in Phase 4.
:::

## Undo: A Reference, Not a Drill

You do not need to memorize undo commands today. Keep this table handy and reach for it when you need it.

| Situation | Command |
|-------------------------------------------|-------------------------------|
| Discard unsaved changes to a file | `git restore <file>` |
| Unstage a file (keep the changes) | `git restore --staged <file>` |
| Fix the last commit's message | `git commit --amend -m "new"` |
| See the full history in detail | `git log` |
: Undo and inspect commands, for when you need them.

## Phase 2 Checklist

By the end of Phase 2, you should be comfortable with:

- Setting your Git identity with `git config`
- Starting tracking with `git init`
- Checking state with `git status`
- Staging with `git add .` and committing with `git commit -m`
- Reading history with `git log --oneline`
- Connecting to GitHub with `git remote add origin`
- Pushing with `git push -u origin main`, then `git push`
- Knowing `git clone` downloads a project

## Quick Reference

| Command | What it does |
|-----------------------------|----------------------------------------|
| `git init` | Start tracking this project |
| `git status` | Show what changed and what is staged |
| `git add .` | Stage all changes for the next commit |
| `git commit -m "msg"` | Save a snapshot with a message |
| `git log --oneline` | View compact history |
| `git remote add origin url` | Connect to a GitHub repo |
| `git branch -M main` | Name the main branch |
| `git push -u origin main` | Push and set the default destination |
| `git push` | Push to the set destination |
| `git clone url` | Download a repo with its history |
: The Git commands you actually need.

## Next

Your work is tracked and backed up. In **Phase 3: Claude Code Core**, you meet the tool at the center of everything — the AI agent that writes and edits code on your direction.
