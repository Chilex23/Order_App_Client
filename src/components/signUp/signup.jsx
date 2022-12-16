import { useState } from "react";
import FormInput from "../formInput/formInput";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="">
      <h2 className="text-2xl font-extrabold">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput
          handleChange={handleChange}
          name="name"
          type="text"
          label="Name"
        />
        <FormInput
          handleChange={handleChange}
          name="username"
          type="text"
          label="Username"
        />
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="E-mail"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="Password"
        />
        <FormInput
          handleChange={handleChange}
          name="confirmPassword"
          type="password"
          label="Confirm Password"
        />
        <button className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 block my-5 text-white uppercase rounded-md text-lg font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
