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
- `src/components/` — reusable Astro components (Nav, Footer, SectionHeader, ProjectList, Gallery)
- `src/content/projects/` — one markdown file per project (Content Collection)
- `src/content.config.ts` — collection schema
- `public/styles.css` — all CSS and design tokens

## Design system — two layers

Raw scale (`--text-*`, `--space-*`) → semantic aliases (`--display`, `--heading-01..05`, `--intro`, `--lead`, `--body`, `--body-sm`, `--meta`) → utility classes (`.display`, `.heading-01`, `.lead`, `.body` etc.)

- No prefix on semantic tokens or classes.
- Every scale size must have both an alias and a class.
- Components use aliases and classes only, never raw `--text-*` values or magic numbers.
- Colours come from `--color-*` tokens. Do not hardcode hex values in components.

## Visual direction

Quiet and typographic. References: lucydatyner.com (first-person intro, plain lists) and mikekus.com (label column + content column, hairline grid).

- Fluid layout up to `--max-width` (1000px, margins included). One side margin (`--gutter`) for text and images alike, stepping up at 48rem and 75rem, then growing past 1000px so everything stays aligned. Heroes stay full-bleed. Don't inset images separately. On case studies the copy is a centred 900px column (`--content-width`) under images that run up to 1200px (the content width plus a 100px overhang each side on wide screens). Text line length is capped by `--measure` / `--measure-intro`, not by the container.
- Pages open with large first-person `.intro` paragraphs, aligned to the content column with `.content-col`.
- Labels are sentence case and muted. No numbered section labels (01, 02), no uppercase-tracked or monospace metadata, no year columns. These read as generic AI-generated portfolio tropes.
- Lists are plain text (`.plain-list`), not cards. Use inline `.subtle-link` rather than buttons.
- Case study pages (`src/pages/work/[id].astro`), after the Kus Studio case study layout: meta strip → Overview → `galleryTop` → What I did + 3-column services → `galleryBottom` → Next project. Images keep their own proportions (no cropping) in three layouts: `full` (full width), `half` (two-up) and `third` (three in a row). Images come from `public/projects/<project>/`: `hero` is the cover, a lone image is `full`, `name-01` + `name-02` form a `half` pair and `name-01..03` a `third` row. Keep it that simple. No rounded corners anywhere on the site, except the plain white phone frame around mobile screenshots (`frame: phone`).

## Components

- Reuse an existing component before writing new markup. Add a variant only when it is used somewhere.
- Delete unused variants rather than leaving them behind.
- Section labels go through `SectionHeader`, placed as the first child of a `.split` (label column + content column, hairline above).

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
