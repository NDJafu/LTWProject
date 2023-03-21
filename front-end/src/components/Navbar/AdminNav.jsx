import React from "react";
import { FaHome, FaPen, FaTasks, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="w-1/6 bg-slate-800 h-screen sticky top-0 text-white">
      <div className="p-8 shadow shadow-gray-700">
        <h1 className="text-2xl font-bold">Welcome Admin!</h1>
      </div>
      <div className="text-lg">
        <NavLink to="" className="flex items-center gap-3 p-3">
          <FaHome />
          Dashboard
        </NavLink>
        <NavLink to="posts" className="flex items-center gap-3 p-3">
          <FaPen />
          Posts/News
        </NavLink>
        <NavLink to="products" className="flex items-center gap-3 p-3">
          <FaThList />
          Products
        </NavLink>
        <NavLink to="orders" className="flex items-center gap-3 p-3">
          <FaTasks />
          Orders
        </NavLink>
        <NavLink className="flex items-center gap-3 p-3"></NavLink>
      </div>
    </div>
  );
};

export default AdminNav;
