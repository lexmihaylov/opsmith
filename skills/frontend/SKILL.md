---
name: frontend
description: Use when editing UI, React components, styling, accessibility, responsive layouts, forms, loading states, or client-side state.
---

# Frontend

- Preserve existing design system, visual language, component patterns, routing, data/loading/error patterns.
- Check desktop/mobile behavior; avoid generic interchangeable layouts.
- Include accessible names, keyboard paths, focus states, semantic elements, and useful empty/error/loading states.
- For React, follow repo patterns; do not add memoization/hooks/deps by default unless existing patterns justify it.
- Keep UI state local unless shared state, URL state, cache, or server state is clearly needed.
