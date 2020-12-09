import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maptracking";
import Header from "../component/header";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";
import Navbar from "../component/navbar1";
import Componentdidmount from "../component/componentdidmount";

import axios from "axios";

export default function tracking() {
  const [id, setId] = React.useState("");

  const router = useRouter();

  function idChange(e) {
    setId(e.target.value);
  }

  function onKeyPress1(e) {
    if (e.which == 13) {
      searchBook();
    }
  }

  function searchBook(e) {
    if (id == "") {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2 col-sm-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div
                className="col-lg-10 col-sm-10"
                style={{ textAlign: "left" }}
              >
                <p className="pError">Warning</p>
                <p className="pErrorSub">Enter your tracking id number.</p>
              </div>
            </div>
          </div>
        </div>
      );
      return false;
    } else {
      $(".btn").addClass("btn--loading");
      tracks.length = 0;
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      const apiUrl =
        "https://staging-api.jgo.com.ph/api/auth/show-driver-location";
      axios
        .post(apiUrl, { tracking_id: id }, options)
        .then((result) => {
          router.push("/tracking/" + id);
        })
        .catch((err) => {
          $(".btn").removeClass("btn--loading");
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #FFE900" }}
                >
                  <div className="col-lg-2 col-sm-2">
                    <img
                      src="Image/complain.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div
                    className="col-lg-10 col-sm-10"
                    style={{ textAlign: "left" }}
                  >
                    <p className="pError">Warning</p>
                    <p className="pErrorSub">Invalid tracking number.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    }
  }

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className = "container-fluid conNavtrac" style = {{backgroundColor: "#212121"}}>
      <Navbar></Navbar>
      </div>
      <div className="container-fluid h-100 conSearch">
  
        <div
          className="row h-100 align-items-center"
          style={{ padding: "0px" }}
        >
          <div className="col-lg-12 text-center">
            <p className = "pTrackheader">Track your parcel</p>
          </div>
          <div className="col-lg-12">
            <div className="divSearch">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <p className="pBooking">Booking tracking</p>
                  <p className="pBookingSub">
                    Enter the booking number to get the latest information
                  </p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    value={id}
                    onChange={idChange}
                    onKeyPress={onKeyPress1}
                    className="txtTrack"
                    placeholder="Enter tracking number.."
                  ></input>
                </div>
                <div className="col-lg-2">
                  <a className="btn btnTrack" onClick={searchBook}>
                    Search
                    <span style={{ marginLeft: "17px", color: "#212121" }}>
                      <b style={{ color: "black" }}></b>
                      <b></b>
                      <b></b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row rowPackage">
                <div className="col-lg-4">
                  <p className="p8">
                    Track <br></br> Package
                  </p>
                  <p className="p8Sub">
                    Track your package realtime status without logging in.
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="p8">
                    View <br></br>Details
                  </p>
                  <p className="p8Sub">
                    Enhanced visibility with a detailed view of all bookings.
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="p8">
                    Sms <br></br>Support
                  </p>
                  <p className="p8Sub">
                    Track your package realtime status without logging in.
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
