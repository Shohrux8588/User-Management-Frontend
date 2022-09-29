import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import usersReducer from "./reducers/usersReducer";

const allReducers = combineReducers({
  userData: userReducer,
  users: usersReducer,
});

export default allReducers;
