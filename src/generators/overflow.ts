import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateOverflow(config: EdenConfig): string {
  let css = ''
  css += rule(cls(config, 'overflow-hidden'), { overflow: 'hidden' }, config)
  css += rule(cls(config, 'overflow-auto'), { overflow: 'auto' }, config)
  css += rule(cls(config, 'scroll-x'), { 'overflow-x': 'auto', '-webkit-overflow-scrolling': 'touch' }, config)
  css += rule(cls(config, 'scroll-y'), { 'overflow-y': 'auto', '-webkit-overflow-scrolling': 'touch' }, config)
  return layer('eden-utilities', css)
}
