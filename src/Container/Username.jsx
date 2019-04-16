import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, savePost, deletePost } from "../Actions/PostActions";
import { saveUser, getProfile } from "../Actions/UserProfile";
import { Field, reduxForm, reset } from "redux-form";
import _ from "lodash";
import PostCard from "../Components/PostCard";
import { getUser, logout } from "../Actions/UserActions";
import { Link } from "react-router-dom";
import { required } from "../Helpers/ReduxFormValidation";
import { database_users } from "../Firebase";
import * as firebase from "firebase";

class Username extends Component {
  renderPosts() {
    console.log(this.props);
    return _.map(this.props.posts, (post, key) => {
      return <div> {post.body}</div>;
    });
  }

  renderField(field) {
    const errStyle = {
      borderColor: "red"
    };
    return (
      <input
        type="text"
        placeholder={`Enter a ${field.label}...`}
        {...field.input}
        className={field.class}
        style={field.meta.touched && field.meta.error ? errStyle : null}
      />
    );
  }

  onSubmit(values) {
    this.props
      .saveUser(values, this.props.user.uid)
      .then(this.props.dispatch(reset("NewUser")));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="navbar">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.logout();
            }}
          >
            Sign out
          </button>
        </div>

        <div className="container">
          <div className="main">{this.renderPosts()}</div>
          <div className="navbar fixed-bottom">
            <form
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
              className="footerForm"
            >
              <Field
                name="title"
                component={this.renderField}
                label="Title"
                class="footer-title"
                validate={required}
              />
              <Field
                name="body"
                component={this.renderField}
                label="Body"
                class="footer-body"
              />
              <button type="submit" className="btn footer-button">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: "NewUser"
})(Username);

form = connect(
  (state, ownProps) => ({
    userProfile: state.userProfile,
    user: state.user
  }),
  { saveUser, getProfile, getUser, logout }
)(form);

export default form;
