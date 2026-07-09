import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateColors(config: EdenConfig): string {
  let css = ''

  for (const key of Object.keys(config.colors)) {
    css += rule(cls(config, `text-${key}`), { color: `var(--eden-${key})` }, config)
    css += rule(cls(config, `bg-${key}`), { background: `var(--eden-${key})` }, config)
    css += rule(cls(config, `border-${key}`), { 'border-color': `var(--eden-${key})` }, config)
  }

  css += rule(cls(config, 'text-gradient'), { background: 'var(--eden-gradient-cyber)', '-webkit-background-clip': 'text', 'background-clip': 'text', color: 'transparent' }, config)

  for (const [key, value] of Object.entries(config.gradients)) {
    css += rule(cls(config, `gradient-${key}`), { background: value }, config)
  }

  return layer('eden-utilities', css)
}
