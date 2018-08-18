import React, { Component } from "react";
import Topnav from "./core/Topnav";
import Footer from "./core/Footer";
import PostStatus from "./status/PostStatus";
import StatusPosts from "./status/StatusPosts";

class Status extends Component {
  render() {
    return (
      <React.Fragment>
        <Topnav page="status" />
        <div class="container">
          <PostStatus />
          <StatusPosts />
        </div>
        <Footer page="status" />
      </React.Fragment>
    );
  }
}

export default Status;
