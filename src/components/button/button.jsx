import React from "react";

export const HoverButton = ({ children, clickHandler = () => {} }) => (
  <button
    onClick={clickHandler}
    className="bg-gradient-to-r from-green-400 to-green-600 py-2 px-3 rounded-lg text-white hover:shadow-lg hover:scale-105 transition-all"
  >
    {children}
  </button>
);

export const ButtonSm = ({ children, clickHandler = () => {} }) => (
  <button
    onClick={clickHandler}
    className="bg-gradient-to-r from-green-400 to-green-600 mx-auto block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all"
  >
    {children}
  </button>
);

export const ButtonMd = ({ children, clickHandler = () => {} }) => (
  <button
    onClick={clickHandler}
    className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 block my-5 text-white uppercase rounded-md text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
  >
    {children}
  </button>
);
