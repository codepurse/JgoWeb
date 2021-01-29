import React, { Component, useState, useEffect } from "react";
import "../component/map/config";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Custommap from "../component/custommap";
import swal from "@sweetalert/with-react";
import { useRouter } from "next/router";
import axios from "axios";
import AuthService from "../services/auth.service";

export default function App() {
  const router = useRouter();
  var click;
  const [tokenuser, setTokenuser] = React.useState("");
  const [price, setPrice] = React.useState("");

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: "red",
      border: "1px solid lightgray",

      borderRadius: "5px",
      width: "100%",
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
    option: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      setTokenuser(foundUser.token);
    }
  }, []);

  function getAdd() {
    var str = global.config.place.deliver.pickoff;
     var n = str.includes("Metro Manila")||str.includes("Laguna, Philippines")||str.includes("Cainta, Rizal")|| str.includes("Cavite, Philippines");
    if (n === true) {
      if (click === 0) {
        coordinates.lat = global.config.place.deliver.pickofflat;
        coordinates.lng = global.config.place.deliver.dropofflang;
        setAddress({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      } else {
        setAddressDrop({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
        coordinatesDrop.lat = global.config.place.deliver.pickofflat;
        coordinatesDrop.lng = global.config.place.deliver.dropofflang;
      }
      swal.close();
    } else {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Warning</p>
                <p className="pErrorSub">
                  The entered address is not yet in our service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function clickSubmit(e) {
    coordinate.length = 0;
    if (address === "" || addressDrop === "") {
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
                  Please enter a valid address in both textbox{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      $(".btn").addClass("btn--loading");
      const origin = {
        address: address.label,
        lat: coordinates.lat,
        lng: coordinates.lng,
        id: "1",
      };
      coordinate.push(origin);
      const destination = {
        address: addressDrop.label,
        lat: coordinatesDrop.lat,
        lng: coordinatesDrop.lng,
        id: "2",
      };
      coordinate.push(destination);
      console.log(coordinate);

      localStorage.setItem("address", address.label);
      localStorage.setItem("addressDrop", addressDrop.label);
      localStorage.setItem("pickofflat", coordinates.lat);
      localStorage.setItem("pickofflng", coordinates.lng);
      localStorage.setItem("dropofflat", coordinatesDrop.lat);
      localStorage.setItem("dropofflng", coordinatesDrop.lng);

      global.config.place.deliver.pickoff = address.label;
      global.config.place.deliver.dropoff = addressDrop.label;

      global.config.place.deliver.pickofflat = coordinatesDrop.lat;
      global.config.place.deliver.pickofflang = coordinatesDrop.lng;

      global.config.place.deliver.dropofflat = coordinatesDrop.lat;
      global.config.place.deliver.dropofflang = coordinatesDrop.lng;
      global.config.place.deliver.refresh = 1;

      const options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
        },
      };

      let ratedata = new FormData();
      ratedata.set("pick_up_latitude", coordinates.lat);
      ratedata.set("pick_up_longitude", coordinates.lng);
      ratedata.set(
        "drop_off_locations[0][drop_off_latitude]",
        coordinatesDrop.lat
      );
      ratedata.set(
        "drop_off_locations[0][drop_off_longitude]",
        coordinatesDrop.lng
      );
      ratedata.set("drop_off_locations[0][booking_order]", "1");
      ratedata.set("additional_services[0]", "0");

      const apiUrl_rate = appglobal.api.base_api+appglobal.api.calculate_rate;

      axios
        .post(apiUrl_rate, ratedata, options)
        .then((result) => {
          localStorage.setItem("price", result.data.price);
          $(".btn").removeClass("btn--loading");
          router.push("/map");
        })
        .catch((err) => {});
    }
  }

  const [address, setAddress] = React.useState("");
  const [addressDrop, setAddressDrop] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinatesDrop, setCoordinatesDrop] = React.useState({
    lat: null,
    lng: null,
  });

  const handleChange = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila")||str.includes("Laguna, Philippines")||str.includes("Cainta, Rizal")|| str.includes("Cavite, Philippines");
    if (n === true) {
      setAddress(value);
      setCoordinates(latLng);
    } else {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Warning</p>
                <p className="pErrorSub">
                  The entered address is not yet in our service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleChangeDrop = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila")||str.includes("Laguna, Philippines")||str.includes("Cainta, Rizal")|| str.includes("Cavite, Philippines");

    if (n === true) {
      setAddressDrop(value);
      setCoordinatesDrop(latLng);
    } else {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div className="col-lg-10" style={{ textAlign: "left" }}>
                <p className="pError">Warning</p>
                <p className="pErrorSub">
                  The entered address is not yet in our service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  function opensweetalert() {
    swal(
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          width: "800px",
        }}
      >
        <p className="pDrag">Drag the marker to set location</p>
        <button className="btnDone" onClick={getAdd}>
          Done
        </button>
        <Custommap></Custommap>
      </div>
    );
  }

  return (
    <div className="col-lg-6 colDeliver">
      <p className="pTitle">Book your delivery now!</p>
      <div className="box">
        <div className="form-inline" onClick={() => (click = 0)}>
          <GooglePlacesAutocomplete
            selectProps={{
              placeholder: "Pick-up Location",
              value: address,
              instanceId: "1",
              onChange: handleChange,
              styles: customStyles1,
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ph"],
              },
            }}
          />
          <img
            src="Image/maps.png"
            className="img-fluid imgMap"
            onClick={opensweetalert}
            data-toggle="tooltip"  data-toggle="tooltip" data-placement="top" title=""
          ></img>
        </div>
        <div
          className="form-inline"
          onClick={() => (click = 1)}
          style={{ marginTop: "10px" }}
        >
          <GooglePlacesAutocomplete
            selectProps={{
              placeholder: "Drop-off Location",
              instanceId: "2",
              value: addressDrop,
              onChange: handleChangeDrop,
              styles: customStyles1,
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ph"],
              },
            }}
          />
          <img
            src="Image/maps.png"
            className="img-fluid imgMap"
            onClick={opensweetalert}
          ></img>
        </div>
      </div>

      <a className="btn btnSubmit"  style={{ marginTop: "15px",color: "white" }} onClick={clickSubmit}>
        Deliver
        <span>
          <b></b>
          <b></b>
          <b></b>
        </span>
      </a>
    </div>
  );
}
