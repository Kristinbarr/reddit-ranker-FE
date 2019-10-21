import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Home = () => {
    
    return (
        <div>
            <h1>Welcome to the Reddit post finder app!</h1>
            <Link to="./Login"><Button variant="contained" color="primary">Login Here!</Button></Link>
            <Link to="./Signup"><Button variant="contained" color="secondary">Sign Up Here!</Button></Link>
        </div>
    )
}

export default Home;