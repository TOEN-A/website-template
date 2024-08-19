import React from "react";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    "ホーム",
    "お知らせ",
    "メッセージ",
    "ブックマーク",
    "リスト",
    "プロフィール",
    "その他",
  ];
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src="/ak.svg"
          alt="AK Logo"
          className="ml-2 mr-4"
          width={100}
          height={100}
          priority
        />
        <h1>タイトルを入力</h1>
        <h2 className="flex ml-10">
          {menuItems.map((menuItem, index) => {
            return (
              <p
                key={menuItem}
                className={
                  index === menuItems.length - 1
                    ? "px-4 border-icons-light-color cursor-pointer underline-animation"
                    : "px-4 border-r-4 border-icons-light-color cursor-pointer underline-animation"
                }
              >
                {menuItem}
              </p>
            );
          })}
        </h2>
      </div>
      <div className="border-b-2 border-icons-light-color w-5/6 mx-auto"></div>
    </>
  );
};

export default Navbar;
