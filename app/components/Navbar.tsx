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
        className={`duration-800 fixed z-50 flex items-center justify-between p-4 transition-all ${
          isScrolled
            ? "left-0 right-0 top-0 bg-icons-bg-color"
            : "left-4 right-4 top-4 rounded-full bg-icons-bg-color-transparent"
        }`}
      >
        <div className="flex items-center">
          <Image
            src="/sample.png"
            alt="Sample Logo"
            className="ml-2 mr-4 hidden cursor-pointer lg:block"
            width={100}
            height={100}
            priority
            onClick={() => router.push("/")}
          />
          <Image
            src="/sample.png"
            alt="Sample Logo"
            className="ml-2 mr-4 cursor-pointer lg:hidden"
            width={70}
            height={70}
            priority
            onClick={() => router.push("/")}
          />
          {/* <h1>タイトルをあれば使う</h1> */}
        </div>
        <h2 className="relative lg:hidden" ref={menuRef}>
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          <Fade in={isMenuOpen}>
            <div className="absolute right-0 top-full mt-4 flex w-32 flex-col items-center rounded-md bg-icons-bg-color shadow-2xl lg:hidden">
              {menuItems.map((menuItem) => (
                <p
                  key={menuItem.name}
                  className="underline-animation w-full cursor-pointer border-b border-icons-light-color py-2 text-center"
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
        <h2 className="ml-10 hidden lg:flex">
          {menuItems.map((menuItem, index) => (
            <p
              key={menuItem.name}
              className={
                index === menuItems.length - 1
                  ? "underline-animation cursor-pointer border-icons-light-color px-4 text-icons-color"
                  : "underline-animation cursor-pointer border-r-4 border-icons-light-color px-4 text-icons-color"
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
