import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import ButtonStretch from "../Buttons/ButtonStretch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginFormLayout from "../Layout/LoginFormLayout";

const Profile = () => {
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("currentUser");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dim, setDim] = useState(false);
  const [emailForm, setEmailForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/ifaccountexist", { email: email })
      .then(({ data }) => {
        if (!data.exists) {
          setEmailForm(false);
          setRegisterForm(true);
        }
      })
      .catch(() => {
        setEmailForm(false);
        setPasswordForm(true);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/register", { email: email, password: password })
      .then(({ data }) => {
        window.location.reload(false);
        localStorage.setItem("currentUser", JSON.stringify(data.user));
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/login", { email: email, password: password })
      .then(({ data }) => {
        if (data.user === null) {
          alert("Nhập sai mật khẩu!");
        } else {
          window.location.reload(false);
          localStorage.setItem("currentUser", JSON.stringify(data.user));
        }
      });
  };

  function handleProfileClick() {
    setDim(!dim);
    if (passwordForm || registerForm) {
      setEmailForm(false);
    } else {
      setEmailForm(!emailForm);
    }
    setPasswordForm(false);
    setRegisterForm(false);
    setEmail("");
    setPassword("");
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="md:flex hidden items-center hover:cursor-pointer">
        <FaUser
          onClick={
            isLogged ? () => navigate("/my-account") : handleProfileClick
          }
        />
      </div>
      <div
        className={`w-screen h-full fixed top-0 left-0 bg-black/50 z-50 ${
          dim ? "" : "hidden"
        }`}
        onClick={handleProfileClick}
      ></div>
      <LoginFormLayout toggle={emailForm}>
        <h1 className="text-2xl font-bold">YOUR ADICLUB BENEFITS AWAIT!</h1>
        <p className="text-sm py-4">
          Get free shipping, discount vouchers and members only products when
          you’re in adiClub
        </p>
        <h3 className="font-bold">LOGIN OR SIGN UP {"(IT'S FREE)"}</h3>
        <p className="text-sm py-2">
          Enter your email to access or create your account
        </p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Email*"
            value={email}
            className="p-3 my-2 bg-gray-100 w-full"
            onChange={handleEmailChange}
            required
          ></input>
          <button type="submit" className="w-full invert">
            <ButtonStretch text="CONTINUE" />
          </button>
        </form>
      </LoginFormLayout>
      <LoginFormLayout toggle={registerForm}>
        <h1 className="text-2xl font-bold">SIGN UP FOR FREE</h1>
        <p className="text-sm py-4">
          Looks like you are new here. Create a password to set up your adiClub
          account.
        </p>
        <h3 className="font-bold text-md">CREATE PASSWORD</h3>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Password*"
            value={password}
            className="p-3 my-2 bg-gray-100 w-full"
            onChange={handlePasswordChange}
            required
          ></input>
          <button type="submit" className="w-full invert">
            <ButtonStretch text="REGISTER" />
          </button>
        </form>
      </LoginFormLayout>
      <LoginFormLayout toggle={passwordForm}>
        <h1 className="text-2xl font-bold">LOG IN</h1>
        <p className="text-sm py-4">
          Welcome back! Fill in your password to log in
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password*"
            value={password}
            className="p-3 my-2 bg-gray-100 w-full"
            onChange={handlePasswordChange}
            required
          ></input>
          <button type="submit" className="w-full invert">
            <ButtonStretch text="LOG IN" />
          </button>
        </form>
      </LoginFormLayout>
    </>
  );
};

export default Profile;
