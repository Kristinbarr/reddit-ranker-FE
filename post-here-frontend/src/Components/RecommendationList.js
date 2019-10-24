import React, { useState, useEffect } from "react";
import Recommendation from "./Recommendation";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { getRecommendations } from "../actions";
import styled from "styled-components";

import { createMuiTheme } from "@material-ui/core/styles";

const TableWrapper = styled.div`
  width: 30%;
  margin-top: 7%;
`;

const TableContentWrapper = styled.div`
  border-spacing: 10px;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  margin-top: -20px;
  margin-bottom: 35px;
`;

// const TableCellWrapper = styled.div`

// `
const useStyles = makeStyles({
  root: {
    width: "95%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

// Generate Order Data
function createData(score, subreddit) {
  return { score, subreddit };
}

const data = [
  createData(1, "r/CasualConversation"),
  createData(2, "r/dogpark"),
  createData(3, "r/DogTraining"),
  createData(4, "r/Dogs"),
  createData(5, "r/friendship")
];

const RecommendationList = props => {
  const { getRecommendations, loggedInUser } = props;
  const initialState = data;
  const [recs, setRecs] = useState(initialState);

  // useEffect(() => {
  //   setRecs(getRecommendations(loggedInUser));
  // }, [loggedInUser]);

  const [recommendations, setRecommendations] = useState([]);
  // if recommendations is empty, then render "GENERATE RECOMMENDATIONS ON THE LEFT"
  const classes = useStyles();
  return (
    <TableWrapper>
      <Title>Top Suggested Subreddits</Title>
      <Paper className={classes.root}>
        <TableContentWrapper>
          <Table
            className={classes.table}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ height: "60px" }}>Rank</TableCell>
                <TableCell style={{ height: "60px" }}>Subreddit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recs.map(rec => (
                <TableRow key={rec.subreddit}>
                  <TableCell style={{ height: "60px" }}>{rec.score}</TableCell>
                  <TableCell style={{ height: "60px" }}>
                    {rec.subreddit}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContentWrapper>
      </Paper>
    </TableWrapper>
  );
};

const mapStateToProps = state => {
  return {
    id: state.loggedInUser
  };
};

export default connect(
  mapStateToProps,
  { getRecommendations }
)(RecommendationList);
