import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import Componentdidmount from "../component/componentdidmount";
import "../component/map/config";
import Googlemap from "../component/map/maploaderbook";
import authService from "../services/auth.service";

export default function mapbooking() {
  const router = useRouter();
  const [origin, setOrigin] = React.useState({
    lat: null,
    lng: null,
  });
  const [fullname, setFullname] = React.useState("");

  if (process.browser) {
    if (tablemap.length == 0) {
      router.push("/profile");
      return false;
    }
  }

  useEffect(() => {
    setFullname(authService.getFullname());
    console.log(global.config.place.deliver.table_id);
    if (tablemap) {
      console.log(tablemap);
      tablemap
        .filter((event) => event.id === global.config.place.deliver.table_id)
        .map(
          (data) => (
            coordinatebook.push({
              lat: Number(data.pick_up_latitude),
              lng: Number(data.pick_up_longitude),
            }),
            data.booking_drop_off_location.map((data) =>
              coordinatebook.push({
                lat: Number(data.drop_off_latitude),
                lng: Number(data.drop_off_longitude),
              })
            )
          )
        );
    } else {
    }
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div
        className="container-fluid h-100"
        style={{ backgroundColor: "#15181A" }}
      >
        <div className="divSidebar" style={{ zIndex: "999999999999999" }}>
          <img
            src="Image/horse.png"
            className="img-fluid mx-auto d-flex"
            style={{ width: "35px", marginTop: "15px" }}
          ></img>
          <div className="divMenu">
            <div className="divIcon">
              <ul className="no-bullets">
                <li>
                  <img
                    src="Image/home.png"
                    style={{ width: "20px" }}
                    onClick={trylang}
                  ></img>
                </li>
                <li>
                  <img src="Image/truck.png" style={{ width: "20px" }}></img>
                </li>
                <li>
                  <img src="Image/call.png" style={{ width: "20px" }}></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row h-100">
          <div className="col-lg-10 h-100">
            <div className="divMapBook">
              <Googlemap></Googlemap>
            </div>
          </div>
          <div className="col-lg-2 colPackage">
            <div>
              <div className="circleBook">
                <img src="Image/profile.jpg" alt="" />
              </div>
              <p className="packageFullname">{fullname}</p>
              <p className="pNumber">09636787712</p>
              <hr className="hrDashboard"></hr>
              <p className="p2">Bookings</p>
              <div>
                {tablemap
                  .filter(
                    (event) => event.id === global.config.place.deliver.table_id
                  )
                  .map((data) => (
                    <ul key={data.id} style = {{paddingLeft: "17px"}}>
                      <li className = "liBooking">{data.pick_up_address}</li>
                      {data.booking_drop_off_location.map((data) => (
                        <li className = "liBooking">{data.drop_off_address}</li>
                      ))}
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
