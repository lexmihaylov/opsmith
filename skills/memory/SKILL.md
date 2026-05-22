---
name: memory
description: Use when reading, creating, or updating durable project memory about architecture, functionality, coding approach, style, integrations, and decisions.
---

# Memory

Use `.opencode/memory/` to preserve durable project knowledge that will help future agents avoid rediscovering the same information.

Before broad codebase exploration for project context, read `.opencode/memory/index.md` and only the linked memory files that match the task.

Use the index as a routing table. Do not read all memory files by default. If no memory entry matches the task, inspect the codebase normally and create memory only if you discover durable reusable knowledge.

Create or update memory when you learn reusable information about:

- Architecture and module boundaries
- Product functionality and domain rules
- Coding style and implementation patterns
- Testing approach
- External integrations
- API clients, request flows, and error handling
- Background jobs and async processing
- Data models and persistence rules
- Important decisions and non-obvious constraints

Do not store secrets, credentials, tokens, customer data, account-specific data, temporary task details, or information that is only relevant to the current branch.

Create memories as focused, topic-specific files under `.opencode/memory/`. Name each file after the exact concept it captures, such as `api-integration.md`, `external-billing-integration.md`, `auth-session-flow.md`, `api-error-handling.md`, `background-jobs.md`, or `test-data-fixtures.md`.

Avoid generic memory files such as `architecture.md`, `coding-style.md`, or `functionality.md` unless the project is small enough for that file to remain tightly focused. Prefer one small memory per concept so agents can load only the context they need.

Keep the first section of each memory file short. Start with a concise summary and a "read when" note so future agents can decide quickly whether the memory is relevant.

When adding a new memory file, update `.opencode/memory/index.md` with a one-line relative link and a short "when to read this" description.
