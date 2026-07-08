# Orchestrate

Skill for coordinating multi-step Codex tasks and fan-out/fan-in execution.

- Use when a task needs planning, delegation, parallel subwork, and a final synthesis.
- Break the task into the smallest independent subtasks.
- Run independent subtasks in parallel when they do not share writable state or ordering dependencies.
- Prefer fan-out/fan-in for read-only work such as research, review, and context gathering.
- Route each subtask to the most focused skill:
  - `research` for options and tradeoffs.
  - `debug` for failures, stack traces, and root cause.
  - `review` for correctness, security, and regression review.
  - `document` for Markdown docs.
  - `archive` for durable memory.
  - `design` for UX and visual direction.
  - `build` for implementation and file changes.
  - `plan` for execution planning and task breakdowns when available.
- Keep the engineer in control of scope, tradeoffs, and final approval.
- Avoid parallelizing tasks that depend on the same files, the same decision, or the same unresolved question.
- End with a concise synthesis of results, blockers, and next actions.

Use this skill when you want Codex to orchestrate work explicitly.
