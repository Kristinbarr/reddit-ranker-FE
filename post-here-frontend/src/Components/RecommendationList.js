import React, { useState } from "react";
import Recommendation from "./Recommendation";

const RecommendationList = props => {
  const [recommendations, setRecommendations] = useState([]);
  // if recommendations is empty, then render "GENERATE RECOMMENDATIONS ON THE LEFT"
  return <div>This is the list of recommendations</div>;
};

export default Recommendationlist;
