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
  loginError: null,
  fetchError: null,
  postError: null,
  deleteError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
