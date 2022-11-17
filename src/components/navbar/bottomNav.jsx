import React from "react";

const BottomNav = () => (
  <div className="flex justify-center">
    <div className="bg-yellow-400 fixed bottom-3 w-[90%] p-3 mx-auto flex justify-between rounded-lg shadow-lg">
      <span className="cursor-pointer">Home</span>
      <span className="cursor-pointer">Categories</span>
      <span className="cursor-pointer">Dashboard</span>
      <span className="cursor-pointer">Login</span>
    </div>
  </div>
);

export default BottomNav;
