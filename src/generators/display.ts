import type { EdenConfig } from '../config/types.js'
import { cls, layer, media, rule } from './utils.js'

function displayRules(config: EdenConfig, prefix = ''): string {
  const c = (name: string) => cls(config, `${prefix}${name}`)
  let css = ''
  css += rule(c('block'), { display: 'block' }, config)
  css += rule(c('inline-block'), { display: 'inline-block' }, config)
  css += rule(c('inline'), { display: 'inline' }, config)
  css += rule(c('flex'), { display: 'flex' }, config)
  css += rule(c('inline-flex'), { display: 'inline-flex' }, config)
  css += rule(c('grid'), { display: 'grid' }, config)
  css += rule(c('hidden'), { display: 'none' }, config)
  return css
}

export function generateDisplay(config: EdenConfig): string {
  let css = displayRules(config)
  for (const [bp, width] of Object.entries(config.breakpoints)) css += media(width, displayRules(config, `${bp}-`))
  return layer('eden-utilities', css)
}
