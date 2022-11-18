import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Orders = () => {
  const [filter, setFilter] = useState("undelivered");
  console.log(filter);
  return (
    <div className="border-gray-400 border-[1px] p-3 rounded-md shadow-2xl">
      <div className="text-lg font-bold">
        <span className="w-2 bg-red-500 mr-2">&nbsp;</span>
        <span>Orders</span>
      </div>
      <div className="flex justify-between items-center my-2">
        <Menu
          menuButton={
            <MenuButton className="border-[1px] border-gray-400 rounded-md px-4 py-2 font-medium">
              Filter
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
      <table className="w-full text-sm">
        <thead className="border-2 border-black bg-stone-700 text-white">
          <tr>
            <th className="border-2 border-black px-1">ID</th>
            <th className="border-2 border-black px-1">Amount</th>
            <th className="border-2 border-black px-1">Order Date</th>
          </tr>
        </thead>
        <tbody className="border-2 border-black">
          <tr>
            <td className="border-2 border-black pl-2">sfrw977-s90lo-uidack</td>
            <td className="pl-2 border-2 border-black">$4,000</td>
            <td className="pl-2 border-2 border-black">22nd, October, 2022</td>
          </tr>
          <tr>
            <td className="border-2 border-black pl-2">sfrw977-s90lo-uidack</td>
            <td className="pl-2 border-2 border-black">$2,000</td>
            <td className="pl-2 border-2 border-black">22nd, October, 2022</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-orange-500 mx-auto block rounded-md px-3 py-2 text-white my-4">
        More Orders
      </button>
    </div>
  );
};

export default Orders;
