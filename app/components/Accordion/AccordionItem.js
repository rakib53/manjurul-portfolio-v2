import { orangeMinus, orangePlus } from "@/utils/SVG";
import React from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <button
        className="w-full flex flex-col gap-3 justify-between items-start bg-white p-6 rounded-3xl cursor-pointer"
        onClick={onClick}
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-left text-lg leading-7 font-rocGroteskMid text-gray800">
            {title}
          </span>
          <span>{isOpen ? orangeMinus : orangePlus}</span>
        </div>
        {isOpen && <div className="text-gray800 text-left">{content}</div>}
      </button>
    </div>
  );
};

export default AccordionItem;
