---
name: strict-lean-react-next
description: Use when editing React, Next.js, hooks, components, app router code, server actions, route handlers, UI state, file splitting, or reviewing code for overengineering, guard spam, and maintainability.
---

# Strict Lean React / Next.js

Use this skill for React and Next.js work when the priority is simple, maintainable code.

## Core Style

- Prefer functional components and hooks.
- Keep logic close to the feature that owns it.
- Prefer plain functions over classes, factories, managers, or DI.
- Preserve existing project patterns before introducing new ones.
- Optimize for readability, reviewability, and easy change, not abstraction count.

## Strict Mode

This skill is strict.

Do not introduce a new abstraction unless the current task clearly needs it.

Before adding any of the following, justify why the simpler option is not enough:

- custom hooks
- context providers
- reducers
- service classes
- repositories
- factories
- generic utilities
- wrapper components
- base components
- DTOs or mappers
- validation schemas
- middleware
- global state
- caching layers
- configuration registries

If the justification is weak, do not add the abstraction.

## Required Simplicity Check

Before implementing, ask:

- Can this stay inside the component or page?
- Can this be a plain function?
- Can this be local state?
- Can this be direct data fetching?
- Can this be one explicit conditional?
- Can this be solved without a new file?
- Am I adding this because of a real current need, or because it might help later?

Choose the simplest option that satisfies the current requirement.

## File Size and Maintainability

Prefer small, focused, easy-to-scan files.

A file should have one clear primary responsibility.

Do not keep adding logic to large files just because it is convenient.

Extract when a file starts mixing responsibilities such as:

- UI rendering
- data fetching
- form state
- validation
- business calculations
- integration or API mapping
- formatting or export logic
- permissions
- modal or dialog orchestration

Prefer cohesive extraction into:

- feature-local helper files
- small child components
- plain utility functions
- service functions
- typed mappers for external data

Avoid vague buckets like:

- `helpers.ts`
- `utils.ts`
- `common.ts`
- `manager.ts`
- `processor.ts`

Use specific names.

Do not split just to follow a line-count rule.

## React Rules

- Use `useState`, `useEffect`, and derived values first.
- Do not add `useMemo` or `useCallback` by default.
- Use custom hooks only when they remove real duplication or clarify non-trivial lifecycle logic.
- Do not introduce context for state used by one page or one small tree.
- Prefer explicit conditional rendering over abstraction-heavy render helpers.
- Keep small feature-specific helpers in the same file until they stop being readable there.

## Next.js Rules

- Prefer Server Components by default when they fit.
- Use Client Components only for state, effects, browser APIs, event handlers, or client-only libraries.
- Keep data fetching close to the page or route unless reuse is real.
- Keep route handlers and server actions thin: validate input, call service, return result.
- Do not add API routes, caching, revalidation, middleware, or server abstractions unless the product needs them.

## Guard Discipline

Add guards only at real runtime boundaries:

- auth or session checks
- permissions
- route or search params
- user input
- API or request payloads
- external service responses
- database records that may be missing
- browser-only APIs in SSR-sensitive code
- optional third-party fields

Do not add guards for values created locally or already guaranteed by TypeScript.

Prefer failing clearly over hiding impossible states.

## Communication Style

Match the user's preferred style:

- be direct, practical, and concise
- avoid corporate or overly formal language
- do not over-explain obvious things
- prefer short summaries, bullets, and concrete recommendations
- ask only one focused question when needed
- challenge overengineering directly but politely
- explain why the simpler option is enough

## Avoid

Do not add these unless clearly justified:

- dependency injection containers
- generic repositories
- generic CRUD frameworks
- base classes
- broad utility buckets
- excessive DTO or mapper layers
- reducer or state-machine patterns for simple state
- custom hooks for one component
- global state for local UI state
- schema validation everywhere by default
- broad rewrites
- clever abstractions
- defensive checks with no real failure mode

## Response Discipline

Default response shape:

1. State the simple recommended approach.
2. Mention why it fits.
3. Mention any real tradeoff.
4. Stop.

When rejecting complexity, be explicit:

- `This is probably too much.`
- `I would keep this local for now.`
- `No need for a custom hook here.`
- `This does not justify a new abstraction.`
- `A plain function is enough.`

## Rule of Thumb

Simple code means:

- focused files
- clear responsibilities
- local ownership
- plain functions
- minimal abstractions
- easy scanning

Small feature-local extraction is good when it makes the main file easier to read.
