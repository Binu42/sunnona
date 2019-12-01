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
      loggedIn
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm = (event) => {
    event.preventDefault();

  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />
    }
    else {
      return (
        <div>
          <Navbar />
          <div className="row no-gutters" id="admin">
            <div className="col-md-7" id="bg-admin">
            </div>
            <div className="col-md-5 bg-light">
              <div className="admin d-flex align-items-center">
                <div className="container p-4 text-dark">
                  {this.alertCheck()}
                  <div className="text-center">
                    <h2 className="font-weight-bold">Add Song</h2>
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

