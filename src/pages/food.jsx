import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { Triangle } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useGetFoodQuery } from "../redux/features/api/apiSlice";
import { addItemToCart } from "../redux/features/cart";
import { formatNumber } from "../utils/formatNumber";
import customStyles from "../utils/customStyles";
import FormInput from "../components/formInput/formInput";
import foodPic from "../assets/images/hamburger.jpg";
import StarRating from "../components/starRating/starRating";
import { ButtonSm } from "../components/button/button";

const Food = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({
    reviewer: "",
    rating: 0
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
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCategoryDetails({ ...categoryDetails, [name]: value });
  };
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetFoodQuery(foodId);

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center my-16">
        <Triangle color="#22c55e" height={200} width={200} />
      </div>
    );
  } else if (isSuccess) {
    let imageSrc = data?.data?.imageLink
      ? `http://localhost:3000/${data?.data?.imageLink}`
      : foodPic;
    let noOfReviews, reviews;
    if (data?.data?.reviews) {
      noOfReviews = Object.keys(data?.data?.reviews).length;
      reviews = data?.data?.reviews;
    } else {
      noOfReviews = 0;
      reviews = [];
    }
    content = (
      <>
        <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
          {data?.data?.title}
        </p>
        <figure className="my-5 mx-auto">
          <img
            src={imageSrc}
            alt={data?.data?.title}
            className="w-full h-[24rem] rounded-md"
          />
        </figure>

        <p className="text-3xl font-rubik font-bold uppercase mx-auto">
          Description
        </p>
        <p className="my-5 mx-auto">{data?.data?.description}</p>

        <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
          Price
        </p>
        <p className="my-5 mx-auto">${formatNumber(data?.data?.price)}</p>
        <button
          onClick={() =>
            dispatch(
              addItemToCart(
                data?.data?.title,
                data?.data?.price,
                data?.data?.uuid,
                imageSrc
              )
            )
          }
          className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
        >
          Add to Cart
        </button>
        <div className="w-full h-1 bg-gray-400">&nbsp;</div>

        <p className="my-5 mx-auto flex items-center">
          <span className="text-3xl font-rubik font-bold uppercase">
            Reviews
          </span>
          <ButtonSm clickHandler={() => openModal()}>Add Review</ButtonSm>
        </p>
        <div className="my-5 mx-auto flex justify-between">
          <div className="text-2xl flex">
            <StarRating rating={data?.data?.avgRating} />
            <span className="text-xl ml-5">{data?.data?.avgRating}</span>
          </div>
          <span className="text-xl">{noOfReviews} reviews</span>
        </div>
        {reviews.map((el, i) => (
          <div className="my-5 mx-auto" key={i}>
            <div className="p-2 border-2 border-gray-400 rounded-md">
              <div className="flex items-center">
                <span className="w-16 h-16 bg-gray-400 rounded-full">
                  &nbsp;
                </span>
                <span className="ml-5 text-xl font-semibold">
                  {el.reviewer}
                </span>
              </div>
              <p className="my-2">{el.review}</p>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-4">Rating:</span>
                <StarRating rating={el.rating} />
                <span className="ml-2">4.5</span>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="my-5 mx-auto">
          <div className="p-2 border-2 border-gray-400 rounded-md">
            <div className="flex items-center">
              <span className="w-16 h-16 bg-gray-400 rounded-full">&nbsp;</span>
              <span className="ml-5 text-xl font-semibold">Sammy 24</span>
            </div>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              possimus autem eius quos, aut cupiditate hic explicabo quas
              incidunt sapiente accusamus maiores magnam enim corporis fugit
              voluptates tempore vitae dignissimos.
            </p>
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-4">Rating:</span>
              <StarRating rating={4.5} />
              <span className="ml-2">4.5</span>
            </div>
          </div>
        </div> */}
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
      </>
    );
  } else if (isError) {
    console.log(error?.data?.message || error?.data);
    content = (
      <div className="flex justify-center items-center my-2 h-40 text-3xl font-semibold">
        {error?.data?.message || error?.data}
      </div>
    );
  }
  return <div className="w-7/12 mr-auto">{content}</div>;
};

export default Food;
