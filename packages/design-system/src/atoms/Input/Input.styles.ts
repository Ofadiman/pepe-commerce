import { Input as ReakitInput } from 'reakit/Input'
import styled from 'styled-components'

import { color } from '../../styles/palette'
import { spacing } from '../../styles/spacing'
import { InputLabelProps, InputProps } from './Input.types'

export const Input = styled(ReakitInput)<InputProps>`
  background-color: transparent;
  border: none;
  font-size: 1em;
  outline: none;
  width: 100%;
  display: block;
  color: inherit;
  line-height: 20px;
  padding: ${(props) => {
    switch (props.adornment) {
      case 'left':
        return spacing(2, 4, 2, 2)
      case 'right':
        return spacing(2, 2, 2, 4)
      default:
        return spacing(2, 4)
    }
  }};
  &:-webkit-autofill {
    webkitboxshadow: 0 0 0px 1000px transparent inset !important;
    webkittextfillcolor: inherit !important;
  }
`

export const Label = styled.label<InputLabelProps>`
  display: block;
  font-size: 1em;
  margin-left: ${spacing(4)};
  cursor: pointer;
  color: inherit;

  ${(props) =>
    props.isHidden &&
    `
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
  `}
`

export const Wrapper = styled.div`
  height: min-content;
  position: relative;
  color: inherit;
  width: auto;
  padding: ${spacing(6, 0)};
}
`

export const InputWrapper = styled.div`
  background-color: ${color('mono300')};
  border-radius: ${spacing(4)};
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Adornment = styled.span`
  min-width: ${spacing(9)};
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`
