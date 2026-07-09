import type { EdenConfig } from '../config/types.js'
import { cls, layer, media, rule } from './utils.js'

function layoutRules(config: EdenConfig, prefix = ''): string {
  const c = (name: string) => cls(config, `${prefix}${name}`)
  let css = ''

  css += rule(c('container'), { width: 'min(100% - 1.5rem,var(--eden-container))', 'margin-inline': 'auto' }, config)
  css += rule(c('section'), { 'padding-block': 'clamp(3rem,8vw,7rem)' }, config)
  css += rule(c('stack-y'), { display: 'flex', 'flex-direction': 'column', gap: 'var(--eden-gap)' }, config)
  css += rule(c('stack-x'), { display: 'flex', 'flex-direction': 'row', gap: 'var(--eden-gap)' }, config)
  css += rule(c('cluster'), { display: 'flex', 'flex-wrap': 'wrap', 'align-items': 'center', gap: 'var(--eden-gap)' }, config)
  css += rule(c('split'), { display: 'flex', 'flex-direction': 'column', gap: 'var(--eden-gap)' }, config)
  css += rule(c('center'), { display: 'grid', 'place-items': 'center' }, config)
  css += rule(c('center-x'), { display: 'flex', 'justify-content': 'center' }, config)
  css += rule(c('center-y'), { display: 'flex', 'align-items': 'center' }, config)
  css += rule(c('auto-grid'), { display: 'grid', 'grid-template-columns': 'repeat(auto-fit,minmax(var(--eden-grid-min),1fr))', gap: 'var(--eden-gap)' }, config)
  css += rule(c('touch'), { 'min-width': '44px', 'min-height': '44px' }, config)
  return css
}

export function generateLayout(config: EdenConfig): string {
  let css = layoutRules(config)

  for (const [bp, width] of Object.entries(config.breakpoints)) {
    css += media(width, layoutRules(config, `${bp}-`))
  }

  return layer('eden-layout', css)
}
