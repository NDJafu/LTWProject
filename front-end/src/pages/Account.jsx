import React from "react";
import { HiOutlineChevronRight as RightPivot } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="bg-gray-200">
      <div className="px-40 py-20 flex gap-20">
        <div className="w-1/5">
          <h1 className="font-bold text-lg">ACCOUNT OVERVIEW</h1>
          <div className="py-4">
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <Link to="profile">Personal Info</Link>
              <RightPivot />
            </div>
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <Link to="address-book">Address Book</Link>
              <RightPivot />
            </div>
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <Link>Preferences</Link>
              <RightPivot />
            </div>
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <Link>Size Profile</Link>
              <RightPivot />
            </div>
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <Link>adiClub pass</Link>
            </div>
            <div className="flex p-3 items-center justify-between bg-white hover:invert hover:font-bold">
              <button>Log out</button>
            </div>
          </div>
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
