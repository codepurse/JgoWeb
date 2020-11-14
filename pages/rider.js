import React, { Component, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import Componentdidmount from "../component/componentdidmount";

export default function rider() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <Navbar></Navbar>
      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>

      <div className="container divMenu">
        <div className="container divMenu1">
          <div className="row">
            <div className="col-lg-12">
              <ul className="ulNav">
                <li
                  className="liNav"
                  data-toggle="modal"
                  data-target="#driverModal"
                >
                  Ride with Us
                </li>
                <li className="liNav">Deliver Now</li>
                <li className="liNav">JGO Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conRider">
        <div className="container h-100">
          <div className="row h-100 rowRider">
            <div className="col-lg-6 align-self-center">
              <img src="Image/prider.png" className="img-fluid"></img>
              <div className="text-center">
                <Link href="/driver">
                  <a>
                    <input
                      type="button"
                      className="btnBook"
                      value="SALI NA!"
                    ></input>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 align-self-end"
              style={{ paddingBottom: "0px" }}
            >
              <img src="Image/Jievo 1.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "white", paddingTop: "40px" }}
      >
        <div className="container conSino">
          <div className="row">
            <div className="col-lg-12">
              <p className="pSino">SINO BA SI JGO RIDER?</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-5 colAnthony">
              <img src="Image/Anthony 1.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-7" style={{ position: "relative" }}>
              <div className="divSino1 divSino">
                <p className="pBoxSino">MAGALANG</p>
              </div>
              <div className="divSino2 divSino">
                <p className="pBoxSino">MABILIS</p>
              </div>
              <div className="divSino3 divSino">
                <p className="pBoxSino">SAFE</p>
              </div>
              <div className="divSino4 divSino">
                <p className="pBoxSino">LAGING NAKANGITI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conChat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="divChat">
                <div className="divChatblurred"></div>
                <img src="image/CLoud 1.png" className="img-fluid"></img>
                <img
                  src="image/Cloud -1.png"
                  className="img-fluid"
                  style={{ marginTop: "10px" }}
                ></img>
                <img
                  src="image/Cloud 2.png"
                  className="img-fluid"
                  style={{ marginTop: "10px" }}
                ></img>
                <img
                  src="Image/jgobutton.png"
                  className="img-fluid mx-auto d-flex imgTara"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
