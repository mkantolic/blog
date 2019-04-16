import React, { Component } from "react";
import InputField from "../Components/InputField";
import FooterFormButton from "../Components/FooterFormButton";
import { login, getUser } from "../Actions/UserActions";
import { connect } from "react-redux";
import ErrorAlert from "../Components/ErrorAlert";
import Home from "../Container/Home";
import CreateAccount from "../Container/CreateAccount";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
