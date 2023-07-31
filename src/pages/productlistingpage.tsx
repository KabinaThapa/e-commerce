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
      <div className="w-full h-auto bg-stone-200">
        <Navbar />
        <div className=" grid grid-cols-3 gap-4 p-2 m-6">
          {filterProducts &&
            filterProducts.map((item) => (
              <div className=" border-2 bg-white pl-5 pb-6 flex justify-center ">
                <ul key={item.id}>
                  <button
                    className="relative right-[-85%] p-2"
                    onClick={() => handleSave(item)}
                  >
                    {items.find((items) => items.id === item.id) ? (
                      <GoHeartFill size={30} />
                    ) : (
                      <GoHeart size={30} />
                    )}
                  </button>
                  <Link to={`/products/${item.id}`}>
                    <li className="text-l font-semibold pl-2 pr-2">
                      {item.title}
                    </li>

                    <li className="w-96 h-96 flex justify-center items-center ">
                      {<img src={item.image} width="150px" height="150px" />}
                    </li>
                    <li className=" text-base font-medium pb-3 pl-1">
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
