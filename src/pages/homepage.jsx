import React from "react";
import { Hero } from "../components/hero";
import { TopRatedCarousel } from "../components/homePageFood/topRated";
import TopRatedPizzaCarousel from "../components/homePageFood/pizzaRated";
import TopRatedMealCarousel from "../components/homePageFood/topMeal";
import TopRatedSnacksCarousel from "../components/homePageFood/topSnacks";

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="w-[95%] mx-auto mb-24">
      <Hero />
      <TopRatedCarousel />
      <TopRatedPizzaCarousel />
      <TopRatedMealCarousel />
      <TopRatedSnacksCarousel />
    </div>
  );
};
export default HomePage;
