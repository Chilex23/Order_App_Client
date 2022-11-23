import React from "react";
import foodPic from "../../assets/images/dronesnow.jpg";
import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";

const Hero = () => {
  const width = useSelector(selectWidth);
  return (
    <div
      className="min-h-[25rem] py-10 pl-5 rounded-md"
      style={{
        backgroundImage: `linear-gradient(${
          width > 600 ? "to right" : "to bottom"
        }, #22c55e, transparent), url(${foodPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:w-[50%] text-white">
        <h1 className="text-3xl font-extrabold mb-7">Home Of Great Food!!!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad porro
          quis excepturi ipsum quia rerum dolorem, ea quas maxime consequuntur
          recusandae, voluptatem cumque perspiciatis accusantium commodi, in
          odio! Quod, eveniet.
        </p>
      </div>
    </div>
  );
};

export default Hero;
