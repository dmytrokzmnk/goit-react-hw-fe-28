import React from "react";
import PropTypes from "prop-types";
import { StatisticsString, StatisticList } from "./Statistics.styles";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  const totalFeedback = total();
  const positiveFeedback = positiveFeedbackPercentage();
  return (
    <StatisticList>
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>
      <p> Total: {totalFeedback}</p>
      <p> Positive feedback: {positiveFeedback} %</p>
    </StatisticList>
  );
};

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};
export default Statistics;
