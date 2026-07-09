export type EdenMap = Record<string, string>

export interface EdenTheme {
  selector: string
  values: EdenMap
}

export interface EdenModules {
  reset: boolean
  tokens: boolean
  base: boolean
  layout: boolean
  spacing: boolean
  sizing: boolean
  display: boolean
  flex: boolean
  grid: boolean
  typography: boolean
  colors: boolean
  gradients: boolean
  borders: boolean
  effects: boolean
  position: boolean
  overflow: boolean
  accessibility: boolean
  themes: boolean
}

export interface EdenConfig {
  prefix: string
  important: boolean
  breakpoints: EdenMap
  spacing: EdenMap
  sizes: EdenMap
  maxWidth: EdenMap
  colors: EdenMap
  radius: EdenMap
  shadows: EdenMap
  fontSize: EdenMap
  fontWeight: EdenMap
  lineHeight: EdenMap
  letterSpacing: EdenMap
  gradients: EdenMap
  componentTokens: EdenMap
  zIndex: EdenMap
  opacity: EdenMap
  themes: Record<string, EdenTheme>
  modules: EdenModules
}

export type EdenUserConfig = Partial<EdenConfig> & {
  modules?: Partial<EdenModules>
  themes?: Record<string, EdenTheme>
}
