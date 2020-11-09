import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maptracking";
import Header from "../component/header";
import { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import Componentdidmount from "../component/componentdidmount";
import Leaflet from "../component/map/leaflet";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";
import Select from "react-select";
import axios from "axios";
import { useParams} from "react-router";
export default function tracking() {
  const [id, setId] = React.useState("");
  const [booking, setBooking] = React.useState([]);
  const [dropoff_loc, setDropoffloc] = React.useState([]);
  const [driver, setDriver] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [pickup_name, setPickupname] = React.useState("");
  const [pickup_mobile, setPickupmobile] = React.useState("");
  const [pickup_note, setPickupnote] = React.useState("");
  const [origin, setOrigin] = React.useState([]);
  const router = useRouter();
  const today = Date.now();
  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransit";
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

  function txtclick() {}

  useEffect(() => {});

  useEffect(() => {
    if (dropoff_loc) {
      {
        dropoff_loc.map((event, index) => {
          const dropoff = {
            id: 4,
            name: "",
            lat: parseFloat(event.drop_off_latitude),
            lng: parseFloat(event.drop_off_longitude),
            icon: "Image/gps.png",
          };
          tracks.push(dropoff);

          router.push("");
        });
      }
    }
  }, [dropoff_loc]);

  function idChange(e) {
    setId(e.target.value);
  }

  function onKeyPress(e) {
    if (e.which === 13) {
      tracks.length = 0;
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      const apiUrl = "http://localhost:8000/api/auth/show-driver-location";
      axios
        .post(apiUrl, { id: id }, options)
        .then((result) => {
          console.log(result.data.data);
          setDropoffloc(
            result.data.data.booking_details.booking_drop_off_location
          );
          setBooking(result.data.data);
          console.log(
            result.data.data.booking_details.booking_drop_off_location
          );
          try {
            setMobile(result.data.data.booking_details.driver.mobile_no);
          } catch (e) {}
          setPickup(result.data.data.booking_details.pick_up_address);
          setPickupname(result.data.data.booking_details.contact_name);
          setPickupmobile(result.data.data.booking_details.contact_number);
          setPickupnote(result.data.data.booking_details.note);
          try {
            setDriver(
              result.data.data.booking_details.driver.fname +
                " " +
                result.data.data.booking_details.driver.lname
            );
          } catch (e) {}

          const pickoffloc = {
            id: 5,
            name: "",
            lat: parseFloat(result.data.data.booking_details.pick_up_latitude),
            lng: parseFloat(result.data.data.booking_details.pick_up_longitude),
            icon: "Image/gps.png",
          };

          tracks.push(pickoffloc);
          console.log(pickoffloc);
          router.push("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function onKeyPress1(e) {
    if (e.which == 13) {
      searchBook();
    }
  }

  function searchBook(e) {
    if (id == "") {
      alert("Enter tracking number to proceed.");
      return false;
    } else {
      $(".btn").addClass("btn--loading");
      $(".divPickoff, .divDropoff").fadeIn(150);
      tracks.length = 0;
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
        },
      };
      const apiUrl = "http://localhost:8000/api/auth/show-driver-location";
      axios
        .post(apiUrl, { id: id }, options)
        .then((result) => {
          console.log(result.data.data);
          setDropoffloc(
            result.data.data.booking_details.booking_drop_off_location
          );
          setBooking(result.data.data);
          console.log(
            result.data.data.booking_details.booking_drop_off_location
          );
          try {
            setMobile(result.data.data.booking_details.driver.mobile_no);
          } catch (e) {}
          setPickup(result.data.data.booking_details.pick_up_address);
          setPickupname(result.data.data.booking_details.contact_name);
          setPickupmobile(result.data.data.booking_details.contact_number);
          setPickupnote(result.data.data.booking_details.note);
          try {
            setDriver(
              result.data.data.booking_details.driver.fname +
                " " +
                result.data.data.booking_details.driver.lname
            );
          } catch (e) {}

          const pickoffloc = {
            id: 5,
            name: "",
            lat: parseFloat(result.data.data.booking_details.pick_up_latitude),
            lng: parseFloat(result.data.data.booking_details.pick_up_longitude),
            icon: "Image/gps.png",
          };
          $(".btn").removeClass("btn--loading");
          $(".conSearch").fadeOut(150);
          $(".conSide").fadeIn(150);
          tracks.push(pickoffloc);
          console.log(pickoffloc);
          router.push("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid h-100 conSearch">
        <div
          className="row h-100 align-items-center"
          style={{ padding: "0px" }}
        >
          <div className="col-lg-12" style = {{display: "none"}}>
            <img
              src="Image/newlogo.png"
              className="mx-auto d-flex img-fluid" style = {{width: "150px"}}
            ></img>
          </div>
          <div className="col-lg-12" stl>
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
      <div className="container-fluid conSide h-100">
        <div className="row h-100" style={{ padding: "0px" }}>
          <div className="col-lg-3 colSidebar">
            <div className="top">
              <input
                type="text"
                className="txtBookingid"
                onKeyPress={onKeyPress}
                placeholder="Search booking id.."
                value={id}
                onChange={idChange}
                onClick={txtclick}
              ></input>
            </div>
            <div className="divBookDetails">
              <div className="row">
                <div className="col-lg-6">
                  <p className="p5">Tracking number</p>
                  <p className="pFullname p5Sub">JGO1234567</p>
                </div>
                <div className="col-lg-6">
                  <p className="p5">Last updated</p>
                  <p className="pFullname p5Sub">2 mins ago</p>
                </div>
              </div>
            </div>
            <div className="divDriver">
              <div className="row">
                <div className="col-lg-6">
                  <p className="pPickTrack">Driver</p>
                  <p className="pFullname pPickLock">Mark Legazpi</p>
                </div>
                <div className="col-lg-6">
                  <p className="pPickTrack">Mobile</p>
                  <p className="pFullname pPickLock">09887888877</p>
                </div>
                <div className="col-lg-3" style={{ display: "none" }}>
                  <div className="divProfimg ">
                    <img src="Image/sample.jpeg" className="imgDriver"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="divPickoff">
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
                <div className="col-lg-6">
                  <p className="pPickTrack">Name</p>
                  <p className="pFullname pPickLock">{pickup_name}</p>
                </div>
                <div className="col-lg-6">
                  <p className="pPickTrack">Number</p>
                  <p className="pFullname pPickLock">{pickup_mobile}</p>
                </div>
                <div className="col-lg-12" style={{ marginTop: "5px" }}>
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
                              <div className="col-lg-6">
                                <p className="pPickTrack">Create date</p>
                                <p className="pFullname  pDatetrack">
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                  }).format(Date.parse(event.created_at))}
                                </p>
                              </div>
                              <div className="col-lg-6 ">
                                <p className="pPickTrack">Completed date</p>
                                <p className="pFullname  pDatetrack">
                                  {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
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
                              <div className="col-lg-4">
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
                              <div className="col-lg-4">
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
                              <div className="col-lg-4">
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
                              <div className="col-lg-6">
                                <p className="pPickTrack">Name</p>
                                <p className="pFullname pPickLock">
                                  {event.contact_name}
                                </p>
                              </div>
                              <div className="col-lg-6">
                                <p className="pPickTrack">Number</p>
                                <p className="pFullname pPickLock">
                                  {event.contact_no}
                                </p>
                              </div>
                              <div
                                className="col-lg-12"
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
