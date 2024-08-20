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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between fixed p-4 z-50 transition-all duration-800 ${
          isScrolled
            ? "top-0 left-0 right-0 bg-icons-bg-color"
            : "top-4 left-4 right-4 bg-icons-bg-color-transparent rounded-full"
        }`}
      >
        <div className="flex items-center">
          <Image
            src="/sample.png"
            alt="Sample Logo"
            className="ml-2 mr-4 hidden lg:block cursor-pointer"
            width={100}
            height={100}
            priority
            onClick={() => router.push("/")}
          />
          <Image
            src="/sample.png"
            alt="Sample Logo"
            className="ml-2 mr-4 lg:hidden cursor-pointer"
            width={70}
            height={70}
            priority
            onClick={() => router.push("/")}
          />
          {/* <h1>タイトルをあれば使う</h1> */}
        </div>
        <h2 className="lg:hidden relative" ref={menuRef}>
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          <Fade in={isMenuOpen}>
            <div className="absolute top-full right-0 w-32 bg-icons-bg-color shadow-2xl lg:hidden flex flex-col items-center mt-4 rounded-md">
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
        <h2 className="hidden lg:flex ml-10">
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
    </>
  );
};

export default Navbar;
