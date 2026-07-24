# Website UX and Content Model

The design spine for the Design Engineer Roadmap website — how a day's page is laid out, how the content is modeled as data, and the components that render it. Companion to `website-features.md`, which lists the features; this document defines how they fit together.

## Anatomy of a Day Page

The screen learners live in. Everything serves the read-do-understand loop.

```
+- SIDEBAR ---------+ +- Phase 4 . Day 9 -------------  32% ----+
| FOUNDATIONS       | |                                         |
|  0 Orient       x | |  DAY 9                                  |
|  1 Operate      x | |  Tiers, Load Tables & Iteration         |
|  2 Version ctl  x | |  ~1 hour        [ mark day complete ]   |
|  3 Claude core  x | |                                         |
| ENGINEERING       | |  Goal - ...                             |
| v 4 Context       | |  By the end you'll have - ...           |
|    Day 8        x | |                                         |
|    Day 9        o | |  , MAP FIRST - pinned phase callout --, |
|    Day 10         | |  '-------------------------------------' |
|  5 Web            | |                                         |
|  6 See it run     | |  1 - Understand the three tiers         |
|  ...              | |      explanation paragraph...           |
|                   | |      > Why this matters   (disclosure)  |
| [ OS:  Mac v ]    | |                                         |
|                   | |  2 - Add a load table                   |
|                   | |      +---------------------------+ [copy]|
|                   | |      | Ask Claude: Add a small.. | Paste |
|                   | |      +---------------------------+ Claude|
|                   | |                                         |
|                   | |  - Recap -   what you just built        |
|                   | |  [ < Day 8 ]                [ Day 10 > ] |
+-------------------+ +-----------------------------------------+
```

Reading order, top to bottom: where am I, what today gives me, the mindset, numbered steps (each: explain, then copyable, then optional deeper detail), recap, move on. The sidebar is always present for jumping; prev/next is the default forward motion.

## The Step, Close Up

The step is the workhorse. Every step is the same shape, so hundreds of them stay consistent.

| Part | Behavior |
|---|---|
| Number + title | Anchor target; hover reveals a link icon |
| Explanation | Short, always visible — the "what and why" |
| Copyable (optional) | Boxed, labeled ("Paste into Claude Code" / "Run in terminal"), copy button gives "Copied" feedback |
| Deeper detail (optional) | Collapsed "Why this matters" — expands in place, never navigates away |
| OS variant (optional) | If the step differs by OS, it renders only the active OS's version |

The disclosure is how the site honors "don't overload" — the page reads clean, and depth is one click under any step that has it.

## Other Page Types

| Page | Contains |
|---|---|
| Landing | What this is, the two arcs, the clickable 28-day journey map, time commitment, "Start" |
| Before you start | Accounts needed, install the skills bundle, GitHub link — the pre-flight so nobody stalls on Day 1 |
| Phase overview (v2) | The phase's focus, its days, the Map-first — a breath before the first day |
| Day | The screen above — 28 of these, the heart of the site |

## Global Behaviors

State that follows the learner, all client-side — no accounts, no backend.

| Behavior | Where it lives | Effect |
|---|---|---|
| OS choice | localStorage, global | Pick Mac/Windows once; every command and step across all 28 days shows only that OS |
| Progress | localStorage, per day | Check off a day: sidebar tick, phase count (2/3), overall "Day X of 28" |
| Resume | localStorage | Returning lands the learner on the last day they were reading |
| Theme | localStorage | Dark/light, remembered |

## The Content Model

Model the content as data once, so the components render it systematically.

```
Course  { title, tagline, arcs[] }

Phase   { id, title, focus, dayRange, arc,
          mapFirst: string[],        // the 2-3 questions
          checklist: string[],
          quickRef?: Table }

Day     { id, phaseId, title, goal, estMinutes,
          outcome,                   // "what you'll have"
          setup?, steps: Step[], recap? }

Step    { n, title, body: Block[] }  // ordered blocks

Block   = Text        { md }
        | Copyable    { kind: prompt|command|url, label, text }
        | Disclosure  { summary, body: Block[] }
        | Callout     { kind: tip|note|important, body }
        | OSTabs      { mac: Block[], windows: Block[] }
```

The block-based body is the key choice: a step is an ordered list of blocks, so any step can mix explanation, a copyable, a disclosure, and OS tabs in any order — which is how the real content flows. One uniform shape renders everything.

## Component Inventory

| Component | Renders | Model source |
|---|---|---|
| `Sidebar` | Phase/day tree, ticks, active dot | Course, Phases, Days |
| `DayHeader` | Goal, time, outcome, complete-toggle | Day |
| `StepList` / `Step` | Numbered steps | Day.steps |
| `Copyable` | Boxed command/prompt + copy button | Block.Copyable |
| `Disclosure` | Expand/collapse deeper detail | Block.Disclosure |
| `OSTabs` | Shows active-OS block only | Block.OSTabs + global OS state |
| `Callout` | Tip/note/important, and Map-first | Block.Callout / Phase.mapFirst |
| `Checklist` | Interactive end-of-phase list | Phase.checklist |
| `DayNav` | Prev/next + breadcrumb | Day neighbors |
| `ProgressStore` | localStorage read/write | — |

## Getting Content Into the Model

The 11 markdown files are mined once into the model — by hand or Claude-assisted — mapping each "Ask Claude:" line to a Copyable of kind prompt, each command to a Copyable of kind command, each Mac/Windows split to OSTabs, each callout to a Callout, and each explanation to Text. After extraction the markdown is retired as source; the model is the truth.

## MVP Build Sequence

1. Model plus one day of real content — prove the shape on Day 9 (it has steps, a copyable, a disclosure, a callout).
2. Core components — Step, Copyable, Callout, Disclosure (static, no state yet).
3. Page shell — sidebar, day route, prev/next, breadcrumb.
4. Global state — OS tabs sync, progress check-off, resume, theme.
5. Extract all 28 days into the model.
6. Landing plus before-you-start.
7. Deploy to the server.
8. v2 layer — search, glossary, journey map, keyboard navigation.

## Open Design Decisions

Two calls to settle before any build:

- The Day-page layout — is the read-do-understand order right?
- The Copyable treatment — it is the most-repeated element, so its look sets the tone.
