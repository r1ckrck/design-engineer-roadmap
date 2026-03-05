# Markset Skill — Developer Reference

## What This Skill Does

Markset is a self-contained Claude Code skill that converts Markdown to polished PDFs.
It bundles its own Pandoc and Tectonic binaries, fonts, LaTeX template, and Lua filter — no system installs required.

Two capabilities:
1. **Author Markdown** — write documents that conform to the design grammar
2. **Build PDF** — compile those documents to PDF via Pandoc + Tectonic (XeLaTeX)

---

## Directory Layout

```
markset/
├── CLAUDE.md                   This file
├── SKILL.md                    Skill definition (name, trigger description)
├── README.md                   End-user setup guide
├── bin/
│   ├── pandoc-arm64            Pandoc binary — Apple Silicon
│   ├── pandoc-x86_64           Pandoc binary — Intel Mac / Linux x86_64
│   ├── tectonic-arm64          Tectonic binary — Apple Silicon
│   └── tectonic-x86_64         Tectonic binary — Intel Mac / Linux x86_64
├── templates/
│   ├── template.tex            LaTeX template (all visual decisions live here)
│   ├── divs.lua                Lua filter — callouts, image placeholders
│   ├── styleguide_md.md        Markdown authoring rules (single source of truth)
│   └── fonts/                  TTF files (Inter + JetBrains Mono — not committed)
├── workflow/
│   ├── build-pdf.sh            Build script (run this to produce a PDF)
│   ├── author-markdown.md      Step-by-step authoring instructions for Claude
│   └── build-pdf.md            Step-by-step build instructions for Claude
└── cache/                      Tectonic LaTeX package cache (gitignored, ~300 MB)
```

---

## Build Command

```bash
# Standard invocation
<skill-dir>/workflow/build-pdf.sh <input.md> [output.pdf]

# Default output: build/<filename>.pdf relative to input's parent directory
<skill-dir>/workflow/build-pdf.sh docs/report.md
```

The script auto-detects architecture via `uname -m` and selects the matching binary.

---

## Modifying the Skill

### Build script (`workflow/build-pdf.sh`)
- All paths are derived from `SKILL_DIR` — no hardcoded absolute paths
- Architecture detection: `ARCH=$(uname -m)` selects `pandoc-arm64` vs `pandoc-x86_64`
- Tectonic is symlinked into a temp `PATH` entry so Pandoc can find it by name
- Do not add system-level dependencies — the skill must remain self-contained

### LaTeX template (`templates/template.tex`)
- Controls all visual output: fonts, spacing, colors, heading hierarchy, table styling
- Markdown cannot override any of these — the template is the only source of design truth
- Font paths are injected via `-V fontdir=...` at build time from `build-pdf.sh`

### Lua filter (`templates/divs.lua`)
- Handles `:::` fenced divs: callout types (`note`, `tip`, `warning`, `important`) and `image-placeholder`
- Runs before the LaTeX template receives the AST

### Styleguide (`templates/styleguide_md.md`)
- Read this before authoring any document — do not rely on memory
- Defines all permitted Markdown constructs and their constraints

---

## Authoring Rules (summary — read styleguide for full detail)

**Frontmatter** — all five fields are required or the build will fail:
```yaml
---
title: "Document Title"
author: "Arnesh Mandal"
version: "1.0"
date: "2026-01-30"
include-before: |
  \begin{lstlisting}[style=coverasciiart]
  ASCII art here (max 60 chars wide, 16 lines tall)
  \end{lstlisting}
---
```

**Key constraints:**
- One sentence per line; consecutive sentences merge into paragraphs in the PDF
- Headings max H4; Title Case; never add numbers manually (auto-numbered)
- Tables require a caption line (`: Caption text`) immediately after the last row — no blank line between
- Callouts (`:::note`, `:::tip`, `:::warning`, `:::important`) never inside lists or tables
- Code blocks always specify a language identifier
- No raw LaTeX (`\newpage`), HTML (`<div>`), or manual styling

---

## Common Build Failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| Binary not found | `bin/pandoc-<arch>` or `bin/tectonic-<arch>` missing | Add binary per README setup |
| macOS Gatekeeper block | Quarantine attribute on binary | `xattr -d com.apple.quarantine bin/<binary>` |
| Font not found | TTF files absent from `templates/fonts/` | Add Inter + JetBrains Mono TTFs |
| LaTeX error — missing field | Frontmatter field omitted | Add all five required fields |
| Table render error | Caption line missing or has blank line before it | Move `: Caption` immediately after table |
| Callout render error | Callout nested inside list or table | Move callout outside the list/table |
: Build failure quick reference

---

## Adding Binaries (when not present)

```bash
# Detect arch
uname -m   # arm64 or x86_64

# Pandoc: download standalone binary from github.com/jgm/pandoc/releases/latest
cp pandoc-*/bin/pandoc .claude/skills/markset/bin/pandoc-arm64
chmod +x .claude/skills/markset/bin/pandoc-arm64

# Tectonic: download from github.com/tectonic-typesetting/tectonic/releases/latest
cp tectonic .claude/skills/markset/bin/tectonic-arm64
chmod +x .claude/skills/markset/bin/tectonic-arm64
```

---

## Environment Notes

- No conda/micromamba env needed — all binaries are bundled in `bin/`
- `OSFONTDIR` is set by the build script to `templates/fonts/` — no system font install required
- `TECTONIC_CACHE_DIR` is set to `cache/` — first build downloads ~300 MB of LaTeX packages; subsequent builds are fast
- The `cache/` directory transfers cleanly across machines (architecture-independent)
