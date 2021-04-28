import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from 'react'
import { ButtonProps as ReakitButtonProps } from 'reakit'

import { Color } from '../../types/Color'
import { Sizes } from '../../types/Size'

type SubmitButtonProps = {
  onClick?: never
  type?: 'submit'
}

type BasicButtonProps = {
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | undefined
}

type BaseButtonProps = SubmitButtonProps | BasicButtonProps

type Variant = 'contained' | 'ghost' | 'outlined'

// Props connected with UI approach are in separate
// type for Storybook controls
export type BaseProps = {
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

export type ButtonProps = ReakitButtonProps & BaseProps & BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
