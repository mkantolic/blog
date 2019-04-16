import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import { Field, reduxForm, reset } from "redux-form";
import _ from "lodash";
import { getUser, logout } from "../Actions/UserActions";
import SignedInLinks from "./SignedInLinks";
class Dashboard extends Component {
  /* componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
    if (
      this.props.user.loading === false &&
      this.props.user.email === undefined
    ) {
      this.props.history.replace("/Login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.user.loading === false &&
      nextProps.user.email === undefined
    ) {
      this.props.history.replace("/Login");
    }
  }*/

  render() {
    return (
      <div>
        <button
          className="button1"
          onClick={() => {
            this.props.logout();
          }}
        >
          Odjavi se
        </button>{" "}
      </div>
    );
  }
}

let form = reduxForm({
  form: "NewPost"
})(Dashboard);
form = connect(
  (state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }),
  { savePost, getPosts, deletePost, getUser, logout }
)(form);

export default form;
