import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/authSlice";
import { request } from "../../util/fetchAPI";
import classes from "./signin.module.css";
import toast from "react-hot-toast";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setEmptyFields(true);
      setTimeout(() => {
        setEmptyFields(false);
      }, 2500);
    }

    try {
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request("/auth/login", "POST", options, {
        email,
        password,
      });
      if (data.success) {
        toast.success(data.message);
      }
      dispatch(login(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      console.error(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign in</h2>
        <form className={classes.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </form>
        {error && (
          <div className={classes.error}>
            There was an error signing in! Wrong credentials or server error
          </div>
        )}
        {emptyFields && <div className={classes.error}>Fill all fields!</div>}
      </div>
    </div>
  );
};

export default Signin;
