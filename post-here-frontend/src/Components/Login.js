import React from 'react';
import { withFormik, Form, Field} from 'formik'
// import * as Yup from 'yup';
// import axios from 'axios';

const Login = () => {
   
    return (
     
        <Form>
            <label>Email:  <Field type="email" placeholder="Email" name="email"></Field></label> <br/>
            <label>Password:  <Field type="password" placeholder="Password" name="password"></Field></label> <br/>
            <button type="submit">Login</button>
        </Form>
    
    )
}

const FormikApp = withFormik({
    mapPropsToValues({email, password}) {
        return{
            email: email || '',
            password: password || ''
        }
    },
    handleSubmit(values) {
        console.log(values)
    }
})(Login)

export default FormikApp;