import React from 'react'
import { Link } from "react-router-dom";

export const CountryCard = ({c}) => {

  return (
    <li>
      <Link to={`country/${c?.name?.common}`}>
          <img src={c?.flags?.png} alt={c?.flags?.alt} style={{maxHeight: 200}}/>
          {c?.name?.common}({c?.translations.spa.common})
      </Link>
    </li>
  )
}
