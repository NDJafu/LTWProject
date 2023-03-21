import React from "react";
import { GrClose } from "react-icons/gr";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, size, price, amount }) => {
  const { removeItem } = useCartContext();
  return (
    <div className="my-8 flex border border-black border-box">
      <img
        className="w-1/3"
        src={"src/assets/details/" + name + "/main.webp"}
      />
      <div className="m-4 relative w-full">
        <div className="w-full">
          <div className="flex justify-between">
            <p>{name}</p>
            <p className="pr-8">${price * amount}</p>
          </div>
          <p>COLOR/COLOR/COLOR</p>
          <p>SIZE: {size}</p>
          <button
            className="absolute right-0 top-0 hover:opacity-50"
            onClick={() => removeItem(id)}
          >
            <GrClose />
          </button>
          <div className="absolute bottom-0 border border-black py-3 px-4 pr-16">
            {amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
