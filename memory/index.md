# Project Memory Index

Use this file to find durable project knowledge before scanning the full codebase. Treat it as a routing table, not as the memory itself.

Memories are created as development work uncovers reusable project knowledge. Keep each memory focused and named after the specific topic it explains.

## Memories

- No memories have been recorded yet.

## Reading Memory

- Read only the memory files that are relevant to the current task.
- Do not load every memory file by default.
- If no listed memory matches the task, inspect the codebase normally and create a memory only if you discover durable reusable knowledge.
- Prefer the smallest relevant memory over broad context gathering.

## Naming

- Use descriptive, topic-specific names such as `api-integration.md`, `external-billing-integration.md`, `auth-session-flow.md`, `api-error-handling.md`, `background-jobs.md`, or `test-data-fixtures.md`.
- Avoid generic names such as `architecture.md`, `coding-style.md`, or `functionality.md` unless the whole project is small enough for that file to stay focused.
- Prefer one small memory per concept so agents can load only the context they need.

## Adding Memory

When adding a memory file, replace the placeholder above with a bullet that links to the file and explains when to read it.

Example:

- [API Integration](./api-integration.md): External API clients, request patterns, response handling, retries, and error mapping.

## Memory Rules

- Add memory only when the information is durable and reusable.
- Keep memories focused so they are easy to reference without loading unrelated context.
- Keep this index concise. Each entry should be one line with a link and a short "when to read this" description.
- Update this index whenever adding a new memory file.
- Never store secrets, credentials, tokens, customer data, or temporary task details.
