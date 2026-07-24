---
title: "Phase 1: Operate"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
             PHASE 1 : OPERATE

      terminal                  editor
     +----------+             +----------+
     | $ cd     |             | [] files |
     | $ ls     |   <----->   | [] tree  |
     | $ mkdir  |             | Cmd + P  |
     +----------+             +----------+
      move & run               see & edit

     just enough to get around, nothing more

        Days 2-3   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 1: Operate

**Days 2-3 | ~1 hour per day**

Your tools are installed. Now you learn to move around — first in the terminal, then in the editor.

The goal here is deliberately small. You need enough to navigate folders, create a project, and run things. You do not need to become a terminal expert, because from Phase 3 onward Claude Code creates and edits files for you. Think of this as learning where the rooms are, not memorizing every switch.

::: tip
**Map first.** Before you touch a command, answer two things: where am I in the file system right now, and where do I want to end up? Every terminal session is just moving between folders and doing something once you arrive. Hold that picture and the commands stop feeling cryptic.
:::

## Day 2: Moving Around the Terminal

**Goal:** Navigate your file system and create the project folder you will use for the rest of the course.

**Setup:** Open your terminal — the Terminal app on macOS, or Git Bash on Windows.

1. **See where you are**
   - Run `pwd` to print your current folder (the "working directory").
   - This answers the first map question: where am I?

2. **See what is around you**
   - Run `ls` to list the files and folders in your current location.
   - Run `ls -la` to see everything, including hidden files, with details.

3. **Move into a folder**
   - Run `cd Documents` to move into your Documents folder.
   - Run `pwd` again to confirm you moved.
   - Run `cd ..` to go back up one level. The `..` always means "the folder above this one."

4. **Create your project folder**
   - Make sure you are in Documents: `cd Documents`.
   - Run `mkdir my-first-site` to create the project you will carry through the whole course.
   - Move into it: `cd my-first-site`.

5. **Give the project some structure**
   - Create two folders inside it in one command: `mkdir css js`.
   - Run `ls` to confirm both appear. This is the skeleton of a simple website — a place for styles and a place for scripts.

6. **Practice the file-moving basics**
   - Copy a file: `cp source.txt copy.txt` duplicates a file (you will use this rarely, but know it exists).
   - Rename or move: `mv oldname.txt newname.txt` renames; `mv file.txt css/` moves it into the css folder.
   - Delete: `rm file.txt` removes a file. There is no undo, so read the name twice before pressing enter.

7. **Read a file and clear the screen**
   - Run `cat filename` to print a file's contents to the terminal.
   - Run `clear` to wipe the screen clean when it gets cluttered.

::: note
**Why we skip creating and editing files by hand.** You may have seen tutorials use `touch` to make files and `nano` to edit them in the terminal. We skip those on purpose. From Phase 3, Claude Code creates and edits files for you, and when you want to edit by hand you will use the editor, which is far friendlier. Here you only need to move around and run things.
:::

## Day 3: Working in the Editor

**Goal:** Open your project in the editor, learn the panels, create your first files, and find the built-in terminal.

**Setup:** Open Cursor or VS Code.

1. **Open your project folder**
   - Go to File, then Open Folder (`Cmd + O` on Mac, `Ctrl + O` on Windows).
   - Choose the `my-first-site` folder you made yesterday.
   - The left panel now shows your project — the css and js folders are there.

2. **Learn the four regions**
   - The file explorer on the left lists your files and folders.
   - The editor in the center is where you read and change code.
   - The status bar along the bottom shows the current file's details.
   - The activity bar on the far left switches between files, search, and extensions.

3. **Create your first file**
   - Right-click in the file explorer and choose New File.
   - Name it `index.html` — this will be your site's home page.
   - Leave it empty for now; Claude Code fills it in during Phase 5.

4. **Create a file inside a folder**
   - Right-click the `css` folder, choose New File, and name it `styles.css`.
   - Notice the file appears nested under css, matching the structure you built in the terminal.

5. **Open files fast**
   - Press `Cmd + P` (Mac) or `Ctrl + P` (Windows) and start typing `index`.
   - The editor filters to matching files; press Enter to open. This is much faster than clicking.

6. **Search across the project**
   - Press `Cmd + F` (Mac) or `Ctrl + F` (Windows) to search inside the open file.
   - Press `Cmd + Shift + F` (Mac) or `Ctrl + Shift + F` (Windows) to search across every file at once.

7. **Find the built-in terminal**
   - Press `` Ctrl + ` `` (the backtick key, below Escape) to open a terminal inside the editor.
   - Notice it already sits in your project folder — run `ls` to confirm.
   - This is where you will run Claude Code from Phase 3 on, so your editor becomes your whole workbench.

::: note
**Windows terminal choice.** Inside the editor you can pick which terminal opens. Choose Git Bash if prompted, so the commands you run match the Mac examples in this course. You set this in the terminal panel's dropdown, or in settings under "default profile."
:::

## Phase 1 Checklist

By the end of Phase 1, you should be comfortable with:

- Knowing where you are with `pwd` and what is around you with `ls`
- Moving between folders with `cd` and `cd ..`
- Creating folders with `mkdir`
- The existence of `cp`, `mv`, and `rm` for copying, moving, and deleting
- Opening a project folder in the editor
- Creating files and folders from the editor
- Opening files fast with `Cmd/Ctrl + P`
- Finding the built-in terminal

## Quick Reference

| Command | What it does |
|--------------|------------------------------------------|
| `pwd` | Print the folder you are in |
| `ls` | List files and folders |
| `ls -la` | List everything, with details |
| `cd folder` | Move into a folder |
| `cd ..` | Move up one level |
| `mkdir name` | Create a folder |
| `cp a b` | Copy a file |
| `mv a b` | Move or rename a file |
| `rm file` | Delete a file (no undo) |
| `cat file` | Print a file's contents |
| `clear` | Clear the terminal screen |
: The terminal commands you actually need.

## Next

You can move around and you have a project. In **Phase 2: Version Control**, you learn to track every change to it with Git and back it up to GitHub — so nothing you build is ever truly lost.
