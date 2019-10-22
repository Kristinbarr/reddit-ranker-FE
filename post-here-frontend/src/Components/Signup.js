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
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(SignUp);

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(FormikApp);
