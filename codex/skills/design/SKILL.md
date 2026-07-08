---
name: design
description: Use when the task involves UI, UX, visual design, branding, design system, layout, styling, or any front-end visual decision.
---

# Design

Use this skill for UI, UX, visual design, branding, design systems, layout, styling, color, typography, accessibility, and front-end interaction decisions.

- Start with problem framing: user goal, audience, platform, constraints, accessibility, and success criteria.
- If confidence is low, ask 2-3 targeted questions. Prefer interview-style prompts and short questionnaires only when they change the recommendation.
- Use NN/g-aligned methods when helpful:
  - User interviews for discovery and mental models.
  - Surveys only for quantitative attitudinal questions.
  - Usability tests for behavioral validation and task success.
  - Heuristic evaluation for expert UI review using Nielsen's heuristics.
  - Visual-design tests for first impressions and brand fit.
- Build from system to detail: principles -> visual direction -> layout/grid -> type/color/spacing -> component inventory -> variants/states -> motion/accessibility.
- For components, specify purpose, anatomy, behavior, content rules, responsive behavior, and empty/loading/error/disabled/success states.
- Prefer reuse and consistency over new patterns. If no design system exists, define the minimum viable one instead of inventing ad hoc UI.
- Treat the output as implementation-ready guidance, not code.
- Output is structured: context -> recommendations -> visual system -> component specs -> validation notes -> open questions.
