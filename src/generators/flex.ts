import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateFlex(config: EdenConfig): string {
  let css = ''
  css += rule(cls(config, 'row'), { 'flex-direction': 'row' }, config)
  css += rule(cls(config, 'col'), { 'flex-direction': 'column' }, config)
  css += rule(cls(config, 'wrap'), { 'flex-wrap': 'wrap' }, config)
  css += rule(cls(config, 'nowrap'), { 'flex-wrap': 'nowrap' }, config)
  css += rule(cls(config, 'items-start'), { 'align-items': 'flstart' }, config)
  css += rule(cls(config, 'items-center'), { 'align-items': 'center' }, config)
  css += rule(cls(config, 'items-end'), { 'align-items': 'flend' }, config)
  css += rule(cls(config, 'items-stretch'), { 'align-items': 'stretch' }, config)
  css += rule(cls(config, 'justify-start'), { 'justify-content': 'flstart' }, config)
  css += rule(cls(config, 'justify-center'), { 'justify-content': 'center' }, config)
  css += rule(cls(config, 'justify-end'), { 'justify-content': 'flend' }, config)
  css += rule(cls(config, 'justify-between'), { 'justify-content': 'space-between' }, config)
  css += rule(cls(config, 'justify-around'), { 'justify-content': 'space-around' }, config)
  css += rule(cls(config, 'grow'), { 'flgrow': '1' }, config)
  css += rule(cls(config, 'grow-0'), { 'flgrow': '0' }, config)
  css += rule(cls(config, 'shrink'), { 'flshrink': '1' }, config)
  css += rule(cls(config, 'shrink-0'), { 'flshrink': '0' }, config)
  return layer('eden-utilities', css)
}
