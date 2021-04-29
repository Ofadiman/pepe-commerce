import { VFC } from 'react'

import { Props } from '../Icon.types'

export const BasketIcon: VFC<Pick<Props, 'color'>> = ({ color }) => (
  <path
    d={
      'M12.805 2.865L15.48 7.5h2.852v1.667h-.972l-.631 7.569a.833.833 0 01-.83.764H4.1a.833.833 0 01-.83-.764l-.632-7.57h-.971V7.5h2.851l2.677-4.635 1.443.833L6.443 7.5h7.113l-2.194-3.802 1.443-.833zm2.883 6.302H4.311l.556 6.666h10.265l.556-6.666zm-4.855 1.666v3.334H9.166v-3.334h1.667zm-3.333 0v3.334H5.833v-3.334H7.5zm6.666 0v3.334H12.5v-3.334h1.666z'
    }
    fill={color}
  />
)
