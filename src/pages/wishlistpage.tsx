import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addToWishList, removeFromWishList } from "../features/wishListSlice";

const wishlistpage = () => {
  const item = useSelector((state: RootState) => state.wishlist.item);
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <>
      <div className="p-12 text-4xl"> Wishlist </div>
      <div className="flex flex-col p-12">
        {item.map((item) => (
          <div>
            <div className="w-54 h-54 ">
              {<img src={item.image} width="50px" height="50px" />}
            </div>

            <p className="text-base font-medium"> {item.title}</p>

            <p className="text-base font-medium"> {item.price}</p>
            <button
              className="p-1 mt-3 border-2 border-slate-500 hover:text-red-600 mb-8"
              onClick={() => {
                handleRemove(item.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default wishlistpage;
