import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './component/layout/Landing'
import Signup from './component/signup/Signup'
import Login from './component/login/Login'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let routes;
    if (false) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home />}
          />
          {/* <Route
            path="/dashboard"
            render={() => <Dashboard loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/publications" render={() => <Publication loggedIn={this.props.loggedIn} user={this.props.user}/>}
          /> */}
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home />}
          />
          <Route exact path="/Register" render={() => <Signup />} />
          <Route exact path="/Login" render={() => <Login />} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Router>{routes}</Router>
      </div>
    );
  }
}

export default App;
