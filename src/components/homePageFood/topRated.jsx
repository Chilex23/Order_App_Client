import AliceCarousel from "react-alice-carousel";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { addItemToCart } from "../../redux/features/cart";
import { useGetFoodsQuery } from "../../redux/features/api/apiSlice";
import { formatNumber } from "../../utils/formatNumber";
import foodPic from "../../assets/images/hamburger.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";
export const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export const TopRatedCarousel = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetFoodsQuery();
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center my-2 h-40">
        <Triangle color="#22c55e" height={80} width={80} />
      </div>
    );
  } else if (isSuccess) {
    let items = data.foodItems.slice(0, 5).map((el) => {
      let imageSrc = el?.imageLink
        ? `http://localhost:3000/${el?.imageLink}`
        : foodPic;
      let noOfReviews;
      if (el.reviews) {
        noOfReviews = Object.keys(el.reviews).length;
      } else {
        noOfReviews = 0;
      }
      return (
        <div className="mr-4 p-3 bg-white rounded-md shadow-2xl h-[22rem]">
          <img
            src={imageSrc}
            className="w-full h-[10rem] rounded-md"
            alt="food"
          />
          <h3 className="font-semibold my-2 uppercase font-rubik">
            {el.title}
          </h3>
          <p className="my-2 font-semibold">Price: ${formatNumber(el.price)}</p>
          <div className="my-2 font-semibold flex items-center">
            <span className="mr-2">Rating:</span>{" "}
            <div className="text-lg">
              <StarRating rating={el.avgRating} />
            </div>
            <span className="ml-2 font-medium">{noOfReviews} reviews</span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-400 to-green-600 mx-auto block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
              onClick={() =>
                dispatch(addItemToCart(el.title, el.price, el.uuid, imageSrc))
              }
            >
              Add to Cart
            </button>
            <ButtonSm>
              <Link to={`/food/${el.uuid}`}>View Food</Link>
            </ButtonSm>
          </div>
        </div>
      );
    });

    content = (
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={1500}
        infinite={true}
      />
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center my-2 h-40 text-3xl font-semibold">
        {error?.data?.message || error?.data}
      </div>
    );
  }
  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold uppercase my-4 font-rubik text-center">
        Top Rated Food
      </h2>
      {content}
    </div>
  );
};