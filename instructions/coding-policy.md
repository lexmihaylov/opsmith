# Coding Policy

- Prefer small, focused, easy-to-scan files.
- Keep components, services, helpers, and modules limited to a clear primary responsibility.
- Use separation of concerns: keep UI/presentation, orchestration, business rules, and integration/data access clearly separated when practical.
- When a file accumulates mixed responsibilities, extract cohesive units before adding more logic.
- Prefer composition and helper/service extraction over growing monolithic modules.
- Keep changes reviewable and maintainable; avoid broad rewrites when incremental refactoring can achieve the same result.
- Reuse existing project patterns and boundaries before introducing new structures.
- Preserve existing behavior and contracts unless the task explicitly requires a change.
