import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";

const Header = () => (
  <nav className="bg-orange-500 text-white border-b-2 border-white py-4 px-10 sticky top-0 flex justify-center z-1">
    <p className="flex items-center font-bold">
      <IoFastFoodOutline className="text-5xl" />
      <span className="uppercase text-3xl">Foodie</span>
    </p>
  </nav>
);

export default Header;
