const palette = {
  primary: 'var(--colors-primary)',
  secondary: 'var(--colors-secondary)',
  tertiary: 'var(--colors-tertiary)',

  orange: 'var(--colors-primary)',
  gold: 'var(--colors-primary)',
  green: 'var(--colors-primary)',
  seafoam: 'var(--colors-primary)',
  purple: 'var(--colors-primary)',
  ultraviolet: 'var(--colors-primary)',

  mono100: 'var(--colors-monochrome-100)',
  mono200: 'var(--colors-monochrome-200)',
  mono300: 'var(--colors-monochrome-300)',
  mono400: 'var(--colors-monochrome-400)',
  mono500: 'var(--colors-monochrome-500)',
  mono600: 'var(--colors-monochrome-600)',
  mono700: 'var(--colors-monochrome-700)',
  mono800: 'var(--colors-monochrome-800)',
  mono900: 'var(--colors-monochrome-900)',

  success: 'var(--colors-status-positive)',
  error: 'var(--colors-status-negative)',
  warning: 'var(--colors-status-warning)',
  info: 'var(--colors-primary)'
} as const

export type PaletteColor = keyof typeof palette
export type Palette = typeof palette

export const color = (color: PaletteColor, opacity = 1): string => `rgba(${palette[color]}, ${opacity})`
