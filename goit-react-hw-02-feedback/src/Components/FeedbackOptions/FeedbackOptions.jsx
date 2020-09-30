import React from "react";
import PropTypes from "prop-types";
import { FeedbackWrapper, FeedbackButton } from "./FeedbackOptions.styles";

const FeedbackSelectBtn = ({ options, onCounterFeedback }) => {
  return (
    <FeedbackWrapper>
      {options.map((option) => (
        <FeedbackButton key={option} type="button" onClick={onCounterFeedback}>
          {option}
        </FeedbackButton>
      ))}
    </FeedbackWrapper>
  );
};

FeedbackSelectBtn.propTypes = {
  options: PropTypes.array.isRequired,
  onCounterFeedback: PropTypes.func.isRequired,
};

export default FeedbackSelectBtn;
