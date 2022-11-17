import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [dropDownHiddenState, setDropDownHiddenState] = useState(true);
  const toggleDropDown = () => {
    setDropDownHiddenState(!dropDownHiddenState);
  };
  return (
    <div className="bg-orange-500 uppercase text-white w-max h-screen pt-6 px-12 fixed flex flex-col gap-y-3">
      <Link to="/" className="cursor-pointer">
        Home
      </Link>
      <Link to="/dashboard" className="cursor-pointer">
        <span>Dashboard</span>
      </Link>
      <span className="cursor-pointer" onClick={toggleDropDown}>
        Categories
      </span>
      <div
        className={`gap-y-2 ml-4 ${
          dropDownHiddenState ? "hidden" : "flex flex-col"
        }`}
      >
        <span>Pizzas</span>
        <span>Drinks</span>
      </div>
      <span className="cursor-pointer">Login</span>
    </div>
  );
};

export default SideBar;
