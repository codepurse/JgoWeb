import React, {
  Component,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import "../component/map/config";
import NextNprogress from "nextjs-progressbar";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import Navbar from "../component/navbar1";
import Mobilenav from "../component/mobilenav";
import Footer from "../component/footer";

export default function about() {
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
      <div className="container-fluid h-100 conAbout conHide">
      <div class="bg"></div>
        <div className="container h-100 " style={{ position: "relative" }}>
         
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="form-inline">
                <p className="p11">The</p>
                <img src="Image/logo.png" className="img-fluid imgAboutlogo"></img>
                <p className="p11">Story</p>
              </div>
              <p className="p12">
                With the ever-growing demand for delivery, JGO was created. JGO
                aims to bring your everyday essentials into your hands safely
                and quickly. This is the core of what we do for the community.
                As a delivery service provider, you can rely on JGO to assist
                you in handling goods from one hand to another. In a busy world
                like ours, these are what matter. For business owners, we
                mobilize enterprises by bringing merchandise straight to your
                customer’s doorsteps. For the community, we deliver your daily
                essentials and pleasures to your homes. For our partner riders,
                we bring them work opportunities for a better life.
              </p>
            </div>
           
          </div>
        </div>
      </div>
      <div className = "conHide">
      <Footer></Footer>
      </div>
    </>
  );
}
