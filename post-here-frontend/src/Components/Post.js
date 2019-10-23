import React from "react";
import { withFormik, Form } from "formik";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { connect } from "react-redux";
import { evaluatePost } from "../actions";

const PostTextWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const useStylesReddit = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const Post = ({ values, handleChange }) => {
  const classes = useStyles();
  return (
    <PostTextWrapper>
      <Form>
        <RedditTextField
          label="Reddit Title Here"
          name="title"
          className={classes.margin}
          variant="filled"
          id="reddit-input"
          fullWidth
          onChange={handleChange}
          value={values.title}
        />{" "}
        <br />
        <RedditTextField
          label="Reddit Post Here"
          name="post"
          className={classes.margin}
          variant="filled"
          multiline
          rows="16"
          fullWidth
          id="reddit-input"
          onChange={handleChange}
          value={values.post}
        />
        <Button
          variant="outlined"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Generate Recommendations
        </Button>
      </Form>
    </PostTextWrapper>
  );
};

const FormikAppPost = withFormik({
  mapPropsToValues({ title, post }) {
    return {
      title: title || "",
      post: post || ""
    };
  },
  handleSubmit(text) {
    console.log(text);
  }
})(Post);

export default connect(
  null,
  { evaluatePost }
)(FormikAppPost);
