import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../api";

import styles from "./Login.module.css";
import { logout } from "../../store/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userData);

  useEffect(() => {
    if (state.user && Object.keys(state.user).length > 0) {
      navigate("/home");
    }
  }, [state.user, navigate]);

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(loginUser(email, password));
    setEmail("");
    setPassword("");
  }

  function navigationHandler() {
    dispatch(logout());
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {state.loading && <p>Loading...</p>}
      {state.error && <p className={styles.error}>Wrong credentials</p>}
      {state.blocked && (
        <p className={styles.error}>
          Your account is blocked. Please authenticate!
        </p>
      )}
      <p>
        Do you not have an account?{" "}
        <Link onClick={navigationHandler} to="/">
          Authentication
        </Link>
      </p>
    </div>
  );
}

export default Login;
