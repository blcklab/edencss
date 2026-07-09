import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generatePosition(config: EdenConfig): string {
  let css = ''
  css += rule(cls(config, 'relative'), { position: 'relative' }, config)
  css += rule(cls(config, 'absolute'), { position: 'absolute' }, config)
  css += rule(cls(config, 'fixed'), { position: 'fixed' }, config)
  css += rule(cls(config, 'sticky'), { position: 'sticky' }, config)
  css += rule(cls(config, 'inset-0'), { inset: '0' }, config)
  css += rule(cls(config, 'top-0'), { top: '0' }, config)
  css += rule(cls(config, 'right-0'), { right: '0' }, config)
  css += rule(cls(config, 'bottom-0'), { bottom: '0' }, config)
  css += rule(cls(config, 'left-0'), { left: '0' }, config)

  for (const [key, value] of Object.entries(config.zIndex)) css += rule(cls(config, `z-${key}`), { 'z-index': value }, config)

  return layer('eden-utilities', css)
}
