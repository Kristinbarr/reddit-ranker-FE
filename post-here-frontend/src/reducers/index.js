import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  POST_START,
  POST_SUCCESS,
  POST_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL
} from "../actions";

const initialState = {
  drafts: [],
  isRegistering: false,
  isLoggingIn: false,
  loginError: null,
  fetchError: null,
  postError: null,
  deleteError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
        isRegistering: true,
        loginError: action.payload,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case LOGIN_START:
      return {
        ...state,
        isRegistering: false,
        isLoggingIn: true,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isLoggingIn: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case POST_START:
      return {
        ...state,
        isRegistering: true,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case POST_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case POST_FAIL:
      return {
        ...state,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    default:
      return state;
  }
};

export default reducer;
