"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isExpandMenu, setIsExpandMenu] = useState(false);
  const [whatPage, setWhatPage] = useState("home");
  const pathname = usePathname();
  const showMenuRef = useRef(null);

  useEffect(() => {
    if (pathname === "/") {
      setWhatPage("home");
    } else if (pathname === "/my-story") {
      setWhatPage("my-story");
    }
  }, [pathname]);

  // checking if the user clicks outside to close the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (showMenuRef.current && !showMenuRef.current.contains(event.target)) {
        setIsExpandMenu(false); // Close menu if click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-[1440px] px-6 mx-auto py-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col text-gray800 text-lg leading-7 tracking-[0.305px] font-rocGroteskBold">
          <Link href="/" className="">
            Md Manjurul Islam
          </Link>
        </div>

        <ul className="hidden sm:flex items-center">
          <li
            className={`${
              whatPage === "home"
                ? "bg-white py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }`}
          >
            <Link
              href="/"
              className="text-sm text-[#101828] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
            >
              Home
            </Link>
          </li>
          <li
            className={`${
              whatPage === "my-story"
                ? "bg-white py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }`}
          >
            <Link
              href="my-story"
              className="text-sm text-[#7C7C7C] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
            >
              My story
            </Link>
          </li>
        </ul>

        <div className="hidden sm:flex items-center">
          <a
            href="https://cal.com/manjurul"
            target="_"
            className="flex items-center gap-2"
          >
            <span className="text-[#7C7C7C] font-rocGroteskMid text-sm tracking-[-0.28px]">
              Contact me
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect
                  x="0.494995"
                  y="0.5"
                  width="29.505"
                  height="29.505"
                  rx="14.7525"
                  fill="#00432B"
                />
                <path
                  d="M9.91418 15.2524H20.5809M20.5809 15.2524L16.5809 11.2524M20.5809 15.2524L16.5809 19.2524"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="block sm:hidden cursor-pointer">
          <span onClick={() => setIsExpandMenu(!isExpandMenu)}>
            <svg
              stroke="#000000"
              fill="#000000"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path>
            </svg>
          </span>
        </div>

        <div
          className={`fixed w-full h-auto bg-slate-300 p-5 ${
            isExpandMenu ? "top-0" : "-top-[2000px]"
          } left-0 right-0 z-[1000000000] duration-300 transition-all overflow-hidden`}
          ref={showMenuRef}
        >
          <ul className="flex flex-col items-center gap-[20px]">
            <li
              className={`${
                whatPage === "home"
                  ? "bg-white py-2 px-4 rounded-md"
                  : "py-2 px-4 rounded-md"
              }`}
            >
              <Link
                href="/"
                className="text-sm text-[#101828] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                whatPage === "my-story"
                  ? "bg-white py-2 px-4 rounded-md"
                  : "py-2 px-4 rounded-md"
              }`}
            >
              <Link
                href="my-story"
                className="text-sm text-[#7C7C7C] opacity-85 font-rocGroteskMid tracking-[ 0.56px]"
              >
                My story
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
