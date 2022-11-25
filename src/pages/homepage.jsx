import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment } from "../redux/features/counter";
import Hero from "../components/hero/hero";
import { TopRatedCarousel } from "../components/homePageFood/topRated";
import TopRatedPizzaCarousel from "../components/homePageFood/pizzaRated";
import TopRatedMealCarousel from "../components/homePageFood/topMeal";
import TopRatedSnacksCarousel from "../components/homePageFood/topSnacks";

const HomePage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="w-[95%] mx-auto">
      <Hero />
      <div>
        <TopRatedCarousel />
        <TopRatedPizzaCarousel />
        <TopRatedMealCarousel />
        <TopRatedSnacksCarousel />
      </div>
    </div>
  );
};
export default HomePage;
