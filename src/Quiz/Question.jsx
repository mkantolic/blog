import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  return (
    <div>
      <h2 className="Pitanje">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
