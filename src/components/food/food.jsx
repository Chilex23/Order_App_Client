import React from "react";
import foodPic from "../../assets/images/dronesnow.jpg";

const Food = () => {
  return (
    <div className="border-gray-400 border-[1px] p-3 rounded-md shadow-2xl">
      <p className="text-lg font-bold">
        <span className="w-2 bg-green-500 mr-2">&nbsp;</span>
        <span>Food</span>
      </p>
      <div className="flex justify-between my-2">
        <span className="border-b-[1px] border-black">By Price</span>
        <span>Latest</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between border-b-[1px] border-gray-300 pb-1">
          <img src={foodPic} className="w-12 h-12 rounded-full" />
          <span>Hot Dog</span>
          <span>$300</span>
        </div>
        <div className="flex items-center justify-between border-b-[1px] border-gray-300 pb-1">
          <img src={foodPic} className="w-12 h-12 rounded-full" />
          <span>Hot Dog</span>
          <span>$300</span>
        </div>
      </div>
      <button className="bg-orange-500 mx-auto block rounded-md px-3 py-2 text-white my-4">
        More Food
      </button>
    </div>
  );
};

export default Food;
