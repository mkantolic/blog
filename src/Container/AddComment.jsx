import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { saveComment } from "../Actions/PostActions";
import { required } from "../Helpers/ReduxFormValidation";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      username: localStorage.getItem("username") || ""
    };
  }
  // username: localStorage.getItem("username") || ""
  getUsername(username) {
    localStorage.getItem("username", username);
    console.log(localStorage.username);
    return this.state.username;
  }
  /*
    console.log(this.props.uid);
    var obj = new App();
    var username = obj.getUsername();
    console.log(username);
    */
  /*var mail = this.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    console.log(username);
    return username;}*/

  onChange = event => {
    const username = event.target.value;
    localStorage.setItem("username", username);
    this.setState({ username });
  };
  onSubmit() {
    const comment = {
      content: this.state.content,
      username: this.state.username
    };
    this.props.saveComment(comment, this.props.id, this.props.uid).then(() => {
      this.props.dispatch(reset("CreateCommentForm"));
    });
  }
  renderName(field) {
    const {
      meta: { touched, error }
    } = field;
    const errStyle = {
      borderColor: "red"
    };
    return (
      <div>
        <textarea
          className="field"
          placeholder="Upiši svoj komentar..."
          style={touched && error ? errStyle : null}
          {...field.input}
        />
      </div>
    );
  }
  renderComment(field) {
    const {
      meta: { touched, error }
    } = field;
    const errStyle = {
      borderColor: "red"
    };
    return (
      <div>
        <textarea
          className="field"
          placeholder="Upiši svoj komentar..."
          style={touched && error ? errStyle : null}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    console.log(this.props.uid);
    console.log(this.state.username);
    const { handleSubmit, classes } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {" "}
        <div className="save-comment">
          <button type="submit" className="btn-save">
            Spremi komentar
            <i className=" 	far fa-paper-plane" />
          </button>
        </div>
        <div>
          {" "}
          <i class=" fas fa-user " />{" "}
          <input
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className="input-user"
          />{" "}
        </div>
        <br />
        <textarea
          placeholder="Komentiraj.."
          name="content"
          value={this.state.content}
          onChange={values => {
            this.setState({ content: values.target.value });
          }}
          className="input-comment"
        />
        <div className="d-flex justify-content-end mt-1" />
      </form>
    );
  }
}

export default reduxForm({
  form: "CreateCommentForm"
})(
  connect(
    (state, ownProps) => ({ uid: state.user.uid }),
    { saveComment }
  )(AddComment)
);
