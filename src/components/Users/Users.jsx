import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  blockUsers,
  unblockUsers,
  deleteUsers,
  fetchAllUsers,
} from "../../api/index.js";

import User from "./User/User.jsx";
import styles from "./Users.module.css";

function Users() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state.users;
  const users = data.users;

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const blockHandler = () => {
    dispatch(blockUsers(checkedCheckboxes));
    setCheckedCheckboxes([]);
    setAllChecked(false);
  };

  const unblockHandler = () => {
    dispatch(unblockUsers(checkedCheckboxes));
    setCheckedCheckboxes([]);
    setAllChecked(false);
  };

  const deleteHandler = () => {
    dispatch(deleteUsers(checkedCheckboxes));
    setCheckedCheckboxes([]);
    setAllChecked(false);
  };

  return (
    <div className={styles.container}>
      <h1>All Users</h1>
      <div className={styles.buttonsContainer}>
        <label htmlFor="buttons">
          <input
            type="checkbox"
            id="buttons"
            name="buttons"
            value="buttons"
            checked={allChecked}
            onChange={() => setAllChecked((allChecked) => !allChecked)}
          />
          Select all
        </label>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <ArchiveIcon
              fontSize="large"
              onClick={blockHandler}
              color={data.loading ? "disabled" : "error"}
            />
            <p>BLOCK</p>
          </div>
          <div className={styles.button}>
            <UnarchiveIcon
              fontSize="large"
              onClick={unblockHandler}
              color={data.loading ? "disabled" : ""}
            />
            <p>UNBLOCK</p>
          </div>
          <div className={styles.button}>
            <DeleteIcon
              fontSize="large"
              onClick={deleteHandler}
              color={data.loading ? "disabled" : ""}
            />
            <p>DELETE</p>
          </div>
        </div>
      </div>

      {data.userActionLoading && <p>Loading...</p>}
      <ul>
        {users &&
          users.map((user) => (
            <User
              key={user._id}
              id={user._id}
              name={user.name}
              status={user.status}
              allChecked={allChecked}
              checkedCheckboxes={checkedCheckboxes}
              setCheckedCheckboxes={setCheckedCheckboxes}
            />
          ))}
      </ul>
      {data.loading && <p>Loading...</p>}
      {data.error && <p className={styles.error}>Something went wrong</p>}
    </div>
  );
}

export default Users;
