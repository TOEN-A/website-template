"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Fade } from "@mui/material";

const ImageSlider: React.FC<{
  images: {
    src: string;
    alt: string;
  }[];
}> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [animationKey, setAnimationKey] = useState(0); // アニメーションリセット用のキー

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // フェードアウトを開始
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); // フェードインを開始
        setAnimationKey((prevKey) => prevKey + 1); // アニメーションをリセット
      }, 1000); // フェードアウトの時間と一致させる
    }, 10000); // 10秒ごとに画像を切り替え

    return () => clearInterval(interval); // クリーンアップ
  }, [images.length]);

  return (
    <div className="h-[70vh] overflow-hidden lg:h-screen">
      <Fade in={fadeIn} timeout={1000}>
        <div key={animationKey} className="slide-image h-full w-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="h-full w-full object-cover"
            width={1000}
            height={100}
            priority
          />
        </div>
      </Fade>
    </div>
  );
};

export default ImageSlider;
