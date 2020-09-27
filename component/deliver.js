import React, { Component, useState } from "react";
import Link from "next/link";
import "../component/map/config";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Custommap from "../component/custommap";
import swal from "@sweetalert/with-react";
export default function App() {
  var click;

  function getAdd() {
    if (click === 0) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddress({value: global.config.place.deliver.pickoff, label: global.config.place.deliver.pickoff});
    } else {
      setAddressDrop({value: global.config.place.deliver.pickoff, label: global.config.place.deliver.pickoff});
      coordinatesDrop.lat = global.config.place.deliver.pickofflat;
      coordinatesDrop.lng = global.config.place.deliver.dropofflang;
    }
    swal.close()
  }

  function clickSubmit(e) {
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
    localStorage.setItem("pickofflng",coordinates.lng);
    localStorage.setItem("dropofflat",coordinatesDrop.lat);
    localStorage.setItem("dropofflng", coordinatesDrop.lng);
  


    global.config.place.deliver.pickoff = address.label;
    global.config.place.deliver.dropoff = addressDrop.label;

    global.config.place.deliver.pickofflat = coordinatesDrop.lat;
    global.config.place.deliver.pickofflang = coordinatesDrop.lng;

    global.config.place.deliver.dropofflat = coordinatesDrop.lat;
    global.config.place.deliver.dropofflang = coordinatesDrop.lng;
    global.config.place.deliver.refresh = 1;
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
    console.log(value);
    setAddress(value);
    setCoordinates(latLng);
  
  };

  const handleChangeDrop = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    setAddressDrop(value);
    setCoordinatesDrop(latLng);
  };

  function opensweetalert() {
    swal(
      <div style = {{borderRadius: "10px",overflow: "hidden", position: "relative"}}>
        <p className = "pDrag">Drag the marker to set location</p>
        <button className = "btnDone" onClick = {getAdd}>Done</button>
          <Custommap></Custommap>
      </div>
    );
  }

  return (
    <div className="col-lg-6 colDeliver">
      <p className="pTitle">Book your delivery now!</p>
      <div className="box">
        <div className="form-inline"  onClick={() => (click = 0)}>
          <img
            src="Image/maps.png"
            className="img-fluid"
            onClick={opensweetalert}
           
          ></img>
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
        </div>
        <div className="form-inline" onClick={() => (click = 1)}>
          <img
            src="Image/maps.png"
            className="img-fluid"
            onClick={opensweetalert}
          ></img>
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
        </div>
      </div>

      <Link href="/map">
        <input
          type="button"
          className="btnSubmit"
          value="SUBMIT"
          onClick={clickSubmit}
        ></input>
      </Link>
    </div>
  );
}
