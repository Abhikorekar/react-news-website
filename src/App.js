import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {

  pageSize = 12;
  country = "us";

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <News key="general" country="us" pageSize={12} category="general"/>
          </Route>

          <Route exact path="/business">
            <News key="business" country="us" pageSize={12} category="business"/>
          </Route>

          <Route exact path="/entertainment">
            <News key="entertainment" country="us" pageSize={12} category="entertainment"/>
          </Route>

          <Route exact path="/health">
            <News key="health" country="us" pageSize={12} category="health"/>
          </Route>

          <Route exact path="/science">
            <News key="science" country="us" pageSize={12} category="science"/>
          </Route>

          <Route exact path="/sports">
            <News key="sports" country="us" pageSize={12} category="sports"/>
          </Route>

          <Route exact path="/technology">
            <News key="technology" country="us" pageSize={12} category="technology"/>
          </Route>

        </Switch>
      </Router>
    )
  }
}
