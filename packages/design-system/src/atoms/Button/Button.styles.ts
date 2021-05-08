import { Button as ReakitButton } from 'reakit/Button'
import styled, { css } from 'styled-components'

import { color, PaletteColor } from '../../styles/palette'
import { spacing } from '../../styles/spacing'
import { Variant } from '../../types/Variant'
import { ButtonProps } from './Button.types'

type Styles = ReturnType<typeof css>

const buttonStyles = (props: ButtonProps): Styles => css`
  outline: 0;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  line-height: 0;
  transition: all 0.3s ease-in-out;
  user-select: none;

  ${props.color === 'default' && defaultStyles(props)}
  ${props.color === 'primary' && primaryStyles(props)}
  ${props.color === 'secondary' && secondaryStyles(props)}
  ${props.disabled && disabledStyles(props)}
  
  ${props.size === 's' && smallSize()}
  ${props.size === 'm' && mediumSize()}
  ${props.size === 'l' && largeSize()}
`

export const Button = styled(ReakitButton)<ButtonProps>`
  ${buttonStyles}
`

export const ButtonLink = styled.a<ButtonProps>`
  ${buttonStyles}
`

const defaultStyles = (props: ButtonProps): Styles =>
  getVariantStyles(props, 'mono400', {
    outlined: {
      color: color('mono900'),
      border: color('mono600', 0.7),
      ripple: color('mono900', 0.2),
      background: 'transparent',
      hover: {
        background: color('mono400', 0.5)
      }
    },
    contained: {
      color: color('mono900'),
      ripple: color('mono900', 0.2),
      background: color('mono400'),
      hover: {
        background: color('mono500')
      }
    },
    ghost: {
      color: color('mono900'),
      ripple: color('mono900', 0.2),
      background: 'transparent',
      border: 'transparent',
      hover: {
        background: color('mono400', 0.5)
      }
    }
  })

const primaryStyles = (props: ButtonProps): Styles =>
  getVariantStyles(props, 'primary', {
    outlined: {
      background: 'transparent',
      hover: {
        background: color('primary', 0.1)
      }
    },
    contained: {
      color: color('mono100'),
      ripple: color('mono100', 0.6),
      hover: {
        background: color('primary', 0.8)
      }
    },
    ghost: {
      background: 'transparent',
      border: 'transparent',
      hover: {
        background: color('primary', 0.1)
      }
    }
  })

const secondaryStyles = (props: ButtonProps): Styles =>
  getVariantStyles(props, 'secondary', {
    outlined: {
      background: 'transparent',
      hover: {
        background: color('secondary', 0.1)
      }
    },
    contained: {
      color: color('mono100'),
      ripple: color('mono100', 0.5),
      hover: {
        background: color('secondary', 0.8)
      }
    },
    ghost: {
      background: 'transparent',
      border: 'transparent',
      hover: {
        background: color('secondary', 0.1)
      }
    }
  })

type VariantStyleOptions = {
  background?: string
  border?: string
  color?: string
  hover?: {
    background?: string
    color?: string
  }
  ripple?: string
}

type Config = Record<Variant, VariantStyleOptions>

const getVariantStyles = (props: ButtonProps, colorName: PaletteColor, config: Config): Styles => css`
  // TODO styling for focused state
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  &:not([disabled]),
  &:not([aria-disabled='true']) {
    // TODO styling for active state
    &:active,
    &[data-active='true'] {
    }
  }

  ${Object.entries(config).reduce(
    (variantStyles, [variant, option]) =>
      props.variant === variant
        ? `
          border: 1px solid  ${option.border ?? color(colorName)};
          color: ${option.color ?? color(colorName)};
          
          background: ${option.background ?? color(colorName)};
      
          .ripple {
            background-color: ${option.ripple ?? color(colorName, 0.3)} !important;
          }
      
          &:not([aria-disabled='true']) {
            &:hover {
              background: ${option.hover?.background ?? option.background ?? color(colorName)};
              color: ${option.hover?.color ?? option.color ?? color(colorName)};
            }
          }
         `
        : variantStyles,
    ``
  )}
`

const disabledStyles = (props: ButtonProps): Styles => css`
  &[disabled],
  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: auto !important;
    border: 1px solid transparent;
    color: ${color('mono600')};
    background: ${color('mono500')};
  }

  ${props.variant === 'ghost' &&
  `
    &[disabled],
    &[aria-disabled='true'] {
      background: transparent;
    }
  `}
`

const smallSize = (): Styles => css`
  padding: ${spacing(3.25, 3)};
  font-size: ${spacing(3.25)};
  border-radius: ${spacing(3.25)};
`

const mediumSize = (): Styles => css`
  padding: ${spacing(3.5, 4)};
  font-size: ${spacing(3.5)};
  border-radius: ${spacing(3.5)};
`

const largeSize = (): Styles => css`
  padding: ${spacing(3.75, 6)};
  font-size: ${spacing(3.75)};
  border-radius: ${spacing(3.75)};
`
