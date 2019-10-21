import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
   
      <Router>
        <div className="App">
        <Route path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />

        </div>
      </Router>
    
  );
}

export default App;
