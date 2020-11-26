import React, { Component, createRef } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { GoogleLogin } from "react-google-login";
import Select from "react-select";
import Router, { useRouter } from "next/router";
const regions = require("philippines/regions");
const province = require("philippines/provinces");
const cities = require("philippines/cities");
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
const customStyles1 = {
  control: (base, state) => ({
    ...base,
    background: "rgb(28, 30, 33)",
    color: "white",
    border: "1px solid #707070",
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

if (process.browser) {

}


function btntry() {
  document.getElementById("aUsername").innerHTML = "ASdas";
}

export class login extends Component {
  inputFileRef = createRef(null);
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
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
      activeEmail: "",
      profile_name: "",
      forgotemail: "",
      requestid: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
    };

    this.login = this.login.bind(this);
  }
 

  responseGoogle = (response) => {
    console.log(response.profileObj);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
    };
    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/google/details";
    axios
      .post(
        apiUrl,
        {
          id: response.profileObj.id,
          email: response.profileObj.email,
          fname: response.profileObj.givenName,
          lname: response.profileObj.familyName,
        },
        options
      )
      .then((result) => {
        if (result.data.message) {
          this.setState({ email: response.profileObj.email });
          this.setState({ fname: response.profileObj.givenName });
          this.setState({ lname: response.profileObj.familyName });
          $("#modalRegister").modal("toggle");
        } else {
          localStorage.setItem("google", JSON.stringify(result.data));
          window.location.reload();
        }
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  responseFacebook = (response) => {
    console.log(response);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
    };

    const apiUrl = "https://staging-api.jgo.com.ph/api/auth/facebook/details";

    axios
      .post(
        apiUrl,
        {
          id: response.id,
          email: response.email,
          fname: response.first_name,
          lname: response.last_name,
        },
        options
      )
      .then((result) => {
        if (result.data.message) {
          this.setState({ email: response.email });
          this.setState({ fname: response.first_name });
          this.setState({ lname: response.last_name });
          $("#modalRegister").modal("toggle");
        } else {
          localStorage.setItem("fb", JSON.stringify(result.data));
          window.location.reload();
          console.log(result.data);
        }
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(response);
      });
  };

  goOtp(e) {
    var clear = 0;
    e.preventDefault();
    $(e.currentTarget).addClass("btn--loading");
    if (this.state.fname == "") {
      $(".pFname").css("color", "#d32f2f");
      $(".txtFname").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }
    if (this.state.lname == "") {
      $(".pLname").css("color", "#d32f2f");
      $(".txtLname").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }
    if (this.state.mobile == "") {
      $(".pMobile").css("color", "#d32f2f");
      $(".txtMobile").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }
    if (this.state.email == "") {
      $(".pEmail").css("color", "#d32f2f");
      $(".txtEmail").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }
    if (this.state.password == "") {
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }
    if (this.state.password != this.state.passwordconfirm) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }

    if (this.state.password < 6 || this.state.password > 16) {
      $(".pConfirmPass").css("color", "#d32f2f");
      $(".txtConfirmPass").css("borderColor", "#d32f2f");
      $(".pPassword").css("color", "#d32f2f");
      $(".txtPassword").css("borderColor", "#d32f2f");
      $(".pError").show();
      $(".btn").removeClass("btn--loading");
      clear = 1;
    }

    var str = this.state.mobile;
    var firstchar = str.charAt(0);
    if (firstchar == "0" || firstchar == 0) {
      var str = str.replace(/^./, "63");
      console.log(str);
    } else {
      console.log(str);
    }

    if (clear == 0) {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };
      const apiUrl = "https://staging-api.jgo.com.ph/api/sms/send/otp/" + str;

      axios
        .post(apiUrl, {}, options)
        .then((result) => {
          clear == 0;
          $(".btn").removeClass("btn--loading");
          console.log(result.data.request_id);
          this.setState({ requestid: result.data.request_id });
          sessionStorage.setItem("otp","1");
          $("#modalRegister").modal("toggle");
          $("#modalOtp").modal("toggle");
        })
        .catch((err) => {
          console.log(err);
          $(".btn").removeClass("btn--loading");
        });
    }
  }

  checkotp() {
    if(sessionStorage.getItem("otp") == 1) {
      $("#modalOtp").modal("toggle");
    }else {
      $("#modalRegister").modal("toggle");
    }
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
              <p className="pErrorSub">
                The information you entered is not recognized.
              </p>
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

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.login();
    }
  };

  login(event) {
    if (this.state.Password == "") {
      $(".txtPassword").css("border-color", "#d32f2f");
    }
    if (this.state.Email == "") {
      $(".txtEmail").css("border-color", "#d32f2f");
    } else {
      $(".btn").addClass("btn--loading");
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };

      const apiUrl = "https://staging-api.jgo.com.ph/api/auth/login";
      axios
        .post(
          apiUrl,
          { email: this.state.Email, password: this.state.Password },
          options
        )
        .then((result) => {
          if (result.request.status == "200") {
            localStorage.setItem("token", JSON.stringify(result.data.data));
            console.log(result.data);
            document.getElementById("username").innerHTML =
              result.data.data.user.name;

            $(".colMain").hide();
            $(".colLogin").hide();
            $(".colDeliver").show();
            $(".btn").removeClass("btn--loading");
          }
        })
        .catch((err) => {
          $(".btn").removeClass("btn--loading");
          this.messageError();
        });
    }
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
    } else {
    }
  }
  fname(event) {
    this.setState({ fname: event.target.value });
    if (event.target.value == "") {
    } else {
    }
  }
  mname(event) {
    this.setState({ mname: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
    if (event.target.value == "") {
    } else {
    }
  }
  mobile(event) {
    this.setState({ mobile: event.target.value });
    if (event.target.value == "") {
    } else {
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
    } else {
    }
  }

  passwordConfirm(event) {
    this.setState({ passwordconfirm: event.target.value });
  }

  forgotemail(event) {
    this.setState({ forgotemail: event.target.value });
  }

  otp1(event) {
    this.setState({ otp1: event.target.value });
  }
  otp2(event) {
    this.setState({ otp2: event.target.value });
  }
  otp3(event) {
    this.setState({ otp3: event.target.value });
  }
  otp4(event) {
    this.setState({ otp4: event.target.value });
  }

  handleFile(e) {
    let file = e.target.files[0];
    console.log(file);
    this.setState({ profile_name: file.name });
    this.setState({ profile: file });
  }

  onBtnClick = () => this.inputFileRef.current.click();

  register(e) {
    $(".btnotp").addClass("btn--loading");
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
    };
    const apiUrl =
      "https://staging-api.jgo.com.ph/api/sms/verify/otp/" +
      this.state.requestid +
      "/" +
      this.state.otp1 +
      this.state.otp2 +
      this.state.otp3 +
      this.state.otp4;

    axios
      .post(apiUrl, {}, options)
      .then((result) => {
        console.log(result);
        sessionStorage.set("otp","0");
        const options1 = {
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

        const apiUrl = "https://staging-api.jgo.com.ph/api/auth/register";
        axios
          .post(apiUrl, formdata, options1)
          .then((result) => {
            $("#modalOtp").modal("hide");
            if (result.status == "201") {
              $(".btnotp").removeClass("btn--loading");
              successMessage();
              
            }
          })
          .catch((err) => {
            $(".btn").removeClass("btn--loading");
            try {
              $("#exampleModal").css("z-index", "1");
              $(".modal-backdrop").hide();
              this.setState({ errorEmail: err.response.data.errors.email[0] });
              if (err.response.data.errors.email[0]) {
              }
            } catch (e) {}
            
          });
      })
      .catch((err) => {
         $(".btn").removeClass("btn--loading");
        console.log(apiUrl);
        swal(
          <div style={{ width: "450px", padding: "10px" }}>
            <div className="container">
              <div
                className="row align-items-center"
                style={{ borderLeft: "3px solid #e53935" }}
              >
                <div className="col-lg-2">
                  <img src="Image/warning.png" style={{ width: "32px" }}></img>
                </div>
                <div className="col-lg-10" style={{ textAlign: "left" }}>
                  <p className="pError">Error</p>
                  <p className="pErrorSub">Invalid OTP.</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  send() {
    if (this.state.forgotemail.length == 0) {
      $(".txtForgot").css("borderColor", "red");
    } else {
      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
      };
      const apiUrl = "https://staging-api.jgo.com.ph/api/send-password-link";
      let formdata = new FormData();
      formdata.set("email", this.state.forgotemail);
      axios
        .post(apiUrl, formdata, options)
        .then((result) => {
          console.log(result);
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
                    <p className="pErrorSub">Cannot proces. Try again later</p>
                  </div>
                </div>
              </div>
            </div>
          );
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
              value={this.state.Email}
              className="txt txtEmail"
              placeholder="email"
              onChange={this.Email.bind(this)}
              onKeyPress={this.onKeyPress}
            ></input>

            <input
              type="password"
              value={this.state.Password}
              className="txt txtPassword"
              placeholder="password"
              onChange={this.Password.bind(this)}
              onKeyPress={this.onKeyPress}
            ></input>
          </div>
          <div
            className="row align-items-center"
            style={{ marginTop: "-10px" }}
          >
            <div className="col-lg-6 text-center">
              <p
                className="pForgot"
                data-toggle="modal"
                data-target="#modalForgot"
              >
                forgot password?
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <a className="btn btnSubmit" onClick={this.login}>
                Login
                <span>
                  <b></b>
                  <b></b>
                  <b></b>
                </span>
              </a>
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
          <FacebookLogin
            appId="1163566050712002"
            callback={this.responseFacebook}
            fields="id,name,first_name,last_name,email"
            render={(renderProps) => (
              <button className="btnFacebook" onClick={renderProps.onClick}>
                <img
                  src="Image/facebook.png"
                  style={{ width: "15px", marginRight: "5px" }}
                />
                Sign-in with facebook
              </button>
            )}
          />

          <GoogleLogin
            clientId="621401186664-3u1rqm88q6jqbikq9n5ell020dt6aadc.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btnGoogle"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src="Image/google.png"
                  style={{ width: "15px", marginRight: "5px" }}
                />
                Sign-in with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <p className="pDont"     data-toggle="modal"
                data-target="#modalOtp">Don't have an account?</p>
          <p
            className="pSignup"
       
            onClick = {this.checkotp.bind(this)}
          >
            
            sign-up
          </p>
        </div>
        <div
          className="modal fade"
          id="modalRegister"
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
                <p className="pModalTitle">Jgo - Registration form</p>
                <p className="pModalTitleSub">
                  Let's get you all set up so you can verify your personal
                  account and start booking.
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
                      value={this.state.fname}
                      onChange={this.fname.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver">Middle Name</p>
                    <input
                      type="text"
                      className="txtDriver"
                      value={this.state.mname}
                      onChange={this.mname.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver pLname">Last Name</p>
                    <input
                      type="text"
                      value={this.state.lname}
                      className="txtDriver txtLname"
                      onChange={this.lname.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver pEmail">Email</p>
                    <input
                      type="text"
                      value={this.state.email}
                      className="txtDriver txtEmail"
                      onChange={this.email.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver pMobile">Mobile Number</p>

                    <input
                      type="text"
                      value={this.state.mobile}
                      className="txtDriver txtMobile"
                      onChange={this.mobile.bind(this)}
                    ></input>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-4">
                    <p className="pTxtDriver">Address</p>
                    <input
                      type="text"
                      value={this.state.address}
                      className="txtDriver"
                      onChange={this.address.bind(this)}
                    ></input>
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver">Region</p>
                    <Select
                      options={this.state.regions_api}
                      onChange={this.HandleChangeRegion.bind(this)}
                      styles={customStyles1}
                    />
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver">Province</p>
                    <Select
                      options={this.state.province_api}
                      onChange={this.HandleChangeProvince.bind(this)}
                      styles={customStyles1}
                    />
                  </div>
                  <div className="col-lg-4">
                    <p className="pTxtDriver">City/Municipality</p>
                    <Select
                      options={this.state.cities_api}
                      styles={customStyles1}
                      ref="city"
                      value={this.state.city_dropdown}
                      onChange={this.city.bind(this)}
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
                      value={this.state.zip}
                      type="text"
                      className="txtDriver"
                      onChange={this.zip.bind(this)}
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <p className="pTxtDriver pPassword">Password</p>
                    <input
                      value={this.state.password}
                      type="password"
                      className="txtDriver txtPassword"
                      onChange={this.password.bind(this)}
                    ></input>
                    <p className="pError">Password must be 6-16 characters.</p>
                  </div>
                  <div className="col-lg-6">
                    <p className="pTxtDriver pConfirmPass">Confirm Password</p>
                    <input
                      type="password"
                      value={this.state.passwordconfirm}
                      className="txtDriver txtConfirmPass"
                      onChange={this.passwordConfirm.bind(this)}
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <p className="pTxtDriver">Profile Picture</p>
                    <input
                      onChange={(e) => this.handleFile(e)}
                      ref={this.inputFileRef}
                      id="file-upload"
                      type="file"
                      accept=".jpg, .png, .jpeg|image"
                      style={{ display: "none" }}
                    />
                    <div
                      className="divAttachment divProfile text-center"
                      onClick={this.onBtnClick}
                    >
                      <p className="pTxtDriver">
                        <span style={{ color: "#EDC728" }}>Drag or Browse</span>{" "}
                        a file here
                      </p>
                      <p style={{ color: "white" }}>
                        {this.state.profile_name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-lg-12">
                    <a
                      className="btn btnSubmitDriver"
                      onClick={this.goOtp.bind(this)}
                    >
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
          id="modalForgot"
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
                      <p className="pModalVerify text-left">Forgot password</p>
                      <p className="pModalTitleSub text-left">
                        Please enter your current email and check the password
                        reset link in your email.
                      </p>
                      <p className="pTxtDriver pReport">Email address</p>
                      <input
                        type="text"
                        className="txtDriver txtForgot"
                        value={this.state.forgotemail}
                        onChange={this.forgotemail.bind(this)}
                      ></input>
                    </div>
                    <div className="col-lg-12">
                      <a
                        className="btn btnSendissue"
                        onClick={this.send.bind(this)}
                        style={{ marginTop: "5px" }}
                      >
                        Confirm
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

        <div
          className="modal fade"
          id="modalOtp"
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
                    <div className = 'col-lg-12 text-left'>
                      <p className = "pBack">
                      &#8592; Back
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <p className="pModalVerify text-center">
                        OTP Verification
                      </p>
                      <p className="pModalTitleSub text-center">
                        We have sent you one time password to your mobile. The otp vill expired in 5 minutes.
                      </p>
                      <form
                        method="get"
                        className="digit-group"
                        data-group-name="digits"
                        data-autosubmit="false"
                        autoComplete="off"
                      >
                        <input
                          type="text"
                          id="digit-1"
                          name="digit-1"
                          data-next="digit-2"
                          value={this.state.otp1}
                          onChange={this.otp1.bind(this)}
                        />
                        <input
                          type="text"
                          id="digit-2"
                          name="digit-2"
                          data-next="digit-3"
                          data-previous="digit-1"
                          value={this.state.otp2}
                          onChange={this.otp2.bind(this)}
                        />
                        <input
                          type="text"
                          id="digit-3"
                          name="digit-3"
                          data-next="digit-4"
                          data-previous="digit-2"
                          value={this.state.otp3}
                          onChange={this.otp3.bind(this)}
                        />
                        <input
                          type="text"
                          id="digit-4"
                          name="digit-4"
                          data-next="digit-5"
                          data-previous="digit-3"
                          value={this.state.otp4}
                          onChange={this.otp4.bind(this)}
                        />
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <a
                        className="btn btnotp"
                        onClick={this.register.bind(this)}
                        style={{ marginTop: "5px" }}
                      >
                        Confirm
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
}

export default login;
