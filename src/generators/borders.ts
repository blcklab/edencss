import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateBorders(config: EdenConfig): string {
  let css = ''
  css += rule(cls(config, 'border'), { border: '1px solid var(--eden-border)' }, config)
  css += rule(cls(config, 'border-0'), { border: '0' }, config)
  css += rule(cls(config, 'border-soft'), { border: '1px solid color-mix(in srgb,var(--eden-border) 65%,transparent)' }, config)
  css += rule(cls(config, 'border-strong'), { border: '1px solid color-mix(in srgb,var(--eden-border) 82%,var(--eden-text))' }, config)

  for (const [key, value] of Object.entries(config.radius)) {
    css += rule(cls(config, `rounded-${key}`), { 'border-radius': value }, config)
  }

  for (const [key, value] of Object.entries(config.shadows)) {
    css += rule(cls(config, `shadow-${key}`), { 'box-shadow': value }, config)
  }

  return layer('eden-utilities', css)
}
