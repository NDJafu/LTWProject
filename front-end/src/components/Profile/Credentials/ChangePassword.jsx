import axios from "axios";
import React, { useState } from "react";
import ButtonStretch from "../../Buttons/ButtonStretch";
import { HiArrowLongRight } from "react-icons/hi2";

const ChangePassword = ({ visible, onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!visible) return null;

  const handleOnClose = (e) => {
    e.target.id && onClose();
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    axios
      .patch("/api/v1/users/updateUserPassword", {
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
      .then(({ data }) => {
        console.log(data);
        onClose();
      })
      .catch(({ response }) => {
        const { msg } = response.data;
        alert(msg);
      });
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="bg-white border border-black w-1/2 px-8 py-4">
        <h1 className="text-3xl font-bold">EDIT YOUR EMAIL</h1>
        <form onSubmit={handlePasswordUpdate}>
          <input
            type="password"
            placeholder="Enter old password*"
            value={oldPassword}
            className="p-3 my-4 bg-gray-100 w-full"
            onChange={(e) => setOldPassword(e.target.value)}
            required
          ></input>
          <input
            type="password"
            placeholder="Enter new password*"
            value={newPassword}
            className="p-3 my-4 bg-gray-100 w-full"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          ></input>
          <button type="submit" className="w-1/2 invert">
            <ButtonStretch text="SAVE CHANGES" />
          </button>
        </form>
        <button
          className="border border-black p-3 my-2 w-1/2"
          onClick={() => onClose()}
        >
          <div className="flex justify-between items-center">
            <span>CANCEL</span>
            <HiArrowLongRight size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
