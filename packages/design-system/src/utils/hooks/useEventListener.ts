import { RefObject, useEffect, useRef } from 'react'

type EventName = keyof WindowEventMap

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

    const events = Array.isArray(event) ? event : [event]

    events.forEach((eventName) => {
      targetElement.addEventListener(
        eventName,
        eventListener,
        options ?? {
          capture: false,
          passive: true
        }
      )
    })

    return (): void => {
      events.forEach((eventName) => {
        targetElement.removeEventListener(
          eventName,
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
