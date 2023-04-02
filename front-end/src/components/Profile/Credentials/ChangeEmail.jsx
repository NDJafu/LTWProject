import React, { useState, useEffect } from "react";
import ButtonStretch from "../../Buttons/ButtonStretch";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";

const ChangeEmail = ({ visible, onClose }) => {
  const [email, setEmail] = useState(null);
  const { userId } = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    axios.get("/api/v1/users/" + userId).then(({ data }) => {
      setEmail(data.email);
    });
  }, []);

  if (!visible) return null;

  const handleOnClose = (e) => {
    e.target.id && onClose();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/api/v1/users/updateUser", { email: email })
      .then(({ data }) => {
        console.log(data);
        onClose();
      })
      .catch(({ response }) => {
        const { msg } = response.data;
        alert(msg + ", please log out and try login back in");
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
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Email*"
            value={email}
            className="p-3 my-4 bg-gray-100 w-full"
            onChange={(e) => setEmail(e.target.value)}
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

export default ChangeEmail;
