import { useState, VFC } from 'react'

import * as Styled from './Checkbox.styles'
import { Props } from './Checkbox.types'

export const Checkbox: VFC<Props> = ({ initiallyChecked = false, onCheck, color, label }) => {
  const [isChecked, setChecked] = useState(initiallyChecked)

  const handleCheck = (): void => {
    setChecked((prevChecked) => !prevChecked)
    onCheck(isChecked)
  }

  return (
    <Styled.Wrapper>
      <Styled.Checkbox checked={isChecked} color={color} onChange={handleCheck} />
      {label}
    </Styled.Wrapper>
  )
}

Checkbox.defaultProps = {
  initiallyChecked: false,
  color: 'default'
}
