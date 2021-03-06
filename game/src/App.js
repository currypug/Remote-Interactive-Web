import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";

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
      <HashRouter basename="/">
        <div>
          <Route path="/" component={Menu} exact />
          <Route path="/Report" component={Report} />
          <Route path="/Statements" component={Statements} />
          <Route path="/CrimeScene" component={CrimeScene} />
          <Route path="/Evidence" component={Evidence} />
          <Route component={Error} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
