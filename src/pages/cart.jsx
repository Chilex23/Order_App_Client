import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import foodPic from "../assets/images/hamburger.jpg";
import { selectCartItems } from "../redux/features/cart";

const Cart = () => {
  window.scrollTo(0, 0);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  return (
    <div className="mx-auto w-[95%]">
      <h1 className="text-3xl font-bold font-rubik uppercase text-center my-5">
        Cart
      </h1>
      <div className="flex">
        <div className="border-2 border-gray-300 rounded-md py-2 px-6 w-8/12">
          <h2 className="text-lg font-bold ">Cart(3)</h2>
          <div className="w-full h-1 bg-gray-300 my-2">&nbsp;</div>
          {cartItems.map((el) => (
            <div className="border-b-[1px] border-gray-300 pb-3 mb-3">
              <div className="flex items-center justify-between text-lg">
                <figure className="w-32">
                  <img src={foodPic} alt="food" />
                </figure>
                <p>Hamburger</p>
                <p>$3000</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center text-lg text-green-500 cursor-pointer">
                  <FaTrashAlt />
                  <span className="ml-2 uppercase">Remove</span>
                </div>
                <div className="text-lg">
                  <span className="bg-green-500 px-3 py-1 rounded-md mr-2 cursor-pointer">
                    -
                  </span>
                  <span>1</span>
                  <span className="bg-green-500 px-3 py-1 rounded-md ml-2 cursor-pointer">
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
            <span className="text-lg font-bold">$32,000</span>
          </p>
          <button className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md py-2 text-white my-4 w-full uppercase">
            checkout($32,000)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
