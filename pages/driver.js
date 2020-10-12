import React, { Component, useState, useEffect, useRef } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Select from "react-select";
import axios from "axios";

function driver() {
  var clear = 0;
  const [fname, setfname] = React.useState("");
  const [lname, setlname] = React.useState("");
  const [mname, setmname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [mobile, setmobile] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordconfirm, setpasswordconfirm] = React.useState("");
  const [lisencenumber, setlisencenumber] = React.useState("");
  const [vehicle, setvehicle] = React.useState("");
  const [zip, setzip] = React.useState("");
  const [provinced, setprovinced] = React.useState("");
  const [city, setcity] = React.useState("");
  const [plateenumber, setplatenumber] = React.useState("");
  const [profile, setprofile] = React.useState("");
  const [driver, setDriver] = React.useState("");
  const [nbi, setNbi] = React.useState("");
  const [ocr, setOcr] = React.useState("");

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
  }
  function handleFile1(e) {
    let file = e.target.files[0];
    setDriverlisence(file.name);
    setDriver(file);
  }
  function handleFile2(e) {
    let file = e.target.files[0];
    setNbiclearance(file.name);
    setNbi(file);
  }
  function handleFile3(e) {
    let file = e.target.files[0];
    setOcrclearance(file.name);
    setOcr(file);
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #707070",
      boxShadow: "none",
      borderRadius: "10px",
      width: "115%",
      padding: "4.5px",
      marginTop: "5px",
    }),
  };

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
    setRegionChange(e.value);
    const data = province
      .filter((person) => person.region === e.value)
      .map((d) => ({
        id: d.key,
        value: d.key,
        label: d.name,
      }));
    setProvince(data);
  }

  function HandleChangeProvince(e) {
    setprovinced(e.label);
    setProvinceChange(e.value);
    const data = cities
      .filter((person) => person.province === e.id)
      .map((d) => ({
        value: d.name,
        label: d.name,
      }));
    setCities(data);
  }

  function HandleChangeCity(e) {
    setcity(e.label);
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

  function trylang() {
    province.forEach((val, index) => val.data.splice(3));
    console.log("gumana");
  }

  function fname_change(e) {
    setfname(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function mname_change(e) {
    setmname(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function lname_change(e) {
    setlname(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function email_change(e) {
    setemail(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function mobile_change(e) {
    setmobile(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function password_change(e) {
    setpassword(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function passwordconfirm_change(e) {
    setpasswordconfirm(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function lisence_change(e) {
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
    setplatenumber(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }
  function vehicle_change(e) {
    setvehicle(e.target.value);
    if (e.target.value) {
      clear = 0;
    }
  }

  function submit(e) {
    e.preventDefault();
    if (fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (passwordconfirm == "") {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (lisencenumber == "") {
      $(".pLisence").css("color", "#d32f2f");
      $(".txtLisence").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (plateenumber == "") {
      $(".pPlate").css("color", "#d32f2f");
      $(".txtPlate").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (profile == "") {
      $(".divProfile").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (driver == "") {
      $(".divDriver").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (nbi == "") {
      $(".divNbi").css("borderColor", "#d32f2f");
      clear = 1;
    }
    if (ocr == "") {
      $(".divOcr").css("borderColor", "#d32f2f");
      clear = 1;
    }

    if (clear == 0) {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };

      let formdata = new FormData();
      try {
        formdata.set("fname", fname);
        formdata.set("lname", lname);
        formdata.set("mname", mname);
        formdata.append("profile_pic", profile, profile.name);
        formdata.set("email", email);
        formdata.set("mobile_no", mobile);
        formdata.set("address", address);
        formdata.set("city", city);
        formdata.set("state", provinced);
        formdata.set("country", "Philippines");
        formdata.set("zip", zip);
        formdata.set("password", password);
        formdata.set("password_confirmation", password);
      } catch (e) {
        console.log(e);
      }
    }
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
                src="Image/logo.png"
                className="img-fluid imglogo"
                style={{ width: "150px" }}
              />
            </a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
                <li>
                  <a className="nav-link nav-driver" style={{ color: "white" }}>
                    Be a JGO Driver
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link nav-driver"
                    style={{ color: "white" }}
                    data-toggle="modal"
                    data-target="#driverModal"
                  >
                    Book a Delivery
                  </a>
                </li>
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
              className="col-lg-3"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="Image/phone1.png"
                  className="img-fluid imgPhone"
                ></img>
                <img src="Image/phone.gif" className="img-fluid imgGif"></img>
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <p className="pComing">COMING SOON</p>
              <div className="row">
                <div className="col-lg-6" style={{ padding: "2px" }}>
                  <div className="divButton form-inline">
                    <img src="Image/apple.png" className="imgDownload"></img>
                    <p className="pDownload">
                      Download on the <br />
                      <span>App Store</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" style={{ padding: "2px" }}>
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
              <div className="divService">
                <p className="pFully">FULLY FILIPINO OWNED COMPANY</p>
                <p className="pService">MAAASANG SERBISYO!</p>
              </div>
            </div>
            <div
              className="col-lg-5"
              style={{ marginTop: "150px", position: "relative" }}
            >
              <img
                src="Image/deliveryguy.png"
                className="img-fluid imgDel mx-auto d-flex"
              ></img>
            </div>
          </div>
        </div>
        <div className="row rowGray">
          <div className="col-lg-12 col"></div>
        </div>
      </div>
      <div className="container-fluid conRoad">
        <div className="row">
          <div className="col-lg-12">
            <img src="Image/road1.png" className="img-fluid imgRoad"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="pRate">
              LOWEST RATE AT PHP 6/KM WITH A FLAT FEE OF PHP60
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 p-0">
            <img src="Image/img1.png" className="img-fluid"></img>
          </div>
          <div className="col-lg-4 p-0">
            <img src="Image/img2.png" className="img-fluid img2"></img>
          </div>
          <div className="col-lg-4 p-0">
            <img src="Image/img3.png" className="img-fluid img3"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="pSafety">
              SAFETY AND ACCESSIBILITY IS OUR PRIMARY CONCERN
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container" style={{ marginTop: "200px" }}>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-center">
              <p className="pBe">
                BE A <span>JGO DRIVER</span>
              </p>
              <button className="btnSignup">Sign up now!</button>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "-20px" }}>
          <div className="col-lg-5"></div>
          <div className="col-lg-7 text-center">
            <img src="Image/road1.png" className="img-fluid"></img>
            <p className="pCome">COME RIDE WITH US</p>
          </div>
        </div>
        <div
          className="row rowFooter"
          style={{ backgroundColor: "#373735" }}
        ></div>
        <div className="row rowGrayFooter">
          <div className="col-lg-12 text-center align-self-end">
            <p className="pFooter">@ 2020 JGO Philippines. - All Rights</p>
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
        style={{ zIndex: "99999999999999999999999999999999" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                JGO DRIVER - Registration Form
              </h5>
            </div>
            <div className="modal-body">
              <p className="pAccount">ACCOUNT INFORMATION</p>
              <div className="row">
                <div className="col-lg-4">
                  <p className="p1">First Name</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-4">
                  <p className="p1">Middle Name</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-4">
                  <p className="p1">Last Name</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <p className="p1">Address 1</p>
                  <input type="text" className="txt txtModal"></input>
                  <p className="txtInfo">
                    <i>House/Unit Number, Building Name, Street Name</i>
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="p1">Address 2</p>
                  <input type="text" className="txt txtModal"></input>
                  <p className="txtInfo">
                    <i>Subdivision/Village</i>
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="p1">Barangay</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-8px" }}>
                <div className="col-lg-4">
                  <p className="p1">Region</p>
                  <Select
                    options={regions_api}
                    onChange={HandleChangeRegion}
                    styles={customStyles}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="p1">Province</p>
                  <Select
                    options={province_api}
                    onChange={HandleChangeProvince}
                    styles={customStyles}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="p1">City/Municipality</p>
                  <Select
                    options={cities_api}
                    styles={customStyles}
                    onChange={HandleChangeCity}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "8px" }}>
                <div className="col-lg-4">
                  <p className="p1">Postal</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-4">
                  <p className="p1">Country</p>
                  <input
                    type="text"
                    className="txt txtModal"
                    value="Philippines"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="p1">Lisence Number</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Mobile Number</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="p1">Email Address</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Confirm Email Address</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="p1">Password</p>
                  <input type="password" className="txt txtModal"></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Confirm Password</p>
                  <input type="password" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-12">
                  <p className="pAccount">VEHICLE INFORMATION</p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-10px" }}>
                <div className="col-lg-6">
                  <p className="p1">Vehicle Type</p>
                  <input
                    type="text"
                    className="txt txtModal"
                    value="Motor"
                    disabled
                  ></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Vehicle Brand</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="p1">Vehicle Model</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Plate Number</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="p1">Engine Number</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Chasis Number</p>
                  <input type="text" className="txt txtModal"></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-12">
                  <p className="pAccount" style={{ marginBottom: "-5px" }}>
                    REQUIREMENTS NEEDED
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Driver Lisence (Photo)</p>
                  <div
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                      padding: "5px 8px",
                      marginTop: "5px",
                      position: "relative",
                    }}
                  >
                    <label for="file-upload" className="custom-file-upload">
                      <i class="fa fa-cloud-upload"></i> Choose File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".jpg, .png, .jpeg|image"
                    />
                  </div>
                  <p className="pImage">
                    Note: Only .jpg, .jpeg and .png files are allowed
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="p1">Vehicle's OR/CR (Photo)</p>
                  <div
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                      padding: "5px 8px",
                      marginTop: "5px",
                      position: "relative",
                    }}
                  >
                    <label for="file-upload" className="custom-file-upload">
                      <i class="fa fa-cloud-upload"></i> Choose File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".jpg, .png, .jpeg|image"
                    />
                  </div>
                  <p className="pImage">
                    Note: Only .jpg, .jpeg and .png files are allowed
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center mx-auto d-flex">
              <button
                type="button"
                className="btnSubmitModal"
                onClick={trylang}
              >
                Submit
              </button>
            </div>
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
        style={{ zIndex: "99999999999999999999999999999999" }}
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
                link to your email for driver online test.
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
                    onChange={fname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Middle Name</p>
                  <input
                    type="text"
                    className="txtDriver"
                    onChange={mname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pLname">Last Name</p>
                  <input
                    type="text"
                    className="txtDriver txtLname"
                    onChange={lname_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pEmail">Email</p>
                  <input
                    type="text"
                    className="txtDriver txtEmail"
                    onChange={email_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pMobile">Mobile Number</p>
                  <input
                    type="text"
                    className="txtDriver txtMobile"
                    onChange={mobile_change}
                  ></input>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-4">
                  <p className="pTxtDriver">Address</p>
                  <input type="text" className="txtDriver"></input>
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
                  <Select options={cities_api} styles={customStyles1} />
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
                    type="password"
                    className="txtDriver txtPassword"
                    onChange={password_change}
                  ></input>
                </div>
                <div className="col-lg-6">
                  <p className="pTxtDriver pConfirmPass">Confirm Password</p>
                  <input
                    type="password"
                    className="txtDriver txtConfirmPass"
                    onChange={passwordconfirm_change}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <p className="pTxtDriver">Vehicle Type</p>
                  <input
                    type="text"
                    className="txtDriver"
                    onChange={vehicle_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pPlate">Plate Number</p>
                  <input
                    type="text"
                    className="txtDriver txtPlate"
                    onChange={plate_change}
                  ></input>
                </div>
                <div className="col-lg-4">
                  <p className="pTxtDriver pLisence">Lisence Number</p>
                  <input
                    type="text"
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
                  <button className="btnSubmitDriver" onClick={submit}>
                    Submit
                  </button>
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
