import React from "react";
import { useSelector } from "react-redux";
import { selectWidth } from "../../redux/features/screenWidth";

const AppLayout = ({ children }) => {
  const width = useSelector(selectWidth);
  return <main className={width > 700 ? "ml-[14rem] mt-5" : "ml-5 mt-6"}>{children}</main>;
};

export default AppLayout;
