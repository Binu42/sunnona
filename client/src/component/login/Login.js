import React from 'react'
import Navbar from '../layout/Navbar'
import './login.css'

function login() {
  return (
    <div>
      <Navbar />
      <div className="row no-gutters" id="login">
        <div className="col-md-7" id="bg-login">
        </div>
        <div className="col-md-5 bg-light">
          <div className="login d-flex align-items-center">
            <div className="container p-4 text-dark">
              <div className="text-center">
                <h2 className="font-weight-bold">Login</h2>
              </div>
              <hr />
              <form>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="text" className="form-control" name="email" id="email" aria-describedby="helpId"
                    placeholder="Enter your e-mail" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" id="password"
                    placeholder="Enter your Password" required/>
                </div>
                <div className="form-group text-center">
                  <input type="submit" value="&emsp;Submit&emsp;" className="btn btn-success" required/>
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

export default login
