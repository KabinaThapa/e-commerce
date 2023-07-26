import React from 'react'
import {useGetProductsQuery,useGetProductCategoriesNameQuery, useGetProductsCategoriesQuery} from'../features/productSlice'

import Navbar from './../components/navbar';
import { Link } from 'react-router-dom';
import img from'../assets/de17b27a-image-1.png'

const homepage = () => {
  //const {data:products}=useGetProductsQuery()
  const {data}=useGetProductsCategoriesQuery()
  console.log(data)
  
  return (
    <>
    
    <div className='bg-stone-300 w-full h-auto'>
    <Navbar/>
      <section className='w-[70%] h-auto bg-stone-50 mx-auto flex'>
        <div className='p-6 w-96 grid grid-rows-3 place-items-center text-lg'>
          <h1 className='text-7xl'>Winter 21'</h1>
          <p>Winter layer season is here. Check out our trendy new winter collection to stay warm in style.</p>
          <button className='border-2 w-full p-2'>Shop Now</button>
        </div>
       
        <img className='relative right-[-8%] ml-auto' src={img} width='450px'/>
        
      </section>
      
    </div>
    <div className='w-full  bg-stone-300 flex'>
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