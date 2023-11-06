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
      <div>
        <h2>{body[0].name.common}({body[0].translations.spa.common})</h2>
        
        <img src={body[0].flags?.png} alt={body[0].flags.alt} style={{maxHeight: 200}}/>
        <img src={body[0].coatOfArms?.png} alt="escudo de armas" style={{maxHeight: 200}}/>

        <p>Capital/es:</p>
        <ul>
          {body[0].capital.map(e => <li>{e}</li> )}
        </ul>

        <p>Region: {body[0].region}</p>
        <p>Sub-region: {body[0].subregion}</p>
        <p>Limitrofe con</p>
        <ul>
          {body[0].borders.map(e => <li>{e}</li>)}
        </ul>

        <p>Area Ocupada: {body[0].area.toLocaleString()}</p>
        <p>Poblacion: {body[0].population.toLocaleString()}</p>


        <p>Idioma/s</p>
        <ul>
          {Object.keys(body[0].languages).map(k => <li>{body[0].languages[k]}</li>)}
        </ul>
      </div>
    }
    </>
  )
}
