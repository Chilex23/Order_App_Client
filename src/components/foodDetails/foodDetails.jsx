import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { useAddReviewMutation } from "../../redux/features/api/apiSlice";
import { selectUser, selectToken } from "../../redux/features/user";
import foodPic from "../../assets/images/hotDog.jpg";
import { notify } from "../../utils/notify";
import { toast } from "react-toastify";
import customStyles from "../../utils/customStyles";
import { addItemToCart } from "../../redux/features/cart";
import { ButtonSm } from "../button/button";
import StarRating, { ClickableStarRating } from "../starRating/starRating";
import { formatNumber } from "../../utils/formatNumber";

const FoodDetails = ({ foodDetails: data }) => {
  const { price, reviews, title, imageLink, description, uuid, avgRating } =
    data?.data;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const authToken = useSelector(selectToken);
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
      id: uuid,
      token: authToken
    };
    if (canSave) {
      try {
        await toast.promise(addReview(reviewBody).unwrap(), {
          pending: "Adding Review",
          success: "Review Added Successfully",
          error: "Error"
        });
        setSelectedStars(0);
        setComment("");
      } catch (e) {
        console.log(e);
        notify("error", e.data.message);
      }
    } else {
      notify("error", "Please write a comment and select a star rating.");
    }
  };

  let imageSrc = imageLink ? `http://localhost:3000/${imageLink}` : foodPic;
  let noOfReviews, foodReviews;
  // The review data is in an object the key is the user and the value is the review,
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
      <p className="my-2 mx-auto text-lg">{description}</p>
      <p className="text-3xl font-rubik font-bold uppercase my-2 mx-auto">
        Price
      </p>
      <p className="my-2 mx-auto text-lg">${formatNumber(price)}</p>
      <button
        onClick={() => dispatch(addItemToCart(title, price, uuid, imageSrc))}
        className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
      >
        Add to Cart
      </button>
      <div className="w-full h-1 bg-gray-400">&nbsp;</div>

      <p className="my-5 mx-auto flex items-center">
        <span className="text-3xl font-rubik font-bold uppercase">Reviews</span>
        {/* Check if the user is logged in and if he has already added a review */}
        {!currentUser || reviews?.currentUser ? null : (
          <ButtonSm clickHandler={() => openModal()}>Add Review</ButtonSm>
        )}
      </p>
      <div className="my-5 mx-auto flex justify-between">
        <div className="text-2xl flex items-center">
          <StarRating rating={avgRating} />
          <span className="text-xl ml-5">{avgRating}</span>
          <span className="ml-2 text-xl">{avgRating > 1 ? "Stars" : "Star"}</span>
        </div>
        <span className="text-xl">
          {noOfReviews} {noOfReviews > 1 ? "reviews" : "review"}
        </span>
      </div>
      {/* Markup For All Reviews */}
      {foodReviews.map((el, i) => (
        <div className="my-5 mx-auto" key={i}>
          <div className="p-2 border-2 border-gray-400 rounded-md bg-white shadow-xl">
            <div className="flex items-center">
              <span className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full flex justify-center items-center text-3xl font-bold">
                {el[0][0]}
                {/* FirstName Letter*/}
              </span>
              <span className="ml-5 text-xl font-semibold">
                {el[0]}
                {/* FirstName */}
              </span>
            </div>
            <p className="my-2 text-lg">{el[1].comment}</p>
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-4">Rating:</span>
              <StarRating rating={el[1].rating} />
              <span className="ml-2">{el[1].rating}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Modal to add Review */}
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
            placeholder="Write a concise review that is straight to the point, so that it can be helpful to others."
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
