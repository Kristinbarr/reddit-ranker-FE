import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import Recommendation from "../Components/Recommendation";

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

// EVALUATE
export const EVAL_START = "EVAL_START";
export const EVAL_SUCCESS = "EVAL_SUCCESS";
export const EVAL_FAIL = "EVAL_FAIL";

const BASE_URL = "https://reddit-ranker.herokuapp.com/api/auth";
const DS_API = "waiting on DS";

export const login = (credentials, history) => dispatch => {
  console.log(credentials, "login users credentials");
  dispatch({ type: LOGIN_START });
  axios
    .post(`${BASE_URL}/login`, credentials)
    .then(res => {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      dispatch({ type: LOGIN_SUCCESS, payload: user.id });
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
      // login(user, history);
      axios
        .post(`${BASE_URL}/login`, user)
        .then(res => {
          const { token, user } = res.data;
          dispatch({ type: LOGIN_START });
          localStorage.setItem("token", token);
          localStorage.setItem("id", user.id);
          history.push("/Savedposts");
        })
        .catch(err => console.log("Combo registration and login failed", err));
    })
    .catch(err => {
      console.log("Error on registration", err);
      dispatch({ type: POST_FAIL, payload: err });
    });
};

export const getSavedPosts = userID => dispatch => {
  // dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get(`/posts/${userID}/user`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAIL, payload: err });
    });
};

// Waiting on kristins Recommendations route
export const getRecommendations = userID => dispatch => {
  // dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get(`/posts/${userID}/user`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      // dispatch({ type: FETCHING_FAIL, payload: err });
    });
};

// waiting on the API from the backend
export const evaluatePost = draft => dispatch => {
  dispatch({ type: EVAL_START });
  console.log("submitting to DS API", draft);
  dispatch({ type: EVAL_SUCCESS });
  // axios
  //   .post(DS_API, draft)
  //   .then(res => {
  //     dispatch({ type: EVAL_SUCCESS });
  //     console.log("waiting on the backend for the response", res);
  //     // return res.data;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     dispatch({ type: EVAL_FAIL, payload: err });
  //   });
};
