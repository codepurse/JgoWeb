import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maploader";
import Header from "../component/header";
import { useRouter } from "next/router";
import "../component/map/config";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Componentdidmount from "../component/componentdidmount";
import Leaflet from "../component/map/leaflet";
import swal from "@sweetalert/with-react";
import AuthService from "../services/auth.service";
import Select from "react-select";
import axios from "axios";

export default function map() {
  const [tokenuser, setTokenuser] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const router = useRouter();
  const [theme, setTheme] = React.useState("");
  var places_data = coordinate;
  const [click_id, setId] = React.useState("");
  const [isToggled, setIsToggled] = React.useState(false);
  const bookingtype = [
    { value: "1", label: "Document" },
    { value: "2", label: "Food" },
    { value: "3", label: "Clothing" },
    { value: "4", label: "Medical" },
    { value: "5", label: "Fragile" },
    { value: "6", label: "Others" },
  ];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "100%",
      padding: "2px",
      marginTop: "10px",
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
    container: (base) => ({
      ...base,
      width: "100%",
    }),
  };

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
      background: isToggled ? "#F3F3F4" : "transparent",
      color: isToggled ? "#424242" : "white",
      border: isToggled ? "1px solid lightgray" : "1px solid #2c2c2c",
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
      color: isToggled ? "#424242" : "white",
    }),
  };

  const customStyles3 = {
    control: (base, state) => ({
      ...base,
      background: "#F3F3F4",
      color: "#424242",
      border: "1px solid lightgray",
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
      color: "#424242",
    }),
  };

  const customStyles4 = {
    control: (base, state) => ({
      ...base,
      background: "#F3F3F4",
      color: "#424242",
      border: "1px solid lightgray",
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
      color: "#424242",
    }),
    container: (base) => ({
      ...base,
      width: "100%",
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
    if (AuthService.getToken()) {
      $(".conMap").fadeIn(200);
      $(".tooltip-primary").tooltip().mouseover();
      setTimeout(function () {
        $(".tooltip-primary").tooltip("hide");
      }, 5000);
    } else {
      $(".tooltip").tooltip("hide");
      router.push("/");
    }
    var theme = JSON.parse(localStorage.getItem("theme"));
    setIsToggled(theme);
    setFullname(AuthService.getFullname());
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
  const [services, setServices] = React.useState("1");
  const [address, setAddress] = useState(null);
  const [addressDrop, setAddressDrop] = React.useState("");
  const [addressStop, setAddressStop] = React.useState("");
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
  const [coordinateStop, setcoordinateStop] = React.useState({
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
        router.push("/map");
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

  const handleChangeStop = async (value) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);
    setAddressStop(value);
    setcoordinateStop(latLng);
    console.log(value.label);
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = latLng.lat),
        (places_data[objIndex].lng = latLng.lng),
        console.log(coordinate);
      router.push("");
      getRate();
    } catch (err) {
      const destination = {
        address: value.label,
        lat: latLng.lat,
        lng: latLng.lng,
        id: click,
      };
      coordinate.push(destination);
      router.push("");
      getRate();
    }
  };

  function getServices1() {
    setServices(1);
  }
  function getServices2() {
    setServices(2);
  }
  function getServices3() {
    setServices(3);
  }

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

  const [category_type, setCategory] = React.useState("");

  function handleChangeCategory(event) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].category = event.value), console.log(coordinate);
    } catch (err) {
      console.log(event.value);
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
    $(e.currentTarget).closest(".divStopOff").fadeOut(150);
    $(e.currentTarget).closest(".divStopOff").find(".txtAdditional").val("");
    $(e.currentTarget)
      .closest(".divStopOff")
      .find(".css-1wa3eu0-placeholder")
      .html("Select..");
    $(e.currentTarget)
      .closest(".divStopOff")
      .find(".css-5sz5u5-singleValue")
      .hide();

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
    ratedata.set("additional_services[0]", services);

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
      ratedata.set("additional_services[1]", services);
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
      ratedata.set("additional_services[2]", services);
    }
    if (coordinate[4]) {
      ratedata.set(
        "drop_off_locations[3][drop_off_latitude]",
        coordinate[4].lat
      );
      ratedata.set(
        "drop_off_locations[3][drop_off_longitude]",
        coordinate[4].lng
      );
      ratedata.set("drop_off_locations[3][booking_order]", "4");
      ratedata.set("additional_services[3]", services);
    }
    if (coordinate[5]) {
      ratedata.set(
        "drop_off_locations[4][drop_off_latitude]",
        coordinate[5].lat
      );
      ratedata.set(
        "drop_off_locations[4][drop_off_longitude]",
        coordinate[5].lng
      );
      ratedata.set("drop_off_locations[4][booking_order]", "5");
      ratedata.set("additional_services[4]", services);
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
    ratedata.set("additional_services[0]", services);

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
      ratedata.set("additional_services[1]", services);
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
      ratedata.set("additional_services[2]", services);
    }
    if (coordinate[4]) {
      ratedata.set(
        "drop_off_locations[3][drop_off_latitude]",
        coordinate[4].lat
      );
      ratedata.set(
        "drop_off_locations[3][drop_off_longitude]",
        coordinate[4].lng
      );
      ratedata.set("drop_off_locations[3][booking_order]", "4");
      ratedata.set("additional_services[3]", services);
    }
    if (coordinate[5]) {
      ratedata.set(
        "drop_off_locations[4][drop_off_latitude]",
        coordinate[5].lat
      );
      ratedata.set(
        "drop_off_locations[4][drop_off_longitude]",
        coordinate[5].lng
      );
      ratedata.set("drop_off_locations[4][booking_order]", "5");
      ratedata.set("additional_services[4]", services);
    }

    let formdata = new FormData();
    formdata.set("customer_id", AuthService.getId());

    formdata.set("contact_name", "asdasd");
    formdata.set("contact_number", coordinate[0].detailsnumber);
    formdata.set("note", coordinate[0].detailsAdd);
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

    if (coordinate[1].category) {
      formdata.set(
        "drop_off_locations[0][category_id]",
        coordinate[1].category
      );
    } else {
      formdata.set("drop_off_locations[0][category_id]", "5");
    }
    formdata.set("drop_off_locations[0][distance]", "5.4");
    formdata.set("additional_services[0]", services);

    if (coordinate[2]) {
      formdata.set(
        "drop_off_locations[1][drop_off_address]",
        coordinate[2].address
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

      if (coordinate[2].category) {
        formdata.set(
          "drop_off_locations[1][category_id]",
          coordinate[2].category
        );
      } else {
        formdata.set("drop_off_locations[1][category_id]", "5");
      }
      formdata.set("drop_off_locations[1][distance]", "5.382620231139828");
      formdata.set("additional_services[1]", services);
    }

    if (coordinate[3]) {
      formdata.set(
        "drop_off_locations[2][drop_off_address]",
        coordinate[3].address
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
      if (coordinate[3].category) {
        formdata.set(
          "drop_off_locations[2][category_id]",
          coordinate[3].category
        );
      } else {
        formdata.set("drop_off_locations[2][category_id]", "5");
      }
      formdata.set("drop_off_locations[2][distance]", "5.382620231139828");
      formdata.set("additional_services[2]", services);
    }

    if (coordinate[4]) {
      formdata.set(
        "drop_off_locations[3][drop_off_address]",
        coordinate[4].address
      );
      formdata.set(
        "drop_off_locations[3][drop_off_latitude]",
        coordinate[4].lat
      );
      formdata.set(
        "drop_off_locations[3][drop_off_longitude]",
        coordinate[4].lng
      );
      formdata.set("drop_off_locations[3][booking_order]", "4");
      formdata.set(
        "drop_off_locations[3][contact_name]",
        coordinate[4].detailsname
      );
      formdata.set(
        "drop_off_locations[3][contact_number]",
        coordinate[4].detailsnumber
      );
      if (coordinate[4].category) {
        formdata.set(
          "drop_off_locations[3][category_id]",
          coordinate[4].category
        );
      } else {
        formdata.set("drop_off_locations[3][category_id]", "5");
      }
      formdata.set("drop_off_locations[3][distance]", "5.382620231139828");
      formdata.set("additional_services[3]", services);
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
          .then((result) => {
            localStorage.setItem("activeid", result.data.data);
            router.push("/profile");
          })
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
      <NextNprogress color="#EDC728" />
      <div className="container-fluid conMap">
        <Componentdidmount></Componentdidmount>

        <div className="row">
          <div className="col-lg-5 colLeft">
            <div
              className="row align-items-center"
              style={{ padding: "40px 0px" }}
            >
              <div className="col-lg-3">
                <img src="Image/logo.png" className="img-fluid imgLogo"></img>
              </div>
              <div className="col-lg-9">
                <ul className="my-row">
                  <Link href="/profile">
                    <a>
                      <li style={{ textTransform: "uppercase" }}>{fullname}</li>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <li>HOME</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Pick off */}
            <p className="pPick">
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid imgGps"
                style={{ marginRight: "10px" }}
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
                    styles: isToggled ? customStyles3 : customStyles1,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img
                  src="Image/maps.png"
                  className="img-fluid imgMap tooltip-primary"
                  onClick={opensweetalert}
                  data-toggle="tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click the map to set the exact location"
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="txtNumber txtAdditional"
                        onChange={(evt) => updateInputValueAdd(evt)}
                        placeholder="Note"
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
                className="img-fluid imgGps"
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
                    styles: isToggled ? customStyles3 : customStyles1,
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
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                        placeholder="Note"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select
                        options={bookingtype}
                        styles={isToggled ? customStyles4 : customStyles}
                        onChange={handleChangeCategory}
                        placeholder="Select Category"
                        onClick={() => (click = 2)}
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 2 */}

            <div
              onClick={() => ((click = 3), setId(3))}
              style={{ display: "none" }}
              className="divStopoff1 divStopOff"
            >
              <p className="pPick" style={{ marginTop: "30px" }}>
                {" "}
                <img
                  src="Image/mapgps.svg"
                  className="img-fluid imgGps"
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
                    instanceId: "3",
                    className: "selectPlaces",
                    onChange: handleChangeStop,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img src="Image/maps.png" className="img-fluid imgMap1"></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id="3"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                        placeholder="Note"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select
                        options={bookingtype}
                        styles={isToggled ? customStyles4 : customStyles}
                        onChange={handleChangeCategory}
                        placeholder="Select Category"
                        onClick={() => (click = 3)}
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 3 */}

            <div
              onClick={() => ((click = 4), setId(4))}
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

                    onChange: handleChangeStop,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img src="Image/maps.png" className="img-fluid imgMap1"></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id="4"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                        placeholder="Note"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select
                        options={bookingtype}
                        styles={isToggled ? customStyles4 : customStyles}
                        onChange={handleChangeCategory}
                        placeholder="Select Category"
                        onClick={() => (click = 4)}
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 4 */}

            <div
              onClick={() => ((click = 5), setId(5))}
              style={{ display: "none" }}
              className="divStopoff3 divStopOff"
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
                    instanceId: "5",

                    onChange: handleChangeStop,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img src="Image/maps.png" className="img-fluid imgMap1"></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id="4"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                        placeholder="Note"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select
                        options={bookingtype}
                        styles={isToggled ? customStyles4 : customStyles}
                        onChange={handleChangeCategory}
                        placeholder="Select Category"
                        onClick={() => (click = 5)}
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            {/* Stop off number 5 */}

            <div
              onClick={() => ((click = 6), setId(6))}
              style={{ display: "none" }}
              className="divStopoff4 divStopOff"
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
                    instanceId: "6",

                    onChange: handleChangeStop,
                    styles: customStyles2,
                  }}
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["ph"],
                    },
                  }}
                />
                <img src="Image/maps.png" className="img-fluid imgMap1"></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
                  id="4"
                  onClick={deleteAdd}
                ></img>
              </div>
              <div className="divHide">
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-6">
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
                        placeholder="Note"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Select
                        options={bookingtype}
                        styles={customStyles}
                        onChange={handleChangeCategory}
                        placeholder="Select Category"
                        onClick={() => (click = 6)}
                      />
                    </div>
                  </div>
                </div>
                <p className="pAdd">&#x2b; Add details</p>
              </div>
            </div>

            <button className="btnAddStopoff">Add Stop-off</button>
            <p className="pNote" style={{ display: "none" }}>
              Note: Delivery only within Metro Manila
            </p>
            <div className="divCategory">
              <p
                className="pPick"
                style={{ fontSize: "0.9rem", display: "none" }}
              >
                Category
              </p>
              <div className="row" style={{ display: "none" }}>
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
                <div className="col-lg-4">
                  <div className="boxAdditional" onClick={getServices1}>
                    <p className="pAdditonalBox">Insulated Box</p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox" onClick={getServices2}>
                      Cash Handling
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="boxAdditional" onClick={getServices3}>
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
                    className="img-fluid imgGps"
                    style={{ width: "30px", marginLeft: "18px" }}
                  ></img>
                </div>
                <div className="col-lg-10">
                  <p className="pPrice">&#8369;{price}</p>
                  <p className="pPriceSub">
                    This is your final payment, please review and confirm your
                    destination/s. Then click place order to proceed to payment
                    page.
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
