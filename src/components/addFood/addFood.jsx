import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import FormInput from "../formInput/formInput";
import { HoverButton } from "../button/button";
import { notify } from "../../utils/notify";
import customStyles from "../../utils/customStyles";
import { useAddNewFoodMutation } from "../../redux/features/api/apiSlice";

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
  const canSave =
    [title, description, category, price, foodImage].every(Boolean) &&
    !isLoading;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (canSave) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("foodImage", foodImage);
      notify("success", `Adding ${title}`)
      try {
        const payload = await addNewFood(formData).unwrap();
        notify("success", payload.message);
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
    } else {
      notify("error", "Please Fill all fields");
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFoodDetails({ ...foodDetails, [name]: value });
  };

  const fileChange = (event) => {
    if (event.target.files[0].size > 2000000) {
      notify("error", "File too big, it must be less than 2mb");
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
    <>
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
            <span onClick={closeModal}>
              <IoCloseSharp className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full" />
            </span>
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
              required={true}
            />
            <FormInput
              handleChange={handleChange}
              name="description"
              type="text"
              label="Food Description"
              value={description}
              required={true}
            />
            <div className="flex flex-col my-2">
              <label>Food Category</label>
              <select
                name="category"
                value="snacks"
                className="bg-white border-[1px] font-karla border-gray-500 sm2:w-[17rem] w-[24rem] h-10 p-2 rounded-md"
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
              required={true}
            />
            <FormInput
              handleChange={fileChange}
              name="foodImage"
              type="file"
              label="Food Image"
              required={true}
            />
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-green-400 to-green-600 mx-auto px-4 py-1 block my-5 text-white uppercase rounded-md text-lg"
            >
              Add
            </button>
          </form>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddFood;
