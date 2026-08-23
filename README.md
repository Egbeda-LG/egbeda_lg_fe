# Egbeda Local Government website

This is a Next.js App Router project organized by domain module.

## Architecture

```text
app/                 # routes, metadata, and route layouts
components/          # presentation-first UI shared by multiple modules
  layout/            # site-wide navigation and footer
  ui/                # reusable UI primitives
modules/             # feature and domain-owned code
  about-page/         # About route composition and its owned sections
    components/
  contact/            # contact route and form UI
    components/
  government/         # council, management, and landmarks routes
    components/
  landing-page/       # homepage composition and its owned sections
    components/
  newsroom/           # newsroom listing and article routes
    components/
  projects/           # projects route and project UI
    components/
  services/           # service catalog and detail routes
    components/
public/              # static assets
lib/                 # genuinely shared framework-free utilities
```

Keep each module flat while it is small. Add `components`, `hooks`, `service`,
`repository`, or operation files inside a module only when the module grows and
the new boundary adds behavior. Components call hooks, hooks call one meaningful
service or repository boundary, and transport clients stay out of components.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This places shared UI primitives in `components/ui`.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```
