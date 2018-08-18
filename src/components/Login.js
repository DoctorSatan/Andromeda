import React, { Component } from "react";
import Topnav from "./core/Topnav";
import Footer from "./core/Footer";
import LoginForm from "./login/LoginForm";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Topnav page="login" />
        <div class="container">
          <LoginForm />
        </div>
        <Footer page="login" />
      </React.Fragment>
    );
  }
}

export default Login;
