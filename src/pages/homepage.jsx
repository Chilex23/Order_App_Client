import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment } from "../redux/features/counter";
import foodPic from "../assets/images/dronesnow.jpg";

const HomePage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-4">
        <img
          src={foodPic}
          className="w-[80%] h-[25rem] overflow-clip rounded-md absolute"
        />
        <div className="bg-gradient-to-r from-green-500 to-transparent h-[25rem] my-4 relative inset-0 pt-10 pl-10 rounded-md">
          <div className="w-[45%] text-white">
            <h1 className="text-3xl font-extrabold mb-7">
              Home Of Great Food!!!
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad porro
              quis excepturi ipsum quia rerum dolorem, ea quas maxime
              consequuntur recusandae, voluptatem cumque perspiciatis
              accusantium commodi, in odio! Quod, eveniet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
