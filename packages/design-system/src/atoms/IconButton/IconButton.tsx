import { FC, forwardRef, useRef } from 'react'

import { mergeRefs } from '../../utils/helpers/mergeRefs'
import { useRipple } from '../../utils/hooks/useRipple'
import { StyledIconButton } from './IconButton.styles'
import { BaseProps, IconButtonProps } from './IconButton.types'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { children, isRippleDisabled, ...args } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useRipple(buttonRef, {
    disabled: isRippleDisabled
  })

  return (
    <StyledIconButton ref={mergeRefs([buttonRef, ref])} {...args}>
      {children}
    </StyledIconButton>
  )
})

// doc-gen require to set default props like this
IconButton.defaultProps = {
  size: 'm',
  type: 'button',
  variant: 'contained',
  color: 'default',
  isRippleDisabled: false
}

// TODO issue #43
export const DocumentationIconButton: FC<BaseProps> = (props) => <IconButton {...props} />
