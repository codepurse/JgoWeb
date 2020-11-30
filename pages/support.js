import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Head from "next/head";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";

export default function support() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>

      <div className="container divMenu">
        <div className="container divMenu1">
          <div className="row align-items-center h-100">
            <div className="col-lg-12 text-center">
              <Link href="/">
                <p className="liNav">Ride with Us</p>
              </Link>
              <Link href="/support">
                <p className="liNav">JGO Support</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conblack">
        <nav
          className="navbar navbar-expand-md fixed-top conblack"
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
                <Link href="/driver">
                  <li>
                    <a
                      className="nav-link nav-driver"
                      style={{ color: "white" }}
                    >
                      Ride with Us
                    </a>
                  </li>
                </Link>

                <Link href="/support">
                  <li>
                    <a
                      className="nav-link nav-driver"
                      style={{ color: "white" }}
                    >
                      JGO Support
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid h-100 conSupport conHide ">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12 text-center">
              <p className="pSupport">COMING SOON</p>
              <p className="pSupportSub">
                We are doing are best
                <br />
                To provide you with quality service.
              </p>
              <p className="pSupportSub">
                Please contact us via email or our Facebook Chat
                <br />
                Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
