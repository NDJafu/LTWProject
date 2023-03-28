import React from "react";
import { HiPlus } from "react-icons/hi2";

const AddressBook = () => {
  return (
    <div className="px-8 py-4 bg-white">
      <h1 className="text-3xl font-bold">ADDRESS BOOK</h1>
      <p className="py-4">You have *insert slots here* remaining.</p>
      <div className="grid grid-cols-2">
        <button className="border border-slate p-4 flex gap-32 flex-col">
          <p className="text-left">New Address</p>
          <HiPlus size={32} />
        </button>
      </div>
    </div>
  );
};

export default AddressBook;
