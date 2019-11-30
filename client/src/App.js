import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Album from './component/layout/Landing'
import Signup from './component/signup/Signup'
import Login from './component/login/Login'
import Artist from './component/play/ArtistList'
import Mixed from './component/play/MixedList'
import Genre from './component/play/GenreList'
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
          render={() => <Album />}
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
              render={() => <Mixed />}
            />
            <Route
              path="/artist"
              exact
              render={() => <Artist />}
            />
            <Route
              path="/genre"
              exact
              render={() => <Genre />}
            />
            <Route
              path="/album"
              exact
              render={() => <Album />}
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
