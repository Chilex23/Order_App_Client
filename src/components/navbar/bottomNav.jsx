import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

const BottomNav = () => (
  <div className="flex justify-center">
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white fixed bottom-0 w-full z-10 p-3 mx-auto flex justify-between rounded-t-lg shadow-lg">
      <span className="cursor-pointer flex flex-col items-center">
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
      </span>
    </div>
  </div>
);

export default BottomNav;
