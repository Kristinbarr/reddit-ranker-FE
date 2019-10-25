import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

import { packagePost, packageEditedPost } from "../utils/postPackager";

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

// EDITING
export const EDIT_SAVED_POST = "EDIT_SAVED_POST";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

// SAVING
export const SAVE_START = "SAVE_START";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const SAVE_FAIL = "SAVE_FAIL";

const BASE_URL = "https://reddit-ranker.herokuapp.com/api/";
const DS_API =
  "https://post-here-reddit-ranker-api.herokuapp.com/submission_analysis";

export const login = (credentials, history) => dispatch => {
  console.log(credentials, "login users credentials");
  dispatch({ type: LOGIN_START });
  axios
    .post(`${BASE_URL}auth/login`, credentials)
    .then(res => {
      console.log("response from server", res);
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
    .post(`${BASE_URL}auth/register`, user)
    .then(res => {
      // login(user, history);
      dispatch({ type: LOGIN_START });
      axios
        .post(`${BASE_URL}/login`, user)
        .then(res => {
          console.log("combo registration/login response from server", res);
          const { token, user } = res.data;
          dispatch({ type: LOGIN_SUCCESS, payload: user.id });
          localStorage.setItem("token", token);
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
  dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get(`/posts/${userID}/user`)
    .then(res => {
      console.log("fetched save posts from backend", res);
      dispatch({ type: FETCHING_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAIL, payload: err });
    });
};

// Waiting on kristins Recommendations route
export const getRecommendations = userID => dispatch => {
  dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .get(`/posts/${userID}/user`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_FAIL, payload: err });
    });
};

// waiting on the API from the backend
export const evaluatePost = draft => dispatch => {
  // dispatch({ type: EVAL_SUCCESS, payload: dummyRecs });
  dispatch({ type: EVAL_START });
  //repackaging for DS API because of communication problems reeeeeeeee
  const dsDraft = { title: draft.title, post: draft.content };
  console.log("submitting to DS API", dsDraft);
  axios
    .post(DS_API, dsDraft)
    .then(res => {
      console.log("response from DS API", res);
      dispatch({ type: EVAL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EVAL_FAIL, payload: err });
      console.log("Evaluation error", err);
    });
  // return res.data;
  //     .catch(err => {
  //       console.log(err);
  //       dispatch({ type: EVAL_FAIL, payload: err });
  //     });
  // };
};

export const savePost = (draft, recommendations, userID) => dispatch => {
  console.log("this is the draft", draft);
  console.log("these are the recommenations", recommendations);
  console.log("this is the userID", userID);

  dispatch({ type: SAVE_START });
  //tf package is a reserved word?
  const delivery = packagePost(draft, recommendations);

  axiosWithAuth()
    .post(`${BASE_URL}posts/${userID}`, delivery)
    .then(res => {
      console.log("response from saving post", res);
      dispatch({ type: SAVE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error response from saving post", err);
      dispatch({ type: SAVE_FAIL, payload: err });
    });
};

// puts the content of draft into state for auto populating edit
export const editPost = draft => dispatch => {
  dispatch({ type: EDIT_SAVED_POST, payload: draft });
};

export const saveEdit = (draft, recommendations, id) => dispatch => {
  console.log("this is the draft", draft);
  console.log("these are the recommenations", recommendations);
  console.log("this is the id", id);
  // axiosWithAuth()
  //   .put(`/posts/${draft.id}`, draft)
  //   .then(res => {
  //     dispatch({ type: EDIT_SUCCESS, payload: res.data });
  //     // console.log(res);
  //   })
  //   .catch(err => console.log(err));
};

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_START });
  console.log("made it to the delete", id);
  axiosWithAuth()
    .delete(`${BASE_URL}posts/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_SUCCESS });
    })
    .catch(err => console.log(err));
};
