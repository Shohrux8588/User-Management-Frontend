import axios from "axios";
import {
  createUserStarted,
  createUserSuccess,
  createUserFailure,
  fetchAllUsersStarted,
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  loginStarted,
  loginSuccess,
  loginFailure,
  deleteStarted,
  deleteSuccess,
  deleteFailure,
  blockStarted,
  blockSuccess,
  blockFailure,
  unblockStarted,
  unblockSuccess,
  unblockFailure,
  fetchUserStarted,
  fetchUserSuccess,
  fetchUserFailure,
  userBlocked,
} from "../store/actions";

const url = "https://users-management-project.herokuapp.com/users";

export const authUser = (name, email, password) => {
  return (dispatch) => {
    dispatch(createUserStarted());
    return axios
      .post(url, {
        name,
        email,
        password,
      })
      .then((user) => dispatch(createUserSuccess(user.data)))
      .catch((err) => dispatch(createUserFailure(err.message)));
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginStarted());
    return axios
      .post(`${url}/login`, {
        email,
        password,
      })
      .then((res) => {
        if (!res.data.status) {
          return dispatch(userBlocked());
        } else {
          return dispatch(loginSuccess(res.data));
        }
      })
      .catch((err) => dispatch(loginFailure(err.message)));
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch(fetchUserStarted());
    return axios(`${url}/${id}`)
      .then((res) => {
        if (!res.data.status) {
          return dispatch(userBlocked());
        } else {
          return dispatch(fetchUserSuccess(res.data));
        }
      })
      .catch((err) => dispatch(fetchUserFailure(err)));
  };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    dispatch(fetchAllUsersStarted());
    return axios(url)
      .then((res) => dispatch(fetchAllUsersSuccess(res.data)))
      .catch((err) => dispatch(fetchAllUsersFailure(err.message)));
  };
};

export const deleteUsers = (ids) => {
  const params = ids.join("ID");
  return (dispatch) => {
    dispatch(deleteStarted());
    return axios
      .delete(`${url}/${params}`)
      .then((res) => dispatch(deleteSuccess(res.data.users)))
      .catch((err) => dispatch(deleteFailure(err)));
  };
};

export const blockUsers = (ids) => {
  const params = ids.join("ID");
  return (dispatch) => {
    dispatch(blockStarted());
    return axios
      .patch(`${url}/block/${params}`)
      .then((res) => dispatch(blockSuccess(res.data.users)))
      .catch((err) => dispatch(blockFailure(err)));
  };
};

export const unblockUsers = (ids) => {
  const params = ids.join("ID");
  return (dispatch) => {
    dispatch(unblockStarted());
    return axios
      .patch(`${url}/unblock/${params}`)
      .then((res) => dispatch(unblockSuccess(res.data.users)))
      .catch((err) => dispatch(unblockFailure(err)));
  };
};
