import { FC, forwardRef, MutableRefObject, useRef } from 'react'
// according to https://reakit.io/docs/get-started/#server-side-rendering
import { Provider } from 'reakit'

import { mergeRefs } from '../../utils/helpers/mergeRefs'
import { useRipple } from '../../utils/hooks/useRipple'
import { StyledButton } from './Button.styles'
import { Props, StorybookProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, type, href, isRippleDisabled, ...args } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useRipple(buttonRef, {
    disabled: isRippleDisabled
  })

  return (
    <Provider>
      <StyledButton as={href ? 'a' : 'button'} ref={mergeRefs([buttonRef, ref])} {...args}>
        {children}
      </StyledButton>
    </Provider>
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
export const DocumentationButton: FC<StorybookProps> = (props) => <Button {...props} />
