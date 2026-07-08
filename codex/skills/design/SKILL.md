---
name: design
description: Use when the task involves UX discovery, visual design, design systems, reusable UI components, accessibility, layout, styling, or interaction decisions.
---

# Design

Provide implementation-ready UX/UI guidance before code changes.

- Start with problem framing: user goal, audience, platform, constraints, accessibility, and success criteria.
- If confidence is low, ask 2-3 targeted questions that change the recommendation.
- Build from system to detail: principles -> visual direction -> layout/grid -> type/color/spacing -> component inventory -> variants/states -> motion/accessibility.
- For components, specify purpose, anatomy, behavior, content rules, responsive behavior, and empty/loading/error/disabled/success states.
- Prefer reuse and consistency over new patterns.
- If no design system exists, define the minimum viable one instead of inventing ad hoc UI.
- Output structured guidance: context -> recommendations -> visual system -> component specs -> validation notes -> open questions.
