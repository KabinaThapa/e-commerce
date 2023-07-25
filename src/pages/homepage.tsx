import React from 'react'
import {useGetProductsQuery} from'../features/productSlice'
import Navbar from './../components/navbar';

const homepage = () => {
  const {data}=useGetProductsQuery()
  console.log(data)
  return (
    <>
    
    <div className='bg-stone-300 w-full h-screen'>
    <Navbar/>
      <section className='w-[70%] h-[80%] bg-stone-50 mx-auto'></section>
      
    </div>
    <div className='w-full h-screen bg-stone-300'>
    <section className='w-[70%] h-[90%] mx-auto pt-2'>
    <h1 className='text-3xl'>Our Category</h1>
    <div className='mt-4 border-2 p-4'>
      <ul className='flex justify-around'>
        <li><div>Category1</div></li>
        <li><div>Category2</div></li>
        <li><div>Category3</div></li>
        <li><div>Category4</div></li>
      </ul>
    </div>
    </section>
     
    </div>
      </>
  )
}

export default homepage