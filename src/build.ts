import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defaultConfig } from './config/defaultConfig.js'
import { generateReset } from './layers/reset.js'
import { generateTokens } from './layers/tokens.js'
import { generateBase } from './layers/base.js'
import { generateLayout } from './generators/layout.js'
import { generateSpacing } from './generators/spacing.js'
import { generateSizing } from './generators/sizing.js'
import { generateDisplay } from './generators/display.js'
import { generateFlex } from './generators/flex.js'
import { generateGrid } from './generators/grid.js'
import { generateTypography } from './generators/typography.js'
import { generateColors } from './generators/colors.js'
import { generateBorders } from './generators/borders.js'
import { generateEffects } from './generators/effects.js'
import { generatePosition } from './generators/position.js'
import { generateOverflow } from './generators/overflow.js'
import { generateAccessibility } from './generators/accessibility.js'
import { generateThemes } from './themes/themes.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const banner = `/*!
 * @blcklab/edencss v${process.env.npm_package_version ?? '1.0.0'}
 * MIT License
 */\n@layer eden-reset,eden-tokens,eden-base,eden-layout,eden-utilities,eden-themes;\n`

async function write(name: string, css: string): Promise<void> {
  await writeFile(resolve(dist, name), `${banner}${css}`, 'utf8')
}

async function build(): Promise<void> {
  await mkdir(dist, { recursive: true })

  const reset = generateReset()
  const tokens = generateTokens(defaultConfig)
  const base = generateBase()
  const layout = generateLayout(defaultConfig)
  const spacing = generateSpacing(defaultConfig)
  const sizing = generateSizing(defaultConfig)
  const typography = generateTypography(defaultConfig)
  const colors = generateColors(defaultConfig)
  const effects = generateEffects(defaultConfig)
  const themes = generateThemes(defaultConfig)
  const utilities = [
    spacing,
    sizing,
    generateDisplay(defaultConfig),
    generateFlex(defaultConfig),
    generateGrid(defaultConfig),
    typography,
    colors,
    generateBorders(defaultConfig),
    effects,
    generatePosition(defaultConfig),
    generateOverflow(defaultConfig),
    generateAccessibility(defaultConfig),
  ].join('\n')

  await write('reset.css', reset)
  await write('tokens.css', tokens)
  await write('base.css', base)
  await write('layout.css', layout)
  await write('spacing.css', spacing)
  await write('sizing.css', sizing)
  await write('typography.css', typography)
  await write('colors.css', colors)
  await write('effects.css', effects)
  await write('themes.css', themes)
  await write('utilities.css', utilities)
  await write('edencss.css', [reset, tokens, base, layout, utilities, themes].join('\n'))
}

build().catch((error) => {
  console.error(error)
  process.exit(1)
})
