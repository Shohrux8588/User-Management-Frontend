import {
  CREATE_USER_STARTED,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT,
  USER_BLOCKED,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: {},
  error: null,
  blocked: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_STARTED:
      return {
        ...initialState,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...initialState,

        user: action.user,
      };
    case CREATE_USER_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    case LOGIN_STARTED:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    case USER_BLOCKED:
      return {
        ...initialState,
        user: {},
        blocked: true,
      };
    case FETCH_USER_STARTED:
      return {
        ...initialState,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user,
      };
    case FETCH_USER_FAILURE:
      return {
        ...initialState,
        error: action.error,
        user: {},
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
