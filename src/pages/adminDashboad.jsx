import React from "react";
import { DashboardHeader } from "../components/dashboardHeader";
import { AddFood } from "../components/addFood";
import { Orders } from "../components/orders";
import { Food } from "../components/food";
import { Category } from "../components/category";
import { OrdersBarChart } from "../components/ordersBarChart";

const AdminDashboard = () => {
  window.scrollTo(0, 0);
  return (
    <section className="w-[95%] mx-auto mb-16">
      <DashboardHeader />
      <AddFood />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 pb-10">
        <Orders />
        <Food />
        <Category />
      </div>
      <OrdersBarChart />
    </section>
  );
};

export default AdminDashboard;
