---
title: "Phase 2: IDE Proficiency"
author: "Arnesh Mandal"
version: "1.0"
date: "2026-02-09"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
              PHASE 2: IDE POWER USER

         Day 5                    Day 6
           |                        |
           v                        v
    +--------------+         +--------------+
    | File Explorer|         | Cmd+P        |
    | Tabs & Split |    -->  | Multi-cursor |
    | Syntax Color |         | Extensions   |
    +--------------+         +--------------+
    Open & Navigate          Shortcuts & Speed

              +------------------+
              | Built-in Terminal|
              | (Best of Both!)  |
              +------------------+

        Code editor becomes your command center
  \end{lstlisting}
---

# Phase 2: IDE Proficiency

**Days 5–6 | ~30 minutes per day**

Learn to work efficiently in a code editor.

## Day 5: IDE Basics

**Goal:** Get comfortable opening projects, navigating files, and making edits in your code editor

**Setup:** Open Cursor or VS Code

1. **Open your project folder**
   - Go to File → Open Folder (or `Cmd + O` on Mac / `Ctrl + O` on Windows)
   - Navigate to your `my-first-site` folder from Phase 1
   - Notice the file explorer panel on the left showing your project structure

2. **Explore the interface**
   - **File Explorer (left):** Shows all files and folders in your project
   - **Editor (center):** Where you write and edit code
   - **Status Bar (bottom):** Shows file info, line number, language
   - **Activity Bar (far left):** Icons for different panels (files, search, git, extensions)

3. **Open and edit files**
   - Click on `index.html` in the file explorer to open it
   - Notice syntax highlighting—different colors for different parts of the code
   - Add a new line inside `<body>`: `<p>This is my first paragraph.</p>`
   - Save the file with `Cmd + S` (Mac) or `Ctrl + S` (Windows)

4. **Work with multiple files**
   - Click on `css/styles.css` to open it in a new tab
   - You now have two tabs open at the top of the editor
   - Click between tabs to switch files
   - Try dragging a tab to the right side to split the editor view

5. **Create a new file from the IDE**
   - Right-click on the `js` folder in the file explorer
   - Select "New File"
   - Name it `script.js`
   - Add this content: `console.log("Hello from JavaScript!");`
   - Save the file

6. **Create a new folder from the IDE**
   - Right-click in the file explorer (in empty space)
   - Select "New Folder"
   - Name it `assets`

7. **Use the minimap**
   - Look at the right side of the editor—there's a small preview of your code
   - This is the minimap—useful for navigating large files
   - Click on different parts of the minimap to jump around

## Day 6: Shortcuts, Extensions, and Integrated Terminal

**Goal:** Speed up your workflow with keyboard shortcuts, extensions, and the built-in terminal

**Setup:** Open your `my-first-site` project in Cursor or VS Code

### Part 1: Essential Shortcuts

1. **Quick file opening**
   - Press `Cmd + P` (Mac) or `Ctrl + P` (Windows)
   - Start typing `index` and see it filter files
   - Press `Enter` to open the file
   - This is faster than clicking through folders!

2. **Find and replace**
   - Open `index.html`
   - Press `Cmd + F` (Mac) or `Ctrl + F` (Windows) to open Find
   - Search for "Welcome"
   - Press `Cmd + Shift + F` (Mac) or `Ctrl + Shift + F` (Windows) to search across all files

3. **Multi-cursor editing**
   - In `styles.css`, hold `Option` (Mac) or `Alt` (Windows) and click in multiple places
   - You now have multiple cursors—type and it appears in all locations
   - Press `Escape` to go back to one cursor

4. **Duplicate and move lines**
   - Place your cursor on any line
   - Press `Shift + Option + Down` (Mac) or `Shift + Alt + Down` (Windows) to duplicate the line
   - Press `Option + Up/Down` (Mac) or `Alt + Up/Down` (Windows) to move the line

5. **Comment code quickly**
   - Select a line or block of code
   - Press `Cmd + /` (Mac) or `Ctrl + /` (Windows) to toggle comments
   - Try it on your CSS rules

6. **Command Palette**
   - Press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows)
   - This opens the Command Palette—you can search for any action
   - Type "theme" and explore changing the color theme

### Part 2: Extensions

7. **Open the Extensions panel**
   - Click the Extensions icon in the Activity Bar (looks like 4 squares)
   - Or press `Cmd + Shift + X` (Mac) or `Ctrl + Shift + X` (Windows)

8. **Install useful extensions**
   - Search for and install these beginner-friendly extensions:
   - **Prettier:** Auto-formats your code to look clean
   - **Live Server:** Preview your HTML in a browser with auto-refresh
   - **Auto Rename Tag:** When you edit an HTML tag, it updates the closing tag too

9. **Try Live Server**
   - Open `index.html`
   - Right-click in the editor and select "Open with Live Server"
   - Your browser should open showing your page!
   - Make a change to the HTML, save, and watch the browser update automatically

### Part 3: Integrated Terminal

10. **Open the integrated terminal**
    - Press `` Ctrl + ` `` (backtick key, below Escape)
    - A terminal panel opens at the bottom of your IDE
    - Notice it's already in your project folder!

11. **Run commands without leaving your editor**
    - Try `ls` (Mac) or `dir` (Windows) to see your files
    - Try `pwd` to confirm your location
    - Try `cat index.html` to view file contents

12. **Multiple terminals**
    - Click the `+` icon in the terminal panel to open a new terminal
    - You can have multiple terminals running at once
    - Use the dropdown to switch between them

13. **Close and reopen terminal**
    - Press `` Ctrl + ` `` again to hide the terminal
    - Press it once more to show it again

## Phase 2 Checklist

By the end of Phase 2, you should be comfortable with:

- Opening a project folder in your IDE
- Navigating files using the file explorer
- Working with multiple files and tabs
- Creating new files and folders from the IDE
- Using `Cmd/Ctrl + P` to quickly open files
- Using `Cmd/Ctrl + F` to find text
- Using `Cmd/Ctrl + Shift + F` to search across files
- Using multi-cursor editing
- Using `Cmd/Ctrl + /` to comment code
- Installing and using extensions
- Using the integrated terminal
- Running Live Server to preview your work

## Shortcut Quick Reference

| Action | Mac | Windows |
|-------------|-----------|-----------|
| Save file | `Cmd + S` | `Ctrl + S` |
| Quick open file | `Cmd + P` | `Ctrl + P` |
| Find in file | `Cmd + F` | `Ctrl + F` |
| Find in all files | `Cmd + Shift + F` | `Ctrl + Shift + F` |
| Command Palette | `Cmd + Shift + P` | `Ctrl + Shift + P` |
| Toggle comment | `Cmd + /` | `Ctrl + /` |
| Duplicate line | `Shift + Option + Down` | `Shift + Alt + Down` |
| Move line up/down | `Option + Up/Down` | `Alt + Up/Down` |
| Multi-cursor | `Option + Click` | `Alt + Click` |
| Toggle terminal | `` Ctrl + ` `` | `` Ctrl + ` `` |
| Extensions panel | `Cmd + Shift + X` | `Ctrl + Shift + X` |
: Keyboard shortcuts for IDE workflow
