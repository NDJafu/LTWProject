import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const PersonalInfo = () => {
  return (
    <div className="px-3 py-4 bg-white">
      <h1 className="text-3xl font-bold">MY DETAILS</h1>
      <p className="py-4">
        Feel free to edit any of your details below so your account is up to
        date.
      </p>
      <h1 className="text-3xl font-bold py-3">DETAILS</h1>
      <p className="text-lg py-1">NAME</p>
      <p className="text-lg py-1">DATE OF BIRTH</p>
      <p className="text-lg py-1">GENDER</p>
      <button className="underline font-bold py-2">EDIT</button>
      <h1 className="text-3xl font-bold">LOGIN DETAILS</h1>
      <h3 className="text-lg font-bold py-2">EMAIL</h3>
      <p className="text-lg py-1">insert email here</p>
      <button className="underline font-bold py-2">EDIT</button>
      <h3 className="text-lg font-bold py-2">PASSWORD</h3>
      <p className="text-lg py-1">password here</p>
      <button className="underline font-bold py-2">EDIT</button>
      <h3 className="text-lg font-bold py-2">MANAGE ACCOUNT</h3>
      <button className="p-3 mb-20 border border-black flex items-center w-1/2 justify-between">
        <p className="font-bold">DELETE ACCOUNT</p>
        <HiArrowLongRight />
      </button>
    </div>
  );
};

export default PersonalInfo;
