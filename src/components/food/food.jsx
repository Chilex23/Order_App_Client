import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import customStyles from "../../utils/customStyles";
import { FaFilter } from "react-icons/fa";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { formatNumber } from "../../utils/formatNumber";
import foodPic from "../../assets/images/hamburger.jpg";
import { StarRating } from "../starRating";
import { BaseSkeleton } from "../baseSkeleton";
import { ButtonSm } from "../button";
import {
  useGetFoodsQuery,
  selectFoodItemsSortedByPrice,
  selectFoodItemsSortedByTitle,
  selectFoodItemsData,
} from "../../redux/features/api/apiSlice";

const Food = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetFoodsQuery();
  const foodSortedByPrice = useSelector(selectFoodItemsSortedByPrice);
  const foodSortedByLatest = useSelector(selectFoodItemsSortedByTitle);
  const foodResults = useSelector(selectFoodItemsData);
  const [foodData, setFoodData] = useState(foodResults);
  const sortFood = (type) => {
    if (type === "price") {
      setFoodData(foodSortedByPrice);
    } else {
      setFoodData(foodSortedByLatest);
    }
    setFilter(type);
  };
  const [filter, setFilter] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    title: "",
    id: "",
    imageSrc: "",
    description: "",
    rating: 0,
    price: 0,
    reviews: 0,
  });
  const openModal = (
    title,
    id,
    imageSrc,
    description,
    rating,
    price,
    reviews
  ) => {
    setIsOpen(true);
    setModalDetails({
      title,
      id,
      imageSrc,
      description,
      rating,
      price,
      reviews,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  let content;
  if (isLoading) {
    content = <BaseSkeleton variant="dashboard" />;
  } else if (isSuccess) {
    let arr = foodData.length <= 0 ? data?.foodItems : foodData;
    content = arr
      .slice(0, 5)
      .map(
        ({
          title,
          _id,
          uuid,
          description,
          avgRating,
          price,
          imageLink,
          reviews,
        }) => {
          let imageSrc = imageLink
            ? `http://localhost:3000/${imageLink}`
            : foodPic;
          let noOfReviews;
          if (reviews) {
            noOfReviews = Object.keys(reviews).length;
          } else {
            noOfReviews = 0;
          }
          // Markup for each initially shown food items.
          return (
            <div
              className="flex items-center hover:bg-gray-200 p-1 border-b-[1px] border-gray-300 hover:rounded-md cursor-pointer transition mb-2"
              onClick={() =>
                openModal(
                  title,
                  uuid,
                  imageSrc,
                  description,
                  avgRating,
                  price,
                  noOfReviews
                )
              }
              key={_id}
            >
              <img
                src={imageSrc}
                className="w-12 h-12 rounded-full"
                alt="food"
              />
              <span className="px-3 mr-auto text-sm">{title}</span>
              <span className="text-sm">${formatNumber(price)}</span>
            </div>
          );
        }
      );
  } else if (isError) {
    content = <div>{error?.data?.message || error?.data}</div>;
  }

  const { title, id, imageSrc, description, rating, price, reviews } =
    modalDetails;

  return (
    <div className="shadow-2xl p-3 rounded-md bg-white relative">
      <p className="text-lg font-bold">
        <span className="w-2 bg-green-500 mr-2">&nbsp;</span>
        <span>Food</span>
      </p>
      <div className="flex justify-between mt-2 mb-4">
        <Menu
          menuButton={
            <MenuButton className="border-[1px] flex items-center border-gray-400 rounded-md px-2 py-1 font-medium">
              <FaFilter className="mr-2" /> Sort
            </MenuButton>
          }
        >
          <MenuRadioGroup
            value={filter}
            onRadioChange={(e) => {
              sortFood(e.value);
            }}
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
      <p className="text-sm">Click on a food item to view more details.</p>
      <div className="flex flex-col mb-24">{content}</div>
      {!isLoading ? (
        <div className="absolute bottom-0 w-full">
          <ButtonSm>More Food</ButtonSm>
        </div>
      ) : null}
      {/* Markup for the food item modal pop-up. */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Add Food Modal"
      >
        <div className="flex justify-end mb-2">
          <IoCloseSharp
            onClick={closeModal}
            className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full"
          />
        </div>

        <div className="w-[26rem] sm2:w-[17rem]">
          <h1 className="text-center uppercase font-bold text-xl sm2:text-xl font-rubik">
            {title}
          </h1>
          <figure className="my-4">
            <img
              className="w-full h-[14rem] sm2:h-[10rem] rounded-md"
              src={imageSrc}
              alt="food"
            />
          </figure>
          <p className="mb-2 sm2:text-sm">{description}</p>
          <div className="grid grid-cols-2 gap-2 my-4">
            <p className="text-md sm2:text-sm">
              <span className="font-bold mr-4">Price:</span> $
              {formatNumber(price)}
            </p>
            <p className="text-md sm2:text-sm">
              <span className="font-bold mr-4">Reviews:</span> {reviews}
            </p>
            <div className="text-md sm2:text-sm flex items-center">
              <span className="font-bold mr-4">Rating:</span>{" "}
              <StarRating rating={rating} />
            </div>
          </div>
          <ButtonSm>
            <Link to={`/food/${id}`}>View Food</Link>
          </ButtonSm>
        </div>
      </Modal>
    </div>
  );
};

export default Food;
