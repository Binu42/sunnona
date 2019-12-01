import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Album from './component/layout/Landing'
import Signup from './component/signup/Signup'
import Login from './component/login/Login'
import Artist from './component/play/ArtistList'
import Mixed from './component/play/MixedList'
import Genre from './component/play/GenreList'
import Favourite from './component/play/FavouriteList'
import TopSong from './component/play/TopSongList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    let loggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      loggedIn = true
    } else {
      console.log('no token')
    }
    this.state = {
      loggedIn
    };
  }

  componentDidMount() {
    console.log('updating')
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ loggedIn: true })
    } else {
      console.log('no token')
      this.setState({ loggedIn: false })
    }
  }

  routes() {
    if (this.state.loggedIn) {
      return (
        <Fragment>
          <Route
            path="/favourites" exact
            render={() => <Favourite />}
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Route exact path="/register" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
        </Fragment>
      );
    }
  }

  render() {

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
              path="/music"
              exact
              render={() => <TopSong />}
            />
            <Route
              path="/album"
              exact
              render={() => <Album />}
            />
            {/* {this.routes()} */}
            {
              this.state.loggedIn ?
                <Fragment>
                  <Route
                    path="/favourites" exact
                    render={() => <Favourite />}
                  />
                </Fragment>
                :
                <Fragment>
                  <Route exact path="/register" render={() => <Signup />} />
                  <Route exact path="/login" render={() => <Login />} />
                </Fragment>
            }
            <Redirect to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
