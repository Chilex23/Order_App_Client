import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import { selectToken } from "../redux/features/user";
import { BaseSkeleton } from "../components/baseSkeleton";
import { ButtonSm } from "../components/button";
import customStyles from "../utils/customStyles";
import { formatDate } from "../utils/formatDate";
import { formatNumber } from "../utils/formatNumber";
import { useGetOrdersForAdminQuery } from "../redux/features/api/orderSlice";

const OrdersPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const authToken = useSelector(selectToken);
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery({ authToken, currentPage });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    uuid: "",
    total_price: 0,
    order_date: "",
    items: [],
    state: "",
  });
  const selectPage = (page) => {
    setCurrentPage(page);
  };
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
  const { uuid, total_price, order_date, items, state } = modalDetails;
  let content;
  if (isLoading) {
    content = (
      <div className="mb-8 bg-white w-[95%] mx-auto p-3">
        {" "}
        <BaseSkeleton variant="dashboard" />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <table className="w-[90%] mx-auto border-[1px] border-black bg-white shadow-lg">
          <thead>
            <tr className="bg-black text-white uppercase">
              <th className="border-[1px] border-gray-400 p-1">ID</th>
              <th className="border-[1px] border-gray-400">Amount Spent</th>
              <th className="border-[1px] border-gray-400">Order Date</th>
              <th className="border-[1px] border-gray-400">Delivery State</th>
            </tr>
          </thead>
          <tbody>
            {data?.orders.map(
              ({ _id, uuid, total_price, order_date, items, state }) => (
                <tr
                  key={_id}
                  className="cursor-pointer hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white transition"
                  onClick={() =>
                    openModal(uuid, total_price, order_date, items, state)
                  }
                >
                  <td className="border-[1px] border-black text-center p-1">
                    {uuid}
                  </td>
                  <td className="border-[1px] border-black text-center">
                    ${formatNumber(total_price)}
                  </td>
                  <td className="border-[1px] border-black text-center">
                    {formatDate(order_date)}
                  </td>
                  <td className="border-[1px] border-black text-center">
                    {state === 0 ? "Pending" : "Delivered"}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="my-10 mx-auto border-2 border-black w-fit px-2 flex justify-between gap-x-2 text-lg rounded-md shadow-lg">
          {new Array(data?.totalPages).fill(1).map((el, i) => (
            <span
              key={i}
              className={`px-2 cursor-pointer ${
                currentPage === i + 1 ? "bg-green-500" : ""
              }`}
              onClick={() => selectPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </>
    );
  } else if (isError) {
    content = <div>{error?.data?.message || error?.data}</div>;
  }
  return (
    <div className="mb-[9rem]">
      <h1 className="text-5xl text-center font-bold font-rubik uppercase my-5">
        Orders
      </h1>
      <p className="text-center mb-2">Click on a row to view more details.</p>
      {content}
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

          <table className="w-full">
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

export default OrdersPage;
