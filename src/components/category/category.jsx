import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import FormInput from "../formInput/formInput";
import foodPic from "../../assets/images/pizza.jpg";
import drinkPic from "../../assets/images/drinks.jpg";
import customStyles from "../../utils/customStyles";
import { ButtonSm } from "../button/button";

const Category = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({
    type: "",
  });
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(categoryDetails);
    setCategoryDetails({
      type: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCategoryDetails({ ...categoryDetails, [name]: value });
  };

  const { type } = categoryDetails;
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">
          <span className="w-2 bg-blue-500 mr-2">&nbsp;</span>Categories
        </p>
        <button onClick={openModal} className="text-gray-500">
          + New Category
        </button>
      </div>
      <div className="my-4">
        <div className="flex items-center mb-4 bg-gray-200 p-2 rounded-lg">
          <img src={drinkPic} className="w-12 h-12 rounded-full mr-8" />
          <span>Drinks</span>
        </div>
        <div className="flex items-center bg-gray-200 p-2 rounded-lg">
          <img src={foodPic} className="w-12 h-12 rounded-full mr-8" />
          <span>Pizzas</span>
        </div>
      </div>
      <ButtonSm>View all</ButtonSm>

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
        <h1 className="text-center uppercase font-bold">Add Category</h1>
        <form
          method="post"
          onSubmit={handleSubmit}
        >
          <FormInput
            handleChange={handleChange}
            name="type"
            type="text"
            label="Category Type"
            value={type}
          />
          <button className="bg-orange-500 mx-auto px-4 py-2 block my-5 text-white uppercase rounded-md text-lg">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Category;
