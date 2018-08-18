import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/global.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Home } from "./components/Home";
import Status from "./components/Status";
import Login from "./components/Login";
import NotFound from "./components/errors/NotFound";
import Footer from "./components/core/Footer";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
