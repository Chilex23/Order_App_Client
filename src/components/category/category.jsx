import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  useGetCategoriesQuery,
  useAddCategoryMutation,
} from "../../redux/features/api/apiSlice";
import FormInput from "../formInput/formInput";
import { BaseSkeleton } from "../baseSkeleton";
import { selectToken, selectUserRole } from "../../redux/features/user";
import foodPic from "../../assets/images/pizza.jpg";
import drinkPic from "../../assets/images/drinks.jpg";
import snackPic from "../../assets/images/hamburger.jpg";
import { notify } from "../../utils/notify";
import customStyles from "../../utils/customStyles";
import { ButtonSm } from "../button/button";

export const getCategoryPicture = (title) => {
  let pic;
  switch (title) {
    case "Pizzas":
      pic = foodPic;
      break;
    case "Drinks":
      pic = drinkPic;
      break;
    case "Snacks":
      pic = snackPic;
      break;
    default:
      pic = foodPic;
  }
  return pic;
};

const Category = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();
  const authToken = useSelector(selectToken);
  const userRole = useSelector(selectUserRole);
  const [addCategory, { isLoading: loading }] = useAddCategoryMutation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({
    type: "",
    token: authToken,
  });
  const { type } = categoryDetails;
  const canSave = type && !loading;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (canSave) {
      try {
        await toast.promise(addCategory(categoryDetails).unwrap(), {
          pending: "Adding Category",
          success: "Category Added Successfully",
          error: {
            render({ data }) {
              return data.data.message;
            },
          },
        });
        setCategoryDetails({
          type: "",
        });
      } catch (e) {
        notify("error", e.data.message);
      }
      closeModal();
    } else {
      notify("error", "Please fill all fields");
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCategoryDetails({ ...categoryDetails, [name]: value });
  };

  let content;
  if (isLoading) {
    content = <BaseSkeleton variant="dashboard" />;
  } else if (isSuccess) {
    content = (
      <div className="mt-4 mb-24">
        {data?.categories.map(({ type: categoryType, _id }) => (
          <Link
            to={`/category/${categoryType}`}
            className="flex items-center mb-4 bg-gray-200 p-2 rounded-lg sm2:text-sm"
            key={_id}
          >
            <img
              src={getCategoryPicture(categoryType)}
              className="w-12 h-12 rounded-full mr-8"
            />
            <span>{categoryType}</span>
          </Link>
        ))}
      </div>
    );
  } else if (isError) {
    content = <div>{error?.data?.message || error?.data}</div>;
  }
  return (
    <div className="shadow-2xl p-3 rounded-md bg-white relative">
      <div className="flex justify-between items-center mb-5">
        <p className="text-lg font-bold">
          <span className="w-2 bg-blue-500 mr-2 rounded-md">&nbsp;</span>
          Categories
        </p>
        {userRole === "Admin" ? (
          <button onClick={openModal} className="text-gray-500">
            + New Category
          </button>
        ) : null}
      </div>
      {content}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Add Food Modal"
      >
        <div className="flex justify-end">
          <IoCloseSharp
            onClick={closeModal}
            className="text-3xl cursor-pointer bg-stone-800 text-white rounded-full"
          />
        </div>
        <h1 className="text-center uppercase font-bold">Add Category</h1>
        <form method="post" onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            name="type"
            type="text"
            label="Category Type"
            value={type}
          />
          <button className="bg-gradient-to-r from-green-400 to-green-600 mx-auto px-4 py-1 block my-5 text-white uppercase rounded-md text-lg">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Category;
