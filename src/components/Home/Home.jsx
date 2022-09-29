import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import UserData from "../UserData/UserData.jsx";
import Users from "../Users/Users.jsx";
import { logout } from "../../store/actions/index.js";

import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Awesome website</h1>
        <Link onClick={logoutHandler} to="/login">
          Logout
        </Link>
      </div>
      <div className={styles.container}>
        <UserData />
        <Users />
      </div>
    </div>
  );
}

export default Home;
