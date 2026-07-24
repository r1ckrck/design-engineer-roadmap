# Design Engineer Roadmap

Self-paced upskilling roadmap: designers → design engineers who build and ship with Claude Code. ~1 hour/day, ~27–28 days, macOS + Windows.

**Arc**: Foundations (CLI · Git · Claude Code) → Design Engineering (Context · Web · Seam · Skills · Orchestration · Ship)

11 phases (0–10). `docs/design-engineer-roadmap.md` is the master — the source of truth every phase doc is written against.

## Folder structure
```
design-engineer-roadmap/
├── docs/            course content: overview + DER-phase-0..10 (markset -> PDF)
├── skills/          the 8 bundled skills, downloadable (see skills/README.md)
├── build/           generated PDFs (markset output)
├── web/             the course website — Next static-export site, UX-led
│   ├── plan/        website spec: features.md + ux-content-model.md
│   ├── content/     the content model — data extracted from docs/
│   ├── components/  Copyable, Disclosure, OSTabs, Callout, Step, Sidebar...
│   ├── app/         routes, layout, design tokens
│   └── lib/         OS context, progress store (client state)
└── .forgejo/
    └── workflows/   CI: build web/ -> deploy to the server
```

## Conventions
- **Date-agnostic**: Day 1, Week 1 — never calendar dates.
- **Cross-platform**: every step covers macOS and Windows. Native Windows (no WSL); Git Bash so commands match. Windows differences are inline callouts, not separate sections.
- **No handwritten HTML/CSS**: code is written through Claude Code, guided so the learner understands the output.
- **Map before you make**: every phase opens with the architecture questions to answer before building.
- **Bundled skills (8)**: atelier, markset, coding-standards, code-simplifier, frontend-design, testing, media-processing, playwright-cli.
- **MCPs (2)**: Figma, Context7 — user level.

## Docs
- `docs/design-engineer-roadmap.md` — overview / master structure
- `docs/DER-phase-0.md` … `docs/DER-phase-10.md` — the 11 phase documents

## Skills bundle
- `skills/` — the 8 bundled skills, downloadable; install per `skills/README.md` (user level, Mac symlink / Windows copy). Learners install these in Phase 8.

## Website
- `web/` — Next static-export site; content modeled as data (`web/content/`), UX-led. Spec in `web/plan/`.
- Content is extracted from `docs/` into the model; markdown is the source, the model is the truth once extracted.
- Build/deploy via Forgejo Actions (`.forgejo/workflows/`) → static `web/out/` served on the server. Static export (`output: 'export'`).

## PDF Build (markset skill)
- Authoring rules: `.claude/skills/markset/templates/styleguide_md.md`
- Build: `.claude/skills/markset/workflow/build-pdf.sh <input.md> [output.pdf]`
- PDFs output to `build/`
