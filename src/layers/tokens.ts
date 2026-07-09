import type { EdenConfig } from '../config/types.js'

export function generateTokens(config: EdenConfig): string {
  let css = '@layer eden-tokens{\n:root{\n'

  css += '--eden-font-sans:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;\n'
  css += '--eden-font-mono:"JetBrains Mono","Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n'
  css += '--eden-container:1200px;\n'
  css += '--eden-grid-min:220px;\n'
  css += '--eden-gap:1rem;\n'
  for (const [key, value] of Object.entries(config.spacing)) css += `--eden-space-${key}:${value};\n`
  for (const [key, value] of Object.entries(config.colors)) css += `--eden-${key}:${value};\n`
  for (const [key, value] of Object.entries(config.radius)) css += `--eden-radius-${key}:${value};\n`
  for (const [key, value] of Object.entries(config.shadows)) css += `--eden-shadow-${key}:${value};\n`
  for (const [key, value] of Object.entries(config.gradients)) css += `--eden-gradient-${key}:${value};\n`
  for (const [key, value] of Object.entries(config.componentTokens)) css += `--eden-${key}:${value};\n`

  css += '--eden-primary-text:#ffffff;\n'
  css += '}\n}\n'
  return css
}
