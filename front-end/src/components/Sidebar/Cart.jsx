import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { total_item } = useCartContext();
  return (
    <Link to={"/cart"} className="flex items-center relative">
      <FaShoppingBag />
      <div
        className={`absolute left-2 bottom-4 bg-yellow-300 px-2 py-1 text-[0.6rem] font-bold rounded-full ${
          total_item === 0 ? `hidden` : ``
        }`}
      >
        {total_item}
      </div>
    </Link>
  );
};

export default Cart;
