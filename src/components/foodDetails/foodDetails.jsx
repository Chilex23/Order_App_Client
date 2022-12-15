import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { useAddReviewMutation } from "../../redux/features/api/apiSlice";
import foodPic from "../../assets/images/hotDog.jpg";
import { notify } from "../../utils/notify";
import customStyles from "../../utils/customStyles";
import { addItemToCart } from "../../redux/features/cart";
import { ButtonSm } from "../button/button";
import StarRating, { ClickableStarRating } from "../starRating/starRating";
import { formatNumber } from "../../utils/formatNumber";

const FoodDetails = ({ foodDetails: data }, foodId) => {
  const { price, reviews, title, imageLink, description, uuid, avgRating } =
    data?.data;
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);
  const [comment, setComment] = useState("");
  const [addReview, { loading }] = useAddReviewMutation();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const canSave = [comment, selectedStars].every(Boolean) && !loading;
  const handleSelectStarRating = (i) => {
    setSelectedStars(i);
  };
  const handleBlur = (event) => {
    const { value } = event.target;
    setComment(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const reviewBody = {
      rating: selectedStars,
      comment: comment,
      id: foodId,
    };
    if (canSave) {
      try {
        const payload = await addReview(reviewBody).unwrap();
        notify("success", payload.message);
        setSelectedStars(0);
        setComment("");
      } catch (e) {
        console.log(e);
      }
    } else {
      notify("error", "Please write a comment and select a star rating.");
    }
  };

  let imageSrc = imageLink ? `http://localhost:3000/${imageLink}` : foodPic;
  let noOfReviews, foodReviews;
  if (reviews) {
    noOfReviews = Object.keys(reviews).length;
    foodReviews = Object.entries(reviews);
  } else {
    noOfReviews = 0;
    foodReviews = [];
  }
  let content = (
    <>
      <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
        {title}
      </p>
      <figure className="my-5 mx-auto">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[24rem] rounded-md"
        />
      </figure>
      <p className="text-3xl font-rubik font-bold uppercase mx-auto">
        Description
      </p>
      <p className="my-5 mx-auto">{description}</p>
      <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
        Price
      </p>
      <p className="my-5 mx-auto">${formatNumber(price)}</p>
      <button
        onClick={() => dispatch(addItemToCart(title, price, uuid, imageSrc))}
        className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
      >
        Add to Cart
      </button>
      <div className="w-full h-1 bg-gray-400">&nbsp;</div>

      <p className="my-5 mx-auto flex items-center">
        <span className="text-3xl font-rubik font-bold uppercase">Reviews</span>
        <ButtonSm clickHandler={() => openModal()}>Add Review</ButtonSm>
      </p>
      <div className="my-5 mx-auto flex justify-between">
        <div className="text-2xl flex">
          <StarRating rating={avgRating} />
          <span className="text-xl ml-5">{avgRating}</span>
        </div>
        <span className="text-xl">{noOfReviews} reviews</span>
      </div>
      {foodReviews.map((el, i) => (
        <div className="my-5 mx-auto" key={i}>
          <div className="p-2 border-2 border-gray-400 rounded-md bg-white shadow-xl">
            <div className="flex items-center">
              <span className="w-16 h-16 bg-gray-400 rounded-full">&nbsp;</span>
              <span className="ml-5 text-xl font-semibold">{el[0]}</span>
            </div>
            <p className="my-2">{el[1].comment}</p>
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-4">Rating:</span>
              <StarRating rating={el[1].rating} />
              <span className="ml-2">{el[1].rating}</span>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Add Review Modal"
      >
        <div className="flex justify-end">
          <IoCloseSharp
            onClick={closeModal}
            className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full"
          />
        </div>
        <h1 className="text-center uppercase font-bold">Add comment</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label>Write a Review</label>
          <textarea
            name="comment"
            className="block border-[1px] my-2 border-gray-500 sm2:w-[17rem] h-32 w-[24rem] p-2 rounded-md"
            placeholder="Write a concise comment that is straight to the point, so that it can be helpful to others."
            onBlur={handleBlur}
          ></textarea>
          <label>Select a Rating</label>
          <ClickableStarRating
            selectHandler={handleSelectStarRating}
            stars={selectedStars}
          />
          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-green-400 to-green-600 mx-auto px-4 py-1 block my-5 text-white uppercase rounded-md text-lg"
          >
            Add
          </button>
        </form>
      </Modal>
    </>
  );
  return content;
};

export default FoodDetails;
