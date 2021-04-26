import { Button } from 'reakit/Button'
import styled, { css } from 'styled-components'

import { palette } from '../../styles/palette'
import { spacing } from '../../styles/spacing'
import { Props } from './Button.types'

// background: ${({ color, variant }) => getBackground(color, variant)};
type Styles = ReturnType<typeof css>

export const StyledButton = styled(Button)<Props>`
  outline: 0;
  line-height: 1.75;
  font-weight: 700;
  border-radius: 0.25rem;
  background: none;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  border: 1px solid transparent;

  &:before,
  &:after {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    content: '';
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 0.25rem;
  }

  &:before {
  }

  &:not([disabled]),
  &:not([aria-disabled='true']) {
    &:hover:before {
      opacity: 0.8;
    }

    &:active,
    &[data-active='true'] {
    }
  }

  ${(props) => props.color === 'default' && defaultStyles(props)}
  ${(props) => props.color === 'primary' && primaryStyles(props)}
  ${(props) => props.color === 'secondary' && secondaryStyles(props)}
  ${(props) => props.disabled && disabledStyles(props)}
  
  ${(props) => props.size === 's' && smallSize()}
  ${(props) => props.size === 'm' && mediumSize()}
  ${(props) => props.size === 'l' && largeSize()}
`

const defaultStyles = (props: Props): Styles => css`
  color: ${palette.mono900};

  .ripple {
    background-color: ${palette.mono600} !important;
  }

  &:before {
    background: ${palette.mono400};
  }

  ${props.variant === 'contained' &&
  `
    &:before {
      opacity: 1;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        background: ${palette.mono500};
      }
    }
  `}

  ${props.variant === 'outlined' &&
  `
    border: 1px solid ${palette.mono900};
   
    &:before {
      opacity: 0;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        opacity: 0.6;
      }
    }
  `}
          
  ${props.variant === 'ghost' &&
  `
    &:before {
      background: none;
      opacity: 0.1;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        background: ${palette.mono500};
        opacity: 0.1;
      }
    }
  `}
`

const primaryStyles = (props: Props): Styles => css`
  color: ${palette.primary};

  &:before {
    background: ${palette.primary};
  }

  ${props.variant === 'contained' &&
  `
    color: ${palette.mono100};
    
    .ripple {
      background-color: ${palette.mono100} !important;
    }
  `}

  ${props.variant === 'outlined' &&
  `
     border: 1px solid ${palette.primary};

    &:before {
      opacity: 0;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        opacity: 0.1;
      }
    }
  `}
  
  ${props.variant === 'ghost' &&
  `
    &:before {
      opacity: 0;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        opacity: 0.1;
      }
    }
  `}
`
const secondaryStyles = (props: Props): Styles => css`
  color: ${palette.secondary};

  &:before {
    background: ${palette.secondary};
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  .ripple {
    background-color: ${palette.secondary} !important;
  }

  ${props.variant === 'contained' &&
  `
    color: ${palette.mono100};
    
    .ripple {
      background-color: ${palette.mono100} !important;
    }
  `}

  ${props.variant === 'outlined' &&
  `
     border: 1px solid ${palette.secondary};

    &:before {
      opacity: 0;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        opacity: 0.1;
      }
    }
  `}
  
  ${props.variant === 'ghost' &&
  `
    &:before {
      opacity: 0;
    }
    
    &:not([aria-disabled='true']) {
      &:hover:before {
        opacity: 0.1;
      }
    }
  `}
`

const disabledStyles = (props: Props): Styles => css`
  &[disabled],
  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: auto !important;
    border: 1px solid transparent;
    color: ${palette.mono600};

    &:before {
      background: ${palette.mono500};
      opacity: 1;
    }
  }

  ${props.variant === 'ghost' &&
  `
    &[disabled],
    &[aria-disabled='true'] {
  
      &:before {
        opacity: 0;
      }
    }
  `}
`

const smallSize = (): Styles => css`
  padding: ${spacing(1, 2)};
  font-size: 0.815rem;
`

const mediumSize = (): Styles => css`
  padding: ${spacing(1.5, 4)};
  font-size: 0.875rem;
`

const largeSize = (): Styles => css`
  padding: ${spacing(2, 5)};
  font-size: 0.9375rem;
`
