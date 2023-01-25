import { FaCheck, FaSmileWink } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderSuccess = () => (
  <div className="bg-white w-[20rem] mx-auto mb-[12rem] mt-12 p-2 text-center border-2 border-green-500 rounded-md shadow-lg">
    <div className="flex justify-center text-4xl text-green-500 mb-2">
      <FaCheck />
    </div>
    <p className="text-lg">Order Placed successfully</p>
    <div className="flex justify-center text-4xl text-green-500 my-2">
      <FaSmileWink />
    </div>
    <p className="text-lg">
      Return
       <Link to="/" className="ml-2 underline">Home</Link>
    </p>
  </div>
);

export default OrderSuccess;