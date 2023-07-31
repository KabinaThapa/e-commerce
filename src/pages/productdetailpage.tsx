import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsIDQuery } from "../features/productSlice";
import Navbar from "./../components/navbar";

const productdetailpage = () => {
  const { productID } = useParams();
  const { data } = useGetProductsIDQuery(productID);
  console.log(data);

  return (
    <>
      <div className="w-full h-screen bg-stone-200">
        <Navbar />
        {data ? (
          <div className="flex items-center flex-col">
            <p className="text-xl font-bold"> {data.title}</p>
            <p className="p-5">
              {" "}
              {<img src={data.image} width="250px" height="250px" />}
            </p>
            <p className="p-2 text-sm "> {data.description}</p>
            <p className="font-bold text-l">${data.price}</p>

            <p className="text-sm text-slate-600">
              Rating : {data.rating?.rate} {data.rating?.count}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default productdetailpage;
