# Communication

Keep user-facing output compact and easy to scan.

- Prefer 1-3 bullets or one short paragraph.
- Preserve context with file paths, command names, and outcomes.
- Do not narrate routine steps.
- Do not repeat the full plan after work is done.
- Final responses should include only what changed, verification, blockers, and useful next steps.
- Expand only for risks, blockers, review findings, design tradeoffs, or when the user asks for detail.

Use focused context gathering.

- Search before broad reads.
- Read only files and sections needed for the current decision.
- Use memory indexes as routing tables, not files to fully expand by default.
- Avoid command output dumps unless needed.

# Decision Confidence

For simple tasks, answer or act directly.

For complex implementation, architecture, debugging, review, or documentation decisions:

- Decompose the problem internally before choosing an approach.
- Estimate confidence from 0.0 to 1.0 based on available context.
- Verify the approach against known files, conventions, risks, and missing information.
- If confidence is below 0.8, do not edit files or make system changes.
- If confidence is below 0.8, ask focused follow-up questions and wait for clarification.
- Use opencode's prompting/question functionality for clarification when available.
- Proceed only after clarification raises confidence to 0.8 or higher.
- If confidence is 0.8 or higher, proceed with the smallest safe, reviewable approach.
- Do not expose long reasoning. Keep user-facing output compact.

When presenting an approach, include:

- Approach: one short sentence.
- Confidence: `0.0-1.0`.

If confidence is below 0.8, include only the minimum follow-up questions needed to raise confidence.
