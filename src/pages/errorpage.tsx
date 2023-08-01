import React from 'react'
import{useRouteError} from "react-router-dom"
import Navbar from '../components/navbar'
import '../App.css'
import Footer from '../components/footer'

const errorpage = () => {
  const error=useRouteError()
  console.log(error)

  return (
    
    <div className='bg-stone-300 w-full  '>
    <Navbar/>
    <div id='errorpage' className=' mx-auto w-[75%] text-center flex  flex-col items-center  justify-center bg-white h-screen' >
      <h1 className='word text-8xl font-bold mb-4 '>OOPs!</h1>
      <p className='text-2xl mb-2'>
        404-Page <i>{error.statusText || error.message}</i>
      </p>
      <p className='text-xl'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
    </div>
    <Footer/>
    </div>
  )
}

export default errorpage