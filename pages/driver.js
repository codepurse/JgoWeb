import React, { Component, useState, useEffect } from "react";
import Header from "../component/header";
import Componentdidmount from "../component/componentdidmount";
import Select from "react-select";

function driver() {
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
    setProvinceChange(e.value);
    const data = cities
      .filter((person) => person.province === e.id)
      .map((d) => ({
        value: d.name,
        label: d.name,
      }));
    setCities(data);
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
                    data-target="#exampleModal"
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
              <div style={{ position: "relative"}} >
                <img
                  src="Image/phone1.png"
                  className="img-fluid imgPhone"
                >
                  
                </img>
                <img src = "Image/phone.gif" className = "img-fluid imgGif"></img>
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
                  <Select options={cities_api} styles={customStyles} />
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
              <button type="button" className="btnSubmitModal" onClick={trylang}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default driver;
