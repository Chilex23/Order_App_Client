import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Triangle } from "react-loader-spinner";
import { useGetFoodQuery } from "../redux/features/api/apiSlice";
import { FoodDetails } from "../components/foodDetails";

const Food = () => {
  const { foodId } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetFoodQuery(foodId);
  window.scrollTo(0, 0);

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center my-16">
        <Triangle color="#22c55e" height={200} width={200} />
      </div>
    );
  } else if (isSuccess) {
    content = <FoodDetails foodDetails={data} foodId={foodId} />;
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center my-2 h-40 text-3xl font-semibold">
        {error?.data?.message || error?.data}
      </div>
    );
  }
  return (
    <div className="w-7/12 mr-auto mb-24">
      {content}
      <ToastContainer />
    </div>
  );
};

export default Food;