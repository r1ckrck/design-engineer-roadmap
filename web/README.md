# Design Engineer Roadmap — Website

The course as an interactive, self-paced website. Content is modeled as data (`content/`), not rendered markdown; the UX leads. See `plan/` for the feature spec and UX/content model.

## Stack

- Next.js (App Router) with **static export** (`output: 'export'`) → plain files in `out/`
- React + TypeScript
- Tailwind CSS v4 with design tokens in `app/globals.css`
- No backend — progress, OS choice, and theme live in the browser

## Run locally

```sh
cd web
npm install
npm run dev
```

Open the printed `localhost` address. Try Day 9 — it is the fully-authored sample that exercises every content block (text, copyable, disclosure, callout, OS tabs).

## Build the static site

```sh
npm run build
```

Outputs `out/` — the deployable static site.

## Structure

```
web/
├── plan/          feature spec + UX/content model
├── content/       the content model
│   ├── types.ts   Block / Step / Day / Phase / Course
│   ├── course.ts  phases + day titles
│   ├── days/      fully-authored days (day-09 is the sample)
│   └── index.ts   getDay / neighbors / allDayIds
├── components/    Copyable, Disclosure, OSTabs, Callout, Step,
│                  BlockRenderer, DayHeader, DayNav, Sidebar
├── lib/           os-context, progress (client state)
└── app/           layout, globals.css (tokens), landing, day/[id]
```

## Adding content

Author a day as a `Day` object (see `content/days/day-09.ts`), then register it in the
`fullDays` map in `content/index.ts`. Days not yet authored render from metadata with a
placeholder, so navigation always works.

## Deploy

Via Forgejo Actions — see `.forgejo/workflows/deploy.yml`. On push to `main` touching
`web/**`, it builds and rsyncs `out/` to the server web root (`WEB_ROOT` variable).
