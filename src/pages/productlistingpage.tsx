import React from "react";
import { useGetProductsQuery} from "../features/productSlice";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Item, addToCart } from "../features/cartListSlice";
import Navbar from "./../components/navbar";
import { Items, addToWishList } from "../features/wishListSlice";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RootState } from "../app/store";
import Footer from "../components/footer";

const productlistingpage = () => {
  const { category } = useParams();
  const { data } = useGetProductsQuery(category);
  
  console.log(name)
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
      <div className="w-full min-h-full bg-stone-200">
        <Navbar />
        <div className=" border-2 border-stone-500 w-[80%] mx-auto mb-5 p-2 text-center">
        <h1 className="text-4xl capitalize">{category}</h1></div>
        <div className=" grid grid-cols-3 gap-4 p-4 w-[80%] mx-auto bg-stone-400">
          {filterProducts &&
            filterProducts.map((item) => (
              <div className="  bg-white drop-shadow-lg shadow-stone-700 p-4 flex flex-col  text-lg h-full text-right">
                <ul key={item.id}>
                  <button
                   
                    onClick={() => handleSave(item)}
                  >
                    {items.find((items) => items.id === item.id) ? (
                      <GoHeartFill size={28} />
                    ) : (
                      <GoHeart size={28} />
                    )}
                  </button>
                  <Link to={`/products/${item.id}`}>
                    

                    <li className="flex justify-center">
                      <div className=" border-black w-full h-96  flex items-center justify-center">
                      {<img src={item.image} width="200px" className="object-contain" />}
                      </div>
                    </li><li className=" font-semibold text-left">
                      {item.title}
                    </li>
                    <li className=" mb-5 text-left text-2xl font-serif">
                      ${item.price}
                    </li>
                  </Link>                
                </ul>
                <button
                    className=" mt-auto w-full p-2 rounded-md font-semibold border-stone-500  border-2 hover:bg-stone-500 hover:border-none hover:text-white"
                    onClick={() => handleCart(item)}
                  >
                    Add To Cart
                  </button>
              </div>
            ))}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default productlistingpage;
