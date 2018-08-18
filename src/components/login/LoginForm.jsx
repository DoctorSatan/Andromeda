import React, { Component } from "react";
import "../../css/components/login/LoginForm.css";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div class="card">
        <div class="card-header bg-dark text-white">Login</div>

        <div class="card-body">
          <form>
            <label>Username:</label>
            <input type="text" class="form-control" />

            <label>Password:</label>
            <input type="password" class="form-control" />

            <button type="submit" class="btn btn-primary">
              <i class="fa fa-user-plus" /> Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
