import React from 'react'

const navbar = () => {
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
            <li>wishlist</li>
            <li>shoppingcart</li>
            <li>Login</li>
        </ul>
    </div>
    </div>
    </>
   
  )
}

export default navbar