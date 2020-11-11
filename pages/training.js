import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import NextNprogress from "nextjs-progressbar";

export default function training() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <div className="container-fluid">
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
                      data-toggle="modal"
                      data-target="#driverModal"
                      style={{ color: "white" }}
                    >
                      Ride with Us
                    </a>
                  </li>
                </Link>
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
      </div>
      <div className="container-fluid h-100 conTraining">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12 text-center">
              <p className="pTraining">ON THE GO RIDER TRAINING</p>
            </div>
            <div className="row" style={{ marginTop: "-250px" }}>
              <div className="col-lg-5">
                <img src="Image/_DSC0062.png" className="img-fluid"></img>
              </div>
              <div className="col-lg-7">
                <p className="pHeaderTraining">
                  KAIBIGAN! MALAPIT KA NANG MAGING JGO RIDER.
                </p>
                <p className="pTrainingSub">
                  Salamat sa pag submit ng iyon application.
                </p>
                <p className="pTrainingSub1">
                  Sa JGO gusto nating tayo ay MAAASAHAN ng ating mga customers
                  kaya dapat tayo ay magtulungan sa isa’t isa. Gusto namin na
                  mas guminhawa ang buhay niyo gamit ang JGO. Si JGO Rider ay
                  dapat na:
                </p>
                <p className="pFF">
                  1. Laging nakasuot ng JGO uniform at JGO ID <br /> 2. Magalang
                  at matulungin sa kanyang mga kapwa <br /> 3. Laging naka ngiti{" "}
                  <br />
                  4. Sumusond sa batas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F2F0F0", paddingTop: "57px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="pTraining" style={{ color: "#4C4C4C" }}>
                JGO RIDER TRAINING VIDEO
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "white", paddingTop: "75px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-inline">
                <img
                  src="Image/logoblack.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                ></img>
                <img
                  src="Image/easyapp.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-6">
              <div className="divBoxCarousel" style = {{padding: "50px 20px"}}>
                <p className="pRider text-center">
                  Kapag handa ka na, i click itong link para makapagumpisa ka na
                  sa JGO Rider Test.
                </p>
                <div className="mx-auto text-center">
                  <button className="btnBegin">Begin Test</button>
                </div>
              </div>
            </div>
            <div className = "col-lg-6">
                <img src= "Image/girl.png" className = "img-fluid" style = {{width: "300px"}}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
