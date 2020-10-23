import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
    if (localStorage.getItem("token")) {
      router.push("/profile");
    } else {
      $(".colMain").hide();
      $(".colLogin").fadeIn(250);
      $(".colDeliver").hide();
    }
  }

  function deliverForm(e) {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").fadeIn(250);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return setFname(AuthService.getCurrentUser());
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
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="#">
            <a href="#">
              <img
                src="Image/logo.png"
                className="img-fluid imglogo"
                style={{ width: "150px" }}
              />
            </a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <li className={index}>
                  <Link href="/driver">
                    <a className="nav-link" style={{ color: "white" }}>
                      Be a JGO Driver
                    </a>
                  </Link>
                </li>
                <li className={deliver} onClick={deliverForm}>
                  <a className="nav-link" style={{ color: "white" }}>
                    Book a Delivery
                  </a>
                </li>
                <li className={contact}>
                  <a className="nav-link" style={{ color: "white" }}>
                    Support
                  </a>
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
