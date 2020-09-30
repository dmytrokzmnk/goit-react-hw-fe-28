import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => (
  <h1>
    Opps
    <span role="img" aria-label="Oops">
      😰
    </span>
    Sorry, something went wrong{" "}
    <span role="img" aria-label="Oops">
      😔
    </span>
    . {error.slice(0, error.length - 1)}
    <span role="img" aria-label="Oops">
      😖
    </span>
    . Try again later
    <span role="img" aria-label="Oops">
      🤔
    </span>
  </h1>
);

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: "",
};

export default Error;
