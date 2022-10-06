import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  let average =
    feedback.length > 0
      ? feedback.reduce((acc, current) => {
          return acc + current.rating;
        }, 0) / feedback.length
      : 0;

  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avergae Rating: {average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
