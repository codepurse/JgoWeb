import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";

export default function faq() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid">
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
            <a href="#">
              <img
                src="Image/logo.png"
                className="img-fluid imglogo"
                style={{ width: "130px", marginLeft: "20px" }}
              />
            </a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <li>
                  <a
                    className="nav-link nav-driver"
                    data-toggle="modal"
                    data-target="#driverModal"
                    style={{ color: "white" }}
                  >
                    Ride with Us
                  </a>
                </li>
                <Link href="/">
                  <li>
                    <a
                      className="nav-link nav-driver"
                      style={{ color: "white" }}
                    >
                      Deliver Now
                    </a>
                  </li>
                </Link>
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                    JGO Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
              <p>FREQUENTLY ASK QUESTION</p>
          </div>
        </div>
      </div>
    </>
  );
}
