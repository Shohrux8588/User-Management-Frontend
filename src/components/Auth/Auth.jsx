import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { authUser } from "../../api";

import styles from "./Auth.module.css";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    if (Object.keys(userData.user).length > 0) {
      navigate("/home");
    }
  }, [userData.user, navigate]);

  function submitHandler(e) {
    e.preventDefault();
    if (name && email && password) {
      dispatch(authUser(name, email, password));
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Authentication</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
      {userData.loading && <p>Loading...</p>}
      {userData.error && <p className={styles.error}>Something went wrong</p>}
      <p>
        Do you have an account? <Link to="login">Login</Link>
      </p>
    </div>
  );
}

export default Auth;
