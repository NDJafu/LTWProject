import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonStretch from "../components/Buttons/ButtonStretch";
import axios from "axios";
import ReviewAccordion from "../components/Products/Detail/Accordion/ReviewAccordion";
import DescriptionAccordion from "../components/Products/Detail/Accordion/DescriptionAccordion";
import DetailAccordion from "../components/Products/Detail/Accordion/DetailAccordion";
import { AddToCart, AddToCartV2 } from "../components/Buttons/AddToCart";

const ProductDetail = () => {
  const [detail, setDetail] = useState("");
  // const [selected, setSelected] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/v1/products/" + id);
      setDetail(data.product);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  console.log(detail);
  // const handleSelect = (value) => {
  //   setSelected(selected === value ? 0 : value);
  // };

  const { name, price } = { ...detail };

  function ImgGallery() {
    return (
      <div className="grid grid-cols-2 justify-items-center bg-[#edeff0] divide-x divide-y divide-white">
        <img
          className="col-span-2 w-1/2"
          src={`src/assets/details/${name}/main.webp`}
        />
        <img src={`src/assets/details/${name}/second.webp`} />
        <img src={`src/assets/details/${name}/fourth.webp`} />
        <img src={`src/assets/details/${name}/fifth.webp`} />
        <img src={`src/assets/details/${name}/third.webp`} />
      </div>
    );
  }

  // const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11];

  return (
    <div className="flex bg-white">
      {/* Left Side */}
      <div className="w-3/4">
        <ImgGallery />
        <div className="grid justify-items-center py-10">
          <ReviewAccordion />
          <DescriptionAccordion />
          <DetailAccordion />
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/4 border-l border-gray-200">
        <div className="sticky top-0 h-screen">
          <div className="flex justify-between px-10 py-3">
            <p>Women's Originals</p>
            <p>rating & rating given</p>
          </div>
          <div className="px-10">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="font-bold text-lg py-2">${price}</p>
            <p className="py-2">Color/Colors/Colour</p>
            <p className="py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              vulputate lacus.
            </p>
            <h3 className="text-md font-bold py-2">Sizes</h3>
            {/* Version 2.0 */}
            <AddToCartV2 product={detail} />
            {/* Version 1.0
             <div className="grid grid-cols-5 text-center border-t border-l border-slate-700/10">
              {sizes?.map((s) => {
                return (
                  <div
                    className={`hover:invert bg-white box-border border-r border-b border-slate-700/10 px-3 py-2 ${
                      selected === s ? "invert" : ""
                    }`}
                    onClick={() => handleSelect(s)}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
            <AddToCart item={name}>
              <ButtonStretch text={"ADD TO BAG"} />
            </AddToCart> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
