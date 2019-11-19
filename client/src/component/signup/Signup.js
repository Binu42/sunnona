import React from 'react'
import Navbar from '../layout/Navbar'
import './signup.css'

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="row no-gutters" id="register">
        <div className="col-md-7" id="bg-register">
        </div>
        <div className="col-md-5 bg-light">
          <div className="register d-flex align-items-center">
            <div className="container p-4 text-dark">
              <div className="text-center">
                <h2 className="font-weight-bold">Register</h2>
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
                <div className="form-group">
                  <label htmlFor="confPassword">Confirm Password</label>
                  <input type="password" className="form-control" name="confPassword" id="confPassword"
                    placeholder="Enter your Password to confirm" required/>
                </div>
                <div className="form-group text-center" style={{"maxWidth": "50%", "marginLeft": "25%"}}>
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

export default Signup
