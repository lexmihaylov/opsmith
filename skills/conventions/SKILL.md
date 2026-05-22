---
name: conventions
description: Use when applying project coding conventions, architecture, code organization, reuse, security, and implementation preferences.
---

# Conventions

Prefer local conventions over generic best practices. Inspect nearby code and routed memory before changing patterns.

## Code

- Make small, cohesive, reviewable diffs limited to the request.
- Keep files scannable; split only at clear service/helper/component/module boundaries.
- Reuse existing services, helpers, utilities, components, hooks, queries, commands before adding new ones.
- Separate business logic, integration, formatting, validation, and orchestration when it improves reuse/clarity.
- Match existing naming, error handling, logging, validation, async, data-access, routing, config patterns.
- Preserve public APIs, persisted shapes, migrations, and user-visible behavior unless explicitly changing them.
- Avoid speculative abstractions, new deps/frameworks/layers/global state/compat shims without concrete need.

## Architecture

- Respect module boundaries and ownership.
- Keep domain rules with similar domain rules; integration behavior near integration boundaries.
- Prefer existing composition/services/helpers over new managers/providers/factories.

## Verification

- Test only when clearest for changed behavior or likely regression; follow existing style.
- Run the most relevant feasible verification; if skipped, say why.

## Docs/Memory

- Update docs when behavior/setup/commands/public usage changes.
- Comments only for non-obvious constraints/tradeoffs/domain rules.
- Durable memory writes must be delegated to `archive`.

## Security

Security applies heavily. Treat auth/authz, validation, data exposure, deps, file/network access, logging, errors as sensitive. Never read/print/infer secrets; use placeholders.
