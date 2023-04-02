import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";
import ChangeEmail from "./Credentials/ChangeEmail";

const PersonalInfo = () => {
  const [info, setInfo] = useState(null);
  const [changeEmail, setChangeEmail] = useState(false);
  const { userId } = JSON.parse(localStorage.getItem("currentUser"));

  const handleOnClose = () => setChangeEmail(false);

  const loadData = () => {
    axios.get("/api/v1/users/" + userId).then(({ data }) => {
      setInfo(data);
      console.log(data);
    });
  };

  useEffect(() => {
    loadData();
  }, [changeEmail]);

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
      <p className="text-lg py-1 uppercase">{info?.email}</p>
      <button
        className="underline font-bold py-2"
        onClick={() => setChangeEmail(true)}
      >
        EDIT
      </button>
      <h3 className="text-lg font-bold py-2">PASSWORD</h3>
      <button className="underline font-bold py-2">EDIT</button>
      <h3 className="text-lg font-bold py-2">MANAGE ACCOUNT</h3>
      <button className="p-3 mb-20 border border-black flex items-center w-1/2 justify-between">
        <p className="font-bold">DELETE ACCOUNT</p>
        <HiArrowLongRight />
      </button>
      <ChangeEmail visible={changeEmail} onClose={handleOnClose} />
    </div>
  );
};

export default PersonalInfo;
