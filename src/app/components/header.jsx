import React from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";
import Link from "next/link";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <div
      className={` shrink-0 text-white flex items-center shadow-2xl z-50 backdrop-blur-sm  w-full max-w-250 rounded-full fixed top-5 left-1/2 -translate-x-1/2 p-2 px-10`}
    >
      <h1 className="flex items-center gap-1 w-70  text-xl font-bold">
        RTB Movies <MdMovie className="text-amber-500" />
      </h1>
      <div className="w-full p-4 flex gap-2 *:cursor-pointer *:text-lg *:font-semibold *:border *:p-[3px_10px] *:rounded-lg">
        <Link href={"/"}>
          <button className=" cursor-pointer">Movies</button>
        </Link>
        <Link href={"/series"}>
          <button className="cursor-pointer">Series</button>
        </Link>
      </div>

      <div className="flex gap-2">
        <form className="border-1 p-2 h-10 w-80 flex items-center justify-between rounded-lg">
          <input
            type="text"
            placeholder="Search for movies or series"
            className={`focus:outline-none  flex-1`}
          />
          <button>
            <FaSearch />
          </button>
        </form>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="text-xl cursor-pointer"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
