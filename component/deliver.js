import React, { Component, useState } from "react";
import "../component/map/config";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Custommap from "../component/custommap";
import swal from "@sweetalert/with-react";
import { useRouter } from "next/router";
export default function App() {
  const router = useRouter();
  var click;

  function getAdd() {
    if (global.config.place.deliver.pickoff.includes("Metro Manila") === true) {
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
      const origin = {
        lat: coordinates.lat,
        lng: coordinates.lng,
        id: "1",
      };
      coordinate.push(origin);
      const destination = {
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
      router.push("/map");
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
    var n = str.includes("Metro Manila");
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
    var n = str.includes("Metro Manila");
    setAddressDrop(value);
    setCoordinatesDrop(latLng);
    if (n === true) {
      alert("asdas");
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
              value: address,
              instanceId: "1",
              onChange: handleChange,
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ph"],
              },
            }}
          />
          <img
            src="Image/google-maps.png"
            className="img-fluid imgMap"
            onClick={opensweetalert}
          ></img>
        </div>
        <div
          className="form-inline"
          onClick={() => (click = 1)}
          style={{ marginTop: "10px" }}
        >
          <GooglePlacesAutocomplete
            selectProps={{
              instanceId: "2",
              value: addressDrop,
              onChange: handleChangeDrop,
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["ph"],
              },
            }}
          />
          <img
            src="Image/google-maps.png"
            className="img-fluid imgMap"
            onClick={opensweetalert}
          ></img>
        </div>
      </div>

      <input
        type="button"
        className="btnSubmit"
        value="SUBMIT"
        onClick={clickSubmit}
      ></input>
    </div>
  );
}
