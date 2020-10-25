import React, { Component, useEffect, useState } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Select from "react-select";
import Componentdidmount from "../component/componentdidmount";

export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableid, settableid] = React.useState("1");
  const [count, setCount] = React.useState("");
  const [activeCount, setACtivecount] = React.useState("");
  const [statusdropdown, setStatus] = React.useState("");
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
        const active = result.data.data.filter(
          (item) => item.status === "Looking for Driver"
        );
        setACtivecount(active.length);
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
      <div className="container-fluid conMenu">
        <div className="row">
          <div className="col-lg-12">
            <ul className="ulDashboard">
              <li onClick={booking} className="activeUl">
                BOOKINGS
              </li>
              <li onClick={profile}>PROFILE</li>
              <li>SETTINGS</li>
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
                onDoubleClick = {doubleclickTable}
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
