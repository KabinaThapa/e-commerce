import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './../components/navbar';
import { RootState } from '../app/store';
import { decrement, increment, removeFromCart } from '../features/cartListSlice';
import { TbShoppingCartX } from 'react-icons/tb';

const cartpage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
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
      <div className='w-full h-auto bg-stone-200'>
        <Navbar />
        <div className='text-center'>
          {items.length === 0 ? (
            <div className='flex flex-col mx-auto justify-center items-center text-3xl h-screen border-2 bg-white w-[75%]'>
              Your Cart is Empty! <TbShoppingCartX size={50} />
            </div>
          ) : (
            <div className='text-center'>
              <h1 className='text-4xl mb-4'>Your Shopping Cart</h1>
              <p className='2xl'>Total Items: {cartQuantity}</p>
              <table className='w-[90%] mx-auto text-center bg-white mt-6'>
                <thead >
                  <tr className='mb-12'>
                    <th className='px-4 py-2'>Image</th>
                    <th className='px-4 py-2'>Item</th>
                    <th className='px-4 py-2'>Quantity</th>
                    <th className='px-4 py-2'>Price</th>
                    <th className='px-4 py-2'>Total</th>
                    <th className='px-4 py-2'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className=' px-4 py-2'>
                        <img src={item.image} width='250px' height='200px' alt={item.title} />
                      </td>
                      <td className=' px-4 py-2'>{item.title}</td>
                      <td className=' px-4 py-2'>
                        <div className='border-2 flex bg-stone-100 w-44 justify-around text-xl rounded-sm p-2'>
                          <button onClick={() => handleIncrement(item.id)}>+</button>
                          <p>{item.quantity}</p>
                          <button onClick={() => handleDecrement(item.id)}>-</button>
                        </div>
                      </td>
                      <td className=' px-4 py-2'>{item.price}</td>
                      <td className=' px-4 py-2'>{item.price * item.quantity}</td>
                      <td className=' px-4 py-2'>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
              <p className='w-full'>Total Amount: {cartAmount}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default cartpage;
