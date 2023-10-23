import React from 'react'
import { Link } from "react-router-dom";

export const CountryCard = ({c}) => {

  return (
    <li>
      <Link to={`country/${c?.name?.common}`}>
          {c?.name?.common}
      </Link>
    </li>
  )
}
