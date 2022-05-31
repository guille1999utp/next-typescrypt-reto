import { DynamicInputs, Select } from '..'
import styles from './Form.module.css'

const { formTitle, formContainer, formButton } = styles

export const Form = () => {

  return (
    <form className={formContainer}>
      <h1 className={formTitle}>FORMULARIO DE ACTUALIZACIÓN DE DATOS</h1>
      <Select />
      <DynamicInputs />
      <button className={formButton} type='submit'>Actualizar</button>
    </form>
  )
}
