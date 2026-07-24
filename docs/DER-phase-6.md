---
title: "Phase 6: See It Running"
author: "Arnesh Mandal"
version: "2.0"
date: "2026-07-24"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
        PHASE 6 : SEE IT RUNNING

     code -> localhost:5173 -> your browser
                    |
           look -> feedback -> change -> look

     ways to run:  dev server . python . static

     Playwright: drive a real browser when needed
     native web search + fetch come first

         Days 14-16   |   ~1 hour a day
  \end{lstlisting}
---

# Phase 6: See It Running

**Days 14-16 | ~1 hour per day**

You have built an interface, but you have not yet looked at it. This phase closes that gap.

Seeing your work run is not a technicality — it is the whole feedback loop. You look, you react as a designer, you direct a change, you look again. Most people never learn how the thing they build actually gets shown to them. You will, and you will learn the different ways software runs so none of it feels like magic.

::: tip
**Map first.** When something "runs," ask where it is running and how you reach it. A website in development runs as a small server on your own machine, and you reach it through a browser at an address like `localhost:5173`. Understand that sentence and local hosting stops being mysterious.
:::

## Day 14: Local Hosting and the Browser

**Goal:** Run your site on your own machine and view it in a browser.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand localhost and ports**
   - `localhost` means "this computer." When you run a website in development, your machine acts as a small web server, serving the site to you and no one else.
   - A port is a numbered door on that server, like `5173`. The full address `localhost:5173` means "the site being served on door 5173 of this computer."

2. **Start the dev server**
   - Ask Claude: `Start the development server for this site and tell me the address to open.`
   - It runs the project (the command behind this is usually `npm run dev`) and gives you a `localhost` address.

3. **Open it and look**
   - Open the address in your browser. There is your site, running live.
   - This is the first time you see what you have been directing. Take it in as a designer.

4. **Watch it update live**
   - With the server still running, ask Claude to change something visible — a color, a heading.
   - Switch to the browser. It updates almost instantly. This live-reload is why development feels fast.

5. **Understand what is happening**
   - Ask Claude: `Explain what "npm run dev" is doing and why the browser updates when a file changes.`

## Day 15: The Feedback Loop and Other Ways to Run

**Goal:** Practice the look-feedback-change loop, and understand that different things run in different ways.

**Setup:** Have your dev server running, with the site open in your browser.

1. **Run the loop deliberately**
   - Look at your site and name one thing you would improve as a designer.
   - Tell Claude the change in plain terms. Watch the browser update. Judge the result. Repeat.
   - This loop — look, feedback, change, look — is how real interfaces get good.

2. **Understand: not everything runs the same way**
   - Your site runs through a Node dev server. Other things run differently, and it helps to recognize which is which.

3. **Node dev server**
   - Modern web projects (like yours) run with a dev server you start with a command, serving on a `localhost` port with live reload.

4. **Python-hosted**
   - Some tools are built in Python and run their own small server. For example, a 3D model viewer or a data tool might start with a Python command and open on its own `localhost` port.

5. **Static file**
   - The simplest case: a single HTML file with no server at all. You just open the file in a browser. No `localhost`, no port.

6. **Know which you are looking at**
   - Ask Claude: `For this project, which of these three is it, and how would that change if it were a plain HTML file or a Python tool?`
   - Recognizing how something runs tells you how to view it and give feedback on it.

## Day 16: Driving a Real Browser with Playwright

**Goal:** Add Playwright to drive a full browser for testing and tricky pages — while keeping native web tools as your default.

**Setup:** Open Claude Code inside `my-first-site`.

1. **Understand when a browser tool is needed**
   - Claude Code already searches the web and reads pages on its own — that is the default for looking things up.
   - Playwright is different: it drives a real browser that can click, scroll, screenshot, and test. You reach for it in three cases: testing your own site, viewing something in a real visible browser, or reaching a page that blocks simple reads.

2. **Install Playwright and Chromium**
   - Ask Claude: `Install Playwright and the Chromium browser for it, and explain why Chromium rather than my everyday Chrome.`
   - Chromium is the open, automation-friendly browser Playwright drives; keeping it separate leaves your normal browser untouched.

3. **Understand headless versus headed**
   - Headless means the browser runs invisibly in the background — fast, good for automated checks.
   - Headed means a real browser window opens on your screen, so you watch it work.

4. **Try a headless check**
   - With your dev server running, ask Claude: `Use Playwright to open my local site and take a screenshot, headless.`
   - You get an image of your running site, captured by the browser with no window opening.

5. **Try headed mode and understand bot-blocking**
   - Ask Claude: `Now open my site in headed mode so I can watch the browser.`
   - A window opens and drives itself. This visible mode also matters because some websites block invisible (bot-like) browsers — running headed can get through where headless is stopped.

6. **Keep the defaults straight**
   - Ask Claude: `Remind me when to use built-in web search versus Playwright.`
   - The answer: native search and fetch for reading and researching; Playwright only for testing your build, watching a real browser, or getting past a block. Do not let the powerful tool crowd out the simple one.

::: note
**From local to shipped.** Everything today ran on `localhost` — visible only to you, for previewing and giving feedback. Shipping is the next step up: putting the site on a real server so anyone can reach it at a public address. That can be your own server or a hosting service. You will do a full deploy in Phase 10.
:::

## Phase 6 Checklist

By the end of Phase 6, you should be comfortable with:

- What `localhost` and a port mean
- Starting a dev server and opening the site in a browser
- Watching live reload as files change
- Running the look-feedback-change loop deliberately
- Telling apart a dev server, a Python-hosted tool, and a static file
- Installing Playwright with Chromium
- Headless versus headed browsing, and why headed helps with bot-blocking
- Keeping native web search and fetch as the default

## Quick Reference

| Way it runs | How you reach it |
|-----------------------|-------------------------------------------|
| Node dev server | A `localhost` port, started with a command |
| Python-hosted tool | Its own `localhost` port, Python command |
| Static file | Open the HTML file directly, no server |
| Playwright headless | Invisible browser for automated checks |
| Playwright headed | Visible browser window you can watch |
: Ways software runs, and how you view each.

## Next

You can see and test your work. In **Phase 7: Design-to-Code Seam**, you go deep on the most important design-engineer skill: turning design decisions into code through tokens, cleanly and traceably.
