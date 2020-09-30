import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
const feedbackArr = ["good", "neutral", "bad"];

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleCounterFeedback = (e) => {
    const target = e.target.textContent;
    switch (target) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      return Math.round((good * 100) / total);
    }
    return 0;
  };
  return (
    <>
      <SectionTitle title={"Please leave feedback"}>
        <FeedbackOptions
          options={feedbackArr}
          onCounterFeedback={handleCounterFeedback}
        />
      </SectionTitle>
      <SectionTitle title={"Statistics"}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </SectionTitle>
    </>
  );
}
export default Feedback;
