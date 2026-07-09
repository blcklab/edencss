import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateSizing(config: EdenConfig): string {
  let css = ''

  for (const [key, value] of Object.entries(config.sizes)) {
    css += rule(cls(config, `w-${key}`), { width: value }, config)
    css += rule(cls(config, `h-${key}`), { height: value === '100vw' ? '100vh' : value }, config)
  }

  css += rule(cls(config, 'min-h-screen'), { 'min-height': '100vh' }, config)
  css += rule(cls(config, 'min-w-0'), { 'min-width': '0' }, config)
  css += rule(cls(config, 'max-w-none'), { 'max-width': 'none' }, config)

  for (const [key, value] of Object.entries(config.maxWidth)) {
    css += rule(cls(config, `max-w-${key}`), { 'max-width': value }, config)
  }

  return layer('eden-utilities', css)
}
