import React from 'react'
import { CountryCard } from '../Components/CountryCard';
import { useFetch } from '../hooks/useFetch';

export const CountryList = () => {
  const { body, loading, error } = useFetch("https://restcountries.com/v3.1/all")

  return (
    <>
    {
      loading? "Cargando..." :
      error != null? `Error ${error}` :
      <ul>
        { body.map(c => <CountryCard c={c} />) }
      </ul>
    }
    </>
  )
}
