import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import foodPic from "../assets/images/hamburger.jpg";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../redux/features/cart";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartItemsCount);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="mx-auto w-[95%]">
      <h1 className="text-3xl font-bold font-rubik uppercase text-center my-5">
        Cart
      </h1>
      <div className="flex">
        <div className="border-2 border-gray-300 rounded-md py-2 px-6 w-8/12">
          <h2 className="text-lg font-bold ">Cart({cartCount})</h2>
          <div className="w-full h-1 bg-gray-300 my-2">&nbsp;</div>
          {cartItems.map((el) => (
            <div
              key={el.id}
              className="border-b-[1px] border-gray-300 pb-3 mb-3"
            >
              <div className="flex items-center justify-between text-lg">
                <figure className="w-32">
                  <img src={foodPic} alt="food" />
                </figure>
                <p>{el.name}</p>
                <p>${formatNumber(el.price)}</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div
                  className="flex items-center text-lg text-green-500 cursor-pointer"
                  onClick={() => dispatch(clearItemFromCart(el.id))}
                >
                  <FaTrashAlt />
                  <span className="ml-2 uppercase">Remove</span>
                </div>
                <div className="text-lg">
                  <span
                    onClick={() => dispatch(removeItemFromCart(el.id))}
                    className="bg-green-500 px-3 py-1 rounded-md mr-2 cursor-pointer"
                  >
                    -
                  </span>
                  <span>{el.quantity}</span>
                  <span
                    onClick={() =>
                      dispatch(
                        addItemToCart(el.name, el.price, el.id, el.imageLink)
                      )
                    }
                    className="bg-green-500 px-3 py-1 rounded-md ml-2 cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-2 border-gray-300 w-4/12 ml-8 self-start rounded-md p-2">
          <p className="uppercase border-b-[1px] border-gray-300">
            Cart Summary
          </p>
          <p className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="text-lg font-bold">
              ${formatNumber(cartTotal)}
            </span>
          </p>
          <button className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md py-2 text-white my-4 w-full uppercase">
            checkout(${formatNumber(cartTotal)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
