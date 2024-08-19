"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import { useRouter } from "next/navigation";
import { Fade } from "@mui/material";

const menuItems = [
  { name: "ホーム", path: "/" },
  { name: "お知らせ", path: "/notifications" },
  { name: "メッセージ", path: "/messages" },
  { name: "ブックマーク", path: "/bookmarks" },
  { name: "リスト", path: "/lists" },
  { name: "プロフィール", path: "/profile" },
  { name: "その他", path: "/more" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center md:justify-center justify-between relative">
        <div className="flex items-center">
          <Image
            src="/ak.svg"
            alt="AK Logo"
            className="ml-2 mr-4 hidden md:block"
            width={100}
            height={100}
            priority
          />
          <Image
            src="/ak.svg"
            alt="AK Logo"
            className="ml-2 mr-4 md:hidden"
            width={70}
            height={70}
            priority
          />
          <h1>タイトルを入力</h1>
        </div>
        <h2 className="md:hidden relative" ref={menuRef}>
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          <Fade in={isMenuOpen}>
            <div className="absolute top-full right-0 w-32 bg-white shadow-md md:hidden flex flex-col items-center mt-4">
              {menuItems.map((menuItem) => (
                <p
                  key={menuItem.name}
                  className="py-2 border-b border-icons-light-color w-full text-center cursor-pointer underline-animation"
                  onClick={() => {
                    router.push(menuItem.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {menuItem.name}
                </p>
              ))}
            </div>
          </Fade>
        </h2>
        <h2 className="hidden md:flex ml-10">
          {menuItems.map((menuItem, index) => (
            <p
              key={menuItem.name}
              className={
                index === menuItems.length - 1
                  ? "px-4 border-icons-light-color cursor-pointer underline-animation"
                  : "px-4 border-r-4 border-icons-light-color cursor-pointer underline-animation"
              }
              onClick={() => router.push(menuItem.path)}
            >
              {menuItem.name}
            </p>
          ))}
        </h2>
      </div>
      <div className="border-b-2 border-icons-light-color w-full mx-auto"></div>
    </>
  );
};

export default Navbar;
