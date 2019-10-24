import React, { useState, useEffect } from "react";
import { withFormik, Form } from "formik";
import { connect } from "react-redux";
import { submitEdit } from "../actions";

import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const PostTextWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

const SinglePost = props => {
  const { values, handleChange, title, body, id } = props;
  //pre-populate the forms from the state in redux
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const classes = useStyles();

  useEffect(() => {
    setEditedTitle(title);
    setEditedBody(body);
    console.log("setting it only once");
  }, []);

  return (
    <PostTextWrapper>
      <h1>Single View</h1>
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
          name="body"
          className={classes.margin}
          variant="filled"
          multiline
          rows="16"
          fullWidth
          id="reddit-input"
          onChange={handleChange}
          value={values.body}
        />
        <ButtonsWrapper>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => {
              console.log("Deleting from server...", {
                title: editedTitle,
                body: editedBody,
                id: id
              });
            }}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            type="submit"
          >
            Resubmit For Recommendation
          </Button>

          <Button
            variant="outlined"
            className={classes.button}
            color="secondary"
            onClick={() => {
              console.log("Saving to server...", {
                title: editedTitle,
                body: editedBody,
                id: id
              });
            }}
          >
            Save
          </Button>
        </ButtonsWrapper>
      </Form>
    </PostTextWrapper>
  );
};

const FormikAppPostSingle = withFormik({
  mapPropsToValues({ title, body }) {
    return {
      title: title || "",
      body: body || ""
    };
  },
  handleSubmit(text) {
    console.log(text);
  }
})(SinglePost);

const mapStateToProps = state => {
  const { title, body, id } = state.savedPostToEdit;
  return {
    title: title || "",
    body: body || "",
    id: id || ""
  };
};

export default connect(
  mapStateToProps,
  { submitEdit }
)(FormikAppPostSingle);
