import { createContext, FC, useContext, useMemo, useState } from 'react';
import { IAppContext, UseAppContext, FormData } from '..';
import { useGetDynamicInputs } from './useGetDynamicInputs';


const AppContext = createContext<null | IAppContext>(null)

export const useAppContext: UseAppContext = () => useContext(AppContext)

export const AppContextProvider: FC = ({ children }) => {
  const { Provider } = AppContext
  const [formData, setFormData] = useState<FormData>({});
  const [inputs, setInputs] = useState<FormData>([]);

  // Use este hook para obtener los inputs y las opciones del select
  const { fetchSelect,fetchInputs } = useGetDynamicInputs();
  console.log(fetchSelect)

  const optionsSelec = (option:string) : FormData => {
    let res = (fetchSelect.option as any);
    if(res == undefined){
    res = {"data-needed": []};
    }
    return res;
  }

  const context ={
    formData,
    setFormData,
    fetchSelect,
    fetchInputs,
    optionsSelec,
    setInputs,
    inputs
  }
  return (
    <Provider value={context} >{children}</Provider>
  )
}
