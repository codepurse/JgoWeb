import React, { Component, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Navbar from "../component/navbar1";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import Componentdidmount from "../component/componentdidmount";
import Mobilenav from "../component/mobilenav";

function showModal() {
  localStorage.setItem("showmodal", "1");
}

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

     <Mobilenav></Mobilenav>
      <div className="container-fluid conRider conHide">
        <div className="container h-100">
          <div className="row h-100 rowRider">
            <div className="col-lg-6 align-self-center">
              <img src="Image/prider.png" className="img-fluid"></img>
              <div className="text-center">
                <Link href="/">
                  <a>
                    <input
                      type="button"
                      className="btnBook"
                      value="SALI NA!"
                      onClick={showModal}
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
      <div className="container-fluid conHide conSino1">
        <div className="container conSinonew">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                src="Image/rider1.png"
                className="img-fluid mx-auto d-flex imgSino"
              ></img>
            </div>
            <div className="col-lg-8">
              <p className="pSino">JGO RIDER AKO</p>
              <p className="pSino1">
                Ang pagiging isang JGO Rider ay hindi basta't basta lamang.
                Dapat ay may mga sinusunod kang mga katangian.
              </p>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "25px" }}>
            <div className="col-lg-4">
              <img
                src="Image/rider2.png"
                className="img-fluid mx-auto d-flex imgSino"
              ></img>
            </div>
            <div className="col-lg-8">
              <p className="pSino">MAGALANG</p>
              <p className="pSino1">
                Importante na lagi tayong gumagalang sa ating mga binibigyan
                serbisyo. Ito ay nasa ating kultura na ginagalang natin ang
                ating kapwa.
              </p>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "25px" }}>
            <div className="col-lg-4">
              <img
                src="Image/rider3.png"
                className="img-fluid mx-auto d-flex imgSino"
              ></img>
            </div>
            <div className="col-lg-8">
              <p className="pSino">MAINGAT</p>
              <p className="pSino1">
                Laging nagiingat si JGO Rider at sumusonod sa batas ng kalsada.
                Pati na rin sa paghandle ng mga delivery niya. Lagi niyang
                binibigyan pansin and mga kanyang dinadala sa iba't ibang kapwa
                araw araw.
              </p>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "25px" }}>
            <div className="col-lg-4">
              <img
                src="Image/rider4.png"
                className="img-fluid mx-auto d-flex imgSino"
              ></img>
            </div>
            <div className="col-lg-8">
              <p className="pSino">MAPAGKAPWA</p>
              <p className="pSino1">
                Hindi sapat na puro lang trabaho at walang tulong sa ating
                kapwa. Gusto natin tayo ay umunlad at dapat tayo ay
                nagtutulungan sa isa't isa.
              </p>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "25px" }}>
            <div className="col-lg-4">
              <img
                src="Image/rider5.png"
                className="img-fluid mx-auto d-flex imgSino"
              ></img>
            </div>
            <div className="col-lg-8">
              <p className="pSino">MAASAHAN</p>
              <p className="pSino1">
                Ito si JGO Rider, siya ay maaasahan sa kanyang serbisyo.
                Magalang, Maingat at Mapagkapwa. On – time siya at magaling mag
                alaga ng mga gamit na kanyang idinideliver. Kaya si JGO Rider ay
                Maaasahan!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conHide conTra">
        <div className="container">
          <div className="row">
            <img
              src="Image/jgobutton.png"
              className="img-fluid mx-auto d-flex  imgButtontra"
              style = {{cursor: "pointer"}}
            ></img>
            <p className = "pSaJgo">
              Sa JGO, gusto namin kayong bigyan ng oportunidad at matulungan
              para kayo ay may kita at trabaho araw araw. Gusto namin na kami
              ang magbibigay ng success sa inyong buhay. Nandito kami para sa
              inyo, kaibigan.
            </p>
          </div>
          <div className = "row" style = {{marginTop: "35px"}}>
            <div className = "col-lg-3 col-sm-6 col-6 text-center">
              <img src = "Image/tra4.png" className = "img-fluid mx-auto d-flex imgTra"></img>
              <p className = "p13">KUMITA</p>
            </div>
            <div className = "col-lg-3 col-sm-6 col-6  text-center">
              <img src = "Image/tra3.png" className = "img-fluid mx-auto d-flex imgTra"></img>
              <p className = "p13">KAIBIGAN</p>
            </div>
            <div className = "col-lg-3 col-sm-6 col-6  text-center">
              <img src = "Image/tra2.png" className = "img-fluid mx-auto d-flex imgTra"></img>
              <p className = "p13">OPPORTUNIDAD</p>
            </div>
            <div className = "col-lg-3 col-sm-6 col-6  text-center">
              <img src = "Image/tra1.png" className = "img-fluid mx-auto d-flex imgTra"></img>
              <p className = "p13">TUMULONG</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
