import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function ButtonStretch(btnText) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative mt-4">
      <div className="p-3 border-white border-[1px] font-bold flex items-center w-full">
        <span className="px-2">{btnText.text}</span>
        <HiArrowLongRight size={24} />
      </div>
      <div
        className={`p-3 flex justify-between hover:text-opacity-50 border-white border-[1px] items-center bg-white font-bold text-black absolute w-full duration-500 ${
          clicked ? "top-0 left-0" : "-top-1 -left-1"
        }`}
        onMouseDown={() => setClicked(!clicked)}
        onMouseUp={() => setClicked(!clicked)}
      >
        <span className="px-2">{btnText.text}</span>
        <HiArrowLongRight size={24} />
      </div>
    </div>
  );
}

export default ButtonStretch;
