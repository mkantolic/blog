import React, { Component } from "react";
import { database } from "../Firebase";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../Layout/Navbar.css";
import TextField from "@material-ui/core/TextField";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import { getUser, logout } from "../Actions/UserActions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as firebase from "firebase";
const styles = theme => ({
  container: {
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 15,
    paddingLeft: 30
  },
  root: {
    marginLeft: 10
  },
  head: {
    fontSize: 30,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    position: "absolute",
    color: "rgb(115, 70, 124)",
    fontWeight: 900,
    marginLeft: 50,
    whiteSpace: "nowrap",
    marginTop: 10
  },
  link: {
    textDecoration: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    paddingBottom: 20
  },

  cssLabel: {
    "&$cssFocused": {
      color: "black",
      fontSize: 20
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "black"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "black"
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
    backgroundColor: "black",
    border: "1px solid black",
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
      borderColor: "black",
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
  inputUser: {
    marginLeft: 15,
    fontSize: 18,
    height: "2em",
    width: "20%",
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: "0.2px solid #c0c0c0"
  },
  inputCat: {
    fontFamily: "'Montserrat', sans-serif"
  },
  buttonPost: {
    margin: theme.spacing.unit,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    border: "none",
    borderRadius: "2px",
    color: "#EEEEEE",
    backgroundColor: "rgb(115, 70, 124)",
    fontSize: 20,
    width: 120,
    height: 50,
    marginLeft: 5
  },
  file: {
    margin: theme.spacing.unit,
    fontFamily: "sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderColor: "#D76000",
    color: "#EEEEEE",
    backgroundColor: "#D76000",
    fontSize: 12,
    width: 200,
    height: 50,
    marginBottom: 10
  }
});

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      name: "hai",
      labelWidth: 0,
      time: "",
      title: "",
      quill: "",
      naslovna: "",
      sazetak: "",
      signature: "",
      category: "",
      loading: false,
      username: localStorage.getItem("username") || "",
      posts: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNaslovna = this.handleChangeNaslovna.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
  }
  handleChangeOption = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /*componentWillMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.user.loading === false &&
      nextProps.user.email === undefined
    ) {
      this.props.history.replace("/Login");
    }
  }
  componentDidMount() {
    database.on("value", snapshot => {
      this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }*/
  handleChange(values) {
    console.log(this.state);
    this.setState({ quill: values });
  }
  handleChangeNaslovna(values) {
    console.log(this.state);
    this.setState({ naslovna: values });
  }
  getUsername() {
    var mail = this.props.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    return username;
  }
  onChange = event => {
    const username = event.target.value;
    localStorage.setItem("username", username);
    this.setState({ username });
  };
  onHandleSubmit(values) {
    console.log(this.state);

    const posts = {
      uid: this.props.user.uid,
      title: this.state.title,
      signature: this.state.username,
      naslovna: this.state.naslovna,
      sazetak: this.state.sazetak,
      quill: this.state.quill,
      category: this.state.category,
      time: firebase.database.ServerValue.TIMESTAMP
    };

    this.setState({
      time: "",
      uid: "",
      title: "",
      naslovna: "",
      sazetak: "",
      quill: "",
      signature: "",
      category: ""
    });
    database.push(posts);
    window.location.reload();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <h4 className={classes.head}>Novi članak</h4>

          <form onSubmit={this.onHandleSubmit} className={classes.container}>
            <TextField
              id="outlined-full-width"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
              label="Upiši naslov"
              value={this.state.title}
              onChange={values => {
                this.setState({ title: values.target.value });
              }}
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
            />{" "}
            <br />
            <TextField
              id="outlined-full-width"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
              name="sazetak"
              label="Ukratko opišite o čemu pišete u Vašem članku"
              value={this.state.sazetak}
              onChange={values => {
                this.setState({ sazetak: values.target.value });
              }}
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
            />{" "}
            <br />
            <div>
              {" "}
              <ReactQuill
                name="quill"
                placeholder="Učitajte sliku za naslovnu, koristite CTRL+V kako biste samo kopirali sliku sa interneta, ili ju samo dovucite iz Vaše datoteke."
                value={this.state.naslovna}
                modules={CreateProject.modulesNaslovna}
                formats={CreateProject.formatsNaslovna}
                onChange={this.handleChangeNaslovna}
                className={classes.input}
              />{" "}
            </div>
            <br />
            <ReactQuill
              name="quill"
              placeholder="Sadržaj Vašeg članka (koristite slike manjeg formata), koristite CTRL+V kako biste samo kopirali sliku sa interneta, ili ju samo dovucite iz Vaše datoteke."
              value={this.state.quill}
              modules={CreateProject.modules}
              formats={CreateProject.formats}
              onChange={this.handleChange}
              className={classes.input}
            />{" "}
            <br />
            <div className="autor">
              Autor:
              <input
                value={this.state.username}
                onChange={this.onChange}
                className={classes.inputUser}
              />
            </div>
            <div className="category">
              <InputLabel>Izaberi kategoriju: </InputLabel>
              <Select
                className={classes.inputCat}
                value={this.state.category}
                onChange={this.handleChangeOption}
                inputProps={{
                  name: "category"
                }}
              >
                <MenuItem value={"DSLR"}>DSLR</MenuItem>
                <MenuItem value={"Mirrorless"}>Mirrorless</MenuItem>
                <MenuItem value={"Kompaktni"}>Kompaktni</MenuItem>
                <MenuItem value={"Analogni"}> Analogni</MenuItem>
                <MenuItem value={"Canon"}>Canon </MenuItem>
                <MenuItem value={"Nikon"}>Nikon </MenuItem>
                <MenuItem value={"Sony"}>Sony </MenuItem>
                <MenuItem value={"Pentax"}> Pentax</MenuItem>
                <MenuItem value={"Recenzije fotoaparata"}>
                  Recenzije fotoaparata
                </MenuItem>
                <MenuItem value={"Trikovi za fotoaparate"}>
                  Trikovi za fotoaparate
                </MenuItem>
                <MenuItem value={"Trikovi za video snimanje"}>
                  Trikovi za video snimanje
                </MenuItem>
                <MenuItem value={"Uređivanje fotografije"}>
                  Uređivanje fotografije
                </MenuItem>
                <MenuItem value={"Ostali trikovi"}>Ostali trikovi</MenuItem>
                <MenuItem value={"Bljeskalice"}>Bljeskalice </MenuItem>
                <MenuItem value={"Objektivi"}>Objektivi</MenuItem>
                <MenuItem value={"Zaštita fotoaparata"}>
                  Zaštita fotoaparata
                </MenuItem>
                <MenuItem value={"Ostala oprema"}>Ostala oprema</MenuItem>
              </Select>
            </div>
            <button type="submit" className={classes.buttonPost}>
              Kreiraj
            </button>
          </form>
        </div>
      </div>
    );
  }
}
CreateProject.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

CreateProject.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];
CreateProject.modulesNaslovna = {
  toolbar: [["image"]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

CreateProject.formatsNaslovna = ["image"];

CreateProject.propTypes = {
  classes: PropTypes.object.isRequired
};

CreateProject = connect(
  (state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }),
  { savePost, getPosts, deletePost, getUser, logout }
)(CreateProject);
CreateProject.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};
export default compose(withStyles(styles))(CreateProject);
