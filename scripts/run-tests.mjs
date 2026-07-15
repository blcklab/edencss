import { readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { spawn } from 'node:child_process'

const root = process.cwd()
const testFiles = []

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      await walk(fullPath)
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.test.ts')) {
      testFiles.push(relative(root, fullPath))
    }
  }
}

await walk(join(root, 'src'))

if (testFiles.length === 0) {
  console.error('No test files found in src/**/*.test.ts')
  process.exit(1)
}

const child = spawn(
  process.execPath,
  ['--import', 'tsx', '--test', ...testFiles],
  {
    stdio: 'inherit',
    shell: false
  }
)

child.on('exit', code => {
  process.exit(code ?? 1)
})