import React, { FC } from 'react'
import { useAppContext } from '../../shared/hooks/useAppContext';
import styles from './Input.module.css'

type InputProps = {
  type: string
  id: string
  placeholder?: string
  label: string
}

const { input__label, input } = styles

export const Input: FC<InputProps> = ({ id, label, type, placeholder }) => {
  const { setFormData } = useAppContext() || {}

  const onBlurHandler = (e: any) => {
    // Use setFormData para agregar el valor del input en AppContext
  }

  return (
    <div>
      <label htmlFor={id} className={input__label}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onBlur={onBlurHandler}
        className={input}
      />
    </div>
  )
}
