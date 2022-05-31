import React, { Fragment } from 'react'
import { useAppContext } from '../../shared'
import styles from './Select.module.css'

const { subTitle, select } = styles;

export const Select= ( ) => {
  const { formData, setFormData,  } = useAppContext() || {}

  /**
   * Use una función setState para setaer la opción elegida por el usuario en un estado
   * del contexto de la app. 
   * Ese estado se utilizará para renderizar los inputs correspondientes 
   */

  
  const onChangeHandler = (e: any) => {
    // Obtenga el valor seleccionado del evento
  }
  
  // Use un estado proveniente del contexto para renderizar las opciones que se deben mostrar en el select

  return (
    <Fragment>
      <h2 className={subTitle}>Elige tu cargo</h2>
      <select
        className={select} 
        name="" 
        id="" 
        onChange={onChangeHandler}
      >
        <option value="Cargo-1">Cargo 1</option>
        <option value="Cargo-2">Cargo 2</option>
        <option value="Cargo-3">Cargo 3</option>
        <option value="Cargo-4">Cargo 4</option>
      </select>
    </Fragment>
  )
}

