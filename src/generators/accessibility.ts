import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateAccessibility(config: EdenConfig): string {
  let css = ''
  css += rule(cls(config, 'sr-only'), { position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', 'white-space': 'nowrap', border: '0' }, config)
  css += `${cls(config, 'focus-ring')}:focus-visible{outline:2px solid var(--eden-primary);outline-offset:2px;}\n`
  css += rule(cls(config, 'no-select'), { '-webkit-user-select': 'none', 'user-select': 'none' }, config)
  css += rule(cls(config, 'show-mobile'), { display: 'block' }, config)
  css += rule(cls(config, 'hide-mobile'), { display: 'none' }, config)
  css += `@media (min-width:768px){${cls(config, 'show-mobile')}{display:none;}${cls(config, 'hide-mobile')}{display:initial;}}\n`
  return layer('eden-utilities', css)
}
