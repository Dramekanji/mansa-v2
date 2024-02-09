import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000");
      } else {
        setColor("#000");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/mansa-nzinga-transparent.png"
              alt="Your Logo"
              width={100}
              height={50}
            />
          </div>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
            <Link href="/Work">Work</Link>
          </li>
          <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
            <Link href="/Gallery">Gallery</Link>
          </li>
          <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
            <Link href="/About">About</Link>
          </li>
          <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: "#FFD700" }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: "#FFD700" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/Work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/Gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/About">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
