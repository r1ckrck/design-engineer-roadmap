# Website Features

Feature specification for the Design Engineer Roadmap website — a self-paced, interactive learning platform hosted on a personal server.

## Premise

The website is a designed product, not a rendered document. The course markdown is raw material — its content matters, its structure and formatting do not. The atomic unit of the site is an interaction (a copyable prompt, a disclosure, an OS choice), not a page of text. UX leads; content is modeled to feed it.

Priority key: **Core** = the MVP spine. **v2** = polish layered on after the spine works.

## Navigation and Wayfinding

| Feature | Why | Priority |
|---|---|---|
| Linear next / prev at the foot of every day | The "click through" spine | Core |
| Persistent sidebar: phases (collapsible) to days | Jump anywhere, any time | Core |
| "You are here" breadcrumb (Phase 4 · Day 9) | Orientation across 28 days | Core |
| Deep links — every day has its own shareable URL | Bookmark, share, resume | Core |
| Resume where you left off on return | Respects self-paced reality | Core |
| Keyboard navigation (arrows or j/k) | Fast, app-like | v2 |
| Visual journey map of all phases, clickable | See the whole arc at a glance | v2 |

## Learning Flow and Pacing

| Feature | Why | Priority |
|---|---|---|
| One day = one page (~1 hour chunk) | Matches the course's pacing | Core |
| Day header: goal, time, "what you'll have by the end" | Sets expectations up front | Core |
| Numbered steps as each day's spine | The build-then-understand rhythm | Core |
| Progressive disclosure for the "why" and deeper detail | Don't overload; depth on demand | Core |
| "Map first" pinned at each phase start | The mindset thread | Core |
| Phase overview page before its days | A breath before diving in | v2 |
| End-of-day recap plus next teaser | Momentum between sessions | v2 |

## Interactive Content

| Feature | Why | Priority |
|---|---|---|
| Copy button on every command and every Claude prompt | The core interaction | Core |
| Labeled copyables ("Run in terminal" / "Paste into Claude Code") | Removes "where does this go?" | Core |
| "Copied!" confirmation feedback | Trust the click worked | Core |
| OS tabs (Mac/Windows) that remember the choice site-wide | The biggest win over the PDF | Core |
| Styled callouts (tip / note / important) | Scannable, semantic | Core |
| External links (nodejs.org, git-scm, Figma) open in a new tab | Keep learners in place | Core |
| Link to the GitHub repo and the skills bundle download | The course's own artifacts | Core |
| Syntax highlighting on commands and code | Readability | v2 |
| Anchor links on steps (hover to copy a link) | Point someone to step 4 | v2 |

## Progress and Motivation

| Feature | Why | Priority |
|---|---|---|
| Check off each day; persisted locally | The core progress feel | Core |
| Per-phase completion (2/3 days) in the sidebar | See phases fill in | Core |
| Overall "Day X of 28" and percent complete | One honest progress number | Core |
| Interactive end-of-phase checklist | Confirm competencies, not just reading | Core |
| Reset progress | Clean restart or a second learner | v2 |

## Orientation and Support

| Feature | Why | Priority |
|---|---|---|
| Landing page: what this is, the two arcs, 28-day map, time commitment | First-run clarity | Core |
| Before you start: accounts needed, install the skills bundle | Prevents early blockers | Core |
| Search across all content | 28 days is enough to want it | v2 |
| Glossary — jargon defined, hover-tooltip on first use | Define terms on first use, built in | v2 |
| "Stuck?" pointer (repo issues or contact) | A way out when blocked | v2 |
| Print or PDF a phase | Offline fallback | v2 |

## Quality Bar

Not optional, just quiet: dark/light mode, responsive (read on phone, build on laptop), keyboard-accessible, good contrast, reduced-motion respected, smooth anchor scroll.

## MVP Spine

The minimum that is already a genuinely good platform:

- Sidebar plus next/prev plus deep links
- One day per page with a goal header
- Numbered steps
- Copy buttons (labeled)
- OS tabs
- Progressive disclosure
- Callouts
- Check-off progress
- Landing plus before-you-start
- GitHub and skills links
- Responsive plus dark mode

Everything marked v2 layers on after this works.

## Design Principle

Resist over-gamifying — no streaks, badges, or confetti. For a serious upskilling course, quiet functional progress reads as more credible than a game. A calm checkmark and an honest "Day 9 of 28" respects the learner more than a celebration. Restraint is the feature.

## Supporting Decisions

These are not features, but they shape how the features get built.

**Content model.** Model the content as structured data so every interaction is systematic, not hand-placed across 28 days:

```
Phase -> Day -> Step
Step = { title, explanation, copyable?, detail?, osVariants? }
```

The content is extracted from the course markdown into this model once. The components (Copyable, Disclosure, OSTabs, ProgressCheck) render from it.

**Stack.** A component build, not a documentation generator: React/Next, Tailwind, and the course's design tokens, with small client components reading the content model. This is the dogfooding path and the right tool, because the site is genuinely interactive rather than pages of text.
