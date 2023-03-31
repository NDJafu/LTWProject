import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const [products, setProducts] = useState("");
  const [found, setFound] = useState(true);
  const [sort, setSort] = useState("0");

  useEffect(() => {
    axios
      .get("/api/v1/products/?name=" + query)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function getImageURL(id) {
    return "src/assets/img/" + id + ".webp";
  }

  const handleSelectChange = (event) => {
    setSort(event.target.value);
    console.log(sort);
  };

  const sortedData = [...products].sort((a, b) => {
    switch (sort) {
      case "0":
        return a.productName.localeCompare(b.productName);
      case "1":
        return b.price - a.price;
      case "2":
        return a.price - b.price;
    }
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  console.log(sortedData);

  return (
    <div className="px-20 py-8">
      <div className="flex gap-1 text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        /
        <Link to={location} className="hover:underline font-bold">
          Search
        </Link>
      </div>
      {found ? (
        <>
          <div className="flex justify-between items-center py-2 border-y border-gray-200">
            <h1 className="text-3xl font-bold">
              Search Results for "{query.toUpperCase()}"
            </h1>
            {/* Select Box */}
            <select
              value={sort}
              onChange={handleSelectChange}
              className="py-2 text-center"
            >
              <option value="0" disabled hidden>
                SORT BY
              </option>
              <option value="1">Price {"(high - low)"}</option>
              <option value="2">Price {"(low - high)"}</option>
              <option value="top">Top Sellers</option>
            </select>
          </div>
          {/* Search Result Data */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 py-8">
            {sortedData &&
              sortedData.map((product) => (
                <Link
                  to={`/detail?id=` + product._id}
                  className="w-full hover:border-black box-border border-transparent border bg-white shrink duration-300 ease-in-out"
                >
                  <img src={getImageURL(product._id)} alt="product image" />
                  <div className="px-5 py-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-800">
                        {product.name}
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
        </>
      ) : (
        <h1 className="text-3xl font-bold h-screen">
          OOPS - NO RESULTS FOR "{query.toUpperCase()}"
        </h1>
      )}
    </div>
  );
};

export default SearchResult;
