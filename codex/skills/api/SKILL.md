---
name: api
description: Use when changing API routes, handlers, controllers, clients, contracts, request/response shapes, auth boundaries, errors, or integrations.
---

# API

- Preserve public contracts, status codes, error shapes, auth boundaries, pagination, and persisted behavior unless explicitly changing them.
- Validate/coerce inputs at boundaries; keep domain rules and integration concerns in existing layers.
- Keep errors consistent and non-leaky; log enough for operators without exposing sensitive data.
- Update clients, tests, docs, and memory when API behavior or contracts change.
- Prefer backward-compatible changes when external consumers or persisted data exist.
