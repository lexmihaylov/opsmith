#!/usr/bin/env node

const fs = require("node:fs")
const path = require("node:path")

const packageRoot = path.resolve(__dirname, "..")
const targetRoot = process.cwd()
const force = process.argv.includes("--force")

const targets = new Set(["opencode", "codex", "both"])
const targetArgIndex = process.argv.indexOf("--target")
const target = targetArgIndex === -1 ? "opencode" : process.argv[targetArgIndex + 1]

if (!targets.has(target)) {
  console.error("Invalid --target. Expected one of: opencode, codex, both.")
  process.exit(1)
}

const opencodeRoot = path.join(targetRoot, ".opencode")
const codexRoot = path.join(targetRoot, ".codex")

const opencodeEntries = [
  { source: "opencode.json", target: "opencode.json" },
  { source: "agents", target: "agents" },
  { source: "instructions", target: "instructions" },
  { source: "skills", target: "skills" },
  { source: "memory", target: "memory", protectExisting: true },
]

const codexEntries = [
  { source: "codex/AGENTS.md", target: "AGENTS.md", root: targetRoot },
  { source: "skills", target: "skills" },
  { source: "codex/skills", target: "skills", merge: true },
  { source: "codex/memory", target: "memory", protectExisting: true },
]

function copyEntry(root, entry) {
  const source = path.join(packageRoot, entry.source)
  const target = path.join(entry.root || root, entry.target)

  if (!fs.existsSync(source)) {
    throw new Error(`Framework file is missing: ${entry.source}`)
  }

  if (entry.protectExisting && fs.existsSync(target)) {
    console.log(`Skipped ${path.relative(targetRoot, target)}; existing project memory is protected.`)
    return
  }

  if (fs.existsSync(target) && !force && !entry.merge) {
    throw new Error(`${path.relative(targetRoot, target)} already exists. Re-run with --force to replace it.`)
  }

  fs.cpSync(source, target, {
    recursive: true,
    force: force || Boolean(entry.merge),
    errorOnExist: !force && !entry.merge,
  })
}

function installOpencode() {
  fs.mkdirSync(opencodeRoot, { recursive: true })
  for (const entry of opencodeEntries) copyEntry(opencodeRoot, entry)
  console.log("Installed opsmith into .opencode/.")
  console.log("Restart opencode so it reloads the new config, agents, skills, and memory.")
}

function installCodex() {
  fs.mkdirSync(codexRoot, { recursive: true })
  for (const entry of codexEntries) copyEntry(codexRoot, entry)
  console.log("Installed opsmith Codex support into AGENTS.md and .codex/.")
  console.log("Start a new Codex session so it reloads the new instructions, skills, and memory.")
}

try {
  if (target === "opencode" || target === "both") installOpencode()
  if (target === "codex" || target === "both") installCodex()
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
