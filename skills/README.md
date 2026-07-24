# Bundled Skills

The eight Claude Code skills that ship with the Design Engineer Roadmap. Install them once, at user level, and they are available in every project. This matches Phase 8 of the course.

## What's here

| Skill | What it does |
|---|---|
| `atelier` | Decide the tech stack a build actually needs |
| `markset` | Turn markdown into a polished PDF |
| `coding-standards` | Write clean, consistent, readable code |
| `code-simplifier` | Refine code for clarity without changing behavior |
| `frontend-design` | Produce distinctive, production-grade UI |
| `testing` | Verify it works; debug what's broken |
| `media-processing` | Convert, resize, optimize media (FFmpeg + ImageMagick) |
| `playwright-cli` | Drive a real browser — view, test, get past bot-blocking |

## What a skill is

A skill is a folder with a `SKILL.md` at its center. That file tells Claude Code when to use the skill and how to do the task. You do not run these directly — Claude loads a skill on its own when your request matches its description.

## Where skills live

- **User level** — your home folder's `.claude/skills/`. Available in every project. Use this for the eight here.
- **Project level** — a project's own `.claude/skills/`. Travels with that repo when someone clones it. Use this for skills tied to one project.

The rule: general tools go user level; project-specific tools go project level.

## Install

Put each skill folder inside your user skills directory: `~/.claude/skills/`.

### macOS and Linux

Symlink each skill so one source stays live (edits to the source update the skill everywhere):

```sh
ln -s "$(pwd)/atelier" ~/.claude/skills/atelier
```

Repeat for each skill, or link them all at once from inside this folder:

```sh
for s in */; do ln -s "$(pwd)/${s%/}" ~/.claude/skills/"${s%/}"; done
```

### Windows

Copying is simplest, since symlinks need extra permissions. From this folder in PowerShell:

```powershell
Copy-Item -Recurse * "$env:USERPROFILE\.claude\skills\"
```

A copy is a fixed snapshot — perfectly fine when you are using a skill rather than authoring it.

## Confirm

Start Claude Code in any project and ask which skills are available. You should see all eight listed.

## Note on markset PDFs

`markset` builds PDFs using Pandoc and Tectonic. Those binaries are not included here (they are large and platform-specific). To build PDFs, follow `markset/README.md` to add the binaries for your system. Authoring markdown with markset works without them.
