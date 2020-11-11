import React, { Component, useEffect } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import NextNprogress from "nextjs-progressbar";
import Componentdidmount from "../component/componentdidmount";

export default function rider() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <Navbar></Navbar>
      <div className="container-fluid h-100 conRider">
        <div className="container h-100">
          <div className="row h-100 ">
            <div className="col-lg-6 align-self-center">
              <img src="Image/prider.png" className="img-fluid"></img>
              <div className="text-center">
                <input
                  type="button"
                  className="btnBook"
                  value="SALI NA!"
                ></input>
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
            <div className="col-lg-5">
              <img src="Image/Anthony 1.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-7" style={{ position: "relative" }}>
              <div className="divSino1">
                <p className="pBoxSino">MAGALANG</p>
              </div>
              <div className="divSino2">
                <p className="pBoxSino">MABILIS</p>
              </div>
              <div className="divSino3">
                <p className="pBoxSino">SAFE</p>
              </div>
              <div className="divSino4">
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
                <img src="image/Cloud -1.png" className="img-fluid" style = {{marginTop: "10px"}}></img>
                <img src="image/Cloud 2.png" className="img-fluid" style = {{marginTop: "10px"}}></img>
                <img src = "Image/jgobutton.png" className = "img-fluid mx-auto d-flex" style = {{marginTop: "20px", width: "200px"}}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conFooter">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="Image/logo.png"
              className="img-fluid imgLogo"
              style={{ width: "150px", marginLeft: "20px" }}
            ></img>
          </div>
          <div className="col-lg-6">
            <ul className="ulFooter">
              <li className="liFooter">
                <a href="#home">COMPANY</a>
              </li>
              <li className="liFooter">
                <a href="#news">CONTACT US</a>
              </li>
              <li className="liFooter">
                <a href="#contact">POLICIES</a>
              </li>
              <li className="liFooter">
                <a href="#contact">TERM & CONDITION</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="text-center pFooter">
              © 2020 JGO Philippines. - All Rights
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
