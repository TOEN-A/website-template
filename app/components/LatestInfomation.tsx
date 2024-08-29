"use client";

import React, { useState } from "react";

const cards = [
  { id: 1, title: "新着情報 1", content: "This is the content of 新着情報 1" },
  { id: 2, title: "新着情報 2", content: "This is the content of 新着情報 2" },
  { id: 3, title: "新着情報 3", content: "This is the content of 新着情報 3" },
  // カードの数を増やす場合はここに追加
];

const LatestInfomation = () => {
  const [activeCard, setActiveCard] = useState(1);

  const getCardPosition = (index: number) => {
    const position = (index - (activeCard - 1) + cards.length) % cards.length;
    return position * 20;
  };

  const getZIndex = (index: number) => {
    const position = getCardPosition(index);
    return cards.length - Math.abs(position / 20);
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      {/* Menu */}
      <div className="col-span-12 p-4 lg:col-span-4 w-full flex justify-center lg:pl-12">
        <ul className="w-11/12 lg:w-full">
          {cards.map((card) => (
            <li key={card.id} className="mb-3">
              <button
                className={`m-1 w-full p-3 text-left ${activeCard === card.id ? "bg-icons-color text-white" : "bg-icons-bg-color-transparent"} flex justify-center rounded-full shadow-md`}
                onClick={() => setActiveCard(card.id)}
              >
                {card.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards */}
      <div className="relative col-span-12 flex h-96 justify-center p-4 lg:col-span-8 ">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute h-full w-5/6 rounded-lg border bg-icons-bg-color p-4 shadow-lg transition-transform duration-500`}
            style={{
              transform: `translate(${getCardPosition(index)}px, ${getCardPosition(index)}px)`,
              zIndex: getZIndex(index),
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestInfomation;
