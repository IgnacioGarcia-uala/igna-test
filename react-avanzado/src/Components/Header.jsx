import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
        <h1><Link to={`/`}>ReactAvanzado</Link></h1>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`about`}>About</Link></li>
            <button>Toggle Theme</button>
        </ul>
    </nav>
  )
}
