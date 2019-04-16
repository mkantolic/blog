import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";
import "../Layout/Navbar.css";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  card: {
    width: 490,
    height: 320,
    marginLeft: 600,
    marginTop: "-45%"
  },

  tit: {
    textDecoration: "none"
  },
  title: {
    fontSize: 20,
    fontFamily: "'Montserrat', sans-serif"
  },
  textField: {
    marginLeft: 30,
    width: 340,
    padding: 5
  },
  pos: {
    marginBottom: 12
  },
  reg: {
    marginLeft: 35
  },
  login: {
    fontSize: 20,
    fontFamily: "'Montserrat', sans-serif",
    marginLeft: 30,
    color: "rgb(83, 53, 88)"
  },
  cssLabel: {
    "&$cssFocused": {
      color: "rgb(83, 53, 88)",
      fontSize: 18
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "rgb(83, 53, 88)"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "rgb(83, 53, 88)"
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 2
    }
  },
  bootstrapInput: {
    marginLeft: 20,
    borderRadius: 6,
    backgroundColor: "rgb(83, 53, 88)",
    border: "1px solid rgb(83, 53, 88)",
    fontSize: 16,
    width: "700px",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 6,
      borderColor: "rgb(83, 53, 88)",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  },
  dense: {
    marginTop: 20
  },
  input: {
    marginLeft: 5,
    fontSize: 18
  },
  paper: {
    position: "absolute",
    outline: "none"
  },
  register: {
    fontSize: 15,
    fontFamily: "'Montserrat', sans-serif",
    color: "rgb(83, 53, 88)"
  }
});
const InputField = props => {
  const { classes } = props;
  return (
    <div>
      <br />
      <TextField
        className={classes.textField}
        autoComplete="current-password"
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
            input: classes.input
          }
        }}
        onChange={props.inputAction}
        type={props.type}
        id={props.id}
        className="form-control"
        placeholder={`   ${props.label}...`}
      />
    </div>
  );
};
InputField.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(InputField);
