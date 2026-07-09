import type { EdenConfig } from '../config/types.js'
import { cls, layer, media, rule } from './utils.js'

function spacingRules(config: EdenConfig, prefix = ''): string {
  const c = (name: string) => cls(config, `${prefix}${name}`)
  let css = ''

  for (const [key, value] of Object.entries(config.spacing)) {
    css += rule(c(`p-${key}`), { padding: value }, config)
    css += rule(c(`px-${key}`), { 'padding-left': value, 'padding-right': value }, config)
    css += rule(c(`py-${key}`), { 'padding-top': value, 'padding-bottom': value }, config)
    css += rule(c(`pt-${key}`), { 'padding-top': value }, config)
    css += rule(c(`pr-${key}`), { 'padding-right': value }, config)
    css += rule(c(`pb-${key}`), { 'padding-bottom': value }, config)
    css += rule(c(`pl-${key}`), { 'padding-left': value }, config)

    css += rule(c(`m-${key}`), { margin: value }, config)
    css += rule(c(`mx-${key}`), { 'margin-left': value, 'margin-right': value }, config)
    css += rule(c(`my-${key}`), { 'margin-top': value, 'margin-bottom': value }, config)
    css += rule(c(`mt-${key}`), { 'margin-top': value }, config)
    css += rule(c(`mr-${key}`), { 'margin-right': value }, config)
    css += rule(c(`mb-${key}`), { 'margin-bottom': value }, config)
    css += rule(c(`ml-${key}`), { 'margin-left': value }, config)

    css += rule(c(`gap-${key}`), { gap: value }, config)
    css += rule(c(`gap-x-${key}`), { 'column-gap': value }, config)
    css += rule(c(`gap-y-${key}`), { 'row-gap': value }, config)
  }

  css += rule(c('mx-auto'), { 'margin-left': 'auto', 'margin-right': 'auto' }, config)
  css += rule(c('my-auto'), { 'margin-top': 'auto', 'margin-bottom': 'auto' }, config)

  return css
}

export function generateSpacing(config: EdenConfig): string {
  let css = spacingRules(config)

  for (const [bp, width] of Object.entries(config.breakpoints)) {
    css += media(width, spacingRules(config, `${bp}-`))
  }

  return layer('eden-utilities', css)
}
