import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem("currentUser"));
      if (role === undefined || role === null || role !== "admin") {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    }
  });
  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <p className="p-2">Where do you wanna go?</p>
      <div className="grid grid-cols-2 p-2 w-1/2 gap-4">
        <div className="border border-black rounded p-2 h-40 relative">
          <h1 className="text-xl font-bold">Main Page</h1>
          <p>The store front-page, the beauty</p>
          <button
            onClick={() => navigate("/")}
            className="bg-slate-700 text-white rounded px-8 py-1 font-bold absolute bottom-2 right-2"
          >
            Go
          </button>
        </div>
        <div className="border border-black rounded p-2 h-40 relative">
          <h1 className="text-xl font-bold">Products</h1>
          <p>Manage all products</p>
          <button
            onClick={() => navigate("products")}
            className="bg-slate-700 text-white rounded px-8 py-1 font-bold absolute bottom-2 right-2"
          >
            Go
          </button>
        </div>
        <div className="border border-black rounded p-2 h-40 relative">
          <h1 className="text-xl font-bold">Orders</h1>
          <p>Manage all orders</p>
          <button
            onClick={() => navigate("orders")}
            className="bg-slate-700 text-white rounded px-8 py-1 font-bold absolute bottom-2 right-2"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
