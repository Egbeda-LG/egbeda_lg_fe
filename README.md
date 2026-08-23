# Egbeda Local Government

The public website for Egbeda Local Government, built with the Next.js App
Router and organised by domain module.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start the dev server                  |
| `pnpm build`     | Production build                      |
| `pnpm start`     | Serve the production build            |
| `pnpm lint`      | Lint with ESLint                      |
| `pnpm typecheck` | Type-check without emitting           |
| `pnpm format`    | Format `.ts`/`.tsx` with Prettier     |

## Structure

```text
app/            # routes and page metadata
components/
  layout/       # top bar, navbar, footer
  ui/           # shadcn/ui primitives
modules/        # feature code, one folder per domain
lib/            # framework-free helpers
public/         # static assets and imagery
```

Routes stay thin: a file in `app/` renders a page component from `modules/`.
Each module holds its composition at the root (`about-page.tsx`) and the
sections it owns in `components/`. UI lives in the top-level `components/`
only once more than one module needs it.

## Routes

| Path                                | Module          |
| ----------------------------------- | --------------- |
| `/`                                 | `landing-page`  |
| `/about`                            | `about-page`    |
| `/services`, `/services/[slug]`     | `services`      |
| `/projects`                         | `projects`      |
| `/newsroom`, `/newsroom/[slug]`     | `newsroom`      |
| `/government/executive-council`     | `government`    |
| `/government/management-team`       | `government`    |
| `/government/landmarks-and-culture` | `government`    |
| `/contact`                          | `contact`       |

## Conventions

Keep a module flat while it is small. Add `hooks`, `service`, or `repository`
files only when the module grows and the new boundary carries real behaviour —
components call hooks, hooks call one service or repository, and transport
clients stay out of components.

To add a shadcn/ui primitive:

```bash
pnpm dlx shadcn@latest add button
```
