# Elegentoo Artistry — Design System (V2)

## 1. Design Philosophy
The Elegentoo Artistry UI must feel like a premium, high-end editorial experience. It is designed primarily to convert Instagram traffic into qualified booking enquiries on mobile devices[cite: 3]. 

Elegance is achieved through restraint. We rely on strict typographic hierarchy, generous white space, and high-quality photography rather than decorative UI elements. We avoid heavy gradients, glowing effects, and excessive glassmorphism. The interface must act as a quiet, sophisticated frame that elevates the artist's work.

## 2. Visual Identity
- **Vibe:** Editorial, timeless, professional, and intimate.
- **Form factor:** Sharp edges or very subtle rounding (2px-4px max). Avoid "bubbly" large border radii.
- **Imagery:** Photography takes center stage. UI elements overlaid on imagery must maintain strict contrast ratios.

## 3. Color System
The color palette uses semantic tokens. It is deliberately muted and neutral to allow the makeup artistry (photography) to provide the actual color and visual interest.

| Token | Value | Purpose & Usage Guidance |
| :--- | :--- | :--- |
| `--background` | `#FAFAFA` (Soft Pearl) | Primary page background. Slightly off-white to reduce harsh eye strain. |
| `--surface` | `#FFFFFF` (Pure White) | For cards, modals, and overlapping containers to create subtle depth. |
| `--surface-elevated`| `#F3F3F3` (Light Ash) | For secondary containers, input backgrounds, or hover states. |
| `--foreground` | `#1A1A1A` (Charcoal) | Primary text color. Softer than pure black for a refined, print-like reading experience. |
| `--muted` | `#737373` (Medium Gray) | Secondary text, captions, and placeholders. |
| `--border` | `#E5E5E5` (Light Gray) | Dividers, subtle card borders, and input outlines. |
| `--border-interactive`| `#A3A3A3` (Darker Gray) | Input borders on hover/active states for accessible contrast. |
| `--primary` | `#1A1A1A` (Charcoal) | Primary buttons, active states, and critical actions. |
| `--primary-foreground`| `#FFFFFF` (Pure White) | Text inside primary buttons/elements. |
| `--focus-ring` | `rgba(26, 26, 26, 0.5)` | 2px solid outline with 2px offset for visible keyboard focus. |
| `--accent` | `#E8E3DF` (Warm Sand) | Subtle decorative highlights or active selection backgrounds. |
| `--success` | `#2D4A36` (Forest Green) | Success states, accepted dashboard bookings[cite: 3]. Elegant rather than neon. |
| `--warning` | `#996321` (Ochre) | Pending states or alerts. |
| `--destructive` | `#7A2727` (Deep Brick) | Error states, validation messages, or the Reject dashboard action[cite: 3]. |

## 4. Typography System
We use a dual-typeface system to balance luxury display with highly readable utility text. 

* **Display/Headings:** `Playfair Display` (or similar high-contrast serif). Used for brand feel.
* **UI/Body:** `Inter` (or similar clean sans-serif). Used for maximum legibility at 375px.

| Role | Font Family | Size (Mobile/Desktop) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Display 1 | Serif | 40px / 56px | 400 (Regular) | 1.1 | -0.02em |
| Heading 1 (H1) | Serif | 32px / 48px | 400 (Regular) | 1.2 | -0.01em |
| Heading 2 (H2) | Serif | 24px / 32px | 500 (Medium) | 1.3 | Normal |
| Heading 3 (H3) | Sans-serif | 18px / 20px | 600 (SemiBold) | 1.4 | Normal |
| Body Large | Sans-serif | 16px / 18px | 400 (Regular) | 1.5 | Normal |
| Body Default| Sans-serif | 14px / 16px | 400 (Regular) | 1.5 | Normal |
| Label/Button| Sans-serif | 13px / 14px | 500 (Medium) | 1.0 | 0.05em (UPPERCASE) |
| Caption | Sans-serif | 12px / 12px | 400 (Regular) | 1.4 | Normal |

## 5. Spacing System
Based on a 4px base spacing scale, with 8px increments forming the primary rhythm.
- `spacing-1`: 4px (Micro-adjustments)
- `spacing-2`: 8px (Between icon and text)
- `spacing-3`: 12px (Inside small inputs)
- `spacing-4`: 16px (Standard mobile page margin, input padding)
- `spacing-6`: 24px (Between component elements)
- `spacing-8`: 32px (Between sections on mobile)
- `spacing-12`: 48px (Between sections on tablet)
- `spacing-16`: 64px (Major section breaks)

## 6. Layout & Grid Rules
- **Mobile (375px base):** 4 columns. 16px outer margins. 16px gutter. Single column stacking by default.
- **Tablet (768px):** 8 columns. 32px outer margins. 24px gutter. Allows 2-column component/form layouts.
- **Desktop (1024px+):** 12 columns. Centered container max-width 1200px. 24px gutter. Max form width capped at 600px.

## 7. Border-Radius Rules
- `radius-none`: 0px (Editorial/print look for major imagery).
- `radius-sm`: 2px (Checkbox inputs, subtle inner elements).
- `radius-md`: 4px (Buttons, form inputs, service cards).
- `radius-full`: 9999px (Only used for radio buttons and circular progress indicators).

## 8. Shadows & Elevation
Shadows are used sparingly. The primary method of separation is spacing and `--border` lines.
- `shadow-sm`: `0 1px 2px rgba(0,0,0,0.05)` (Sticky navigation).
- `shadow-md`: `0 4px 12px rgba(0,0,0,0.08)` (Dropdowns, modals).
- `shadow-lg`: `0 12px 24px rgba(0,0,0,0.12)` (Dashboard enquiry detail overlays).

## 9. Surface & Card Treatment
Cards utilize `--surface` on a `--background` canvas. They rely on a 1px `--border` rather than shadows to define their edge.
**Strict Rule:** Cards must NOT be nested interactive elements. If a card contains a button, the card itself is a static `<div/section>` and only the button acts as a clickable target.

## 10. Image Treatment
- **Hero:** `min-height: 100svh` on mobile. Responsive explicit sizing on desktop (e.g., `min-height: 600px`).
- **Aspect Ratios:** Portfolio/Services use `3:4` or `4:5`.
- **Overlays:** Any text sitting on an image requires a gradient overlay (`rgba(0,0,0,0)` to `rgba(0,0,0,0.6)` at the bottom) to guarantee WCAG AA contrast.
- **Placeholders:** As per constraints, do not invent portfolio assets[cite: 3]. Use solid `--surface-elevated` blocks with a subdued icon for missing content.

## 11. Iconography
- **Style:** Minimalist, geometric, 1.5px stroke width. Unfilled (e.g., Lucide or Feather icons).
- **Scale:** `16x16` for inline/buttons, `24x24` for navigation/standalone actions.

## 12. Motion & Animation Principles
- No bouncy or exaggerated physics.
- **Respect User Settings:** All animations must wrap inside `@media (prefers-reduced-motion: no-preference)`.
- **Page transitions:** Subtle 200ms opacity fade.
- **Hover states (Desktop):** Color shift on buttons (200ms ease-in-out), slight image zoom inside clipping masks (duration 400ms) for portfolio items.
- **Overlays:** Fade in rather than complex directional slides to preserve simplicity.

## 13. Accessibility Considerations
- **Touch Targets:** Minimum **44x44px** for all interactive elements (crucial for 375px mobile).
- **Focus Management:** 
  - All interactive elements must show a visible focus outline using `--focus-ring`.
  - Overlays (Dashboard detail view) must trap focus, close on `Escape`, and return focus to the triggering element upon closing.
- **Forms:** 
  - Inputs must use visible labels; placeholders alone are insufficient.
  - Validation errors must be inline text linked to inputs via `aria-describedby`.
  - Input borders must use `--border-interactive` on focus/hover.
- **Contrast:** Strict adherence to WCAG AA contrast ratios (4.5:1 for normal text).

## 14. Responsive Behavior
- **375px (Mobile):** Single column layouts. Full-width buttons. Hamburger navigation. Sticky safe-area aware action bars for booking.
- **768px (Tablet):** Navbar transitions to logo left, hamburger right (or inline links if space permits). Form layout transitions to 2-column for compact inputs (e.g., First Name / Last Name side-by-side). Grids (Services/Portfolio) become 2-column.
- **1024px+ (Desktop):** Navigation expands fully to inline links. 3-column grids for Services/Portfolio. Booking forms and text blocks are capped at `600px` centered to maintain readability.

---

## 15. Primitive Components

### Component: Button
*   **Anatomy:** Container, Label (uppercase), optional Icon (left/right).
*   **Variants:** Primary (Solid Charcoal), Secondary (Outline), Ghost (Text only).
*   **States:** Default, Hover, Active, Disabled (opacity 0.5, `cursor: not-allowed`), Loading (replaces label with spinner).
*   **Mobile behavior:** Full-width by default in forms and layout sections.

### Component: Input (Text / Select / Textarea)
*   **Anatomy:** Label (top), Input Field, optional inline Error Message (bottom).
*   **States:** Default (`--border`), Focus (`--border-interactive` + `--focus-ring`), Error (`--destructive` border).
*   **Mobile behavior:** 44px minimum height. Ensure `text-size: 16px` minimum on mobile to prevent iOS Safari auto-zoom.

### Component: Status Badge
*   **Anatomy:** Small rounded container, Label (caption size).
*   **States:** Pending (`--warning`), Accepted (`--success`), Rejected (`--destructive`). Uses 10% opacity background of the token with solid token text color.

### Component: Section Header
*   **Anatomy:** Subheadline (Label format, `--muted`), Main Headline (H2).
*   **Spacing:** `margin-bottom: 24px` (mobile), `32px` (desktop).

### Component: Progress Indicator
*   **Anatomy:** Horizontal track or segmented dots for the 5-step booking flow.
*   **Behavior:** Must visibly indicate Current, Completed, and Upcoming steps.

### Application States
*   **Loading State:** Subtle pulse animation on `--surface-elevated` skeletons. No blocking global spinners.
*   **Empty State:** Centered container, muted icon, Body Default text explaining the lack of content (e.g., "No pending enquiries.").
*   **Error State:** Inline `--destructive` text with a warning icon. Must not rely on color alone to convey meaning.

---

## 16. Section & Layout Specifications

### Component: Navbar
*   **Anatomy:** Brand Logo (Center or Left), Navigation Links, primary "Book Now" CTA.
*   **Mobile behavior (375px):** Logo center. Hamburger menu left. **No global fixed bottom CTA.** The "Book Now" CTA is accessible inside the hamburger menu and via the Hero section.
*   **Desktop behavior:** Logo left, links center, CTA right.
*   **Interaction:** Hamburger toggles a full-screen or slide-out menu.
*   **Accessibility:** `aria-expanded` on hamburger, skip-to-content link required.

### Component: Hero
*   **Anatomy:** Full-bleed background image, H1, subheadline, primary CTA.
*   **Mobile behavior:** `min-height: 100svh` to fill the exact screen size perfectly, avoiding browser chrome issues.
*   **Desktop behavior:** Explicit responsive sizing (e.g., `min-height: 600px` or `80vh`).
*   **Spacing:** Content anchored bottom with `32px` padding from bottom edge (above safe area).

### Section: About
*   **Anatomy:** Image (artist portrait placeholder[cite: 3]), text block (biography placeholder[cite: 3]).
*   **Mobile Layout:** Stacked. Image top (`3:4` ratio), text bottom.
*   **Desktop Layout:** 2-column side-by-side. Text centered vertically against image.

### Section: Services (Service Card)
*   **Anatomy:** Card containing `3:4` Image, Title, Description, Price, "Select/Enquire" button. Content uses placeholders[cite: 3].
*   **Rule:** The card itself is a static container. ONLY the button inside is interactive.
*   **Mobile Layout:** 1 column, stacked.
*   **Desktop Layout:** 3-column grid.

### Section: Portfolio
*   **Anatomy:** Grid of `4:5` image placeholders[cite: 3]. No text overlays by default.
*   **Mobile Layout:** 2-column grid.
*   **Desktop Layout:** 3 or 4-column masonry or strict grid.

### Section: Testimonials
*   **Anatomy:** Quote text (Body Large, italicized), Client Name (Caption). Content uses placeholders[cite: 3].
*   **Mobile Layout:** Horizontal swipeable carousel or stacked list.
*   **Desktop Layout:** 3-column grid.

### Section: Travel Banner
*   **Anatomy:** Simple distinct block highlighting service area/travel policy placeholders[cite: 3].
*   **Colors:** `--surface-elevated` background.

### Section: Footer
*   **Anatomy:** Secondary CTA ("Ready to book?"), Social Links (Instagram icon), Copyright.
*   **Mobile Layout:** Stacked, center-aligned.

---

## 17. Booking & Dashboard Workflows

### Component: Booking Step Container
*   **Purpose:** Houses the strict 5-step inline flow: Service → Date/Location → Contact → Review → Submit[cite: 3].
*   **Navigation:** Inline transitions (no bottom-sheet drawers for primary navigation).
*   **Mobile Sticky Action Bar:** The 'Next/Submit/Back' buttons live in a sticky container at the bottom of the viewport (`position: sticky; bottom: 0`). 
    *   Must apply `padding-bottom: env(safe-area-inset-bottom)`.
    *   Avoids keyboard overlap by utilizing visual viewport properties or standard native browser scrolling behavior.
*   **Desktop behavior:** Contained within a centered card max-width `600px`.
*   **Accessibility:** Live region announcing step changes (e.g., "Step 2 of 5").

### View: Confirmation Screen
*   **Purpose:** Displayed strictly after "Submit". Confirms receipt of enquiry, not a guaranteed booking[cite: 3].
*   **Anatomy:** Success Icon, H2 (Thank You), Body Text explaining next steps, Primary CTA button (WhatsApp).
*   **Interaction:** The WhatsApp button acts as a user-triggered handoff containing pre-filled enquiry data[cite: 3]. It opens the native `wa.me` link.

### Component: Dashboard Card (Artist View)
*   **Purpose:** To display mock enquiries to the artist within the mini dashboard[cite: 3].
*   **Anatomy:** Client Name, Service, Date/Location, Status Badge, Action Row (Accept, Reject, WhatsApp).
*   **Interaction:** Tapping the static card opens the enquiry detail view. Buttons inside the action row trigger local demo state changes[cite: 3]. WhatsApp button triggers native handoff.
*   **Constraints:** Dashboard records and states are strictly local/demo state, not durable database records[cite: 3].