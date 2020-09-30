import React from "react";
import PropTypes from "prop-types";

const Button = ({ loadMore }) => (
  <button className="Button" onClick={loadMore}>
    load more
  </button>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
