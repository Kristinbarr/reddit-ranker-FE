import axiosWithAuth from "axios";

// FETCHING
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

// POSTING
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

// DELETING POSTS
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

// LOG-IN
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// DRAFTS
export const ADD_DRAFT = "ADD_DRAFT";
export const DELETE_DRAFT = "DELETE_DRAFT";
export const EDIT_DRAFT = "EDIT_DRAFT";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/login", credentials)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// Registration / Sign-up
export const registerUser = user => dispatch => {
  dispatch({ type: POST_START });
  axiosWithAuth()
    .post("/register", user)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
