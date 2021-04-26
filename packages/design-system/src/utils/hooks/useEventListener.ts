import { RefObject, useEffect, useRef } from 'react'

type EventName = keyof HTMLElementEventMap

export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  event: EventName | EventName[],
  handler: Function,
  options?: AddEventListenerOptions,
  element?: RefObject<T>
): void => {
  const savedHandlerRef = useRef<Function | null>(null)

  useEffect(() => {
    const targetElement: T | Window = element?.current ?? window

    if (!('addEventListener' in targetElement)) {
      return
    }

    if (savedHandlerRef.current !== handler) {
      savedHandlerRef.current = handler
    }

    const eventListener = (event: Event): void => {
      // @ts-expect-error
      savedHandlerRef.current(event)
    }

    if (!Array.isArray(event)) {
      targetElement.addEventListener(
        event,
        eventListener,
        options ?? {
          capture: false,
          passive: true
        }
      )

      return (): void => {
        targetElement.removeEventListener(event, eventListener)
      }
    }

    event.forEach((evt) => {
      targetElement.addEventListener(
        evt,
        eventListener,
        options ?? {
          capture: false,
          passive: true
        }
      )
    })

    return (): void => {
      event.forEach((evt) => {
        targetElement.removeEventListener(
          evt,
          eventListener,
          options ?? {
            capture: false,
            passive: true
          }
        )
      })
    }
  }, [event, element, handler, options])
}
