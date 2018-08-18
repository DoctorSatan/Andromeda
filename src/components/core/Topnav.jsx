import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topnav extends Component {
  state = {};

  render() {
    let homeClass = "nav-item";
    let statusClass = "nav-item";
    let forumsClass = "nav-item";
    let chatroomsClass = "nav-item";
    let blogsClass = "nav-item";
    let loginClass = "nav-item";
    let registerClass = "nav-item";

    // Highlight the "active" link
    switch (this.props.page) {
      case "home":
        homeClass = "nav-item active";
        break;
      case "status":
        statusClass = "nav-item active";
        break;
      case "forums":
        forumsClass = "nav-item active";
        break;
      case "chatrooms":
        chatroomsClass = "nav-item active";
      case "blogs":
        blogsClass = "nav-item active";
        break;
      case "login":
        loginClass = "nav-item active";
        break;
      case "register":
        registerClass = "nav-item active";
        break;
      default:
        homeClass = "nav-item active";
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          Site Name
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
          <ul class="navbar-nav mr-auto">
            <li class={homeClass}>
              <Link class="nav-link waves-effect waves-light" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class={statusClass}>
              <Link class="nav-link waves-effect waves-light" to="/status">
                Status
              </Link>
            </li>
            <li class={forumsClass}>
              <Link class="nav-link waves-effect waves-light" to="/forums">
                Forums
              </Link>
            </li>
            <li class={chatroomsClass}>
              <Link class="nav-link waves-effect waves-light" to="/chatrooms">
                Chatrooms
              </Link>
            </li>
            <li class={blogsClass}>
              <Link class="nav-link waves-effect waves-light" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class={loginClass}>
              <Link class="nav-link waves-effect waves-light" to="/login">
                Login
              </Link>
            </li>
            <li class={registerClass}>
              <Link class="nav-link waves-effect waves-light" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Topnav;
