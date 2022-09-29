import {
  FETCH_ALL_USERS_STARTED,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  DELETE_STARTED,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  LOGOUT,
  BLOCK_STARTED,
  BLOCK_SUCCESS,
  BLOCK_FAILURE,
  UNBLOCK_STARTED,
  UNBLOCK_SUCCESS,
  UNBLOCK_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  users: [],
  userActionLoading: false,
  userActionError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case DELETE_STARTED:
      return {
        ...state,
        userActionLoading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        userActionLoading: false,
        users: action.users,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        userActionLoading: false,
        userActionError: action.error,
      };
    case BLOCK_STARTED:
      return {
        ...state,
        userActionLoading: true,
      };
    case BLOCK_SUCCESS:
      return {
        ...state,
        userActionLoading: false,
        users: action.users,
      };
    case BLOCK_FAILURE:
      return {
        ...state,
        userActionLoading: false,
        userActionError: action.error,
      };
    case UNBLOCK_STARTED:
      return {
        ...state,
        userActionLoading: true,
      };
    case UNBLOCK_SUCCESS:
      return {
        ...state,
        userActionLoading: false,
        users: action.users,
      };
    case UNBLOCK_FAILURE:
      return {
        ...state,
        userActionLoading: false,
        userActionError: action.error,
      };
    case LOGOUT:
      return {
        loading: false,
        error: null,
        users: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
