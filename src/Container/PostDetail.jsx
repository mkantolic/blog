import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, deleteComment } from "../Actions/PostActions";
import AddComment from "./AddComment";
import Comment from "../Components/Comment";
import _ from "lodash";
import renderHTML from "react-render-html";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Layout/Navbar";

class PostDetail extends Component {
  renderComments() {
    return _.map(this.props.post.comments, (comment, key) => {
      return (
        <div>
          <Comment
            key={key}
            head={comment.username}
            body={comment.content}
            id={key}
            delete={comment.uid === this.props.user.uid}
            deleteComment={() => {
              this.props.deleteComment(this.props.match.params.id, key);
            }}
          />
        </div>
      );
    });
  }
  getUsername() {
    var mail = this.props.user.email;
    var username = mail.substring(0, mail.indexOf("@"));
    localStorage.setItem("username", username);

    return username;
  }
  componentWillMount() {
    const { post, history } = this.props;
    if (post === undefined || post === null) {
      history.replace("/");
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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

  render() {
    const { classes, post, history, match, deletePost, user } = this.props;

    if (!post) return null;
    var newTime = post.time,
      formatTime = new Date(newTime).toLocaleString();
    return (
      <div>
        {" "}
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">{renderHTML(post.naslovna)}</div>
              <Typography className="col-lg-4 col-md-6 col-sm-12">
                <h1 className="post-title">{post.title}</h1>
                <span className="signature">Autor : {post.signature}</span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="subject">
          <Typography>
            <span className="post-quill">{renderHTML(post.quill)}</span>
          </Typography>{" "}
          {post.uid === user.uid && (
            <button
              className="button-delete"
              onClick={() => {
                deletePost(match.params.id);
                history.push("/");
              }}
            >
              Izbriši post <i className=" 	far fa-trash-alt" />
            </button>
          )}
          <span className="time">Kreirano: {formatTime}</span>
          <p className="post-category">Kategorija: {post.category}</p>
        </div>{" "}
        <div className="horizontal-line">
          Najnoviji komentari:
          <hr />
        </div>
        <div className="comment">
          <AddComment id={this.props.match.params.id} />
          {this.renderComments()}
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

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    user: state.user,
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { deletePost, deleteComment }
)(PostDetail);

/*import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import _ from "lodash";
import Navbar from "../Layout/Navbar";
import MenuBar from "../Layout/MenuBar";
const styles = {
  title: {
    marginLeft: 650,
    fontSize: 20,
    fontFamily: "'Lobster', cursive"
  },
  post: {
    marginLeft: 150,
    marginRight: 450,
    marginTop: 50,
    fontFamily: "'Montserrat', sans-serif"
  }
};
class PostDetail extends Component {
  render() {
    const { classes, post, match } = this.props;

    return (
      <div>
        <Navbar />
        <MenuBar />
        <Typography className={classes.title}>
          <h1 className="post-title">{post.title}</h1>
        </Typography>
        <Typography className={classes.post}>
          <span className="signature">
            Napisao : {renderHTML(post.signature)}
          </span>
        </Typography>
        <Typography className={classes.post}>
          <span className="post-quill">{renderHTML(post.quill)}</span>
        </Typography>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(withStyles(styles)(PostDetail));
*/
