import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  clearCart,
} from "../redux/features/cart";
import { CartItem } from "../components/cartItem";
import { selectUser, selectToken } from "../redux/features/user";
import { useCreateOrderMutation } from "../redux/features/api/orderSlice";
import { notify } from "../utils/notify";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder, { isLoading }] = useCreateOrderMutation();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartItemsCount);
  const cartTotal = useSelector(selectCartTotal);
  const user = useSelector(selectUser);
  const authToken = useSelector(selectToken);
  const canSave = cartItems.length > 0 && !isLoading;

  const placeOrder = async () => {
    let transformedOrderItems = cartItems.map(
      ({ name, price, quantity, category }) => ({
        name,
        price,
        quantity,
        category,
      })
    );
    if (!user) {
      notify("successBottom", "Please Sign in to place an order.");
      navigate("/login");
      return;
    }
    if (canSave) {
      try {
        const orderBody = {
          items: transformedOrderItems,
          token: authToken,
        };
        await toast.promise(addOrder(orderBody).unwrap(), {
          pending: "Placing Order...",
          success: "Order Placed Successfully",
          error: {
            render({ data }) {
              return data.data.message;
            },
          },
        });
        dispatch(clearCart());
        navigate("/orderSuccess");
      } catch (err) {
        notify("error", err);
      }
    } else {
      notify("error", "Please put some items in the cart.");
    }
  };
  return (
    <div className="mx-auto w-[95%] mb-[6rem] md:mb-[12rem]">
      <h1 className="text-3xl font-bold font-rubik uppercase text-center my-5">
        Cart
      </h1>
      <div className="flex flex-col md:flex-row gap-y-8">
        <div className="border-2 border-gray-400 rounded-md py-2 px-6 md:w-8/12 bg-white shadow-xl">
          <h2 className="md:text-lg font-bold ">Cart({cartCount})</h2>
          <div className="w-full h-1 bg-gray-400 my-2">&nbsp;</div>
          {cartItems.map(({ id, name, imageLink, price, quantity }) => (
            <CartItem
              id={id}
              key={id}
              name={name}
              imageLink={imageLink}
              price={price}
              quantity={quantity}
            />
          ))}
        </div>
        {/* CART SUMMARY */}
        <div className="border-2 border-gray-400 w-10/12 md:w-4/12 md:ml-8 self-start rounded-md p-2 bg-white shadow-xl">
          <p className="uppercase border-b-[1px] border-gray-400">
            Cart Summary
          </p>
          <p className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="text-lg font-bold">
              ${formatNumber(cartTotal)}
            </span>
          </p>
          <button
            className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md py-2 text-white my-4 w-full uppercase"
            onClick={placeOrder}
          >
            checkout(${formatNumber(cartTotal)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
