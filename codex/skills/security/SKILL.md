---
name: security
description: Use when working on auth, authorization, validation, secrets, logging, errors, file/network access, dependencies, supply-chain risk, or data exposure.
---

# Security

- Treat auth/authz, validation, secrets, logs, errors, files, network, deps, and data exposure as sensitive.
- Never read, print, infer, store, or transform secrets; use variable names/placeholders only.
- Validate inputs at trust boundaries; preserve least privilege and existing access checks.
- When adding/upgrading dependencies, check known vulnerabilities/advisories for the package and selected version.
- Avoid leaking internals, tokens, PII, tenant data, stack traces, or sensitive paths in output/logs/errors.
- Prefer fail-closed behavior; ask before ambiguous sensitive operations.
