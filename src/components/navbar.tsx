import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const navbar = () => {
  const cartQuantity=useSelector((state:RootState)=>state.cart.cartQuantity)
  
  
  return (
    <> 
    <div className='flex items-center  justify-around h-24'>
    <div>
        <ul>
            <li className='text-3xl'>EleShoply</li>
        </ul>
    </div>
    <div>
        <ul className='flex justify-around w-96'>
            <li>search</li>
            <Link to='/cartpage'>shoppingcart {cartQuantity}</Link>
            <Link to='/wishlistpage'>wishlist</Link>
            <li>Login</li>
        </ul>
    </div>
    </div>
    </>
   
  )
}

export default navbar