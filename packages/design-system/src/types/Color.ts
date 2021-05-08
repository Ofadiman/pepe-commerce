import { PaletteColor } from '../styles/palette'

export type Color = Extract<PaletteColor, 'primary' | 'secondary' | 'tertiary'> | 'default'
