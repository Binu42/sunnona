import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      loggedIn = true;
    }

    this.state = {
      email: "",
      password: "",
      loggedIn,
      check: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  alertCheck = () => {
    if (this.state.check) {
      return (
        <div className="alert alert-warning text-center">
          <strong>There is Something Unusual</strong> Happening!
        </div>
      )
    } else {
      return "";
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    // console.log(email, password, confPassword)
    axios.post('http://localhost:4000/login', { email: this.state.email, password: this.state.password })
      .then(user => {
        this.setState({ email: "", "password": "" })
        console.log(user)
        if (user) {
          if (user.data.user.token && user.data.user.name) {
            localStorage.setItem('token', user.data.user.token);
            localStorage.setItem('userName', user.data.user.name)
            this.setState({ 'loggedIn': true });
          } else {
            this.setState({ check: true });
            setTimeout(() => {
              this.setState({ check: false })
            }, 2500)
          }
        }
      })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Navbar />
        <div className="row no-gutters" id="login">
          <div className="col-md-7" id="bg-login">
          </div>
          <div className="col-md-5 bg-light">
            <div className="login d-flex align-items-center">
              <div className="container p-4 text-dark">
                {this.alertCheck()}
                <div className="text-center">
                  <h2 className="font-weight-bold">Login</h2>
                </div>
                <hr />
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" className="form-control" name="email" id="email" value={this.state.email} onChange={this.onChange}
                      placeholder="Enter your e-mail" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Enter your Password" required />
                  </div>
                  <div className="form-group text-center">
                    <input type="submit" value="&emsp;Submit&emsp;" className="btn btn-success" required />
                  </div>
                </form>
                <div className="text-center">
                  <p>Don't have an account <a href="/register">Sign up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
