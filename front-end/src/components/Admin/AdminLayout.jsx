import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../Navbar/AdminNav";

const AdminLayout = () => {
  return (
    <div className="flex justify-between">
      <AdminNav />
      <div className="w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
