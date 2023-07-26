import React from 'react'
import {useGetProductsQuery,useGetProductCategoriesNameQuery, useGetProductsCategoriesQuery} from'../features/productSlice'

import Navbar from './../components/navbar';
import { Link } from 'react-router-dom';

const homepage = () => {
  //const {data:products}=useGetProductsQuery()
  const {data}=useGetProductsCategoriesQuery()
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
    <div className=' flex mt-4 border-2 p-4 justify-around'>
      {data && data.map((item)=>(
         <ul  key={item}>
          <li>
       <Link to={`/category/${item}`} className='text-xl capitalize'>{item}</Link>
       </li>
         </ul>

      ))}
     
       
      
    </div>
    </section>
     
    </div>
      </>
  )
}

export default homepage