import React from 'react'
import {useGetProductsQuery} from '../features/productSlice'
import { useNavigate, useParams,Link } from 'react-router-dom'

const productlistingpage = () => {
  const{category}=useParams()
  const {data}=useGetProductsQuery(category)
  console.log(data)
  const filterProducts=data? data.filter((item)=>item.category===category):[]
  console.log(filterProducts)
  const navigate=useNavigate()
  const handleNavigate=()=>{
 navigate('./productdetailpage')
  }
  return (
    <>
    
    <div className='w-full h-screen bg-stone-200 grid grid-cols-3 gap-4'>
      
      {filterProducts && filterProducts.map((item)=>(
        <Link to={'/productdetailpage'}>
        <div className='border-2 bg-white'>
        <ul key={item.id}>
       <li>{item.title}</li> 
       <li>{<img src={item.image} width='150px' height='150'/>}</li> 
       <li>{item.price}</li> 
       <button>+</button>
       
       </ul>
       </div></Link>

      ))}
    </div>
    </>
  )
}

export default productlistingpage