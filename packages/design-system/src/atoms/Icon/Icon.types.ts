import { ComponentType } from 'react'

// all possible icon names
type IconName = 'basket'

export type Props = {
  /**
   * By default inherit color from font color
   * TODO consider connecting with theme colors?
   */
  color?: 'currentColor'
  /**
   * Unique id of icon - accessibility reasons
   */
  iconId?: string | number
  /**
   * Name of icon we want to use
   */
  name: IconName
  /**
   * Icon size - any available css size
   */
  size?: string | number
}

export type PathsProps = Omit<Props, 'name'>
export type GetPaths = (name: string) => ComponentType<PathsProps>

type IconType = {
  /**
   * Paths of particular icon
   */
  paths: ComponentType<PathsProps>
  /**
   * Title visible for screen readers
   */
  title: string
  /**
   * Custom viewBox for specific icons
   */
  viewBox?: string
}

export type Icons = Record<IconName, IconType>
