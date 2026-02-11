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

          <Route exact path="/" render={() => (
            <News
              key="general"
              country={this.country}
              pageSize={this.pageSize}
              category="general"
            />
          )} />

          <Route exact path="/business" render={() => (
            <News
              key="business"
              country={this.country}
              pageSize={this.pageSize}
              category="business"
            />
          )} />

          <Route exact path="/entertainment" render={() => (
            <News
              key="entertainment"
              country={this.country}
              pageSize={this.pageSize}
              category="entertainment"
            />
          )} />

          <Route exact path="/health" render={() => (
            <News
              key="health"
              country={this.country}
              pageSize={this.pageSize}
              category="health"
            />
          )} />

          <Route exact path="/science" render={() => (
            <News
              key="science"
              country={this.country}
              pageSize={this.pageSize}
              category="science"
            />
          )} />

          <Route exact path="/sports" render={() => (
            <News
              key="sports"
              country={this.country}
              pageSize={this.pageSize}
              category="sports"
            />
          )} />

          <Route exact path="/technology" render={() => (
            <News
              key="technology"
              country={this.country}
              pageSize={this.pageSize}
              category="technology"
            />
          )} />

          <Route render={() => (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h2>
          )} />

        </Switch>
      </Router>
    )
  }
}
