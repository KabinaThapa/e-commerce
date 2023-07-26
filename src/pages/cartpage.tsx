import React from 'react'
import { useSelector} from 'react-redux'
import { RootState } from '../app/store'
import Navbar from './../components/navbar';

const cartpage = () => {
  const cartItems=useSelector((state:RootState)=>state.cart.cartItem)
  console.log(cartItems)
  return (
    <>
    <Navbar/>
    <div>

     
      
      {cartItems?.map((item)=>(
        <li key={item.id}>
          <p>{item.title}</p>
          <p></p>
        </li>
      ))}
      
      
    </div>
    </>
  )
}

export default cartpage