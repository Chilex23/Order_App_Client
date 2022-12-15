import { toast } from "react-toastify";

export const notify = (type, message) => {
  if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  } else if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
