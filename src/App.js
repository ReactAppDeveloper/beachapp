import React, { Component } from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}
