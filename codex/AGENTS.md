# Project Agent Instructions

Use this file as the durable project guidance for Codex.

The mirrored agent roles live in `.codex/agents/`.

## Global Safety Rules

Use these repo-wide guardrails as the Codex equivalent of the OpenCode permission policy:

- Read and search project files normally, but avoid opening known secret or credential files unless the task explicitly requires it.
- Search is allowed for normal code and docs discovery; do not use broad, destructive, or out-of-scope filesystem access.
- Edit only files that are relevant to the task and avoid changing secrets, credentials, generated artifacts, or branch-local data.
- Treat shell commands as scoped work; avoid destructive commands, shell escapes, and environment-dumping commands unless the task explicitly requires them and the sandbox permits them.
- Avoid accessing parent directories, absolute filesystem roots, or home-directory content outside the repository.
- When a task needs elevated or destructive action, pause and request confirmation rather than assuming permission.

These rules mirror the intent of `opencode/opencode.json`:

- Project reads stay open.
- Secret files and credentials stay blocked.
- Normal edits are allowed only for task-relevant files.
- Destructive shell commands require confirmation.
- External directories outside the repo stay out of scope.

## Communication

- Be concise: 1-3 bullets or one short paragraph unless detail is requested.
- Preserve context with paths, commands, outcomes, and blockers.
- Do not narrate routine steps or repeat completed plans.
- Search before broad reads; read only files and sections needed now.
- Use memory indexes as routing tables; avoid command output dumps.

## Coding Policy

- Prefer small, focused, easy-to-scan files.
- Keep components, services, helpers, and modules limited to a clear primary responsibility.
- Use separation of concerns: keep UI/presentation, orchestration, business rules, and integration/data access clearly separated when practical.
- When a file accumulates mixed responsibilities, extract cohesive units before adding more logic.
- Prefer composition and helper/service extraction over growing monolithic modules.
- Keep changes reviewable and maintainable; avoid broad rewrites when incremental refactoring can achieve the same result.
- Reuse existing project patterns and boundaries before introducing new structures.
- Prefer clean, simple, readable code over cleverness.
- Avoid unnecessary checks, branches, and defensive complexity unless they solve a real problem.
- Preserve existing behavior and contracts unless the task explicitly requires a change.

## Confidence

For complex implementation, architecture, debug, review, or docs decisions:

- Internally decompose, verify against context, and estimate confidence `0.0-1.0`.
- If confidence is below `0.8`, do not edit files or make system changes; ask focused follow-up questions.
- Proceed only when confidence is at least `0.8`; use the smallest safe, reviewable approach.
- When presenting an approach, output only `Approach:` and `Confidence:`.

## Delegation And Workflow Skills

Use the most focused skill when one exists:

- Use `debug` for stack traces, failed commands, runtime bugs, flaky behavior, and root-cause analysis.
- Use `review` for code review, security review, regression review, and test-gap review.
- Use `document` for Markdown documentation under `docs/`.
- Use `archive` for creating, updating, compressing, or saving durable project memory.
- Use `research` for pre-implementation external research and option comparison.
- Use `design` for UX, visual design, design systems, and reusable UI guidance.

## Agents

Use `.codex/agents/` for focused role guidance that mirrors the OpenCode-style primary agents and subagents.

## Memory

- Use `.codex/memory/` for durable reusable project knowledge only.
- Read `.codex/memory/index.md` first; it should contain only one-line links to memory files.
- Read only linked memory files relevant to the task.
- Do not load all memory by default.
- If new durable knowledge is found, use the `archive` skill to create or update memory.
- Never store secrets, credentials, tokens, customer/account data, temporary task details, or branch-only information.
