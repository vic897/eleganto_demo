# TASK BACKLOG

Authoritative task list for Elegentoo Artistry Demo V1. Each task includes testable acceptance criteria aligned with `.docs/PROJECT_SPEC.md` and `.docs/DESIGN_SYSTEM.md`.

## Phase 2 — Project Architecture

- [ ] TASK-001 | S | depends: none | status: review
  Title: Initialize Project Architecture

  Acceptance:
  - `npm run dev` starts the Next.js App Router application without runtime errors.
  - TypeScript strict compilation passes via `npm run typecheck` (or equivalent `tsc --noEmit`).
  - Tailwind CSS styles apply (utility classes render on a test page).
  - shadcn/ui is initialized (`components.json` present; at least one shadcn component imports and renders).
  - `lucide-react` is installed and at least one Lucide icon renders.
  - Root layout includes a base application shell (header/main/footer or equivalent structural regions) without implementing full marketing sections.
  - Mock TypeScript models exist for: `Service`, `BookingEnquiry`, `EnquiryStatus`, and artist dashboard data; mock data is local-only (no API/database).
  - `npm run build` completes successfully.
  - No database, ORM, authentication, payments, or external persistence dependencies are added.

  Files likely touched:
  - package.json
  - tsconfig.json
  - src/
  - components/
  - configuration files

## Phase 3 — Public Website

- [ ] TASK-002 | S | depends: TASK-001 | status: review
  Title: Project Shell + Navigation

  Acceptance:
  - Public site uses the design-system Navbar anatomy: brand, navigation links, and primary "Book Now" CTA per `.docs/DESIGN_SYSTEM.md` §16.
  - At 375px width: logo centered, hamburger control on the left, menu opens (full-screen or slide-out), and **no** global fixed bottom CTA bar is present.
  - "Book Now" is reachable from the hamburger menu (Hero CTA is implemented in TASK-003).
  - At 1024px+ width: logo left, inline navigation center, CTA right.
  - Skip-to-content link is present and moves focus to main content.
  - Hamburger toggle exposes `aria-expanded` (true/false) matching open/closed state.
  - Navigation link targets exist for in-scope public sections (anchors or routes); section bodies may remain placeholders until later tasks.
  - Interactive controls meet minimum 44×44px touch targets on mobile.
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-003 | S | depends: TASK-002 | status: review
  Title: Hero + About

  Acceptance:
  - Hero section renders on the public home page with H1, subheadline, and primary CTA per design system §16.
  - Hero mobile `min-height` is `100svh`; desktop uses explicit responsive min-height (e.g. 600px or 80vh).
  - Hero content is anchored toward the bottom with ~32px padding above the safe area.
  - If hero uses imagery with overlaid text, a bottom gradient overlay ensures WCAG AA contrast.
  - About section renders portrait placeholder (`3:4` aspect) and biography **placeholder** copy only—no invented artist facts (PROJECT_SPEC §6).
  - Mobile: About stacks image above text; desktop: two-column layout with text vertically centered against the image.
  - Typography and spacing follow design-system roles (serif headings, sans body).
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-004 | S | depends: TASK-003 | status: review
  Title: Services

  Acceptance:
  - Services section renders a grid of service cards per design system §16 (image area `3:4`, title, description, price field, "Select/Enquire" button).
  - Card content uses clearly marked placeholders only—no fabricated services or prices presented as verified facts (PROJECT_SPEC §5–§6).
  - Each card is a static container; only the inner button is interactive (no nested interactive card).
  - Mobile: single-column stack; desktop (1024px+): three-column grid.
  - Card surfaces use `--surface` with 1px `--border` (not heavy shadow elevation).
  - Primary/secondary buttons follow design-system Button rules (uppercase label variant where specified).
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-005 | S | depends: TASK-004 | status: todo
  Title: Portfolio + Testimonials

  Acceptance:
  - Portfolio section renders a grid of `4:5` image placeholders with subdued icon treatment—no invented portfolio assets (PROJECT_SPEC §6, DESIGN_SYSTEM §10).
  - Mobile: two-column portfolio grid; desktop: three- or four-column grid.
  - Testimonials section renders quote + client name using **placeholder** content only (italic Body Large quote, Caption name).
  - Mobile: horizontal swipeable carousel **or** stacked list; desktop: three-column grid.
  - No text overlays on portfolio tiles by default.
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-006 | S | depends: TASK-005 | status: todo
  Title: Travel Banner + Footer CTA

  Acceptance:
  - Travel banner block uses `--surface-elevated` background and displays service area/travel policy **placeholders** only (no invented policy facts).
  - Footer includes secondary CTA ("Ready to book?"), Instagram social link with Lucide (or equivalent) icon, and copyright line per design system §16.
  - Mobile footer layout is stacked and center-aligned.
  - Footer/booking CTAs route users toward the booking enquiry entry point defined in Phase 4 (link or navigation target present).
  - Public home page composes all Phase 3 sections in order without breaking layout at 375px.
  - `npm run build` succeeds; no new TypeScript errors.

## Phase 4 — Booking

- [ ] TASK-007 | S | depends: TASK-006 | status: todo
  Title: Booking Flow

  Acceptance:
  - Inline booking flow implements exactly five steps in order: Service → Date/Location → Contact → Review → Submit (PROJECT_SPEC §5).
  - Progress indicator shows current, completed, and upcoming steps (DESIGN_SYSTEM §15).
  - Step navigation uses inline transitions only (no bottom-sheet as primary navigation).
  - Mobile sticky action bar holds Back/Next/Submit with `padding-bottom: env(safe-area-inset-bottom)`.
  - Desktop: flow contained in centered card max-width 600px.
  - Form fields use visible labels, 44px min touch height, 16px min input text on mobile, focus/hover borders per design system.
  - Inline validation errors use `--destructive` text, warning icon, and `aria-describedby` linkage.
  - Live region announces step changes (e.g. "Step 2 of 5").
  - Enquiry data lives in client/local state only—no submission to a backend or database.
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-008 | S | depends: TASK-007 | status: todo
  Title: Confirmation + WhatsApp

  Acceptance:
  - Confirmation view appears only after successful Submit from the booking flow.
  - Copy confirms **receipt of enquiry**, not guaranteed booking or availability (PROJECT_SPEC §5).
  - UI includes success icon, H2 thank-you heading, explanatory body text, and primary WhatsApp CTA per design system §17.
  - WhatsApp control opens a user-triggered `wa.me` (or equivalent) link with enquiry details pre-filled in the message body.
  - No automated messaging, SMS, or email gateways are introduced.
  - Full client journey Discover → … → Submit → Confirm → WhatsApp handoff is completable on a 375px viewport without assistance.
  - `npm run build` succeeds; no new TypeScript errors.

## Phase 5 — Dashboard

- [ ] TASK-009 | S | depends: TASK-008 | status: todo
  Title: Artist Dashboard

  Acceptance:
  - Mini artist dashboard route/view lists mock booking enquiries from local/mock data (PROJECT_SPEC §5–§6).
  - Each list item uses Dashboard Card anatomy: client name, service, date/location, status badge, action row placeholder (detail actions completed in TASK-010).
  - Status badges map to pending (`--warning`), accepted (`--success`), rejected (`--destructive`) styling per design system §15.
  - Empty state displays centered muted icon + explanatory copy when no enquiries match (e.g. "No pending enquiries.").
  - Dashboard is read-only for enquiry records at the data layer (no database persistence).
  - `npm run build` succeeds; no new TypeScript errors.

- [ ] TASK-010 | S | depends: TASK-009 | status: todo
  Title: Enquiry Detail + Actions

  Acceptance:
  - Tapping a dashboard card opens an enquiry detail view (overlay or dedicated panel) showing full mock enquiry fields.
  - Detail overlay traps focus, closes on `Escape`, and returns focus to the triggering card on close (DESIGN_SYSTEM §13).
  - Action row provides Accept, Reject, and WhatsApp controls.
  - Accept/Reject updates enquiry status in **local demo state only** (lost on refresh acceptable; no durable store).
  - WhatsApp action uses the same user-triggered pre-filled handoff pattern as TASK-008.
  - Status badge on the card reflects updated local state after Accept/Reject.
  - `npm run build` succeeds; no new TypeScript errors.

## Phase 6 — Polish

- [ ] TASK-011 | S | depends: TASK-010 | status: todo
  Title: Responsive + UX Polish

  Acceptance:
  - Layouts remain usable and unbroken at 375px (primary), 768px, and 1024px+ breakpoints per design system §6 and §14.
  - Loading states use subtle `--surface-elevated` skeleton pulse—not blocking global spinners (§15).
  - Motion respects `@media (prefers-reduced-motion: no-preference)` for non-essential animations (§12).
  - All primary user journeys (client booking + artist dashboard) completable on 375px without horizontal scroll or clipped controls.
  - Empty and error UI patterns from §15 are present where applicable (forms, dashboard).
  - `npm run build` succeeds; `npm run typecheck` passes with no new TypeScript errors.

## Phase 7 — Review

- [ ] TASK-012 | S | depends: TASK-011 | status: todo
  Title: Adversarial Review

  Acceptance:
  - Independent code review completed with findings documented (blockers resolved or explicitly waived by product).
  - Independent UX/accessibility review completed against DESIGN_SYSTEM §13 (focus, labels, contrast, touch targets).
  - Verifier confirms no invented business content is presented as fact (services, prices, biography, testimonials, portfolio, travel policy).
  - Verifier confirms out-of-scope items remain absent: database, auth, payments, automated messaging, calendar sync (PROJECT_SPEC §7).
  - End-to-end demo checklist passes: public site → booking enquiry → confirmation/WhatsApp → artist dashboard actions on 375px.
  - PROJECT_SPEC §9 Definition of Done criteria are explicitly marked pass/fail in review notes.
  - `npm run build` and type checking pass on the reviewed branch.
