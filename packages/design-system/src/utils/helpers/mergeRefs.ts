import * as React from 'react'

export const mergeRefs = <T>(refs: (React.LegacyRef<T> | React.MutableRefObject<T>)[]): React.RefCallback<T> => (
  value
) => {
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(value)
    } else if (ref !== null) {
      ;((ref as unknown) as React.MutableRefObject<T | null>).current = value
    }
  })
}
