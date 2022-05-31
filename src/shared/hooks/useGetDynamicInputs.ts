import { useState,useCallback,useEffect } from 'react'
import { FormData } from '..';
import { Select } from '../models';
export const useGetDynamicInputs = () => {
  const [fetchSelect, setFetchSelect] = useState<Array<Select>>([]);
  const cargarProductos = useCallback(
    async() => {
      const categoriasTodas = await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db');
      const data= await categoriasTodas.json();
      let sele: Array<Select> = [];
      Object.entries(data).forEach(entry => {
        const [key, value] = entry;
        sele.push({[key]:value})
      });
      setFetchSelect(sele);
 
    }, [],
  );

  useEffect(() => {
    cargarProductos();
  }, [cargarProductos])

  /**
   * Este hook se encargará de traer la data para renderizar los inputs dinámicos 
   * y las opciones que se mostrarán en el select.
   * La data obtenida se deberá cargar en el contexto de la aplicación por lo tanto
   * debe implementar este hook en el useAppContext.
   */
  return {fetchSelect};
}
