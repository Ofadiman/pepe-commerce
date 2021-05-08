import React, { ChangeEvent, FC, useState } from 'react'

import { useField } from '../../utils/hooks/useField'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import { StatusMessage } from '../StatusMessage'
import * as Styled from './Input.styles'
import { Props } from './Input.types'

export const Input: FC<Props> = ({
  type = 'text',
  labelText,
  validator,
  onInputChangeCallback,
  autocomplete = true,
  adornment,
  placeholder,
  required = false,
  hiddenLabel = false
}) => {
  const [inputType, setInputType] = useState(type)

  const [state, handlers] = useField({
    inputValidator: validator
  })

  const { handleInputBlur, handleInputChange, handleInputFocus } = handlers

  const { isFocused, isTouched, isValid, validationError, value } = state

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(event)
    const isValueValid = validator ? validator(event.target.value).success : true

    onInputChangeCallback(event.target.value, event.target.name, isValueValid)
  }

  const handleSwitchType = (): void => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <Styled.Container>
      <Styled.Label htmlFor={labelText} isActive={isFocused || Boolean(value)} isHidden={hiddenLabel}>
        {labelText}
      </Styled.Label>
      <Styled.InputWrapper>
        {adornment && type !== 'password' && adornment.side === 'left' && (
          <Styled.Adornment>{adornment.component}</Styled.Adornment>
        )}
        <Styled.Input
          adornment={adornment?.side}
          aria-required={required}
          autoComplete={autocomplete ? 'on' : 'off'}
          id={labelText}
          isFocused={isFocused}
          name={type}
          onBlur={handleInputBlur}
          onChange={handleChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          type={inputType}
          value={value}
        />
        {adornment && type !== 'password' && adornment.side === 'right' && (
          <Styled.Adornment>{adornment.component}</Styled.Adornment>
        )}

        {type === 'password' && (
          <Styled.Adornment>
            <IconButton onClick={handleSwitchType} size={'s'} variant={'ghost'}>
              <Icon name={inputType === 'password' ? 'eye' : 'eye-crossed'} size={20} />
            </IconButton>
          </Styled.Adornment>
        )}
      </Styled.InputWrapper>

      <StatusMessage message={validationError} show={!isValid && isTouched} size={'s'} status={'error'} />
    </Styled.Container>
  )
}
