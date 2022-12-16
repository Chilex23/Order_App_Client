import { useState } from "react";
import FormInput from "../formInput/formInput";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="mr-24">
      <h2 className="text-2xl font-extrabold">I already have an account</h2>
      <span>Sign in with your username and password</span>
      <form>
        <FormInput
          handleChange={handleChange}
          name="username"
          type="text"
          label="Username"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="Password"
        />
        <button className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 block my-5 text-white uppercase rounded-md text-lg font-semibold">
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
