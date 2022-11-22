import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar className={selected ? "text-green-500" : "text-gray-400"} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5, rating }) {
  rating = Math.floor(rating);
  return (
    <div className="flex">
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={rating > i} />
      ))}
    </div>
  );
}
