import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInUser } from "../../redux/features/user";
import { useLoginUserMutation } from "../../redux/features/api/authSice";
import { notify } from "../../utils/notify";
import { FormInput } from "../formInput";
import { ButtonMd } from "../button";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { username, password } = userCredentials;
  const canSave = [username, password].every(Boolean) && !isLoading;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (canSave) {
      try {
        let res = await toast.promise(loginUser(userCredentials).unwrap(), {
          pending: "Logging in...",
          success: "Logged in successfully",
          error: {
            render({ data }) {
              return data.data.message;
            },
          },
        })
        const user = {
          username: res.username,
          name: res.name,
          token: res.token,
        };
        dispatch(signInUser(user));
        setUserCredentials({ username: "", password: "" });
        navigate("/");
      } catch (err) {
        notify("error", err);
      }
    } else {
      notify("error", "Please Fill all fields");
    }
  };
  return (
    <div className="mr-24">
      <h2 className="text-2xl font-extrabold">I already have an account</h2>
      <span>Sign in with your username and password</span>
      <form onSubmit={handleSubmit}>
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
        {!isLoading ? <ButtonMd>Log In</ButtonMd> : null}
      </form>
    </div>
  );
};

export default SignIn;
