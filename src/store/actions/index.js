import {
  CREATE_USER_STARTED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  FETCH_ALL_USERS_STARTED,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DELETE_STARTED,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  BLOCK_STARTED,
  BLOCK_SUCCESS,
  BLOCK_FAILURE,
  UNBLOCK_STARTED,
  UNBLOCK_SUCCESS,
  UNBLOCK_FAILURE,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  USER_BLOCKED,
} from "../actionTypes";

export const createUserStarted = () => ({ type: CREATE_USER_STARTED });
export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  user,
});
export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  error,
});

export const loginStarted = () => ({ type: LOGIN_STARTED });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });
export const userBlocked = () => ({ type: USER_BLOCKED });

export const fetchUserStarted = () => ({ type: FETCH_USER_STARTED });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, user });
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  error,
});

export const fetchAllUsersStarted = () => ({
  type: FETCH_ALL_USERS_STARTED,
});
export const fetchAllUsersSuccess = (users) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  users,
});
export const fetchAllUsersFailure = (error) => ({
  type: FETCH_ALL_USERS_FAILURE,
  error,
});

export const deleteStarted = () => ({ type: DELETE_STARTED });
export const deleteSuccess = (users) => ({ type: DELETE_SUCCESS, users });
export const deleteFailure = (error) => ({ type: DELETE_FAILURE, error });

export const blockStarted = () => ({ type: BLOCK_STARTED });
export const blockSuccess = (users) => ({ type: BLOCK_SUCCESS, users });
export const blockFailure = (error) => ({ type: BLOCK_FAILURE, error });

export const unblockStarted = () => ({ type: UNBLOCK_STARTED });
export const unblockSuccess = (users) => ({ type: UNBLOCK_SUCCESS, users });
export const unblockFailure = (error) => ({ type: UNBLOCK_FAILURE, error });

export const logout = () => ({ type: LOGOUT });
