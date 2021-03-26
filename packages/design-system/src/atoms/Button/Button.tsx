import React, { FC } from 'react'

type Props = {
  /**
   * Simple click handler
   */
  onClick?: () => void
}

export const Button: FC<Props> = ({ children, onClick = () => {} }) => (
  <button onClick={onClick} type={'button'}>
    {children}
  </button>
)
