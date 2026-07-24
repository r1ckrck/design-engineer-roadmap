# Design

The design principles for the Design Engineer Roadmap website. This file governs how the asset looks and behaves, so every part is built from one consistent design language. It describes principles, not values — colors, fonts, type scale, spacing, and radii live in `../app/globals.css` and the components. When a build decision is not covered here, the test is simple: does it serve the learner?

---

## What this asset is for

The website is a teacher, not a showcase. Its job is to carry a designer through 28 days of learning with as little friction and as much clarity as possible. Every design decision serves comprehension and momentum, or it does not belong.

The traits the asset reaches for:

- **Clear** — the learner always knows what they are reading and what to do next
- **Calm** — the surface stays quiet, so the content holds the attention
- **Focused** — one thing at a time; the current step is obvious, the rest recedes
- **Credible** — restraint signals seriousness; this is a real course, not a landing page
- **Consistent** — every day has the same shape, so the interface disappears and only the learning remains
- **Humane** — comfortable to read, easy to operate, considerate of how and where people learn

These traits are operational, not decorative. When in doubt about a decision, the principle is: **which choice lowers the learner's effort?**

---

## Calm over density

This asset deliberately diverges from the denser, edge-to-edge visual system used elsewhere in this body of work. A poster earns its power from richness; a course earns it from calm. Reading and doing across 28 days rewards breathing room, a constrained measure, and quiet surfaces — not compositional density.

What carries over: **restraint of color and weight, hierarchy by weight, and semantic visuals.** What does not: density as a goal. Here, space is a feature, not waste. A page that feels full is a page that is working against the learner.

---

## Clarity over expression

The design serves reading and doing. It does not perform. Anything that competes with the content for attention — decorative color, ornament, motion for its own sake — is removed.

This is restraint as function, not only as taste. On a learning surface, every non-essential element is a small tax on comprehension. The most expressive thing the design can do is get out of the way.

---

## Focus and progressive disclosure

A learner does one day, one step, one action at a time. The layout makes the current thing prominent and everything else quiet.

Progressive disclosure is a principle here, not just a feature. Show the essential path by default; keep the deeper "why," the edge cases, and the extra context one deliberate click away. A learner who wants to move fast is never slowed by detail they did not ask for; a learner who wants depth always finds it. The page reads short and calm; the depth is there when reached for.

---

## Hierarchy by weight

Loud once, quiet everywhere else. Each screen has a single clear focal point — the day's goal, or the current step — and everything else settles into a calm supporting layer.

Hierarchy comes from **weight, space, and color before size.** A heading is not primary because it is large; it is primary because weight and spacing set it apart. Size carries the final part of the work, not the first. This keeps the type calm and the rhythm even, which is what long-form reading needs.

---

## Semantic distinction

Different kinds of content look different because they *are* different. Shape, color, and label reflect what a thing is, so a learner can tell at a glance what they are looking at.

The most important application is the interactive content — the taxonomy a learner meets on every page:

| Kind | What it is | How it should read |
|---|---|---|
| A prompt to paste | Text for the AI agent | Distinct, clearly labeled as something to hand to Claude Code |
| A terminal command | Text to run in a shell | Distinct from a prompt; reads as a command |
| Explanation | Prose to understand | Calm, readable, never competing with the copyables |
| A callout | An aside worth pausing on | Set apart, but proportionate — earns attention without alarm |
| Deeper detail | Optional depth | Visibly secondary, folded away until wanted |

A learner should never have to guess whether a block is something to read, something to paste, or something to run. The distinction is carried by consistent, semantic treatment — not by a label alone.

---

## Reading comfort

The core activity is reading instructional prose, so the type is tuned for reading, not for marketing impact.

- A **constrained measure** — lines stay short enough to read without losing the next line
- **Generous vertical rhythm** — steps and paragraphs breathe; the eye is never crowded
- A **restrained type scale** — few sizes, clear roles; the page is not a ransom note of weights
- **Left-aligned body**, always — centered prose reads as decorative and slows reading
- **Warm, low-contrast neutrals** for the base — never harsh pure black on pure white; comfort over severity

---

## Affordances and interaction

Interactive elements must look interactive and behave predictably. The copyable is the most-repeated element on the site, so its treatment sets the tone for everything.

- Anything you can act on — copy, expand, toggle, check — is visibly actionable
- Every action gives **immediate, quiet feedback** — a copy confirms, a toggle responds, a check registers
- Behavior is **predictable and boring in the best way** — the same interaction works the same everywhere, so it becomes muscle memory
- Feedback is **calm** — a state change, not a celebration

---

## Wayfinding and progress

Across a 28-day journey, the learner must always know where they are, what is done, and what is next. Orientation is never more than a glance away.

- **Location is always visible** — which phase, which day, where in the sequence
- **Progress is honest and quiet** — a calm mark for done, a simple count of where you are; no streaks, badges, or confetti
- **Forward motion is obvious** — moving to the next day is the path of least resistance, and jumping anywhere is always available

Progress restraint is a design decision, not an oversight. For a serious course, quiet functional progress reads as more credible than a game. A calm checkmark respects the learner more than a reward animation.

---

## Cross-platform parity

The course serves macOS and Windows equally, and the design treats them as equals. Neither is the visual "default"; the platform choice is a first-class control, and switching between them is smooth and non-disruptive. A Windows learner never feels like they are reading a Mac course with footnotes.

---

## Consistency as trust

Every day is built to the same shape, so the interface fades and the content stays. A learner who has done three days knows exactly how the fourth will be laid out.

Novelty per page is a bug, not a delight. The reward for consistency is that the design disappears — which, for a learning tool, is the highest compliment it can earn. Surprise is spent only where it teaches something, never on the chrome.

---

## Color as meaning

Color is restrained and semantic. A single accent carries interactive and focal meaning — links, the current position, the one thing to act on. It earns its pull from rarity; spread across the page, it would mean nothing.

State colors (a caution, a note) appear only when they signal something real, and stay proportionate — an aside is set apart, not made alarming. Most of the surface is calm neutral; color is spent deliberately, where it guides.

---

## Motion

Motion is minimal and purposeful — the opposite of an expressive, animated surface. On a learning tool, movement that does not carry meaning is a distraction from the task.

Motion is allowed only to:

- Confirm an action just happened (a copy, a check)
- Reveal disclosed detail as it opens
- Ease a transition between days so the learner keeps their place

The character is quiet and quick — noticed without delaying. Reduced-motion preferences are always honored.

---

## Light and dark

People learn in the morning and late at night. Both modes are first-class, designed with equal care, and neither is an afterthought. The system follows the reader's preference; the mode carries the mood, the principles stay the same across both.

---

## Accessibility and responsiveness

Baseline, not optional. The platform is meant for everyone who wants to learn.

- **Contrast** comfortable in both modes, for body and interactive elements
- **Keyboard** operable — navigation and every interaction reachable without a mouse
- **Reduced motion** respected
- **Responsive** — readable on a phone for reading, comfortable on a laptop for building; content never overflows its column

---

## Anti-patterns

| Don't | Why |
|---|---|
| Gamified rewards — streaks, badges, confetti | Undercuts credibility; the course is serious, and quiet progress respects the learner more |
| Marketing-style hero bombast | This is a place to learn, not to be sold to |
| Decorative motion | Movement without meaning distracts from the task |
| Walls of text with no disclosure | Overloads the learner; depth belongs folded away until wanted |
| Novelty per page | Breaks the muscle memory that lets the interface disappear |
| Spreading the accent across a page | Its meaning comes from rarity; everywhere means nowhere |
| Making one OS the visual default | Both platforms are equal; parity is a design requirement |
| Ambiguous copyables | A learner must never guess whether a block is to read, paste, or run |
| Low-contrast or centered body text | Slows reading; body is left-aligned and comfortably legible |
| Harsh pure black on pure white | Severe to read; warm, lower-contrast neutrals carry the base |
| Design that performs | On a learning surface, the best design gets out of the way |

---

## Where values live

This file holds principles. The concrete values that express them live in code:

| What | Where |
|---|---|
| Color, type, spacing, radius tokens | `../app/globals.css` |
| Component treatments (Copyable, Callout, OSTabs, Disclosure, Step) | `../components/` |
| Layout and reading measure | `../app/layout.tsx` and the components |

When those values are set or changed, they should trace back to a principle here. If a value cannot be justified by one, the value is wrong — or the principle is missing and should be added.
