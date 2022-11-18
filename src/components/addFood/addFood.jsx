import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
//IoAddOutline

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const AddFood = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    foodImage: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ title: "", description: "", price: 0, foodImage: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFoodDetails({ ...foodDetails, [name]: value });
    console.log(foodDetails)
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="my-5 flex justify-between items-center">
      <span className="uppercase font-bold">Admin Dashboard</span>
      <button
        onClick={openModal}
        className="bg-orange-500 py-2 px-3 md:py-3 md:px-4 rounded-lg text-white hover:shadow-lg hover:-translate-y-2 transition-all"
      >
        + Add Food
      </button>
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
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col my-2">
            <label>Food Title</label>
            <input
              type="text"
              name="title"
              className="border-[1px] border-gray-500 w-[24rem] h-10 p-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Food Description</label>
            <input
              type="text"
              name="description"
              className="border-[1px] border-gray-500 w-[24rem] h-10 p-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Food Category</label>
            <select name="category" className="bg-white border-[1px] border-gray-500 w-[24rem] h-10 p-2 rounded-md" onChange={handleChange}>
              <option>Snacks</option>
              <option>Pizzas</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Food Price</label>
            <input
              name="price"
              type="number"
              className="border-[1px] border-gray-500 w-[24rem] h-10 p-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Food Image</label>
            <input
              type="file"
              name="foodImage"
              className="border-[1px] border-gray-500 w-[24rem] h-10 p-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <button className="bg-orange-500 mx-auto px-4 py-2 block my-5 text-white uppercase rounded-md text-lg">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddFood;
