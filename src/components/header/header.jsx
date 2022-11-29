import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/features/cart";
import { IoFastFoodOutline, IoCart } from "react-icons/io5";

const Header = () => {
  const cartCount = useSelector(selectCartItemsCount);
  return (
    <nav className="bg-gradient-to-b from-green-400 to-green-600 text-white border-b-2 border-white py-4 px-10 sticky top-0 flex justify-center items-center z-10">
      <div className="flex items-center font-bold">
        <IoFastFoodOutline className="text-5xl" />
        <span className="uppercase text-3xl font-rubik">Foodie</span>
      </div>
      <div className="absolute right-16">
        <IoCart className="text-5xl" />
        <span className="bg-white text-black text-lg absolute top-0 right-0 px-1 rounded-full">
          {cartCount}
        </span>
      </div>
    </nav>
  );
};
export default Header;
