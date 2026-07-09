import type { EdenConfig } from '../config/types.js'

export function decl(value: string, config: EdenConfig): string {
  return config.important ? `${value} !important` : value
}

export function rule(selector: string, declarations: Record<string, string>, config: EdenConfig): string {
  const body = Object.entries(declarations)
    .map(([property, value]) => `${property}:${decl(value, config)};`)
    .join('')

  return `${selector}{${body}}\n`
}

export function cls(config: EdenConfig, name: string): string {
  return config.prefix ? `.${config.prefix}-${name}` : `.${name}`
}

export function layer(name: string, css: string): string {
  return `@layer ${name}{\n${css}}\n`
}

export function media(minWidth: string, css: string): string {
  return `@media (min-width:${minWidth}){\n${css}}\n`
}

export function responsive(config: EdenConfig, build: (breakpoint: string) => string): string {
  let css = ''

  for (const [breakpoint, minWidth] of Object.entries(config.breakpoints)) {
    css += media(minWidth, build(breakpoint))
  }

  return css
}
