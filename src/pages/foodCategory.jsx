import { useState } from "react";
import { useParams } from "react-router-dom";
import foodPic from "../assets/images/pizza.jpg";
import { StarRating } from "../components/starRating";
import { ButtonSm } from "../components/button";

const FoodCategory = () => {
  window.scrollTo(0, 0)
  const { foodCategory } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const selectPage = (page) => {
    setCurrentPage(page);
  }
  return (
    <div className="mr-4">
      <h1 className="text-3xl font-bold font-rubik uppercase text-center my-5">
        {foodCategory}
      </h1>
      <div className="grid grid-cols-4 grid-row-3 gap-4 mb-10">
        {new Array(10).fill(1).map((el, i) => (
          <div className="p-3 bg-white rounded-md shadow-2xl border-green-500 border-2" key={i}>
            <img
              src={foodPic}
              className="w-full h-[10rem] rounded-md"
              alt="food"
            />
            <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
              Pepperoni Pizza
            </h3>
            {/* <p className="my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              et vel ea iure officiis hic consequuntur.
            </p> */}
            <p className="my-2 font-semibold">Price: $3300</p>
            <p className="my-2 font-semibold flex items-center">
              <span className="mr-2">Rating:</span>{" "}
              <span className="text-lg">
                <StarRating rating={4.5} />
              </span>
              <span className="ml-2 font-medium">12 reviews</span>
            </p>
            <div className="flex">
              <ButtonSm>Add to Cart</ButtonSm>
              <ButtonSm>View Food</ButtonSm>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 mx-auto border-2 border-black w-fit px-2 flex justify-between gap-x-2 text-lg rounded-md">
        {new Array(3).fill(1).map((el, i) => (
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
    </div>
  );
};

export default FoodCategory;
