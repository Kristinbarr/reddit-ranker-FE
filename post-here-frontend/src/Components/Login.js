import React from "react";
import { withFormik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { login } from "../actions";
import { connect } from "react-redux";

const Login = ({ values, handleChange }) => {
  return (
    <Form>
      <TextField
        label="email"
        variant="outlined"
        onChange={handleChange}
        // value={values.email}
        type="email"
        placeholder="Email"
        name="email"
      ></TextField>
      <TextField
        label="password"
        variant="outlined"
        onChange={handleChange}
        // value={values.password}
        type="password"
        placeholder="Password"
        name="password"
      ></TextField>{" "}
      <br />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values, { props }) {
    props.login(values, props.history);
  }
})(Login);

export default connect(
  null,
  { login }
)(FormikApp);
