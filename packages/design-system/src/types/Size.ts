export const Size = {
  Large: 'l',
  Medium: 'm',
  Small: 's'
} as const

export type Sizes = typeof Size[keyof typeof Size]
