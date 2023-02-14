import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFoodByCategoryQuery } from "../redux/features/api/apiSlice";
import foodPic from "../assets/images/pizza.jpg";
import { StarRating } from "../components/starRating";
import {BaseSkeleton }from "../components/baseSkeleton";
import { ButtonSm } from "../components/button";
import { limitTitle } from "../utils/limitTitle";

const FoodCategory = () => {
  window.scrollTo(0, 0);
  const { foodCategory } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isSuccess, isError, error } =
    useGetFoodByCategoryQuery({ category: foodCategory, page: currentPage });
  const selectPage = (page) => {
    setCurrentPage(page);
  };
  let content;
  if (isLoading) {
    content = <BaseSkeleton variant="category-grid" />
  } else if (isSuccess) {
    let foodItemsArr = data.foodItems.map(
      ({ title, uuid, avgRating, price, imageLink, reviews }) => {
        let imageSrc = imageLink
          ? `http://localhost:3000/${imageLink}`
          : foodPic;
        let noOfReviews;
        if (reviews) {
          noOfReviews = Object.keys(reviews).length;
        } else {
          noOfReviews = 0;
        }
        // Markup
        return (
          <div
            className="p-3 bg-white rounded-md shadow-2xl border-green-500 border-2"
            key={uuid}
          >
            <img
              src={imageSrc}
              className="w-full h-[10rem] rounded-md"
              alt="food"
            />
            <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
              {limitTitle(title)}
            </h3>
            <p className="my-2 font-semibold">Price: ${price}</p>
            <div className="my-2 font-semibold flex items-center">
              <span className="mr-2">Rating:</span>{" "}
              <div className="text-lg">
                <StarRating rating={avgRating} />
              </div>
              <span className="ml-2 font-medium">{noOfReviews} reviews</span>
            </div>
            <div className="flex">
              <ButtonSm>Add to Cart</ButtonSm>
              <ButtonSm>View Food</ButtonSm>
            </div>
          </div>
        );
      }
    );
    content = (
      <>
        <div className="grid grid-cols-4 grid-row-3 gap-4 mb-10">
          {foodItemsArr}
        </div>
        <div className="my-10 mx-auto border-2 border-black w-fit px-2 flex justify-between gap-x-2 text-lg rounded-md">
          {new Array(data.totalPages).fill(1).map((el, i) => (
            <span
              key={i}
              className={`px-2 cursor-pointer ${
                currentPage === i + 1 ? "bg-green-500" : ""
              }`}
              onClick={() => selectPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center my-2 h-40 text-3xl font-semibold">
        {error?.data?.message || error?.data}
      </div>
    );
  }
  return (
    <div className="mr-4 mb-[11rem]">
      <h1 className="text-3xl font-bold font-rubik uppercase my-5">
        {foodCategory}
      </h1>
      {content}
    </div>
  );
};

export default FoodCategory;
