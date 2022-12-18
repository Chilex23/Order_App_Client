import { useState } from "react";
import FormInput from "../formInput/formInput";
import { ButtonMd } from "../button/button";

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  };
  return (
    <div className="">
      <h2 className="text-2xl font-extrabold">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonMd>Sign Up</ButtonMd>
      </form>
    </div>
  );
};

export default SignUp;
