import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Reddit post finder app!</h1>
      <Link to="./Login">
        <button>Login Here!</button>
      </Link>
      <Link to="./Signup">
        <button>Sign Up Here!</button>
      </Link>
    </div>
  );
};

export default Home;
