"use client";

import React, { useState } from "react";

const HamburgerButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => {
  return (
    <button className="group relative flex h-10 w-10 flex-col items-center justify-center" onClick={onClick}>
      <div
        className={`mb-1 h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-1.5 rotate-45 transform" : ""
        }`}
      ></div>
      <div
        className={`mb-1 h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
      ></div>
      <div
        className={`h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-y-1.5 -rotate-45 transform" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamburgerButton;
