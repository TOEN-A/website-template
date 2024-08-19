"use client";

import React, { useState } from "react";

const HamburgerButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="relative w-10 h-10 flex flex-col justify-center items-center group"
      onClick={onClick}
    >
      <div
        className={`bg-black h-0.5 w-6 mb-1 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform rotate-45 translate-y-1.5" : ""
        }`}
      ></div>
      <div
        className={`bg-black h-0.5 w-6 mb-1 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`bg-black h-0.5 w-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamburgerButton;
