import React from 'react'
import { Link } from "react-router-dom";

export const CountryList = () => {
  return (
    <>
      <div>CountryList</div>
      <ul>
        <li><Link to={`country/1`}>1</Link></li>
        <li><Link to={`country/2`}>2</Link></li>
        <li><Link to={`country/3`}>3</Link></li>
      </ul>
    </>
  )
}
