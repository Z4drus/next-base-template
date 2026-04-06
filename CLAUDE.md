# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
```

No test runner is configured.

## Architecture

**Stack**: Next.js 16 (App Router, Turbopack) · React 19 · TypeScript 5 (strict) · Tailwind CSS 4 · Shadcn/UI

**Key conventions**:
- Use Server Components by default; add `"use client"` only when necessary (interactivity, browser APIs, hooks)
- Path alias: `@/*` maps to `./src/*`
- Styling via Tailwind CSS 4 with `@theme` in `globals.css` (no `tailwind.config` file)
- All Shadcn/UI components live in `src/components/ui/`; the `cn()` utility is in `src/lib/utils.ts`

**Adding Shadcn/UI components**: `npx shadcn@latest add <component>`

**Adding Shadcnblocks components**: requires a premium API key configured in `components.json` under `registries`

## ESLint Rules (strict)

The config enforces: `simple-import-sort`, `no-unused-vars`, `eqeqeq`, `prefer-const`, `no-var`, `prefer-template`, `object-shorthand`, `arrow-body-style`. Run `lint:fix` before committing.

## Structure

```
src/
  app/          # App Router — layout.tsx, page.tsx, error.tsx, not-found.tsx, globals.css
  components/
    ui/          # Shadcn/UI primitives
    Header.tsx   # Site header
    Footer.tsx   # Site footer
    Home*.tsx    # Page sections
  hooks/         # use-mobile.ts (useIsMobile hook)
  lib/
    utils.ts     # cn() — clsx + twMerge
```

No auth, database, API routes, or global state management are included — this is a pure frontend template.
