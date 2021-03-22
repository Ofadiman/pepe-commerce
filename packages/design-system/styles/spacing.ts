import { createSpacing } from 'spacing-helper'

// each spacing value is multiplied by multiplied by 4
// single value is equal 0.25rem which is 4px
export const spacing = createSpacing({ divisor: 100, factor: 25, units: 'rem' })
