import React from "react";
import { FaSearch } from "react-icons/fa";
import MobileSearchBar from "../Inputs/MobileSearchBar";

const MobileSearch = () => {
  return(
    <div>
      <button className="md:hidden block" data-dropdown-toggle="dropdown" type="button" data-dropdown-trigger="click">
        <FaSearch size={24}/>
      </button>
    </div>
  )
};

export default MobileSearch
