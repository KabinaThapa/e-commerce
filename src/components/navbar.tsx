import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className="flex items-center  justify-around h-24">
        <div>
          <ul>
            <li className="text-3xl">EleShoply</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-around w-96">
            <li>search</li>
            <Link to="/cartpage">wishlist</Link>
            <li>shoppingcart</li>
            <li>
              <Link to="/loginpage"> Login </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default navbar;
