# Orchestrate

Skill for coordinating multi-step Codex tasks and fan-out/fan-in execution.

- Use when a task needs planning, delegation, parallel subwork, and a final synthesis.
- Treat `debug` as the first stop for bugs, failures, and runtime issues.
- Skip `research` and `design` when the task is already clear enough to proceed.
- Use `organize` for high-confidence planning and replanning. After it returns a plan, present it to the user and pause for `Implement`, `Add context`, or `Revise plan` before invoking `develop`.
- Use `develop` for implementation and file changes.
- Before review, decide whether review is required. Require it for auth/security, data/schema/API contracts, payment/reporting logic, permission changes, broad refactors, dependency changes, user-reported regressions, or unresolved uncertainty in those areas. Ask the user to choose `Review`, `Skip`, or `Add context` before invoking `review`.
- After review, present findings and pause for `Implement fixes`, `Skip`, or `Add context`. Only `Implement fixes` may loop back to `develop`, and only with actionable findings.
- Loop back through `debug`, `organize`, or `develop` if issues remain and the user has approved the corresponding next step.
- Before every behavior-changing implementation, pass `develop` an intent ledger containing acceptance criteria, intentional behavior changes, invariants/non-goals, and affected contracts.
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
