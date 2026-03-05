---
title: "Phase 3: Version Control"
author: "Arnesh Mandal"
version: "1.0"
date: "2026-02-09"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
        PHASE 3: VERSION CONTROL

    Day 7        Day 8        Day 9
      |            |            |
      v            v            v
  +--------+  +--------+  +----------+
  | init   |  | log    |  | GitHub   |
  | add    |->| diff   |->| remote   |
  | commit |  | restore|  | push/pull|
  +--------+  +--------+  +----------+
  First Commit History &   Cloud Backup
                 Undo       & Sharing

        Your work, tracked forever
  \end{lstlisting}
---

# Phase 3: Version Control

**Days 7–9 | ~30 minutes per day**

Learn to track your project history, undo mistakes, and back up your work to the cloud with Git and GitHub.

## Day 7: Git Basics

**Goal:** Track your project changes locally using Git
**Setup:** Open your terminal and navigate to `my-first-site`

1. **Install Git and check the version**
   - On Mac, Git is pre-installed—check by running `git --version`
   - On Windows, download and install Git from [git-scm.com](https://git-scm.com)
   - You should see output like `git version 2.x.x`

2. **Configure your identity**
   - Git tags every commit with your name and email
   - Run: `git config --global user.name "Your Name"`
   - Run: `git config --global user.email "you@example.com"`
   - Verify with: `git config --list`

3. **Initialize a repository**
   - Make sure you're inside `my-first-site`: `cd my-first-site`
   - Run: `git init`
   - You should see: `Initialized empty Git repository in ...`
   - This creates a hidden `.git` folder—Git now tracks this directory

4. **Check your status**
   - Run: `git status`
   - Git lists all untracked files in red—these are files Git sees but isn't tracking yet
   - You'll see `index.html`, `css/styles.css`, and `js/script.js`

5. **Stage your files**
   - Staging tells Git which files to include in your next commit
   - Stage everything at once: `git add .`
   - Run `git status` again—the files should now appear in green under "Changes to be committed"

6. **Make your first commit**
   - A commit is a saved snapshot of your staged files
   - Run: `git commit -m "Initial commit: add site files"`
   - You should see output showing the branch name and files changed

7. **Verify the commit**
   - Run `git status` again
   - You should see: `nothing to commit, working tree clean`
   - Your project history has begun!

## Day 8: Viewing History and Undoing Mistakes

**Goal:** Read your project's history and recover from errors
**Setup:** Open your `my-first-site` repo from Day 7

1. **Make a small change to create history**
   - Open `index.html` and add a comment: `<!-- updated on day 8 -->`
   - Save the file, then stage and commit: `git add . && git commit -m "Add day 8 comment"`

2. **View your commit history**
   - Run: `git log`
   - You'll see each commit with its full hash, author, date, and message
   - Press `q` to exit the log view

3. **View a compact history**
   - Run: `git log --oneline`
   - This shows each commit on one line: a short hash followed by the message
   - Much easier to scan when a project has many commits

4. **See what changed before staging**
   - Modify `index.html` again—add or change any text
   - Run: `git diff`
   - Lines starting with `+` were added; lines starting with `-` were removed

5. **See what is already staged**
   - Stage your change: `git add index.html`
   - Run: `git diff --staged`
   - This shows the diff between your last commit and what is staged

6. **Discard file changes**
   - Make another small edit to `index.html` but do not stage it
   - Run: `git restore index.html`
   - Check the file—your edit is gone, restored to the last committed version

7. **Unstage a file**
   - Stage `index.html` again: `git add index.html`
   - Run: `git restore --staged index.html`
   - Run `git status`—the file is back to unstaged (modified but not staged)

8. **Amend the last commit message**
   - If you just committed with a typo, you can fix it immediately
   - Run: `git commit --amend -m "Add day 8 comment (corrected)"`
   - This rewrites the most recent commit—only do this before pushing to GitHub

## Day 9: GitHub — Backup and Sharing

**Goal:** Push your project to GitHub for cloud backup and sharing
**Setup:** Create a free account at [github.com](https://github.com) if you don't have one

1. **Create a new repository on GitHub**
   - Click the `+` button in the top-right and choose "New repository"
   - Name it `my-first-site`
   - Set it to Public
   - Do not check "Add a README file" or "Add .gitignore"—your repo already has files
   - Click "Create repository"

2. **Copy the remote URL**
   - After creating the repo, GitHub shows a quick-setup page
   - Copy the HTTPS URL—it looks like `https://github.com/your-username/my-first-site.git`

3. **Connect your local repo to GitHub**
   - Back in your terminal, inside `my-first-site`:
   - Run: `git remote add origin https://github.com/your-username/my-first-site.git`
   - `origin` is the standard name for your primary remote

4. **Rename the branch to main**
   - Run: `git branch -M main`
   - This ensures your branch name matches GitHub's default

5. **Push to GitHub**
   - Run: `git push -u origin main`
   - The `-u` flag sets `origin main` as the default tracking branch for future pushes
   - You may be prompted to log in—use your GitHub credentials or a personal access token

6. **Verify on GitHub.com**
   - Refresh your GitHub repo page
   - You should see all your files listed with your commit message
   - Click on a file to view its contents

7. **Make a change, commit, and push again**
   - Edit `index.html` locally—add a heading or update some text
   - Stage and commit: `git add . && git commit -m "Update homepage content"`
   - Push with just: `git push`
   - Refresh GitHub—your update appears immediately

8. **Bonus: Clone a repository**
   - Cloning downloads any GitHub repo to your machine
   - Run: `git clone https://github.com/some-user/some-repo.git`
   - This creates a new folder with the full project and its entire history
   - Try cloning a public project you find interesting

## Phase 3 Checklist

By the end of Phase 3, you should be comfortable with:

- Installing Git and configuring your name and email
- Initializing a repository with `git init`
- Checking file status with `git status`
- Staging files with `git add`
- Creating commits with `git commit -m`
- Viewing full commit history with `git log`
- Viewing compact history with `git log --oneline`
- Inspecting unstaged changes with `git diff`
- Inspecting staged changes with `git diff --staged`
- Discarding edits with `git restore`
- Unstaging files with `git restore --staged`
- Correcting the last commit with `git commit --amend`
- Connecting a local repo to GitHub with `git remote add origin`
- Pushing to GitHub with `git push -u origin main`

## Quick Reference

| Command | What it does |
|---------|--------------|
| `git init` | Initialize a new local repository |
| `git config --global user.name` | Set your commit author name |
| `git status` | Show staged, unstaged, and untracked files |
| `git add .` | Stage all changes in the current directory |
| `git commit -m "msg"` | Commit staged changes with a message |
| `git log` | View full commit history |
| `git log --oneline` | View compact one-line history |
| `git diff` | Show unstaged changes |
| `git diff --staged` | Show staged changes |
| `git restore <file>` | Discard unstaged changes to a file |
| `git restore --staged <file>` | Unstage a file |
| `git commit --amend -m` | Rewrite the last commit message |
| `git remote add origin <url>` | Connect local repo to a remote |
| `git branch -M main` | Rename current branch to main |
| `git push -u origin main` | Push and set the tracking branch |
| `git push` | Push to the tracked remote branch |
| `git clone <url>` | Download a remote repo locally |
: Command reference for Phase 3
