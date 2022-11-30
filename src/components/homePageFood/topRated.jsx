import AliceCarousel from "react-alice-carousel";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../redux/features/cart";
import foodPic from "../../assets/images/hamburger.jpg";
import pizzaPic from "../../assets/images/pizza.jpg";
import drinkPic from "../../assets/images/drinks.jpg";
import hotDogPic from "../../assets/images/hotDog.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";

export const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export const TopRatedCarousel = () => {
  const dispatch = useDispatch();
  const items = [
    <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
      <img src={foodPic} className="w-full h-[10rem] rounded-md" alt="food" />
      <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
        Hamburger
      </h3>
      <p className="my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et
        vel ea iure officiis hic consequuntur.
      </p>
      <p className="my-2 font-semibold">Price: $3300</p>
      <div className="my-2 font-semibold flex items-center">
        <span className="mr-2">Rating:</span>{" "}
        <div className="text-lg">
          <StarRating rating={4.5} />
        </div>
        <span className="ml-2 font-medium">12 reviews</span>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-green-400 to-green-600 mx-auto block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
          onClick={() =>
            dispatch(
              addItemToCart(
                "Hamburger",
                3300,
                "a7ff021d-4081-4cc3-be69-ad3030eed099",
                foodPic
              )
            )
          }
        >
          Add to Cart
        </button>
        <ButtonSm>
          <Link to="/food/hamburger">View Food</Link>
        </ButtonSm>
      </div>
    </div>,

    <div className="mr-4 p-3 bg-white rounded-md shadow-2xl">
      <img src={drinkPic} className="w-full h-[10rem] rounded-md" alt="food" />
      <h3 className="text-xl font-semibold my-2 uppercase font-rubik">
        Cola Drink
      </h3>
      <p className="my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et
        vel ea iure officiis hic consequuntur.
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et
        vel ea iure officiis hic consequuntur.
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
        Hot Dog
      </h3>
      <p className="my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et
        vel ea iure officiis hic consequuntur.
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

  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold uppercase my-4 font-rubik text-center">
        Top Rated Food
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
    </div>
  );
};
