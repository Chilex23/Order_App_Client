import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import FormInput from "../formInput/formInput";
import { HoverButton } from "../button/button";
import customStyles from "../../utils/customStyles";
import { useAddNewFoodMutation } from "../../redux/features/api/foodSlice";
//IoAddOutline

const AddFood = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState({
    title: "",
    description: "",
    category: "Snacks",
    price: "",
    foodImage: "",
  });
  const [addNewFood, { isLoading }] = useAddNewFoodMutation();

  const { title, description, category, price, foodImage } = foodDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("foodImage", foodImage);
    console.log(formData);
    if (!isLoading) {
      try {
        const payload = await addNewFood(formData).unwrap();
        alert("fulfilled", payload);
        setFoodDetails({
          title: "",
          description: "",
          category: "Snacks",
          price: "",
          foodImage: "",
        });
      } catch (err) {
        console.log("Failed to add food", err);
      }
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFoodDetails({ ...foodDetails, [name]: value });
  };

  const fileChange = (event) => {
    if (event.target.files[0].size > 2000000) {
      alert("File too big");
      return;
    }
    setFoodDetails({ ...foodDetails, foodImage: event.target.files[0] });
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
              <option value="Snacks">Snacks</option>
              <option value="Pizzas">Pizzas</option>
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
            handleChange={fileChange}
            name="foodImage"
            type="file"
            label="Food Image"
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
