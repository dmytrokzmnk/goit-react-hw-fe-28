import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";
import randomColor from "../../assets/randomColor";
const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.Statistics}>
      {title && <h2 className={classes.StatisticsTitle}>{title}</h2>}
      <ul className={classes.StatisticsList}>
        {stats.map((el) => (
          <li className={classes.StatisticsItem} key={el.id} style={{ backgroundColor: randomColor() }}>
            <span className={classes.StatisticsLabel}>{el.label}</span>
            <span className={classes.StatisticsPercentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

Statistics.defaultProps = {
  title: "",
};

export default Statistics;
