import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Head from "next/head";
import Footer from "../component/footer";
import Componentdidmount from "../component/componentdidmount";
import Select from "react-select";
import axios from "axios";
import "../component/map/config";
import Link from "next/link";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";
import "../services/api.service";
import { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
import Mobilenav from "../component/mobilenav";
import Navbar from "../component/navbar1";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function driver() {
  const router = useRouter();
  var clear = 0;
  var submitClick = 0;
  const slideRef = useRef();
  const [fname, setfname] = React.useState("");
  const [lname, setlname] = React.useState("");
  const [mname, setmname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [mobile, setmobile] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordconfirm, setpasswordconfirm] = React.useState("");
  const [lisencenumber, setlisencenumber] = React.useState("");
  const [vehicle, setvehicle] = React.useState("");
  const [zip, setzip] = React.useState("");
  const [provinced, setprovinced] = React.useState("");
  const [city, setcity] = React.useState("");
  const [city_dropdown, setcitydropdown] = React.useState("");
  const [plateenumber, setplatenumber] = React.useState("");
  const [profile, setprofile] = React.useState("");
  const [driver, setDriver] = React.useState("");
  const [nbi, setNbi] = React.useState("");
  const [orcr, setOcr] = React.useState("");

  const [profile_name, setProfilename] = React.useState("");
  const [driver_lisence, setDriverlisence] = React.useState("");
  const [nbi_clearance, setNbiclearance] = React.useState("");
  const [ocr_clearance, setOcrclearance] = React.useState("");

  const [errvehicle, setErrvehicle] = React.useState("");
  const [errormess, setError] = React.useState([]);
  const vehicletype = [
    { value: "100 cc", label: "100 cc" },
    { value: "110 cc", label: "110 cc" },
    { value: "125 cc", label: "125 cc" },
    { value: "150 cc", label: "150 cc" },
    { value: "200 cc", label: "200 cc" },
    { value: "290 cc", label: "290 cc" },
    { value: "300 cc", label: "300 cc" },
    { value: "400 cc", label: "400 cc" },
  ];

  const inputFileRef = useRef(null);
  const inputFileRef1 = useRef(null);
  const inputFileRef2 = useRef(null);
  const inputFileRef3 = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  const onBtnClick1 = () => {
    inputFileRef1.current.click();
  };
  const onBtnClick2 = () => {
    inputFileRef2.current.click();
  };
  const onBtnClick3 = () => {
    inputFileRef3.current.click();
  };

  function handleFile(e) {
    let file = e.target.files[0];
    setProfilename(file.name);
    setprofile(file);
    $(".divProfile").css("borderColor", "#2c2c2c");
  }
  function handleFile1(e) {
    let file = e.target.files[0];
    setDriverlisence(file.name);
    setDriver(file);
    $(".divDriver1").css("borderColor", "#2c2c2c");
  }
  function handleFile2(e) {
    let file = e.target.files[0];
    setNbiclearance(file.name);
    setNbi(file);
    $(".divNbi").css("borderColor", "#2c2c2c");
  }
  function handleFile3(e) {
    let file = e.target.files[0];
    setOcrclearance(file.name);
    setOcr(file);
    $(".divOcr").css("borderColor", "#2c2c2c");
  }

  function goSupport() {
    if (AuthService.getToken()) {
      router.push("/profile");
    } else $("#modalSupport").modal("toggle");
  }

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "rgb(28, 30, 33)",
      color: "white",
      border: errvehicle == "1" ? "1px solid #2c2c2c" : "1px solid #d32f2f",
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
  };

  const regions = require("philippines/regions");
  const province = require("philippines/provinces");
  const cities = require("philippines/cities");

  const [regions_api, setRegion] = React.useState({
    value: null,
    name: null,
  });
  const [province_api, setProvince] = React.useState({
    value: null,
    name: null,
  });
  const [cities_api, setCities] = React.useState({
    value: null,
    name: null,
  });

  const [region_change, setRegionChange] = React.useState("");
  const [province_change, setProvinceChange] = React.useState("");
  const [cities_change, setCitiesChange] = React.useState("");
  const slideImages = [
    "Image/slide1.jpg",
    "Image/slide2.jpg",
    "Image/slide3.jpg",
    "Image/slide4.jpg",
    "Image/slide5.jpg"
  ];
  const properties = {
    transitionDuration: 200,
    autoplay: false,
    arrows: false,
  };



  function HandleChangeRegion(e) {
    try {
      setRegionChange(e.value);
      const data = province
        .filter((person) => person.region === e.value)
        .map((d) => ({
          id: d.key,
          value: d.key,
          label: d.name,
        }));
      setProvince(data);
    } catch (e) {}
  }

  function HandleChangeProvince(e) {
    try {
      setprovinced(e.label);
      setProvinceChange(e.value);
      const data = cities
        .filter((person) => person.province === e.id)
        .map((d) => ({
          value: d.name,
          label: d.name,
        }));
      setCities(data);
    } catch (e) {
      console.log(e);
    }
  }

  function HandleChangeCity(e) {
    try {
      setcitydropdown(e.value.label);
      setcity(e.label);
    } catch (e) {
      console.log(e);
    }
  }

  function getData() {
    const data_regions = regions.map((d) => ({
      value: d.key,
      label: d.name,
    }));
    setRegion(data_regions);
  }

  useEffect(() => {
    $("#carouselExampleIndicators").on("slid.bs.carousel", function onSlide(ev) {
      var id = ev.relatedTarget.id;
      switch (id) {
        case "1":
          slideRef.current.goTo(0);
            return false;
          break;
        case "2":
          slideRef.current.goTo(1);
          return false;
          break;
        case "3":
           slideRef.current.goTo(2);
          break;
        case "4":
          slideRef.current.goTo(3);
          break;
        case "5":
          slideRef.current.goTo(4);
          break;
        default:
        //the id is none of the above
      }
    });

    if (localStorage.getItem("showmodal") == 1) {
      $("#driverModal").modal("toggle");
      localStorage.setItem("showmodal", "0");
    } else {
      
    }
    setErrvehicle("1");
    console.clear();
    getData();
  }, []);

  function fname_change(e) {
    console.log(errormess);
    setfname(e.target.value);
    $(".pFname").css("color", "white");
    $(".txtFname").css("borderColor", "#2c2c2c");
    if (e.target.value) {
      clear = 0;
    } else {
    }
  }
  function mname_change(e) {
    setmname(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function lname_change(e) {
    $(".pLname").css("color", "white");
    $(".txtLname").css("borderColor", "#2c2c2c");
    setlname(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function email_change(e) {
    $(".pEmail").css("color", "white");
    $(".txtEmail").css("borderColor", "#2c2c2c");
    setemail(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function mobile_change(e) {
    const re = /^[0-9\b]+$/;
    $(".pMobile").css("color", "white");
    $(".txtMobile").css("borderColor", "#2c2c2c");
    if (e.target.value === "" || re.test(e.target.value)) {
      setmobile(e.target.value);
      if (e.target.value) {
        clear = 0;
      }
    }
  }
  function password_change(e) {
    $(".pPassword").css("color", "white");
    $(".txtPassword").css("borderColor", "#2c2c2c");
    setpassword(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function passwordconfirm_change(e) {
    $(".pConfirmPass").css("color", "white");
    $(".txtConfirmPass").css("borderColor", "#2c2c2c");
    setpasswordconfirm(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function lisence_change(e) {
    $(".pLisence").css("color", "white");
    $(".txtLisence").css("borderColor", "#2c2c2c");
    setlisencenumber(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function zip_change(e) {
    setzip(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function plate_change(e) {
    $(".pPlate").css("color", "white");
    $(".txtPlate").css("borderColor", "#2c2c2c");
    setplatenumber(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function vehicle_change(e) {
    $(".pVehicle").css("color", "white");
    $(".txtVehicle").css("borderColor", "#2c2c2c");
    setvehicle(e.label);
  }
  function address_change(e) {
    setaddress(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }

  function submit(e) {
    e.preventDefault();

    if (submitClick == 1) {
      return false;
    }
    $(e.currentTarget).addClass("btn--loading");
    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (driver == "") {
      $(".divDriver1").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (orcr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }

    if (city == "") {
      $(".pCity").css("color", "#d32f2f");
      clear = 1;
      setErrvehicle("0");
    } else {
      $(".pCity").css("color", "white");
      setErrvehicle("1");
    }

    if (province == "") {
      $(".pProvince").css("color", "#d32f2f");
      clear = 1;
      setErrvehicle("0");
    } else {
      setErrvehicle("1");
    }

    if (regions == "") {
      $(".pRegion").css("color", "#d32f2f");
      clear = 1;
      setErrvehicle("0");
    } else {
      setErrvehicle("1");
    }

    if (vehicle == "") {
      $(".pVehicle").css("color", "#d32f2f");
      clear = 1;
      setErrvehicle("0");
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    } else {
      setErrvehicle("1");
    }

    let validateStr = (stringToValidate) => {
      var pattern = /[0-9a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
      if (
        stringToValidate &&
        stringToValidate.length > 2 &&
        pattern.test(stringToValidate)
      ) {
        return true;
      } else {
        return false;
      }
    };

    if (validateStr(password) == false) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
      $(".txtPassword").focus();
    }

    if (password.length < 8 || password.length > 16) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      $(".pError").text("Password must be 8-16 characters.");
      $(".pError").show();
      submitClick = 0;
    } else {
      submitClick = 0;
    }

    if (password == passwordconfirm) {
    } else {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      $(".pError").text("Password did not match");
      $(".pError").show();
      submitClick = 0;
    }

    if (clear == 0) {
      submitClick = 1;
      console.log("submitting");
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };
      let config = {
        onUploadProgress: function (progressEvent) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
        },
      };

      let formdata = new FormData();

      formdata.append("fname", fname);
      formdata.append("lname", lname);
      formdata.append("mname", mname);
      formdata.append("profile_pic", profile, profile.name);
      formdata.append("email", email);
      formdata.append("mobile_no", mobile);
      formdata.append("address", address);
      formdata.append("city", provinced);
      formdata.append("state", city);
      formdata.append("country", "Philippines");
      formdata.append("zip", zip);
      formdata.append("password", password);
      formdata.append("password_confirmation", passwordconfirm);
      formdata.append("driver_license", driver, driver.name);
      formdata.append("vehicle_type", vehicle);
      formdata.append("plate_no", plateenumber);
      formdata.append("license_no", lisencenumber);
      formdata.append("nbi_clearance", nbi, nbi.name);
      formdata.append("orcr", orcr, orcr.name);

      const apiUrl = appglobal.api.base_api + appglobal.api.register_driver;
      axios
        .post(apiUrl, formdata, options, config)
        .then((result) => {
          $("#driverModal").modal("hide");
          successMessage();
          resetValue();
          $(".btn").removeClass("btn--loading");
          submitClick = 0;
        })
        .catch((err) => {
          console.log(err.response);
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #d32f2f" }}
                >
                  <div className="col-lg-2">
                    <img src="Image/close.png" style={{ width: "25px" }}></img>
                  </div>
                  <div className="col-lg-10" style={{ textAlign: "left" }}>
                    <p className="pError">Error</p>
                    {Object.keys(err.response.data.data).map((keyName, i) => (
                      <p className="pErrorSub">
                        {err.response.data.data[keyName]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );

          $("#driverModal").css("z-index", "99");
          $(".modal-backdrop").hide();

          $(".btn").removeClass("btn--loading");
          submitClick = 0;
        });
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
              <p className="pErrorSub">
                Account succesfully created. You may now login.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function showpass(e) {
    var x = document.getElementById("txtPassword");
    if (x.type === "password") {
      x.type = "text";
      $(e.currentTarget).css("color", "yellow");
    } else {
      $(e.currentTarget).css("color", "white");
      x.type = "password";
    }
  }

  function showpass1(e) {
    var x = document.getElementById("txtConfirmPass");
    if (x.type === "password") {
      x.type = "text";
      $(e.currentTarget).css("color", "yellow");
    } else {
      $(e.currentTarget).css("color", "white");
      x.type = "password";
    }
  }

  function resetValue() {
    setfname("");
    setmname("");
    setlname("");
    setemail("");
    setmobile("");
    setaddress("");
    setzip("");
    setpassword("");
    setpasswordconfirm("");
    setvehicle("");
    setplatenumber("");
    setlisencenumber("");
    setProfilename("");
    setprofile("");
    setDriverlisence("");
    setDriver("");
    setNbiclearance("");
    setNbi("");
    setOcrclearance("");
    setOcr("");
  }

  function deletetoken() {
    localStorage.removeItem("token");
  }

  function closeModal() {
    $("#driverModal").modal("toggle");
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="JGO Delivery Maasahan! Abangan!" />
        <title>JGO Delivery Maasahan! Abangan!</title>
        <meta property="og:site_name" content="Jgo Delivery"></meta>
        <meta property="og:title" content="JGO Delivery Maasahan! Abangan!" />
        <meta
          property="og:description"
          content="JGO Delivery Maasahan! Abangan!"
        />
        <meta property="og:image" content="Image/imgindex.png" />
        <meta property="og:url" content="asdas" />

        <meta name="twitter:title" content="Jgo Delivery" />
        <meta
          name="twitter:description"
          content=" JGO Delivery Maasahan! Abangan"
        />
        <meta name="twitter:image" content="Image/imgindex.png" />
        <meta name="twitter:card" content="JGO Delivery Maasahan! Abangan!" />
      </Head>
      <Header />
      <Componentdidmount></Componentdidmount>
      <Navbar></Navbar>
      <NextNprogress color="#EDC728" />

      <div className="divNavbar">
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>

      <Mobilenav></Mobilenav>

      <div
        className="container-fluid mainConDriver"
        style={{ position: "relative" }}
      >
        <div className="conDriver"></div>
        <div className="container con conHide">
          <div className="row rowDriver" style={{ marginLeft: "50px" }}>
            <div
              className="col-lg-4 col-sm-12 col-12 align-self-top "
              style={{ marginTop: "200px", position: "relative" }}
            >
              <p
                className="pComing"
                data-toggle="tooltip"
                data-placement="top"
                data-container="body"
                title="Click the map to set the exact location"
                onClick={deletetoken}
              >
                DOWNLOAD NOW
              </p>
              <div className="row">
                <div className="col-lg-12" style={{ padding: "2px" }}>
                  <img
                    src="Image/appstore.png"
                    className="img-fluid imgButton"
                    style={{ width: "205px", marginLeft: "15px" }}
                  ></img>
                </div>
                <Link href="https://play.google.com/store/apps/details?id=ph.com.jgo.delivery">
                  <div className="col-lg-12" style={{ padding: "2px" }}>
                    <img
                      src="Image/playstore.png"
                      className="img-fluid imgButton"
                      style={{ width: "235px" }}
                    ></img>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-12 col-12 "
              style={{ marginTop: "150px", position: "relative" }}
            >
              <div className="divPhone" style={{ position: "relative" }}>
                <img
                  src="Image/phone1.png"
                  className="img-fluid imgPhone"
                ></img>
                <img src="Image/phone1.gif" className="img-fluid imgGif"></img>
              </div>
            </div>

            <div
              className="col-lg-5 colDelivery "
              style={{ marginTop: "150px", position: "relative" }}
            >
              <img
                src="Image/boy.png"
                className="img-fluid imgDel mx-auto d-flex"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conDriver2 conHide">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-sm-12 col-12">
              <div className="divEasy" style={{ marginRight: "0px" }}>
                <img
                  src="Image/jgoeasy.png"
                  className="img-fluid imgEasy"
                ></img>
              </div>
              <div className="divBoxCarousel carousel">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active active1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                      className="active2"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={3}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={4}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active" id="1">
                      <p className="pCarouselTitle">Step 1</p>
                      <p className="pCarouselContent">
                        Create a JGO account and login to avail the delivery
                        services.
                      </p>
                    </div>
                    <div className="carousel-item" id="2">
                      <p className="pCarouselTitle">Step 2</p>
                      <p className="pCarouselContent">
                        Chooe the pick up location and complete the necessary
                        details.
                      </p>
                    </div>
                    <div className="carousel-item" id="3">
                      <p className="pCarouselTitle">Step 3</p>
                      <p className="pCarouselContent">
                        Next is to fill out the drop off points and pick the
                        category of the item being delivered.
                      </p>
                    </div>
                    <div className="carousel-item" id="4">
                      <p className="pCarouselTitle">Step 4</p>
                      <p className="pCarouselContent">
                        You can pick which additional services that will be
                        needed for the delivery and indicate the mode of
                        payment.
                      </p>
                    </div>
                    <div className="carousel-item" id="5">
                      <p className="pCarouselTitle">Step 5</p>
                      <p className="pCarouselContent">
                        After clicking the book button, kindly wait for a while
                        so that a rider can accept your delivery job. Once
                        confirmed you can track your delivery in real time.You
                        can pick which additional services that will be needed
                        for the delivery and indicate the mode of payment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 colHand">
              <div style={{ position: "relative" }}>
                <img
                  src="Image/newphone.png"
                  className="img-fluid imgnewPhone mx-auto d-flex"
                ></img>
                <div className="divCarouselslide mx-auto">
                  <div className="slide-container">
                    <Slide ref={slideRef} {...properties}>
                      <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${slideImages[0]})` }}
                        ></div>
                      </div>
                      <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${slideImages[1]})` }}
                        ></div>
                      </div>
                      <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${slideImages[2]})` }}
                        ></div>
                      </div>
                       <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${slideImages[3]})` }}
                        ></div>
                      </div>
                      <div className="each-slide">
                        <div
                          style={{ backgroundImage: `url(${slideImages[4]})` }}
                        ></div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conStep conHide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="pHow">How can JGO help you?</p>
            </div>
            <div className="col-lg-4">
              <Link href="/rider">
                <a style={{ textDecoration: "none" }}>
                  <div className="divStep">
                    <div className="divInside">
                      <img
                        src="Image/box1.jpg"
                        className="img-fluid imgStep"
                      ></img>
                      <p className="pStepTitle">RIDER</p>
                      <p className="pStepsub">
                        See what it takes to be an On – The JGO Rider and join
                        the JGO community. Get a chance to earn and work on your
                        own time. Kaibigan JGO na!
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="/main">
                <a style={{ textDecoration: "none" }}>
                  <div className="divStep">
                    <div className="divInside">
                      <img
                        src="Image/box2.jpg"
                        className="img-fluid imgStep"
                      ></img>
                      <p className="pStepTitle">DELIVER</p>
                      <p className="pStepsub">
                        Need to deliver something? Try our Delivery Service Now!
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="/faq">
                <div className="divStep">
                  <div className="divInside">
                    <img
                      src="Image/box3.jpg"
                      className="img-fluid imgStep"
                    ></img>
                    <p className="pStepTitle">FAQs</p>
                    <p className="pStepsub">
                      Questions and Inquiries? You may find some answers here.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conAbout conHide">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <p className="pSpot text-center">Spotlight Corner</p>
              <p className="pSpotSub text-center">
                JGO not only delivers but we want to show our support for the
                local artists out there. Helping each other out is what we want
                in our community. Enjoy some artwork from local artists that
                we’ve partnered with.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="Image/Amity.png" className="img-fluid imgArtwork"></img>
              <p className="pArtwork"></p>
            </div>
            <div className="col-lg-6">
              <div className="divAbout">
                <p className="pAboutus">AMITY</p>
                <p className="pBy">BY: Manuel Homer T. Almelor Jr</p>
                <p className="pAboutusSub1">
                  I'm sure we've all travelled to a foreign destination in our
                  lives. The culture, food, people, architecture, and wonder
                  fill our excitement in these unfamiliar lands. These are some
                  of the few things you can't help but long for. Now that things
                  are different, we can only but form a picture of what it'd be
                  like if we were to experience them once more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conHide">
        <Footer></Footer>
      </div>
      <div
        className="modal fade"
        id="driverModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ zIndex: "999999" }}
      >
        <div
          className="modal-dialog modal-dialog-driver modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body modalDriver">
              <img
                src="Image/close.png"
                className="img-fluid"
                style={{
                  width: "18px",
                  marginBottom: "10px",
                  float: "right",
                  cursor: "pointer",
                }}
                onClick={closeModal}
              ></img>
              <p className="pModalTitle">JGO - Driver registration form</p>
              <p className="pModalTitleSub">
                Fill-up all the requird fields. After you submit we will send a
                link to your email for driver online training.
              </p>
              <hr
                style={{
                  backgroundColor: "#414141",
                  boder: "1px solid #414141",
                }}
              ></hr>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-4">
                  <p className="pTxtDriver pFname">First Name</p>
                  <input
                    type="text"
                    className="txtDriver txtFname"
                    value={fname}
                    onChange={fname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Middle Name</p>
                  <input
                    type="text"
                    className="txtDriver"
                    value={mname}
                    onChange={mname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pLname">Last Name</p>
                  <input
                    type="text"
                    value={lname}
                    className="txtDriver txtLname"
                    onChange={lname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pEmail">Email</p>
                  <input
                    type="text"
                    value={email}
                    className="txtDriver txtEmail"
                    onChange={email_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pMobile" style={{ color: "white" }}>
                    Mobile Number
                  </p>
                  <input
                    type="text"
                    value={mobile}
                    className="txtDriver txtMobile"
                    onChange={mobile_change}
                  ></input>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Address</p>
                  <input
                    type="text"
                    value={address}
                    className="txtDriver"
                    onChange={address_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pRegion">Region</p>
                  <Select
                    options={regions_api}
                    onChange={HandleChangeRegion}
                    styles={customStyles1}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pProvince">Province</p>
                  <Select
                    options={province_api}
                    onChange={HandleChangeProvince}
                    styles={customStyles1}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pCity">City/Municipality</p>
                  <Select
                    options={cities_api}
                    styles={customStyles1}
                    onChange={HandleChangeCity}
                    value={city_dropdown}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Country</p>
                  <input
                    type="text"
                    className="txtDriver"
                    value="Philippines"
                    disabled
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Zip Code</p>
                  <input
                    value={zip}
                    type="text"
                    className="txtDriver"
                    onChange={zip_change}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <p className="pTxtDriver pPassword">Password</p>
                  <div className="divPassword">
                    <input
                      value={password}
                      type="password"
                      id="txtPassword"
                      className="txtDriver txtPassword"
                      onChange={password_change}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Password should have number, letters and special character."
                    ></input>
                    <i className="far fa-eye imgEye" onClick={showpass}></i>
                  </div>
                  <p className="pError">Password must be 6-16 characters.</p>
                </div>
                <div className="col-lg-6">
                  <p className="pTxtDriver pConfirmPass">Confirm Password</p>
                  <div className="divPassword">
                    <input
                      type="password"
                      id="txtConfirmPass"
                      value={passwordconfirm}
                      className="txtDriver txtConfirmPass"
                      onChange={passwordconfirm_change}
                    ></input>
                    <i className="far fa-eye imgEye" onClick={showpass1}></i>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <p className="pTxtDriver pVehicle">Vehicle Type</p>
                  <Select
                    options={vehicletype}
                    styles={customStyles1}
                    onChange={vehicle_change}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pPlate">Plate Number</p>
                  <input
                    type="text"
                    value={plateenumber}
                    className="txtDriver txtPlate"
                    onChange={plate_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pLisence" style={{ color: "white" }}>
                    License Number
                  </p>
                  <input
                    type="text"
                    value={lisencenumber}
                    className="txtDriver txtLisence"
                    onChange={lisence_change}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <p className="pTxtDriver">Profile Picture</p>
                  <input
                    onChange={(e) => handleFile(e)}
                    ref={inputFileRef}
                    id="file-upload"
                    type="file"
                    accept=".jpg, .png, .jpeg|image"
                    style={{ display: "none" }}
                  />
                  <div
                    className="divAttachment divProfile text-center"
                    onClick={onBtnClick}
                  >
                    <p className="pTxtDriver">
                      <span style={{ color: "#EDC728" }}>Drag or Browse</span> a
                      file here
                    </p>
                    <p style={{ color: "white" }}>{profile_name}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="pTxtDriver">Driver License</p>
                  <input
                    onChange={(e) => handleFile1(e)}
                    ref={inputFileRef1}
                    id="file-upload"
                    type="file"
                    accept=".jpg, .png, .jpeg|image"
                    style={{ display: "none" }}
                  />
                  <div
                    className="divAttachment divDriver1 text-center"
                    onClick={onBtnClick1}
                  >
                    <p className="pTxtDriver">
                      <span style={{ color: "#EDC728" }}>Drag or Browse</span> a
                      file here
                    </p>
                    <p style={{ color: "white" }}>{driver_lisence}</p>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-6">
                  <p className="pTxtDriver">NBI Clearance</p>
                  <input
                    onChange={(e) => handleFile2(e)}
                    ref={inputFileRef2}
                    id="file-upload"
                    type="file"
                    accept=".jpg, .png, .jpeg|image"
                    style={{ display: "none" }}
                  />
                  <div
                    className="divAttachment divNbi text-center"
                    onClick={onBtnClick2}
                  >
                    <p className="pTxtDriver">
                      <span style={{ color: "#EDC728" }}>Drag or Browse</span> a
                      file here
                    </p>
                    <p style={{ color: "white" }}>{nbi_clearance}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="pTxtDriver">ORCR</p>
                  <input
                    onChange={(e) => handleFile3(e)}
                    ref={inputFileRef3}
                    id="file-upload"
                    type="file"
                    accept=".jpg, .png, .jpeg|image"
                    style={{ display: "none" }}
                  />
                  <div
                    className="divAttachment divOcr text-center"
                    onClick={onBtnClick3}
                  >
                    <p className="pTxtDriver">
                      <span style={{ color: "#EDC728" }}>Drag or Browse</span> a
                      file here
                    </p>
                    <p style={{ color: "white" }}>{ocr_clearance}</p>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-12">
                  <a className="btn btnSubmitDriver" onClick={submit}>
                    SIGNUP
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

      <div
        className="modal fade"
        id="modalSupport"
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
                    <p className="pModalVerify">Reminder</p>
                    <p className="pModalTitleSub">
                      You need to login to access the support page or you can go
                      directly to contact us.
                    </p>
                  </div>
                  <div className="col-lg-6 mx-auto text-center d-flex">
                    <Link href="/faq#contact">
                      <button className="btn1">Contact Us</button>
                    </Link>
                  </div>
                  <div className="col-lg-6 mx-auto text-center d-flex">
                    <Link href="/main">
                      <button className="btn1">Login</button>
                    </Link>
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

export default driver;
