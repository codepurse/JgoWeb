import React, { Component, useState } from "react";
import axios from "axios";
import Select from "react-select";




export class register extends Component {
  state = {
    fname: "",
    lname: "",
    mname: "",
    profile: "",
    email: "",
    mobile: "",
    address: "asd",
    city: "asd",
    states: "asd",
    country: "asd",
    zip: "12312",
    password: "",
  };

  constructor(props) {
    super(props);
    this.fname = this.fname.bind(this);
    this.lname = this.lname.bind(this);
    this.mname = this.mname.bind(this);
    this.email = this.email.bind(this);
    this.mobile = this.mobile.bind(this);
    this.address = this.address.bind(this);
    this.city = this.city.bind(this);
    this.states = this.states.bind(this);
    this.country = this.country.bind(this);
    this.zip = this.zip.bind(this);
    this.password = this.password.bind(this);
  }

  email(event) {
    this.setState({ email: event.target.value });
  }
  lname(event) {
    this.setState({ lname: event.target.value });
    console.log(this.state.lname);
  }
  fname(event) {
    this.setState({ fname: event.target.value });
  }
  mname(event) {
    this.setState({ mname: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
  }
  mobile(event) {
    this.setState({ mobile: event.target.value });
  }
  address(event) {
    this.setState({ address: event.target.value });
  }
  city(event) {
    this.setState({ city: event.target.value });
  }
  states(event) {
    this.setState({ states: event.target.value });
  }
  country(event) {
    this.setState({ country: event.target.value });
  }
  zip(event) {
    this.setState({ zip: event.target.value });
  }

  password(event) {
    this.setState({ password: event.target.value });
  }

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ profile: file });
  }

  login() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
    };
    if(this.state.profile) {

    }
    else {
      this.setState({ profile: "" });
    }
    let file = this.state.profile;
    let formdata = new FormData();
   try {
    formdata.set("fname",this.state.fname);
    formdata.set("lname",this.state.lname);
    formdata.set("mname",this.state.mname);
    formdata.append("profile_pic",this.state.profile, this.state.profile.name);
    formdata.set("email",this.state.email);
    formdata.set("mobile_no",this.state.mobile);
    formdata.set("address",this.state.address);
    formdata.set("city",this.state.city);
    formdata.set("state",this.state.states);
    formdata.set("country",this.state.country);
    formdata.set("zip",this.state.zip);
    formdata.set("password",this.state.password);
    formdata.set("password_confirmation",this.state.password);
   }catch(e){
    formdata.set("fname",this.state.fname);
    formdata.set("lname",this.state.lname);
    formdata.set("mname",this.state.mname);
    formdata.append("profile_pic","");
    formdata.set("email",this.state.email);
    formdata.set("mobile_no",this.state.mobile);
    formdata.set("address",this.state.address);
    formdata.set("city",this.state.city);
    formdata.set("state",this.state.states);
    formdata.set("country",this.state.country);
    formdata.set("zip",this.state.zip);
    formdata.set("password",this.state.password);
    formdata.set("password_confirmation",this.state.password);
   }
    const apiUrl = "http://localhost:8000/api/auth/register";
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      mname: this.state.mname,
      profile_pic: formdata,
      email: this.state.email,
      mobile_no: this.state.mobile,
      address: this.state.address,
      city: this.state.city,
      state: this.state.states,
      country: this.state.country,
      zip: this.state.zip,
      password: this.state.password,
      password_confirmation: this.state.password,
    };
    axios
      .post(apiUrl, formdata, options)
      .then((result) => {})
      .catch((err) => {
        try {
          console.log(err.response.data.errors.email[0]);
          console.log(err.response.data.errors.fname[0]);
          console.log(err.response.data.errors.lname[0]);
          console.log(err.response.data.errors.mobile_no[0]); 
        } catch (e) {}
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <input
                type="text"
                onChange={this.fname}
                placeholder="first name"
              ></input>
              <input
                type="text"
                onChange={this.lname}
                placeholder="last name"
              ></input>
              <input
                type="text"
                onChange={this.mname}
                placeholder="middle name"
              ></input>
              <input
                type="text"
                onChange={this.email}
                placeholder="email"
              ></input>
              
              <input
                type="text"
                onChange={this.mobile}
                placeholder="mobile"
              ></input>
              <input
                type="text"
                onChange={this.address}
                placeholder="address"
              ></input>
              <input
                type="text"
                onChange={this.city}
                placeholder="city"
              ></input>
              <input
                type="text"
                onChange={this.states}
                placeholder="state"
              ></input>
              <input
                type="text"
                onChange={this.country}
                placeholder="country"
              ></input>
              <input type="text" onChange={this.zip} placeholder="zip"></input>
              <input
                type="text"
                onChange={this.password}
                placeholder="password"
              ></input>
              <input
                type="text"
                onChange={this.password_confirmation}
                placeholder="password confirmation"
              ></input>
              <div>
                <label>select file</label>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => this.handleFile(e)}
                ></input>
              </div>
           
              <input
                type="button"
                value="register"
                onClick={this.login.bind(this)}
              ></input>
              <p>{this.state.lname}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default register;
