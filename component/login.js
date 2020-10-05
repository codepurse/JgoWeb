import React, { Component } from "react";

export class login extends Component {
  render() {
    return (
      <div className="col-lg-6 colLogin">
        <p className="pLogin">Log-in</p>
        <div className="boxLogin">
          <input type="text" className="txt" placeholder="email"></input>
          <input type="password" className="txt" placeholder="password"></input>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <p className="pForgot">forgot password?</p>
          </div>
          <div className="col-lg-6 text-center">
            <button className="btnSubmit">SUBMIT</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <hr></hr>
          </div>
          <div className="col-lg-2 text-center">
            <p className="pOr">or</p>
          </div>
          <div className="col-lg-5">
            <hr></hr>
          </div>
        </div>
        <button className="btnFacebook">
          <img
            src="Image/facebook.png"
            style={{ width: "15px", marginRight: "5px" }}
          />
          Sign-in with facebook
        </button>
        <button className="btnGoogle">
          <img
            src="Image/google.png"
            style={{ width: "15px", marginRight: "5px" }}
          />
          Sign-in with Google
        </button>
        <p className = "pDont">Don't have an account?</p>
        <p className = "pSignup">sign-up</p>
      </div>
    );
  }
}

export default login;
