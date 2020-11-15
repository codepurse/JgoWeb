import React, { Component, useEffect } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Login from "../component/login";
import Deliver from "../component/deliver";
import NextNprogress from "nextjs-progressbar";
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
    document.getElementById('mainCon').scrollIntoView();
    $(".colMain").hide();
    $(".colLogin").hide();
    $(".colDeliver").fadeIn(250);
  }

  return (
    <>
      <div className="container-fluid mainCon h-100">
        <NextNprogress color="#EDC728" />
        <Header></Header>
        <Navbar></Navbar>
        <Componentdidmount></Componentdidmount>
        <div className="container h-100" id = "mainCon">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <img src="Image/imgindex.png" className="img-fluid"></img>
            </div>
            <div className="col-lg-6 text-center colMain">
              <p className="pText">
                Your <span>go-to</span>
              </p>
              <p className="pText">deliver assistant.</p>
              <input
                type="button"
                className="btnBook"
                value="BOOK A DELIVERY"
                onClick={book}
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
                <div className="boxIcon BoxFragile align-items-center d-flex justify-content-center">
                  <div className="divBoxIcon">
                    <img
                      src="Image/Mask Group 2.svg"
                      className="img-fluid mx-auto d-flex imgIcon"
                    ></img>
                    <p className="pIcon">FRAGILE</p>
                  </div>
                </div>
                <div className="boxIcon BoxOther align-items-center d-flex justify-content-center">
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
                  We can deliver your important documents for you, rest assured
                  that these will be handled with the utmost care by our riders.
                  Please make sure to include the name of the person/company
                  that the rider will deliver the documents.
                </p>
                <button className="btnBookServices" onClick={book}>
                  BOOK A DELIVERY
                </button>
              </div>
              <div className="divBox1 divFood" style={{ display: "none" }}>
                <img src="Image/002-pizza.svg" className="imgIconLarge"></img>
                <p className="pIconText">FOOD</p>
                <p className="pDesc">
                  Our on – the JGO riders can deliver your food for you or to
                  whoever you wish to share your food with. 7. CLOTHING: We can
                  also carry and bring your clothing to the areas that we are
                  available in.
                </p>
                <button className="btnBookServices" onClick={book}>BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divCloth" style={{ display: "none" }}>
                <img src="Image/clothing.svg" className="imgIconLarge"></img>
                <p className="pIconText">CLOTHING</p>
                <p className="pDesc">
                  We can also carry and bring your clothing to the areas that we
                  are available in.
                </p>
                <button className="btnBookServices" onClick={book}>BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divMedic" style={{ display: "none" }}>
                <img src="Image/medical.svg" className="imgIconLarge"></img>
                <p className="pIconText">MEDICAL</p>
                <p className="pDesc">
                  JGO can deliver your medications around the areas as well.
                  Please note that if they are prescribed medications, kindly
                  include the note and the name of the doctor who recommended
                  it. Thank you.
                </p>
                <button className="btnBookServices" onClick={book}>BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divFragile" style={{ display: "none" }}>
                <img
                  src="Image/Mask Group 2.svg"
                  className="imgIconLarge"
                ></img>
                <p className="pIconText">FRAGILE</p>
                <p className="pDesc">
                  Sending fragile objects can be quite a hassle. But you can
                  trust us to deliver them on time and with care.
                </p>
                <button className="btnBookServices" onClick={book}>BOOK A DELIVERY</button>
              </div>
              <div className="divBox1 divOthers" style={{ display: "none" }}>
                <img src="Image/other.svg" className="imgIconLarge"></img>
                <p className="pIconText">OTHERS</p>
                <p className="pDesc">
                  JGO delivers other items as well aside from the already
                  mentioned categories. So long as it is an item that is legal
                  and approved by law.
                </p>
                <button className="btnBookServices" onClick={book}>BOOK A DELIVERY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid con3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <img
                src="Image/horse.png"
                className="img-fluid"
                style={{ width: "70%" }}
              ></img>
            </div>
            <div className="col-lg-7 text-center">
              <p className="pOntime">
                &#8369;60 Flat Rate <br></br>&#8369;5 Per Km
              </p>
              <div className="divBoxCheck">
                <p className="pDivBoxCheck">
                  With JGO, we want to provide you with the most convenient
                  payment options and the most affordable prices. Let us take
                  care of your delivery worries and see that all it takes is one
                  book away with JGO!
                </p>
                <div className="row" style={{ marginBottom: "30px", display: "none" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px", display: "none" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px", display: "none" }}>
                  <div className="col-lg-1">
                    <img src="Image/check.svg" style={{ width: "35px" }}></img>
                  </div>
                  <div className="col-lg-11">
                    <p className="pCheck">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "30px", display: "none" }}>
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
