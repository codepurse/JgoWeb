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

export default function about() {
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <NextNprogress color="#EDC728" />
      <Navbar></Navbar>
      <div className = "container-fluid h-100">
          <div className = "container h-100">
              <div className = "row h-100 align-items-center">
                  <div className = "col-lg-12">
                      <div className  = "form-inline">
                          <p className = "p11">The</p>
                          <img src = "Image/logo.png" className = "img-fluid"></img>
                          <p className = "p11">Story</p>
                      </div> 
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
