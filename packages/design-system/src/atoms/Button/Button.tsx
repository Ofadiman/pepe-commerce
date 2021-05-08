import { FC, forwardRef, useRef } from 'react'

import { mergeRefs } from '../../utils/helpers/mergeRefs'
import { useRipple } from '../../utils/hooks/useRipple'
import * as Styled from './Button.styles'
import { BaseProps, ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, isRippleDisabled, ...args } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useRipple(buttonRef, {
    disabled: isRippleDisabled
  })

  return (
    <Styled.Button ref={mergeRefs([buttonRef, ref])} {...args}>
      {children}
    </Styled.Button>
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

// TODO issue #43
export const DocumentationButton: FC<BaseProps> = (props) => <Button {...props} />
