import React, { useState } from "react";
import Modal from "react-modal";
import { Triangle } from "react-loader-spinner";
import { IoCloseSharp } from "react-icons/io5";
import { useGetCategoriesQuery } from "../../redux/features/api/apiSlice";
import FormInput from "../formInput/formInput";
import foodPic from "../../assets/images/pizza.jpg";
import drinkPic from "../../assets/images/drinks.jpg";
import customStyles from "../../utils/customStyles";
import { ButtonSm } from "../button/button";

const Category = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();
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
  const getCategoryPicture = (title) => {
    let pic;
    switch (title) {
      case "Pizzas":
        pic = foodPic;
        break;
      case "Drinks":
        pic = drinkPic;
        break;
      default:
        pic = foodPic;
    }
    return pic;
  };

  const { type } = categoryDetails;
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center my-2">
        <Triangle color="#22c55e" height={80} width={80} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="mt-4 mb-24">
        {data?.categories.map(({ type: categoryType, _id }) => (
          <div className="flex items-center mb-4 bg-gray-200 p-2 rounded-lg" key={_id}>
            <img src={getCategoryPicture(categoryType)} className="w-12 h-12 rounded-full mr-8" />
            <span>{categoryType}</span>
          </div>
        ))}
      </div>
    );
  } else if (isError) {
    content = <div>{error?.data?.message || error?.data}</div>;
  }
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white relative">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">
          <span className="w-2 bg-blue-500 mr-2">&nbsp;</span>Categories
        </p>
        <button onClick={openModal} className="text-gray-500">
          + New Category
        </button>
      </div>
      {content}
      <div className="absolute bottom-0 w-full">
        <ButtonSm>View all</ButtonSm>
      </div>

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
        <form method="post" onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            name="type"
            type="text"
            label="Category Type"
            value={type}
          />
          <button className="bg-gradient-to-r from-green-400 to-green-600 mx-auto px-4 py-1 block my-5 text-white uppercase rounded-md text-lg">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Category;
