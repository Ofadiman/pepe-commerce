import { ReactElement } from 'react'

import { BaseProps as ButtonBaseProps, ButtonProps } from '../Button/Button.types'
import { Props } from '../Icon/Icon.types'

type IconComponentChild = ReactElement<Props> | 'It has to be an Icon component instance'

export type BaseProps = Omit<ButtonBaseProps, 'children'> & {
  children: IconComponentChild
}

export type IconButtonProps = Omit<ButtonProps, 'children'> & {
  /**
   * This has to be only an Icon component instance.
   */
  children: IconComponentChild
}
