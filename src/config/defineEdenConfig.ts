import { defaultConfig } from './defaultConfig.js'
import type { EdenConfig, EdenUserConfig } from './types.js'

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function mergeRecord(base: Record<string, unknown>, override?: Record<string, unknown>): Record<string, unknown> {
  if (!override) return { ...base }

  const output: Record<string, unknown> = { ...base }

  for (const [key, value] of Object.entries(override)) {
    const current = output[key]

    if (isPlainObject(current) && isPlainObject(value)) {
      output[key] = mergeRecord(current, value)
    } else if (value !== undefined) {
      output[key] = value
    }
  }

  return output
}

export function defineEdenConfig(config: EdenUserConfig = {}): EdenConfig {
  return mergeRecord(defaultConfig as unknown as Record<string, unknown>, config as Record<string, unknown>) as unknown as EdenConfig
}
