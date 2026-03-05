---
name: markset
description: Use this skill whenever the user wants to write a document, draft content, create a report, or produce a PDF. Also trigger when the user asks to build, render, or compile a markdown file. Proactively invoke this skill for any writing or document-creation task.
---

> This skill is at `.claude/skills/markset/` relative to the project root. Do not search for it.

# Markset

This skill gives you two capabilities:

1. **Author Markdown** — write documents that conform to the project's formatting rules
2. **Build PDF** — compile markdown files into PDFs using the Pandoc + Tectonic pipeline

The skill is fully self-contained. All templates, fonts, binaries, and scripts live inside this skill folder.

---

## Capability 1 — Author Markdown

Write markdown that the build pipeline can compile without errors.
The styleguide ([`./templates/styleguide_md.md`](./templates/styleguide_md.md)) is the single source of truth — read it before writing anything.
Full step-by-step instructions, including the required frontmatter block and common mistakes, are in [`./workflow/author-markdown.md`](./workflow/author-markdown.md).

---

## Capability 2 — Build PDF

Convert any markdown file to PDF using [`./workflow/build-pdf.sh`](./workflow/build-pdf.sh).
The script auto-detects architecture, uses skill-local fonts and binaries, and requires no system installs.
Full step-by-step instructions, including input/output paths, failure diagnosis, and architecture notes, are in [`./workflow/build-pdf.md`](./workflow/build-pdf.md).
