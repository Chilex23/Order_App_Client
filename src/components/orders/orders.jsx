import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import { FaFilter } from "react-icons/fa";
import { Triangle } from "react-loader-spinner";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ButtonSm } from "../button/button";
import { selectOrdersData, selectOrdersSortedByAmount, selectOrdersSortedByDate } from "../../redux/features/api/orderSlice";
import { formatDate } from "../../utils/formatDate";
import { formatNumber } from "../../utils/formatNumber";
import { useGetOrdersForAdminQuery } from "../../redux/features/api/orderSlice";

const Orders = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery();
  const ordersSortedByPrice = useSelector(selectOrdersSortedByAmount);
  const ordersSortedByDate = useSelector(selectOrdersSortedByDate);
  const orderResults = useSelector(selectOrdersData);
  const [orderData, setOrderData] = useState(orderResults);
  const [filter, setFilter] = useState("");
  const sortFood = (type) => {
    if (type === "price") {
      setOrderData(ordersSortedByPrice);
    } else {
      setOrderData(ordersSortedByDate);
    }
    setFilter(type);
  };
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center my-2">
        <Triangle color="#22c55e" height={80} width={80} />
      </div>
    );
  } else if (isSuccess) {
    let arr = orderData.length <= 0 ?  data?.orders : orderData
    content = (
      <div className="flex flex-col gap-2 mb-16">
        {arr
          .slice(0, 5)
          .map(({ _id, uuid, total_price, order_date }) => (
            <div
              className="flex flex-col border-gray-300 border-2 p-1 rounded-md"
              key={_id}
            >
              <p className="text-sm">
                <span className="font-bold mr-2">ID:</span>
                <span>{uuid}</span>
              </p>
              <p className="text-sm">
                <span className="font-bold">Price:</span>{" "}
                <span>${formatNumber(total_price)}</span>
              </p>
              <p className="text-sm">
                <span className="font-bold">Date:</span>{" "}
                <span>{formatDate(order_date)}</span>
              </p>
            </div>
          ))}
      </div>
    );
  } else if (isError) {
    content = <div>{error?.data?.message || error?.data}</div>;
  }
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white relative">
      <div className="text-lg font-bold">
        <span className="w-2 bg-red-500 mr-2">&nbsp;</span>
        <span>Orders</span>
      </div>
      <div className="flex justify-between items-center my-2">
        <Menu
          menuButton={
            <MenuButton className="border-[1px] flex items-center border-gray-400 rounded-md px-2 py-1 font-medium">
              <FaFilter className="mr-2" /> Sort
            </MenuButton>
          }
        >
          <MenuRadioGroup
            value={filter}
            onRadioChange={(e) => {
              sortFood(e.value);
              //setFilter(e.value);
            }}
          >
            <MenuItem type="radio" value="price">
              Price
            </MenuItem>
            <MenuItem type="radio" value="latest">
              Latest
            </MenuItem>
          </MenuRadioGroup>
        </Menu>
      </div>
      <span className="my-2 text-sm">
        Click on a table row to see more details
      </span>
      {content}
      <div className="absolute bottom-0 w-full">
        <ButtonSm>More Orders</ButtonSm>
      </div>
    </div>
  );
};

export default Orders;
