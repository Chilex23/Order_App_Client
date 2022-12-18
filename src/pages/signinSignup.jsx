import { ToastContainer } from "react-toastify";
import SignIn from "../components/signIn/signIn";
import SignUp from "../components/signUp/signup";

const SignInSignUp = () => (
  <div className="mb-32 flex justify-between w-fit mx-auto">
    <SignIn />
    <SignUp />
    <ToastContainer />
  </div>
)
export default SignInSignUp;
