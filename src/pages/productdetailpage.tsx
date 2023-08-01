import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsIDQuery } from "../features/productSlice";
import Navbar from "./../components/navbar";
import Footer from "../components/footer";

const productdetailpage = () => {
  const { productID } = useParams();
  const { data } = useGetProductsIDQuery(productID);
  console.log(data);

  return (
    <>
      <div className="w-full bg-stone-200">
        <Navbar />
        {data ? (
          <div className="flex items-center flex-col w-[75%] mx-auto bg-white p-8">
            <p className="text-xl font-bold mb-12"> {data.title}</p>
            <div className="grid grid-cols-2">
            <div className=" flex items-center mx-auto">
              
              {<img src={data.image} width="250px"  />}
            </div>
            <div className="flex flex-col">
            <p className="p-2 text-lg"> {data.description}</p>
            <p className="font-bold text-xl font-serif">${data.price}</p>

            <p className="text-lg text-slate-600 font-serif">
              Rating : {data.rating?.rate} 
            </p>
            </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer/>
      </div>
    </>
  );
};

export default productdetailpage;
