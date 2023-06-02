import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignUpUserMutation } from "../../redux/features/api/authSice";
import { notify } from "../../utils/notify";
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
  const navigate = useNavigate();
  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const { name, username, password, email, confirmPassword } = userCredentials;
  const canSave = [username, password, email].every(Boolean) && !isLoading;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      notify("error", "Passwords don't match!");
      return;
    }
    if (canSave) {
      const userBody = {
        name,
        username,
        email,
        password,
      };
      try {
        await toast.promise(signUpUser(userBody).unwrap(), {
          pending: "Signing up user...",
          success: {
            render({ data }) {
              return "Log in in with your credentials";
            },
          },
          error: {
            render({ data }) {
              return data.data.message;
            },
          },
        });
        setUserCredentials({
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } catch (err) {
        notify("error", err);
      }
    } else {
      notify("error", "Please fill all fields");
    }
  };
  return (
    <div className="">
      <h2 className="text-xl sm:text-2xl font-extrabold">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="name"
          type="text"
          label="Name"
          value={name}
        />
        <FormInput
          handleChange={handleChange}
          name="username"
          type="text"
          label="Username"
          value={username}
        />
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <FormInput
          handleChange={handleChange}
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
        />
        {!isLoading ? <ButtonMd>Sign Up</ButtonMd> : null}
      </form>
    </div>
  );
};

export default SignUp;
