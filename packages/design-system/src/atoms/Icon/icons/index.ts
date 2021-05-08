import dynamic from 'next/dynamic'

import { GetPaths, Icons, PathsProps } from '../Icon.types'

const getPaths: GetPaths = (name) =>
  dynamic<PathsProps>(async () =>
    import(`./${name}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,promise/prefer-await-to-then,@typescript-eslint/no-unsafe-return
      .then((component) => component[`${name}Icon`])
      .catch(() => {
        throw new Error(`Error while importing icon ${name}`)
      })
  )

export const icons: Icons = {
  basket: {
    paths: getPaths('Basket'),
    title: 'Client basket icon'
  },
  eye: {
    paths: getPaths('Eye'),
    title: 'Eye icon'
  },
  'eye-crossed': {
    paths: getPaths('EyeCrossed'),
    title: 'Crossed eye icon'
  }
}
