import React, { useState } from "react";
import Recommendation from "./Recommendation";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

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
function createData(id, rank, subreddit, successRate) {
  return { id, rank, subreddit, successRate};
}

const rows = [
  createData(0, 1, 'r/CasualConversation', '57%'),
  createData(1, 2, 'r/dogpark', '21%'),
  createData(2, 3, 'r/DogTraining', '12%'),
  createData(3, 4, 'r/Dogs', '7%'),
  createData(4, 5, 'r/friendship', '3%'),
];


const Recommendationlist = props => {



  // const [recommendations, setRecommendations] = useState([]);
  // if recommendations is empty, then render "GENERATE RECOMMENDATIONS ON THE LEFT"
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Title>Top Suggested Subreddits</Title>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Subreddit</TableCell>
            <TableCell align="right">Success Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.subreddit}</TableCell>
              <TableCell align="right">{row.successRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Recommendationlist;
