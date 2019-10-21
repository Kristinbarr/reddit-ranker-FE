import React from 'react'


const Signup = () => {

    return (
        <div>
            <form> 
                <label>Email:  <input type="text" name="username"></input></label> <br/>
                <label>Password:  <input type="password" name="password"></input></label> <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;