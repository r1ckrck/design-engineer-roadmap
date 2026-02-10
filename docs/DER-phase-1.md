---
title: "Phase 1: Command Line Fundamentals"
author: "Arnesh Mandal"
version: "1.0"
date: "2026-02-09"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
            PHASE 1: COMMAND LINE MASTERY

      Day 1        Day 2         Day 3        Day 4
        |            |             |            |
        v            v             v            v
    +-------+    +-------+    +---------+   +---------+
    | pwd   |    | nvm   |    | mkdir   |   | find    |
    | cd    | -> | npm   | -> | cp/mv   | ->| grep    |
    | ls    |    | node  |    | rm      |   | pipes   |
    +-------+    +-------+    +---------+   +---------+
    Navigate     Install      Manipulate    Search &
    Folders      Tools        Files         Filter

           From GUI clicks to terminal commands
  \end{lstlisting}
---

# Phase 1: Command Line Fundamentals

**Days 1–4 | ~30 minutes per day**

Build confidence navigating and manipulating files without a GUI.

## Day 1 (8th Jan): Getting Comfortable With Terminal

**Goal:** Learn to navigate your file system and create your first file using only the command line

1. **Open your terminal**
   - On Mac: Open the Terminal app (search in Spotlight)
   - On Windows: Open Command Prompt or PowerShell

2. **Find out where you are**
   - Use `pwd` (Mac) or `cd` (Windows) to see your current location

3. **Navigate to Documents**
   - Use `cd Documents` to move into your Documents folder
   - Use `pwd` to confirm you're in the right place

4. **Create a new folder**
   - Use `mkdir Projects` to create a folder called Projects

5. **Move into your new folder**
   - Use `cd Projects` to enter the folder you just created

6. **Create and edit a file**
   - Use `touch Hi.md` (Mac) or `echo. > Hi.md` (Windows) to create the file
   - Use `nano Hi.md` (Mac) or `notepad Hi.md` (Windows) to edit it
   - Write "Hello World" inside
   - To save: Press `Ctrl + O`, then press `Enter` to confirm
   - To exit: Press `Ctrl + X`

7. **Go back to Documents**
   - Use `cd ..` to move up one folder level

8. **List everything in Documents**
   - Use `ls` (Mac) or `dir` (Windows) to see all files and folders
   - You should see your Projects folder listed

9. **Display file contents from here**
   - Use `cat Projects/Hi.md` (Mac) or `type Projects\Hi.md` (Windows)
   - You should see "Hello World" printed in your terminal

## Day 2 (9th Jan): Setting Up Basic Tools

**Goal:** Install the essential tools you'll need for development

1. **Get your code editor**
   - Request Cursor or VS Code installation from IT
   - Once installed, open it to confirm it works

2. **Install Node.js using nvm**
   - Go to [nodejs.org](https://nodejs.org) and find the nvm installation instructions
   - Install nvm by running the curl command from the website in your terminal
   - Close and reopen your terminal (important!)
   - Run `nvm install --lts` to install the latest stable version of Node.js
   - Verify installation: `node --version`
   - Verify npm: `npm --version`

3. **Install Claude Code**
   - Run `npm install -g @anthropic-ai/claude-code`
   - *(Note: You may encounter SSL certificate issues)*

4. **If you hit SSL certificate errors**
   - Follow the instructions shared in the Teams group
   - Ask for help if you get stuck—this is a common issue!

5. **Verify everything is installed**
   - Run `node --version` → should show a version number
   - Run `npm --version` → should show a version number
   - Run `claude --version` → should show Claude Code version

## Day 3 (10th Jan): Getting More Comfortable With CLI

**Goal:** Learn more commands and build confidence working with files and folders

**Setup:** Navigate to your Projects folder from Day 1

1. **Check where you are**
   - Use `pwd` to print your current working directory
   - If not in Projects, navigate there using `cd`

2. **Create a mini project structure**
   - Create a folder called `my-first-site`
   - Inside it, create three folders: `css`, `js`, `images`
   - *(Hint: you can create multiple folders in one command with `mkdir css js images`)*

3. **Create some files**
   - Inside `my-first-site`, create an `index.html` file
   - Inside the `css` folder, create a `styles.css` file
   - Use `echo "/* My styles */" > styles.css` to add a comment to it

4. **Copy and move files**
   - Copy `Hi.md` from Documents into your `my-first-site` folder using `cp`
   - Rename it to `README.md` using the `mv` command

5. **View your work**
   - Use `ls -la` to see all files including hidden ones with details
   - Use `tree` command to see your folder structure visually
   - *(Note: `tree` may need to be installed—try it and see!)*

6. **Clean up practice**
   - Create a folder called `temp` with a file inside it
   - Delete the file using `rm`
   - Delete the empty folder using `rmdir`

7. **Bonus: Learn to help yourself**
   - Use `man ls` or `ls --help` to read about command options
   - Try `history` to see all commands you've run today

## Day 4 (13th Jan): Searching, Finding, and Reading Files

**Goal:** Learn to find files, search within files, and read file contents efficiently

**Setup:** Navigate to your `my-first-site` folder from Day 3

1. **Add some content to work with**
   - Run `nano index.html` and add this text: `<!DOCTYPE html><html><head><title>My Site</title></head><body><h1>Welcome</h1></body></html>`
   - Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`)
   - Run `nano css/styles.css` and add: `body { background: blue; } h1 { color: white; }`
   - Save and exit
   - Run `nano README.md` and add a few lines about the project
   - Save and exit

2. **Read files in different ways**
   - Use `cat index.html` to print the entire file
   - Use `head -5 README.md` to see only the first 5 lines
   - Use `tail -3 README.md` to see only the last 3 lines

3. **Find files by name**
   - Use `find . -name "*.css"` to find all CSS files
   - Use `find . -name "*.md"` to find all Markdown files
   - Use `find . -type d` to find all directories
   - *(The `.` means "start searching from current folder")*

4. **Search inside files**
   - Use `grep "color" css/styles.css` to find lines containing "color"
   - Use `grep -r "html" .` to search for "html" in all files recursively
   - Use `grep -i "WELCOME" index.html` to search case-insensitively

5. **Combine commands with pipes**
   - Use `cat index.html | grep "title"` to find title in the file
   - Use `ls -la | grep ".css"` to filter list for CSS files only
   - Use `history | grep "mkdir"` to find all mkdir commands you've used

6. **Check file details**
   - Use `wc -l index.html` to count lines in a file
   - Use `wc -w README.md` to count words in a file
   - Use `file index.html` to see what type of file it is

7. **Bonus: Clear and refresh**
   - Use `clear` to clean up your terminal screen
   - Use `pwd` and `ls` to reorient yourself
   - Practice the `find` and `grep` commands a few more times

## Phase 1 Checklist

By the end of Phase 1, you should be comfortable with:

- Opening and using the terminal
- Navigating between folders (`cd`, `pwd`, `ls`)
- Creating files and folders (`touch`, `mkdir`)
- Moving, copying, renaming files (`mv`, `cp`)
- Deleting files and folders (`rm`, `rmdir`)
- Reading file contents (`cat`, `head`, `tail`)
- Finding files (`find`)
- Searching within files (`grep`)
- Using pipes to combine commands (`|`)
- Getting help (`man`, `--help`)

## Quick Reference

| Command | What it does |
|-----------|----------------------------------------------|
| `pwd` | Print working directory (where am I?) |
| `ls` | List files and folders |
| `ls -la` | List all files with details |
| `cd folder` | Change directory into folder |
| `cd ..` | Go up one level |
| `mkdir name` | Create a new folder |
| `touch file` | Create a new file (Mac) |
| `cp source dest` | Copy a file |
| `mv source dest` | Move or rename a file |
| `rm file` | Delete a file |
| `rmdir folder` | Delete an empty folder |
| `cat file` | Display file contents |
| `head -n file` | Show first n lines |
| `tail -n file` | Show last n lines |
| `find . -name "x"` | Find files named x |
| `grep "text" file` | Search for text in file |
| `grep -r "text" .` | Search in all files |
| `history` | Show command history |
| `clear` | Clear terminal screen |
: Command reference for Phase 1
