import React from 'react'
import { Input } from '..'
import { useAppContext } from '../../shared'
import styles from './DynamicInputs.module.css'

const { dynamicInputsContainer } = styles

export const DynamicInputs = () => {
  const {  } = useAppContext() || {}
  // Obtenga la lista de inputs que se debe renderizar dependiendo de la opción elegida en el select
  // La lista debe ser la que se obtuvo del request realizado en el hook useGetDynamicInputs
  
  // Renderice los inputs 
  return (
    <div className={dynamicInputsContainer}>
      <Input type='text' id='1' placeholder='' label='Custom input' />
      <Input type='text' id='2' placeholder='' label='Custom input' />
      <Input type='text' id='3' placeholder='' label='Custom input' />
      <Input type='text' id='4' placeholder='' label='Custom input' />
    </div>
  )
}
