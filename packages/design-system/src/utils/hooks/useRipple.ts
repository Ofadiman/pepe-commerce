import { MutableRefObject, RefObject, useEffect } from 'react'

import { palette } from '../../styles/palette'

const ANIMATION_LENGTH = 800
const RIPPLE_SIZE = 300
const RIPPLE_COLOR = palette.primary

if (typeof document !== 'undefined') {
  const rippleAnimation = document.createElement('style')

  rippleAnimation.innerHTML = `
    @keyframes use-ripple-animation {
      from {
        opacity: 0.15;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(10);
      }
    }
    `

  // eslint-disable-next-line unicorn/prefer-node-append
  document.querySelector('head')?.appendChild(rippleAnimation)
}

export type RippleOptions = {
  animationLength?: number
  disabled?: boolean
  excludedRefs?: RefObject<HTMLElement>[]
  rippleColor?: string
  rippleSize?: number
}

type RippleEvent = {
  clientX?: number
  clientY?: number
  target: EventTarget | null
}

const defaultEvent: Required<RippleEvent> = {
  clientX: 0,
  clientY: 0,
  // eslint-disable-next-line unicorn/no-unused-properties
  target: null
}

const createRipple = (element: HTMLElement, options?: RippleOptions) => (event?: RippleEvent): void => {
  const isExcluded = (options?.excludedRefs ?? []).some(
    (ref) =>
      (Boolean(ref.current) && ref.current?.contains(event?.target as Node)) ||
      ref.current?.isSameNode(event?.target as Node)
  )

  if (isExcluded) {
    return
  }

  const clientX = event?.clientX ?? defaultEvent.clientX
  const clientY = event?.clientY ?? defaultEvent.clientY

  const { height, width, top, left } = element.getBoundingClientRect()
  const x = clientX - left
  const y = clientY - top

  const rippleSize = Math.min(height, width, options?.rippleSize ?? RIPPLE_SIZE)

  const positionTop = clientX ? y - rippleSize / 2 : rippleSize / 2 - height / 2
  const positionLeft = clientY ? x - rippleSize / 2 : width / 2 - rippleSize / 2

  const span = document.createElement('span')

  span.className = 'ripple'

  span.style.cssText = `
    top: ${positionTop}px;
    left: ${positionLeft}px;
    position: absolute;
    border-radius: 50%;
    background-color: ${options?.rippleColor ?? RIPPLE_COLOR};
    opacity: 1;
    pointer-events: none;
    width: ${rippleSize}px;
    height: ${rippleSize}px;
    animation: use-ripple-animation ${options?.animationLength ?? ANIMATION_LENGTH}ms ease-in;
  `

  element.append(span)

  span.addEventListener('animationend', () => {
    span.remove()
  })
}

export const useRipple = <T extends HTMLElement>(
  ref: MutableRefObject<T> | RefObject<T>,
  options?: RippleOptions
): void => {
  useEffect(() => {
    if (options?.disabled || !ref.current) {
      return
    }

    const element = ref.current
    const elementPosition = getComputedStyle(element).getPropertyValue('position')

    element.style.position = elementPosition === 'static' || !elementPosition ? 'relative' : elementPosition
    element.style.overflow = 'hidden'

    const ripple = createRipple(element, options)

    const keyboardRipple = (event: KeyboardEvent): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        ripple()
      }
    }

    element.addEventListener('mousedown', ripple)
    element.addEventListener('keydown', keyboardRipple)

    return () => {
      element.removeEventListener('mousedown', ripple)
      element.removeEventListener('keydown', keyboardRipple)
    }
  })
}
