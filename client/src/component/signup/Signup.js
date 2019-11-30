import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './signup.css'

class Signup extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      loggedIn = true
    }
    this.state = {
      email: "",
      password: "",
      confPassword: "",
      loggedIn,
      userNotFound: false,
      passwordNotMatch: false,
      passwordLength: false,
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  alertCheck = () => {
    if (this.state.userNotFound) {
      return (
        <div className="alert alert-danger text-center">
          <strong>User with Same Email</strong> Already Exist!
        </div>
      )
    } else if (this.state.passwordNotMatch) {
      return (
        <div className="alert alert-warning text-center">
          <strong>Password Doesn't Match !!</strong>
        </div>
      )
    } else if (this.state.passwordLength) {
      return (
        <div className="alert alert-dark text-center">
          <strong>Password Length must be 5 Atleast!!</strong>
        </div>
      )
    } else {
      return "";
    }

  }

  submitForm = (event) => {
    event.preventDefault();
    // console.log(email, password, confPassword)
    if (this.state.password !== this.state.confPassword) {
      this.setState({ passwordNotMatch: true });
      this.setState({ password: "", confPassword: "" })
      setTimeout(() => {
        this.setState({ passwordNotMatch: false })
      }, 2500)
    } if (this.state.password.length < 5) {
      this.setState({ passwordLength: true });
      this.setState({ password: "", confPassword: "" })
      setTimeout(() => {
        this.setState({ passwordLength: false })
      }, 2500)
    } else {
      axios.post('http://localhost:4000/register', { email: this.state.email, password: this.state.password })
        .then(user => {
          this.setState({ email: "", password: "", confPassword: "" })
          if (user) {
            if (user.data.user.token && user.data.user.name) {
              localStorage.setItem('token', user.data.user.token);
              localStorage.setItem('userName', user.data.user.name)
              this.setState({ 'loggedIn': true })
            } else {
              this.setState({ userNotFound: true })
              setTimeout(() => {
                this.setState({ userNotFound: false })
              }, 2500)
            }
          }
        })
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />
    }
    else {
      return (
        <div>
          <Navbar />
          <div className="row no-gutters" id="register">
            <div className="col-md-7" id="bg-register">
            </div>
            <div className="col-md-5 bg-light">
              <div className="register d-flex align-items-center">
                <div className="container p-4 text-dark">
                  {this.alertCheck()}
                  <div className="text-center">
                    <h2 className="font-weight-bold">Register</h2>
                  </div>
                  <hr />
                  <form onSubmit={this.submitForm}>
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input type="text" className="form-control" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Enter your e-mail" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Enter your Password" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confPassword">Confirm Password</label>
                      <input type="password" className="form-control" name="confPassword" value={this.state.confPassword} id="confPassword" onChange={this.onChange} placeholder="Enter your Password to confirm" required />
                    </div>
                    <div className="form-group text-center" style={{ "maxWidth": "50%", "marginLeft": "25%" }}>
                      <input type="submit" value="&emsp;Submit&emsp;" className="btn btn-success btn-block" />
                    </div>
                  </form>
                  <div className="text-center">
                    <p>Have an account <a href="/login">Login</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Signup
