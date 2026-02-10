# Design Engineer Roadmap

## Project Goal

18-day self-guided upskilling roadmap for designers transitioning to design engineering. ~30 min/day, no active teaching required.

**Learning path**: CLI → IDE → Git → Claude Code → Web → Vibe Coding

**End goal**: Designers confidently build working components from designs using Claude Code

## Project Files

- `docs/design-engineer-roadmap.md` - Main roadmap overview
- `docs/DER-phase-1.md` - Phase 1 content
- `docs/DER-phase-2.md` - Phase 2 content


## Project Structure

- `docs/` - source markdown learning materials
- `build/` - generated PDF documents
- `templates/` - styling and formatting specifications
- `workflow/` - build automation scripts

## PDF Build System

Convert Markdown → PDF using Pandoc + Tectonic.

**Build command**: `make pdf IN=docs/your-file.md`

**Key files**: `templates/styleguide_md.md` (markdown rules), `templates/template.tex` (LaTeX template)

**Environment**: Conda env `docs` via micromamba at `/Users/arneshmandal/bin/micromamba`, fonts: Inter (body), JetBrains Mono (code)
