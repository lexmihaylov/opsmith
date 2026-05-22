#!/usr/bin/env node

const fs = require("node:fs")
const path = require("node:path")

const packageRoot = path.resolve(__dirname, "..")
const targetRoot = process.cwd()
const targetConfigRoot = path.join(targetRoot, ".opencode")
const force = process.argv.includes("--force")

const entries = [
  { source: "opencode.json", target: "opencode.json" },
  { source: "agents", target: "agents" },
  { source: "instructions", target: "instructions" },
  { source: "skills", target: "skills" },
  { source: "memory", target: "memory", protectExisting: true },
]

function copyEntry(entry) {
  const source = path.join(packageRoot, entry.source)
  const target = path.join(targetConfigRoot, entry.target)

  if (!fs.existsSync(source)) {
    throw new Error(`Framework file is missing: ${entry.source}`)
  }

  if (entry.protectExisting && fs.existsSync(target)) {
    console.log(`Skipped .opencode/${entry.target}; existing project memory is protected.`)
    return
  }

  if (fs.existsSync(target) && !force) {
    throw new Error(`.opencode/${entry.target} already exists. Re-run with --force to replace it.`)
  }

  fs.cpSync(source, target, {
    recursive: true,
    force,
    errorOnExist: !force,
  })
}

try {
  fs.mkdirSync(targetConfigRoot, { recursive: true })
  for (const entry of entries) copyEntry(entry)
  console.log("Installed opencode-kit into .opencode/.")
  console.log("Restart opencode so it reloads the new config, agents, skills, and memory.")
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
