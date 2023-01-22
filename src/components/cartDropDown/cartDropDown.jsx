import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { selectCartItems } from "../../redux/features/cart";
import { formatNumber } from "../../utils/formatNumber";
import { ButtonSm } from "../button/button";

const CartDropDown = ({ visibility }) => {
  const cartItems = useSelector(selectCartItems);
  let content;
  if (cartItems.length <= 0) {
    content = (
      <motion.div
        animate={{ y: visibility ? 0 : 100 }}
        initial={{ y: 100 }}
        className="bg-white p-4 absolute top-16 right-10 text-black rounded-md shadow-2xl"
      >
        <p>No Food Items In the Cart...</p>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        animate={{ y: visibility ? 0 : 100 }}
        initial={{ y: 100 }}
        className="bg-white p-4 absolute top-16 right-10 text-black rounded-md shadow-2xl"
      >
        {cartItems.map(({ name, imageLink, price, quantity }) => (
          <div key={name} className="flex items-center justify-between mb-4">
            <img
              src={imageLink}
              className="w-10 h-10 rounded-full mr-2"
              alt={`${name} image`}
            />
            <span className="mr-4 text-sm">{name}</span>
            <span className="text-sm">
              ${formatNumber(price)} X {quantity}
            </span>
          </div>
        ))}
        <ButtonSm>
          <Link to="/cart">Check Out</Link>
        </ButtonSm>
      </motion.div>
    );
  }

  return content;
};

export default CartDropDown;
