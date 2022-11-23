import AliceCarousel from "react-alice-carousel";
import foodPic from "../../assets/images/dronesnow.jpg";
import StarRating from "../starRating/starRating";
import { ButtonSm } from "../button/button";
import "../../index.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="mr-4 p-3 bg-white rounded-md">
    <img src={foodPic} className="w-full h-52 rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase">Hot Dog</h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur, eaque incidunt rem quia assumenda modi
      voluptate qui officia voluptates natus alias cumque culpa!
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <p className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <span className="text-lg">
        <StarRating rating={4.5} />
      </span>
      <span className="ml-2 font-medium">12 reviews</span>
    </p>
    <ButtonSm>Add to Cart</ButtonSm>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md">
    <img src={foodPic} className="w-full h-52 rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase">Hot Dog</h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur, eaque incidunt rem quia assumenda modi
      voluptate qui officia voluptates natus alias cumque culpa!
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <p className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <span className="text-lg">
        <StarRating rating={4.5} />
      </span>
      <span className="ml-2 font-medium">12 reviews</span>
    </p>
    <ButtonSm>Add to Cart</ButtonSm>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md">
    <img src={foodPic} className="w-full h-52 rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase">Hot Dog</h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur, eaque incidunt rem quia assumenda modi
      voluptate qui officia voluptates natus alias cumque culpa!
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <p className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <span className="text-lg">
        <StarRating rating={4.5} />
      </span>
      <span className="ml-2 font-medium">12 reviews</span>
    </p>
    <ButtonSm>Add to Cart</ButtonSm>
  </div>,

  <div className="mr-4 p-3 bg-white rounded-md">
    <img src={foodPic} className="w-full h-52 rounded-md" alt="food" />
    <h3 className="text-xl font-semibold my-2 uppercase">Hot Dog</h3>
    <p className="my-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et vel
      ea iure officiis hic consequuntur, eaque incidunt rem quia assumenda modi
      voluptate qui officia voluptates natus alias cumque culpa!
    </p>
    <p className="my-2 font-semibold">Price: $3300</p>
    <p className="my-2 font-semibold flex items-center">
      <span className="mr-2">Rating:</span>{" "}
      <span className="text-lg">
        <StarRating rating={4.5} />
      </span>
      <span className="ml-2 font-medium">12 reviews</span>
    </p>
    <ButtonSm>Add to Cart</ButtonSm>
  </div>,
];

export const TopRatedCarousel = () => (
  <div className="my-10">
    <h2 className="text-3xl font-extrabold uppercase my-4">Top Rated Food</h2>
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay={true}
      autoPlayInterval={1000}
      infinite={true}
    />
  </div>
);
