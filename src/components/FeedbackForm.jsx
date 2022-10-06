import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [feedback, setFeedback] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (feedback === "") {
      setIsDisabled(true);
      setErrorMessage("");
    } else if (feedback !== "" && feedback.trim().length <= 10) {
      setIsDisabled(true);
      setErrorMessage("Your feedback requires atleast 10 characters");
    } else {
      setIsDisabled(false);
      setErrorMessage("");
    }
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim().length > 10) {
      const newFeedback = {
        text: feedback,
        rating,
      };
      handleAdd(newFeedback);
      setFeedback("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={feedback}
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {errorMessage && <div className="message">{errorMessage}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
