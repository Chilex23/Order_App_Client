import React from "react";
import foodPic from "../../assets/images/foodBanner.jpg";
import gif from "../../assets/images/Hamburger.gif";
import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";

const Hero = () => {
  const width = useSelector(selectWidth);
  return (
    <div
      className="min-h-[25rem] py-10 pl-5 rounded-md flex"
      style={{
        backgroundImage: `linear-gradient(${
          width > 600 ? "to right" : "to bottom"
        }, #1ba94f, transparent), url(${foodPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:w-[50%] text-white">
        <h1 className="text-3xl font-extrabold mb-7 font-rubik">Home Of Great Food!!!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad porro
          quis excepturi ipsum quia rerum dolorem, ea quas maxime consequuntur
          recusandae, voluptatem cumque perspiciatis accusantium commodi, in
          odio! Quod, eveniet.
        </p>
      </div>
      <img src={gif} alt="Hamburger" className="w-[20rem] h-[20rem] ml-auto mr-5 rounded-md" />
    </div>
  );
};

export default Hero;
