import React from "react";
import { withFormik, Form, Field } from "formik";

// connecting to store and actions
import { registerUser } from "../actions";
import { connect } from "react-redux";

const SignUp = () => {
  return (
    <Form>
      <label>
        Email: <Field type="email" placeholder="Email" name="email"></Field>
      </label>{" "}
      <br />
      <label>
        Password:{" "}
        <Field type="password" placeholder="Password" name="password"></Field>
      </label>{" "}
      <br />
      <button type="submit">Sign Up</button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      username: email || "",
      password: password || ""
    };
  },
  handleSubmit(values, { props }) {
    props.registerUser(values);
  }
})(SignUp);

export default connect(
  null,
  { registerUser }
)(FormikApp);
