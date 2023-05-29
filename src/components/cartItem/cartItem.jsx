import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../redux/features/cart";
import { formatNumber } from "../../utils/formatNumber";

const CartItem = ({ id, name, imageLink, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="border-b-[1px] border-gray-400 pb-3 mb-3">
      <div className="flex items-center justify-between text-lg">
        <figure>
          <img src={imageLink} className="w-16 h-16 rounded-full" alt="food" />
        </figure>
        <p className="text-sm md:text-base">{name}</p>
        <p className="text-sm md:text-base">${formatNumber(price)}</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div
          className="flex items-center md:text-lg text-green-500 cursor-pointer"
          onClick={() => dispatch(clearItemFromCart(id))}
        >
          <FaTrashAlt />
          <span className="ml-2 uppercase">Remove</span>
        </div>
        <div className="md:text-lg">
          <span
            onClick={() => dispatch(removeItemFromCart(id))}
            className="bg-green-500 px-3 py-1 rounded-md mr-2 cursor-pointer"
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            onClick={() => dispatch(addItemToCart(name, price, id, imageLink))}
            className="bg-green-500 px-3 py-1 rounded-md ml-2 cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
