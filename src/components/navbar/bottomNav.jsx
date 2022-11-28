import React from "react";

const BottomNav = () => (
  <div className="flex justify-center">
    <div className="bg-gradient-to-b from-green-400 to-green-600 text-white fixed bottom-3 w-[90%] z-10 p-3 mx-auto flex justify-between rounded-lg shadow-lg">
      <span className="cursor-pointer">Home</span>
      <span className="cursor-pointer">Categories</span>
      <span className="cursor-pointer">Dashboard</span>
      <span className="cursor-pointer">Login</span>
    </div>
  </div>
);

export default BottomNav;
