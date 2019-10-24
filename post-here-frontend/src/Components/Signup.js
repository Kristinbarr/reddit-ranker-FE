import React from "react";
import { withFormik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { registerUser } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-left: 33%;
  margin-top: 10%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SignUp = props => {
  const { values, handleChange, touched, errors } = props;
  return (
    <Form>
      <FormWrapper>
        <h1 style={{ color: "#333355" }}>Sign Up</h1>
        <TextField
          label="email"
          variant="outlined"
          onChange={handleChange}
          style={{
            backgroundColor: "white"
          }}
          type="email"
          placeholder="Email"
          name="email"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <TextField
          label="password"
          variant="outlined"
          onChange={handleChange}
          style={{
            backgroundColor: "white"
          }}
          type="password"
          placeholder="Password"
          name="password"
        />
        <ButtonWrapper>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </ButtonWrapper>
      </FormWrapper>
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
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Sorry, this is not a valid email")
      .required("Please make sure you add an email"),
    password: Yup.string()
      .min(6, "Please make sure Password is 6 characters or longer")
      .required()
  }),
  handleSubmit(values, { props }) {
    //passing props / history through actions
    props.registerUser(values, props.history);
  }
})(SignUp);

export default connect(
  null,
  { registerUser }
)(FormikApp);
