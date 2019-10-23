import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Post from "./Post";
import FormikAppPost from "./Post";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Reddit post finder app!</h1>
      <Link to="./Login">
        <Button variant="contained" color="primary">
          Login Here!
        </Button>
      </Link>
      <Link to="./Signup">
        <Button variant="contained" color="secondary">
          Sign Up Here!
        </Button>
      </Link>
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
      <RecommendationList />
    </div>
  );
};

export default Home;
