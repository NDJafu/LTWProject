import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

function CoverButton(btnText) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative mt-4">
      <div className="p-3 border-white border-[1px] font-bold flex items-center absolute">
        <span className="px-2">{btnText.text}</span>
        <HiArrowLongRight size={24} />
      </div>
      <button
        className={`p-3 flex hover:text-opacity-50 border-white border-[1px] items-center bg-white font-bold text-black absolute duration-500 ${
          clicked ? "top-0 left-0" : "-top-1 -left-1"
        }`}
        onMouseDown={() => setClicked(!clicked)}
        onMouseUp={() => setClicked(!clicked)}
      >
        <span className="px-2">{btnText.text}</span>
        <HiArrowLongRight size={24} />
      </button>
    </div>
  );
}

export default CoverButton;
