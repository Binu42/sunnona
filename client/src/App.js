import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './component/layout/Landing'
import Signup from './component/signup/Signup'
import Login from './component/login/Login'
import Artist from './component/play/ArtistList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    let loggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      loggedIn = true
    }
    this.state = {
      loggedIn
    };
  }

  render() {
    let routes;
    if (this.state.loggedIn) {
      routes = (
        <Route
          path="/favourites"
          exact
          render={() => <Home />}
        />
      );
    } else {
      routes = (
        <Fragment>
          <Route exact path="/register" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home />}
            />
            <Route
              path="/artist"
              exact
              render={() => <Artist />}
            />
            {routes}
            <Redirect to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
