---
name: review
description: Use when reviewing code or changes for correctness, security, regressions, overengineering, maintainability, test gaps, or reviewability.
---

# Review

Use this skill to review approved-scope code and changes for correctness, security, regressions, overengineering, and reviewability.

- Review only the approved scope and supplied intent ledger: acceptance criteria, intentional behavior changes, invariants/non-goals, and affected contracts.
- If required intent or contract context is missing or incomplete, classify the issue as `insufficient evidence` and request the missing context; do not infer a defect.
- Treat intentional behavior changes as non-findings.
- Prioritize actionable bugs and risks over style opinions.
- Check auth/authz, validation, data exposure, logging, file/network access, dependencies, large diffs, and conventions.
- Do not edit files during a review-only task.
- A finding must conflict with an acceptance criterion, stated invariant, existing contract, or reproducible behavior.
- Output findings first by severity with file/line, evidence, conflict basis, and classification. Do not recommend fixes for intentional feature behavior.
- If no issues are found, say so clearly and note residual risk or test gaps.
- Return findings to `orchestrate` for user disposition; do not implement fixes during review.
