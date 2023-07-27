import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { addToWishList, removeFromWishList } from '../features/wishListSlice'

const wishlistpage = () => {
  const item = useSelector((state:RootState)=>state.wishlist.item)
  const dispatch=useDispatch()
  const handleRemove=(id:number)=>{
    dispatch(removeFromWishList(id))
  }
  
  return (
    <>
    <div>wishlistpage
      {item.map((item)=>(
        <div>
          <button onClick={()=>{handleRemove(item.id)}}>Remove</button>
          {item.title}
          {item.price}
          </div>
      ))}

    </div>
    </>
  )
}

export default wishlistpage