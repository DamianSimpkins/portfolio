# Portfolio — Astro Site

## Project

Astro static portfolio site. Pages: home, work (index + detail), about, contact.

## Dev server

```
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site
```

Design system reference at `/design-system` (dev only). The page lives at `src/dev/design-system.astro` and is registered by a small integration in `astro.config.mjs` only when running `astro dev`, so it never reaches `dist/`. It also keeps an `import.meta.env.PROD` guard.

## Structure

- `src/pages/` — Astro pages (file-based routing)
- `src/dev/` — dev-only pages injected via `astro.config.mjs`
- `src/layouts/Base.astro` — shared head, nav and footer
- `src/components/` — reusable Astro components (Nav, Footer, Button, SectionHeader, ProjectCard)
- `src/content/projects/` — one markdown file per project (Content Collection)
- `src/content.config.ts` — collection schema
- `public/styles.css` — all CSS and design tokens

## Design system — two layers

Raw scale (`--text-*`, `--space-*`) → semantic aliases (`--display`, `--heading-01..05`, `--lead`, `--body`, `--body-sm`, `--meta`) → utility classes (`.display`, `.heading-01`, `.lead`, `.body` etc.)

- No prefix on semantic tokens or classes.
- Every scale size must have both an alias and a class.
- Components use aliases and classes only, never raw `--text-*` values or magic numbers.
- Colours come from `--color-*` tokens. Do not hardcode hex values in components.

## Components

- Reuse an existing component before writing new markup. Add a variant only when it is used somewhere.
- Delete unused variants rather than leaving them behind.
- Section numbering/labels go through `SectionHeader`; do not hand-roll the rule + label markup.

## Astro notes

- Content Layer API: use `project.id` (not `slug`) and `render(project)` from `astro:content` (not `entry.render()`).
- Config lives at `src/content.config.ts` (not `src/content/config.ts`).
- Scripts that reference files in `public/` need the `is:inline` directive.
- Named slots registered with `<Fragment slot="x">` exist at compile time even inside a `{cond && ...}`, so `Astro.slots.has()` is always true. Render the slot and check the output instead.

## Working rules

- Check `git status` before large edits. Stop the dev server before bulk file changes.
- Keep changes scoped to what was asked; do not edit shared components (Nav, Footer, Base) for a single-page request.
- Verify UI changes in the browser (desktop and mobile width) before calling them done.
- Nothing is deployed until explicitly approved.
