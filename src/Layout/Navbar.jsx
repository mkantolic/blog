import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getUser, logout } from "../Actions/UserActions";
import { withStyles } from "@material-ui/core/styles";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import compose from "recompose/compose";
import { connect } from "react-redux";
import "./Navbar.css";
import DSLR from "../Container/DSLR";

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    color: "#d6d7da",
    fontSize: 18,
    alignItems: "center",
    height: 50,
    fontFamily: "'Montserrat', sans-serif",
    cursor: "pointer"
  },
  tit: {
    textDecoration: "none",
    cursor: "pointer"
  },
  side: {
    marginTop: "-20%",
    marginLeft: "50%"
  },
  me: {
    padding: "50%"
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
    backgroundColor: "#8c57a8",
    cursor: "pointer",
    color: "white"
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

class NavbarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }
  toggle(index) {
    this.setState({
      current: index
    });
  }
  getUsername() {
    console.log(this.props.user.uid);
    console.log(this.props.user.email);
    var mail = this.props.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    localStorage.setItem("username", username);

    return username;
  }

  render() {
    const { classes } = this.props;
    return (
      <nav id="menu" className="menu " className="appbar">
        <Link to="/" className={classes.tit}>
          {" "}
          <button className="but-title">Kroz objektiv</button>{" "}
        </Link>

        <div className="dropdown-user user-field effect-07 ">
          <button
            className="dropbtn-user  "
            onClick={() => {
              this.props.logout();
            }}
          >
            {" "}
            <i className="fas fa-camera" />
            <span className="user-name"> {this.getUsername()}</span>
          </button>
        </div>
      </nav>
    );
  }
}
NavbarPage = connect(
  (state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }),
  { savePost, getPosts, deletePost, getUser, logout }
)(NavbarPage);
NavbarPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(NavbarPage);
/* <div className={classes.root}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.tit}> <h3 className="title " > Kroz objektiv </h3></Link>
          </Typography>
           
          <Button variant="outlined" className={classes.button}>
            QUIZ
          </Button> 
          <Button variant="outlined" className={classes.button}>
          <Link to="/create" className={classes.link}>Kreiraj post</Link>
          </Button> 
        </Toolbar>
      </AppBar>
    </div> */
/* <div>
        <form action=" " className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button type="submit" className="button-search">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>  */
/* 
 <div className="dropdown">
          <button className="dropbtn">Tipovi fotoaparata</button>
          <div className="dropdown-content">
            <a onClick={this.toggle.bind(this, 1)}> DSLR </a>
            <a href="#">Mirrorless</a>
            <a href="#">Kompaktni</a>
            <a href="#">Analogni</a>
            <a href="#">Canon</a>
            <a href="#">Nikon</a>
            <a href="#">Sony</a>
            <a href="#">Pentax</a>
            <a href="#">Recenzije fotoaparata</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tips'n'tricks</button>
          <div className="dropdown-content">
            <a href="#">Trikovi za fotoaparate</a>
            <a href="#">Trikovi za video snimanje</a>
            <a href="#">Uređivanje fotografije</a>
            <a href="#">Ostali trikovi</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Oprema</button>
          <div className="dropdown-content">
            <a href="#">Objektivi</a>
            <a href="#">Bljeskalice</a>
            <a href="#">Zaštita fotoaparata</a>
            <a href="#">Ostala oprema</a>
          </div>
        </div>
       
*/
