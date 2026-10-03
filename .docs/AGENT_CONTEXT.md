# AGENT CONTEXT

Active branch: task-001-init-architecture

Current phase: Phase 3 — Public Website

Last completed:
TASK-001 — Project Architecture (status: review, awaiting approval)
TASK-002 — Project Shell + Navigation (status: review, awaiting approval)

Current task:
TASK-003 — Hero + About — status: review

Implementation status:
TASK-003 Hero and About sections implemented:
- Hero section with H1, subheadline, and primary CTA
- Hero mobile min-height: 100svh; desktop: 600px
- Hero content anchored bottom with 32px padding
- About section with 3:4 portrait placeholder and biography placeholder
- Mobile: About stacks image above text
- Desktop: About two-column layout with text vertically centered
- Typography follows design system (serif headings, sans body)
- No invented business content; polished placeholders used

Files changed during TASK-003:
- src/components/sections/hero.tsx
- src/components/sections/about.tsx
- src/app/page.tsx
- .docs/AGENT_CONTEXT.md
- .docs/TASKS.md
- .docs/DECISIONS.md

Verification (TASK-003):
- `npm run typecheck` — pass
- `npm run build` — pass
- Responsive behavior follows DESIGN_SYSTEM.md
- Placeholder strategy respects content integrity constraints

Blockers:
None

Next step:
Reviewer approval of TASK-003, then TASK-004 (Services). Do not start TASK-004 until TASK-003 is approved.
