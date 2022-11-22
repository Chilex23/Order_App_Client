import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import FormInput from "../formInput/formInput";
import { HoverButton } from "../button/button";
import customStyles from "../../utils/customStyles";
import { ButtonSm } from "../button/button";
//IoAddOutline

const AddFood = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState({
    title: "",
    description: "",
    category: "snacks",
    price: "",
    foodImage: "",
  });

  const { title, description, category, price, foodImage } = foodDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(foodDetails);
    setFoodDetails({
      title: "",
      description: "",
      category: "",
      price: "",
      foodImage: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFoodDetails({ ...foodDetails, [name]: value });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="my-5 flex justify-between items-center">
      <span className="uppercase font-bold">Admin Dashboard</span>
      <HoverButton clickHandler={openModal}>+ Add Food</HoverButton>
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
        <h1 className="text-center uppercase font-bold">Add Food</h1>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <FormInput
            handleChange={handleChange}
            name="title"
            type="text"
            label="Food Title"
            value={title}
          />
          <FormInput
            handleChange={handleChange}
            name="description"
            type="text"
            label="Food Description"
            value={description}
          />
          <div className="flex flex-col my-2">
            <label>Food Category</label>
            <select
              name="category"
              value="snacks"
              className="bg-white border-[1px] border-gray-500 sm2:w-[17rem] w-[24rem] h-10 p-2 rounded-md"
              onChange={handleChange}
            >
              <option value="snacks">Snacks</option>
              <option value="pizzas">Pizzas</option>
            </select>
          </div>
          <FormInput
            handleChange={handleChange}
            name="price"
            type="number"
            label="Food Price"
            value={price}
          />
          <FormInput
            handleChange={handleChange}
            name="foodImage"
            type="file"
            label="Food Image"
            value={foodImage}
          />
          <button className="bg-green-500 mx-auto px-4 py-2 block my-5 text-white uppercase rounded-md text-lg">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddFood;
