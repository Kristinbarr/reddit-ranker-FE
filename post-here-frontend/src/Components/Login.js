import React from 'react';
import { withFormik, Form} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import * as Yup from 'yup';
// import axios from 'axios';

const Login = ({values, handleChange}) => {
   
    return (
        <Form>
            <TextField label="email" variant="outlined" onChange={handleChange} value={values.email} type="email" placeholder="Email" name="email"></TextField >
            <TextField label="password" variant="outlined" onChange={handleChange} value={values.password} type="password" placeholder="Password" name="password"></TextField> <br/>
            <Button variant="contained" type="submit">Login</Button>
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