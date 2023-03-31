import React from "react";
import axios from "axios";

const TempLogOut = () => {
  const { role } = JSON.parse(localStorage.getItem("currentUser"));
  function handleLogOut() {
    localStorage.removeItem("currentUser");
    axios.get("/api/v1/auth/logout").then(({ data }) => {
      alert(data.msg);
      window.location.reload(false);
    });
  }
  return (
    <div className="flex mx-2 gap-2 font-bold">
      <div>Hello {role}!</div>
      <button className="bg-white hover:invert" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default TempLogOut;
