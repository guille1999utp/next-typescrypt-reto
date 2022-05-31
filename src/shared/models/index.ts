import { Dispatch, SetStateAction } from 'react'
import { Select } from './options'
export * from "./options"
export interface IAppContext {
	formData: FormData
	setFormData: Dispatch<SetStateAction<FormData>>
	fetchSelect: FormData
	fetchInputs:Array<Select>
	optionsSelec: FormData
	setInputs: Dispatch<SetStateAction<FormData>>
	inputs : FormData
}

export type FormData = { [key: string]: any } 

export type UseAppContext = () => IAppContext | null