---
name: memory
description: Use when reading durable Codex project memory or deciding whether project knowledge should be archived in .codex/memory.
---

# Memory

- Use `.codex/memory/` for durable reusable project knowledge only.
- Read `.codex/memory/index.md` first; it should contain only one-line links to memory files.
- Read only linked memory files relevant to the task.
- Do not load all memory by default.
- If new durable knowledge is found, use the `archive` skill to create or update memory.
- Archive-worthy topics: architecture, module boundaries, domain rules, implementation patterns, integrations, API/error flows, async/background jobs, persistence rules, decisions, non-obvious constraints.
- Never store secrets, credentials, tokens, customer/account data, temporary task details, or branch-only information.
- Memories should be focused, topic-named files; one concept per file; summary + read-when note.
- `archive` updates `index.md` with one concise link entry only; do not store rules or examples in the index.
