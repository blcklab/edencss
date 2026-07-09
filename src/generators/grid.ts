import type { EdenConfig } from '../config/types.js'
import { cls, layer, media, rule } from './utils.js'

function gridRules(config: EdenConfig, prefix = ''): string {
  const c = (name: string) => cls(config, `${prefix}${name}`)
  let css = ''
  for (let i = 1; i <= 6; i++) {
    css += rule(c(`grid-${i}`), { display: 'grid', 'grid-template-columns': `repeat(${i},minmax(0,1fr))` }, config)
    css += rule(c(`col-span-${i}`), { 'grid-column': `span ${i} / span ${i}` }, config)
  }
  return css
}

export function generateGrid(config: EdenConfig): string {
  let css = gridRules(config)
  for (const [bp, width] of Object.entries(config.breakpoints)) css += media(width, gridRules(config, `${bp}-`))
  return layer('eden-utilities', css)
}
