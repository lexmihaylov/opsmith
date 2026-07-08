---
name: dependencies
description: Use when adding, removing, upgrading, or evaluating packages, tools, frameworks, plugins, generated code, or lockfile changes.
---

# Dependencies

- Prefer existing dependencies, platform APIs, or small local code before adding packages/frameworks.
- Add deps only for concrete need; check maintenance, license, size, known vulnerabilities/advisories for the selected version, transitive risk, and runtime impact.
- Keep package and lockfile changes intentional; do not mix unrelated upgrades.
- Avoid generated/vendor code unless required; document regeneration command when present.
- Verify install/build/tests relevant to dependency changes when feasible.
