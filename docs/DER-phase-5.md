---
title: "Phase 5: Web, Guided"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
           PHASE 5 : WEB, GUIDED

     you direct -> Claude writes -> you read

     HTML   = structure   (the bones)
     CSS    = style       (the skin)
     React  = components   (reusable parts)
     Tailwind + tokens = design system in code

     never hand-typed  .  always understood

         Days 11-13   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 5: Web, Guided

**Days 11-13 | ~1 hour per day**

Now you build a real web interface — without hand-typing a single line of code.

This is the guided approach in full. Claude Code writes the HTML, CSS, and components; your job is to direct clearly and then understand what came back. By the end you will know what these web technologies *are* and how they fit together, learned by reading real code you directed into existence rather than by memorizing syntax.

::: important
**The pattern for every day this phase.** Build, then understand. First ask Claude to make something. Then ask it to walk you through what it wrote. The walk-through is not optional — it is where the learning happens. You are training your eye to read code, which is the skill that lets you direct it well.
:::

## Day 11: The Bones and the Skin

**Goal:** Understand HTML (structure) and CSS (style) by directing changes to your home page.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand HTML as structure**
   - HTML is the skeleton of a page — headings, paragraphs, sections, buttons. It says *what* things are.
   - Ask Claude: `Walk me through my index.html and explain how HTML describes the structure of a page.`

2. **Understand CSS as style**
   - CSS controls how things look — color, size, spacing, layout. It says *how* things appear.
   - Ask Claude: `Add some clean CSS to style the home page, then explain how CSS selectors target elements.`

3. **Meet the box model**
   - Every element on a page is a box with content, padding, a border, and margin. This one idea explains most of layout.
   - Ask Claude: `Explain the box model using the elements on my page as examples.`

4. **Direct a real change**
   - Ask Claude: `Make the heading larger and add breathing room around the paragraph.`
   - Then ask: `Show me exactly which lines changed and what each one does.`
   - You just made a design decision and understood its implementation — the core loop of a design engineer.

## Day 12: Components and Why They Exist

**Goal:** Understand why modern sites are built from reusable components, and set up a React project.

**Setup:** Open Claude Code inside `my-first-site`.

1. **See the problem components solve**
   - On a plain HTML page, repeating a card or a button means copying code everywhere, and changing it means editing every copy.
   - Ask Claude: `Explain why copying HTML for repeated elements becomes a problem as a site grows.`

2. **Meet the idea of a component**
   - A component is a reusable piece of interface you define once and use many times. Change it once, it updates everywhere.
   - Ask Claude: `Explain what a UI component is, using a button or a card as the example.`

3. **Understand what React is**
   - React is the most common tool for building interfaces out of components. It is why "components" is the language of modern web work.
   - Ask Claude: `Explain what React is and why it exists, in plain terms for a designer.`

4. **Set up a modern project, guided**
   - Ask Claude: `Set up a simple React project for this site using Vite, and explain the main folders and files it creates.`
   - Approve the steps as it goes. Then read its explanation of the structure — `src`, the entry file, the first component.

5. **Understand the shape**
   - Ask Claude: `Show me the smallest component in the project and explain how it turns into what I see on screen.`
   - Commit it: `git add .`, `git commit -m "Set up React project"`, `git push`.

## Day 13: Tailwind and Design Tokens

**Goal:** Style with Tailwind and understand design tokens — the seam where design decisions become code.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand Tailwind**
   - Tailwind is a way to style by applying small, named utility classes directly to elements, instead of writing separate CSS files.
   - Ask Claude: `Add Tailwind to the project and explain how utility classes work, with an example from my page.`

2. **Meet design tokens**
   - A design token is a named design decision — a color, a spacing value, a font size — defined once and reused everywhere. This is a concept you already know from design tools, now in code.
   - Ask Claude: `Explain what design tokens are and why defining colors and spacing once, by name, matters.`

3. **Define your tokens**
   - Ask Claude: `Set up a few design tokens for this site — a primary color, a background, and a base spacing — and explain where they live.`

4. **Use them and see the payoff**
   - Ask Claude: `Restyle the home page using those tokens, then change the primary color token and show me everything that updates.`
   - Watch one change ripple everywhere. That is the power of tokens, and the heart of the design-to-code seam you go deep on in Phase 7.

5. **Understand the whole picture**
   - Ask Claude: `Summarize how HTML, CSS, React, Tailwind, and tokens fit together in this project.`
   - Commit: `git add .`, `git commit -m "Add Tailwind and design tokens"`, `git push`.

## Phase 5 Checklist

By the end of Phase 5, you should be comfortable with:

- HTML as structure and CSS as style
- The box model as the basis of layout
- Why components exist and what React is
- Setting up a React project through Claude Code
- Styling with Tailwind utility classes
- What design tokens are and why they matter
- The build-then-understand loop as your default way of working

## Quick Reference

| Technology | What it is |
|--------------|-----------------------------------------------|
| HTML | The structure of a page (what things are) |
| CSS | The style of a page (how things look) |
| Box model | Content, padding, border, margin on every element |
| Component | A reusable piece of interface, defined once |
| React | A tool for building interfaces from components |
| Tailwind | Styling with small utility classes |
| Design token | A named design decision, reused everywhere |
: The web technologies you now direct.

## Next

You have built a real interface, but you have not yet seen it running in a browser. In **Phase 6: See It Running**, you learn to host it locally, watch it live, and drive a real browser to test it.
