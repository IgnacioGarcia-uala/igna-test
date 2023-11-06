import React, { useEffect, useState } from 'react'
import { CountryCard } from '../Components/CountryCard';
import { useFetch } from '../hooks/useFetch';

export const CountryList = () => {
  const { body, loading, error } = useFetch("https://restcountries.com/v3.1/all")
  const [inpState, setInpState] = useState("")
  const [listState, setListState] = useState([])

  const onInputChange = ({ target }) => {
    setInpState(target.value)
  }

  useEffect(() => {
    if (!loading && body) {
      if (inpState.length === 0) setListState(body)
      else if (inpState.length >= 2) {
        setListState(body.filter(e => e?.name?.common.toLowerCase().includes(inpState.toLowerCase())))
      }
    }
  }, [inpState, body, loading])
  
  return (
    <>
      <label htmlFor="filtro">Busqueda por nombre:</label>
      <input type='text' name='filtro' value={inpState} onChange={onInputChange}/>
    {
      loading? "Cargando..." :
      error != null? `Error ${error}` :
      <ul>
        { listState.map(c => <CountryCard c={c} />) }
      </ul>
    }
    </>
  )
}
