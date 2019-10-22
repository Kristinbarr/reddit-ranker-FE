import React from "react";
import { withFormik, Form, Field } from "formik";

import { login } from "../actions";
import { connect } from "react-redux";

const Login = () => {
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
      <button type="submit">Login</button>
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
    props.login(values);
  }
})(Login);

export default connect(
  null,
  { login }
)(FormikApp);
