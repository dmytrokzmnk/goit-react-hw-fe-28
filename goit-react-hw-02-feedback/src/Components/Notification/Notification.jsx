import React from "react";
import PropTypes from "prop-types";
import { Span } from "./Notification.styles";

const Notification = ({ message }) => {
  return <Span>{message}</Span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: "No feedback given",
};

export default Notification;
