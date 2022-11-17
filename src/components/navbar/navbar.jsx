import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWidth, setWidth } from "../../redux/features/screenWidth";
import BottomNav from "./bottomNav";
import SideBar from "./sidebar";

const NavBar = () => {
  const width = useSelector(selectWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(setWidth(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
  });
  return <>{width > 700 ? <SideBar /> : <BottomNav />}</>;
};

export default NavBar;
