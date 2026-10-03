# ARCHITECTURAL DECISIONS

## Phase 0

### Product scope locked
Elegentoo Artistry V1 is a frontend-focused prototype consisting of:
- Public website
- Booking enquiry flow
- Confirmation + WhatsApp handoff
- Mini artist dashboard

Database, authentication, payments, automated messaging,
calendar synchronization, and real availability are out of scope.

## Phase 1

### Design system locked
The final V1 interface follows `.docs/DESIGN_SYSTEM.md`.

### Mobile-first
375px is the primary target viewport.

### Booking interaction
Booking uses an inline five-step flow:
Service → Date/Location → Contact → Review → Submit.

### Demo state
Dashboard data and enquiry states are local/mock state.

### TASK-001 — Application stack (Phase 2)
- **Next.js 16** App Router with `src/` directory and TypeScript strict mode.
- **Tailwind CSS v4** with semantic tokens mapped from `.docs/DESIGN_SYSTEM.md` in `src/app/globals.css`.
- **shadcn/ui** (`base-nova` style) with Lucide as the icon library; `Button` added to verify the registry.
- **Fonts:** Playfair Display (headings) and Inter (UI/body) via `next/font/google`.
- **Domain models:** TypeScript types under `src/types/` with empty mock arrays under `src/data/mock/` (no invented business content).
- **Layout:** Minimal `AppShell` (skip link, header, main, footer placeholders) — marketing sections deferred to Phase 3 tasks.

### Task backlog documentation (Phase 0 / maintenance)
- **Authoritative backlog file:** `.docs/TASKS.md` (referenced by `AGENTS.md` and PROJECT_SPEC Phase 0 exit criteria).
- **Removed:** `.docs/TASK.md` — duplicate of `.docs/TASKS.md` with no unique workflow fields; retaining a single file avoids status drift between copies.

### TASK-001 — Remediation (accepted)
- **`cn` utility:** Implemented with `clsx` + `tailwind-merge` in `src/lib/utils.ts` (standard shadcn pattern).
- **Semantic `--muted` token:** Maps to the light surface-elevated background (`#F3F3F3`) for shadcn-compatible muted surfaces.
- **`--muted-foreground`:** Remains `#737373` for secondary text per the design system.
- **Button touch targets:** Button primitives enforce a 44px minimum interactive height for mobile accessibility.
- **shadcn CLI:** `shadcn` is a devDependency only—not a runtime dependency.
- **`@base-ui/react`:** Retained as a runtime dependency because the shadcn Button primitive imports `@base-ui/react/button` directly.
- **Scope guard:** No Phase 3+ functionality (marketing sections, booking UI, dashboard UI) was introduced in TASK-001.