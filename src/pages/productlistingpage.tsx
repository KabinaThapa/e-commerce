import React from 'react'
import {useGetProductsQuery} from '../features/productSlice'
import { useParams,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  addToCart } from '../features/cartListSlice'
import Navbar from './../components/navbar';


const productlistingpage = () => {
  const{category}=useParams()
  const {data}=useGetProductsQuery(category)
  console.log(data)
  const filterProducts=data? data.filter((item)=>item.category===category):[]
  console.log(filterProducts)
  const dispatch =useDispatch()
  const handleCart=(item)=>{
    dispatch(addToCart(item))
  }
  
  
  return (
    <>
    <div className='w-full h-auto bg-stone-200'>
    <Navbar/>
    <div  className=' grid grid-cols-3 gap-4'>
      
      
      {filterProducts && filterProducts.map((item)=>(
       
        <div className='border-2 bg-white'>
        <ul key={item.id}>
        <Link to={`/products/${item.id}`}>
       <li>{item.title}</li> 

       <li>{<img src={item.image} width='150px' height='150'/>}</li> 
       <li>{item.price}</li> 
       </Link>
       <button onClick={()=>handleCart(item)} >Add To Cart</button>
       
       </ul>
       </div>

      ))}
    </div>
    </div>
    </>
  )
}

export default productlistingpage