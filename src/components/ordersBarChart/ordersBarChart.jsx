import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { selectOrdersForCharts } from "../../redux/features/api/orderSlice";

const OrdersBarChart = () => {
  const data = useSelector(selectOrdersForCharts);
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <>
      <h2 className="font-rubik text-4xl font-semibold uppercase text-center mb-6">
        Past Orders made
      </h2>
      <BarChart
        width={1000}
        height={350}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#16a34a" />
      </BarChart>
    </>
    // </ResponsiveContainer>
  );
};

export default OrdersBarChart;
