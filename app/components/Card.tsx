"use client";

import React, { useState, useEffect } from "react";

const Card: React.FC<{
  title: string;
  description: string;
  src: string;
  alt: string;
}> = ({ title, description, src, alt }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkIfTouchDevice();
    window.addEventListener('resize', checkIfTouchDevice);
    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isTouchDevice) return;
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setMousePosition({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: `perspective(1000px) rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
    transition: "transform 0.2s ease-out",
  };

  return (
    <div
      className="relative col-span-6 m-2 rounded-lg bg-icons-bg-color-transparent p-4 shadow-lg lg:col-span-3 lg:m-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isTouchDevice ? {} : cardStyle}
    >
      <img src={src} alt={alt} className="h-32 w-full object-cover" />
      <div className="mt-4">
        <h2>{title}</h2>
        <p className="mb-16 mt-2">{description}</p>
      </div>
      <button className="absolute bottom-4 rounded bg-icons-color px-4 py-2 text-white">詳細</button>
    </div>
  );
};

export default Card;