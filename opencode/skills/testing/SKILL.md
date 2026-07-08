---
name: testing
description: Use when adding, updating, selecting, or running tests, fixtures, mocks, regression coverage, or verification commands.
---

# Testing

- Test changed behavior and likely regressions; avoid broad test churn.
- Reuse existing test style, helpers, fixtures, mocks, factories, snapshots.
- Prefer smallest meaningful verification first; expand only when failures or risk justify it.
- Keep tests deterministic, focused on behavior, and independent of secrets/network/time when possible.
- If skipping tests or commands, state why and note residual risk.
