import React from "react";

export const HoverButton = ({ children, clickHandler = () => {} }) => (
  <button
    onClick={clickHandler}
    className="bg-green-500 py-2 px-3 rounded-lg text-white hover:shadow-lg hover:scale-105 transition-all"
  >
    {children}
  </button>
);

export const ButtonSm = ({ children, clickHandler = () => {} }) => (
  <button
    onClick={clickHandler}
    className="bg-green-500 mx-auto block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
  >
    {children}
  </button>
);
