import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";
import { MdOutlineLocalDrink } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
// AiFillCaretLeft
// AiFillCaretRight

const SideBar = () => {
  const [dropDownHiddenState, setDropDownHiddenState] = useState(true);
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname);
  console.log(pathname);
  const toggleDropDown = () => {
    setDropDownHiddenState(!dropDownHiddenState);
    //setCurrentPage("category")
  };
  return (
    <div className="bg-stone-900 uppercase text-white w-[12rem] px-6 pt-6 h-screen fixed flex flex-col gap-y-3">
      <Link
        to="/"
        className={`cursor-pointer ${
          currentPage === "/"
            ? "bg-white text-black p-1 rounded-md"
            : "hover:bg-stone-700 p-1 rounded-md"
        }`}
        onClick={() => setCurrentPage("/")}
      >
        <span>Home</span>
      </Link>

      <Link
        to="/dashboard"
        className={`cursor-pointer ${
          currentPage === "/dashboard"
            ? "bg-white text-black p-1 rounded-md"
            : "hover:bg-stone-700 p-1 rounded-md"
        }`}
        onClick={() => setCurrentPage("/dashboard")}
      >
        <span>Dashboard</span>
      </Link>

      <span
        className="cursor-pointer flex items-center justify-between"
        onClick={toggleDropDown}
      >
        Categories
        {dropDownHiddenState ? (
          <AiFillCaretDown className="ml-2" />
        ) : (
          <AiFillCaretUp className="ml-2" />
        )}
      </span>
      <div
        className={`gap-y-2 ml-4 ${
          dropDownHiddenState ? "hidden" : "flex flex-col"
        }`}
      >
        <span className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md">
          Pizzas <FaPizzaSlice className="ml-2" />{" "}
        </span>
        <span className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md">
          Drinks <MdOutlineLocalDrink className="ml-2" />{" "}
        </span>
        <span className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md">
          Snacks <GiHamburger className="ml-2" />{" "}
        </span>
      </div>

      <span className="cursor-pointer">Login</span>
    </div>
  );
};

export default SideBar;
