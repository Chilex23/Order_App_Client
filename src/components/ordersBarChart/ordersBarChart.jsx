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
import { Triangle } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useGetOrdersForAdminQuery } from "../../redux/features/api/orderSlice";
import { selectToken } from "../../redux/features/user";
import { formatDate } from "../../utils/formatDate";

const OrdersBarChart = () => {
  const authToken = useSelector(selectToken);
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery({ authToken, currentPage: 1 });
  const getData = (result) =>
    result.map(({ order_date, total_price }) => ({
      name: formatDate(order_date),
      amount: total_price,
    }));
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center bg-white py-7 rounded-md shadow-lg">
        <Triangle width={200} height={200} color={"#22c55e"} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="bg-white rounded-md shadow-xl sm2:text-xs">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            width={1000}
            height={350}
            data={getData(data.orders)}
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
        </ResponsiveContainer>
      </div>
    );
  } else if (isError) {
    content = <div className="bg-white rounded-md shadow-lg text-center p-2">{error?.data?.message || error?.data}</div>;
  }

  return (
    <>
      <h2 className="font-rubik text-xl tablet:text-4xl font-semibold uppercase text-center mb-2">
        Past Orders made
      </h2>
      <p className="mb-4">This shows your past 10 placed orders.</p>
      {content}
    </>
  );
};

export default OrdersBarChart;
