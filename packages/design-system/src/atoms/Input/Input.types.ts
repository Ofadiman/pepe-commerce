import { FC, LabelHTMLAttributes } from 'react'
import { InputProps as ReakitInputProps } from 'reakit'

import { UseFieldValidatorType } from '../../utils/hooks/useField'

export type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  isActive: boolean
  isHidden: boolean
}

export type InputProps = ReakitInputProps & {
  adornment: 'left' | 'right' | undefined
  isFocused: boolean
}

export type Props = ReakitInputProps & {
  adornment?: {
    component: FC
    side: 'left' | 'right'
  }
  autocomplete?: boolean
  hiddenLabel?: boolean
  inputName: string
  labelText: string
  onInputChangeCallback: (value: string, name: string, isValid: boolean) => void
  placeholder: string
  validator?: UseFieldValidatorType
}
