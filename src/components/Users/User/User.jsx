import React, { useState, useEffect } from "react";

import styles from "./User.module.css";

function User({
  id,
  name,
  status,
  allChecked,
  checkedCheckboxes,
  setCheckedCheckboxes,
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(allChecked);
  }, [allChecked]);

  useEffect(() => {
    if (checked) {
      setCheckedCheckboxes((state) => [...state, id]);
    } else {
      setCheckedCheckboxes((state) =>
        state.filter((checked) => checked !== id)
      );
    }
  }, [checked, id, setCheckedCheckboxes]);

  useEffect(() => {
    if (checkedCheckboxes.length === 0) {
      setChecked(false);
    }
  }, [checkedCheckboxes]);
  return (
    <li className={status ? "" : styles.blocked}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />

      <label htmlFor={id}>
        {name} <span>{status ? "active" : "blocked"}</span>
      </label>
    </li>
  );
}

export default User;
