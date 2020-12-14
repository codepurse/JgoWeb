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
  var order = 0;
  const [tokenuser, setTokenuser] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const router = useRouter();
  const [theme, setTheme] = React.useState("");
  var places_data = coordinate;
  const [click_id, setId] = React.useState("");
  const [isToggled, setIsToggled] = React.useState(false);
  const [listcard, setListcard] = React.useState([]);
  const [codloc, setcodLoc] = React.useState("");
  const [cardtoken, setCardToken] = React.useState("");
  const [weight, setWeight] = React.useState("0-10KG");
  const [wallet, setWallet] = React.useState("");
  const [walletamount, setWalletamount] = React.useState("");
  const [addservices, setAddservices] = React.useState([]);
  const [addlistservice, setAddlistservice] = React.useState([]);
  const [locationDropdown, setlocationDropdown] = React.useState([]);
  const locationCod = [];
  var loopservices = 0;
  var clickpayment = 0;
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
        address: localStorage.getItem("address"),
        lat: parseFloat(global.config.place.deliver.pickofflat),
        lng: parseFloat(global.config.place.deliver.pickofflng),
        id: "1",
      };
      coordinate.push(origin);
      const destination = {
        address: localStorage.getItem("addressDrop"),
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

  useEffect(() => {
    window.reactFunction = () => {
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
                  Fill up the missing locations before adding one.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    coordinate.length = 2;
    console.log(AuthService.getId());
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

    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    console.log(options1);
    const api = "https://staging-api.jgo.com.ph/api/auth/additional_services";

    axios
      .get(api, options1)
      .then((result) => {
        console.log(result.data.data);
        setAddservices(result.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    const apiUrl2 =
      "https://staging-api.jgo.com.ph/api/auth/customer_card_details";

    axios.post(apiUrl2, {}, options1).then((result) => {
      setListcard(result.data.user_card_details);
      console.log(result.data.user_card_details);
    });

    const apiUrl_wallet =
      "https://staging-api.jgo.com.ph/api/auth/customer-profile";
    axios.post(apiUrl_wallet, {}, options1).then((result) => {
      setWallet(result.data.data.get_jgo_wallet.balance);
    });
  }, []);

  {
    /* All array and variables needed */
  }
  const [payment, setPayment] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [services, setServices] = React.useState([]);
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
        router.push("/map");
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
        router.push("/map");
        getRate();
      } catch (err) {
        const destination = {
          lat: latLng.lat,
          lng: latLng.lng,
          id: "2",
        };
        coordinate.push(destination);
        getRate();
        router.push("/map");
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
      router.push("/map");
      getRate();
    } catch (err) {
      const destination = {
        address: value.label,
        lat: latLng.lat,
        lng: latLng.lng,
        id: click,
      };
      coordinate.push(destination);
      router.push("/map");
      getRate();
    }
  };

  function slideChange(e) {
    $(".pWeight").text(e.target.value);
    if (e.target.value < 11) {
      setWeight("0-10KG");
      $(".imgWeight1").fadeIn(150);
      $(".imgWeight2").fadeOut(150);
    } else if (e.target.value < 16) {
      setWeight("11-15KG");
    } else if (e.target.value < 21) {
      setWeight("16-20KG");
      $(".imgWeight1").fadeOut(150);
      $(".imgWeight2").fadeIn(150);
    }
    console.log(e.target.value);
  }

  function getservice(e) {
    loopservices = 0;
    var idservice = $(e.currentTarget).attr("id");

    if (addlistservice.indexOf(idservice) < 0) {
      addlistservice.push(idservice);
      console.log(addlistservice);
      getRate();
    } else {
      for (var i in addlistservice) {
        if (addlistservice[i] == idservice) {
          addlistservice.splice(i, 1);

          break;
        }
      }

      console.log(addlistservice);
    }
    if (localStorage.getItem("theme_status") == "light") {
      $(".boxAdditional").css("background-color", "transparent");
      $(".boxAdditional >p").css("color", "#283148");
      $(this).css("background-color", "#FFFE00");
      $("p", this).css("color", "#283148");
    } else {
      if ($(e.currentTarget).css("background-color") == "rgb(255, 254, 0)") {
        $(e.currentTarget).css("background-color", "transparent");
        $("p", e.currentTarget).css("color", "white");
      } else {
        $(e.currentTarget).css("background-color", "#FFFE00");
        $("p", e.currentTarget).css("color", "black");
      }
    }
    getRate();
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

  function handleChangeLocation(event) {
    setcodLoc(event.value);
    console.log(event.value);
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
      router.push("/map");
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
      router.push("/map");
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
      .contents()
      .filter((_, el) => el.nodeType === 3)
      .remove();

    console.log(e.currentTarget.id);
    for (var i = 0; i < places_data.length; i++) {
      if (places_data[i].id == e.currentTarget.id) {
        places_data.splice(i, 1);
      }
    }

    console.log(places_data);
    router.push("/map");
    getRate();
  }

  function getRate() {
    $(".pPrice").hide();
    $(".divLoading").show();
    let ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set(
      "drop_off_locations[0][drop_off_longitude]",
      coordinate[1].lng
    );
    ratedata.set("drop_off_locations[0][booking_order]", "1");

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
    }

    addlistservice.map((addservice) => {
      ratedata.set("additional_services[" + loopservices + "]", addservice),
        (loopservices = loopservices + 1);
    });

    const apiUrl_rate =
      "https://staging-api.jgo.com.ph/api/auth/calculate-rate";
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };

    axios
      .post(apiUrl_rate, ratedata, options)
      .then((result) => {
        console.log(result);
        var price = result.data.price;
        setPrice(Number(price).toFixed(2));
        $(".divLoading").hide();
        $(".pPrice").show();
      })
      .catch((err) => {});
  }

  function getCard() {
    $(".divLoading").show();
    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };

    const apiUrl2 =
      "https://staging-api.jgo.com.ph/api/auth/customer_card_details";

    axios.post(apiUrl2, {}, options1).then((result) => {
      console.log(result.data);
      $(".divLoading").hide();
      setListcard(result.data.user_card_details);
    });
  }

  function btnPlaceorder() {
    if (clickpayment == 1) {
      return false;
    } else if (payment == "") {
      swal(
        <div style={{ width: "450px", padding: "10px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ borderLeft: "3px solid #FFE900" }}
            >
              <div className="col-lg-2 col-sm-2">
                <img src="Image/complain.png" style={{ width: "32px" }}></img>
              </div>
              <div
                className="col-lg-10 col-sm-10"
                style={{ textAlign: "left" }}
              >
                <p className="pError">Warning</p>
                <p className="pErrorSub">
                  Please select a payment method to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (payment.length == 0) {
        x = 0;
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
                    Please select a payment method to proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }else if (payment == "cod" && codloc.length == 0) {
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
                    Please select a payment location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
      else {
        clickpayment = 1;
        console.log(addlistservice);
        $(".btnPayment").addClass("btn--loading");
        const options = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            Authorization: "Bearer " + AuthService.getToken(),
          },
        };

        let ratedata = new FormData();
        ratedata.set("pick_up_latitude", coordinate[0].lat);
        ratedata.set("pick_up_longitude", coordinate[0].lng);
        ratedata.set(
          "drop_off_locations[0][drop_off_latitude]",
          coordinate[1].lat
        );
        ratedata.set(
          "drop_off_locations[0][drop_off_longitude]",
          coordinate[1].lng
        );
        ratedata.set("drop_off_locations[0][booking_order]", "1");

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
        }

        if (addlistservice === undefined || addlistservice.length == 0) {
          ratedata.set("additional_services", []);
        } else {
          addlistservice.map((addservice) => {
            ratedata.set(
              "additional_services[" + loopservices + "]",
              addservice
            ),
              (loopservices = loopservices + 1);
          });
        }

        let formdata = new FormData();
        formdata.set("customer_id", AuthService.getId());

        formdata.set("contact_name", coordinate[0].detailsname);
        formdata.set("contact_number", coordinate[0].detailsnumber);
        if (coordinate[0].detailsAdd) {
          formdata.set("note", coordinate[0].detailsAdd);
        } else {
          formdata.set("note", "No notes to display");
        }
        formdata.set("pick_up_address", address.label);
        formdata.set("pick_up_latitude", coordinate[0].lat);
        formdata.set("pick_up_longitude", coordinate[0].lng);
        formdata.set("duration", Number(durationmap / 60) + " mins");
        formdata.set("payment_method", payment);
        if (payment == "debit_credit") {
          formdata.set("client_token", cardtoken);
        } else {
        }
        if (payment == "cod") {
          formdata.set("is_collection_point", codloc);
        }
        formdata.set("weight", weight);

        formdata.set(
          "drop_off_locations[0][drop_off_address]",
          addressDrop.label
        );
        formdata.set(
          "drop_off_locations[0][drop_off_latitude]",
          coordinate[1].lat
        );
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

        if (coordinate[1].detailsAdd) {
          formdata.set(
            "drop_off_locations[0][notes]",
            coordinate[1].detailsAdd
          );
        } else {
          formdata.set("drop_off_locations[0][notes]", "No notes to display");
        }

        if (coordinate[1].category) {
          formdata.set(
            "drop_off_locations[0][category_id]",
            coordinate[1].category
          );
        } else {
          formdata.set("drop_off_locations[0][category_id]", "1");
        }
        formdata.set("drop_off_locations[0][distance]", "5.4");

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
            formdata.set("drop_off_locations[1][category_id]", "1");
          }
          formdata.set("drop_off_locations[1][distance]", "5.382620231139828");

          if (coordinate[2].detailsAdd) {
            formdata.set(
              "drop_off_locations[1][notes]",
              coordinate[2].detailsAdd
            );
          } else {
            formdata.set("drop_off_locations[1][notes]", "No notes to display");
          }
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
            formdata.set("drop_off_locations[2][category_id]", "1");
          }
          formdata.set("drop_off_locations[2][distance]", "5.382620231139828");

          if (coordinate[3].detailsAdd) {
            formdata.set(
              "drop_off_locations[2][notes]",
              coordinate[3].detailsAdd
            );
          } else {
            formdata.set("drop_off_locations[2][notes]", "No notes to display");
          }
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
            formdata.set("drop_off_locations[3][category_id]", "1");
          }
          formdata.set("drop_off_locations[3][distance]", "5.382620231139828");

          if (coordinate[4].detailsAdd) {
            formdata.set(
              "drop_off_locations[3][notes]",
              coordinate[4].detailsAdd
            );
          } else {
            formdata.set("drop_off_locations[3][notes]", "No notes to display");
          }
        }

        if (addlistservice === undefined || addlistservice.length == 0) {
          formdata.set("additional_services[]", "");
        } else {
          addlistservice.map((addservice) => {
            formdata.set(
              "additional_services[" + loopservices + "]",
              addservice
            ),
              (loopservices = loopservices + 1);
          });
        }

        const apiUrl_rate =
          "https://staging-api.jgo.com.ph/api/auth/calculate-rate";
        const apiUrl = "https://staging-api.jgo.com.ph/api/auth/booking";

        axios
          .post(apiUrl_rate, ratedata, options)
          .then((result) => {
            formdata.set("price", result.data.price);

            var price = result.data.price;
            setPrice(Number(price).toFixed(2));
            axios
              .post(apiUrl, formdata, options)
              .then((result) => {
                console.log(result);
                if (result.data.status == "Failed") {
                  $(".btnPayment").removeClass("btn--loading");
                  console.log(cardtoken);
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
                          <div
                            className="col-lg-10"
                            style={{ textAlign: "left" }}
                          >
                            <p className="pError">Error</p>
                            <p className="pErrorSub">
                              Booking cannot be procesed. Please contact our
                              customer support.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  localStorage.setItem("activeid", result.data.data);
                  router.push("/profile");
                }
              })
              .catch((err) => {
                for (var pair of formdata.entries()) {
                  console.log(pair[0] + ", " + pair[1]);
                }
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
                        <div
                          className="col-lg-10"
                          style={{ textAlign: "left" }}
                        >
                          <p className="pError">Error</p>
                          <p className="pErrorSub">
                            Booking cannot be procesed. Please contact our
                            customer support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                clickpayment = 0;
                $(".btnPayment").removeClass("btn--loading");
              });
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
                      <p className="pErrorSub">
                        Booking cannot be procesed. Please contact our customer
                        support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
            $(".btnPayment").removeClass("btn--loading");
          });
      }
    }
  }

  function gotoPayment() {
    var countlocation = 0;
    const promises = coordinate.map((event) =>
      locationCod.push({
        value: Number(event.id) - 1,
        label: event.address,
      })
    );

    Promise.all(promises).then(setlocationDropdown(locationCod), endPromise());
  }

  function endPromise() {
    var x = 1;
    $(".divStopOff:visible")
      .find(".txtValidation")
      .each(function () {
        if ($(this).val() == "") {
          x = 0;
          $(this).css("border", "1px solid #f44336");
          $(this).closest(".divHide").find(".divAdd").fadeIn(200);
          swal(
            <div style={{ width: "450px", padding: "10px" }}>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ borderLeft: "3px solid #FFE900" }}
                >
                  <div className="col-lg-2">
                    <img
                      src="Image/complain.png"
                      style={{ width: "32px" }}
                    ></img>
                  </div>
                  <div className="col-lg-10" style={{ textAlign: "left" }}>
                    <p className="pError">Warning</p>
                    <p className="pErrorSub">
                      Please enter contact name and number in all locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })
      .promise()
      .done(function () {
        if (x == 1) {
          getRate();

          $("#exampleModalCenter").modal("toggle");
        }
      });
  }

  function addCard() {
    sessionStorage.setItem("addpayment", "1");
    window.open("/profile", "_blank");
  }

  function setMethod(e) {
    $(".imgCheck").hide();
    $(".divCod").css("border", "1px solid #373A41");
    $(e.currentTarget).find(".imgCheck").fadeIn(150);
    setPayment("cod");
    $(e.currentTarget).css("border", "1px solid #FDBF00");
  }

  function setMethodWallet(e) {
    $(".imgCheck").hide();
    $(".divCod").css("border", "1px solid #373A41");
    $(e.currentTarget).find(".imgCheck").fadeIn(150);

    $(e.currentTarget).css("border", "1px solid #FDBF00");
    if (wallet < price) {
      $(".pWalletno").show();
      setPayment("");
    } else {
      setPayment("jgowallet");
    }
  }

  function setPaymentCard(e) {
    listcard
      .filter(
        (event) =>
          event.maskedCardNumber ===
          $(e.currentTarget).find(".pCardNumber").text()
      )
      .map((data) => setCardToken(data.client_token));
    setPayment("debit_credit");

    $(".divCod").css("border", "1px solid #373A41");
    $(".imgCheck").hide();
    $(e.currentTarget).find(".imgCheck").fadeIn(150);
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
                <Link href="/">
                  <a>
                    <img
                      src="Image/logo.png"
                      className="img-fluid imgLogo"
                    ></img>
                  </a>
                </Link>
              </div>
              <div className="col-lg-9 col-sm-9 col-9">
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
            <div
              className="divPickoffmap divStopOff "
              onClick={() => (click = 1)}
            >
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
                        className="txtName txtValidation txtAdditional"
                        onChange={(evt) => updateInputValue(evt)}
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtValidation txtAdditional"
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
            <div
              className="divDropoffmap divStopOff"
              onClick={() => (click = 2)}
            >
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
                        className="txtName txtValidation txtAdditional"
                        onChange={(evt) => updateInputValue(evt)}
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber txtValidation txtAdditional"
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

            <div className="divlistStop">
              <div
                onClick={() => ((click = 3), setId(3))}
                className="divStopoff1 divStopOff div1"
                id="divStopoff"
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
                          className="txtName txtValidation txtAdditional"
                          onChange={(evt) => updateInputValue(evt)}
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtNumber txtValidation  txtAdditional"
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
                className="divStopoff2 divStopOff div1"
                id="divStopoff"
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
                          className="txtName txtValidation txtAdditional"
                          onChange={(evt) => updateInputValue(evt)}
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtNumber txtValidation  txtAdditional"
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
                className="divStopoff3 divStopOff div1"
                id="divStopoff"
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
                          className="txtName txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValue(evt)}
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtNumber txtValidation  txtAdditional"
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
                className="divStopoff4 divStopOff div1"
                id="divStopoff"
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
                          className="txtName txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValue(evt)}
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtNumber txtValidation  txtAdditional"
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
              </div>

              <div
                className="row"
                style={{ marginTop: "30px", display: "none" }}
              >
                <div className="col-lg-12">
                  <p className="pAdditional" style={{ fontSize: "0.9rem" }}>
                    Additional Services
                  </p>
                </div>
                {addservices
                  .filter((event) => event.is_active == 1)
                  .map((event) => (
                    <div className="col-lg-4">
                      <div
                        className="boxAdditional"
                        id={event.id}
                        onClick={getservice}
                      >
                        <p className="pAdditonalBox">{event.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p className="pPayment">Weight</p>
                </div>
                <div className="col-lg-2">
                  <img
                    src="Image/package.png"
                    className="img-fluid imgGps imgWeight1"
                    style={{ width: "30px", marginLeft: "18px" }}
                  ></img>
                  <img
                    src="Image/packages.png"
                    className="img-fluid imgGps imgWeight2"
                    style={{ width: "30px", marginLeft: "18px" }}
                  ></img>
                </div>
                <div className="col-lg-10" style={{ marginTop: "-10px" }}>
                  <span className="pWeight">0</span>
                  <span className="pKg">Kg</span>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min={0}
                      max={20}
                      defaultValue={0}
                      className="slider"
                      id="myRange"
                      onChange={slideChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "10px" }}>
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
                  <div className="divLoading">
                    <a className="btn btngetprice btn--loading">
                      Verify
                      <span className="spanAnimate">
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    </a>
                  </div>
                  <p className="pPrice">&#8369;{price}</p>
                  <p className="pPriceSub">
                    This is your final payment, please review and confirm your
                    destination/s. Then click place order to proceed to payment
                    page.
                  </p>
                  <button className="btnBook" onClick={gotoPayment}>
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
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div
            className="modal-content modalPayment"
            style={{ padding: "15px" }}
          >
            <div className="modal-header modalPayment">
              <p className="pMode">Mode of payment</p>
              <p className="pModeSub">
                Please make a payment below to start your booking process. If
                your payment methos is not there you can add your own below.
              </p>
            </div>
            <div className="modal-body modalPayment">
              <div className="divCod" onClick={setMethod}>
                <img src="Image/check.png" className="img-fluid imgCheck"></img>
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
                  <div className="col-lg-12">
                    <p className="pCodSub" style={{ marginTop: "10px" }}>
                      Who will pay?
                    </p>
                    <Select
                      options={locationDropdown}
                      styles={isToggled ? customStyles4 : customStyles}
                      onChange={handleChangeLocation}
                      placeholder="Select location"
                    />
                  </div>
                </div>
              </div>
              <div
                className="divCod"
                onClick={setMethodWallet}
                style={{ marginTop: "10px" }}
              >
                <img src="Image/check.png" className="img-fluid imgCheck"></img>
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <img
                      src="Image/wallet.png"
                      className="img-fluid mx-auto d-flex"
                      style={{ width: "55px" }}
                    ></img>
                  </div>
                  <div className="col-lg-7">
                    <p className="pCod">JGO Wallet</p>
                    <p className="pCodSub">
                      It will be debit in your Jgo wallet
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <p className="pWalletModal">{wallet}</p>
                  </div>
                </div>
              </div>
              <p className="pWalletno">Insufficient Jgo wallet amount</p>
              <div className="row">
                <div className="col-lg-8">
                  <p
                    className="pMode"
                    style={{ fontSize: "1rem", marginTop: "30px" }}
                  >
                    Payment Details
                  </p>
                </div>
                <div className="col-lg-4 align-self-end text-right">
                  <img
                    src="Image/refresh.png"
                    className="img-fluid imgRefresh"
                    onClick={getCard}
                  ></img>
                </div>
              </div>
              <div className="divLoading">
                <a className="btn btnanimate btn--loading">
                  Verify
                  <span className="spanAnimate">
                    <b></b>
                    <b></b>
                    <b></b>
                  </span>
                </a>
              </div>
              {listcard
                .filter((event) => event.maskedCardNumber !== null && event.cardStatus == "0")
                .map((event) => (
                  <div className="divListcard" onClick={setPaymentCard}>
                    <img
                      src="Image/check.png"
                      className="img-fluid imgCheck"
                    ></img>
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <img
                          src={
                            event.cardType == "MASTERCARD"
                              ? "Image/mastertype.png"
                              : "Image/visa.png"
                          }
                          className="imgCard"
                        ></img>
                      </div>
                      <div className="col-lg-9" style={{ padding: "0px" }}>
                        <p className="pCardType">{event.cardType}</p>
                        <p className="pCardNumber">{event.maskedCardNumber}</p>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <button className="btnPayment" onClick={addCard}>
                    Add Card
                  </button>
                </div>
                <div className="col-lg-5">
                  <a
                    className="btn btnPayment "
                    style={{ paddingTop: "10px" }}
                    onClick={btnPlaceorder}
                  >
                    Checkout
                    <span style={{ marginLeft: "50px" }}>
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
    </>
  );
}
