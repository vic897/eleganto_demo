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

### TASK-002 — Navigation shell (Phase 3)
- **Component split:** `SiteHeader` (responsive bar) + `MobileNav` (full-screen menu below `lg` / 1024px); shared link targets in `src/lib/nav-links.ts`.
- **Breakpoints:** Mobile (default) — hamburger left, centered brand; tablet (`md`, 768px+) — brand left, hamburger right; desktop (`lg`, 1024px+) — inline centered links + right-aligned Book Now, no hamburger.
- **Destinations:** Hash routes on `/` (`/#about`, `/#services`, etc., and `/#book`) reserved for later section tasks; no placeholder section content or extra routes added.
- **Accessibility:** Menu button uses `aria-expanded`, `aria-controls`, 44×44px targets; full-screen menu closes on Escape and link selection; focus returns to the menu trigger on close; closed menu uses `hidden` and `pointer-events-none` with `tabIndex={-1}` on links.
- **Focus trap remediation:** Added lightweight focus trap to `MobileNav` dialog without external dependencies. Tab cycles focus within dialog (last to first), Shift+Tab cycles (first to last). Filters disabled/hidden elements from focusable set. Escape continues to close menu.
- **Verification:** Implementation verified in Windsurf session; `npm run typecheck` and `npm run build` pass; responsive behavior confirmed against DESIGN_SYSTEM.md requirements.

### TASK-003 — Hero + About (Phase 3)
- **Component structure:** Modular section components in `src/components/sections/` (hero.tsx, about.tsx).
- **Hero implementation:** Full-width section with H1 ("Luxury Makeup Artistry"), subheadline placeholder, and primary CTA linking to `/#book`. Mobile min-height: 100svh; desktop: 600px. Content anchored bottom with 32px padding. Uses `--surface-elevated` background as deliberate placeholder for future hero imagery.
- **About implementation:** Section with id="about" for hash navigation. 3:4 aspect ratio portrait placeholder using `--surface-elevated` background with subdued User icon. Biography placeholder copy explicitly states verified content is pending. Mobile: stacked layout (image top, text bottom); desktop: two-column layout with text vertically centered against image.
- **Placeholder strategy:** No invented business content. Hero uses neutral background placeholder. About uses deliberate media placeholder with icon. Copy clearly communicates that verified artist biography and credentials will be added.
- **Typography:** Playfair Display for headings (H1, H2), Inter for body text. Follows design system typography roles.
- **Responsive behavior:** Mobile-first implementation (375px primary). Tablet (768px) and desktop (1024px+) breakpoints follow DESIGN_SYSTEM.md spacing and layout rules.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-004+ functionality added.

### TASK-004 — Services (Phase 3)
- **Component structure:** Modular section component in `src/components/sections/services.tsx`.
- **Services implementation:** Section with id="services" for hash navigation. Grid of three service cards with 3:4 aspect ratio image placeholders using `--surface-elevated` background. Each card has title ("Service Category"), description placeholder ("Service description will be added once verified business content is available"), and "Enquire" button linking to `/#book`.
- **Card behavior:** Cards are static `<div>` containers with `--surface` background and 1px `--border`. Only the inner Button is interactive (no nested interactive card per design system rule).
- **Placeholder strategy:** No invented services, prices, or business claims. Polished placeholder copy clearly communicates that verified business content is pending. No price field included since no pricing has been verified.
- **Responsive behavior:** Mobile (375px): 1-column stacked layout. Tablet (768px/md): 2-column grid. Desktop (1024px+/lg): 3-column grid with 24px gutter. Follows DESIGN_SYSTEM.md spacing and layout rules exactly.
- **Typography:** Playfair Display for section H2 ("Offerings"), Inter for body text. Section header follows design system Section Header pattern (label + H2).
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-005+ functionality added.