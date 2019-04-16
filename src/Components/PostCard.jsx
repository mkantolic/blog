import React, { Component } from "react";
import "../Layout/Navbar.css";
export default class PostCard extends Component {
  render() {
    return (
      <div className="card post">
        <div className="card-block">{this.props.children}</div>
      </div>
    );
  }
}
