import React, { Component, useEffect } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Login from "../component/login";
import Deliver from "../component/deliver";
import AuthService from "../services/auth.service";
import axios from "axios";
import Componentdidmount from "../component/componentdidmount";
function index() {
  const [user, setUser] = React.useState("");
  const [fname, setFname] = React.useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
    }
  }, []);

  function book() {
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").fadeIn(250);
  }



  return (
    <>
      <div className="container-fluid mainCon h-100">
        <Header></Header>
        <Navbar></Navbar>
        <Componentdidmount></Componentdidmount>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <img src="Image/imgindex.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-6 text-center colMain">
              <p className="pText">
                We <span>always</span>
              </p>
              <p className="pText">deliver.</p>
              <input
                type="button"
                className="btnBook"
                value="BOOK A DELIVERY"
                onClick = {book}
              ></input>
            </div>

            <Login></Login>
            <Deliver></Deliver>
          </div>
        </div>
      </div>
      <div className="container-fluid conServices">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="divBox">
                <div className="boxIcon BoxDocu align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/001-file.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">DOCUMENT</p>
                  </div>
                </div>
                <div className="boxIcon BoxFood align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/002-pizza.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">FOOD</p>
                  </div>
                </div>
                <div className="boxIcon BoxCloth align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/clothing.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">CLOTHING</p>
                  </div>
                </div>
                <div className="boxIcon BoxMedic align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/medical.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">MEDICAL</p>
                  </div>
                </div>
                <div className="boxIcon align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/Mask Group 2.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">FRAGILE</p>
                  </div>
                </div>
                <div className="boxIcon align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/other.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">OTHER</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 text-center mx-auto">
              <p className="pWhat">WHAT CAN YOU DELIVER?</p>
              <div className="divBox1 divDocu">
                <img src="Image/001-file.svg" className="imgIconLarge"></img>
                <p className="pIconText">DOCUMENT</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btnBookServices" onClick={book}>
                  BOOK A DELIVERY
                </button>
              </div>
              <div className="divBox1 divFood" style={{ display: "none" }}>
                <img src="Image/002-pizza.svg" className="imgIconLarge"></img>
                <p className="pIconText">FOOD</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btnBookServices">BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divCloth" style={{ display: "none" }}>
                <img src="Image/clothing.svg" className="imgIconLarge"></img>
                <p className="pIconText">CLOTHING</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btnBookServices">BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divMedic" style={{ display: "none" }}>
                <img src="Image/medical.svg" className="imgIconLarge"></img>
                <p className="pIconText">MEDICAL</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btnBookServices">BOOK A DELIVERY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid con3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-end">
              <img
                src="Image/horse.png"
                className="img-fluid"
                style={{ width: "85%" }}
              ></img>
            </div>
            <div className="col-lg-7 text-center">
              <p className="pOntime">
                ON TIME <br></br>EVERY TIME
              </p>
              <div className="divBoxCheck">
                <div className="row" style={{ marginBottom: "30px" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid con4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="pComingsoon">COMING SOON</p>
              <p className="pComingSub">
                Order before cut off and we will deliver your groceries on the
                same day!
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="Image/Man.png"
                className="img-fluid mx-auto d-flex"
                style={{ width: "80%" }}
              ></img>
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

export default index;
