// AccordionItem.js
"use client";
import { useState } from "react";
import { LiaPlusSolid } from "react-icons/lia";

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-quant-black md:w-[55vw]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center custom-heading-para uppercase gap-x-2 py-3 cursor-pointer transition-colors duration-300
    ${isOpen ? "bg-quant-orange text-quant-white" : "bg-white text-quant-black"}
  `}
      >
        <h3 className="ml-3">{title}</h3>
        {isOpen ? (
          <LiaPlusSolid className="text-2xl text-white" />
        ) : (
          <LiaPlusSolid className="text-2xl text-quant-orange" />
        )}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="custom-para font-medium my-8 text-quant-black bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
