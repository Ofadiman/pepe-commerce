import styled, { css } from 'styled-components'

import { spacing } from '../../styles/spacing'
import { Styles } from '../../types/Styles'
import { Button } from '../Button'
import { IconButtonProps } from './IconButton.types'

export const IconButton = styled(Button)<IconButtonProps>`
  border-radius: 50%;
  height: min-content;
  width: min-content;
  display: flex;

  ${(props) => props.size === 's' && smallSize()}
  ${(props) => props.size === 'm' && mediumSize()}
  ${(props) => props.size === 'l' && largeSize()}
`

const smallSize = (): Styles => css`
  padding: ${spacing(1.5)};
  font-size: 0.875rem;
`

const mediumSize = (): Styles => css`
  padding: ${spacing(2)};
  font-size: 1rem;
`

const largeSize = (): Styles => css`
  padding: ${spacing(3)};
  font-size: 1.125rem;
`
