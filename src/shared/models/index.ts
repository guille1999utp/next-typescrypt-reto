import { Dispatch, SetStateAction } from 'react'
export * from "./options"

export interface IAppContext {
	formData: FormData
	setFormData: Dispatch<SetStateAction<FormData>>
	fetchSelect: FormData
}

export type FormData = { [key: string]: any } | null

export type UseAppContext = () => IAppContext | null