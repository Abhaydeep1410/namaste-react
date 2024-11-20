import React from 'react'
import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const error=useRouteError();
  return (
    <>
    <h2>Oops Something Went Wrong !!</h2>
    <h3>Try again later</h3>
    <h3>{error.status+" " +error.statusText }  </h3>
    </>
  )
}

export default Error;