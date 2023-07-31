import React from "react";
import { useGetProductsQuery } from "../features/productSlice";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Item, addToCart } from "../features/cartListSlice";
import Navbar from "./../components/navbar";
import { Items, addToWishList } from "../features/wishListSlice";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RootState } from "../app/store";

const productlistingpage = () => {
  const { category } = useParams();
  const { data } = useGetProductsQuery(category);
  console.log(data);
  const filterProducts = data
    ? data.filter((item) => item.category === category)
    : [];
  console.log(filterProducts);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.wishlist.item);
  const handleCart = (item: Item) => {
    dispatch(addToCart(item));
  };
  const handleSave = (item: Items) => {
    dispatch(addToWishList(item));
  };

  return (
    <>
      <div className="w-full min-h-full bg-stone-200 p-1">
        <Navbar />
        <div className=" grid grid-cols-3 gap-4 p-2 m-6 w-[75%] mx-auto border-2 border-black">
          {filterProducts &&
            filterProducts.map((item) => (
              <div className=" border-2 bg-blue-500 p-2 flex justify-center">
                <ul key={item.id}>
                  <button
                    className="relative left-[90%] mb-5"
                    onClick={() => handleSave(item)}
                  >
                    {items.find((items) => items.id === item.id) ? (
                      <GoHeartFill size={28} />
                    ) : (
                      <GoHeart size={28} />
                    )}
                  </button>
                  <Link to={`/products/${item.id}`}>
                    

                    <li className="flex justify-center items-center mb-5">
                      {<img src={item.image} width="150px" height="150px" />}
                    </li><li className="text-lg font-semibold">
                      {item.title}
                    </li>
                    <li className=" text-lg font-medium mb-5">
                      ${item.price}
                    </li>
                  </Link>
                  <button
                    className="relative bottom-[-1%] pl-5 pr-5 p-1 border-stone-500 text-sm border-2 hover:bg-stone-500 hover:border-none hover:text-white"
                    onClick={() => handleCart(item)}
                  >
                    Add To Cart
                  </button>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default productlistingpage;
