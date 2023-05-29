import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logOutUser } from "../../redux/features/user";

const BottomNav = () => {
  const currentUser = useSelector(selectUser);
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
      {
        name: "Categories",
        urlPath: "/dashboard",
        icon: <BiCategory size={18} />,
      },
      {
        name: "Login",
        urlPath: "/login",
        icon: <FiLogIn size={18} />,
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
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white fixed bottom-0 w-full z-10 p-3 mx-auto flex justify-between rounded-t-lg shadow-lg sm2:text-sm">
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
        {/* <span className="cursor-pointer flex flex-col items-center">
          <AiFillHome size={18} />
          Home
        </span>
        <span className="cursor-pointer flex flex-col items-center">
          <BiCategory size={18} />
          Categories
        </span>
        <span className="cursor-pointer flex flex-col items-center">
          <MdDashboardCustomize size={18} />
          Dashboard
        </span>
        <span className="cursor-pointer flex flex-col items-center">
          <FiLogIn size={18} />
          Login
        </span> */}
      </div>
    </div>
  );
};

export default BottomNav;
