import { useState,useCallback,useEffect } from 'react'
import { FormData } from '..';
import { Position, Select } from '../models';
export const useGetDynamicInputs = () => {
  const [fetchSelect, setFetchSelect] = useState<FormData>({});
  const [fetchInputs, setFetchInputs] = useState<Array<Select>>([]);
  const cargarProductos = useCallback(
    async() => {
      const categoriasTodas = await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db');
      const data = await categoriasTodas.json();
      const selects:Array<Select> = Object.keys(data).map(function(key, value) {
        return {position:{ value: key, name: data[key].description}}
    });
      setFetchInputs(selects);
      setFetchSelect(data);
 
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
  return {fetchSelect, fetchInputs};
}
