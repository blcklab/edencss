import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

const lineHeightBySize: Record<string, string> = {
  xs: '1rem',
  sm: '1.25rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
  '5xl': '1',
}

export function generateTypography(config: EdenConfig): string {
  let css = ''

  for (const [key, value] of Object.entries(config.fontSize)) {
    css += rule(cls(config, `text-${key}`), { 'font-size': value, 'line-height': lineHeightBySize[key] ?? '1.5' }, config)
  }

  for (const [key, value] of Object.entries(config.fontWeight)) css += rule(cls(config, `font-${key}`), { 'font-weight': value }, config)
  for (const [key, value] of Object.entries(config.lineHeight)) css += rule(cls(config, `leading-${key}`), { 'line-height': value }, config)
  for (const [key, value] of Object.entries(config.letterSpacing)) css += rule(cls(config, `tracking-${key}`), { 'letter-spacing': value }, config)

  css += rule(cls(config, 'font-sans'), { 'font-family': 'var(--eden-font-sans)' }, config)
  css += rule(cls(config, 'font-mono'), { 'font-family': 'var(--eden-font-mono)' }, config)
  css += rule(cls(config, 'text-left'), { 'text-align': 'left' }, config)
  css += rule(cls(config, 'text-center'), { 'text-align': 'center' }, config)
  css += rule(cls(config, 'text-right'), { 'text-align': 'right' }, config)
  css += rule(cls(config, 'uppercase'), { 'text-transform': 'uppercase' }, config)
  css += rule(cls(config, 'lowercase'), { 'text-transform': 'lowercase' }, config)
  css += rule(cls(config, 'capitalize'), { 'text-transform': 'capitalize' }, config)
  css += rule(cls(config, 'truncate'), { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }, config)
  css += rule(cls(config, 'balance'), { 'text-wrap': 'balance' }, config)
  css += rule(cls(config, 'fluid-title'), { 'font-size': 'clamp(2rem,6vw,4.5rem)', 'line-height': '1.05', 'letter-spacing': '-0.045em' }, config)
  css += rule(cls(config, 'fluid-subtitle'), { 'font-size': 'clamp(1rem,2.5vw,1.35rem)', 'line-height': '1.65' }, config)

  return layer('eden-utilities', css)
}
