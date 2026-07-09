import type { EdenConfig } from './types.js'

export const defaultConfig: EdenConfig = {
  prefix: '',
  important: false,

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },

  sizes: {
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },

  maxWidth: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    full: '100%',
    screen: '100vw',
  },

  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    success: '#16a34a',
    warning: '#f59e0b',
    danger: '#dc2626',
    info: '#0891b2',
    dark: '#020617',
    light: '#f8fafc',
    muted: '#64748b',
    surface: '#ffffff',
    soft: '#f1f5f9',
    border: '#e2e8f0',
    text: '#0f172a',
    white: '#ffffff',
    black: '#000000',
  },

  radius: {
    none: '0',
    sm: '0.375rem',
    md: '0.625rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(15, 23, 42, 0.08)',
    md: '0 10px 30px rgba(15, 23, 42, 0.12)',
    lg: '0 24px 80px rgba(15, 23, 42, 0.18)',
    glow: '0 0 32px rgba(37, 99, 235, 0.28)',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },

  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },

  lineHeight: {
    none: '1',
    tight: '1.15',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },

  letterSpacing: {
    tight: '-0.03em',
    normal: '0',
    wide: '0.04em',
  },

  gradients: {
    primary: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    cyber: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
    sunset: 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)',
    aurora: 'linear-gradient(135deg, #22c55e, #06b6d4, #8b5cf6)',
    midnight: 'linear-gradient(135deg, #020617, #1e293b, #334155)',
  },

  componentTokens: {
    'control-height-sm': '36px',
    'control-height-md': '44px',
    'control-height-lg': '52px',
    'control-padding-x-sm': 'var(--eden-space-3)',
    'control-padding-x-md': 'var(--eden-space-4)',
    'control-padding-x-lg': 'var(--eden-space-5)',
    'control-radius': 'var(--eden-radius-lg)',
    'control-border': 'var(--eden-border)',
    'control-bg': 'var(--eden-surface)',
    'control-text': 'var(--eden-text)',
    'control-placeholder': 'var(--eden-muted)',

    'surface-bg': 'var(--eden-surface)',
    'surface-text': 'var(--eden-text)',
    'surface-border': 'var(--eden-border)',
    'surface-radius': 'var(--eden-radius-xl)',
    'surface-shadow': 'var(--eden-shadow-md)',
    'surface-padding': 'var(--eden-space-4)',

    'overlay-bg': 'rgba(15, 23, 42, 0.56)',
    'overlay-blur': '8px',

    'focus-color': 'var(--eden-primary)',
    'focus-width': '2px',
    'focus-offset': '2px',

    'motion-fast': '150ms',
    'motion-normal': '220ms',
    'motion-slow': '320ms',
    'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',

    'z-dropdown': '1000',
    'z-sticky': '1020',
    'z-drawer': '1040',
    'z-modal': '1050',
    'z-popover': '1060',
    'z-toast': '1080',

    'state-disabled-opacity': '0.56',
  },

  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    max: '9999',
  },

  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },

  themes: {
    light: {
      selector: ':root, [data-eden-theme="light"], .eden-theme-light',
      values: {
        bg: '#ffffff',
        text: '#0f172a',
        muted: '#64748b',
        surface: '#ffffff',
        soft: '#f1f5f9',
        border: '#e2e8f0',
      },
    },
    dark: {
      selector: '[data-eden-theme="dark"], .eden-theme-dark',
      values: {
        bg: '#020617',
        text: '#f8fafc',
        muted: '#94a3b8',
        surface: '#0f172a',
        soft: '#1e293b',
        border: 'rgba(255,255,255,0.12)',
      },
    },
    midnight: {
      selector: '[data-eden-theme="midnight"], .eden-theme-midnight',
      values: {
        bg: '#020617',
        text: '#e0f2fe',
        muted: '#7dd3fc',
        surface: '#082f49',
        soft: '#0c4a6e',
        border: 'rgba(125,211,252,0.22)',
      },
    },
    glass: {
      selector: '[data-eden-theme="glass"], .eden-theme-glass',
      values: {
        bg: 'rgba(248,250,252,0.72)',
        text: '#0f172a',
        muted: '#64748b',
        surface: 'rgba(255,255,255,0.72)',
        soft: 'rgba(255,255,255,0.52)',
        border: 'rgba(255,255,255,0.42)',
      },
    },
    cyber: {
      selector: '[data-eden-theme="cyber"], .eden-theme-cyber',
      values: {
        bg: '#030712',
        text: '#ecfeff',
        muted: '#67e8f9',
        surface: '#111827',
        soft: '#1f2937',
        border: 'rgba(34,211,238,0.22)',
      },
    },
    aurora: {
      selector: '[data-eden-theme="aurora"], .eden-theme-aurora',
      values: {
        bg: '#f8fafc',
        text: '#172554',
        muted: '#475569',
        surface: '#ffffff',
        soft: '#eef2ff',
        border: '#c7d2fe',
      },
    },
  },

  modules: {
    reset: true,
    tokens: true,
    base: true,
    layout: true,
    spacing: true,
    sizing: true,
    display: true,
    flex: true,
    grid: true,
    typography: true,
    colors: true,
    gradients: true,
    borders: true,
    effects: true,
    position: true,
    overflow: true,
    accessibility: true,
    themes: true,
  },
}
