import { Sizes } from '../../types/Size'
import { StatusType } from '../../types/Status'

export type Props = {
  isVisible: boolean
  message: string
  size: Sizes
  status: StatusType
}
