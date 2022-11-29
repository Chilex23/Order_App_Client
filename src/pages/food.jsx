import { useParams } from "react-router-dom";
import foodPic from "../assets/images/hamburger.jpg";
import StarRating from "../components/starRating/starRating";
import { ButtonSm } from "../components/button/button";

const Food = () => {
  const { foodId } = useParams();
  return (
    <div className="w-7/12 mx-auto">
      <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
        {foodId}
      </p>
      <figure className="my-5 mx-auto">
        <img src={foodPic} alt={foodPic} className="w-full rounded-md" />
      </figure>

      <p className="text-3xl font-rubik font-bold uppercase mx-auto">
        Description
      </p>
      <p className="my-5 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis
        veniam doloribus. Numquam voluptatibus a, ipsam quis consequatur quod
        fugiat aut deserunt distinctio fugit earum, sapiente cum dolorem at
        laborum?
      </p>

      <p className="text-3xl font-rubik font-bold uppercase my-5 mx-auto">
        Price
      </p>
      <p className="my-5 mx-auto">$2000</p>
      <button className="bg-gradient-to-r from-green-400 to-green-600 block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all">
        Add to Cart
      </button>

      <p className="my-5 mx-auto flex items-center">
        <span className="text-3xl font-rubik font-bold uppercase">Reviews</span>
        <ButtonSm>Add Review</ButtonSm>
      </p>
      <div className="my-5 mx-auto flex justify-between">
        <div className="text-2xl flex">
          <StarRating rating={4.5} />
          <span className="text-xl ml-5">4.5</span>
        </div>
        <span className="text-xl">12 reviews</span>
      </div>

      <div className="my-5 mx-auto">
        <div className="p-2 border-2 border-black rounded-md">
          <div className="flex items-center">
            <span className="w-16 h-16 bg-gray-500 rounded-full">&nbsp;</span>
            <span className="ml-5 text-xl font-semibold">Sammy 24</span>
          </div>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            possimus autem eius quos, aut cupiditate hic explicabo quas incidunt
            sapiente accusamus maiores magnam enim corporis fugit voluptates
            tempore vitae dignissimos.
          </p>
          <div className="flex items-center">
            <span className="text-lg font-semibold mr-4">Rating:</span>
            <StarRating rating={4.5} />
            <span className="ml-2">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
