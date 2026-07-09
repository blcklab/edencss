import type { EdenConfig } from '../config/types.js'

export function generateThemes(config: EdenConfig): string {
  let css = '@layer eden-themes{\n'

  for (const theme of Object.values(config.themes)) {
    css += `${theme.selector}{\n`
    for (const [key, value] of Object.entries(theme.values)) {
      css += `--eden-${key}:${value};\n`
    }
    css += '}\n'
  }

  css += '}\n'
  return css
}
