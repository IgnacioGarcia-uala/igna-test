import React, { useEffect, useState, useReducer } from 'react'
import { CountryCard } from '../Components/CountryCard';
import { useFetch } from '../hooks/useFetch';

const langs = require('../data/languages.json');
const regions = require('../data/regions.json');

function reducer(state, {type, filter, body}) {
  if (!filter || filter.length === 0) return body
  if (type === "name") {
      if (filter.length >= 2) {
        return body.filter(el => 
          el?.name?.common?.toLowerCase().includes(filter.toLowerCase()) || 
          el?.translations?.spa?.common?.toLowerCase().includes(filter.toLowerCase())
        )
      } else return body
  } else if (type === "region") {
      return body.filter(el => el?.region === filter)
  } else if (type === "lang") {
    return body.filter(el => {
      return el?.languages ? 
      Object.values(el?.languages)?.includes(filter)
      : false
    })
  } else if (type === "population") {
    return body.filter(el => el?.population >= parseInt(filter))
  } else if (type === "area") {
    return body.filter(el => el?.area >= parseInt(filter))
  } else {
    return body
  }
}

export const CountryList = () => {

  const { body, loading, error } = useFetch("https://restcountries.com/v3.1/all")
  const [inpState, setInpState] = useState("")
  const [selected, setSelected] = useState("name")
  const [listState, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    if (!loading && body) {
      dispatch({type: selected, filter: inpState, body})
    }
  }, [inpState, body, loading, selected])
  
  return (
    <>
      <select name="filterSelect" onChange={(e) => {setSelected(e.target.value); setInpState("")}}>
        <option value="name">Nombre</option>
        <option value="region">Continente</option>
        <option value="lang">Idioma</option>
        <option value="population">Poblacion Minima</option>
        <option value="area">Area Minima</option>
      </select>

    {
      selected === "region" ?
      <select name="regionSelect" onChange={(e) => {setInpState(e.target.value)}}>
        { Object.keys(regions).map(r => <option key={r} value={r}>{regions[r]}</option>) }
      </select>
      : selected === "lang" ?
      <>
        <input type='text' list="langList" name='langSelector' value={inpState} onChange={(e) => {setInpState(e.target.value)}}/>
        <datalist id="langList" >
          { Object.keys(langs).map(l => <option key={l} value={langs[l]}/>) }
        </datalist> 
      </>
      : <input type='text' name='filtro' value={inpState} onChange={(e) => setInpState(e.target.value)}/>
    }
    {
      loading? "Cargando..." :
      error != null? `Error ${error}` :
      <ul>
        { listState.map(c => <CountryCard c={c} key={c?.name?.common}/>) }
      </ul>
    }
    </>
  )
}
