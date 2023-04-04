import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCog, FaCaretDown } from "react-icons/fa";
import OrderItems from "./OrderItems";

const Orders = () => {
  const [data, setData] = useState("");

  const { orders, count } = { ...data };

  useEffect(() => {
    axios.get("/api/v1/orders").then(({ data }) => {
      setData(data);
    });
  }, []);
  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">Orders</h1>
      <p className="py-2">{count} orders found</p>
      <div className="py-2">
        {/* <div className="flex justify-between">
          <div className="flex gap-4">
            {["All orders", "Pending", "Failed", "Paid"].map(
              (filter, index) => (
                <button
                  className="bg-slate-700 rounded-md text-xl text-white p-1 px-2 font-bold"
                  key={index}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div> */}
        <div className="p-2 flex flex-col gap-2">
          <div className="bg-gray-200 font-bold p-2 rounded-lg flex gap-4">
            <p className="px-2 w-16">Id</p>
            <p className="w-60">User</p>
            <p className="w-48">Date</p>
            <p className="w-32">Subtotal</p>
            <p className="w-32">Total Price</p>
            <p className="w-48">Status</p>
            <p className="grow px-2 text-right">Action</p>
          </div>
          {orders &&
            orders?.map((order, index) => (
              <OrderItems {...order} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
