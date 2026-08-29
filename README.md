# Egbeda Local Government

The public website for Egbeda Local Government, built with the Next.js App
Router and organised by domain module.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · pnpm

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Environment

| Variable                   | What it is                                                     |
| -------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Egbeda LG backend root, without the `/api/v1` prefix           |
| `NEXT_PUBLIC_SITE_URL`     | Public origin, used for canonicals, Open Graph and the sitemap |
| `REVALIDATE_SECRET`        | Shared secret for `POST /api/revalidate` (server-only)         |

`NEXT_PUBLIC_API_BASE_URL` defaults to the dev API
(`https://egbeda-api-dev.jumpingcrab.com`). `NEXT_PUBLIC_SITE_URL` defaults to
`https://egbedalg.gov.ng` — **set it to the real production origin before
launch**, or every canonical and sitemap URL will point at the wrong host.

## Scripts

| Command          | What it does                      |
| ---------------- | --------------------------------- |
| `pnpm dev`       | Start the dev server              |
| `pnpm build`     | Production build                  |
| `pnpm start`     | Serve the production build        |
| `pnpm lint`      | Lint with ESLint                  |
| `pnpm typecheck` | Type-check without emitting       |
| `pnpm format`    | Format `.ts`/`.tsx` with Prettier |

## Structure

```text
app/            # routes and page metadata
components/
  layout/       # top bar, navbar, footer
  ui/           # shadcn/ui primitives
modules/        # feature code, one folder per domain
lib/
  api/          # Egbeda LG API client, types and read repositories
  content.ts    # framework-free formatting helpers
public/         # static assets and imagery
```

Routes stay thin: a file in `app/` renders a page component from `modules/`.
Each module holds its composition at the root (`about-page.tsx`) and the
sections it owns in `components/`. UI lives in the top-level `components/`
only once more than one module needs it.

## Routes

| Path                                | Module         |
| ----------------------------------- | -------------- |
| `/`                                 | `landing-page` |
| `/about`                            | `about-page`   |
| `/services`, `/services/[slug]`     | `services`     |
| `/projects`                         | `projects`     |
| `/newsroom`, `/newsroom/[slug]`     | `newsroom`     |
| `/government/executive-council`     | `government`   |
| `/government/management-team`       | `government`   |
| `/government/landmarks-and-culture` | `government`   |
| `/contact`                          | `contact`      |

## Conventions

Keep a module flat while it is small. Add `hooks`, `service`, or `repository`
files only when the module grows and the new boundary carries real behaviour —
components call hooks, hooks call one service or repository, and transport
clients stay out of components.

To add a shadcn/ui primitive:

```bash
pnpm dlx shadcn@latest add button
```

## Data

Page content comes from the Egbeda LG backend — the same API the admin app
writes to. Every endpoint the site reads is public, so pages fetch on the
server and are cached for five minutes; nothing about the API reaches the
browser bundle.

`lib/api/` mirrors the admin app's layer, minus the writes:

| File                     | What it holds                                                |
| ------------------------ | ------------------------------------------------------------ |
| `client.ts`              | Base URL and the `fetch` wrapper with revalidation and tags  |
| `request`/`errors.ts`    | `ApiError`, plus a readable message for any failure          |
| `types.ts`               | Response shapes, verified against the live dev API           |
| `enums.ts`               | Option values and their labels, mirrored from the admin app  |
| `list-query.ts`          | Query builder that drops empty values and the `all` sentinel |
| `resource-repository.ts` | `createReadRepository` — `list`, `getById`, `findById`       |
| `resources.ts`           | One repository per resource, plus `withFallback`             |

Add a resource by declaring it in `resources.ts`:

```ts
export const noticesApi = createReadRepository<NoticeItem>(
  "notices",
  "/api/v1/notices",
  { defaultQuery: { status: "published" } }
)
```

Sections read through `withFallback`, so an API outage degrades a section to
its empty state rather than failing the page. Detail routes address records as
`<title-slug>-<id>`; `idFromSlug` in `lib/content.ts` peels the id back off.

### Caching and revalidation

Every read is cached and tagged with its resource name. `REVALIDATE` in
`lib/api/resources.ts` sets how long each one stays fresh on its own:

| Resource                                                         | Window   |
| ---------------------------------------------------------------- | -------- |
| `news`                                                           | 30s      |
| `projects`, `services`, `organization-settings`                  | 60s      |
| `landmarks`, `departments`, `councillors`, `management`, `nulge` | 120s     |
| `wards`, `markets`                                               | 1 hour   |
| `messages`                                                       | uncached |

Those windows are only the ceiling. `POST /api/revalidate` clears a tag
immediately, so an edit in the admin app goes live on the next request rather
than at the end of the window:

```bash
curl -X POST https://<site>/api/revalidate \
  -H "x-revalidate-secret: $REVALIDATE_SECRET" \
  -H "content-type: application/json" \
  -d '{"tags":["news"]}'
```

- `tag` (one) or `tags` (several); `{"tags":["*"]}` clears everything
- `GET /api/revalidate` reports whether the secret is configured and lists the
  valid tags
- Returns 401 on a bad secret and 503 when `REVALIDATE_SECRET` is unset — it
  never runs unauthenticated, since an open hook lets anyone stampede the API

Because the top bar, footer and statistics all read organisation settings, the
`organization-settings` tag refreshes every page on the site.

Server-side fetches never appear in the browser's network tab. `next.config.ts`
enables `logging.fetches`, so each one prints in the `pnpm dev` terminal — and
Reactotron shows the same calls with their payloads (see below).

## Reactotron

Both halves of the app report to the [Reactotron](https://github.com/infinitered/reactotron)
desktop app in development. Because nearly all the work here happens in server
components, the server client is the useful one — it puts every API read on
Reactotron's API timeline, which is the only place those calls are visible.

```bash
pnpm tron   # open the desktop app (listens on 9090)
pnpm dev    # both clients connect on boot
```

| File                                 | Runs in | Shows                                                               |
| ------------------------------------ | ------- | ------------------------------------------------------------------- |
| `lib/reactotron/server.ts`           | Node    | Every `apiFetch` — URL, query, status, body, duration, cache policy |
| `lib/reactotron/browser.ts`          | Browser | Client components; `tron.log(…)` from the devtools console          |
| `components/reactotron-provider.tsx` | Browser | Starts the browser client, dev only                                 |

Two clients appear in Reactotron's device list: **Egbeda Website · server** and
**Egbeda Website · browser**.

Reactotron never reaches production. Both clients sit behind a `NODE_ENV` check
and are loaded by dynamic import, so the production build folds them away — a
build check confirms zero occurrences of `reactotron` in `.next/static`. If the
desktop app is not running, the socket simply never opens and every call is a
no-op; nothing throws.

| Variable                      | Default     | Purpose             |
| ----------------------------- | ----------- | ------------------- |
| `REACTOTRON_HOST`             | `localhost` | Server client host  |
| `REACTOTRON_PORT`             | `9090`      | Server client port  |
| `NEXT_PUBLIC_REACTOTRON_HOST` | `localhost` | Browser client host |

### Endpoint coverage

| Resource                | Where it renders                                          |
| ----------------------- | --------------------------------------------------------- |
| `news`                  | Landing newsroom block, `/newsroom`, `/newsroom/[slug]`   |
| `projects`              | Landing projects block, `/projects`                       |
| `services`              | Landing services block, `/services`, `/services/[slug]`   |
| `landmarks`             | `/government/landmarks-and-culture`                       |
| `departments`           | Landing departments block                                 |
| `councillors`           | `/government/executive-council`                           |
| `management`            | `/government/management-team`                             |
| `nulge`                 | `/government/nulge`                                       |
| `wards`                 | Communities section, project ward filter                  |
| `markets`               | Communities section                                       |
| `organization-settings` | Top bar, footer, about, contact, stats, chairman blocks   |
| `messages`              | Contact form writes via `POST`; reads need an admin token |

## SEO

`lib/seo.tsx` centralises the pieces every page needs:

- `pageMetadata()` — title, description, canonical, Open Graph and Twitter card
- `JsonLd` — renders a structured-data block
- `breadcrumbSchema()` — a `BreadcrumbList` from a trail of crumbs

The root layout carries the title template, default cards, robots directives
and a `GovernmentOrganization` block built from the council's own settings.
Article pages add `NewsArticle`, service pages add `GovernmentService`, and the
home page adds `WebSite`.

`app/sitemap.ts` lists the static routes plus every published article and
service; `app/robots.ts` points crawlers at it. Filtered listings
(`/newsroom?category=…`, `/projects?ward=…`) canonicalise to their base page.
