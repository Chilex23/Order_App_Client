import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { notify } from "../utils/notify";
import { SignIn } from "../components/signIn";
import SignUp from "../components/signUp/signup";

const SignInSignUp = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state !== "") {
      notify("success", location.state);
    }
  }, []);

  return (
    <div className="mb-32 flex flex-col myXl:flex-row justify-between w-fit mx-auto">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInSignUp;
