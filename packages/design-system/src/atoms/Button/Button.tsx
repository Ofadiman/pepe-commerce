import { FC, forwardRef, useRef } from 'react'

import { mergeRefs } from '../../utils/helpers/mergeRefs'
import { useRipple } from '../../utils/hooks/useRipple'
import { StyledButton } from './Button.styles'
import { BaseProps, ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { children, isRippleDisabled, ...args } = props
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  useRipple(buttonRef, {
    disabled: isRippleDisabled
  })

  return (
    <StyledButton ref={mergeRefs([buttonRef, ref])} {...args}>
      {children}
    </StyledButton>
  )
})

// doc-gen require to set default props like this
Button.defaultProps = {
  size: 'm',
  type: 'button',
  variant: 'contained',
  color: 'default',
  isRippleDisabled: false
}

// TODO typescript doc-gen issue
export const DocumentationButton: FC<BaseProps> = (props) => <Button {...props} />
