import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../Components/Logo.svg";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#ea8d8b"
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 900,
    color: "#333453"
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Logo
        style={{
          zIndex: 99,
          position: "absolute",
          marginTop: "10px",
          marginLeft: "20px"
        }}
      />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/Savedposts"
              className={classes.link}
            >
              dashboard
            </Link>
            <RouterLink style={{ textDecoration: "none" }} to="/">
              <Link
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                new post
              </Link>
            </RouterLink>
            {!localStorage.getItem("token") && (
              <RouterLink style={{ textDecoration: "none" }} to="./Signup">
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.link}
                >
                  Signup
                </Button>
              </RouterLink>
            )}
            {localStorage.getItem("token") ? (
              <RouterLink style={{ textDecoration: "none" }} to="/">
                <Button
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                  href="#"
                  variant="outlined"
                  className={classes.link}
                >
                  Logout
                </Button>
              </RouterLink>
            ) : (
              <RouterLink style={{ textDecoration: "none" }} to="/Login">
                <Button
                  href="#"
                  color="primary"
                  variant="outlined"
                  className={classes.link}
                >
                  Login
                </Button>
              </RouterLink>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
