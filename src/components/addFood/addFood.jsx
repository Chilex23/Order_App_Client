import React from "react";

const AddFood = () => {
  return (
    <div className="my-5 flex justify-between items-center">
      <span className="uppercase font-bold">Admin Dashboard</span>
      <button className="bg-orange-500 py-2 px-3 md:py-3 md:px-4 rounded-lg text-white hover:shadow-lg hover:-translate-y-2 transition-all">
        + Add Food
      </button>
    </div>
  );
};

export default AddFood;
