# opencode-kit

Starter framework for opencode projects. It installs a project-local `.opencode/` setup with focused agents, shared instructions, skills, and memory conventions.

The framework is designed for small, reviewable changes, compact communication, reusable project memory, and strong security defaults.

## Install

Run from the root of the project where you want to install the framework.

Install from the GitHub repository:

```sh
npx github:lexmihaylov/opencode-kit
```

Install from a specific branch, tag, or commit:

```sh
npx github:lexmihaylov/opencode-kit#<ref>
```

Install from the full Git URL:

```sh
npx git+https://github.com/lexmihaylov/opencode-kit.git
```

If framework files already exist, the installer stops instead of overwriting them. Use `--force` only when you intentionally want to replace existing framework files:

```sh
npx github:lexmihaylov/opencode-kit --force
```

Restart opencode after installing so it reloads the config, agents, instructions, skills, and memory.

Existing `.opencode/memory/` is protected. The installer copies starter memory only when `.opencode/memory/` does not exist; `--force` does not overwrite existing project memories or `memory/index.md`.

## Installed Files

The installer copies these files into `.opencode/`:

- `.opencode/opencode.json`
- `.opencode/agents/`
- `.opencode/instructions/`
- `.opencode/skills/`
- `.opencode/memory/`

The installer is intentionally conservative. It will not merge with existing files unless `--force` is used. Existing `.opencode/memory/` is always skipped to protect project memories.

## Framework Goals

- Keep the built-in `build` agent as the default implementation agent.
- Add only a small number of focused custom agents.
- Prefer small, reviewable, secure changes over broad rewrites.
- Keep communication compact and easy to scan.
- Save durable project knowledge in compressed memory files.
- Use global permissions for shared safety rules and per-agent permissions only for special restrictions.

## Configuration

`opencode.json` keeps the default agent as the built-in `build` agent:

```json
"default_agent": "build"
```

It also loads shared instructions and the memory index:

```json
"instructions": [
  ".opencode/instructions/communication.md",
  ".opencode/memory/index.md"
]
```

Skills are loaded from the project-local skills directory:

```json
"skills": {
  "paths": [".opencode/skills"]
}
```

## Agents

The framework includes one custom primary agent and three subagents.

### `document`

Primary agent for creating and updating Markdown documentation.

Use it when you want documentation for:

- Features
- Implementation approaches
- Architecture and module boundaries
- Data flow
- APIs
- Setup and operational behavior
- Durable project knowledge

Permissions:

- Can read/search normal project files through inherited global permissions.
- Can edit only `docs/*.md` and `docs/**/*.md`.
- Can run only `mkdir docs` and `mkdir -p docs`.
- Cannot edit source code, tests, config, scripts, package files, generated files, or memory files.

Invoke manually with:

```text
@document document the auth session flow
```

### `review`

Subagent for code and security review.

Use it when you want a skeptical review for:

- Correctness bugs
- Regressions
- Security risks
- Data exposure
- Authentication and authorization issues
- Input validation gaps
- Unsafe logging
- File or network access risks
- Dependency risks
- Overengineering
- Hard-to-review diffs
- Convention violations

Permissions:

- Inherits global read/search permissions.
- Cannot edit files.
- Bash commands require approval, with environment-reading commands denied.

Invoke manually with:

```text
@review review the current changes
```

The main `build` agent may also use this subagent when a focused review pass is useful.

### `debug`

Subagent for diagnosing failures before implementation.

Use it when working with:

- Stack traces
- Failed command output
- Runtime bugs
- Flaky behavior
- Bug reports
- Unknown root causes

Permissions:

- Inherits global read/search permissions.
- Cannot edit files.
- Bash commands require approval, with environment-reading commands denied.

Invoke manually with:

```text
@debug diagnose this failing test output
```

The expected output is the likely root cause, supporting evidence, and the smallest safe fix.

### `archive`

Subagent for saving durable project knowledge into memory.

All memory creation, updates, compression, and saving should be delegated to `archive`. Other agents may read memory for context, but should not write memory files directly.

Use it when you want to:

- Save a convention
- Archive an implementation approach
- Preserve architecture or flow knowledge
- Record integration details
- Capture important decisions

Permissions:

- Inherits global read/search permissions.
- Can edit only `.opencode/memory/*.md`.
- Cannot use bash.

Invoke manually with:

```text
@archive save this API error handling convention
```

Memory should be compressed as much as possible without losing context. The agent removes narrative and temporary details while preserving exact constraints, reasons, file paths, naming conventions, module boundaries, domain rules, integration details, and decisions.

## Skills

### `conventions`

Applies project coding conventions and implementation preferences.

Core rules:

- Prefer small, reviewable changes.
- Keep files small and easy to scan.
- Separate functionality into services and helpers when it improves reuse or clarity.
- Reuse existing helpers, services, modules, and patterns before adding new ones.
- Avoid overengineered approaches and speculative abstractions.
- Apply security conventions and best practices heavily.

### `memory`

Guides how durable project knowledge is read, created, and updated.

Core rules:

- Use `.opencode/memory/index.md` as a routing table.
- Read only relevant memory files.
- Delegate memory creation, updates, compression, and saving to `archive`.
- Add memory only for durable, reusable project knowledge.
- Keep each memory file focused on one concept.
- Never store secrets, credentials, customer data, or temporary task details.

## Shared Instructions

`instructions/communication.md` applies globally through `opencode.json`.

It defines two important behaviors.

### Compact Communication

User-facing output should stay compact:

- Prefer 1-3 bullets or one short paragraph.
- Preserve context with file paths, command names, and outcomes.
- Avoid narrating routine steps.
- Final responses should focus on what changed, verification, blockers, and useful next steps.

### Focused Context Gathering

Agents should avoid loading unnecessary context:

- Search before broad reads.
- Read only files and sections needed for the current decision.
- Use memory indexes as routing tables.
- Avoid command output dumps unless needed.

### Decision Confidence

For complex implementation, architecture, debugging, review, or documentation decisions, agents should estimate confidence before proceeding.

Rules:

- If confidence is below `0.8`, do not edit files or make system changes.
- Ask focused follow-up questions and wait for clarification.
- Use opencode's prompting/question functionality for clarification when available.
- Proceed only after clarification raises confidence to `0.8` or higher.
- If confidence is `0.8` or higher, proceed with the smallest safe, reviewable approach.

When presenting an approach, agents should include only:

```text
Approach: <one short sentence>
Confidence: <0.0-1.0>
```

## Permissions

Shared permission rules live in `opencode.json`.

Global rules:

- Allow normal project reads and searches.
- Deny common secret files and credential locations.
- Allow normal edits for the default `build` agent while denying secret paths.
- Ask before bash commands by default.
- Deny common environment-reading shell commands.

Agent-specific permissions only define differences from the global base. This keeps agent files small while preserving shared security behavior.

Examples:

- `review` and `debug` set `edit: deny`.
- `document` narrows edits to Markdown files under `docs/`.
- `archive` narrows edits to `.opencode/memory/*.md`.

opencode merges global and agent permissions. Agent rules take precedence.

## Project Memory

The framework installs a minimal `.opencode/memory/index.md`. Specific memory files are created as development work uncovers durable project knowledge.

Memory writes are handled by the `archive` subagent. Main agents should read memory when relevant and delegate memory-saving work to `archive` instead of editing `.opencode/memory/` directly.

Use `.opencode/memory/index.md` as the entry point. It is a pure routing table and should contain only concise links to focused memory files.

Memory rules and examples live in `skills/memory/SKILL.md` and `agents/archive.md`, not in `memory/index.md`. This keeps the always-loaded index small and project-specific.

Example memory files:

- `.opencode/memory/external-billing-integration.md`
- `.opencode/memory/api-integration.md`
- `.opencode/memory/auth-session-flow.md`
- `.opencode/memory/api-error-handling.md`
- `.opencode/memory/background-jobs.md`
- `.opencode/memory/test-data-fixtures.md`

Memory should capture durable knowledge that helps future agents work without rediscovering the same context. Keep each file small and specific so agents can reference only the context they need.

## Recommended Workflow

Use the built-in `build` agent for normal development work.

Use custom agents when the task matches their narrow purpose:

- `@document` for docs in `docs/`.
- `@review` for code and security review.
- `@debug` for diagnosis before implementation.
- `@archive` for compressed durable memory.

For low-confidence or ambiguous work, clarify first. The framework intentionally blocks edits when confidence is below `0.8`.

## Updating The Framework

After changing agents, instructions, skills, memory, or `opencode.json`, restart opencode. Running sessions keep using the previously loaded configuration.

To reinstall into a project and replace existing framework files except project memory:

```sh
npx github:lexmihaylov/opencode-kit --force
```

Use `--force` carefully. It replaces installed framework files under `.opencode/`, but preserves existing `.opencode/memory/`.
