import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import img from "../image/home-camera3.jpg";
const styles = {
  ima: {
    width: "100%",
    height: "50em"
  }
};
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <img className={classes.ima} src={img} alt="img" />
          <p className="tag">Photo by Agê Barros on Unsplash</p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
