import React from "react";
import {
  useGetProductsQuery,
  useGetProductCategoriesNameQuery,
  useGetProductsCategoriesQuery,
} from "../features/productSlice";

import Navbar from "./../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import img from "../assets/de17b27a-image-1.png";
import App from '../App.css'

const homepage = () => {
  //const {data:products}=useGetProductsQuery()
  const { data } = useGetProductsCategoriesQuery();
  console.log(data);

  return (
    <>
      <div className="bg-stone-200 w-full min-h-full">
        <Navbar />
        <section className="w-[75%] max-h-full bg-stone-50 mx-auto flex">
          <div className="p-12 w-96 flex flex-col text-2xl">
            <h1 className="text-8xl text-slate-900 mb-10 ">Winter 21'</h1>
            <p className="text-slate-600  text-2xl mb-14 ">
              Winter layer season is here. Check out our trendy new winter
              collection to stay warm in style.
            </p>
            <p className="flex items-center mb-8">Price- <p className="font-serif text-3xl"> $117</p></p>
            <button className=" h-14 text-2xl border-stone-400  border-2 rounded-md hover:bg-stone-500 hover:border-none hover:text-white">
              Shop Now
            </button>
          </div>

          <img
            className="relative right-[-6%] ml-auto mt-5"
            src={img}
            width="450px"
          />
        </section>
      
      <div className="w-full  bg-stone-200 flex">
        <section className="w-[75%] h-auto mx-auto p-8 pb-12 m-12 bg-white">
          <h1 className="text-3xl">Our Category</h1>
          <div className=" flex mt-12 border-2 border-stone-400 rounded-md p-4 justify-around">
            {data &&
              data.map((item) => (
                <ul key={item}>
                  <li>
                    <Link
                      to={`/category/${item}`}
                      className="text-2xl capitalize hover:font-semibold"
                    >
                      {item}
                    </Link>
                  </li>
                </ul>
              ))}
          </div>
          
        </section>
        
      </div>
      <Footer/>
      </div>
      
    </>
  );
};

export default homepage;
