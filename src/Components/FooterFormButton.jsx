import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  button: {
    backgroundColor: "rgb(83, 53, 88)",
    fontSize: 18,
    height: "2.5em",
    width: "80%",
    fontFamily: "'Montserrat', sans-serif",
    padding: "2%",
    marginTop: "2%",
    color: "white"
  }
};
const FooterButton = props => {
  const { submitLabel, otherLabel, classes, goToLink, history } = props;
  return (
    <div className="d-flex justify-content-between">
      <Button type="submit" className={classes.button}>
        {submitLabel}
      </Button>{" "}
      <br />
      <Button
        type="button"
        className="but-submit"
        onClick={() => {
          history.push(goToLink);
        }}
      >
        {otherLabel}
      </Button>
    </div>
  );
};

FooterButton.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FooterButton);
