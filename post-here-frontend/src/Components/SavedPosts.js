import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSavedPosts } from "../actions";
import { connect } from "react-redux";

const initialState = [
  {
    title: "TIFU",
    body:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    title: "TIL",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    title: "Give me gold",
    body:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
  },
  {
    title: "Look at this dog pic aww",
    body:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33"
  },
  {
    title: "I found this interiesting sign",
    body:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
  }
];
const SavedPosts = props => {
  console.log("savedPosts props", props);
  const [query, setQuery] = useState("");
  const [savedPosts, setSavedPosts] = useState(initialState);
  const [filteredResults, setFilteredResults] = useState(savedPosts);
  const { getSavedPosts } = props;

  useEffect(() => {
    setFilteredResults(
      savedPosts.filter(({ title, body }) => {
        return (
          title.toLowerCase().includes(query.toLowerCase()),
          body.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  if (!savedPosts) {
    return <div className="saved-post-container">You have no saved posts</div>;
  } else {
    return (
      <div>
        <form>
          <label htmlFor="name">Search: </label>
          <input
            type="text"
            onChange={handleInputChange}
            name="name"
            placeholder="search by name"
          />
        </form>
        {filteredResults.map(({ title, body }) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => {
                console.log("this is the post you clicked", { title, body });
              }}
              key={title}
            >
              <h1>{title}</h1>
              <h3>{body}</h3>
            </Link>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    initialState: state.drafts,
    id: state.loggedInUser
  };
};

export default connect(
  mapStateToProps,
  { getSavedPosts }
)(SavedPosts);
