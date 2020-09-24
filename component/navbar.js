import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  const index = router.pathname === "/" ? "activeNav" : "";
  const deliver = router.pathname === "/deliver" ? "activeNav" : "";
  const contact = router.pathname === "/contact" ? "activeNav" : "";
  const faq = router.pathname === "/faq" ? "activeNav" : "";
  const login = router.pathname === "/login" ? "activeNav" : "";

  function loginForm(e) {
    $(".colMain").hide();
    $(".colLogin").show();
  }

  function deliverForm(e) {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").show();
  }

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ padding: "20px 20px" }}
      >
        <div className="container">
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
                  <a className="nav-link" style={{ color: "white" }}>
                    HOME
                  </a>
                </li>
                <li className={deliver} onClick={deliverForm}>
                  <a className="nav-link" style={{ color: "white" }}>
                    DELIVER
                  </a>
                </li>
                <li className={contact}>
                  <a className="nav-link" style={{ color: "white" }}>
                    CONTACT
                  </a>
                </li>
                <li className={faq}>
                  <a className="nav-link" style={{ color: "white" }}>
                    FAQ
                  </a>
                </li>
                <li className={login} onClick={loginForm}>
                  <a className="nav-link" style={{ color: "white" }}>
                    LOG-IN
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
