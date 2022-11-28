import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import hotDogPic from "../../assets/images/hotDog.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";
import { responsive } from "./topRated";

const items = [
  <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
    <img src={hotDogPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Spaghetti
    </h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur.
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <div className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <div className="text-lg">
        <StarRating rating={4.5} />
      </div>
      <span className="ml-2 font-medium">12 reviews</span>
    </div>
    <div className="flex">
      <ButtonSm>Add to Cart</ButtonSm>
      <ButtonSm>View Food</ButtonSm>
    </div>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
    <img src={hotDogPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Spaghetti
    </h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur.
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <div className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <div className="text-lg">
        <StarRating rating={4.5} />
      </div>
      <span className="ml-2 font-medium">12 reviews</span>
    </div>
    <div className="flex">
      <ButtonSm>Add to Cart</ButtonSm>
      <ButtonSm>View Food</ButtonSm>
    </div>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
    <img src={hotDogPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Spaghetti
    </h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur.
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <div className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <div className="text-lg">
        <StarRating rating={4.5} />
      </div>
      <span className="ml-2 font-medium">12 reviews</span>
    </div>
    <div className="flex">
      <ButtonSm>Add to Cart</ButtonSm>
      <ButtonSm>View Food</ButtonSm>
    </div>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
    <img src={hotDogPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Spicy Spaghetti
    </h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur.
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <div className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <div className="text-lg">
        <StarRating rating={4.5} />
      </div>
      <span className="ml-2 font-medium">12 reviews</span>
    </div>
    <div className="flex">
      <ButtonSm>Add to Cart</ButtonSm>
      <ButtonSm>View Food</ButtonSm>
    </div>
  </div>,
];

export const TopRatedMealCarousel = () => (
  <div className="my-10">
    <h2 className="text-3xl font-extrabold uppercase my-4 font-rubik text-center">
      Top Meals
    </h2>
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay={true}
      autoPlayInterval={1500}
      infinite={true}
    />
    <Link to="/food/top-meals">
      <ButtonSm>View All</ButtonSm>
    </Link>
  </div>
);

export default TopRatedMealCarousel;
