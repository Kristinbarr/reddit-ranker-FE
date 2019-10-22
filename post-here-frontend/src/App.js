import React from "react";

import SavedPosts from "./Components/SavedPosts";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import FormikAppPost from "./Components/Post";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/" component={FormikAppPost} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <PrivateRoute exact path="/Savedposts" component={SavedPosts} />
      </div>
    </Router>
  );
}

export default App;
