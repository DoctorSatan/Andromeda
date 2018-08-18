import React, { Component } from "react";
import "../../css/components/status/PostStatus.css";
import "../../js/components/status/PostStatus.js";

class PostStatus extends Component {
  state = {};
  render() {
    return (
      <div class="card">
        <div class="card-header bg-dark text-white">
          Post a Status
          <button
            id="collapse-post-status"
            class="btn btn-link text-white"
            data-toggle="collapse"
            data-target="#post-status"
            aria-expanded="true"
            aria-controls="post-status"
          >
            <i class="fa fa-minus-square" />
          </button>
        </div>

        <div id="post-status">
          <div class="card-body">
            <form>
              <textarea
                class="form-control"
                placeholder="Please log in to post a status..."
                disabled
              />
              <button
                id="post-status-button"
                type="submit"
                class="btn btn-success"
                disabled
              >
                <i class="fa fa-pen-square" />
                &nbsp; Post Status
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostStatus;
