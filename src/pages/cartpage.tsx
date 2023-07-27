import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import Navbar from './../components/navbar';
import {RootState} from '../app/store'
import { removeFromCart } from '../features/cartListSlice';

const cartpage = () => {
  const items=useSelector((state:RootState)=>state.cart.items)
  const dispatch=useDispatch()
  console.log(items)
  const handleDelete=(id:number)=>{
    dispatch(removeFromCart(id))
  }
  return (
    <>
    <Navbar/>
    <div className=''>

     
      
      {items.map((item)=>(
        
        <div key={item.id} className='flex border-2'>
          <p>{item.title}</p>
          <p>{item.quantity}</p>
          <p>{item.quantity}</p>
          <button onClick={()=>{handleDelete(item.id)}}>delete</button>
        </div>
      ))}
      
      
    </div>
    </>
  )
}

export default cartpage