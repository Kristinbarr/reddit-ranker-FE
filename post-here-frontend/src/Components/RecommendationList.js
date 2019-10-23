import React, { useState, useEffect } from "react";
import Recommendation from "./Recommendation";
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { getRecommendations } from "../actions";

import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

// Generate Order Data
function createData(score, subreddit) {
  return { score, subreddit};
}

const data = [
  createData(1, 'r/CasualConversation'),
  createData(2, 'r/dogpark'),
  createData(3, 'r/DogTraining'),
  createData(4, 'r/Dogs'),
  createData(5, 'r/friendship'),
];


const RecommendationList = props => {

  console.log("props of the RecommendationList", props);
  console.log( "this is the data", data);
  const initialState = data;
  const [recPosts, setRecPosts] = useState(initialState);
  const id = localStorage.getItem("id");

  // useEffect(() => {
  //   setRecPosts(getRecommendations(id));
  // }, [id]);

  // const [recommendations, setRecommendations] = useState([]);
  // if recommendations is empty, then render "GENERATE RECOMMENDATIONS ON THE LEFT"
  const classes = useStyles();
  console.log( "array of posts", recPosts)
  return (
    <Paper className={classes.root}>
      <Title>Top Suggested Subreddits</Title>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Subreddit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recPosts.map(recPost => (
            <TableRow key={recPost.subreddit}>
              <TableCell align="right">{recPost.score}</TableCell>
              <TableCell align="right">{recPost.subreddit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};


export default connect(
  null,
  { getRecommendations }
)(RecommendationList);


