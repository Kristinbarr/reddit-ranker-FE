import axiosWithAuth from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

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

export const login = (credentials, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      history.push("/Savedposts");
    })
    .catch(err => console.log("Error on login", err));
};

export const registerUser = user => dispatch => {
  dispatch({ type: POST_START });
  console.log("registering this to server", user);
  axiosWithAuth()
    .post("/register", user)
    .then(res => {
      dispatch({ type: POST_SUCCESS });
      localStorage.setItem("token", res.data.payload);
      history.push("/Savedposts");
    })
    .catch(err => console.log("Something went wrong", err));
};
