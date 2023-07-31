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
      <div className="bg-stone-300 w-full h-auto">
        <Navbar />
        <section className="w-[75%] h-auto bg-stone-50 mx-auto flex">
          <div className="p-8 w-96 grid grid-rows-3 gap-4 ">
            <h1 className="text-7xl text-slate-900 mt-8">Winter 21'</h1>
            <p className="text-slate-600 mb-6 text-xl ">
              Winter layer season is here. Check out our trendy new winter
              collection to stay warm in style.
            </p>
            <button className=" h-14 border-stone-400 text-sm border-2 hover:bg-stone-500 hover:border-none hover:text-white">
              Shop Now
            </button>
          </div>

          <img
            className="relative right-[-6%] ml-auto mt-5"
            src={img}
            width="450px"
          />
        </section>
      
      <div className="w-full  bg-stone-300 flex">
        <section className="w-[75%] h-auto mx-auto p-8 pb-12 m-12 bg-white">
          <h1 className="text-3xl">Our Category</h1>
          <div className=" flex mt-12 border-2 p-4 justify-around">
            {data &&
              data.map((item) => (
                <ul key={item}>
                  <li>
                    <Link
                      to={`/category/${item}`}
                      className="text-xl capitalize hover:text-stone-500"
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
