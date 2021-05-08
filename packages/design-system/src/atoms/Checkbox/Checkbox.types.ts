import { CheckboxProps as ReakitCheckboxProps } from 'reakit/Checkbox'

import { Color } from '../../types/Color'

export type Props = {
  color?: Color
  initiallyChecked?: boolean
  label: string
  onCheck: (isChecked: boolean) => void
}

export type CheckboxProps = ReakitCheckboxProps & Pick<Props, 'color'>
