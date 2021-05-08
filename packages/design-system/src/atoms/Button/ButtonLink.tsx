import Link from 'next/link'
import { forwardRef, useRef } from 'react'

import { mergeRefs } from '../../utils/helpers/mergeRefs'
import { useRipple } from '../../utils/hooks/useRipple'
import * as Styled from './Button.styles'
import { LinkButtonProps } from './Button.types'

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
  const { children, isRippleDisabled, color, variant, size, ...args } = props
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useRipple(buttonRef, {
    disabled: isRippleDisabled
  })

  return (
    <Link {...args}>
      <Styled.ButtonLink color={color} ref={mergeRefs([buttonRef, ref])} size={size} variant={variant}>
        {children}
      </Styled.ButtonLink>
    </Link>
  )
})

// doc-gen require to set default props like this
ButtonLink.defaultProps = {
  size: 'm',
  type: 'button',
  variant: 'contained',
  color: 'default',
  href: '/',
  isRippleDisabled: false
}
