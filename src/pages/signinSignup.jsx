import { SignIn } from "../components/signIn";
import SignUp from "../components/signUp/signup";

const SignInSignUp = () => {
  window.scrollTo(0, 0);
  return (
    <div className="mb-32 flex justify-between w-fit mx-auto">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInSignUp;
