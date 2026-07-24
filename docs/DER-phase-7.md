---
title: "Phase 7: Design-to-Code Seam"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
     PHASE 7 : DESIGN-TO-CODE SEAM

     design decisions
        |  why  -> a decisions doc
        v  what -> values
     tokens -> CSS variables -> components
        |
     one change flows everywhere, traceably

     + media assets with FFmpeg (resize, gif)

        Days 17-19   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 7: Design-to-Code Seam

**Days 17-19 | ~1 hour per day**

This is the phase most about *design* engineering.

The seam is where a design decision becomes working code. Done badly, it is manual translation — a designer picks a color, an engineer retypes the hex value somewhere, and the two drift apart. Done well, it is a clean pipeline: decisions flow into tokens, tokens into code, and one change updates everything. Learning to build that seam is the clearest mark of a design engineer.

::: tip
**Map first.** Ask where each design decision *lives*. A good system has one home for the reasoning (why this color), one home for the value (the actual color), and code that reads the value rather than repeating it. When you can trace a color on screen back to a single named decision, the seam is working.
:::

## Day 17: Tokens as the Contract

**Goal:** Build the pipeline from design decisions to tokens to components, with nothing hardcoded.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand the seam as a contract**
   - Tokens are the agreement between design and code: design names the decisions, code consumes them by name. Neither side hardcodes a raw value.
   - Ask Claude: `Explain how design tokens act as a contract between a design and its code.`

2. **Separate decisions from values**
   - Keep two homes. A decisions doc holds the reasoning — why the primary color is what it is, what the spacing scale means. A token file holds the actual values.
   - Ask Claude: `Create a docs/design-decisions.md for the reasoning, and make sure the real values live in the token file. Explain the split.`

3. **Trace a value end to end**
   - Ask Claude: `Take the primary color and show me its full path — from the decision, to the token, to the CSS variable, to where a component uses it.`
   - Following that chain is understanding the seam. Every on-screen value should trace back to one decision.

4. **Understand design as the source**
   - In real work, the decisions often start in a design tool like Figma, and the tokens are pulled from it so code and design never drift. You will connect Figma directly in Phase 8; today the point is the pipeline itself.

5. **Prove the payoff**
   - Ask Claude: `Change one token and list every place on the site that updates.`
   - One decision, many updates, all traceable. That is the contract holding.

## Day 18: Components That Document Themselves

**Goal:** Make components self-describing so their documentation is generated, not hand-written.

**Setup:** Open Claude Code inside `my-first-site`.

1. **See why docs drift**
   - Hand-written documentation goes stale the moment the code changes and nobody updates the doc. The fix is to generate docs from the code itself.
   - Ask Claude: `Explain why manually written component docs drift out of date, and how generating them from the code fixes it.`

2. **Make a component describe itself**
   - Ask Claude: `Take a component in the project and give it a small metadata description — its name, purpose, and options.`
   - The component now carries its own facts, next to its code.

3. **Generate documentation from it**
   - Ask Claude: `Generate a simple documentation page for that component from its metadata, and explain how this stays in sync automatically.`
   - Because the docs are built from the metadata, they cannot silently fall out of date.

4. **Understand the principle**
   - Ask Claude: `Summarize the idea of a "self-describing component" and why it matters for a design system.`
   - This is how real design systems keep dozens of components documented without an army of writers.

5. **Commit the seam work**
   - Run `git add .`, `git commit -m "Build the tokens seam and self-describing component"`, `git push`.

## Day 19: Working with Media Assets

**Goal:** Handle images and video with FFmpeg — a core skill for a designer who now ships.

**Setup:** Open Claude Code inside `my-first-site`. Have an image or short video handy.

1. **Understand FFmpeg**
   - FFmpeg is a powerful command-line tool for working with media — converting formats, resizing, optimizing, extracting frames, and more. It is the engine behind most media work.
   - Ask Claude: `Explain what FFmpeg is and the kinds of media jobs it handles.`

2. **Optimize an image**
   - Put an image in the project. Ask Claude: `Resize and optimize this image for the web, and explain what changed and why it is smaller.`

3. **Extract a frame from a video**
   - With a short video handy, ask Claude: `Pull a single frame from this video as an image, and explain the command.`

4. **Turn a video into a GIF**
   - Ask Claude: `Convert this short video into an optimized GIF and explain the trade-offs in size and quality.`

5. **Understand what wraps this**
   - You do not need to memorize FFmpeg's commands. In Phase 8 you install a skill called `media-processing` that packages exactly these jobs, so you ask in plain English and it runs the right command.
   - Ask Claude: `Summarize the media jobs I just did and how a skill would make them repeatable.`

::: note
**Why media belongs in this phase.** As a designer who ships, you own the assets as well as the layout. Knowing that images and video are just another thing code can process — resize, optimize, convert — closes a gap that often forces designers to hand work off. It stays in your control.
:::

## Phase 7 Checklist

By the end of Phase 7, you should be comfortable with:

- Tokens as the contract between design and code
- Splitting decisions (the why) from values (the what)
- Tracing an on-screen value back to a single decision
- Why hand-written docs drift and how generation fixes it
- Making a component self-describing
- Generating documentation from component metadata
- Using FFmpeg to resize, optimize, extract frames, and make GIFs

## Quick Reference

| Piece | Purpose |
|--------------------------|--------------------------------------------|
| Token contract | Design names decisions; code reads them |
| Decisions doc | The reasoning behind each value (the why) |
| Token file | The actual values (the what) |
| Traceability | Every screen value maps to one decision |
| Self-describing component | Carries its own metadata |
| Generated docs | Built from metadata, never drift |
| FFmpeg | Resize, optimize, convert, extract media |
: The design-to-code seam and media toolkit.

## Next

You have built a real seam. In **Phase 8: Extending Claude Code**, you learn to package repeatable work into your own skills and connect Claude Code to outside services — including Figma, so the seam reaches all the way back to your designs.
