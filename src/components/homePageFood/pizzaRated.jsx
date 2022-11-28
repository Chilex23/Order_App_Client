import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import pizzaPic from "../../assets/images/pizza.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";
import { responsive } from "./topRated";

const items = [
  <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
    <img src={pizzaPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Pepperoni Pizza
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
    <img src={pizzaPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Anchovis Pizza
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
    <img src={pizzaPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">Pizza</h3>
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
    <img src={pizzaPic} className="w-full h-[10rem] rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
      Spicy Pizza
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

export const TopRatedPizzaCarousel = () => (
  <div className="my-10">
    <h2 className="text-3xl font-extrabold uppercase my-4 font-rubik text-center">
      Best of Pizzageddon
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
    <Link to="/food/Pizzas">
      <ButtonSm>View All</ButtonSm>
    </Link>
  </div>
);

export default TopRatedPizzaCarousel;
