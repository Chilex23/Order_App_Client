import React from "react";

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <div className="flex flex-col my-2">
    <label>{label}</label>
    <input
      {...otherprops}
      className="border-[1px] border-gray-500 sm2:w-[16rem] w-[24rem] h-10 p-2 rounded-md"
      onChange={handleChange}
    />
  </div>
);

export default FormInput;
