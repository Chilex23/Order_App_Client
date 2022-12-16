import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp, AiFillHome } from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";
import { MdOutlineLocalDrink, MdDashboardCustomize } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
// BiCategory FiLogIn FiLogOut FiSettings

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
        className={`cursor-pointer flex items-center ${
          currentPage === "/"
            ? "bg-white text-black p-1 rounded-md"
            : "hover:bg-stone-700 p-1 rounded-md"
        }`}
        onClick={() => setCurrentPage("/")}
      >
        <AiFillHome className="mr-2" />
        <span>Home</span>
      </Link>

      <Link
        to="/dashboard"
        className={`cursor-pointer flex items-center ${
          currentPage === "/dashboard"
            ? "bg-white text-black p-1 rounded-md"
            : "hover:bg-stone-700 p-1 rounded-md"
        }`}
        onClick={() => setCurrentPage("/dashboard")}
      >
        <MdDashboardCustomize className="mr-2" />
        <span>Dashboard</span>
      </Link>

      <div
        className="cursor-pointer flex items-center justify-between hover:bg-stone-700 p-1 rounded-md"
        onClick={toggleDropDown}
      >
        <BiCategory className="mr-2" />
        <span> Categories</span>
        {dropDownHiddenState ? (
          <AiFillCaretDown className="ml-2" />
        ) : (
          <AiFillCaretUp className="ml-2" />
        )}
      </div>
      <div
        className={`gap-y-2 ml-4 ${
          dropDownHiddenState ? "hidden" : "flex flex-col"
        }`}
      >
        <Link
          to="/category/Pizzas"
          className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md"
        >
          Pizzas <FaPizzaSlice className="ml-2" />{" "}
        </Link>
        <Link
          to="/category/Drinks"
          className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md"
        >
          Drinks <MdOutlineLocalDrink className="ml-2" />{" "}
        </Link>
        <Link
          to="/category/Snacks"
          className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md"
        >
          Snacks <GiHamburger className="ml-2" />{" "}
        </Link>
      </div>

      <div className="cursor-pointer flex items-center hover:bg-stone-700 p-1 rounded-md">
        <FiLogOut className="mr-2" />
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SideBar;
