import React, { Component } from "react";
import "../css/fontawesome/css/all.min.css";
import Topnav from "./core/Topnav";
import NewsWidget from "./home/News";
import BlogsWidget from "./home/Blogs";
import NewestMembersWidget from "./home/NewestMembers";
import Footer from "./core/Footer";

export class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Topnav page="home" />
        <div class="container">
          <div class="row">
            <div class="col col-sm-8">
              <NewsWidget />
              <BlogsWidget />
            </div>
            <div class="col-sm-4">
              <NewestMembersWidget />
            </div>
          </div>
        </div>
        <Footer page="home" />
      </React.Fragment>
    );
  }
}
