import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <p>
        {" "}
        Pitanje <span>{props.counter}</span> od <span>{props.total}</span>
      </p>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
