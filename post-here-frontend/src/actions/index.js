import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

// FETCHING
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

// REGISTERING
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

const BASE_URL = "https://reddit-ranker.herokuapp.com/api/auth";

export const login = (credentials, history) => dispatch => {
  console.log("made it to the login", credentials);
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      history.push("/Savedposts");
    })
    .catch(err => {
      console.log("Error on login", err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const registerUser = (user, history) => dispatch => {
  dispatch({ type: POST_START });

  axios
    .post(`${BASE_URL}/register`, user)
    .then(res => {
      console.log("registration successful, logging in now", res);
      console.log("logging in with this:", user);
      login(user, history);
      axios
        .post(`${BASE_URL}/login`, user)
        .then(res => {
          dispatch({ type: LOGIN_START });
          console.log("login function", login);
          localStorage.setItem("token", res.data.token);
          history.push("/Savedposts");
        })
        .catch(err => console.log("Combo registration and login failed", err));
    })
    .catch(err => {
      console.log("Error on registration", err);
      dispatch({ type: POST_FAIL, payload: err });
    });
};

export const getSavedPosts = id => dispatch => {
  dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get(`/posts/${id}/user`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAIL, payload: err });
    });
};
