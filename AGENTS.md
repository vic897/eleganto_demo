# ELEGENTOO ARTISTRY - AGENT RULES

## Project Authority

The following files are authoritative:

1. `.docs/PROJECT_SPEC.md`
2. `.docs/DESIGN_SYSTEM.md`
3. `.docs/TASKS.md`
4. `.docs/DECISIONS.md`
5. `.docs/AGENT_CONTEXT.md`

Read these files before making implementation decisions.

## Core Rules

- Work on ONE task per session.
- Do NOT start the next task automatically.
- Do NOT introduce features outside PROJECT_SPEC.md.
- Follow DESIGN_SYSTEM.md exactly.
- Do not invent business content.
- Do not invent services, prices, testimonials, portfolio assets,
  artist biography, or travel policies.
- Use clearly marked placeholders where content has not yet been supplied.
- Prefer simple implementation over unnecessary abstraction.
- Do not introduce a database, authentication, payments, or external
  persistence in V1.
- Do not modify project scope without explicit approval.

## Implementation Rules

- Use Next.js + TypeScript.
- Use Tailwind CSS.
- Use shadcn/ui where appropriate.
- Use Lucide icons.
- Keep components modular.
- Prefer semantic HTML.
- Maintain accessibility requirements from DESIGN_SYSTEM.md.
- Mobile-first implementation is mandatory.
- Primary target viewport is 375px.

## Before Completing a Task

Run:

- TypeScript/type checking
- `npm run build`

Resolve all build and type errors before requesting review.

## Git

Use isolated branches for implementation tasks.

Never directly merge or mark a task complete without review.

Task status should be:

`todo → in-progress → review`

Never mark a task `done` until the reviewer approves it.

## Scope Protection

If a task appears to require functionality outside PROJECT_SPEC.md:

STOP.

Document the issue and request a product decision.

Do not silently expand scope.

## Session Handover

Before ending a session:

1. Update `.docs/AGENT_CONTEXT.md`
2. Record relevant decisions in `.docs/DECISIONS.md`
3. Commit the current work if appropriate