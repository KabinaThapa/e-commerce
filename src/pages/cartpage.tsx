import React from 'react'
import { useSelector} from 'react-redux'

import Navbar from './../components/navbar';
import {RootState} from '../app/store'

const cartpage = () => {
  const items=useSelector((state:RootState)=>state.cart.items)
  console.log(items)
  return (
    <>
    <Navbar/>
    <div>

     
      
      {items.map((item)=>(
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