import React, { Component } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Select from "react-select";

const regions = require("philippines/regions");
const province = require("philippines/provinces");
const cities = require("philippines/cities");
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

export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Passoword: "",
      regions_api: {
        value: "",
        name: "",
      },
      province_api: {
        value: "",
        name: "",
      },
      cities_api: {
        value: "",
        name: "",
      },
      region_change: "",
      province_change: "",
      fname: "",
      lname: "",
      mname: "",
      profile: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      province: "",
      country: "",
      zip: "",
      password: "",
      passwordconfirm: "",
      city_dropdown: "",
      errorEmail: "",
      errorFname: "",
      errorLname: "",
    };

    this.login = this.login.bind(this);
  }

  messageError() {
    swal(
      <div style={{ width: "450px", padding: "10px" }}>
        <div className="container">
          <div
            className="row align-items-center"
            style={{ borderLeft: "3px solid #c62828" }}
          >
            <div className="col-lg-2">
              <img src="Image/warning.png" style={{ width: "32px" }}></img>
            </div>
            <div className="col-lg-10" style={{ textAlign: "left" }}>
              <p className="pError">Error</p>
              <p className="pErrorSub">{this.state.errorFname}</p>
              <p className="pErrorSub">{this.state.errorLname}</p>
              <p className="pErrorSub">{this.state.errorEmail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const data_regions = regions.map((d) => ({
      value: d.key,
      label: d.name,
    }));
    this.setState({ regions_api: data_regions });
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    fetch("http://localhost:8000/api/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.status == "error") {
          alert(result.message);
        } else if (result.status == "success") {
          alert(result.status);
        } else if (result.status == "fail") {
          alert(result.status);
        }
      });
  }

  HandleChangeRegion(e) {
    this.setState({ region_change: e.value });

    const data = province
      .filter((person) => person.region === e.value)
      .map((d) => ({
        id: d.key,
        value: d.key,
        label: d.name,
      }));
    this.setState({ province_api: data });
  }

  HandleChangeProvince(e) {
    this.setState({ province_change: e.value });
    this.setState({ province: e.label });
    const data = cities
      .filter((person) => person.province === e.id)
      .map((d) => ({
        value: d.name,
        label: d.name,
      }));
    this.setState({ cities_api: data });
  }

  lname(event) {
    this.setState({ lname: event.target.value });
    if (event.target.value == "") {
      $(".pLname").show();
    } else {
      $(".pLname").hide();
    }
  }
  fname(event) {
    this.setState({ fname: event.target.value });
    if (event.target.value == "") {
      $(".pFname").show();
    } else {
      $(".pFname").hide();
    }
  }
  mname(event) {
    this.setState({ mname: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
    if (event.target.value == "") {
      $(".pEmail").show();
    } else {
      $(".pEmail").hide();
    }
  }
  mobile(event) {
    this.setState({ mobile: event.target.value });
    if (event.target.value == "") {
      $(".pMobile").show();
    } else {
      $(".pMobile").hide();
    }
  }
  address(event) {
    this.setState({ address: event.target.value });
  }
  city(event) {
    this.setState({ city_dropdown: event.value.label });
    this.setState({ city: event.value });
    console.log(event.value);
  }
  country(event) {
    this.setState({ country: event.target.value });
  }
  zip(event) {
    this.setState({ zip: event.target.value });
  }

  password(event) {
    this.setState({ password: event.target.value });
    if (event.target.value == "") {
      $(".pPassword").show();
    } else {
      $(".pPassword").hide();
    }
  }

  passwordConfirm(event) {
    this.setState({ passwordconfirm: event.target.value });
  }

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ profile: file });
  }

  register(e) {
    e.preventDefault();
    if (this.state.fname == "") {
      $(".pFname").show();
    }
    if (this.state.lname == "") {
      $(".pLname").show();
    }
    if (this.state.mobile == "") {
      $(".pMobile").show();
    }
    if (this.state.email == "") {
      $(".pEmail").show();
    }
    if (this.state.password == "") {
      $(".pPassword").show();
    } else {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };
      if (this.state.profile) {
      } else {
        this.setState({ profile: "" });
      }
      let file = this.state.profile;
      let formdata = new FormData();
      try {
        formdata.set("fname", this.state.fname);
        formdata.set("lname", this.state.lname);
        formdata.set("mname", this.state.mname);
        formdata.append(
          "profile_pic",
          this.state.profile,
          this.state.profile.name
        );
        formdata.set("email", this.state.email);
        formdata.set("mobile_no", this.state.mobile);
        formdata.set("address", this.state.address);
        formdata.set("city", this.state.city);
        formdata.set("state", this.state.province);
        formdata.set("country", "Philippines");
        formdata.set("zip", this.state.zip);
        formdata.set("password", this.state.password);
        formdata.set("password_confirmation", this.state.password);
      } catch (e) {
        formdata.set("fname", this.state.fname);
        formdata.set("lname", this.state.lname);
        formdata.set("mname", this.state.mname);
        formdata.append("profile_pic", "");
        formdata.set("email", this.state.email);
        formdata.set("mobile_no", this.state.mobile);
        formdata.set("address", this.state.address);
        formdata.set("city", this.state.city);
        formdata.set("state", this.state.province);
        formdata.set("country", "Philippines");
        formdata.set("zip", this.state.zip);
        formdata.set("password", this.state.password);
        formdata.set("password_confirmation", this.state.passwordconfirm);
      }
      let config = {
        onUploadProgress: (progressEvent) => {
          console.log(
            Math.floor((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      const apiUrl = "http://localhost:8000/api/auth/register";
      axios
        .post(apiUrl, formdata, options, config)
        .then((result) => {
          $("#exampleModal").modal("hide");
          if (result.status == "201") {
            successMessage();
          }
        })
        .catch((err) => {
          try {
            $("#exampleModal").css("z-index", "1");
            $(".modal-backdrop").hide();
            this.setState({ errorEmail: err.response.data.errors.email[0] });
            if (err.response.data.errors.email[0]) {
            }
          } catch (e) {}
        });
    }
  }

  render() {
    return (
      <>
        <div className="col-lg-6 colLogin">
          <p className="pLogin">Log-in</p>
          <div className="boxLogin">
            <input
              type="text"
              className="txt"
              placeholder="email"
              onChange={this.Email.bind(this)}
            ></input>
            <input
              type="password"
              className="txt"
              placeholder="password"
              onChange={this.Password.bind(this)}
            ></input>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <p className="pForgot">forgot password?</p>
            </div>
            <div className="col-lg-6 text-center">
              <button className="btnSubmit" onClick={this.login}>
                SUBMIT
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <hr></hr>
            </div>
            <div className="col-lg-2 text-center">
              <p className="pOr">or</p>
            </div>
            <div className="col-lg-5">
              <hr></hr>
            </div>
          </div>
          <button className="btnFacebook">
            <img
              src="Image/facebook.png"
              style={{ width: "15px", marginRight: "5px" }}
            />
            Sign-in with facebook
          </button>
          <button className="btnGoogle">
            <img
              src="Image/google.png"
              style={{ width: "15px", marginRight: "5px" }}
            />
            Sign-in with Google
          </button>
          <p className="pDont">Don't have an account?</p>
          <p
            className="pSignup"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            sign-up
          </p>
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
                  JGO - Registration Form
                </h5>
              </div>
              <div className="modal-body">
                <p className="pAccount">ACCOUNT INFORMATION</p>
                <div className="row">
                  <div className="col-lg-4">
                    <p className="p1">First Name</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      value={this.state.fname}
                      onChange={this.fname.bind(this)}
                    ></input>
                    <p className="pErrorMessage pFname">
                      First name is required
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Middle Name</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      onChange={this.mname.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Last Name</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      onChange={this.lname.bind(this)}
                    ></input>
                    <p className="pErrorMessage pLname">
                      Last name is required
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "5px" }}>
                  <div className="col-lg-4">
                    <p className="p1">Address 1</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      placeholder="House/Unit Number, Building Name, Street Name"
                      onChange={this.address.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Region</p>
                    <Select
                      instanceId="1"
                      options={this.state.regions_api}
                      onChange={this.HandleChangeRegion.bind(this)}
                      styles={customStyles}
                    />
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Province</p>
                    <Select
                      instanceId="2"
                      options={this.state.province_api}
                      onChange={this.HandleChangeProvince.bind(this)}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: "5px" }}>
                  <div className="col-lg-4">
                    <p className="p1">City/Municipality</p>
                    <Select
                      instanceId="3"
                      options={this.state.cities_api}
                      styles={customStyles}
                      ref="city"
                      value={this.state.city_dropdown}
                      onChange={this.city.bind(this)}
                    />
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Postal</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      onChange={this.zip.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="p1">Country</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      value="Philippines"
                      disabled
                      onChange={this.country.bind(this)}
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "5px" }}>
                  <div className="col-lg-6">
                    <p className="p1">Email Address</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      value={this.state.email}
                      onChange={this.email.bind(this)}
                    ></input>
                    <p className="pErrorMessage pEmail">Email is required</p>
                  </div>
                  <div className="col-lg-6">
                    <p className="p1">Mobile Number</p>
                    <input
                      type="text"
                      className="txt txtModal"
                      value={this.state.mobile}
                      onChange={this.mobile.bind(this)}
                    ></input>
                    <p className="pErrorMessage pMobile">
                      Mobile number is required
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="p1">Password</p>
                    <input
                      type="password"
                      className="txt txtModal"
                      password={this.state.password}
                      onChange={this.password.bind(this)}
                    ></input>
                    <p className="pErrorMessage pPassword">
                      Password is required
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="p1">Confirm Password</p>
                    <input
                      type="password"
                      className="txt txtModal"
                      onChange={this.passwordConfirm.bind(this)}
                    ></input>
                  </div>
                </div>
                <div className="row">
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
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload"
                      >
                        <i className="fa fa-cloud-upload"></i> Choose File
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".jpg, .png, .jpeg|image"
                        onChange={(e) => this.handleFile(e)}
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
                  onClick={this.register.bind(this)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default login;
