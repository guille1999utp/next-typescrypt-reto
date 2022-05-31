import React, { Fragment,useState } from 'react'
import { useAppContext } from '../../shared'
import styles from './Select.module.css'

const { subTitle, select } = styles;

export const Select= ( ) => {
  const { formData, setFormData, fetchSelect,fetchInputs,optionsSelec, setInputs} = useAppContext() || {}
  const [option, setOption] = useState<string>("");
  console.log(fetchInputs)
  /**
   * Use una función setState para setaer la opción elegida por el usuario en un estado
   * del contexto de la app. 
   * Ese estado se utilizará para renderizar los inputs correspondientes 
   */

  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.currentTarget.value);
  }
  
  // Use un estado proveniente del contexto para renderizar las opciones que se deben mostrar en el select
  const renderSelect = (optionsSelec(option));
  setInputs(renderSelect);
 // areggkar ayb
  return (
    <Fragment>
      <h2 className={subTitle}>Elige tu cargo</h2>
      <select
        className={select} 
        name="" 
        id="" 
        onChange={onChangeHandler}
      >
        {
          fetchInputs?.map((data) => <option value={data.position.value}>{data.position.name}</option>)
        }
      </select>
    </Fragment>
  )
}

