import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {Bars,Close} from "../Buttons/ToggleMobile"
import SearchBar from "../Inputs/SearchBar";
import NavLinks from "./NavLinks";
import MobileSearch from "../Buttons/MobileSearch";
import Profile from "../Sidebar/Profile";
import Cart from "../Sidebar/Cart";

const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white z-50">
      <div className="flex items-center font-medium md:justify-around md:px-0 px-4 justify-between">
          <div className="z-50 w-screen md:w-auto justify-between flex items-center border-b-1 border-gray-500">
            <div onClick={()=>setOpen(!open)}>
              {open? <Close/> : <Bars/>}
            </div>
            <Link to="/"><img src={Logo} alt="" className="md:cursor-pointer h-16"/></Link>
            <div>
              <MobileSearch/>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8">
            <li>
              <Link to="/" className="md:cursor-pointer py-7 px-3 inline-block">Home</Link>
            </li>
            <NavLinks />
          </ul>
          <div className="flex gap-4">
            <SearchBar />
            <Profile/>
            <Cart/>
          </div>
          {/*Mobile */}
          <ul className={`md:hidden bg-white uppercase fixed w-full h-full bottom-0 py-24 pl-8 duration-500 ${open? "left-0":"left-[-100%]"}`}>
            <li className="py-3">
              <Link to="/">Home</Link>
            </li>
            <NavLinks />
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;