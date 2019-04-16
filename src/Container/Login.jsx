import React, { Component } from "react";
import SimpleBox from "../Components/SimpleBox";
import InputField from "../Components/InputField";
import FooterFormButton from "../Components/FooterFormButton";
import { login, getUser, createAccount } from "../Actions/UserActions";
import { connect } from "react-redux";
import ErrorAlert from "../Components/ErrorAlert";
import Home from "../Container/Home";
import CreateAccount from "../Container/CreateAccount";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = theme => ({
  card: {
    width: 490,
    height: 320,
    marginLeft: 600,
    marginTop: "-45%"
  },
  root: {
    flexGrow: 1
  },
  racun: {
    fontFamily: "'Montserrat', sans-serif",
    color: "black"
  },
  paper: {
    position: "absolute",
    width: 550,
    backgroundColor: "white",
    borderRadius: "5px",
    outline: "2px solid rgb(83, 53, 88)"
  },
  register: {
    border: "2px solid rgb(83, 53, 88)",
    fontSize: 18,
    height: "2.5em",
    width: "70%",
    color: "black",
    fontFamily: "'Montserrat', sans-serif",
    padding: "2%"
  }
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      message: localStorage.getItem("message") || ""
    };
  }
  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  renderBody() {
    const errStyle = {
      borderColor: "red"
    };
    const { classes } = this.props;
    return (
      <div>
        <div className="bg-text">
          <button className=" button2"> Kroz objektiv</button>{" "}
          <p className="middle">
            Voliš fotografiju i želiš nešto novog naučiti?
            <br /> Imaš iskustva za podijeliti? Prijavi se!
          </p>{" "}
          <form
            onSubmit={event => {
              this.submitLogin(event);
            }}
            className={classes.root}
          >
            <InputField
              id="email"
              type="text"
              label="Email"
              inputAction={event =>
                this.setState({ email: event.target.value })
              }
              style={this.state.error ? errStyle : null}
            />
            <InputField
              id="password"
              type="password"
              label="Lozinka"
              inputAction={event =>
                this.setState({ password: event.target.value })
              }
              style={this.state.error ? errStyle : null}
            />
            {this.state.error && (
              <ErrorAlert>Tvoje korisničko ime/lozinka je netočna</ErrorAlert>
            )}
            <FooterFormButton submitLabel="Prijava" {...this.props} />
            <p className={classes.racun}>Nemaš korisnički račun?</p>
            <Button onClick={this.handleOpen} className={classes.register}>
              Registriraj se
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <CreateAccount />
              </div>
            </Modal>{" "}
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Home />
        <div>{this.renderBody()}</div>{" "}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { login, getUser }
)(withStyles(styles)(Login));

/*import React, { Component } from "react";
import SimpleBox from "../Components/SimpleBox";
import InputField from "../Components/InputField";
import FooterFormButton from "../Components/FooterFormButton";
import { login, getUser, googleLogin } from "../Actions/UserActions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import ErrorAlert from "../Components/ErrorAlert";
import { errStyle } from "../Helpers/ReduxFormValidation";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";
import "../Layout/Navbar.css";
import Home from "../Container/Home";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import CreateAccount from "../Container/CreateAccount";
import cookie from "react-cookies";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
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
    fontSize: 18,
    color: "grey",
    fontFamily: "'Montserrat', sans-serif"
  },
  textField: {
    marginLeft: 30,
    width: 240,
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
      fontSize: 20
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
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 6,
    backgroundColor: "rgb(83, 53, 88)",
    border: "1px solid rgb(83, 53, 88)",
    fontSize: 16,
    width: "600px",
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
    fontSize: 20
  },
  dense: {
    marginTop: 25
  },
  input: {
    marginLeft: 5,
    fontSize: 20
  },
  paper: {
    position: "absolute",
    width: 550,
    backgroundColor: "white",
    outline: "none"
  },
  register: {
    backgroundColor: "rgb(83, 53, 88)",
    fontSize: 20,
    fontFamily: "'Montserrat', sans-serif",
    padding: "1.5%"
  }
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }
  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  renderBody() {
    const { classes } = this.props;
    return (
      <div>
        <div className="bg-text">
        <form onSubmit={event => { this.submitLogin(event);}}>
        <div>
          <InputField id="email" type="text" label="Email"
                      inputAction={(event) => this.setState({ email: event.target.value })}
                      style={this.state.error ? errStyle : null}
          />
          <InputField id="password" type="password" label="Password"
                      inputAction={(event) => this.setState({ password: event.target.value })}
                      style={this.state.error ? errStyle : null}
          />
          {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
          <FooterFormButton submitLabel="Sign in" otherLabel="Create Account"
                            goToLink="/CreateAccount" {...this.props}
          />
          <SocialMediaLogin {...this.props} />
        </div>
</form>
         
        </div>{" "}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Home />
        <SimpleBox body={this.renderBody()} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { login, getUser }
)(withStyles(styles)(Login));*/
