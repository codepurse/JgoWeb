import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import Componentdidmount from "../component/componentdidmount";

export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableid, settableid] = React.useState("1");

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
    $(".conBook").hide();
    $(".conProf").fadeIn(250);
  }

  function booking() {
    $(".conBook").fadeIn(250);
    $(".conProf").hide();
  }

  function clickTable() {
    $("#table").on("click", "tr", function (e) {
      settableid($(this).children().closest("td").html());
    });
    router.push("");
  }

  function hovertable() {
    $("tr")
      .not(":first")
      .hover(
        function () {
          $("td", this).css("color", "#EDC728 ");
        },
        function () {
          $("td", this).css("color", "");
        }
      );
  }

  function removeHover() {}

  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransit";
    }
  };

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
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
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ width: "120px", marginLeft: "40px" }}
            ></img>
          </div>
          <div className="col-lg-4 text-center"></div>
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
      <div className="container-fluid conMenu" >
        <div className="row">
          <div className="col-lg-12">
            <ul className="ulDashboard">
              <li onClick={booking}>BOOKINGS</li>
              <li onClick={profile}>PROFILE</li>
              <li>SETTINGS</li>
            </ul>
            <hr className="hrDashboard"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid conBook">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table
                className="table "
                id="table"
                onClick={clickTable}
                onMouseOver={hovertable}
                onMouseOut={removeHover}
              >
                <tbody>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Pickup Address</th>
                    <th>Drop Location</th>
                  </tr>
                  {tabledata.map((event) => (
                    <tr key={event.id}>
                      <td>{event.id}</td>
                      <td>{event.status}</td>
                      <td>{event.pick_up_address}</td>
                      {event.booking_drop_off_location.map((event) => (
                        <td key={event.id}>
                          {event.drop_off_address}
                          <span className={statusColor(event.status)}>
                            {event.status}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                {tabledata
                  .filter((event) => event.id === 2)
                  .map((data) => (
                    <div key={data.id}>
                      <li>{data.pick_up_address}</li>
                      {data.booking_drop_off_location.map((data) => (
                        <li>{data.drop_off_address}</li>
                      ))}
                    </div>
                  ))}
              </div>
              {tableid}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
