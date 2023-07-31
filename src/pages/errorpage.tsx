import React from 'react'
import{useRouteError} from "react-router-dom"

const errorpage = () => {
  const error=useRouteError()
  console.log(error)

  return (
    <div className='bg-stone-300 w-full h-screen'>
    <div id='errorpage' >
      <h1>OOPs!</h1>
      <p>
        404-Page <i>{error.statusText || error.message}</i>
      </p>
      <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
    </div>
    </div>
  )
}

export default errorpage