import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import {BsBalloonHeart, BsHeartFill, BsSearch} from 'react-icons/bs'
import{GiShoppingCart} from 'react-icons/gi'
import { GoHeartFill } from 'react-icons/go'



const navbar = () => {
  const cartQuantity=useSelector((state:RootState)=>state.cart.cartQuantity)
  
  
  return (
    <> 
    <div className='flex items-center  justify-around h-32 pb-12'>
    <div>
        <ul>
            <li className='text-3xl'>EleShoply</li>
        </ul>
    </div>
    <div>
        <ul className='flex justify-around w-96 items-center '>
            <li className='hover:scale-105'><BsSearch size={25}/></li>
            <Link to='/cartpage' className='flex hover:scale-105'><GiShoppingCart size={30}/><div className='relative bottom-3'>{cartQuantity}</div></Link>
            <Link to='/wishlistpage' className='flex hover:scale-105'><GoHeartFill size={25}/></Link>
            <button className='flex hover:bg-stone-400 hover:border-none border-2 pl-4 pr-4 p-1 rounded-md'>Login</button>
        </ul>
    </div>
    </div>
    </>
   
  )
}

export default navbar