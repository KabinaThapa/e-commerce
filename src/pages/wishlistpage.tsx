import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addToWishList, removeFromWishList , Items} from "../features/wishListSlice";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TbShoppingCart } from "react-icons/tb";
import { addToCart } from "../features/cartListSlice";

const wishlistpage = () => {
  const item = useSelector((state: RootState) => state.wishlist.item);
  const dispatch = useDispatch();
  
  const handleCart = (item: Items) => {
    dispatch( addToCart(item));
  }
  const handleRemove = (id: number) => {
    dispatch(removeFromWishList(id));
  }
  return (
    <>
     <div className="w-full h-auto bg-stone-200">
      <Navbar/>
      <div className=" border-2 bg-stone-300 w-[80%] mx-auto mb-5 p-2 text-center font-serif">
        <h1 className="text-4xl capitalize">Your WishList</h1></div>
      {item.length===0 ? (
      <div className="flex flex-col mx-auto justify-center items-center text-3xl h-screen border-2 bg-white w-[75%]">
              <p className="p-3"> Your WishList is Empty! </p>
              <TbShoppingCart size={70} />
            </div>
      ):(
      <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto bg-stone-300 text-xl p-4">
        {item.map((item) => (
          <div className="bg-white p-4 h-full flex flex-col">
            <button className="hover:text-red-500 hover:font-bold text-2xl text-right"  onClick={()=>{handleRemove(item.id)}}>X</button>
            <div className="w-44 h-96 flex items-center mx-auto">
              {<img src={item.image} width="100%" className="object-contain" />}
            </div>

            <p className="mb-1 text-left"> {item.title}</p>

            <p className="font-serif mb-6 text-left">$ {item.price}</p>
            <button
                    className=" mt-auto w-full p-2 rounded-md font-semibold border-stone-500  border-2 hover:bg-stone-500 hover:border-none hover:text-white"
                    onClick={() => handleCart(item)}
                  >
                    Add To Cart
                  </button>
            
          </div>
          
          
        ))}
        
      
      </div>
      )}
      <Footer/>
      </div>
    </>
  );
};

export default wishlistpage;
