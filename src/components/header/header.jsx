import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDropDown from "../cartDropDown/cartDropDown";
import { selectCartItemsCount } from "../../redux/features/cart";
import { IoFastFoodOutline, IoCart } from "react-icons/io5";

const Header = () => {
  const cartCount = useSelector(selectCartItemsCount);
  const [dropDownState, setDropDownState] = useState(false);
  return (
    <nav
      className="bg-gradient-to-b from-green-400 to-green-600 text-white border-b-2 border-white py-4 px-10 sticky top-0 flex justify-center items-center z-10"
      onMouseLeave={() => setDropDownState(false)}
    >
      <div className="flex items-center font-bold">
        <IoFastFoodOutline className="text-2xl tablet:text-5xl" />
        <span className="uppercase text-2xl tablet:text-3xl font-rubik">Foodie</span>
      </div>

      {dropDownState ? <CartDropDown visibility={dropDownState} /> : null}
      <div
        className="absolute right-16"
        onMouseOver={() => setDropDownState(true)}
      >
        <Link to="/cart">
          <IoCart className="text-3xl tablet:text-5xl" />
          <span className="bg-white text-black text-xs tablet:text-lg absolute -top-1 -right-1 tablet:top-0 tablet:right-0 px-2 rounded-full inline-block">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
