import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem("currentUser"));
      if (role === undefined || role === null || role !== "admin") {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    }
  });
  return <div></div>;
};

export default Admin;
