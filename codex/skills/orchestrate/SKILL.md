# Orchestrate

Skill for coordinating multi-step Codex tasks and fan-out/fan-in execution.

- Use when a task needs planning, delegation, parallel subwork, and a final synthesis.
- Treat `debug` as the first stop for bugs, failures, and runtime issues.
- Skip `research` and `design` when the task is already clear enough to proceed.
- Use `organize` for high-confidence planning and replanning.
- Use `develop` for implementation and file changes.
- Use `review` after implementation, then loop back through `debug`, `organize`, or `develop` if issues remain.
- Allow any skill to interrupt the loop when it discovers a blocker, ambiguity, or defect.
- Compose each handoff into the smallest useful payload: goal, relevant facts, constraints, files, and the exact next question.
- Compress aggressively: drop narrative, repetition, and resolved details; keep only what the next skill needs.
- Give each subskill the minimum context required to do its job well.
- Break the task into the smallest independent subtasks.
- Run independent subtasks in parallel when they do not share writable state or ordering dependencies.
- Keep the engineer in control of scope, tradeoffs, and final approval.
- Avoid parallelizing tasks that depend on the same files, the same decision, or the same unresolved question.
- End with a concise synthesis of results, blockers, and next actions.

Use this skill when you want Codex to orchestrate work explicitly.
