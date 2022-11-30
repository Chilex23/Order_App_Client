import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-5 items-center border-b-2 border-gray-400 pb-5">
      <span className="text-xl font-semibold">Good Afternoon, Chilex23</span>
      <span className="relative z-0">
        <AiOutlineSearch className="absolute top-3 left-1 text-2xl"/>
        <input
          type="search"
          className="border-black border-[1px] sm2:w-[18rem] w-[24rem] h-12 pl-8 rounded-md mr-4 focus:border-green-600 focus-visible:border-green-600"
          placeholder="Search for food items"
        />
      </span>
      <div className="flex flex-col border-l-2 border-gray-400 pl-4">
        <div className="flex items-center">
          <span className="bg-gray-300 w-10 h-10 mr-4 rounded-full">
            &nbsp;
          </span>
          <span className="font-bold">Onumaegbu Chima</span>
        </div>
        <span>yahoo@gmail.com</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
