import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${keyword}`);
  };

  return (
    <form className="md:flex hidden items-center" onSubmit={handleSearch}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={handleKeywordChange}
          className="bg-gray-100 px-4 py-1.5 pr-3"
        ></input>
        <button className="absolute right-2.5 bottom-2.5" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
