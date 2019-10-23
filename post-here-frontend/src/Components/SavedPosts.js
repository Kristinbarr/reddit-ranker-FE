import React, { useState, useEffect } from "react";

import { getSavedPosts } from "../actions";
import { connect } from "react-redux";

//needs to have the users saved posts
//each post will have the title and the body
// * do I want to include when the post was saved?

const SavedPosts = props => {
  console.log("props of the SavedPosts", props);
  const initialState = [];
  const [savedPosts, setSavedPosts] = useState(initialState);
  const id = localStorage.getItem("id");

  useEffect(() => {
    setSavedPosts(getSavedPosts(id));
  }, [id]);

  if (!savedPosts) {
    return <div className>You have no saved posts</div>;
  } else {
    return (
      <div>
        {savedPosts.map(savedPost => {
          console.log(savedPost);
        })}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { initialState: state.drafts };
};

export default connect(
  mapStateToProps,
  { getSavedPosts }
)(SavedPosts);
