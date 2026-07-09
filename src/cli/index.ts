#!/usr/bin/env node

import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const command = process.argv[2]

function help(): void {
  console.log(`EdenCSS CLI

Usage:
  edencss build [--out ./edencss.css]
  edencss --help

Commands:
  build   Copy the bundled EdenCSS stylesheet to an output file.

Examples:
  edencss build
  edencss build --out ./src/styles/edencss.css
`)
}

function getOutFile(): string {
  const index = process.argv.findIndex((arg: string) => arg === '--out' || arg === '-o')
  const value = index >= 0 ? process.argv[index + 1] : undefined
  return resolve(process.cwd(), value || 'edencss.css')
}

if (!command || command === '--help' || command === '-h') {
  help()
  process.exit(0)
}

if (command === 'build') {
  const cliDir = dirname(fileURLToPath(import.meta.url))
  const bundledCss = resolve(cliDir, '..', 'edencss.css')
  const outFile = getOutFile()

  mkdirSync(dirname(outFile), { recursive: true })
  copyFileSync(bundledCss, outFile)

  console.log(`EdenCSS written to ${outFile}`)
  process.exit(0)
}

console.error(`Unknown EdenCSS command: ${command}`)
help()
process.exit(1)
