import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetFoodByCategoryQuery } from "../../redux/features/api/apiSlice";
import { addItemToCart } from "../../redux/features/cart";
import { formatNumber } from "../../utils/formatNumber";
import { limitTitle } from "../../utils/limitTitle";
import { BaseSkeleton } from "../baseSkeleton";
import { StarRating } from "../starRating";
import { ButtonSm } from "../button";
import { responsive } from "./topRated";

const TopRatedPizzaCarousel = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetFoodByCategoryQuery({ category: "Pizzas", page: 1 });
  const dispatch = useDispatch();
  let content;
  if (isLoading) {
    content = <BaseSkeleton variant="card-grid" />;
  } else if (isSuccess) {
    let items = data.foodItems.slice(0, 5).map((el) => {
      let imageSrc = el?.imageLink
        ? `${import.meta.env.VITE_API_URL}/${el?.imageLink}`
        : foodPic;
      let noOfReviews;
      if (el.reviews) {
        noOfReviews = Object.keys(el.reviews).length;
      } else {
        noOfReviews = 0;
      }
      return (
        <div className="mr-4 p-3 bg-white rounded-md shadow-2xl h-[22rem] border-green-500 border-2">
          <img
            src={imageSrc}
            className="w-full h-[10rem] rounded-md"
            alt="food"
          />
          <h3 className="font-medium tablet:font-semibold my-2 uppercase font-rubik myXl:text-xl">
            {limitTitle(el.title)}
          </h3>
          <p className="text-sm sm:text-base my-2 font-semibold">Price: ${formatNumber(el.price)}</p>
          <div className="text-sm sm:text-base my-2 font-semibold flex items-center">
            <span className="mr-2">Rating:</span>{" "}
            <div className="text-lg">
              <StarRating rating={el.avgRating} />
            </div>
            <span className="ml-2 font-medium hidden tablet:inline-block">
              {noOfReviews} {noOfReviews > 1 ? "reviews" : "review"}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="text-sm sm:text-base bg-gradient-to-r from-green-400 to-green-600 mx-auto block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
              onClick={() =>
                dispatch(
                  addItemToCart(
                    el.title,
                    el.price,
                    el.uuid,
                    imageSrc,
                    el.category
                  )
                )
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
      <div className="relative my-12 -z-10">
        <h2 className="text-2xl text-center tablet:text-3xl px-4 font-extrabold uppercase my-4 font-rubik absolute -top-12 tablet:-top-8 left-2/4 -translate-x-2/4 bg-gray-200">
          Best of Pizzageddon
        </h2>
        <span className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-md block">
          &nbsp;
        </span>
      </div>
      {content}
      <Link to="/category/Pizzas">
        <ButtonSm>View All</ButtonSm>
      </Link>
    </div>
  );
};

export default TopRatedPizzaCarousel;
