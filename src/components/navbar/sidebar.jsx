import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp, AiFillHome } from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";
import { MdOutlineLocalDrink, MdDashboardCustomize } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { selectUser } from "../../redux/features/user";

const SideBar = () => {
  const [dropDownHiddenState, setDropDownHiddenState] = useState(true);
  const currentUser = useSelector(selectUser);
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname);
  console.log(pathname);
  const toggleDropDown = () => {
    setDropDownHiddenState(!dropDownHiddenState);
    //setCurrentPage("category")
  };
  const navLinks = [
    {
      name: "Home",
      urlPath: "/",
      icon: <AiFillHome className="mr-2" />,
    },
    {
      name: "Dashboard",
      urlPath: "/dashboard",
      icon: <MdDashboardCustomize className="mr-2" />,
    },
  ];

  const categoryLinks = [
    {
      name: "Pizzas",
      urlPath: "/category/Pizzas",
      icon: <FaPizzaSlice className="ml-2" />,
    },
    {
      name: "Drinks",
      urlPath: "/category/Drinks",
      icon: <MdOutlineLocalDrink className="ml-2" />,
    },
    {
      name: "Snacks",
      urlPath: "/category/Snacks",
      icon: <GiHamburger className="ml-2" />,
    },
  ];
  return (
    <div className="bg-stone-900 uppercase text-white w-[12rem] px-6 pt-6 h-screen fixed flex flex-col gap-y-3">
      {navLinks.map(({ urlPath, name, icon }, i) => (
        <Link
          key={i}
          to={urlPath}
          className={`cursor-pointer flex items-center ${
            currentPage === urlPath
              ? "bg-white text-black p-1 rounded-md"
              : "hover:bg-stone-700 p-1 rounded-md"
          }`}
          onClick={() => setCurrentPage(urlPath)}
        >
          {icon}
          <span>{name}</span>
        </Link>
      ))}
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
        {categoryLinks.map(({ name, urlPath, icon }, i) => (
          <Link
            to={urlPath}
            className="flex items-center justify-between cursor-pointer hover:bg-stone-700 p-1 rounded-md"
          >
            {name} {icon}{" "}
          </Link>
        ))}
      </div>

      <div className="cursor-pointer flex items-center hover:bg-stone-700 p-1 rounded-md">
        {currentUser ? (
          <>
            <FiLogOut className="mr-2" />
            <Link to="/login">Logout</Link>
          </>
        ) : (
          <>
            <FiLogIn className="mr-2" />
            <Link to="/login">Login</Link>
          </>
        )}
      </div>

      {currentUser ? (
        <div className="cursor-pointer flex items-center hover:bg-stone-700 p-1 rounded-md">
          <FiUser className="mr-2" />
          <span>{currentUser}</span>
        </div>
      ) : null}
    </div>
  );
};

export default SideBar;
