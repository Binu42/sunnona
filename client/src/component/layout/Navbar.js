// import React from 'react';
import { Component } from 'react'
import { Route } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Axios from 'axios'
// Toggle, Nav, 

import React from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      loggedIn = true;
    }
    this.state = {
      loggedIn
    }
  }

  render() {
    let routes, route1;
    if (!this.state.loggedIn) {
      routes = (
        <NavItem eventKey="login">
          <NavIcon>
            <i className="fas fa-sign-in-alt"></i>
          </NavIcon>
          <NavText>
            Login
              </NavText>
        </NavItem>)

      route1 = (<NavItem eventKey="register">
        <NavIcon>
          <i className="fas fa-sign-out-alt"></i>
        </NavIcon>
        <NavText>
          Register
            </NavText>
      </NavItem>)
    }
    else {
      route1 = (
        <NavItem eventKey="logout">
          <NavIcon>
            <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
          </NavIcon>
          <NavText>
            Logout
          </NavText>
        </NavItem>)
      routes = (
        <NavItem eventKey="favourites">
          <NavIcon>
            <i className="im im-heart text-danger"></i>
          </NavIcon>
          <NavText>
            Favourites
          </NavText>
        </NavItem>
      )
    }
    return (
      <Route render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              if (selected === "logout") {
                localStorage.removeItem('token');
                localStorage.removeItem('userName');
                this.setState({ loggedIn: false });
                Axios.get('http://localhost:4000/logout')
                  .then(user => {
                    if (user)
                      history.push('/')
                  })
              } else {
                if (location.pathname !== to) {
                  history.push(to);
                }
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="">
              <NavItem eventKey="">
                <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Home
              </NavText>
              </NavItem>
              <NavItem eventKey="album">
                <NavIcon>
                  <svg className="white_col" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.682c-.002 1.555-1.17 2.318-2.24 2.318-.903 0-1.76-.544-1.76-1.616 0-1.104 1.201-2.118 2.515-2.118.161 0 .323.015.485.047v-4.312l-6 1.229v5.45c-.002 1.556-1.18 2.32-2.258 2.32-.906 0-1.742-.542-1.742-1.61 0-1.106 1.201-2.125 2.518-2.125.16 0 .322.015.484.047v-6.52l7.998-1.792v8.682zm-13-6.682c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-1c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm-1.818 2.646c-1.293-.508-2.319-1.534-2.827-2.827l-1.025.128c.6 1.746 1.979 3.125 3.725 3.724l.127-1.025zm-4.869-2.572l-1 .125c.757 2.648 2.84 4.731 5.488 5.488l.125-1c-2.194-.683-3.93-2.418-4.613-4.613zm8.505-6.72c1.293.508 2.319 1.534 2.827 2.828l1.025-.128c-.6-1.746-1.979-3.125-3.725-3.725l-.127 1.025zm-1.771 15.644c.082-.734.378-1.441.878-2.045-.304.03-.613.047-.925.047-4.963 0-9-4.038-9-9s4.037-9 9-9c4.912 0 8.91 3.957 8.992 8.849l1.978-.443c-.311-5.798-5.096-10.406-10.97-10.406-6.075 0-11 4.925-11 11s4.925 11 11 11l.047-.002zm2.151-18.685l-.125 1c2.195.682 3.931 2.418 4.613 4.613l1-.125c-.755-2.648-2.838-4.732-5.488-5.488z" /></svg>
                </NavIcon>
                <NavText>
                  Albums
              </NavText>
              </NavItem>
              <NavItem eventKey="music">
                <NavIcon>
                  <i className="im im-headphones"></i>
                </NavIcon>
                <NavText>
                  Top Music
              </NavText>
              </NavItem>
              <NavItem eventKey="genre">
                <NavIcon>
                  <i className="im im-pulse"></i>
                </NavIcon>
                <NavText>
                  Genre
              </NavText>
              </NavItem>
              <NavItem eventKey="lang">
                <NavIcon>
                  <i className="im im-language"></i>
                </NavIcon>
                <NavText>
                  <span className="text-info">Langauge</span>
                </NavText>
                <NavItem eventKey="hindi">
                  <NavText>
                    Hindi
                </NavText>
                </NavItem>
                <NavItem eventKey="kannada">
                  <NavText>
                    kannada
                </NavText>
                </NavItem>
              </NavItem>

              <NavItem eventKey="artist">
                <NavIcon>
                  {/* <i className="im im-spotify text-success"></i> */}
                  <i className="fas fa-music"></i>
                </NavIcon>
                <NavText>
                  Artists
              </NavText>
              </NavItem>
              {routes}
              {route1}
            </SideNav.Nav>
          </SideNav>
        </React.Fragment>
      )}
      />
    )
  }
}

export default Navbar
