import { useState } from "react";
import { AiFillHome, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notify } from "../../utils/notify";
import { getCategoryPicture } from "../category/category";
import { selectUser, logOutUser } from "../../redux/features/user";

const BottomNav = () => {
  const [dropDwn, setDropDwn] = useState(true);
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    notify("successBottom", "Log Out Successfull. See you soon.");
    dispatch(logOutUser());
  };
  const categories = [
    { name: "Snacks" },
    { name: "Pizzas" },
    { name: "Drinks" },
  ];
  let navLinks;
  if (currentUser) {
    navLinks = [
      {
        name: "Home",
        urlPath: "/",
        icon: <AiFillHome size={18} />,
      },
      {
        name: "Dashboard",
        urlPath: "/dashboard",
        icon: <MdDashboardCustomize size={18} />,
      },
    ];
  } else {
    navLinks = [
      {
        name: "Home",
        urlPath: "/",
        icon: <AiFillHome className="mr-2" />,
      },
    ];
  }
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white fixed bottom-0 w-full z-10 p-3 mx-auto flex justify-between shadow-lg sm2:text-sm">
        {/* Category popup */}
        <motion.div
          animate={{ y: dropDwn ? 280 : 0 }}
          initial={{ y: 0 }}
          className="bg-white absolute -top-[9rem] text-black w-full"
        >
          {categories.map(({ name }) => (
            <Link
              to={`/category/${name}`}
              className="flex items-center p-2 rounded-lg sm2:text-sm"
              key={name}
              onClick={() => setDropDwn(!dropDwn)}
            >
              <img
                src={getCategoryPicture(name)}
                className="w-8 h-8 rounded-full mr-8"
              />
              <span>{name}</span>
            </Link>
          ))}
        </motion.div>

        {navLinks.map(({ urlPath, name, icon }) => (
          <Link
            key={name}
            to={urlPath}
            className="cursor-pointer flex flex-col items-center"
          >
            {icon}
            <span>{name}</span>
          </Link>
        ))}
        {/* Category dropdown*/}
        <div className="flex items-center" onClick={() => setDropDwn(!dropDwn)}>
          <div className="flex flex-col items-center">
            <BiCategory size={18} />
            <span>Categories</span>
          </div>
          {dropDwn ? (
            <AiFillCaretDown className="ml-1" />
          ) : (
            <AiFillCaretUp className="ml-1" />
          )}
        </div>
        {currentUser ? (
          <div className="flex flex-col items-center" onClick={() => logOut()}>
            <FiLogOut size={18} />
            <span>Logout</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <FiLogIn size={18} />
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
