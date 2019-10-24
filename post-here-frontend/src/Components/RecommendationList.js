import React, { useState, useEffect } from "react";
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

const RecommendationList = props => {
  const { recs } = props;

  const classes = useStyles();

  if (!recs) {
    //return the prompt to submit here
  } else {
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
                {recs.map((rec, index) => (
                  <TableRow key={rec.subreddit}>
                    <TableCell style={{ height: "60px" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell
                      style={{ height: "60px" }}
                    >{`/r/${rec}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContentWrapper>
        </Paper>
      </TableWrapper>
    );
  }
};

const mapStateToProps = state => {
  return {
    recs: state.recommendations
  };
};

export default connect(
  mapStateToProps,
  {}
)(RecommendationList);
