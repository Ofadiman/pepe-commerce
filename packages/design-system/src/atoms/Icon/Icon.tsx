import { VFC } from 'react'

import { StyledIcon } from './Icon.styles'
import { Props } from './Icon.types'
import { icons } from './icons'

export const Icon: VFC<Props> = ({ name, size, color, iconId = '', ...args }) => {
  const { title, paths: IconPaths, viewBox } = icons[name]

  return (
    <StyledIcon
      aria-labelledby={`${name}-icon-${iconId}`}
      fill={'none'}
      height={size}
      viewBox={viewBox ?? '0 0 20 20'}
      width={size}
      xmlns={'http://www.w3.org/2000/svg'}
      {...args}
    >
      <title id={`${name}-icon-${iconId}`}>{title}</title>
      <IconPaths color={color} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  color: 'currentColor',
  size: '1rem'
}
