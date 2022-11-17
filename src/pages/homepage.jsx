import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment } from "../redux/features/counter";

const HomePage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <p className="font-extrabold text-5xl">Chima</p>
      <p className="my-5 text-4xl font-bold">{count}</p>
      <button
        className="bg-blue-400 px-4 py-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </>
  );
};

export default HomePage;
