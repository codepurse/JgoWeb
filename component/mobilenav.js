import React, { Component } from "react";
import Link from "next/link";
import swal from "@sweetalert/with-react";
export class mobilenav extends Component {
  ride() {
    localStorage.setItem("showmodal", "1");
  }
  deliver() {
    const $menuBtn = document.querySelector(".menu-btn");
    $menuBtn.classList.remove("open");
    $(".imgLogo").fadeIn(100);
    $(".imglogo").fadeIn(100);
    $(".conHide").fadeIn(100);
    $(".divMenu").fadeOut(150);
    $(".divMenu").fadeOut(150);
    if (/Android/i.test(navigator.userAgent)) {
      swal(
        <div style={{ width: "auto", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #00C853" }}
            >
              <div className="col-lg-2 col-sm-2 col-2">
                <img src="Image/success.png" style={{ width: "32px" }}></img>
              </div>
              <div
                className="col-lg-10 col-sm-10 col-10"
                style={{ textAlign: "left" }}
              >
                <p className="pError">Success</p>
                <p className="pErrorSub">
                  Download our app in Google play store.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      swal(
        <div style={{ width: "auto", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #00C853" }}
            >
              <div className="col-lg-2 col-sm-2 col-2">
                <img src="Image/success.png" style={{ width: "32px" }}></img>
              </div>
              <div
                className="col-lg-10 col-sm-10 col-10"
                style={{ textAlign: "left" }}
              >
                <p className="pError">Success</p>
                <p className="pErrorSub">Download our app in Apple store.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  support() {
    const $menuBtn = document.querySelector(".menu-btn");
    $menuBtn.classList.remove("open");
    $(".imgLogo").fadeIn(100);
    $(".imglogo").fadeIn(100);
    $(".conHide").fadeIn(100);
    $(".divMenu").fadeOut(150);
    $(".divMenu").fadeOut(150);
    swal(
      <div style={{ width: "100%", padding: "10px" }}>
        <div className="container">
          <div
            className="row align-items-center"
            style={{ borderLeft: "3px solid #00C853" }}
          >
            <div
              className="col-lg-12 col-sm-12 col-12"
              style={{ textAlign: "left" }}
            >
              <p className="pError">Success</p>
              <p className="pErrorSub">
                You may contact us through chat using the app or go to our
                contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="container divMenu">
          <div className="container divMenu1">
            <div className="row align-items-center h-100">
              <div className="col-lg-12 text-center">
                <Link href="/">
                  <p className="liNav" onClick={this.ride}>
                    Ride with Us
                  </p>
                </Link>

                <p className="liNav" onClick={this.deliver}>
                  Deliver Now
                </p>

                <p className="liNav" onClick={this.support}>
                  JGO Support
                </p>

                <Link href="/about">
                  <p className="liNav">About Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default mobilenav;
