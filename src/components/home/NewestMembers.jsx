import React, { Component } from "react";
import "../../css/components/home/NewestMembers.css";

class NewestMembersWidget extends Component {
  state = {};
  render() {
    return (
      <div id="newest-member-widget" class="card border-dark">
        <div class="card-header bg-dark text-white">Newest Members</div>
        <div class="media">
          <a class="thumbnail pull-left" href="#">
            <img
              class="media-object"
              src="http://via.placeholder.com/500x500"
            />
          </a>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="#">Username123</a>
            </h4>
            <p>
              <span class="badge badge-info">888 photos</span>{" "}
              <span class="badge badge-warning">150 followers</span>
            </p>
            <p>
              <a href="#" class="btn btn-xs btn-primary">
                <i class="fa fa-comment" /> Message
              </a>
              <a href="#" class="btn btn-xs btn-success">
                <i class="fa fa-user-plus" /> Follow
              </a>
            </p>
          </div>
        </div>

        <div class="media">
          <a class="thumbnail pull-left" href="#">
            <img
              class="media-object"
              src="http://via.placeholder.com/500x500"
            />
          </a>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="#">Username123</a>
            </h4>
            <p>
              <span class="badge badge-info">888 photos</span>{" "}
              <span class="badge badge-warning">150 followers</span>
            </p>
            <p>
              <a href="#" class="btn btn-xs btn-primary">
                <i class="fa fa-comment" /> Message
              </a>
              <a href="#" class="btn btn-xs btn-danger">
                <i class="fa fa-user-minus" /> Unfollow
              </a>
            </p>
          </div>
        </div>

        <div class="media">
          <a class="thumbnail pull-left" href="#">
            <img
              class="media-object"
              src="http://via.placeholder.com/500x500"
            />
          </a>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="#">Username123</a>
            </h4>
            <p>
              <span class="badge badge-info">888 photos</span>{" "}
              <span class="badge badge-warning">150 followers</span>
            </p>
            <p>
              <a href="#" class="btn btn-xs btn-primary">
                <i class="fa fa-comment" /> Message
              </a>
              <a href="#" class="btn btn-xs btn-success">
                <i class="fa fa-user-plus" /> Follow
              </a>
            </p>
          </div>
        </div>

        <div class="media">
          <a class="thumbnail pull-left" href="#">
            <img
              class="media-object"
              src="http://via.placeholder.com/500x500"
            />
          </a>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="#">Username123</a>
            </h4>
            <p>
              <span class="badge badge-info">888 photos</span>{" "}
              <span class="badge badge-warning">150 followers</span>
            </p>
            <p>
              <a href="#" class="btn btn-xs btn-primary">
                <i class="fa fa-comment" /> Message
              </a>
              <a href="#" class="btn btn-xs btn-success">
                <i class="fa fa-user-plus" /> Follow
              </a>
            </p>
          </div>
        </div>

        <div class="media">
          <a class="thumbnail pull-left" href="#">
            <img
              class="media-object"
              src="http://via.placeholder.com/500x500"
            />
          </a>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="#">Username123</a>
            </h4>
            <p>
              <span class="badge badge-info">888 photos</span>{" "}
              <span class="badge badge-warning">150 followers</span>
            </p>
            <p>
              <a href="#" class="btn btn-xs btn-primary">
                <i class="fa fa-comment" /> Message
              </a>
              <a href="#" class="btn btn-xs btn-success">
                <i class="fa fa-user-plus" /> Follow
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewestMembersWidget;
