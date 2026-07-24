import type { Day } from "../types";
import { links } from "../links";

export const day16: Day = {
  id: 16,
  phaseId: 6,
  title: "Driving a Real Browser with Playwright",
  estMinutes: 60,
  goal: "Add Playwright to drive a full browser for testing and tricky pages — while keeping native web tools as your default.",
  outcome: "Playwright installed with Chromium, and a screenshot of your running site taken by a real browser.",
  setup: "Open Claude Code inside my-first-site.",
  steps: [
    {
      n: 1,
      title: "Understand when a browser tool is needed",
      body: [
        {
          type: "text",
          md: "Claude Code already searches the web and reads pages on its own — that is the default for looking things up.",
        },
        {
          type: "text",
          md: `[Playwright](${links.playwright}) is different: it drives a real browser that can click, scroll, screenshot, and test. You reach for it in three cases — testing your own site, viewing something in a real visible browser, or reaching a page that blocks simple reads.`,
        },
      ],
    },
    {
      n: 2,
      title: "Install Playwright and Chromium",
      body: [
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Install Playwright and the Chromium browser for it, and explain why Chromium rather than my everyday Chrome.",
        },
        {
          type: "text",
          md: "Chromium is the open, automation-friendly browser Playwright drives; keeping it separate leaves your normal browser untouched.",
        },
      ],
    },
    {
      n: 3,
      title: "Understand headless versus headed",
      body: [
        {
          type: "text",
          md: "**Headless** means the browser runs invisibly in the background — fast, good for automated checks. **Headed** means a real browser window opens on your screen, so you watch it work.",
        },
      ],
    },
    {
      n: 4,
      title: "Try a headless check",
      body: [
        {
          type: "text",
          md: "With your dev server running, take a screenshot the invisible way.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Use Playwright to open my local site and take a screenshot, headless.",
        },
        {
          type: "text",
          md: "You get an image of your running site, captured by the browser with no window opening.",
        },
      ],
    },
    {
      n: 5,
      title: "Try headed mode and understand bot-blocking",
      body: [
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Now open my site in headed mode so I can watch the browser.",
        },
        {
          type: "text",
          md: "A window opens and drives itself. This visible mode also matters because some websites block invisible, bot-like browsers — running headed can get through where headless is stopped.",
        },
      ],
    },
    {
      n: 6,
      title: "Keep the defaults straight",
      body: [
        {
          type: "copyable",
          kind: "prompt",
          label: "Paste into Claude Code",
          text: "Remind me when to use built-in web search versus Playwright.",
        },
        {
          type: "text",
          md: "The answer: native search and fetch for reading and researching; Playwright only for testing your build, watching a real browser, or getting past a block. Do not let the powerful tool crowd out the simple one.",
        },
        {
          type: "callout",
          kind: "note",
          body: "From local to shipped. Everything today ran on localhost — visible only to you, for previewing and feedback. Shipping is the next step up: putting the site on a real server so anyone can reach it at a public address. You will do a full deploy in Phase 10.",
        },
      ],
    },
  ],
  recap:
    "You installed Playwright with Chromium, took a headless screenshot and a headed run, and set the rule: native web tools first, Playwright only when you truly need a real browser.",
};
