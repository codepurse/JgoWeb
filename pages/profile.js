import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";

export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);



  useEffect(() => {
    if (AuthService.getFullname()) {
      setFull_name(AuthService.getFullname());
      $(".conProfile").show();
    } else {
      router.push("/");
    }

    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };
    const apiUrl = "http://localhost:8000/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: 3 }, options)
      .then((result) => {
        console.log(result);
        setTabledata(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function logout() {
    AuthService.logout();
    router.push("/");
  }

  function profile() {
    $(".conBooking").hide();
    $(".conProf").fadeIn(250);
  }

  function booking() {
    $(".conBooking").fadeIn(250);
    $(".conProf").hide();
  }

  return (
    <>
      <Header></Header>
      <div className="container-fluid conProfile">
        <div className="divSidebar">
          <div className="divMenu">
            <div className="divIcon">
              <ul className="no-bullets">
                <li>
                  <img src="Image/home.png" style={{ width: "20px" }}></img>
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
        <div className="row rowTop">
          <div className="col-lg-4">
            <img
              src="Image/logo.png"
              className="img-fluid"
              style={{ width: "120px", marginLeft: "40px" }}
            ></img>
          </div>
          <div className="col-lg-4 text-center">
            <ul className="ulDashboard mx-auto">
              <li onClick={booking}>BOOKINGS</li>
              <li onClick={profile}>PROFILE</li>
              <li>SETTINGS</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="form-inline divUserNav">
              <button className="btnLogout" onClick={logout}>
                Logout
              </button>
              <div className="vl"></div>
              <span className="pFullname">{full_name}</span>
              <div className="circle">
                <img src="Image/profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container conBook">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table class="table table-striped table-bordered" id = "table">
                <tr>
                  <th>Status</th>
                  <th>Pickup Address</th>
                </tr>
                {tabledata.map((event) => (
                  <tr>
                    <td>{event.status}</td>
                    <td>{event.pick_up_address}</td>
                    {event.booking_drop_off_location.map((event) => (
                      <td>{event.drop_off_address}</td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container conProf">
        <div className="row">
          <div className="col-lg-12">
            <p className="pTitleDashboard">General Information</p>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver pFname">First Name</p>
            <input type="text" className="txtDriver txtFname"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Middle Name</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver pLname">Last Name</p>
            <input type="text" className="txtDriver txtLname"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver pEmail">Email</p>
            <input type="text" className="txtDriver txtEmail"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver pMobile">Mobile Number</p>
            <input type="text" className="txtDriver txtMobile"></input>
          </div>
          <div className="col-lg-12">
            <p className="pTitleDashboard">AddressInformation</p>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Address</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Region</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Province</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">City/Municipality</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Country</p>
            <input type="text" className="txtDriver"></input>
          </div>
          <div className="col-lg-4">
            <p className="pTxtDriver">Zip Code</p>
            <input type="text" className="txtDriver"></input>
          </div>
        </div>
      </div>
    </>
  );
}
