import React from "react";
import Button from "@material-ui/core/Button";
import "../Layout/Navbar.css";
const FooterButtons = props => {
  const { submitLabel, otherLabel, goToLink } = props;
  return (
    <div className="d-flex justify-content-between">
      <Button type="submit" className="submit-label">
        {submitLabel || "Submit"}
      </Button>
      <Button
        type="button"
        className="btn btn-info"
        onClick={() => {
          props.history.push(goToLink || "/");
        }}
      >
        {otherLabel || "Go back"}
      </Button>
    </div>
  );
};

export default FooterButtons;
