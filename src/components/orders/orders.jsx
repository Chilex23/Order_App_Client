import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ButtonSm } from "../button/button";
import { BaseSkeleton } from "../baseSkeleton";
import { selectOrdersData } from "../../redux/features/api/orderSlice";
import { selectToken } from "../../redux/features/user";
import customStyles from "../../utils/customStyles";
import { formatDate } from "../../utils/formatDate";
import { formatNumber } from "../../utils/formatNumber";
import { useGetOrdersForAdminQuery } from "../../redux/features/api/orderSlice";

const Orders = () => {
  const authToken = useSelector(selectToken);
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery({ authToken, currentPage: 1 });
  const ordersSortedByPrice = (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.total_price - a.total_price);
  };
  const ordersSortedByDate = (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.order_date - a.order_date);
  };
  const orderResults = useSelector(selectOrdersData);
  const [orderData, setOrderData] = useState(orderResults);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    uuid: "",
    total_price: 0,
    order_date: "",
    items: [],
    state: "",
  });
  const [filter, setFilter] = useState("");
  const openModal = (uuid, total_price, order_date, items, state) => {
    setIsOpen(true);
    setModalDetails({
      uuid,
      total_price,
      order_date,
      items,
      state,
    });
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const sortFood = (type) => {
    if (type === "price") {
      setOrderData(ordersSortedByPrice(data?.orders));
    } else {
      setOrderData(ordersSortedByDate(data?.orders));
    }
    setFilter(type);
  };
  let content;
  if (isLoading) {
    content = <BaseSkeleton variant="dashboard" />;
  } else if (isSuccess) {
    let arr = orderData.length <= 0 ? data?.orders : orderData;
    content = (
      <div className="flex flex-col gap-2 mb-16">
        {arr
          .slice(0, 5)
          .map(({ _id, uuid, total_price, order_date, items, state }) => (
            <div
              className="flex flex-col border-gray-300 border-2 p-1 rounded-md cursor-pointer hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white transition"
              key={_id}
              onClick={() =>
                openModal(uuid, total_price, order_date, items, state)
              }
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

  const { uuid, total_price, order_date, items, state } = modalDetails;
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white relative">
      <div className="text-lg font-bold">
        <span className="w-2 bg-red-500 mr-2 rounded-md">&nbsp;</span>
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
      {!isLoading ? (
        <Link to="/orders" className="absolute bottom-0 w-full">
          <ButtonSm>More Orders</ButtonSm>
        </Link>
      ) : null}

      {/* Markup for the order details modal pop-up. */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Add Food Modal"
      >
        <div className="flex justify-end mb-2">
          <IoCloseSharp
            onClick={closeModal}
            className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full"
          />
        </div>

        <div className="w-[26rem] sm2:w-[17rem]">
          <h1 className="text-center uppercase font-bold text-xl sm2:text-xl font-rubik mb-3">
            Order Details
          </h1>
          <p className="mb-2">
            <span className="font-bold mr-2">ID:</span>
            {uuid}
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Total Amount Spent:</span>$
            {formatNumber(total_price)}
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Order Date:</span>
            {formatDate(order_date)}
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Delivery State:</span>
            {state == 0 ? "Pending" : "Delivered"}
          </p>
          {state === 0 ? <ButtonSm>Mark as Delivered</ButtonSm> : null}
          <h2 className="text-center uppercase font-bold text-xl sm2:text-xl font-rubik mb-3">
            Food Items
          </h2>

          <table className="w-full border-[1px] border-gray-400">
            <thead>
              <tr className="bg-black text-white">
                <th className="border-[1px] border-gray-400">Name</th>
                <th className="border-[1px] border-gray-400">Quantity</th>
                <th className="border-[1px] border-gray-400">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ name, price, quantity }) => (
                <tr key={name} className="text-center">
                  <td className="border-[1px] border-gray-400">{name}</td>
                  <td className="border-[1px] border-gray-400">{quantity}</td>
                  <td className="border-[1px] border-gray-400">
                    {formatNumber(price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
