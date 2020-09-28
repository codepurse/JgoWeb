import React, { Component } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Login from "../component/login";
import Deliver from "../component/deliver";
import Componentdidmount from "../component/componentdidmount";
function index() {
 
  return (
    <>
      <div className="container-fluid mainCon h-100">
        <Header></Header>
        <Navbar></Navbar>
        <Componentdidmount></Componentdidmount>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-center colMain">
              <p className="pText">
                We <span>always</span>
              </p>
              <p className="pText">deliver.</p>
              <input
                type="button"
                className="btnBook"
                value="BOOK A DELIVERY"
              ></input>
            </div>

            <Login></Login>
            <Deliver></Deliver>
          </div>
        </div>
      </div>
      <div className="container-fluid mainCon2 h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <p className="pText">On time,</p>
              <p className="pText">
                <span>every time.</span>
              </p>
              <div
                className="row"
                style={{ marginTop: "50px", padding: "0px" }}
              >
                <div className="col-lg-2">
                  <img
                    src="Image/gps.svg"
                    className="img-fluid imgGps mx-auto d-flex imgGps"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-lg-2">
                  <img
                    src="Image/gps.svg"
                    className="img-fluid imgGps mx-auto d-flex imgGps"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-lg-2">
                  <img
                    src="Image/gps.svg"
                    className="img-fluid imgGps mx-auto d-flex imgGps"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid mainCon3 h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <img
                src="Image/box.png"
                className="img-fluid mx-auto d-flex imgBox"
              ></img>
            </div>
            <div className="col-lg-6">
              <p className="pText">How to use</p>
              <p className="pText">
                <span>our app.</span>
              </p>
              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-lg-2">
                  <img
                    src="Image/check.svg"
                    className="img-fluid imgGps mx-auto d-flex"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-lg-2">
                  <img
                    src="Image/check.svg"
                    className="img-fluid imgGps mx-auto d-flex"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-lg-2">
                  <img
                    src="Image/check.svg"
                    className="img-fluid imgGps mx-auto d-flex"
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pDefault">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
