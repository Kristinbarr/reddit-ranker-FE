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
  DELETE_FAIL,
  EVAL_START,
  EVAL_SUCCESS,
  EVAL_FAIL,
  EDIT_SAVED_POST,
  SAVE_START,
  SAVE_SUCCESS,
  SAVE_FAIL
} from "../actions";

const initialState = {
  drafts: [],
  recommendations: [],
  loggedInUser: null,
  isFetching: false,
  isRegistering: false,
  isLoggingIn: false,
  isSaving: false,
  loginError: null,
  fetchError: null,
  postError: null,
  deleteError: null,
  saveError: null,
  savedPostToEdit: { id: null, body: "", title: "" }
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
        loggedInUser: action.payload,
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
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        drafts: action.payload,
        isFetching: false,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case FETCHING_FAIL:
      return {
        ...state,
        isFetching: false,
        isRegistering: false,
        loginError: null,
        fetchError: action.payload,
        postError: null,
        deleteError: null
      };
    case EVAL_START:
      return {
        ...state,
        isFetching: true,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case EVAL_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
        isFetching: false,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case EVAL_FAIL:
      return {
        ...state,
        isFetching: false,
        isRegistering: false,
        loginError: null,
        fetchError: action.payload,
        postError: null,
        deleteError: null
      };
    case EDIT_SAVED_POST:
      console.log("made it to the reducer");
      return {
        ...state,
        savedPostToEdit: action.payload,
        isFetching: false,
        isRegistering: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };

    case SAVE_START:
      return {
        ...state,
        isSaving: true,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        loginError: null,
        fetchError: null,
        postError: null,
        deleteError: null
      };
    case SAVE_FAIL:
      return {
        ...state,
        isFetching: false,
        isRegistering: false,
        isSaving: false,
        saveError: action.payload,
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
