import React, { Component, useEffect, useState, useCallback } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import { useRouter } from "next/router";
import axios from "axios";
import "../component/map/config";
import Select from "react-select";
import swal from "@sweetalert/with-react";
import NextNprogress from "nextjs-progressbar";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";
import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";
export default function profile() {
  const router = useRouter();
  const [full_name, setFull_name] = React.useState("");
  const [tabledata, setTabledata] = React.useState([]);
  const [tableproile, setTableprofile] = React.useState([]);
  const [tableid, settableid] = React.useState("1");
  const [count, setCount] = React.useState("");
  const [activeCount, setACtivecount] = React.useState("");
  const [statusdropdown, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [oldpass, setOldpass] = React.useState("");
  const [confirmoldpass, setConfirmoldpass] = React.useState("");
  const [newpass, setNewpass] = React.useState("");
  const [isToggled, setIsToggled] = React.useState(false);
  const [firstid, setFirstid] = React.useState("");
  const [firstrun, setFirstrun] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showmore, setShowmore] = React.useState("5");

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mname, setMname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [emailprof, setEmailprof] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [state1, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [profilepic, setProfle] = React.useState("");

  const [listcard, setListcard] = React.useState([]);
  const [verify, setVerify] = React.useState("");
  const [clienttoken, setClientToken] = React.useState("");
  var x;

  const status = [
    { value: "Complete", label: "Complete" },
    { value: "Looking for Driver", label: "Looking for Driver" },
    { value: "In Transit", label: "In Transit" },
    { value: "a", label: "All" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  const pubnub = new PubNub({
    subscribeKey: "sub-c-958ab632-1d8d-11eb-8a07-eaf684f78515",
    publishKey: "pub-c-701ebbe8-c393-43d5-a389-9ef5391a8fe9",
  });

  function mapbooking(e) {
    if ($(e.target).hasClass("btn--loading")) {
      return false;
    } else {
      $("#exampleModal").modal("hide");
      router.push("/tracking");
    }
  }

  function successMessage() {
    swal(
      <div style={{ width: "450px", padding: "10px" }}>
        <div className="container">
          <div
            className="row align-items-center"
            style={{ borderLeft: "3px solid #00C853" }}
          >
            <div className="col-lg-2">
              <img src="Image/success.png" style={{ width: "32px" }}></img>
            </div>
            <div className="col-lg-10" style={{ textAlign: "left" }}>
              <p className="pError">Success</p>
              <p className="pErrorSub">Your profile is successfully updated.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function refresh() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl =
      "https://staging-api.jgo.com.ph/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTabledata(result.data.data);
        tablemap = result.data.data;
        setCount(result.data.data.length);
        if (result.data.data.length === 0) {
          $(".pNo").show();
        }
        const active = result.data.data.filter(
          (obj) =>
            obj.status == "Looking for Driver" ||
            obj.status == "Driver found" ||
            obj.status == "Arrived at Pick Up"
        );
        setACtivecount(active.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function show(min, max) {
    var $table = $("#table"),
      $rows = $table.find("tbody tr");
    min = min ? min - 1 : 0;
    max = max ? max : $rows.length;
    $rows.hide().slice(min, max).fadeIn();
    return false;
  }

  function driverfound() {
    $("#exampleModal").modal("show");
    $(".imgLoading").attr("src", "Image/found.gif");
    $(".pSearching").text("Driver Found!");
    $(".pSearchsub").text(
      "Congrats we found a driver, click the button below to check the booking details."
    );
    $(".btn").removeClass("btn--loading");
  }

  useEffect(() => {
    global.config.place.deliver.table_id = Number(
      localStorage.getItem("activeid")
    );
    const listener = {
      message: (message) => {
        setMessage(message.message.status);
        let mes = message;

        if (mes.message.status == "Ongoing") {
          driverfound();
          refresh();
        } else if (mes.message.status == "Arrived to Pick up") {
          refresh();
        } else if (mes.message.status == "Arrived") {
          refresh();
        }
      },
    };
    pubnub.addListener(listener);

    pubnub.subscribe({
      channels: ["booking_channel_" + localStorage.getItem("activeid")],
      withPresence: true,
      includeState: true,
    });
    return () => {
      pubnub.removeListener(listener);
      pubnub.unsubscribeAll();
    };
  }, [message]);

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

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "#F3F3F4",
      color: "#424242",
      border: "1px solid gray",
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
      color: "#424242",
    }),
    container: (base) => ({
      ...base,
      width: "150px",
    }),
  };

  useEffect(() => {
    console.log(AuthService.getToken());
    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        "Content-Length": "X-Actual-Content-Length",
      },
    };

    const apiUrl2 =
      "https://staging-api.jgo.com.ph/api/auth/customer_card_details";

    axios.post(apiUrl2, {}, options1).then((result) => {
      setListcard(result.data.user_card_details);
      console.log(result.data.user_card_details);
    });

    if (sessionStorage.getItem("addpayment") == "1") {
      $(".ulDashboard>li").removeClass("activeUl");
      $(".conPayment").fadeIn(250);
      $(".conProf").hide();
      $(".conBook").hide();
      $(".conSettings").hide();
      $(".liPayment").addClass("activeUl");
      sessionStorage.removeItem("addpayment");
    }

    var theme = JSON.parse(localStorage.getItem("theme"));
    setIsToggled(theme);
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
        "Content-Length": "X-Actual-Content-Length",
      },
    };

    const apiUrl =
      "https://staging-api.jgo.com.ph/api/auth/ctransaction-history";
    axios
      .post(apiUrl, { customer_id: AuthService.getId() }, options)
      .then((result) => {
        setTabledata(result.data.data.reverse());
        console.log(result)
        if (result.data.data) {
          result.data.data
            .filter(
              (event) => event.id === Number(localStorage.getItem("activeid"))
            )
            .map((data) =>
              data.status == "Looking for Driver"
                ? $("#exampleModal").modal("show")
                : null
            );
        }
        if ($("#table tbody tr").length > 5) {
          $(".btnShowmore").show();
        }
        show(0, 5);
        tablemap = result.data.data;
        setCount(result.data.data.length);
        $(".Box").hide();
        if (result.data.data.length === 0) {
          $(".pNo").show();
        }

        const active = result.data.data.filter(
          (obj) =>
            obj.status == "Looking for Driver" ||
            obj.status == "Driver found" ||
            obj.status == "Arrived at Pick Up"
        );
        setACtivecount(active.length);
      })
      .catch((err) => {
        console.log(err);
      });

    const apiUrl1 = "https://staging-api.jgo.com.ph/api/auth/customer-profile";
    axios
      .post(apiUrl1, { id: AuthService.getId() }, options)
      .then((result) => {
        console.log(result.data.data);
        setTableprofile(result.data.data);
        setFname(result.data.data.fname);
        setMname(result.data.data.mname);
        setLname(result.data.data.lname);
        setEmailprof(result.data.data.email);
        setAddress(result.data.data.address);
        setCountry(result.data.data.country);
        setMobile(result.data.data.mobile_no);
        setState(result.data.data.state);
        setZip(result.data.data.zip);
        setCity(result.data.data.city);
        setProfle(
          "https://jgo-storage.s3.ap-southeast-1.amazonaws.com/" +
            result.data.data.profile_pic
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function showmoretable() {
    show(0, $("#table tbody tr").length + 5);
  }

  function logout() {
    AuthService.logout();
    router.push("/");
  }

  function profile() {
    $(".conProf").fadeIn(250);
    $(".conBook").hide();
    $(".conSettings").hide();
    $(".conPayment").hide();
  }

  function booking() {
    $(".conBook").fadeIn(250);
    $(".conProf").hide();
    $(".conSettings").hide();
    $(".conPayment").hide();
  }

  function settings() {
    $(".conSettings").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
    $(".conPayment").hide();
  }

  function payment() {
    $(".conPayment").fadeIn(250);
    $(".conProf").hide();
    $(".conBook").hide();
    $(".conSettings").hide();
  }

  function doubleclickTable() {
    $("#table").on("click", "tr", function (e) {
      window.open("/tracking/" + $(this).children().closest("td").html());
    });
  }

  function hovertable() {
    $("tr")
      .not(":first")
      .hover(
        function () {
          $("td", this).css("color", "#EDC728 ");
        },
        function () {
          if (localStorage.getItem("theme_status") === "light") {
            $("td", this).css("color", "#424242");
          } else {
            $("td", this).css("color", "");
          }
        }
      );
  }

  function changeVerify(e) {
    setVerify(e.target.value);
  }

  function getcardToken(e) {
    console.log($(e.currentTarget).find(".p9Sub").text());
    listcard
      .filter(
        (event) =>
          event.maskedCardNumber === $(e.currentTarget).find(".pMasked").text()
      )
      .map((data) => setClientToken(data.client_token));

    if ($(e.currentTarget).find(".pVerified").text() == "Verified") {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #00C853" }}
            >
              <div className="col-lg-2">
                <img src="Image/success.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Verified</p>
                <p className="pErrorSub">Your card is already verified.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $("#modalVerify").modal("toggle");
    }
  }

  function getVerify(e) {
    console.log(clienttoken);
    console.log(verify);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/verifyToken";

    let formdata = new FormData();
    formdata.set("clientToken", clienttoken);
    formdata.set("amount", Number(verify));
    axios
      .post(apiUrl, { client_token: clienttoken, amount: verify }, options)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlestatuschange(value) {
    var value = value.value.toLowerCase();
    setStatus(value.label);
    $("#table > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

      if ($("#table> tbody > :visible").length == 0) {
        $(".pNo").show();
      } else {
        $(".pNo").hide();
      }
    });
    $("tbody").each(function () {
      var list = $(this).children("tr");
      $(this).html(list.get().reverse());
    });
  }

  function handleChangeemail(e) {
    setEmail(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangeoldpass(e) {
    setOldpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangeconfirmoldpass(e) {
    setConfirmoldpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function handleChangenewpass(e) {
    setNewpass(e.target.value);
    $(e.target).css("border", "1px solid #2c2c2c");
  }

  function btnChangepass() {
    if (email == "") {
      $(".txtEmailchange").css("border", "1px solid #c62828");
    }

    if (oldpass == "") {
      $(".txtOldpass").css("border", "1px solid  #c62828");
    }

    if (confirmoldpass == "") {
      $(".txtConfirmoldpass").css("border", "1px solid  #c62828");
    }

    if (newpass == "") {
      $(".txtNewpass").css("border", "1px solid #c62828");
    } else {
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
      formdata.set("id", AuthService.getId());
      formdata.set("email", email);
      formdata.set("token", AuthService.getToken());
      formdata.set("password", oldpass);
      formdata.set("password_confirmation", confirmoldpass);
      formdata.set("new_password", newpass);

      const apiUrl = "https://staging-api.jgo.com.ph/api/auth/change-password";
      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          console.log(result.message());
        })
        .catch((err) => {
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #e53935" }}
                >
                  <div className="col-lg-2">
                    <img
                      src="Image/warning.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div className="col-lg-10" style={{ textAlign: "left" }}>
                    <p className="pError">Error</p>
                    <p className="pErrorSub">
                      The input credentials is invalid'
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
    }
  }

  const statusColor = (value) => {
    switch (value) {
      case "in transit":
        return "intransit";
      case "Arrived":
        return "arrived";
      case "Complete":
        return "complete";
      case "Arrived at Pick Up":
        return "arrivedpickup";
      case "Driver found":
        return "driverfound";
      case "Looking for Driver":
        return "looking1";
      case "Canceled":
        return "cancel";
    }
  };

  function fname_change(e) {
    setFname(e.target.value);
  }

  function mname_change(e) {
    setMname(e.target.value);
  }

  function lname_change(e) {
    setLname(e.target.value);
  }

  function email_change(e) {
    setEmailprof(e.target.value);
  }

  function mobile_change(e) {
    setMobile(e.target.value);
  }

  function address_change(e) {
    setAddress(e.target.value);
  }

  function city_change(e) {
    setCity(e.target.value);
  }

  function state_change(e) {
    setState(e.target.value);
  }

  function country_change(e) {
    setCountry(e.target.value);
  }

  function zip_change(e) {
    setZip(e.target.value);
  }

  function saveprof() {
    $(".btnSave").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const data = {
      id: AuthService.getId(),
      fname: fname,
      mname: mname,
      lname: lname,
      email: emailprof,
      mobile_no: mobile,
      address: address,
      city: city,
      state: state1,
      country: country,
      zip: zip,
    };

    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/customers/3";
    axios
      .put(apiUrl, data, options)
      .then((result) => {
        console.log(result);
        $(".btnSave").removeClass("btn--loading");
        successMessage();
      })
      .catch((err) => {
        console.log(err);
        $(".btnSave").removeClass("btn--loading");
      });
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
      }
      return error;
    }
  );

  function addCard() {
    const options = {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };

    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/enrollToken";
    axios
      .post(apiUrl, { platform: "web" }, options)
      .then((result) => {
        console.log(result.data.data.redirectUrl);
        window.open(result.data.data.redirectUrl, "_blank");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>

      <div className="container-fluid conProfile">
        <NextNprogress color="#EDC728" />
        <div className="divSidebar">
          <div className="divMenuSide">
            <div className="divIcon">
              <ul className="no-bullets">
                <Link href="/main">
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <img src="Image/home.png" style={{ width: "20px" }}></img>
                      <span>Home</span>
                    </li>
                  </a>
                </Link>
                <Link href="/main">
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
                <Link href="/faq#contact">
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
                <img src={profilepic} alt="" />
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
              <li onClick={payment} className="liPayment">
                PAYMENT
              </li>
            </ul>
            <hr className="hrDashboard"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid conBook">
        <div className="row">
          <div className="col-lg-12 form-inline">
            <p className="pTotalBookings">
              {count} Total Bookings
              <span className="pActiveBookings">{activeCount} Active</span>
            </p>
          </div>
          <div className="col-lg-7 form-inline">
            <div>
              <Select
                options={date}
                styles={isToggled ? customStyles1 : customStyles}
                placeholder="Select Date"
              />
            </div>
            <div className="div">
              <Select
                options={status}
                styles={isToggled ? customStyles1 : customStyles}
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
                onDoubleClick={doubleclickTable}
                onMouseOver={hovertable}
              >
                <thead>
                  <tr style={{ backgroundColor: "transparent" }}>
                    <th>Tracking ID</th>
                    <th>Price</th>
                    <th>Pickup Address</th>
                    <th>Drop Location</th>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.reverse().map((event, index) => (
                    <tr key={event.id}>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.tracking_id}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        {event.total}
                      </td>
                      <td
                        className={
                          localStorage.getItem("theme_status") == "light"
                            ? "tdlight"
                            : "tddark"
                        }
                      >
                        <span className={statusColor(event.status)}>
                          {event.status}
                        </span>
                        {event.pick_up_address}
                      </td>
                      {event.booking_drop_off_location.map((event) => (
                        <td
                          className={
                            localStorage.getItem("theme_status") == "light"
                              ? "tdlight"
                              : "tddark"
                          }
                          key={event.id}
                        >
                          <span className={statusColor(event.status)}>
                            {event.status}
                          </span>
                          {event.drop_off_address}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="Box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="text-center">
              <button
                className="btnShowmore"
                onClick={showmoretable}
                style={{ display: "none" }}
              >
                Show more
              </button>
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
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <img
              src={profilepic}
              className="img-fluid imgProfileDash mx-auto d-flex"
            ></img>{" "}
            <p className="spanFull">
              {fname} {mname} {lname}
              <br />
              <span className="spanAdd">{mobile}</span>
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "0px" }}>
          <div className="col-lg-6 colProf">
            <div className="divProf">
              <p className="pTxtDriver pFname">First Name</p>
              <input
                type="text"
                className="txtDriver txtFname txtprof"
                value={fname}
                onChange={fname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6 colProf">
            <div className="divProf">
              <p className="pTxtDriver">Middle Name</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={mname}
                onChange={mname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver pLname">Last Name</p>
              <input
                type="text"
                className="txtDriver txtLname txtprof"
                value={lname}
                onChange={lname_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver pEmail">Email</p>
              <input
                type="text"
                className="txtDriver txtEmail txtprof"
                value={emailprof}
                onChange={email_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver pMobile">Mobile Number</p>
              <input
                type="text"
                className="txtDriver txtMobile txtprof"
                value={mobile}
                onChange={mobile_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Address</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={address}
                onChange={address_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Province</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={state1}
                onChange={state_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">City/Municipality</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={city}
                onChange={city_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Country</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={country}
                onChange={country_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divProf">
              <p className="pTxtDriver">Zip Code</p>
              <input
                type="text"
                className="txtDriver txtprof"
                value={zip}
                onChange={zip_change}
              ></input>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <a className="btn btnSave" onClick={saveprof}>
              Save
              <span style={{ marginLeft: "60px" }}>
                <b></b>
                <b></b>
                <b></b>
              </span>
            </a>
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
              <span className="spanCheck">
                Enable light mode{" "}
                <span style={{ fontSize: "0.9rem" }}>
                  ( Restart the page to take effect )
                </span>
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <input type="checkbox" id="switch1" />
              <label for="switch1">Toggle</label>
              <span className="spanCheck">Enable toolips</span>
            </div>
            <p className="pSettingsTitle" style={{ marginTop: "20px" }}>
              Password
            </p>
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

      <div className="container-fluid conPayment">
        <div className="row">
          <div className="col-lg-12">
            <p className="pSettingsTitle">Payment Methods</p>
          </div>
          <div className="col-lg-12 form-inline">
            <div className="divCardList">
              <img
                src="Image/logo.png"
                className="img-fluid imgJgowallet"
              ></img>
              <div className="divCardDetails">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <p className="p10">Points</p>
                    <p className="p10Sub">12.24</p>
                  </div>
                </div>
              </div>
            </div>
            {listcard
              .filter((event) => event.maskedCardNumber !== null)
              .map((event) => (
                <div className="divCardList" onClick={getcardToken}>
                  <img src="Image/chip.png" className="img-fluid imgChip"></img>
                  <img
                    src="Image/mastertype.png"
                    className="img-fluid imgCardType"
                  ></img>
                  <div className="divCardDetails">
                    <div className="row">
                      <div className="col-lg-7">
                        <p className="p9">Card number</p>
                        <p className="p9Sub pMasked">
                          {event.maskedCardNumber}
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <p className="p9 text-left">Status</p>
                        <p className="p9Sub pVerified text-left ">
                          {event.cardStatus == 1 ? "Not verified" : "Verified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div className="divCardPayment" onClick={addCard}>
              <p className="pAddCard">&#43;</p>
            </div>
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
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalChangepass">
              <p
                className="pModalTitle pchangepassword"
                style={{ marginBottom: "5px" }}
              >
                Change Password
              </p>
              <p className="pModalTitleSub pchangesub">
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
                    className="txtEmailchange txtchange"
                    value={email}
                    placeholder="Enter email address"
                    onChange={handleChangeemail}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass txtchange"
                    value={oldpass}
                    placeholder="Enter old password"
                    onChange={handleChangeoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="txtOldpass txtConfirmoldpass txtchange"
                    value={confirmoldpass}
                    placeholder="Enter old confirm password"
                    onChange={handleChangeconfirmoldpass}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    value={newpass}
                    className="txtNewpass txtchange"
                    placeholder="Enter new password"
                    onChange={handleChangenewpass}
                  ></input>
                </div>
                <div className="col-lg-12 text-center">
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
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body text-center modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="mx-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "150px",
                      }}
                    >
                      <img
                        src="Image/searching.gif"
                        className="img-fluid mx-auto d-flex imgLoading"
                      ></img>
                    </div>
                    <p className="pSearching">Searching for driver</p>
                    <p className="pSearchsub">
                      Thank your for using jgo, please wait while we search for
                      your driver.{" "}
                    </p>
                    <a
                      className="btn btnCheck btn--loading"
                      onClick={mapbooking}
                    >
                      Check booking details
                      <span style={{ marginLeft: "80px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalVerify"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body modalSearch">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="pModalVerify">Verify your card</p>
                    <p className="pModalTitleSub">
                      Please enter the exact amount that we deducted in your
                      account.
                    </p>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      value={verify}
                      className="txtVerify"
                      onChange={changeVerify}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <a className="btn btnVerify" onClick={getVerify}>
                      Verify
                      <span style={{ marginLeft: "40px" }}>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
