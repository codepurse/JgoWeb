import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maploader";
import Header from "../component/header";
import { useRouter } from "next/router";
import "../component/map/config";
import Link from "next/link";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Componentdidmount from "../component/componentdidmount";
import Leaflet from "../component/map/leaflet";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";
import axios from "axios";

export default function map() {
  const [tokenuser, setTokenuser] = React.useState("");
  const router = useRouter();
  var places_data = coordinate;
  const [click_id, setId] = React.useState("");
  var click;

  const customStyles1 = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
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
  };

  const customStyles2 = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "95%",
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

  {
    /* Passing localstorage value in pickoff, dropoff and map */
  }
  if (process.browser) {
    if (global.config.place.deliver.refresh === "") {
      global.config.place.deliver.pickofflat = localStorage.getItem(
        "pickofflat"
      );
      global.config.place.deliver.pickofflng = localStorage.getItem(
        "pickofflng"
      );
      global.config.place.deliver.dropofflng = localStorage.getItem(
        "dropofflng"
      );
      global.config.place.deliver.dropofflat = localStorage.getItem(
        "dropofflat"
      );
      const origin = {
        lat: parseFloat(global.config.place.deliver.pickofflat),
        lng: parseFloat(global.config.place.deliver.pickofflng),
        id: "1",
      };
      coordinate.push(origin);
      const destination = {
        lat: parseFloat(global.config.place.deliver.dropofflat),
        lng: parseFloat(global.config.place.deliver.dropofflng),
        id: "2",
      };
      coordinate.push(destination);
      console.log(coordinate);
      global.config.place.deliver.refresh = "1";
    }
  } else {
  }

  {
    /* Modal for custom map */
  }
  function opensweetalert() {
    swal(
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "5px",
          width: "800px",
        }}
      >
        <Leaflet></Leaflet>
        <p className="pDrag">Click the map to set location</p>
        <button className="btnSet" onClick={setAdd}>
          SET
        </button>
      </div>
    );
  }

  {
    /* Setting the address of pickoff and dropoff after the page loaded */
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      setTokenuser(foundUser.token);
    }
    setAddress({
      value: localStorage.getItem("address"),
      label: localStorage.getItem("address"),
    });
    setAddressDrop({
      value: localStorage.getItem("addressDrop"),
      label: localStorage.getItem("addressDrop"),
    });
    var price_total = localStorage.getItem("price");
    setPrice(Number(price_total).toFixed(2));
    console.log(localStorage.getItem("price"));
  }, []);

  {
    /* All array and variables needed */
  }
  const [price, setPrice] = React.useState("");
  const [address, setAddress] = useState(null);
  const [addressDrop, setAddressDrop] = React.useState("");
  const [addressDrop1, setAddressDrop1] = React.useState("");
  const [addressDrop2, setAddressDrop2] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinatesDrop, setCoordinatesDrop] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinatesDrop1, setCoordinatesDrop1] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinatesDrop2, setCoordinatesDrop2] = React.useState({
    lat: null,
    lng: null,
  });

  {
    /* Pickoff setting and passing data to array and to the component itself */
  }
  const handleChange = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila");
    if (n === true) {
      setAddress(value);
      setCoordinates(latLng);
      try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          (places_data[objIndex].address = value.label),
          console.log(coordinate);
        router.push("");
        getRate();
      } catch (err) {
        const destination = {
          address: value.label,
          lat: latLng.lat,
          lng: latLng.lng,
          id: "1",
        };
        coordinate.push(destination);
        console.log(coordinate);
        router.push("");
        getRate();
      }
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

  {
    /* Dropoff setting and passing data to array and to the component itself */
  }
  const handleChangeDrop = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila");

    if (n === true) {
      try {
        setAddressDrop(value);
        setCoordinatesDrop(latLng);
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          console.log(coordinate);
        router.push("");
        getRate();
      } catch (err) {
        const destination = {
          lat: latLng.lat,
          lng: latLng.lng,
          id: "2",
        };
        coordinate.push(destination);
        getRate();
        router.push("");
      }
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

  {
    /* Stopoff #1 setting and passing data to array and to the component itself */
  }
  const handleChangeDrop1 = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    setAddressDrop1(value);
    setCoordinatesDrop1(latLng);
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = latLng.lat),
        (places_data[objIndex].lng = latLng.lng),
        console.log(coordinate);
      router.push("");
      getRate();
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "3",
      };
      coordinate.push(destination);
      router.push("");
      getRate();
    }
  };

  {
    /* Stopoff #2 setting and passing data to array and to the component itself */
  }
  const handleChangeDrop2 = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    setAddressDrop2(value);
    setCoordinatesDrop2(latLng);
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = latLng.lat),
        (places_data[objIndex].lng = latLng.lng),
        console.log(coordinate);
      router.push("");
      getRate();
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "4",
      };
      coordinate.push(destination);
      router.push("");
      getRate();
    }
  };

  {
    /* Passing name in additional details based on click value */
  }
  function updateInputValue(evt) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].detailsname = evt.target.value),
        console.log(coordinate);
    } catch (err) {
      console.log(err);
    }
  }

  {
    /* Passing number in additional details based on click value */
  }
  function updateInputValueNumber(evt) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].detailsnumber = evt.target.value),
        console.log(coodinate);
    } catch (err) {
      console.log(evt.target.value);
    }
  }

  {
    /* Passing address in additional details based on click value */
  }
  function updateInputValueAdd(evt) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].detailsAdd = evt.target.value),
        console.log(coordinate);
    } catch (err) {
      console.log(evt.target.value);
    }
  }

  {
    /* Passing lat, Lng and geocode of the address in component this function is for the custom map */
  }
  function setAdd() {
    if (click === 1) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddress({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff,
      });
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = coordinates.lat),
        (places_data[objIndex].lng = coordinates.lng),
        console.log(coordinate);
      router.push("");
    } else if (click === 2) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddressDrop({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff,
      });
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = coordinates.lat),
        (places_data[objIndex].lng = coordinates.lng),
        console.log(coordinate);
      router.push("");
    }
    swal.close();
  }

  {
    /* Function to delete index in array */
  }
  function deleteAdd(e) {
    console.log(e.currentTarget.id);
    for (var i = 0; i < places_data.length; i++) {
      if (places_data[i].id == e.currentTarget.id) {
        places_data.splice(i, 1);
      }
    }

    console.log(places_data);
    router.push("");
    getRate();
  }

  function getRate() {
    let ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set(
      "drop_off_locations[0][drop_off_longitude]",
      coordinate[1].lng
    );
    ratedata.set("drop_off_locations[0][booking_order]", "1");
    ratedata.set("additional_services[0]", "");

    if (coordinate[2]) {
      ratedata.set(
        "drop_off_locations[1][drop_off_latitude]",
        coordinate[2].lat
      );
      ratedata.set(
        "drop_off_locations[1][drop_off_longitude]",
        coordinate[2].lng
      );
      ratedata.set("drop_off_locations[1][booking_order]", "2");
      ratedata.set("additional_services[1]", "");
    }
    if (coordinate[3]) {
      ratedata.set(
        "drop_off_locations[2][drop_off_latitude]",
        coordinate[3].lat
      );
      ratedata.set(
        "drop_off_locations[2][drop_off_longitude]",
        coordinate[3].lng
      );
      ratedata.set("drop_off_locations[2][booking_order]", "3");
      ratedata.set("additional_services[2]", "");
    }

    const apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser,
      },
    };

    axios
      .post(apiUrl_rate, ratedata, options)
      .then((result) => {
        var price = result.data.price;
        setPrice(Number(price).toFixed(2));
      })
      .catch((err) => {});
  }

  function btnPlaceorder() {
    console.log(coordinate[0].detailsname);
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser,
      },
    };

    let ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set(
      "drop_off_locations[0][drop_off_longitude]",
      coordinate[1].lng
    );
    ratedata.set("drop_off_locations[0][booking_order]", "1");
    ratedata.set("additional_services[0]", "");

    if (coordinate[2]) {
      ratedata.set(
        "drop_off_locations[1][drop_off_latitude]",
        coordinate[2].lat
      );
      ratedata.set(
        "drop_off_locations[1][drop_off_longitude]",
        coordinate[2].lng
      );
      ratedata.set("drop_off_locations[1][booking_order]", "2");
      ratedata.set("additional_services[1]", "");
    }
    if (coordinate[3]) {
      ratedata.set(
        "drop_off_locations[2][drop_off_latitude]",
        coordinate[3].lat
      );
      ratedata.set(
        "drop_off_locations[2][drop_off_longitude]",
        coordinate[3].lng
      );
      ratedata.set("drop_off_locations[2][booking_order]", "3");
      ratedata.set("additional_services[2]", "");
    }

    let formdata = new FormData();
    formdata.set("customer_id", AuthService.getId());
    formdata.set("booking_type_id", "1");
    formdata.set("contact_name", coordinate[0].detailsname);
    formdata.set("contact_number", coordinate[0].detailsnumber);
    formdata.set("pick_up_address", address.label);
    formdata.set("pick_up_latitude", coordinate[0].lat);
    formdata.set("pick_up_longitude", coordinate[0].lng);

    formdata.set("drop_off_locations[0][drop_off_address]", addressDrop.label);
    formdata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    formdata.set(
      "drop_off_locations[0][drop_off_longitude]",
      coordinate[1].lng
    );
    formdata.set("drop_off_locations[0][booking_order]", "1");
    formdata.set(
      "drop_off_locations[0][contact_name]",
      coordinate[1].detailsname
    );
    formdata.set(
      "drop_off_locations[0][contact_number]",
      coordinate[1].detailsnumber
    );
    formdata.set("drop_off_locations[0][category_id]", "1");
    formdata.set("drop_off_locations[0][distance]", "5.4");
    formdata.set("additional_services[0]", "1");

    if (coordinate[2]) {
      formdata.set(
        "drop_off_locations[1][drop_off_address]",
        addressDrop1.label
      );
      formdata.set(
        "drop_off_locations[1][drop_off_latitude]",
        coordinate[2].lat
      );
      formdata.set(
        "drop_off_locations[1][drop_off_longitude]",
        coordinate[2].lng
      );
      formdata.set("drop_off_locations[1][booking_order]", "2");
      formdata.set(
        "drop_off_locations[1][contact_name]",
        coordinate[2].detailsname
      );
      formdata.set(
        "drop_off_locations[1][contact_number]",
        coordinate[2].detailsnumber
      );
      formdata.set("drop_off_locations[1][category_id]", "1");
      formdata.set("drop_off_locations[1][distance]", "5.382620231139828");
      formdata.set("additional_services[1]", "1");
    }

    if (coordinate[3]) {
      formdata.set(
        "drop_off_locations[2][drop_off_address]",
        addressDrop2.label
      );
      formdata.set(
        "drop_off_locations[2][drop_off_latitude]",
        coordinate[3].lat
      );
      formdata.set(
        "drop_off_locations[2][drop_off_longitude]",
        coordinate[3].lng
      );
      formdata.set("drop_off_locations[2][booking_order]", "3");
      formdata.set(
        "drop_off_locations[2][contact_name]",
        coordinate[3].detailsname
      );
      formdata.set(
        "drop_off_locations[2][contact_number]",
        coordinate[3].detailsnumber
      );
      formdata.set("drop_off_locations[2][category_id]", "1");
      formdata.set("drop_off_locations[2][distance]", "5.382620231139828");
      formdata.set("additional_services[2]", "1");
    }

    const apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    const apiUrl = "http://localhost:8000/api/auth/booking";

    axios
      .post(apiUrl_rate, ratedata, options)
      .then((result) => {
        formdata.set("price", result.data.price);
        var price = result.data.price;
        setPrice(Number(price).toFixed(2));
        axios
          .post(apiUrl, formdata, options)
          .then((result) => {})
          .catch((err) => {});
      })
      .catch((err) => {});
  }

  function checkdata() {
    console.log(click_id);
    console.log(places_data);
  }

  return (
    <>
      <Header></Header>
      <div className="container-fluid conMap">
        <Componentdidmount></Componentdidmount>

        <div className="row">
          <div className="col-lg-5 colLeft">
            <div
              className="row align-items-center"
              style={{ padding: "40px 0px" }}
            >
              <div className="col-lg-4">
                <img src="Image/logo.png" className="img-fluid imgLogo"></img>
              </div>
              <div className="col-lg-8">
                <ul className="my-row">
                  <li>LOGIN</li>
                  <li>HOME</li>
                </ul>
              </div>
            </div>

            {/* Pick off */}
            <p className="pPick">
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid"
                style={{ marginRight: "10px", width: "18px" }}
              ></img>{" "}
              Pickup
            </p>
            <div onClick={() => (click = 1)}>
              <div
                className="form-inline"
                style={{ width: "95%", marginLeft: "5%" }}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "1",
                    value: address,
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
                  src="Image/google-maps.png"
                  className="img-fluid imgMap"
                  onClick={opensweetalert}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="txtName txtAdditional"
                        onChange={(evt) => updateInputValue(evt)}
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 1 */}
            <p className="pPick" style={{ marginTop: "30px" }}>
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid"
                style={{ marginRight: "15px" }}
              ></img>
              Dropoff
            </p>
            <div onClick={() => (click = 2)}>
              <div
                className="form-inline"
                style={{ width: "95%", marginLeft: "5%" }}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
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
                  src="Image/google-maps.png"
                  className="img-fluid imgMap"
                  onClick={opensweetalert}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        onChange={(evt) => updateInputValue(evt)}
                        className="txtName txtAdditional"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd txtAdditional"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 2 */}
            <div
              onClick={() => (click = 3, setId("3"))}
              style={{ display: "none" }}
              className="divStopoff1 divStopOff"
            >
              <p className="pPick" style={{ marginTop: "30px" }}>
                <img
                  src="Image/mapgps.svg"
                  className="img-fluid"
                  style={{ marginRight: "15px" }}
                ></img>
                Stop Off Location
              </p>

              <div
                className="form-inline"
                style={{ width: "100%", marginLeft: "5%" }}
                onClick={() => (click = 3)}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "3",
                    value: addressDrop1,
                    onChange: handleChangeDrop1,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img
                  src="Image/google-maps.png"
                  className="img-fluid imgMap1"
                ></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id = "3"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        onChange={(evt) => updateInputValue(evt)}
                        className="txtName txtAdditional"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd txtAdditional"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 3 */}
            <div
              onClick={() => (click = 4 , setId(4))}
              style={{ display: "none" }}
              className="divStopoff2 divStopOff"
            >
              <p className="pPick" style={{ marginTop: "30px" }}>
                {" "}
                <img
                  src="Image/mapgps.svg"
                  className="img-fluid"
                  style={{ marginRight: "15px" }}
                ></img>
                Stop Off Location
              </p>

              <div
                className="form-inline"
                style={{ width: "100%", marginLeft: "5%" }}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "4",
                    value: addressDrop2,
                    onChange: handleChangeDrop2,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img
                  src="Image/google-maps.png"
                  className="img-fluid imgMap1"
                ></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id = "4"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <p className="pAdd">&#x2b; Add details</p>
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        onChange={(evt) => updateInputValue(evt)}
                        className="txtName txtAdditional"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number txtAdditional"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd txtAdditional"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btnAddStopoff">Add Stop-off</button>
            <p className="pNote" style={{ display: "none" }}>
              Note: Delivery only within Metro Manila
            </p>
            <div className="divCategory">
              <p className="pPick" style={{ fontSize: "0.9rem" }}>
                Category
              </p>
              <div className="row">
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/001-file.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">DOCUMENT</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/002-pizza.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">FOOD</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/clothing.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">CLOTHING</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/medical.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">MEDICAL</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/001-file.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">FRAGILE</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="boxCategory align-items-center d-flex justify-content-center">
                    <div>
                      <img
                        src="Image/other.svg"
                        className="img-fluid mx-auto d-flex imgCategory"
                      ></img>
                      <p className="pBoxCategory">OTHERS</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-12"
                  style={{ display: "none" }}
                >
                  <p className="pNote">Note: MAXIMUM WEIGHT IS 10kg</p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-lg-12">
                  <p className="pAdditional" style={{ fontSize: "0.9rem" }}>
                    Additional Services
                  </p>
                </div>
                <div className="col-lg-3">
                  <div className="boxAdditional">
                    <p
                      className="pAdditonalBox"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Insulated Box
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox" onClick={checkdata}>
                      Cash Handling
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Queueing</p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Pabili Service</p>
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "20px" }}>
                <div className="col-lg-12">
                  <p className="pPayment">Payment</p>
                </div>
                <div className="col-lg-2">
                  <img
                    src="Image/credit-card.png"
                    className="img-fluid"
                    style={{ width: "30px", marginLeft: "18px" }}
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pPrice">&#8369;{price}</p>
                  <p className="pPriceSub">
                    This is your final payment, please confirm your destination
                    and go proceed to payment page.
                  </p>
                  <button className="btnBook" onClick={btnPlaceorder}>
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 colMap">
            <div className="divMap fixed-top">
              <Googlemap></Googlemap>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ padding: "15px" }}>
            <div className="modal-header">
              <p className="pMode">Mode of payment</p>
              <p className="pModeSub">
                Please make a payment below to start your booking process. If
                your payment methos is not there you can add your own below.
              </p>
            </div>
            <div className="modal-body">
              <div className="divCod">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <img
                      src="Image/peso.png"
                      className="img-fluid mx-auto d-flex"
                      style={{ width: "55px" }}
                    ></img>
                  </div>
                  <div className="col-lg-6">
                    <p className="pCod">Cash on delivery</p>
                    <p className="pCodSub">Pay once when its delivered</p>
                  </div>
                  <div className="col-lg-4">
                    <p className="pPriceModal">&#8369;{price}</p>
                  </div>
                </div>
              </div>

              <p
                className="pMode"
                style={{ fontSize: "1rem", marginTop: "30px" }}
              >
                Payment Details
              </p>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <img src="Image/visa.png"></img>
                </div>
                <div className="col-lg-9" style={{ padding: "0px" }}>
                  <p className="pCardType">Credit Card</p>
                  <p className="pCardNumber">1234 xxxx xxxx 1234</p>
                </div>
                <div className="col-lg-12">
                  <p className="pAddMethod">ADD PAYMENT METHOD</p>
                </div>
                <div className="col-lg-12">
                  <button className="btnPayment">Payment</button>
                </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
