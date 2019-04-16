import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import { getUser, logout } from "../Actions/UserActions";
import "../Layout/Navbar.css";
import CreateProject from "../Container/CreateProject";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = {
  root: {
    flexGrow: 1
  },
  side: {
    marginTop: "-20%",
    marginLeft: "50%"
  },
  button: {
    color: "black",
    fontSize: 18,
    alignItems: "center",
    height: 50,
    fontFamily: "'Montserrat', sans-serif",
    background: "transparent",
    margin: "5%"
  },
  me: {
    padding: "50%"
  },
  tit: {
    textDecoration: "none"
  },
  link: {
    color: "black",
    textDecoration: "none"
  },
  fab: {
    backgroundColor: " rgb(115, 70, 124)",
    width: "200%",
    height: "100%",
    fontSize: 20,
    color: "white",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#e0e0e0"
  },
  menu: {
    backgroundColor: " rgb(115, 70, 124)",
    cursor: "pointer"
  },
  paper: {
    position: "relative",
    width: "50%",
    backgroundColor: "white",
    padding: "2%",
    outline: "none"
  },
  modalStyle1: {
    overflow: "scroll",
    height: "100%",
    display: "block"
  },
  cursor: {
    cursor: "pointer"
  }
};
class SignedInLinks extends Component {
  state = {
    open: false,
    anchorEl: null
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose1 = () => {
    this.setState({ open: false });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  getUsername() {
    var mail = this.props.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    localStorage.setItem("username", username);

    return username;
  }
  render() {
    const { classes, post } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <div className="dropdown">
          <button className="dropbtn">Tips'n'tricks</button>
          <div className="dropdown-content">
            <a href="#">Sve</a>
            <a href="#">Kamera trikovi</a>
            <a href="#">Video trikovi</a>
            <a href="#">Editiranje</a>
          </div>
        </div>
        <div className="sticky-small">
          <div className="dropdown">
            <Fab
              aria-label="Add"
              className={classes.fab}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
            >
              <i className="fas fa-camera" />
            </Fab>
            <div className="dropdown-content">
              <NavLink to="/quiz" className={classes.link}>
                Quiz
              </NavLink>
              <a onClick={this.handleOpen} className={classes.cursor}>
                Kreiraj
              </a>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose1}
                className={this.props.classes.modalStyle1}
              >
                <div style={getModalStyle()} className={classes.paper}>
                  <CreateProject />
                </div>
              </Modal>{" "}
              <a
                onClick={() => {
                  this.props.logout();
                }}
                className={classes.menu}
              >
                Izađi
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SignedInLinks = connect(
  (state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }),
  { savePost, getPosts, deletePost, getUser, logout }
)(SignedInLinks);
SignedInLinks.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(SignedInLinks);
/*   <MenuItem className={classes.menu} onClick={this.handleClose}>
              Quiz
            </MenuItem>
            <Link to="/create" className={classes.link}>
              <MenuItem className={classes.menu}>Kreiraj</MenuItem>
            </Link>
            <MenuItem
              onClick={() => {
                this.props.logout();
              }}
              className={classes.menu}
            >
              Izađi
            </MenuItem> */
/*  <div className="sticky-anchor" />
        <div className="sticky">
          <Button className="button1">{this.getUsername()}</Button>
          <Link to="/quiz" className={classes.link}>
            <Button className="button1">Quiz</Button>
          </Link>{" "}
          <br />
          <Button onClick={this.handleOpen} className="button1">
            Kreiraj članak
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose1}
            className={this.props.classes.modalStyle1}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <CreateProject />
            </div>
          </Modal>{" "}
          <br />
          <Button
            className="button1"
            onClick={() => {
              this.props.logout();
            }}
          >
            Odjavi se
          </Button>{" "}
          <br />
        </div> */
/*  <div className="sticky ">
          <div className="dropdown ">
            <Button
              className="button1"
              aria-label="Add"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
            >
              <i className="fas fa-camera" />
              <span className="user-name"> {this.getUsername()}</span>
            </Button>
            <div className="dropdown-content">
              <NavLink to="/quiz" className={classes.link}>
                Quiz
              </NavLink>
              <a onClick={this.handleOpen} className={classes.cursor}>
                Kreiraj članak
              </a>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose1}
                className={this.props.classes.modalStyle1}
              >
                <div style={getModalStyle()} className={classes.paper}>
                  <CreateProject />
                </div>
              </Modal>{" "}
              <a
                onClick={() => {
                  this.props.logout();
                }}
                className={classes.menu}
              >
                Izađi
              </a>
            </div>{" "}
          </div>
        </div>{" "} */
