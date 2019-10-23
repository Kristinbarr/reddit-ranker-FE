import React from "react";

import SavedPosts from "./Components/SavedPosts";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import FormikAppPost from "./Components/Post";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecommendationList from "./Components/RecommendationList";
import { palette, themeName} from './Components/ColorPalette';
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Nav} />
        <Route path="/" component={Home} />
        <Route path="/Newpost" component={FormikAppPost} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <PrivateRoute exact path="/Savedposts" component={SavedPosts} />
        <Route exact path="/Newpost" component={RecommendationList} /> 
      </div>
    </Router>
  );
}

export default App;
