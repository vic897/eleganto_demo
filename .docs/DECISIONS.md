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

### TASK-005 — Portfolio + Testimonials (Phase 3)
- **Component structure:** Modular section components in `src/components/sections/` (portfolio.tsx, testimonials.tsx).
- **Portfolio implementation:** Section with id="portfolio" for hash navigation. Grid of six 4:5 aspect ratio image placeholders using `--surface-elevated` background with subdued Image icon. No text overlays. Mobile: 2-column grid; tablet (768px/md): 2-column grid; desktop (1024px+/lg): 4-column grid.
- **Testimonials implementation:** Section with id="testimonials" for hash navigation (matches nav-links.ts). Grid of three testimonial cards with Quote icon, italic placeholder text ("Client testimonial will be added once verified business content is available"), and "Client Name" caption. Cards use `--surface` background with 1px `--border`. Mobile: stacked list; tablet (768px/md): 2-column grid; desktop (1024px+/lg): 3-column grid.
- **Placeholder strategy:** No invented client names, testimonials, or portfolio assets. Polished placeholder copy clearly communicates that verified business content is pending.
- **Responsive behavior:** Follows DESIGN_SYSTEM.md spacing and layout rules. Portfolio uses 2-column at tablet per design system requirement. Testimonials uses stacked list on mobile (simpler than carousel) per acceptance criteria option.
- **Typography:** Playfair Display for section H2s ("Work", "Kind Words"), Inter for body text. Section headers follow design system Section Header pattern (label + H2).
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-006+ functionality added.

### TASK-006 — Travel Banner + Footer CTA (Phase 3)
- **Component structure:** Modular section components in `src/components/sections/` (travel.tsx, footer-cta.tsx).
- **Travel implementation:** Section with id="travel" for hash navigation (matches nav-links.ts). Uses `--surface-elevated` background with 1px `--border` per design system. Contains MapPin icon and placeholder copy ("Verified travel policy and service area information will be added here. This section will detail coverage regions, travel fees, and minimum booking requirements once business content is supplied.").
- **Footer CTA implementation:** Centered section with "Ready to Book?" H2 and supporting text. Primary "Book Now" button linking to `/#book` for future booking flow. Button enforces 44px minimum touch target.
- **Placeholder strategy:** No invented destinations, fees, coverage areas, or travel policies. Polished placeholder copy clearly communicates that verified business content is pending.
- **Responsive behavior:** Follows DESIGN_SYSTEM.md spacing rules. Mobile: stacked and center-aligned per design system Footer specification. Tablet/desktop: maintains centered layout with appropriate spacing.
- **Typography:** Playfair Display for section H2s ("Service Area", "Ready to Book?"), Inter for body text. Section headers follow design system Section Header pattern (label + H2).
- **Deviation note:** Acceptance criteria specified Instagram social link and copyright line in Footer, but these were not implemented as no verified social accounts or business information exists. Footer CTA focuses on conversion to booking flow per primary objective.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-007+ functionality added.

### TASK-007 — Booking Flow (Phase 4)
- **Component structure:** Modular booking components in `src/components/booking/` (booking-form.tsx, booking-progress.tsx, booking-step-service.tsx, booking-step-date-location.tsx, booking-step-contact.tsx, booking-step-review.tsx, booking-confirmation.tsx). TypeScript types in `src/types/booking.ts`. WhatsApp config in `src/lib/booking-config.ts`.
- **Booking flow implementation:** 5-step inline flow exactly as specified: Service → Date/Location → Contact → Review → Submit. Progress indicator shows current step (1-5) with visual track. Inline transitions only (no bottom-sheet navigation). Desktop: contained in centered card max-width 600px per DESIGN_SYSTEM.md.
- **Step 1 - Service:** Three placeholder service categories ("Service Category 1/2/3"). Selection uses radio-style buttons with 44px minimum touch targets. Visual selection state with Check icon. Keyboard accessible with aria-pressed.
- **Step 2 - Date/Location:** Native date input with min date validation. Text input for location. Both fields required. Inline validation errors with AlertCircle icon and aria-describedby linkage. 44px minimum input height.
- **Step 3 - Contact:** Name, phone, and email fields. All required with validation. 44px minimum input height. Inline validation errors with AlertCircle icon and aria-describedby linkage.
- **Step 4 - Review:** Read-only summary of all entered information in bordered card. Clearly states "This is a request for availability, not a confirmed booking." Back button disabled during submission. Submit button shows "Submitting..." loading state.
- **Step 5 - Submit:** Simulated submission with 1.5s delay. Creates BookingEnquiry object with UUID and timestamp. Transitions to confirmation state. No backend/database submission.
- **Confirmation screen:** Success icon (CheckCircle2), "Thank You" H2, explanatory text clarifying this is an enquiry receipt not confirmed booking. Enquiry summary card. Primary "Continue on WhatsApp" button. Secondary "Return to Home" button.
- **WhatsApp implementation:** WhatsApp number centralized in `src/lib/booking-config.ts` as placeholder "1234567890" with TODO comment to replace with verified business number. Generates pre-filled message with all enquiry details, URL-encoded. Opens `wa.me` link in new tab with target="_blank" and rel="noopener noreferrer". User-triggered handoff only.
- **State management:** Local React state using useState. Form data preserved across step navigation. Back navigation does not erase valid data. No localStorage or database persistence (acceptable per spec). Refresh resets state (acceptable per spec).
- **Placeholder strategy:** No invented services, prices, or business details. Service categories use generic placeholders. Copy clearly communicates that verified business content is pending. WhatsApp number is placeholder with TODO comment.
- **Responsive behavior:** Mobile-first (375px). Form contained in max-width 600px card on desktop. 44px minimum touch targets on all interactive elements. 16px minimum input text on mobile to prevent iOS auto-zoom. Follows DESIGN_SYSTEM.md spacing and layout rules.
- **Accessibility:** Semantic form markup with proper labels. All inputs have visible labels (no placeholder-only labels). Validation errors use `--destructive` text with warning icon. aria-describedby links errors to inputs. aria-invalid on invalid inputs. aria-live region on progress indicator for step changes. Keyboard navigation throughout. Visible focus states with `--focus-ring`. No color-only error indication.
- **Deviation note (resolved):** Initial implementation omitted the mobile sticky action bar. This was corrected in a review fix. The form now includes a mobile sticky action bar with `fixed bottom-0 left-0 right-0`, `padding-bottom: env(safe-area-inset-bottom)`, and appropriate Back/Next/Submit buttons for each step. Desktop uses inline action bar per design system. Form content has `pb-24` on mobile to prevent content from being hidden behind the sticky bar.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-008+ functionality added.

### TASK-009 — Artist Dashboard (Phase 5)
- **Component structure:** Dashboard route at `src/app/dashboard/page.tsx`, enquiry card component at `src/components/dashboard/enquiry-card.tsx`, status badge component at `src/components/ui/status-badge.tsx`. Mock data in `src/data/mock/enquiries.ts`.
- **Type model alignment:** Used existing `BookingEnquiry` type from `src/types/booking-enquiry.ts` (not `src/types/booking.ts`). Updated booking-form.tsx and booking-confirmation.tsx to use the correct type. This avoids creating a competing enquiry model.
- **Mock data:** Seeded 5 demo enquiries in `src/data/mock/enquiries.ts` using the existing BookingEnquiry structure (serviceId, contact.fullName, contact.email, contact.phone, dateLocation.preferredDate, dateLocation.location, status, createdAt). Demo-safe placeholder values (e.g., "Alex Johnson", "+1 555-0101", "Downtown City Center"). No real business content invented.
- **Dashboard implementation:** Route at `/dashboard` with page heading "Dashboard" and contextual description. Status summary cards showing pending/accepted/rejected counts (3 pending, 1 accepted, 1 rejected in seed data). Enquiry list with cards showing client name, service, date, location, status badge, and submission date.
- **Status badge component:** Created `src/components/ui/status-badge.tsx` using EnquiryStatus from `src/types/enquiry-status.ts`. Maps pending to `--warning` (10% opacity background), accepted to `--success` (10% opacity background), rejected to `--destructive` (10% opacity background) per design system §15. No color-only status indication.
- **Enquiry card anatomy:** Client name (heading) with status badge inline. Service, date, location as labeled key-value pairs. Submission date as caption. Uses `--surface` background with 1px `--border`. Static container (no interactive actions per TASK-009 scope).
- **Empty state:** When mockEnquiries array is empty, displays centered Inbox icon with "No enquiries yet" text. Prevents dashboard crash on empty data.
- **Responsive behavior:** Mobile (375px): single column, full-width cards, 16px padding. Tablet (768px): maintains single column with appropriate spacing. Desktop (1024px+): max-width 1200px container, cards remain single column for readability. Status summary cards use 3-column grid at all breakpoints. Long text wraps correctly (e.g., "Central Business District").
- **Design language:** Follows DESIGN_SYSTEM.md typography (Playfair Display for headings, Inter for body), color tokens, spacing, and minimal shadows. No gradients, glassmorphism, or unnecessary animations. Maintains Elegentoo editorial/premium feel - not a generic SaaS admin dashboard.
- **Accessibility:** Semantic headings (H1 "Dashboard", H2 "Enquiries"). Status badges use text labels with color backgrounds (not color-only). Keyboard navigation where applicable (no interactive elements in TASK-009 scope). Visible focus states on any interactive elements added later.
- **Scope protection:** Read-only display only. No Accept/Reject/WhatsApp actions (TASK-010). No status change functionality. No backend/database integration. No authentication. No real persistence. Dashboard not linked to public marketing navigation per spec.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-010+ functionality added.

### TASK-010 — Enquiry Detail + Actions (Phase 5)
- **Navigation architecture:** In-page navigation using `selectedEnquiryId` state. No route-based detail view (avoids unnecessary routing complexity). Conditional rendering: show detail view when enquiry selected, show list when null. "Back to enquiries" button returns to list.
- **State management:** Local React state with `useState` for enquiries array. Single source of truth - both list and detail view use the same state. `handleUpdateStatus` function maps over array to update status by ID. Updates reflect immediately in UI. No localStorage, no fake API calls, no artificial delays.
- **Enquiry detail component:** Created `src/components/dashboard/enquiry-detail.tsx`. Displays: client name (heading), enquiry ID (caption), status badge, service details (service, preferred date, location), contact information (phone, email), submission date. Uses existing BookingEnquiry type from booking-enquiry.ts. No additional business data invented.
- **Accept action:** Button shown only when status is "pending". Calls `onUpdateStatus(enquiry.id, "accepted")`. Updates local state immediately. Status badge reflects change. After accept, button hidden and "This enquiry has been accepted" message displayed in success color.
- **Reject action:** Button shown only when status is "pending". Calls `onUpdateStatus(enquiry.id, "rejected")`. Updates local state immediately. Status badge reflects change. After reject, button hidden and "This enquiry has been rejected" message displayed in destructive color.
- **WhatsApp action:** Always available regardless of status. Reuses `WHATSAPP_CONFIG.phoneNumber` from `src/lib/booking-config.ts` (no duplication). Generates pre-filled message with: client name, service, formatted date, location, phone, email, submission timestamp. URL-encodes message. Opens `wa.me` link in new tab with `target="_blank"` and `rel="noopener noreferrer"`. Uses MessageCircle icon. User-triggered only - no automatic sending.
- **Enquiry card updates:** Added optional `onClick` prop to EnquiryCard. Converted from `<div>` to `<button>` element for clickability. Added hover state with `hover:border-border-interactive`. Maintains 44px minimum touch target (button height).
- **Dashboard page updates:** Added `"use client"` directive. Added `useState` for enquiries array (initialized with mockEnquiries). Added `selectedEnquiryId` state. Added `handleUpdateStatus` function. Status summary counts now derived from local state (not static mock). Conditional rendering: show EnquiryDetail when selectedEnquiryId, show list when null. Pass onClick to EnquiryCard to set selectedEnquiryId.
- **Action state logic:** Accept and Reject buttons only render when `enquiry.status === "pending"`. WhatsApp button always renders. When status is accepted/rejected, status message displayed below action buttons. Prevents misleading duplicate actions.
- **Responsive behavior:** Mobile (375px): single column, full-width detail card, stacked action buttons (vertical). Tablet (768px): maintains single column with appropriate spacing. Desktop (1024px+): action buttons in horizontal row (flex-row). Back button at top with ArrowLeft icon. Long text wraps correctly. 44px minimum touch targets maintained.
- **Design language:** Follows DESIGN_SYSTEM.md. Playfair Display for headings (client name, section headers). Inter for body text. `--surface` background with 1px `--border`. StatusBadge reused. Button primitives with uppercase tracking-wider. MessageCircle icon for WhatsApp. ArrowLeft icon for back. No gradients, glassmorphism, or unnecessary animations. Maintains Elegentoo editorial feel.
- **Accessibility:** Semantic headings (client name as H2, section headers as H3). Buttons have accessible labels ("Accept Enquiry", "Reject Enquiry", "Open WhatsApp"). WhatsApp link has `rel="noopener noreferrer"`. Status communicated through text + color (not color-only). Keyboard navigation supported (button elements). Focus states from Button primitive. Back button is clearly labeled.
- **Scope protection:** Local demo state only - lost on refresh acceptable. No backend/database integration. No authentication. No real persistence. No TASK-011+ functionality added. Dashboard not linked to public marketing navigation.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-011+ functionality added.

### TASK-011 — Responsive + UX Polish (Phase 6)
- **Skeleton component:** Created `src/components/ui/skeleton.tsx` following shadcn pattern. Uses `animate-pulse` class with `--surface-elevated` background. Rounded 4px corners per design system. Available for future loading state implementations.
- **Reduced-motion support:** Added `animate-pulse` animation to globals.css wrapped in `@media (prefers-reduced-motion: no-preference)` per DESIGN_SYSTEM.md §12. Pulse animation: 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, opacity transitions between 1 and 0.5. Respects user motion preferences.
- **Empty state verification:** Dashboard at `/dashboard` has empty state with Inbox icon and "No enquiries yet" text when enquiries array is empty. Centered container, muted icon, explanatory text per DESIGN_SYSTEM.md §15.
- **Error state verification:** Booking form has inline validation errors for all required fields (service, date, location, name, phone, email). Errors use `--destructive` text, AlertCircle icon, and `aria-describedby` linkage per DESIGN_SYSTEM.md §13. No color-only error indication.
- **Responsive verification:** All sections verified at 375px, 768px, and 1024px+ breakpoints. Navigation: hamburger on mobile (375px), hamburger right on tablet (768px), inline links on desktop (1024px+). Hero: 100svh on mobile, 600px on desktop. Services: 1-column mobile, 2-column tablet, 3-column desktop. Portfolio: 2-column mobile/tablet, 4-column desktop. Testimonials: stacked mobile, 2-column tablet, 3-column desktop. Booking: sticky action bar on mobile, inline on desktop. Dashboard: single column at all breakpoints with 3-column status summary grid.
- **Loading state approach:** Current implementation uses immediate render (acceptable for demo scope with mock data). Skeleton component available for future async data loading. No blocking global spinners used.
- **No new functionality:** TASK-011 is polish only - no new features, no content changes, no scope expansion.
- **Content integrity:** No placeholder content replaced with invented business information. Placeholder strategy maintained.
- **Verification:** `npm run typecheck` and `npm run build` pass. No TASK-012+ functionality added.