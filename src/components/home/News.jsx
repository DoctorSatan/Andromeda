import React, { Component } from "react";
import "../../css/components/home/News.css";

const liStyle1 = {
  width: "33%"
};

const liStyle2 = {
  width: "34%"
};

// https://avatarfiles.alphacoders.com/147/147812.jpg

class NewsWidget extends Component {
  state = {};

  render() {
    return (
      <div class="card border-dark">
        <div class="card-header bg-dark text-white">Latest News Post</div>
        <ul class="event-list">
          <li>
            <time datetime="2014-07-20 2000">
              <span class="day">12</span>
              <span class="month">Aug</span>
              <span class="year">2017</span>
              <span class="time">8:55 PM</span>
            </time>
            <img alt="" src="http://via.placeholder.com/500x500" />
            <div class="info">
              <h2 class="title">
                <a href="#">News Title by Username123</a>
              </h2>
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore...
              </p>
              <ul>
                <li style={liStyle1}>
                  1 <span class="glyphicon glyphicon-ok" />
                </li>
                <li style={liStyle2}>
                  3 <span class="fa fa-question" />
                </li>
                <li style={liStyle1}>
                  103 <span class="fa fa-envelope" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NewsWidget;
