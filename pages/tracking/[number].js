import React, { Component, useState, useEffect } from "react";
import Googlemap from "../../component/map/maptracking";
import Header from "../../component/header";
import { useRouter } from "next/router";
import Head from "next/head";
import Componentdidmount from "../../component/componentdidmount";

import axios from "axios";

function Post() {
  const [id, setId] = React.useState("");
  const [booking, setBooking] = React.useState([]);
  const [dropoff_loc, setDropoffloc] = React.useState([]);
  const [driver, setDriver] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [pickup_name, setPickupname] = React.useState("");
  const [pickup_mobile, setPickupmobile] = React.useState("");
  const [pickup_note, setPickupnote] = React.useState("");
  const [driver_loc, setDriverloc] = React.useState([]);
  const [driver_lat, setDriverlat] = React.useState("");
  const [driver_lng, setDriverlng] = React.useState("");
  const [trackingnum, setTrackingnum] = React.useState("");
  const [profilepic, setProfilepic] = React.useState("");
  const [estimated, setEstimated] = React.useState("");
  const router = useRouter();
  const { number } = router.query;
  const today = Date.now();
  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransittrack";
      case "Arrived":
        return "arrivedtrack";
      case "Complete":
        return "complete";
      case "Arrived at Pick Up":
        return "arrivedpickup";
      case "Driver found":
        return "driverfound";
      case "Looking for Driver":
        return "looking1";
    }
  };

  useEffect(() => {
    if (dropoff_loc) {
      {
        dropoff_loc.map((event, index) => {
          const dropoff = {
            id: 4,
            name: "",
            lat: parseFloat(event.drop_off_latitude),
            lng: parseFloat(event.drop_off_longitude),
            icon: "../Image/navigation.png",
          };
          tracks.push(dropoff);
        });
      }
    }
  }, [dropoff_loc]);

  useEffect(() => {
    if (driver_loc) {
      const dropoff = {
        id: 4,
        name: "",
        lat: parseFloat(driver_loc.driver_latitude),
        lng: parseFloat(driver_loc.driver_longitude),
        icon: "../Image/rider.png",
      };
      tracks.push(dropoff);
    }
  }, [driver_loc]);

  useEffect(() => {
    const interval = setInterval(() => {
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
        .post(apiUrl, { tracking_id: { number } }, options)
        .then((result) => {
          console.log(result.data.data);
          setDropoffloc(
            result.data.data.booking_details.booking_drop_off_location
          );
          setBooking(result.data.data);
          setTrackingnum(result.data.data.booking_details.tracking_id);
          setDriverloc(result.data.data.driver_location[0]);
          try {
            setMobile(result.data.data.booking_details.driver.mobile_no);
          } catch (e) {}
          setPickup(result.data.data.booking_details.pick_up_address);
          setPickupname(result.data.data.booking_details.contact_name);
          setPickupmobile(result.data.data.booking_details.contact_number);
          setPickupnote(result.data.data.booking_details.note);
          setDriverlat(result.data.data.driver_location[0].driver_latitude);
          setDriverlng(result.data.data.driver_location[0].driver_longitude);
          try {
            setDriver(
              result.data.data.booking_details.driver.fname +
                " " +
                result.data.data.booking_details.driver.lname
            );
            setProfilepic(
              "https://jgo-storage.s3.ap-southeast-1.amazonaws.com/" +
                result.data.data.booking_details.driver.profile_pic
            );
            setEstimated(result.data.data.booking_details.duration);
          } catch (e) {}

          const pickoffloc = {
            id: 5,
            name: "",
            lat: parseFloat(result.data.data.booking_details.pick_up_latitude),
            lng: parseFloat(result.data.data.booking_details.pick_up_longitude),
            icon: "../Image/navigation.png",
          };
          tracks.push(pickoffloc);
          router.push("/tracking/" + number);
        })
        .catch((err) => {});
    }, 10000);

    return () => clearInterval(interval);
  });

  function sendSms() {
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = "sms:1234567890?&body=message"
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.location.href = "sms:1234567890?&body=message"
    }
  }

  useEffect(() => {
    let scripts = [{ src: "../Script/jgo.js" }];
    scripts.map((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
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
      .post(apiUrl, { tracking_id: { number } }, options)
      .then((result) => {
        console.log(result.data.data);
        setDropoffloc(
          result.data.data.booking_details.booking_drop_off_location
        );
        setBooking(result.data.data);
        setTrackingnum(result.data.data.booking_details.tracking_id);
        setDriverloc(result.data.data.driver_location[0]);
        try {
          setMobile(result.data.data.booking_details.driver.mobile_no);
        } catch (e) {}
        setPickup(result.data.data.booking_details.pick_up_address);
        setPickupname(result.data.data.booking_details.contact_name);
        setPickupmobile(result.data.data.booking_details.contact_number);
        setPickupnote(result.data.data.booking_details.note);
        setDriverlat(result.data.data.driver_location[0].driver_latitude);
        setDriverlng(result.data.data.driver_location[0].driver_longitude);
        try {
          setDriver(
            result.data.data.booking_details.driver.fname +
              " " +
              result.data.data.booking_details.driver.lname
          );
        } catch (e) {}
        $(".divBookDetails, .divDriver, .divPickoff").fadeIn(200);
        const pickoffloc = {
          id: 5,
          name: "",
          lat: parseFloat(result.data.data.booking_details.pick_up_latitude),
          lng: parseFloat(result.data.data.booking_details.pick_up_longitude),
          icon: "../Image/navigation.png",
        };

        tracks.push(pickoffloc);
        router.push("/tracking/" + number);
      })
      .catch((err) => {
        router.push("../404");
      });
  }, [number]);

  return (
    <>
      <Header></Header>
      <Head>
        <link rel="stylesheet" href="../Css/index.css"></link>
      </Head>

      <div className="container-fluid  h-100">
        <div className="divBookDetails1">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="p5">Tracking number</p>
              <p className="pFullname p5Sub">{trackingnum}</p>
            </div>
          </div>
        </div>

        <div
          className="row h-100"
          style={{ padding: "0px", backgroundColor: "white" }}
        >
          <div className="col-lg-3 colSidebar colSideTrack">
            <div className="divBookDetails">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-6">
                  <p className="p5">Tracking number</p>
                  <p className="pFullname p5Sub">{trackingnum}</p>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                  <p className="p5">Last updated</p>
                  <p className="pFullname p5Sub">30 secs ago</p>
                </div>
              </div>
            </div>

            <div className="divEstimated">
              <hr className="hrTrack"></hr>
              <div className="row">
                <div className="col-lg-6 col-sm-7 col-7">
                  <p className="pEstimated">Estimated time duration</p>
                </div>
                <div className="col-lg-6 col-sm-5 col-5 text-center">
                  <p className="pEstimatedtime">{estimated}</p>
                </div>
              </div>
            </div>
            <div className="divDriver">
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-3 col-3">
                  <div className="divProfimg">
                    <img src={profilepic} className="img-fluid"></img>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                  <p className="pPickTrack">Driver</p>
                  <p className="pFullname pPickLock">{driver}</p>
                  <p className="pFullname pMobiledriver">{mobile}</p>
                </div>
                <div className="col-lg-3 col-sm-3 col-3">
                  <a onClick={sendSms}>
                    <img
                      src="../Image/viber.png"
                      className="mx-auto d-flex imgCall"
                    ></img>
                    <p className="pMessagetrack text-center">Message</p>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="divPickoff divPickoffTrack"
              style={{ display: "none" }}
            >
              <div className="row row">
                <div className="col-lg-12">
                  <p className="pPickTrack">PICKOFF LOCATION</p>
                  <p className="pFullname pPickLock">{pickup}</p>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderTop: "1px solid #EEEEEE",
                  marginTop: "10px",
                  paddingTop: "10px",
                }}
              >
                <div className="col-lg-6 col-sm-6 col-6">
                  <p className="pPickTrack">Name</p>
                  <p className="pFullname pPickLock">{pickup_name}</p>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                  <p className="pPickTrack">Number</p>
                  <p className="pFullname pPickLock">{pickup_mobile}</p>
                </div>
                <div
                  className="col-lg-12 col-sm-12 col-12"
                  style={{ marginTop: "5px" }}
                >
                  <p className="pPickTrack">Note</p>
                  <p className="pFullname pPickLock">{pickup_note}</p>
                </div>
              </div>
            </div>
            {(() => {
              try {
                if (dropoff_loc) {
                  return (
                    <div>
                      {dropoff_loc.map((event, index) => {
                        return (
                          <div className="divDropoff">
                            <div className="row">
                              <div className="col-lg-12">
                                <p className="pPickTrack">DROPOFF LOCATION</p>
                                <p
                                  className="pFullname pPickLock"
                                  style={{ fontWeight: "600" }}
                                >
                                  {event.drop_off_address}
                                </p>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                borderTop: "1px solid #EEEEEE",
                                marginTop: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <div className="col-lg-6 col-sm-6 col-6">
                                <p className="pPickTrack">Create date</p>
                                <p className="pFullname  pDatetrack">
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  }).format(Date.parse(event.created_at))}
                                </p>
                              </div>
                              <div className="col-lg-6 col-sm-6 col-6">
                                <p className="pPickTrack">Completed date</p>
                                <p className="pFullname  pDatetrack">
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  }).format(Date.parse(event.updated_at))}
                                </p>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                borderTop: "1px solid #EEEEEE",
                                marginTop: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <div className="col-lg-4 col-4 col-sm-4">
                                <p className="pPickTrack">Distance</p>
                                <p
                                  className="pFullname pPickLock pKm "
                                  style={{
                                    fontWeight: "600",
                                  }}
                                >
                                  {event.distance}{" "}
                                  <span className="sKm">km</span>
                                </p>
                              </div>
                              <div className="col-lg-4 col-4 col-sm-4">
                                <p className="pPickTrack">Category</p>
                                <p
                                  className="pFullname pPickCategory"
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                  }}
                                >
                                  {event.category_id == "5"
                                    ? "Fragile"
                                    : "Undefined"}
                                </p>
                              </div>
                              <div className="col-lg-4 col-4 col-sm-4">
                                <p className="pPickTrack">Status</p>
                                <p className={statusColor(event.status)}>
                                  {event.status}
                                </p>
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{
                                borderTop: "1px solid #EEEEEE",
                                marginTop: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <div className="col-lg-6 col-4 col-sm-4">
                                <p className="pPickTrack">Name</p>
                                <p className="pFullname pPickLock">
                                  {event.contact_name}
                                </p>
                              </div>
                              <div className="col-lg-6 col-4 col-sm-4">
                                <p className="pPickTrack">Number</p>
                                <p className="pFullname pPickLock">
                                  {event.contact_no}
                                </p>
                              </div>
                              <div
                                className="col-lg-12 col-sm-12 col-12"
                                style={{ marginTop: "5px" }}
                              >
                                <p className="pPickTrack">Note</p>
                                <p className="pFullname pPickLock">
                                  {event.note}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <p style={{ fontSize: "9rem" }}>asdasdas</p>
                    </div>
                  );
                }
              } catch (e) {
                console.log(e);
              }
            })()}
          </div>
          <div className="col-lg-9 colMapTrack">
            <Googlemap></Googlemap>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
