import React from 'react'
import {useGetProductsQuery} from'../features/apifetchSlice'

const homepage = () => {
  const {data}=useGetProductsQuery()
  console.log(data)
  return (
    <>
    <div className='w-full text-center h-20 bg-slate-400'>Navbar</div>
    <div className='absolute top-[0%] w-20 h-screen bg-slate-400'>sideui</div>
      </>
  )
}

export default homepage