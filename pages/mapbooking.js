import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import Componentdidmount from "../component/componentdidmount";
import "../component/map/config";
import Googlemap from "../component/map/maploaderbook";

export default function mapbooking() {
  const router = useRouter();
  const [origin, setOrigin] = React.useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    console.log(tablemap);
    tablemap
      .filter((event) => event.id === 2)
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
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }
  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container-fluid">
        <div className="divSidebar" style = {{zIndex: "999999999999999"}}>
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
        <div className="row">
          <div className="col-lg-6">
          
          </div>
          <div className="col-lg-6">
            <div className="divMap">
              <Googlemap></Googlemap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
