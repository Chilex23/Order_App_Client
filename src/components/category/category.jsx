import React from "react";
import foodPic from "../../assets/images/dronesnow.jpg";

const Category = () => {
  return (
    <div className="border-gray-400 border-[1px] p-3 rounded-md shadow-2xl">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">
          <span className="w-2 bg-blue-500 mr-2">&nbsp;</span>Categories
        </p>
        <button className="text-gray-500">+ New Category</button>
      </div>
      <div className="my-4">
        <div className="flex items-center mb-4 bg-gray-200 p-2 rounded-lg">
          <img src={foodPic} className="w-12 h-12 rounded-full mr-8" />
          <span>Drinks</span>
        </div>
        <div className="flex items-center bg-gray-200 p-2 rounded-lg">
          <img src={foodPic} className="w-12 h-12 rounded-full mr-8" />
          <span>Pizzas</span>
        </div>
      </div>
      <button className="bg-orange-500 mx-auto block rounded-md px-3 py-2 text-white">View all</button>
    </div>
  );
};

export default Category;
