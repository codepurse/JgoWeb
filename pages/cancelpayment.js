import React, { Component, useState, useEffect } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import "../component/map/config";
import { useRouter } from "next/router";
export default function cancelpayment() {
  const router = useRouter();
  function clickme() {
    router.push("/profile");
  }
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12 text-center">
              <img src = "Image/cancelpayment.png" className = "img-fluid mx-auto d-flex"></img>
            <p className="pSuccess">Cancel payment</p>
            <p className = "pSuccessSub">
              Your payment has been cancelled. No change has been made.
            </p>
            <button onClick={clickme} className = "btnProfile">GO TO PROFILE PAGE</button>
          </div>
        </div>
      </div>
    </>
  );
}
