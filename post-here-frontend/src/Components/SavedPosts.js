import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSavedPosts } from "../actions";

//needs to have the users saved posts
//each post will have the title and the body
// * do I want to include when the post was saved?

const SavedPosts = props => {
  const initialState = [];
  const [savedPosts, setSavedPosts] = useState(initialState);
  const id = localStorage.getItem("id");

  useEffect(() => {
    setSavedPosts(getSavedPosts());
  }, []);

  return <div classdN>Saved Posts</div>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { getSavedPosts }
)(SavedPosts);
