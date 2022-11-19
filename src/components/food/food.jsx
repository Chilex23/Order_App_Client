import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import { FaFilter } from "react-icons/fa";
import "@szhsin/react-menu/dist/transitions/slide.css";
import foodPic from "../../assets/images/dronesnow.jpg";

const Food = () => {
  const [filter, setFilter] = useState("price");
  console.log(filter);
  return (
    <div className="border-gray-400 border-[1px] p-3 rounded-md">
      <p className="text-lg font-bold">
        <span className="w-2 bg-green-500 mr-2">&nbsp;</span>
        <span>Food</span>
      </p>
      <div className="flex justify-between mt-2 mb-4">
        <Menu
          menuButton={
            <MenuButton className="border-[1px] flex items-center border-gray-400 rounded-md px-4 py-2 font-medium">
              <FaFilter className="mr-2" /> Filter
            </MenuButton>
          }
        >
          <MenuRadioGroup
            value={filter}
            onRadioChange={(e) => setFilter(e.value)}
          >
            <MenuItem type="radio" value="price">
              Price
            </MenuItem>
            <MenuItem type="radio" value="latest">
              Latest
            </MenuItem>
          </MenuRadioGroup>
        </Menu>
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
