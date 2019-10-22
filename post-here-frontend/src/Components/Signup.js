import React from "react";
import { withFormik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// connecting to store and actions
import { registerUser } from "../actions";
import { connect } from "react-redux";

const SignUp = props => {
  const { values, handleChange } = props;
  return (
    <Form>
      <TextField
        label="email"
        variant="outlined"
        onChange={handleChange}
        type="email"
        placeholder="Email"
        name="email"
      ></TextField>
      <TextField
        label="password"
        variant="outlined"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        name="password"
      ></TextField>
      <br />
      <Button variant="contained" type="submit">
        Sign Up
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
    //passing props / history through actions
    props.registerUser(values, props.history);
  }
})(SignUp);

export default connect(
  null,
  { registerUser }
)(FormikApp);
