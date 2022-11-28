import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import { FaFilter } from "react-icons/fa";
import { Audio } from "react-loader-spinner";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ButtonSm } from "../button/button";
import { useGetOrdersForAdminQuery } from "../../redux/features/api/apiSlice";

const Orders = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery();
  const [filter, setFilter] = useState("undelivered");
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <Audio color="#22c55e" height={80} width={80} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="flex flex-col gap-2 mb-16">
        {data.orders.slice(0, 5).map((el) => (
          <div
            className="flex flex-col border-black border-2 p-1 rounded-md"
            key={el._id}
          >
            <p className="text-sm">
              <span className="font-bold">ID:</span> {el.uuid}
            </p>
            <p className="text-sm">
              <span className="font-bold">Price:</span> ${el.total_price}
            </p>
            <p className="text-sm">
              <span className="font-bold">Date:</span> {el.order_date}
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
              <FaFilter className="mr-2" /> Filter
            </MenuButton>
          }
        >
          <MenuRadioGroup
            value={filter}
            onRadioChange={(e) => setFilter(e.value)}
          >
            <MenuItem type="radio" value="undelivered">
              Not Delivered
            </MenuItem>
            <MenuItem type="radio" value="delivered">
              Delivered
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
