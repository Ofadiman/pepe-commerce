import { VFC } from 'react'

import { StyledStatusMessage } from './StatusMessage.styles'
import { Props } from './StatusMessage.types'

export const StatusMessage: VFC<Props> = ({ show, message, size, status, ...args }) => {
  if (!show) {
    return null
  }

  return (
    <StyledStatusMessage aria-relevant={'all'} role={'alert'} size={size} status={status} {...args}>
      {message}
    </StyledStatusMessage>
  )
}
