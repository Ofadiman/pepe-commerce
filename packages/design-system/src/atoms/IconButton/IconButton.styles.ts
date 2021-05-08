import styled, { css } from 'styled-components'

import { palette } from '../../styles/palette'
import { spacing } from '../../styles/spacing'
import { Styles } from '../../types/Styles'
import { Button } from '../Button'
import { IconButtonProps } from './IconButton.types'

export const StyledIconButton = styled(Button)<IconButtonProps>`
  border-radius: 50%;
  height: min-content;
  width: min-content;
  display: flex;

  &:before,
  &:after {
    border-radius: 50%;
  }

  ${(props) => props.size === 's' && smallSize()}
  ${(props) => props.size === 'm' && mediumSize()}
  ${(props) => props.size === 'l' && largeSize()}
`

const smallSize = (): Styles => css`
  padding: ${spacing(2)};
  font-size: 0.815rem;
`

const mediumSize = (): Styles => css`
  padding: ${spacing(2.5)};
  font-size: 0.875rem;
`

const largeSize = (): Styles => css`
  padding: ${spacing(3.5)};
  font-size: 0.9375rem;
`
