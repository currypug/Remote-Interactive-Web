import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Report from "./components/Report";
import Statements from "./components/Statements";
import CrimeScene from "./components/CrimeScene";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Menu from "./components/menu";
import Evidence from "./components/Evidence";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Menu} exact />
            <Route path="/Report" component={Report} />
            <Route path="/Statements" component={Statements} />
            <Route path="/CrimeScene" component={CrimeScene} />
            <Route path="/Evidence" component={Evidence} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
