import { ButtonHTMLAttributes, MouseEvent } from 'react'
import { ButtonProps } from 'reakit'

import { Color } from '../../types/Color'
import { Sizes } from '../../types/Size'

type LinkButtonProps = {
  href?: string
  onClick?: never
}

type SubmitButtonProps = {
  href?: never
  onClick?: never
  type?: 'submit'
}

type BasicButtonProps = {
  href?: never
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  type?: 'button'
}

type BasicProps = LinkButtonProps | SubmitButtonProps | BasicButtonProps

type Variant = 'contained' | 'ghost' | 'outlined'

// Props connected with UI approach are in separate
// type for Storybook controls
export type StorybookProps = BasicProps & {
  /**
   * Color from palette default | primary | secondary
   */
  color?: Color
  /**
   * Disabling fancy ripple effect
   */
  isRippleDisabled?: boolean
  /**
   * Available button size s | m | l
   */
  size?: Sizes
  /**
   * Type of button display contained | outlined | ghost
   */
  variant?: Variant
}

type BaseProps = StorybookProps & ButtonHTMLAttributes<HTMLButtonElement>

export type Props = ButtonProps & BaseProps
