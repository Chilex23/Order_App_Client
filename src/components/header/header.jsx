import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";

const Header = () => (
  <nav className="bg-green-500 text-white border-b-2 border-white py-4 px-10 sticky top-0 flex justify-center z-10">
    <div className="flex items-center font-bold">
      <IoFastFoodOutline className="text-5xl" />
      <span className="uppercase text-3xl font-rubik">Foodie</span>
    </div>
  </nav>
);

export default Header;
