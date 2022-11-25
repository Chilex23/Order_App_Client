import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import customStyles from "../../utils/customStyles";
import { FaFilter } from "react-icons/fa";
import "@szhsin/react-menu/dist/transitions/slide.css";
import foodPic from "../../assets/images/hamburger.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";

const Food = () => {
  const [filter, setFilter] = useState("price");
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(filter);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white">
      <p className="text-lg font-bold">
        <span className="w-2 bg-green-500 mr-2">&nbsp;</span>
        <span>Food</span>
      </p>
      <div className="flex justify-between mt-2 mb-4">
        <Menu
          menuButton={
            <MenuButton className="border-[1px] flex items-center border-gray-400 rounded-md px-2 py-1 font-medium">
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
        <div
          className="flex items-center justify-between hover:bg-gray-300 p-1 border-b-[1px] border-gray-300 hover:rounded-md cursor-pointer"
          onClick={openModal}
        >
          <img src={foodPic} className="w-12 h-12 rounded-full" alt="food" />
          <span>Hamburger</span>
          <span>$300</span>
        </div>
        <div className="flex items-center justify-between hover:bg-gray-300 p-1 border-b-[1px] border-gray-300 hover:rounded-md cursor-pointer">
          <img src={foodPic} className="w-12 h-12 rounded-full" alt="food" />
          <span>Hamburger</span>
          <span>$300</span>
        </div>
      </div>
      <ButtonSm>More Food</ButtonSm>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Add Food Modal"
      >
        <div className="flex justify-end">
          <IoCloseSharp
            onClick={closeModal}
            className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full"
          />
        </div>

        <div className="w-[26rem] sm2:w-[17rem]">
          <h1 className="text-center uppercase font-bold text-3xl sm2:text-xl font-rubik">
            Hamburger
          </h1>
          <figure className="my-4">
            <img
              className="w-full h-[14rem] sm2:h-[10rem] rounded-md"
              src={foodPic}
              alt="food"
            />
          </figure>
          <p className="mb-2 sm2:text-sm">
            This is a nice hot dog. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Hic minima tempore maiores, dignissimos tempora
            suscipit, cum pariatur mollitia odit quisquam incidunt deleniti
            ducimus eius perferendis. Nulla animi officia ea dolore!
          </p>
          <div className="grid grid-cols-2 gap-2 my-4">
            <p className="text-md sm2:text-sm">
              <span className="font-bold mr-4">Price:</span> $300
            </p>
            <p className="text-md sm2:text-sm">
              <span className="font-bold mr-4">Reviews:</span> 10
            </p>
            <p className="text-md sm2:text-sm flex items-center">
              <span className="font-bold mr-4">Rating:</span>{" "}
              <StarRating rating={4.5} />
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Food;
