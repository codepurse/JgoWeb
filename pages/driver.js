import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Select from "react-select";
import axios from "axios";
import Link from "next/link";
import swal from "@sweetalert/with-react";

function driver() {
  var clear = 0;
  var submitClick = 0;
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
    $(".divDriver").css("borderColor", "#2c2c2c");
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

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "rgb(28, 30, 33)",
      color: "white",
      border: "1px solid #2c2c2c",
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
    getData();
  }, []);

  function fname_change(e) {
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
    setvehicle(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
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
    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      submitClick = 0;
    }
    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
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
      $(".divDriver").css("borderColor", "#d32f2f");
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

    if (vehicle == "") {
      $(".pVehicle").css("color", "#d32f2f");
      $(".txtVehicle").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
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
      submitClick = 0;
    }

    if (password.length < 6 || password.length > 16) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
      $(".btn").removeClass("btn--loading");
      $(".pError").show();
      submitClick = 0;
    } else {
      $(".pError").hide();
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

      let formdata = new FormData();

      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("mname", mname);
      formdata.append("profile_pic", profile, profile.name);
      formdata.set("email", email);
      formdata.set("mobile_no", mobile);
      formdata.set("address", address);
      formdata.set("city", provinced);
      formdata.set("state", city);
      formdata.set("country", "Philippines");
      formdata.set("zip", zip);
      formdata.set("password", password);
      formdata.set("password_confirmation", passwordconfirm);
      formdata.set("driver_license", driver, driver.name);
      formdata.set("vehicle_type", vehicle);
      formdata.set("plate_no", plateenumber);
      formdata.set("license_no", lisencenumber);
      formdata.set("nbi_clearance", nbi, nbi.name);
      formdata.set("orcr", orcr, orcr.name);

      const apiUrl = "http://localhost:8000/api/auth/register-driver";
      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          $("#driverModal").modal("hide");
          successMessage();
          resetValue();
          $(".btn").removeClass("btn--loading");
          submitClick = 0;
        })
        .catch((err) => {
          console.log(err);
          $("#driverModal").css("z-index", "99");
          $(".modal-backdrop").hide();
          errorMessage();

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

  function errorMessage() {
    swal(
      <div style={{ width: "450px", padding: "10px" }}>
        <div className="container">
          <div
            className="row align-items-center"
            style={{ borderLeft: "3px solid #00C853" }}
          >
            <div className="col-lg-2">
              <img src="Image/error.png" style={{ width: "32px" }}></img>
            </div>
            <div className="col-lg-10" style={{ textAlign: "left" }}>
              <p className="pError">Error</p>
              <p className="pErrorSub">
                Email is not available or already registered.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Componentdidmount></Componentdidmount>
      <div
        className="container-fluid mainConDriver"
        style={{ position: "relative" }}
      >
        <nav
          className="navbar navbar-expand-md fixed-top"
          style={{ padding: "20px 20px" }}
        >
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="#">
            <a href="#">
              <img
                src="Image/newlogo.png"
                className="img-fluid imglogo"
                style={{ width: "115px" }}
              />
            </a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <li>
                  <a
                    className="nav-link nav-driver"
                    data-toggle="modal"
                    data-target="#driverModal"
                    style={{ color: "white" }}
                  >
                    Be a JGO Driver
                  </a>
                </li>
                <Link href="/">
                  <li>
                    <a
                      className="nav-link nav-driver"
                      style={{ color: "white" }}
                    >
                      Book a Delivery
                    </a>
                  </li>
                </Link>
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="conDriver"></div>
        <div className="container con">
          <div className="row" style={{ marginLeft: "50px" }}>
            <div
              className="col-lg-4 col-sm-12 col-12 align-self-top "
              style={{ marginTop: "150px", position: "relative" }}
            >
              <p className="pComing">COMING SOON</p>
              <div className="row">
                <div className="col-lg-12" style={{ padding: "2px" }}>
                  <div className="divButton form-inline">
                    <img src="Image/apple.png" className="imgDownload"></img>
                    <p className="pDownload">
                      Download on the <br />
                      <span>App Store</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-12" style={{ padding: "2px" }}>
                  <div className="divButton form-inline">
                    <img
                      src="Image/playstore.png"
                      className="imgDownload"
                    ></img>
                    <p className="pDownload">
                      Get it on <br />
                      <span>Play Store</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-12 col-12"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <div style={{ position: "relative" }}>
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

      <div className="container-fluid conDriver2">
        <img src="Image/bar.png" className="imgBar"></img>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div style={{ marginRight: "0px" }}>
                <img
                  src="Image/logoblack.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                ></img>
                <img
                  src="Image/easyapp.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                ></img>
              </div>
              <div className="divBoxCarousel">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p className="pCarouselTitle">Step 1</p>
                      <p className="pCarouselContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                      </p>
                    </div>
                    <div className="carousel-item">
                      <p className="pCarouselTitle">Step 2</p>
                      <p className="pCarouselContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                      </p>
                    </div>
                    <div className="carousel-item">
                      <p className="pCarouselTitle">Step 3</p>
                      <p className="pCarouselContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="Image/phonehand.png"
                className="img-fluid mx-auto d-flex"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conStep">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="divStep">
                <div className="divInside">
                  <img
                    src="Image/step1.jpg"
                    className="img-fluid imgStep"
                  ></img>
                  <p className="pStepTitle">RIDER</p>
                  <p className="pStepsub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="divStep">
                <div className="divInside">
                  <img
                    src="Image/step2.jpg"
                    className="img-fluid imgStep"
                  ></img>
                  <p className="pStepTitle">DELIVER</p>
                  <p className="pStepsub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="divStep">
                <div className="divInside">
                  <img
                    src="Image/step3.jpg"
                    className="img-fluid imgStep"
                  ></img>
                  <p className="pStepTitle">FAQS</p>
                  <p className="pStepsub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conAbout">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="Image/artwork.jpg"
                className="img-fluid imgArtwork"
              ></img>
              <p className="pArtwork"></p>
            </div>
            <div className="col-lg-6">
              <div className="divAbout">
                <p className="pAboutus">ABOUT US</p>
                <p className="pAboutusSub">
                  Following his father’sfootsteps JGO Deliver services Inc. was
                  founded and organized in early 2020by Jose Miguel O. Garcia
                  with the help of Jose Vicente E. Garcia.Seeing the high demand
                  of courier services in the Philippines they sought to build
                  asubsidiary company under JG manpower. With the businesses
                  expertise in manpower services we chose to focus on bringing
                  your everyday essentials into your hands is at the core of
                  what we do for the community. As a delivery service provider,
                  you can rely on JGo to assist you in handling goods from one
                  hand to another. Safely and quickly. In a busy world like
                  ours, these are what matter. As your delivery assistants, we
                  arealways on the go, always ready foryou. Maaasahan ninyo kami
                  to get the jobdone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid conFooter">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="Image/logo.png" className="img-fluid imgLogo"></img>
          </div>
          <div className="col-lg-6">
            <ul className="ulFooter">
              <li className="liFooter">
                <a href="#home">COMPANY</a>
              </li>
              <li className="liFooter">
                <a href="#news">CONTACT US</a>
              </li>
              <li className="liFooter">
                <a href="#contact">POLICIES</a>
              </li>
              <li className="liFooter">
                <a href="#contact">TERM & CONDITION</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="text-center pFooter">
              © 2020 JGO Philippines. - All Rights
            </p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="driverModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-driver modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body modalDriver">
              <p className="pModalTitle">Jgo - Driver registration form</p>
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
                  <p className="pTxtDriver pMobile">Mobile Number</p>
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
                  <p className="pTxtDriver">Region</p>
                  <Select
                    options={regions_api}
                    onChange={HandleChangeRegion}
                    styles={customStyles1}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Province</p>
                  <Select
                    options={province_api}
                    onChange={HandleChangeProvince}
                    styles={customStyles1}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">City/Municipality</p>
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
                  <input
                    value={password}
                    type="password"
                    className="txtDriver txtPassword"
                    onChange={password_change}
                  ></input>
                  <p className="pError">Password must be 6-16 characters.</p>
                </div>
                <div className="col-lg-6">
                  <p className="pTxtDriver pConfirmPass">Confirm Password</p>
                  <input
                    type="password"
                    value={passwordconfirm}
                    className="txtDriver txtConfirmPass"
                    onChange={passwordconfirm_change}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <p className="pTxtDriver pVehicle">Vehicle Type</p>
                  <input
                    type="text"
                    value={vehicle}
                    className="txtDriver txtVehicle"
                    onChange={vehicle_change}
                  ></input>
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
                  <p className="pTxtDriver pLisence">Lisence Number</p>
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
                    className="divAttachment divDriver text-center"
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
    </>
  );
}

export default driver;
