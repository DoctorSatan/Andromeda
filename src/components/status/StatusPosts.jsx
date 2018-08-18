import React, { Component } from "react";
import "../../css/components/status/StatusPosts.css";

class StatusPosts extends Component {
  state = {};
  render() {
    return (
      <div class="card">
        <div class="card-header bg-dark text-white">Status Posts</div>

        <div class="card-body">
          <div class="[ panel panel-default ] panel-google-plus">
            <div class="dropdown">
              <span
                class="dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span class="[ glyphicon glyphicon-chevron-down ]" />
              </span>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    Action
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    Another action
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    Something else here
                  </a>
                </li>
                <li role="presentation" class="divider" />
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="panel-google-plus-tags">
              <ul>
                <li>#Millennials</li>
                <li>#Generation</li>
              </ul>
            </div>
            <div class="panel-heading">
              <img
                class="[ img-circle pull-left ]"
                src="http://via.placeholder.com/60x60"
                alt="Mouse0270"
              />
              <h3>
                <a href="#">Username123</a>
              </h3>
              <h5>
                <span>Shared publicly</span> - <span>Jun 27, 2014</span>{" "}
              </h5>
            </div>
            <div class="panel-body">
              <p>
                Do people born in 2000 get to choose if they are Generation Y or
                Generation Z? How do you decide what generation you want to
                belong to?
              </p>
            </div>
            <div class="panel-footer">
              <button type="button" class="[ btn btn-default ]">
                +1
              </button>
              <button type="button" class="[ btn btn-default ]">
                <span class="[ glyphicon glyphicon-share-alt ]" />
              </button>
              <div class="input-placeholder">Add a comment...</div>
            </div>
            <div class="panel-google-plus-comment">
              <img
                class="img-circle"
                src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46"
                alt="User Image"
              />
              <div class="panel-google-plus-textarea">
                <textarea rows="4" />
                <button type="submit" class="[ btn btn-success disabled ]">
                  Post comment
                </button>
                <button type="reset" class="[ btn btn-default ]">
                  Cancel
                </button>
              </div>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusPosts;
