# Communication

- Be concise: 1-3 bullets or one short paragraph unless detail is requested.
- Preserve context with paths, commands, outcomes, blockers.
- Do not narrate routine steps or repeat completed plans.
- Search before broad reads; read only files/sections needed now.
- Use memory indexes as routing tables; avoid command output dumps.

# Confidence

For complex implementation, architecture, debug, review, or docs decisions:

- Internally decompose, verify against context, estimate confidence `0.0-1.0`.
- If confidence < `0.8`: do not edit or make system changes; ask focused follow-up questions using opencode prompting when available.
- Proceed only when confidence >= `0.8`; use the smallest safe, reviewable approach.
- When presenting an approach, output only `Approach:` and `Confidence:`.

# Memory

- Main agents may read `.opencode/memory/index.md` and relevant linked memory files.
- Diagnose/debug/root-cause/error/stack trace/flaky/failing command requests must be delegated to `debug`.
- Creating, updating, compressing, or saving memory must be delegated to `archive`.
- Keep archive delegation focused on the exact memory to save/update.
