import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProfileDetail = () => {
  return (
    <>
      <div className="flex justify-center gap-10 border-y border-slate py-4 bg-white sticky top-0">
        <Link to="">FEED</Link>
        <Link>ORDERS</Link>
        <Link to="profile">ACCOUNT</Link>
      </div>
      <Outlet />
    </>
  );
};

export default ProfileDetail;
