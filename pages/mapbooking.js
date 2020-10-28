import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import Componentdidmount from "../component/componentdidmount";
import "../component/map/config";
import Googlemap from "../component/map/maploaderbook";
import authService from "../services/auth.service";
import Link from "next/link";
export default function mapbooking() {
  const router = useRouter();
  const [origin, setOrigin] = React.useState({
    lat: null,
    lng: null,
  });
  const [fullname, setFullname] = React.useState("");
  const status = [
    { value: "Delivered", label: "Delivered" },
    { value: "Looking for Driver", label: "Looking for Driver" },
    { value: "Ongoing", label: "Ongoing" },
  ];
  const [datebook, setDatebook] = React.useState("");
  const [pricebook, setPricebook] = React.useState("");
  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransitBook";
      case "Looking for Driver":
        return "looking";
    }
  };

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
      try {
        var d = tablemap[
          global.config.place.deliver.table_id - 1
        ].created_at.slice(0, 10);
        setPricebook(tablemap[global.config.place.deliver.table_id - 1].total);
        setDatebook(d);
      } catch (e) {
        router.push("/profile");
        return false;
      }
    } else {
      router.push("/profile");
      return false;
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
        <div className="divSidebar">
          <div className="divMenu">
            <div className="divIcon">
              <ul className="no-bullets">
                <Link href="/driver">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img src="Image/home.png" style={{ width: "20px" }}></img>
                      <span>Home</span>
                    </li>
                  </a>
                </Link>
                <Link href="/index">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img
                        src="Image/truck.png"
                        style={{ width: "20px" }}
                      ></img>
                      <span>Deliver</span>
                    </li>
                  </a>
                </Link>
                <Link href="">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img src="Image/call.png" style={{ width: "20px" }}></img>
                      <span>Contact</span>
                    </li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="row h-100">
          <div className="col-lg-9 h-100">
            <div className="divMapBook">
              <Googlemap></Googlemap>
            </div>
          </div>
          <div className="col-lg-3 colPackage">
            <div>
              <div className="circleBook">
                <img src="Image/profile.jpg" alt="" />
              </div>
              <p className="packageFullname">{fullname}</p>
              <p className="pNumber">09636787712</p>
              <div className="row" style={{ padding: "0px" }}>
                <div className="col-lg-6" style={{ padding: "0px" }}>
                  <p
                    className="p2 text-center"
                    style={{ marginBottom: "2px", fontSize: "1rem" }}
                  >
                    Date
                  </p>
                  <p className="pDate">{datebook}</p>
                </div>
                <div
                  className="col-lg-6"
                  style={{ borderLeft: "1px solid  #414141", padding: "0px" }}
                >
                  <p
                    className="p2 text-center"
                    style={{ marginBottom: "2px", fontSize: "1rem" }}
                  >
                    Price
                  </p>
                  <p className="pDate">{pricebook}</p>
                </div>
              </div>
              <hr className="hrDashboard" style={{ marginTop: "8px" }}></hr>
              <p className="p2" style={{ marginLeft: "18px" }}>
                Bookings
              </p>
              <div>
                {tablemap
                  .filter(
                    (event) => event.id === global.config.place.deliver.table_id
                  )
                  .map((data) => (
                    <div className="container">
                      <ul key={data.id} style={{ paddingLeft: "17px" }}>
                        <li className="liBooking">
                          <p className={statusColor(data.status)}>
                            {data.status}
                          </p>
                          {data.pick_up_address}

                          <span className="spanMore">
                            &#8226;&#8226;&#8226;
                          </span>
                          <div style={{ display: "none" }}>
                            <p className="p3">{data.contact_name}</p>
                            <p className="p3">{data.contact_number}</p>
                          </div>
                        </li>

                        {data.booking_drop_off_location.map((data) => (
                          <li className="liBooking">
                            <p className={statusColor(data.status)}>
                              {data.status}
                            </p>
                            {data.drop_off_address}
                            <span className="spanMore">
                              &#8226;&#8226;&#8226;
                            </span>
                            <div style={{ display: "none" }}>
                              <p className="p3">{data.contact_name}</p>
                              <p className="p3">{data.contact_number}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
