import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import { selectToken } from "../../redux/features/user";
import { useGetOrdersForAdminQuery } from "../../redux/features/api/orderSlice";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} Items`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Percentage ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const OrdersPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const authToken = useSelector(selectToken);
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrdersForAdminQuery({ authToken, currentPage: 1 });
  const getData = (result) => {
    let arr = [];
    for (let order of result) {
      // loop through the past 10 orders
      for (let item of order.items) {
        // loop through the food items in a particular order
        let index = arr.findIndex((el) => el.name === item.category);
        if (index === -1) {
          arr.push({ name: item.category, value: item.quantity });
        } else {
          arr[index].value += item.quantity;
        }
      }
    }
    return arr;
  };
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center my-7">
        <Triangle width={200} height={200} color={"#22c55e"} />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={500} height={300}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={getData(data.orders)}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#16a34a"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  } else if (isError) {
    content = <div className="p-2">{error?.data?.message || error?.data}</div>;
  }
  return (
    <div className="mt-10">
      <h2 className="font-rubik text-xl tablet:text-4xl font-semibold uppercase text-center mb-2">
        Orders Breakdown
      </h2>
      <p className="mb-4">This shows the breakdown of your past 10 orders.</p>
      <div className="flex justify-center bg-white rounded-md shadow-xl sm2:text-sm">
        {content}
      </div>
    </div>
  );
};

export default OrdersPieChart;
