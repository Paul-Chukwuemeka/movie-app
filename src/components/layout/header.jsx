"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";
import Link from "next/link";

const Header = () => {
  const { currentPage } = useContext(AppContext);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div
      className={` shrink-0 bg-black/30  text-white flex items-center justify-between shadow-2xl z-50 backdrop-blur-sm  w-full max-w-250 rounded-full fixed top-5 left-1/2 -translate-x-1/2 p-2 px-10`}
    >
      <h1 className="flex font-dynapuff items-center text-nowrap gap-1 w-70  text-xl font-bold">
        RTB {currentPage} 
      </h1>
      <div className="w-1/2 *:p-1 p-3 max-md:hidden flex gap-1 *:text-lg *:font-semibold *:rounded-lg">
        <Link href={"/"} className="cursor-pointer">
          <li
            className={`cursor-pointer list-none c ${
              currentPage == "movies" &&
              "after::block after:content-['']  cursor-pointer after:bg-blue-700 after:h-0.5 after:blur-[2px]  after:w-full after:absolute after:bottom-0 after:left-0  relative"
            }`}
          >
            Movies
          </li>
        </Link>
        <Link href={"/series"} className="cursor-pointer">
          <li
            className={` list-none cursor-pointer ${
              currentPage == "series" &&
              "after::block  cursor-pointer after:content-[''] after:bg-blue-700 after:h-0.5 after:blur-[2px]  after:w-full after:absolute after:bottom-0 after:left-0  relative"
            }`}
          >
            Series
          </li>
        </Link>
      </div>

      <div className="flex gap-2">
        <form className="border-1 p-4 h-10 w-80 flex items-center justify-between rounded-full">
          <input
            type="text"
            placeholder={`Search for ${currentPage}`}
            className={`focus:outline-none max-lg:${
              isSearch ? "border-2" : "w-0"
            } `}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSearch(!isSearch);
            }}
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
