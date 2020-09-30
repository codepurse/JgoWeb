import React, { Component } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
function driver() {
  return (
    <>
      <Header />
      <Componentdidmount></Componentdidmount>
      <div
        className="container-fluid mainConDriver"
        style={{ position: "relative" }}
      >
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
                style={{ width: "150px" }}
              />
            </a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <li>
                  <a className="nav-link" style={{ color: "white" }}>
                    Be a JGO Driver
                  </a>
                </li>
                <li>
                  <a className="nav-link" style={{ color: "white" }}>
                    Book a Delivery
                  </a>
                </li>
                <li>
                  <a className="nav-link" style={{ color: "white" }}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="conDriver"></div>
        <div className="container con">
          <div className="row" style={{ marginLeft: "50px" }}>
            <div
              className="col-lg-3"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <img src="Image/phone.png" className="img-fluid imgPhone"></img>
            </div>
            <div
              className="col-lg-4"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <p className="pComing">COMING SOON</p>
              <div className="row">
                <div className="col-lg-6" style={{ padding: "2px" }}>
                  <div className="divButton form-inline">
                    <img src="Image/apple.png" className="imgDownload"></img>
                    <p className="pDownload">
                      Download on the <br />
                      <span>App Store</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" style={{ padding: "2px" }}>
                  <div className="divButton form-inline">
                    <img
                      src="Image/playstore.png"
                      className="imgDownload"
                    ></img>
                    <p className="pDownload">
                      Get it on <br />
                      <span>Play Store</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="divService">
                <p className="pFully">FULLY FILIPINO OWNED COMPANY</p>
                <p className="pService">MAAASANG SERBISYO!</p>
              </div>
            </div>
            <div
              className="col-lg-5"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <img
                src="Image/deliveryguy.png"
                className="img-fluid imgDel mx-auto d-flex"
              ></img>
            </div>
          </div>
        </div>
        <div className="row rowGray">
          <div className="col-lg-12 col"></div>
        </div>
      </div>
      <div className="container-fluid conRoad">
        <div className="row">
          <div className="col-lg-12">
            <img src="Image/road1.png" className="img-fluid imgRoad"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="pRate">
              LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 p-0">
            <img src="Image/img1.png" className="img-fluid"></img>
          </div>
          <div className="col-lg-4 p-0">
            <img src="Image/img2.png" className="img-fluid img2"></img>
          </div>
          <div className="col-lg-4 p-0">
            <img src="Image/img3.png" className="img-fluid img3"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="pSafety">
              SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default driver;
