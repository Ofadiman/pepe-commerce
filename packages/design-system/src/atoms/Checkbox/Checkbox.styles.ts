import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import styled from 'styled-components'

import { color } from '../../styles/palette'
import { spacing } from '../../styles/spacing'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = styled(ReakitCheckbox)<CheckboxProps>`
  appearance: none;
  border: 2px solid ${color('mono900', 0.2)};
  border-radius: ${spacing(1)};
  outline: none;
  cursor: pointer;
  width: ${spacing(4)};
  height: ${spacing(4)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${spacing(2)};
  align-self: flex-start;
  flex-shrink: 0;

  &:after {
    content: '✓';
    display: none;
    color: white;
    font-size: 0.75em;
  }

  &:checked {
    background-color: ${(props) => getCheckboxColor(props)};
    border: 2px solid transparent;

    &:after {
      display: block;
    }
  }
`

const getCheckboxColor = (props: CheckboxProps): string => {
  switch (props.color) {
    case 'primary':
      return color('primary')
    case 'secondary':
      return color('secondary')
    default:
      return color('mono700')
  }
}

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`
