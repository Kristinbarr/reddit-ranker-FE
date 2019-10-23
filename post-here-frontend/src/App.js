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
import styled from "styled-components";

import "./App.css";

function App() {
  const NewPostWrapper = styled.div`
    display: flex;
  `
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route path="/Newpost" render={ () => {
          return (
        <NewPostWrapper>
          <FormikAppPost /> 
          <RecommendationList />
        </NewPostWrapper>
          )}}
        />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <PrivateRoute exact path="/Savedposts" component={SavedPosts} /> 
      </div>
    </Router>
  );
}

export default App;
