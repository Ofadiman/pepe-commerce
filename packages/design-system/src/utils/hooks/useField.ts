import { ChangeEvent, useReducer } from 'react'

import { ReducerActionTypes } from '../../types/ReducerActionsTypes'

export type StateType = {
  isFocused: boolean
  isTouched: boolean
  isValid: boolean
  validationError: string
  value: string
}

enum Action {
  BLUR = 'INPUT_BLUR_EVENT',
  CHANGE = 'INPUT_CHANGE_EVENT',
  ERROR = 'INPUT_ERROR_EVENT',
  FOCUS = 'INPUT_FOCUS_EVENT',
  TOUCH = 'INPUT_TOUCH_EVENT'
}

export type ActionsPayload = {
  [Action.BLUR]: undefined
  [Action.ERROR]: { isValid: boolean; message?: string }
  [Action.CHANGE]: string
  [Action.FOCUS]: undefined
  [Action.TOUCH]: undefined
}

type ActionType = ReducerActionTypes<ActionsPayload>

const initialDefaultState: StateType = {
  value: '',
  isFocused: false,
  isTouched: false,
  isValid: false,
  validationError: ''
}

const fieldReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case Action.CHANGE:
      return { ...state, value: action.payload }

    case Action.FOCUS:
      return { ...state, isFocused: true }

    case Action.BLUR:
      return { ...state, isFocused: false }

    case Action.TOUCH:
      return { ...state, isTouched: true }

    case Action.ERROR:
      return {
        ...state,
        isValid: action.payload.isValid,
        validationError: action.payload.message ?? ''
      }

    default:
      throw new Error(`There is no handler for selected action!`)
  }
}

export type UseFieldValidatorType = (inputValue: string) => { message: string; success: boolean }

type UseFieldArgumentType = {
  initialState?: Partial<StateType>
  inputValidator?: UseFieldValidatorType
}

type UseFieldType = (
  arg: UseFieldArgumentType
) => [
  StateType,
  {
    handleInputBlur: () => void
    handleInputChange: (event: ChangeEvent<HTMLInputElement> | string) => void
    handleInputFocus: () => void
  }
]

export const useField: UseFieldType = ({ inputValidator, initialState } = {}) => {
  const [state, dispatch] = useReducer(fieldReducer, { ...initialDefaultState, ...initialState })

  const handleValidate = (value: string): void => {
    if (inputValidator) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { success, message } = inputValidator(value)

      dispatch({
        type: Action.ERROR,
        payload: {
          isValid: success,
          message: success ? '' : message
        }
      })

      return
    }

    dispatch({ type: Action.ERROR, payload: { isValid: true } })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | string): void => {
    // eslint-disable-next-line no-negated-condition
    const value = typeof event !== 'string' ? event.target.value : event

    dispatch({ type: Action.CHANGE, payload: value })
    handleValidate(value)
  }

  const handleInputFocus = (): void => {
    dispatch({ type: Action.FOCUS })
  }

  const handleInputBlur = (): void => {
    dispatch({ type: Action.BLUR })

    handleValidate(state.value)
  }

  return [
    state,
    {
      handleInputBlur,
      handleInputChange,
      handleInputFocus
    }
  ]
}
