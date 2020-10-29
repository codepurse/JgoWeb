import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Select from "react-select";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableid, settableid] = React.useState("1");
  const [count, setCount] = React.useState("");
  const [activeCount, setACtivecount] = React.useState("");
  const [statusdropdown, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [oldpass, setOldpass] = React.useState("");
  const [confirmoldpass, setConfirmoldpass] = React.useState("");
  const [newpass, setNewpass] = React.useState("");
  var x;

  const status = [
    { value: "Delivered", label: "Delivered" },
    { value: "Looking for Driver", label: "Looking for Driver" },
    { value: "Ongoing", label: "Ongoing" },
  ];

  const date = [{ value: "October", label: "October" }];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "none",
      boxShadow: "none",
      borderRadius: "5px",
      width: "115%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : "",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    container: (base) => ({
      ...base,
      width: "150px",
    }),
  };

  useEffect(() => {
    coordinatebook.length = 0;
    global.config.place.deliver.table_id = "";
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
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = "http://localhost:8000/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        console.log(result);
        setTabledata(result.data.data);
        tablemap = result.data.data;
        setCount(result.data.data.length);
        if (result.data.data.length === 0) {
          $(".pNo").show();
        }
        const active = result.data.data.filter(
          (item) => item.status === "Looking for Driver"
        );
        setACtivecount(active.length);
      })
      .catch((err) => {
        console.log(err);
      });

    const apiUrl1 = "http://localhost:8000/api/auth/customers";
    axios
      .get(
        apiUrl1,
      
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            Authorization: `Bearer ${AuthService.getToken()}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
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
    $(".conProf").fadeIn(250);
    $(".conBook").hide();
    $(".conSettings").hide();
  }

  function booking() {
    $(".conBook").fadeIn(250);
    $(".conProf").hide();
    $(".conSettings").hide();
  }

  function settings() {
    $(".conSettings").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
  }

  async function clickTable() {
    $("#table").on("click", "tr", function (e) {
      global.config.place.deliver.table_id = Number(
        $(this).children().closest("td").html()
      );
    });

    if (global.config.place.deliver.table_id == "") {
    } else {
      router.push("/mapbooking");
    }
    doubleclickTable();
  }

  function doubleclickTable() {
    $("#table").on("click", "tr", function (e) {
      global.config.place.deliver.table_id = Number(
        $(this).children().closest("td").html()
      );
    });

    if (global.config.place.deliver.table_id == "") {
    } else {
      router.push("/mapbooking");
    }
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

  function handlestatuschange(value) {
    var value = value.label.toLowerCase();
    setStatus(value.label);
    $("#table > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    });
  }

  function handleChangeemail(e) {
    setEmail(e.value);
  }

  function handleChangeoldpass(e) {
    setOldpass(e.value);
  }

  function handleChangeconfirmoldpass(e) {
    setConfirmoldpass(e.value);
  }

  function handleChangenewpass(e) {
    setNewpass(e.value);
  }

  function btnChangepass() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    let formdata = new FormData();
    formdata.set("email", email);
    formdata.set("token", AuthService.getToken());
    formdata.set("password", oldpass);
    formdata.set("password_confirmation", confirmoldpass);
    formdata.set("new_password", newpass);

    const apiUrl = "http://localhost:8000/api/auth/change-password";
    axios
      .post(apiUrl, formdata, options)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <div className="container-fluid conMenu">
        <div className="row">
          <div className="pDashboard">
            <p className="pDashboard">Dashboard</p>
          </div>
          <div className="col-lg-12">
            <ul className="ulDashboard">
              <li onClick={booking} className="activeUl">
                BOOKINGS
              </li>
              <li onClick={profile}>PROFILE</li>
              <li onClick={settings}>SETTINGS</li>
            </ul>
            <hr className="hrDashboard"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid conBook">
        <div className="row">
          <div className="col-lg-12 form-inline">
            <p className="pTotalBookings">
              {count}Total Bookings{" "}
              <span className="pActiveBookings">{activeCount} Active</span>
            </p>
          </div>
          <div className="col-lg-7 form-inline">
            <div>
              <Select
                options={date}
                styles={customStyles}
                placeholder="Select Date"
              />
            </div>
            <div className="div">
              <Select
                options={status}
                styles={customStyles}
                placeholder="Select status"
                value={statusdropdown}
                onChange={handlestatuschange}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="divInputIcon">
              <input
                type="text"
                className="txtSearch"
                placeholder="Search id"
              ></input>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table
                className="table"
                id="table"
                onClick={clickTable}
                onDoubleClick={doubleclickTable}
                onMouseOver={hovertable}
              >
                <thead>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Pickup Address</th>
                    <th>Drop Location</th>
                  </tr>
                </thead>
                <tbody>
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
        <div className="row">
          <div className="col-lg-12">
            <div>
              <p className="pNo">NO RESULT FOUND</p>
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

      <div className="container-fluid conSettings">
        <div className="row">
          <div className="col-lg-12">
            <p className="pSettingsTitle">General Settings</p>
            <div>
              <input type="checkbox" id="switch" />
              <label for="switch">Toggle</label>
              <span className="spanCheck">Enable light mode</span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <input type="checkbox" id="switch1" />
              <label for="switch1">Toggle</label>
              <span className="spanCheck">Enable toolips</span>
            </div>
            <p className="pSettingsTitle" style = {{marginTop: "20px"}}>Password</p>
            <button
              className="btnChangepassword"
              data-toggle="modal"
              data-target="#modalChangepass"
            >
              CHANGE PASSWORD
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalChangepass"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body modalChangepass">
              <p className="pModalTitle">Change Password</p>
              <p className="pModalTitleSub">
                Your new password must be different from previous used
                passwords.
              </p>
              <hr
                style={{
                  backgroundColor: "#414141",
                  boder: "1px solid #414141",
                }}
              ></hr>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtEmailchange"
                    value={email}
                    placeholder="Enter email address"
                    onChange={handleChangeemail}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass"
                    value={oldpass}
                    placeholder="Enter old password"
                    onChange={handleChangeoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass"
                    value={confirmoldpass}
                    placeholder="Enter old confirm password"
                    onChange={handleChangeconfirmoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    value={newpass}
                    className="txtNewpass"
                    placeholder="Enter new password"
                    onChange={handleChangenewpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <button className="btnChangepass" onClick={btnChangepass}>
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
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
