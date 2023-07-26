import React from 'react'
import {useGetProductsQuery} from '../features/productSlice'
import { useParams,Link } from 'react-router-dom'

const productlistingpage = () => {
  const{category}=useParams()
  const {data}=useGetProductsQuery(category)
  console.log(data)
  const filterProducts=data? data.filter((item)=>item.category===category):[]
  console.log(filterProducts)
  
  
  return (
    <>
    
    <div className='w-full h-screen bg-stone-200 grid grid-cols-3 gap-4'>
      
      {filterProducts && filterProducts.map((item)=>(
       
        <div className='border-2 bg-white'>
        <ul key={item.id}>
        <Link to={`/products/${item.id}`}>
       <li>{item.title}</li> 

       <li>{<img src={item.image} width='150px' height='150'/>}</li> 
       <li>{item.price}</li> 
       </Link>
       <button>+</button>
       
       </ul>
       </div>

      ))}
    </div>
    </>
  )
}

export default productlistingpage