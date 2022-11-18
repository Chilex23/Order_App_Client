import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-5 items-center border-b-2 border-black pb-5">
      <span className="text-xl font-semibold">Good Afternoon, Chilex23</span>
      <span>
        <input
          type="search"
          className="border-black border-2 sm2:w-[18rem] w-[24rem] h-12 px-2 rounded-md mr-4 focus:ring-indigo-500"
          placeholder="Search for food items"
        />
      </span>
      <div className="flex flex-col border-l-2 border-black pl-4">
        <div className="flex items-center">
          <span className="bg-gray-400 w-10 h-10 mr-4 rounded-full">
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
