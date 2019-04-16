import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import { reduxForm } from "redux-form";
import _ from "lodash";
import { getUser, logout } from "../Actions/UserActions";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import CreateProject from "./CreateProject";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import renderHTML from "react-render-html";
import compose from "recompose/compose";
import * as firebase from "firebase";
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import QuizHome from "../Quiz/QuizHome";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from "@material-ui/core/Tooltip";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import { database } from "../Firebase";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    borderRadius: "0",
    boxShadow: "none"
  },
  rootMenu: {
    backgroundColor: "#9e9e9e",
    borderRadius: "0",
    boxShadow: "none"
  },
  title: {
    left: 20,
    fontSize: 20,
    fontFamily: " 'Josefin Sans', sans-serif;"
  },
  col: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 40,
    overflow: "hidden",
    flexDirection: "row",
    md: "auto",
    spacing: 0,
    actionPosition: "right",
    item: "true"
  },
  card: {
    maxWidth: 600,
    backgroundColor: "#e0e0e0",
    marginTop: -10
  },
  media: {
    verticalAlign: "middle",
    height: 200,
    top: 5
  },
  overlay: {
    position: "absolute",
    top: "160px",
    color: "black",
    backgroundColor: "rgba(176, 181, 177, 0.45)",
    width: 600
  },
  container: {
    display: "flex"
  },
  paper: {
    position: "relative",
    width: "50%",
    backgroundColor: "white",
    borderRadius: "0",
    transition: "all linear 0.1s"
  },
  modalStyle1: {
    overflow: "scroll",
    height: "100%",
    display: "block"
  },
  customWidth: {
    maxWidth: 500
  }
});

function search(category) {
  var returnArr = [];
  database
    .orderByChild("category")
    .equalTo(category)
    .on("child_added", function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
      console.log(returnArr);
    });
  if (returnArr == 0) {
    return (
      <div>
        {" "}
        <p className="no-cat">Još nema članaka za traženu kategoriju :(</p>
        <p className="no-cat">
          Budi prvi autor koji će napisati članak za ovu kategoriju!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        {returnArr.map(arr => (
          <Link to={`/${arr.key}`}>
            <div className="tile">
              <CardMedia>
                {renderHTML(arr.naslovna)}
                <div className="text">
                  <h1>{arr.title}</h1>

                  <p className="animate-text">
                    <span className="sazetak"> {arr.sazetak}</span>
                  </p>
                  <p className="animate-text">
                    <span>Autor: {arr.signature}</span> <br />
                  </p>
                </div>
              </CardMedia>
            </div>{" "}
          </Link>
        ))}{" "}
      </div>
    );
  }
}

const longText = ` Najnoviji članci :) `;
const longText2 = `Nisi siguran koja vrsta fotoaparata je za tebe? Odigraj kviz! `;
const longText3 = ` Imaš ideju za članak? Voliš recenzirati fotoaparate? Znaš par trikova za fotkanje? Podijeli ih s nama! `;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current: 0,
      value: 0,
      message: localStorage.getItem("message") || ""
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handeleScroll);
  }
  handeleScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  toggle(index) {
    this.setState({
      current: index
    });
  }
  getTime() {
    return <div>hello</div>;
  }
  renderUser() {
    console.log(this.props.username);
  }
  /*  var newTime = post.time,
        formatTime = new Date(newTime).toLocaleString();*/
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <Link to={`/${key}`}>
          <div className="tile">
            <CardMedia>
              {renderHTML(post.naslovna)}
              <div className="text">
                <h1>{post.title}</h1>

                <p className="animate-text">
                  <span className="sazetak"> {post.sazetak}</span>
                </p>
                <p className="animate-text">
                  <span>Autor: {post.signature}</span> <br />
                </p>
              </div>
            </CardMedia>
          </div>{" "}
        </Link>
      );
    });
  }

  adduserid() {
    var user = firebase.auth().currentUser;
    var userid = user.uid;
    console.log(userid);
  }
  getUsername() {
    var mail = this.props.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    localStorage.setItem("username", username);

    return username;
  }
  onChange = event => {
    const message = event.target.value;

    localStorage.getItem("message", message);
    this.setState({ message });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />

        <Paper className={classes.root}>
          <div className="dropdown">
            <button className="dropbtn">Tipovi fotoaparata</button>
            <div className="dropdown-content">
              <a onClick={this.toggle.bind(this, 4)}> DSLR </a>
              <a onClick={this.toggle.bind(this, 5)}>Mirrorless</a>
              <a onClick={this.toggle.bind(this, 6)}>Kompaktni</a>
              <a onClick={this.toggle.bind(this, 7)}>Analogni</a>
              <a onClick={this.toggle.bind(this, 8)}>Canon</a>
              <a onClick={this.toggle.bind(this, 9)}>Nikon</a>
              <a onClick={this.toggle.bind(this, 10)}>Sony</a>
              <a onClick={this.toggle.bind(this, 11)}>Pentax</a>
              <a onClick={this.toggle.bind(this, 12)}>Recenzije fotoaparata</a>
            </div>{" "}
          </div>
          <div className="dropdown">
            <button className="dropbtn">Tips'n'tricks</button>
            <div className="dropdown-content">
              <a onClick={this.toggle.bind(this, 13)}>Trikovi za fotoaparate</a>
              <a onClick={this.toggle.bind(this, 14)}>
                Trikovi za video snimanje
              </a>
              <a onClick={this.toggle.bind(this, 15)}>Uređivanje fotografije</a>
              <a onClick={this.toggle.bind(this, 16)}>Ostali trikovi</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Oprema</button>
            <div className="dropdown-content">
              <a onClick={this.toggle.bind(this, 17)}>Objektivi</a>
              <a onClick={this.toggle.bind(this, 18)}>Bljeskalice</a>
              <a onClick={this.toggle.bind(this, 19)}>Zaštita fotoaparata</a>
              <a onClick={this.toggle.bind(this, 20)}>Ostala oprema</a>
            </div>
          </div>
        </Paper>
        <Paper className={classes.rootMenu}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="grey"
            textColor="grey"
            variant="fullWidth"
          >
            <Tooltip title={longText}>
              <Tab
                className="menu-bar"
                label="Početna"
                onClick={this.toggle.bind(this, 0)}
              />
            </Tooltip>
            <Tooltip title={longText2}>
              <Tab
                className="menu-bar"
                label="Quiz"
                onClick={this.toggle.bind(this, 2)}
              />
            </Tooltip>
            <Tooltip title={longText3}>
              <Tab
                className="menu-bar"
                label="Kreiraj članak"
                onClick={this.toggle.bind(this, 3)}
              />
            </Tooltip>
          </Tabs>
        </Paper>
        <SwipeableViews index={this.state.current} onChangeIndex={this.toggle}>
          <div
            className={`collapsible ${this.state.current === 0 ? "open " : ""}`}
          >
            <div className="row">
              <div className="col-10 right">{this.renderPosts().reverse()}</div>
            </div>
          </div>{" "}
          <div
            className={`collapsible ${this.state.current === 2 ? "open " : ""}`}
          >
            <QuizHome />
          </div>
          <div
            className={`collapsible ${this.state.current === 3 ? "open " : ""}`}
          >
            <CreateProject />
          </div>
        </SwipeableViews>
        <div
          className={`collapsible ${this.state.current === 4 ? "open " : ""}`}
        >
          {search("DSLR")}
        </div>
        <div
          className={`collapsible ${this.state.current === 5 ? "open " : ""}`}
        >
          {" "}
          {search("Mirrorless")}{" "}
        </div>
        <div
          className={`collapsible ${this.state.current === 6 ? "open " : ""}`}
        >
          {" "}
          {search("Kompaktni")}
        </div>
        <div
          className={`collapsible ${this.state.current === 7 ? "open " : ""}`}
        >
          {" "}
          {search("Analogni")}
        </div>
        <div
          className={`collapsible ${this.state.current === 8 ? "open " : ""}`}
        >
          {" "}
          {search("Canon")}
        </div>
        <div
          className={`collapsible ${this.state.current === 9 ? "open " : ""}`}
        >
          {" "}
          {search("Nikon")}
        </div>
        <div
          className={`collapsible ${this.state.current === 10 ? "open " : ""}`}
        >
          {" "}
          {search("Sony")}
        </div>
        <div
          className={`collapsible ${this.state.current === 11 ? "open " : ""}`}
        >
          {" "}
          {search("Pentax")}
        </div>
        <div
          className={`collapsible ${this.state.current === 12 ? "open " : ""}`}
        >
          {" "}
          {search("Recenzije fotoaparata")}
        </div>
        <div
          className={`collapsible ${this.state.current === 13 ? "open " : ""}`}
        >
          {" "}
          {search("Trikovi za fotoaparate")}
        </div>
        <div
          className={`collapsible ${this.state.current === 14 ? "open " : ""}`}
        >
          {" "}
          {search("Trikovi za video snimanje")}
        </div>
        <div
          className={`collapsible ${this.state.current === 15 ? "open " : ""}`}
        >
          {" "}
          {search("Uređivanje fotografije")}
        </div>
        <div
          className={`collapsible ${this.state.current === 16 ? "open " : ""}`}
        >
          {" "}
          {search("Ostali trikovi")}
        </div>
        <div
          className={`collapsible ${this.state.current === 17 ? "open " : ""}`}
        >
          {" "}
          {search("Bljeskalice")}
        </div>
        <div
          className={`collapsible ${this.state.current === 18 ? "open " : ""}`}
        >
          {" "}
          {search("Objektivi")}
        </div>
        <div
          className={`collapsible ${this.state.current === 19 ? "open " : ""}`}
        >
          {" "}
          {search("Zaštita fotoaparata")}
        </div>
        <div
          className={`collapsible ${this.state.current === 20 ? "open " : ""}`}
        >
          {" "}
          {search("Ostala oprema")}
        </div>
        <button
          onClick={this.topFunction}
          id="myBtn"
          className="sticky"
          title="Go to top"
        >
          <i class="fas fa-angle-up" />
        </button>
      </div>
    );
  }
}

let form = reduxForm({
  form: "NewPost"
})(App);

form = connect(
  (state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }),
  { savePost, getPosts, deletePost, getUser, logout }
)(form);
form.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};
export default compose(
  withStyles(styles, { withTheme: true }),
  withWidth()
)(form);
/* searchDSLR() {
    var returnArr = [];
    database
      .orderByChild("category")
      .equalTo("DSLR")
      .on("child_added", function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);

        console.log(returnArr);
      });

    console.log(returnArr);
    return (
      <div>
        {returnArr.map(arr => (
          <Link to={`/${arr.key}`}>
            <div className="tile">
              <CardMedia>
                {renderHTML(arr.naslovna)}
                <div className="text">
                  <h1>{arr.title}</h1>

                  <p className="animate-text">
                    <span className="sazetak"> {arr.sazetak}</span>
                  </p>
                  <p className="animate-text">
                    <span>Autor: {arr.signature}</span> <br />
                  </p>
                </div>
              </CardMedia>
            </div>{" "}
          </Link>
        ))}{" "}
      </div>
    );
  } */
