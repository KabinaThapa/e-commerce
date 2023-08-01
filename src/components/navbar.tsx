import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { BsBalloonHeart, BsHeartFill, BsSearch } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";

const navbar = () => {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );

  return (
    <>
      <div className="flex items-center  justify-around h-32 p-12 text-xl">
        <div>
          <ul>
            <li className="text-4xl font-serif">EleShoply.</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-around w-96 items-center ">
            <li className="hover:scale-105">
              <BsSearch size={25} />
            </li>
            <Link to="/cartpage" className="flex hover:scale-105">
              <GiShoppingCart size={30} />
              <div className="relative bottom-3">{cartQuantity}</div>
            </Link>
            <Link to="/wishlistpage" className="flex hover:scale-105">
              <GoHeartFill size={25} />
            </Link>
            <Link to="/loginpage">
              {" "}
              <button className="flex hover:bg-stone-500 hover:border-none hover:text-white border-2 border-stone-400  pl-5 pr-5 p-1 rounded-md">
                Login
              </button>{" "}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default navbar;
