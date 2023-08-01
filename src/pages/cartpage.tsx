import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./../components/navbar";
import { RootState } from "../app/store";
import {
  decrement,
  increment,
  removeFromCart,
} from "../features/cartListSlice";
import { TbShoppingCartX } from "react-icons/tb";
import Footer from "../components/footer";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

const cartpage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );
  const cartAmount = useSelector((state: RootState) => state.cart.cartAmount);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrement(id));
  };

  return (
    <>
      <div className="w-full h-screen overflow-y-auto bg-stone-200">
        <Navbar />
        <div className="text-center">
          {items.length === 0 ? (
            <div className="flex flex-col  mx-auto justify-center items-center text-3xl h-screen border-2 bg-white w-[75%]">
              <p className="p-3"> Your Cart is Empty! </p>
              <TbShoppingCartX size={70} />
            </div>
          ) : (
            <div>
              <div className=" border-2 bg-stone-300 w-[80%] mx-auto mb-5 p-2 text-center font-serif">
              <h1 className="text-4xl mb-4">Your Shopping Cart</h1>
              <p className="text-2xl">Total Items: {cartQuantity}</p></div>
              <table className="w-[80%] mx-auto text-left bg-white mt-6 ">
                <thead>
                  <tr className=" text-lg ">
                    <th className="px-4 py-4">Image</th>
                    <th className="px-4 py-4">Item</th>
                    <th className="px-4 py-4">Quantity</th>
                    <th className="px-4 py-4">Price</th>
                    <th className="px-4 py-4">Total</th>
                    <th className="px-4 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-8 pb-4">
                      <td className=" px-4 py-8 ">
                        <img
                          src={item.image}
                          width="200px"
                          
                          alt={item.title}
                        />
                      </td>
                      <td className=" px-4 py-8">{item.title}</td>
                      <td className=" px-4 py-8">
                        <div className="border-2 flex bg-stone-100 w-44 justify-around  rounded-sm p-1 text-2xl font-serif">
                          <button onClick={() => handleIncrement(item.id)}>
                            +
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => handleDecrement(item.id)}>
                            -
                          </button>
                        </div>
                      </td>
                      <td className=" px-4 py-8 font-serif"> $ {item.price}</td>
                      <td className=" px-4 py-8 font-serif">
                        $ {item.price * item.quantity}
                      </td>
                      <td className=" px-4 py-8">
                        <button onClick={() => handleDelete(item.id)}>
                          <AiOutlineDelete size={25}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

               <div className="w-[80%] bg-white mx-auto p-4 mt-12 text-xl font-semibold">
              <p className="w-full  font-serif ">
                Total Amount: $ {cartAmount}
        
              </p>
              <button className=" mt-6 p-2 w-44 text-2xl border-stone-400  border-2 rounded-md hover:bg-stone-500 hover:border-none hover:text-white">
              Checkout ({cartQuantity})
            </button>
              </div>
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default cartpage;
