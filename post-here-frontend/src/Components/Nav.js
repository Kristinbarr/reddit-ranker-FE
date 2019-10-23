import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink }  from "react-router-dom";
// import { palette, themeName} from './ColorPalette';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
}));



export default function Nav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Reddit Ranker
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              dashboard
            </Link>
            <RouterLink style={{ textDecoration: 'none' }} to="./Newpost">
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                new post
                </Link>
            </RouterLink>
            <RouterLink style={{ textDecoration: 'none' }} to="./Signup">
              <Button href="#" color="secondary" variant="outlined" className={classes.link}>
                Signup
              </Button>
          </RouterLink>
          </nav>
          <RouterLink style={{ textDecoration: 'none' }} to="./Login">
              <Button href="#" color="primary" variant="outlined" className={classes.link}>
                Login
              </Button>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
