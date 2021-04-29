import styled from 'styled-components'

import { Props } from './Icon.types'

export const StyledIcon = styled.svg<Omit<Props, 'name'>>`
  path {
    transition: 0.3s ease-in-out fill;
  },
`
