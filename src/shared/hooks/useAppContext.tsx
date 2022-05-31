import { createContext, FC, useContext, useMemo, useState } from 'react';
import { IAppContext, UseAppContext, FormData } from '..';
import { useGetDynamicInputs } from './useGetDynamicInputs';


const AppContext = createContext<null | IAppContext>(null)

export const useAppContext: UseAppContext = () => useContext(AppContext)

export const AppContextProvider: FC = ({ children }) => {
  const { Provider } = AppContext
  const [formData, setFormData] = useState<FormData>(null);
  // Use este hook para obtener los inputs y las opciones del select
  const { fetchSelect } = useGetDynamicInputs();
  console.log(fetchSelect)
  const context = useMemo(() => ({
    formData,
    setFormData,
    fetchSelect
  }), [formData])
  return (
    <Provider value={context} >{children}</Provider>
  )
}
