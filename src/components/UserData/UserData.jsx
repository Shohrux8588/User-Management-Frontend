import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchUser } from "../../api";

import styles from "./UserData.module.css";

function UserData() {
  const user = useSelector((state) => state.userData.user);
  const userData = useSelector((state) => state.userData);
  const userActionLoading = useSelector(
    (state) => state.users.userActionLoading
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userActionLoading) {
      dispatch(fetchUser(user._id));
    }
  }, [userActionLoading, dispatch, ]);

  useEffect(() => {
    if (Object.keys(user).length < 1 && !userData.loading) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className={styles.container}>
      <h1>{user.name}'s data</h1>
      <ul>
        <li>
          <span>ID:</span>
          {user._id}
        </li>
        <li>
          <span>Name:</span>
          {user.name}
        </li>
        <li>
          <span>Email:</span>
          {user.email}
        </li>
        <li>
          <span>Last login at:</span>
          {new Date(user.lastLoginTime).toLocaleString("ru-Ru", {
            timeZone: "GMT",
          })}
        </li>
        <li>
          <span>Registration time:</span>
          {new Date(user.registrationTime).toLocaleString("ru-Ru", {
            timeZone: "GMT",
          })}
        </li>
        <li>
          <span>Status:</span>
          {user.status ? "Active" : "Blocked"}
        </li>
      </ul>
    </div>
  );
}

export default UserData;
