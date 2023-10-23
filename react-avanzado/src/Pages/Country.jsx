import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Country = () => {
  const { countryId } = useParams();
  const {body, loading, error} = useFetch(`https://restcountries.com/v3.1/name/${countryId}`);
  
  return (
    <>
    {
      loading? "Cargando..." :
      error != null? `Error ${error}` :
      <div>{body[0].name.common}</div>
    }
    </>
  )
}
