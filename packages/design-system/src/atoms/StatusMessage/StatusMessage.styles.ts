import styled from 'styled-components'

import { color } from '../../styles/palette'
import { typography } from '../../styles/typography'
import { Props } from './StatusMessage.types'

export const StatusMessage = styled.span<Omit<Props, 'message' | 'isVisible'>>`
  display: block;
  color: ${(props) => color(props.status)};
  font-size: ${(props) => getFontSize(props)};
`

const getFontSize = (props: Omit<Props, 'message' | 'isVisible'>): string => {
  switch (props.size) {
    case 's':
      return typography.size.s2
    case 'm':
      return typography.size.s3
    case 'l':
      return typography.size.s4
  }
}
