import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar
    className={selected ? "text-green-500" : "text-gray-400"}
    onClick={onSelect}
  />
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

export function ClickableStarRating({
  totalStars = 5,
  selectHandler = (f) => f,
  stars
}) {
  return (
    <>
      <div className="flex my-2 text-3xl">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={stars > i}
            onSelect={() => selectHandler(i + 1)}
          />
        ))}
      </div>
      <p>
        {stars} of {totalStars} stars
      </p>
    </>
  );
}
