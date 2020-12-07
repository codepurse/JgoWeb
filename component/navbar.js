import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";

export default function navbar() {
  const router = useRouter();
  const index = router.pathname === "/" ? "activeNav" : "";
  const deliver = router.pathname === "/deliver" ? "activeNav" : "";
  const contact = router.pathname === "/contact" ? "activeNav" : "";
  const faq = router.pathname === "/faq" ? "activeNav" : "";
  const login = router.pathname === "/login" ? "activeNav" : "";
  const [fname, setFname] = React.useState("");

  function loginForm(e) {
    if (
      localStorage.getItem("token") ||
      localStorage.getItem("google") ||
      localStorage.getItem("fb")
    ) {
      router.push("/profile");
    } else {
      $(".colMain").hide();
      $(".colLogin").fadeIn(250);
      $(".colDeliver").hide();
    }
  }

  function deliverForm(e) {
    if (AuthService.getToken()) {
      $(".colMain").hide();
      $(".colLogin").hide();
      $(".colDeliver").fadeIn(250);
      $("img").tooltip().mouseover();
      setTimeout(function () {
        $("img").tooltip("hide");
      }, 5000);
    } else {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Warning</p>
                <p className="pErrorSub">Login first before you book</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem("token") ||
      localStorage.getItem("google") ||
      localStorage.getItem("fb")
    ) {
      return setFname(AuthService.getFullname());
    } else {
      setFname("LOGIN");
    }
  }, []);

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ padding: "20px 20px" }}
      >
        <div className="container-fluid">
          <nav className="navbar-brand" href="#">
            <Link href="/">
              <a>
                <img
                  src="Image/logo.png"
                  className="img-fluid imgLogo imglogonav"
                  style={{ marginLeft: "15px" }}
                />
              </a>
            </Link>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav" style={{ marginRight: "15px" }}>
                <li className={index}>
                  <Link href="/">
                    <a className="nav-link" style={{ color: "white" }}>
                      Ride with Us
                    </a>
                  </Link>
                </li>
                <li className={deliver} onClick={deliverForm}>
                  <a className="nav-link" style={{ color: "white" }}>
                    Deliver Now
                  </a>
                </li>
                <li className={contact}>
                  <Link href="/profile">
                    <a className="nav-link" style={{ color: "white" }}>
                      JGO Support
                    </a>
                  </Link>
                </li>
                <li className={login} onClick={loginForm}>
                  <a
                    className="nav-link"
                    id="username"
                    style={{ color: "white" }}
                  >
                    {fname}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
