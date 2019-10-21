import React from 'react';


const Login = () => {

    return (
        <div>
        <form> 
            <label>Email:  <input type="text" name="username"></input></label> <br/>
            <label>Password:  <input type="password" name="password"></input></label> <br/>
            <button>Login</button>
        </form>
    </div>
    )
}

export default Login;