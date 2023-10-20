import React from 'react'
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <>
        <h1>Error</h1>
        <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  )
}
