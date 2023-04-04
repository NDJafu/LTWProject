import React, { useEffect, useState } from "react";
import { FaCog, FaCaretDown, FaCaretUp } from "react-icons/fa";
import axios from "axios";

const OrderItems = ({
  user,
  createdAt,
  subtotal,
  total,
  status,
  orderItems,
  index,
}) => {
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("/api/v1/users/" + user).then(({ data }) => {
      setEmail(data.email);
    });
  }, []);

  const convertDate = (date) => {
    var convert = new Date(date);
    return convert.toDateString();
  };
  return (
    <div>
      <div className="border-2 border-gray-200 px-2 py-4 rounded-lg flex gap-4 shadow">
        <p className="px-2 w-16">#{index + 1}</p>
        <p className="w-60">{email}</p>
        <p className="w-48">{convertDate(createdAt)}</p>
        <p className="w-32">${subtotal}</p>
        <p className="w-32">${total}</p>
        <p className="w-48 uppercase">{status}</p>
        <div className="grow px-2 justify-end flex gap-2">
          <button className="bg-gray-200 p-1.5 rounded">
            <FaCog />
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-gray-200 p-1.5 rounded"
          >
            {toggle ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </div>
      </div>
      {toggle && (
        <div className="px-2 py-4 rounded-b-lg mx-2 bg-[#edeff0]">
          <h3 className="font-bold py-1">This order has:</h3>
          {orderItems &&
            orderItems.map((item) => (
              <div className="p-2 flex box-border divide-x divide-slate-300">
                <img
                  className="w-32"
                  src={"../src/assets/details/" + item.name + "/main.webp"}
                  alt="ok"
                />
                <div className="px-4 w-full">
                  <div className="flex justify-between font-bold">
                    <h4>{item.name}</h4>
                    <p className="pr-8">${item.price * item.amount}</p>
                  </div>
                  <p>SIZE: {item.size}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default OrderItems;
