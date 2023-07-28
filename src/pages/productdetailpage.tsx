import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsIDQuery } from '../features/productSlice'
import Navbar from './../components/navbar';

const productdetailpage = () => {
  const{productID}=useParams()
  const {data}=useGetProductsIDQuery(productID)
  console.log(data)
 
  return (
    <>
   <div className='w-full h-auto bg-stone-200'>
    <Navbar/>
      {data ?(
         <div>
      <h1> {data.title}</h1>
      { <img src={data.image}  width='250px' height='250px'/>  }
      <p>{data.description}</p>
      <p>{data.price}</p>
      
      <p>{data.rating?.rate} {data.rating?.count} </p>

      </div>
      ):('')}
    </div>
    </>
  )
}

export default productdetailpage