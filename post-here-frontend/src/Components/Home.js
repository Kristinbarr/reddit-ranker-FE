import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Post from "./Post";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Get Rec'd!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
        }}
      >
        Logout
      </Button>
      <Post />
    </div>
  );
};

export default Home;
