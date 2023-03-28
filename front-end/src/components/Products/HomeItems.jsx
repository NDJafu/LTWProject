import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeItems = () => {
  const [products, setProducts] = useState("");
  // *before promise
  // useEffect(() => {
  //   const fetchdata = async () =>{
  //     const data = await axios.get('/api')
  //     setProducts(data);
  //   }
  //   fetchdata()
  // }, [])
  // *after promise
  useEffect(() => {
    axios.get("/api").then((data) => {
      setProducts(data);
    });
  }, []);
  function getImageURL(id) {
    return "src/assets/img/" + id + ".webp";
  }

  return (
    <div className="px-60 py-8">
      <h1 className="uppercase text-3xl">featured products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8">
        {products &&
          products?.data.map((product) => (
            <Link
              to={`/detail?id=` + product._id}
              className="w-full hover:border-black box-border border-transparent border bg-white shrink duration-300 ease-in-out"
            >
              <img src={getImageURL(product._id)} alt="product image" />
              <div className="px-5 py-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-800">
                    {product.productName}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomeItems;
