---
name: conventions
description: Use when applying project coding conventions, style, architecture patterns, code organization, reuse, security best practices, and implementation preferences.
---

# Conventions

Follow local project conventions over generic best practices. Preserve the shape, style, and architecture already present in the repository unless the task explicitly requires changing them.

## Before Changing Code

- Read relevant `.opencode/memory/index.md` entries when they exist.
- Inspect nearby files before deciding on naming, structure, service/helper boundaries, error handling, security-sensitive behavior, and dependency patterns.
- Prefer the smallest code path that proves the local convention instead of broad exploration.
- Identify the most similar existing implementation and follow it unless it is clearly wrong for the current task.
- Ask before making changes that intentionally diverge from established project conventions.

## Implementation

- Prefer small, focused changes over broad rewrites.
- Make changes easy to review. Keep diffs small, cohesive, and limited to the user's request.
- Keep changes localized unless the task requires cross-cutting edits.
- Use existing utilities, helpers, abstractions, and modules before adding new ones.
- Do not introduce new dependencies, frameworks, architectural layers, global state, or compatibility shims without a concrete need.
- Keep files small enough to scan quickly. Split large or growing files when a clear service, helper, component, or module boundary exists.
- Separate business logic, integration code, formatting, validation, and orchestration into services or helpers when that makes the code easier to reuse or understand.
- Reuse existing functionality before writing new implementations. Search for similar helpers, services, components, hooks, queries, commands, and utilities.
- Extract shared helpers only when there is real reuse or a clear readability win. Avoid speculative abstractions.
- Match existing naming patterns for files, functions, variables, routes, components, commands, and configuration.
- Match existing error handling, logging, validation, async, and data-access patterns.
- Preserve public APIs, persisted data shapes, migration behavior, and user-visible behavior unless the task explicitly changes them.
- Avoid speculative generalization and overengineered approaches. Build for the current requirement, not possible future requirements.

## Architecture

- Respect existing module boundaries and ownership patterns.
- Do not move code across layers unless the new boundary is clearly better and follows the project's existing structure.
- Keep domain rules in the same layer as similar domain rules.
- Keep integration-specific behavior near the existing integration boundary.
- Prefer services, helpers, and composition patterns already used by the project over introducing new manager, provider, or factory layers.

## Verification

- When behavior changes, add or update tests only where they are the clearest way to prove the change or prevent a likely regression.
- Keep tests focused and consistent with existing test style when they are needed.
- Run the most relevant verification command when feasible. If verification cannot be run, state what was not run and why.

## Documentation And Comments

- Update documentation when behavior, setup, commands, or public usage changes.
- Add comments only for non-obvious constraints, tradeoffs, or domain rules.
- Do not add comments that restate simple code.

## Memory

- If you discover durable conventions that future agents should reuse, create or update a focused memory file under `.opencode/memory/`.
- Name memory files after the exact concept they capture, such as `api-error-handling.md` or `test-data-fixtures.md`.
- Update `.opencode/memory/index.md` whenever adding a memory file.
- Do not store temporary task details in memory.

## Security

Security conventions and best practices apply heavily. Treat authentication, authorization, input validation, data exposure, dependency changes, file access, network calls, logging, and error handling as security-sensitive by default.

Never read, print, summarize, or infer secrets from common credential locations, including `.env`, `.env.*`, `*.env`, private keys, token files, `.npmrc`, `.pypirc`, `.netrc`, `secrets/`, and `.secrets/`.

When examples require credentials, use placeholders only.
