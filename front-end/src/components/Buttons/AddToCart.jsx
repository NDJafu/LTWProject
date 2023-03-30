import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ButtonStretch from "./ButtonStretch";

const AddToCart = (props) => {
  function handleAddToCart(e) {
    e.preventDefault();
    var itemList = localStorage.getItem("itemList");
    var cart = [];
    if (!itemList) {
      itemList = "";
    } else {
      cart = itemList.split(",");
    }
    if (cart.indexOf(props.item) == -1) {
      cart.push(props.item);
      alert("Mua hang thanh cong");
    }
    localStorage.setItem("itemList", cart.join(","));
  }

  return (
    <div onClick={handleAddToCart} className="invert">
      {props.children}
    </div>
  );
};

const AddToCartV2 = ({ product }) => {
  const { addToCart } = useCartContext();

  const { _id, sizes } = product;

  const [size, setSize] = useState(sizes?.[0]);

  const handleSelect = (value) => {
    setSize(size === value ? size : value);
  };

  return (
    <>
      <div className="grid grid-cols-5 text-center border-t border-l border-slate-700/10">
        {sizes?.map((s) => {
          return (
            <div
              className={`hover:invert bg-white box-border border-r border-b border-slate-700/10 px-3 py-2 ${
                size === s ? "invert font-bold" : ""
              }`}
              onClick={() => handleSelect(s)}
            >
              {s}
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          if (size) {
            addToCart(_id, size, 1, product);
            alert("Added to cart sucessfully!");
          } else {
            alert("Please pick a size!");
          }
        }}
        className="invert"
      >
        <ButtonStretch text={"ADD TO BAG"} />
      </div>
    </>
  );
};

export { AddToCart, AddToCartV2 };
