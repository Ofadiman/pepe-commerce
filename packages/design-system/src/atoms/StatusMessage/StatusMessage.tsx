import { VFC } from 'react'

import * as Styled from './StatusMessage.styles'
import { Props } from './StatusMessage.types'

export const StatusMessage: VFC<Props> = ({ isVisible, message, size, status, ...args }) => {
  if (!isVisible) {
    return null
  }

  return (
    <Styled.StatusMessage aria-relevant={'all'} role={'alert'} size={size} status={status} {...args}>
      {message}
    </Styled.StatusMessage>
  )
}
