import React, { Component } from "react";
import Link from "next/link";
import AuthService from "../services/auth.service";
import Router, { useRouter } from "next/router";
import swal from "@sweetalert/with-react";


function  goLogin() {
  swal.close();
  Router.push("/main");
}

function contact() {
  swal.close();
  Router.push("/faq#contact");
}




export class navbar1 extends Component {

  componentDidMount() {
    if(Router.pathname == "/faq" || Router.pathname == "/tracking") {
      $(".fixed-top").addClass("conblack");
    }
  }


  showModal() {
    localStorage.setItem("showmodal", "1");
  }

  
  goSupport() {
    if (AuthService.getToken()) {
      Router.push("/profile");
    }else (
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #c62828" }}
            >
            
              <div className="col-lg-12" style={{ textAlign: "left" }}>
                <p className="pError">Error</p>
                <p className="pErrorSub">
                  You need to login to proceed to support page or your may go to our contact us page.
                </p>
               <div className = "form-inline" style = {{marginTop: "5px"}}>
                  <p className = "pSwal" onClick = {contact}>Contact Us</p> <p className = "pSwal" onClick = {goLogin}>Login</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }

 
  render() {
    return (
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ padding: "20px 20px" }}
      >
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="navbar-brand" href="#">
          <Link href = "/">
            <a>
              <img
                src="Image/logo.png"
                className="img-fluid imglogo"
                style={{ width: "130px", marginLeft: "20px" }}
              />
            </a>
          </Link>
        </nav>
        <div className="collapse navbar-collapse" id="collapse">
          <div className="col2 ml-auto">
            <ul className="nav navbar-nav">
              <Link href="/">
                <li>
                  <a
                    className="nav-link nav-driver"
                    onClick={this.showModal}
                    style={{ color: "white" }}
                  >
                    Ride with Us
                  </a>
                </li>
              </Link>
              <Link href="/main">
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                    Deliver Now
                  </a>
                </li>
              </Link>
              <li onClick = {this.goSupport}>
                <a className="nav-link nav-driver" style={{ color: "white" }}>
                  JGO Support
                </a>
              </li>
              <Link href="/about">
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                   About Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar1;
