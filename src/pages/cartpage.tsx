import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import Navbar from './../components/navbar';
import {RootState} from '../app/store'
import { decrement, increment, removeFromCart } from '../features/cartListSlice';

const cartpage = () => {
  const items=useSelector((state:RootState)=>state.cart.items)
  const dispatch=useDispatch()
  console.log(items)
  const handleDelete=(id:number)=>{
    dispatch(removeFromCart(id))
  }
  const handleIncrement=(id:number)=>{
    dispatch(increment(id))

  }
  const handleDecrement=(id:number)=>{
    dispatch(decrement(id))
  }
  return (
    <>
    <Navbar/>
    <div className=''>
      {items.length===0 ? (<p>Your Cart is Empty</p>):(    
      <div>
      {items.map((item)=>(
        
        <div key={item.id} className='flex border-2 justify-around'>
          <p>{item.title}</p>
          <button onClick={()=>{handleIncrement(item.id)}}>+</button>
          <p>{item.quantity}</p>
          <button onClick={()=>{handleDecrement(item.id)}}>-</button>
          <p>{item.price}</p>
          <button onClick={()=>{handleDelete(item.id)}}>delete</button>
        </div>
      ))}
      </div>
      )}
      
    
    </div>
    </>
  )
}

export default cartpage