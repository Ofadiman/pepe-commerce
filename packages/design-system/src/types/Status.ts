import { PaletteColor } from '../styles/palette'

export type StatusType = Extract<PaletteColor, 'error' | 'warning' | 'success' | 'info'>
