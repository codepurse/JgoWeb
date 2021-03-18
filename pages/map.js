import React, { Component, useState, useEffect } from "react";
import Googlemap from "../component/map/maploader";
import Header from "../component/header";
import { useRouter } from "next/router";
import "../component/map/config";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";
import DatePicker from "react-datepicker";
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
import "../services/api.service";

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
  const [latestbook, setLatestbook] = React.useState("");
  const [pricejgowallet, setPricejgowallet] = React.useState("");
  const [paymentchoice, setPaytmentchoice] = React.useState("");
  const [codselectlocation, setCodselectlocation] = React.useState([]);
  const [listdistance, setListdistance] = React.useState([]);
  const [baserate, setBaserate] = React.useState("");
  const [perkm, setPerkm] = React.useState("");
  const [platformfee, setPlatformfee] = React.useState("");
  const [totaldropoff, setTotaldropoff] = React.useState("");
  const [totalkm, setTotalkm] = React.useState("");
  const [smsfee, setSmsfee] = React.useState("");
  const [weightfee, setWeightfee] = React.useState("");
  const [zoningfee, setZoningfee] = React.useState("");
  const [statusschedule, setStatusschedule] = React.useState("");
  const [scheduletime, setScheduledTime] = React.useState("");
  const [formattime, setFormattime] = React.useState("");
  const [formatdate, setFormatdate] = React.useState("");
  const [numberbooking, setNumberbooking] = React.useState("");

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

  var fullscreen = "false";

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function changeScheduled(date) {
    setFormattime(moment(date).format("H:mm"));
    setFormatdate(moment(date).format("YYYY-MM-DD"));
    $(".react-datepicker__input-container input").css("borderColor", "#2c2c2c");
    setScheduledTime(date);
  }

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
    if (
      localStorage.getItem("pickofflat") &&
      localStorage.getItem("dropofflat")
    ) {
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

        global.config.place.deliver.refresh = "1";
      }
    } else {
      window.location.href = "/main";
    }
  } else {
  }

  {
    /* Modal for custom map */
  }

  function btnAddstop() {
    var clearstop = 0;
    $(".div1:visible")
      .each(function () {
        if (localStorage.getItem("theme_status") === "light") {
          if (
            $(this).find(".css-121v2h3-singleValue").text().length == 0 &&
            $(this).css("display") == "table-footer-group"
          ) {
            $(this)
              .find(".css-riax9o-control")
              .css("border", "1px solid #ED3450");
            window.reactFunction();
            clearstop = 1;
            return false;
          }
        } else {
          if (
            $(this).find(".css-5sz5u5-singleValue").text().length == 0 &&
            $(this).css("display") == "table-footer-group"
          ) {
            $(this)
              .find(".css-kvzrv0-control")
              .css("border", "1px solid #ED3450");
            window.reactFunction();
            clearstop = 1;
            return false;
          }
        }
      })
      .promise()
      .done(function () {
        if (clearstop == 0) {
          $(".div1:visible")
            .each(function () {
              $(this).attr("style", "display: block");
            })
            .promise()
            .done(function () {
              if (!stop3) {
                $(".divStopoff1").appendTo(".divlistStop");
                $(".divStopoff1").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop4) {
                $(".divStopoff2").appendTo(".divlistStop");
                $(".divStopoff2").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop5) {
                $(".divStopoff3").appendTo(".divlistStop");
                $(".divStopoff3").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop6) {
                $(".divStopoff4").appendTo(".divlistStop");
                $(".divStopoff4").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop7) {
                $(".divStopoff5").appendTo(".divlistStop");
                $(".divStopoff5").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop8) {
                $(".divStopoff6").appendTo(".divlistStop");
                $(".divStopoff6").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop9) {
                $(".divStopoff7").appendTo(".divlistStop");
                $(".divStopoff7").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop10) {
                $(".divStopoff8").appendTo(".divlistStop");
                $(".divStopoff8").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop11) {
                $(".divStopoff9").appendTo(".divlistStop");
                $(".divStopoff9").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop12) {
                $(".divStopoff10").appendTo(".divlistStop");
                $(".divStopoff10").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop13) {
                $(".divStopoff11").appendTo(".divlistStop");
                $(".divStopoff11").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop14) {
                $(".divStopoff12").appendTo(".divlistStop");
                $(".divStopoff12").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (!stop15) {
                $(".divStopoff13").appendTo(".divlistStop");
                $(".divStopoff13").attr(
                  "style",
                  "display: table-footer-group !important"
                );
                return false;
              } else if (
                stop3 &&
                stop4 &&
                stop5 &&
                stop6 &&
                stop7 &&
                stop8 &&
                stop9 &&
                stop10 &&
                stop11 &&
                stop12 &&
                stop13 &&
                stop14 &&
                stop15
              ) {
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
                        <div
                          className="col-lg-10"
                          style={{ textAlign: "left" }}
                        >
                          <p className="pError">Warning</p>
                          <p className="pErrorSub">Maximum limit stop off</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            });
        }
      });
  }

  function goFull() {
    if (fullscreen == "false") {
      fullscreen = "true";
      $(".map").css("height", $(window).height());
      $(".mapLeaflet").css("height", $(window).height());
      $(".mapLeaflet").css("width", $(window).width());
    } else {
      fullscreen = "false";
      $(".map").css("height", "500px");
      $(".mapLeaflet").css("height", "500px");
      $(".mapLeaflet").css("width", "800px");
    }
  }

  function opensweetalert() {
    global.config.place.deliver.pickofflat = "";
    swal(
      <div
        className="mapLeaflet"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "5px",
          width: "800px",
          transition: "0.2s;",
        }}
      >
        <Leaflet></Leaflet>
        <img
          src="Image/fullscreen.png"
          className="img-fluid imgFull"
          onClick={goFull}
        ></img>
        <p className="pDrag">Click the map to set location</p>
        <button className="btnSet" onClick={setAdd}>
          SET
        </button>
      </div>
    );
  }

  useEffect(() => {
    getRateloop();
    getRatewallet();
    clearInterval(window.interval);
    clearInterval(window.intervalrefresh);
    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const api = appglobal.api.base_api + appglobal.api.all_booking;
    axios
      .post(api, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        setNumberbooking(result.data.count);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    $(".modal-backdrop").hide();
    setBaserate(localStorage.getItem("baserate"));
    setPerkm(localStorage.getItem("perkm"));
    setPlatformfee(localStorage.getItem("platform"));
    setTotaldropoff(localStorage.getItem("adddropoff"));
    setTotalkm(localStorage.getItem("totalkm"));
    setSmsfee(localStorage.getItem("smsfee"));
    setWeightfee(localStorage.getItem("weightfee"));
    setZoningfee(localStorage.getItem("zoningfee"));
  }, []);

  useEffect(() => {
    $("#__next ").css("background-color", "#1E2025");

    $(".modal-backdrop").hide();
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

    const options1 = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      },
    };
    const api = appglobal.api.base_api + appglobal.api.additional_services;

    axios
      .get(api, options1)
      .then((result) => {
        setAddservices(result.data.data);
      })
      .catch((err) => {});

    const apiUrl2 = appglobal.api.base_api + appglobal.api.card_details;

    axios.post(apiUrl2, {}, options1).then((result) => {
      setListcard(result.data.user_card_details);

      if (result.data.user_card_details) {
        $("pNocard").show();
      } else {
        $("pNocard").hide();
      }
    });

    const apiUrl_wallet =
      appglobal.api.base_api + appglobal.api.customer_profile;
    axios.post(apiUrl_wallet, {}, options1).then((result) => {
      setWallet(result.data.data.get_jgo_wallet.balance);
    });

    const apilatest = appglobal.api.base_api + appglobal.api.latest_booking;
    axios
      .post(apilatest, { customer_id: AuthService.getId() }, options1)
      .then((result) => {
        if (!result.data.data) {
        } else {
          setLatestbook(result.data.data.id);
        }
      });
  }, []);

  {
    /* All array and variables needed */
  }
  const [payment, setPayment] = React.useState("cod");
  const [price, setPrice] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [address, setAddress] = useState(null);
  const [addressDrop, setAddressDrop] = React.useState("");
  const [addressStop, setAddressStop] = React.useState("");
  const [stop, setStop] = React.useState("");
  const [stop3, setStop3] = React.useState("");
  const [stop4, setStop4] = React.useState("");
  const [stop5, setStop5] = React.useState("");
  const [stop6, setStop6] = React.useState("");
  const [stop7, setStop7] = React.useState("");
  const [stop8, setStop8] = React.useState("");
  const [stop9, setStop9] = React.useState("");
  const [stop10, setStop10] = React.useState("");
  const [stop11, setStop11] = React.useState("");
  const [stop12, setStop12] = React.useState("");
  const [stop13, setStop13] = React.useState("");
  const [stop14, setStop14] = React.useState("");
  const [stop15, setStop15] = React.useState("");
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
    var n =
      str.includes("Metro Manila") ||
      str.includes("Laguna, Philippines") ||
      str.includes("Cainta, Rizal") ||
      str.includes("Cavite, Philippines");
    if (n === true) {
      localStorage.setItem("pickofflat", latLng.lat);
      localStorage.setItem("pickofflng", latLng.lng);
      localStorage.setItem("address", value.label);
      setAddress(value);

      setCoordinates(latLng);
      try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          (places_data[objIndex].address = value.label),
          router.push("/map");
        getRateloop();
        getRatewallet();
      } catch (err) {
        const destination = {
          address: value.label,
          lat: latLng.lat,
          lng: latLng.lng,
          id: "1",
        };
        coordinate.push(destination);

        router.push("/map");
        getRateloop();
        getRatewallet();
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
    var n =
      str.includes("Metro Manila") ||
      str.includes("Laguna, Philippines") ||
      str.includes("Cainta, Rizal") ||
      str.includes("Cavite, Philippines");
    if (n === true) {
      localStorage.setItem("dropofflat", latLng.lat);
      localStorage.setItem("dropofflng", latLng.lng);
      localStorage.setItem("addressDrop", value.label);
      setAddressDrop(value);
      setCoordinatesDrop(latLng);
      try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          (places_data[objIndex].address = value.label),
          router.push("/map");
        getRateloop();
        getRatewallet();
      } catch (err) {
        const destination = {
          lat: latLng.lat,
          lng: latLng.lng,
          id: "2",
        };
        coordinate.push(destination);
        getRateloop();
        getRatewallet();
        router.push("/map");
        getRateloop();
        getRatewallet();
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

  const handleChangeStop = async (value, e) => {
    const results = await geocodeByAddress(value.label);
    const latLng = await getLatLng(results[0]);

    var str = value.label;
    var n =
      str.includes("Metro Manila") ||
      str.includes("Laguna, Philippines") ||
      str.includes("Cainta, Rizal") ||
      str.includes("Cavite, Philippines");
    if (n === true) {
      if (click === 3) {
        setStop3(value);
      }
      if (click === 4) {
        setStop4(value);
      }
      if (click === 5) {
        setStop5(value);
      }
      if (click === 6) {
        setStop6(value);
      }
      if (click === 7) {
        setStop7(value);
      }
      if (click === 8) {
        setStop8(value);
      }
      if (click === 9) {
        setStop9(value);
      }
      if (click === 10) {
        setStop10(value);
      }
      if (click === 11) {
        setStop11(value);
      }
      if (click === 12) {
        setStop12(value);
      }
      if (click === 13) {
        setStop13(value);
      }
      if (click === 14) {
        setStop14(value);
      }
      if (click === 15) {
        setStop15(value);
      }

      setcoordinateStop(latLng);

      try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = latLng.lat),
          (places_data[objIndex].lng = latLng.lng),
          (places_data[objIndex].address = value.label),
          router.push("/map");
        getRateloop();
        getRatewallet();
      } catch (err) {
        const destination = {
          address: value.label,
          lat: latLng.lat,
          lng: latLng.lng,
          id: click,
        };
        coordinate.push(destination);
        router.push("/map");
        getRateloop();
        getRatewallet();
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

  function getWeight(e) {
    $(".pWeight").text(e.target.value);
    if (e.target.value < 6) {
      setWeight("0-5KG");
      $(".imgWeight1").fadeIn(150);
      $(".imgWeight2").fadeOut(150);
    } else if (e.target.value < 11) {
      setWeight("6-10KG");
    } else if (e.target.value < 16) {
      setWeight("11-15KG");
      $(".imgWeight1").fadeOut(150);
      $(".imgWeight2").fadeIn(150);
    } else if (e.target.value < 21) {
      setWeight("16-20KG");
      $(".imgWeight1").fadeOut(150);
      $(".imgWeight2").fadeIn(150);
    }
  }

  function setWeightrate(e) {
    getRateloop();
  }

  function getservice(e) {
    loopservices = 0;
    var idservice = $(e.currentTarget).attr("id");

    if (addlistservice.indexOf(idservice) < 0) {
      addlistservice.push(idservice);

      getRateloop();
      getRatewallet();
    } else {
      for (var i in addlistservice) {
        if (addlistservice[i] == idservice) {
          addlistservice.splice(i, 1);

          break;
        }
      }
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
    getRateloop();
    getRatewallet();
  }

  {
    /* Passing name in additional details based on click value */
  }
  function updateInputValue(evt) {
    $(evt.currentTarget).css("border", "1px solid #2c2c2c");
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      places_data[objIndex].detailsname = evt.target.value;
    } catch (err) {}
  }

  function numOnly(event) {
    let value = event.currentTarget.value;
    let numbers = value.replace(/[^0-9]/g, "");
    event.currentTarget.value = numbers;
  }

  {
    /* Passing number in additional details based on click value */
  }
  function updateInputValueNumber(evt) {
    $(evt.currentTarget).css("border", "1px solid #2c2c2c");
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      places_data[objIndex].detailsnumber = evt.target.value;
    } catch (err) {}
  }

  function numberonly(e) {}

  {
    /* Passing address in additional details based on click value */
  }
  function updateInputValueAdd(evt) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      places_data[objIndex].detailsAdd = evt.target.value;
    } catch (err) {}
  }

  const [category_type, setCategory] = React.useState("");

  function handleChangeCategory(event) {
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      places_data[objIndex].category = event.value;
    } catch (err) {}
  }

  function handleChangeLocation(event) {
    setcodLoc(event.value);
    setCodselectlocation({ value: event.value, label: event.label });
  }

  function tryduration() {}

  {
    /* Passing lat, Lng and geocode of the address in component this function is for the custom map */
  }
  function setAdd() {
    fullscreen = "false";
    if (global.config.place.deliver.pickofflat == "") {
      swal.close();
      return false;
    } else if (click === 1) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      coordinates.address = global.config.place.deliver.pickoff;
      setAddress({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff,
      });
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = coordinates.lat),
        (places_data[objIndex].lng = coordinates.lng),
        (places_data[objIndex].address = coordinates.address);
      getRateloop();
      getRatewallet();
      router.push("/map");
    } else if (click === 2) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      coordinates.address = global.config.place.deliver.pickoff;
      setAddressDrop({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff,
      });
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = coordinates.lat),
        (places_data[objIndex].lng = coordinates.lng),
        (places_data[objIndex].address = coordinates.address);

      getRateloop();
      getRatewallet();
      router.push("/map");
    } else if (click > 2) {
      var x = "setStop" + click;
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      coordinates.address = global.config.place.deliver.pickoff;
      if (click === 3) {
        setStop3({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 4) {
        setStop4({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 5) {
        setStop5({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 6) {
        setStop6({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 7) {
        setStop7({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 8) {
        setStop8({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 8) {
        setStop8({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 9) {
        setStop9({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 10) {
        setStop10({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 11) {
        setStop11({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 12) {
        setStop12({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 13) {
        setStop13({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 14) {
        setStop14({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      if (click === 15) {
        setStop15({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff,
        });
      }
      try {
        var objIndex = places_data.findIndex((obj) => obj.id == click);
        (places_data[objIndex].lat = coordinates.lat),
          (places_data[objIndex].lng = coordinates.lng),
          (places_data[objIndex].address = coordinates.address);

        router.push("/map");
        getRateloop();
        getRatewallet();
      } catch (e) {
        const destination = {
          address: global.config.place.deliver.pickoff,
          lat: coordinates.lat,
          lng: coordinates.lng,
          id: click,
        };
        coordinate.push(destination);
        router.push("/map");
        getRateloop();
        getRatewallet();
      }
    }
    swal.close();
  }

  {
    /* Function to delete index in array */
  }
  function invalidLoc() {
    $("#" + click_id)
      .closest(".divStopOff")
      .find(".css-5sz5u5-singleValue")
      .contents()
      .filter((_, el) => el.nodeType === 3)
      .remove();

    for (var i = 0; i < places_data.length; i++) {
      if (places_data[i].id == click_id) {
        places_data.splice(i, 1);
      }
    }
  }

  function deleteAdd(e) {
    $(e.currentTarget)
      .closest(".div1")
      .find(".css-kvzrv0-control")
      .css("border", "1px solid #2c2c2c");
    $(e.currentTarget).closest(".divStopOff").hide();
    $(e.currentTarget).closest(".divStopOff").find(".txtAdditional").val("");
    if (e.currentTarget.id == 3) {
      setStop3(null);
    }
    if (e.currentTarget.id == 4) {
      setStop4(null);
    }
    if (e.currentTarget.id == 5) {
      setStop5(null);
    }
    if (e.currentTarget.id == 6) {
      setStop6(null);
    }
    if (e.currentTarget.id == 7) {
      setStop6(null);
    }
    if (e.currentTarget.id == 8) {
      setStop8(null);
    }
    if (e.currentTarget.id == 9) {
      setStop9(null);
    }
    if (e.currentTarget.id == 10) {
      setStop10(null);
    }
    if (e.currentTarget.id == 11) {
      setStop11(null);
    }
    if (e.currentTarget.id == 12) {
      setStop12(null);
    }
    if (e.currentTarget.id == 13) {
      setStop13(null);
    }
    if (e.currentTarget.id == 14) {
      setStop14(null);
    }
    if (e.currentTarget.id == 15) {
      setStop15(null);
    }

    for (var i = 0; i < places_data.length; i++) {
      if (places_data[i].id == e.currentTarget.id) {
        places_data.splice(i, 1);
      }
    }

    router.push("/map");
    $(".div1:visible").each(function () {
      $(this).attr("style", "display: block !important");
    });
    getRateloop();
    getRatewallet();
  }

  function getRatewallet() {
    $(".imgInfo").hide();
    $(".pPrice").hide();
    $(".divLoading").show();
    const apiUrl_rate = appglobal.api.base_api + appglobal.api.calculate_rate;
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };
    let ratedata = new FormData();
    var i;
    var j;
    ratedata.set("payment_method", "jgowallet");
    ratedata.set("weight", weight);
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    for (i = 1, j = 0; i < coordinate.length; ++i, ++j) {
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[drop_off_latitude]",
        coordinate[i].lat
      );
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[drop_off_longitude]",
        coordinate[i].lng
      );
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[booking_order]",
        i.toString()
      );
    }
    addlistservice.map((addservice) => {
      ratedata.set("additional_services[" + loopservices + "]", addservice),
        (loopservices = loopservices + 1);
    });
    axios
      .post(apiUrl_rate, ratedata, options)
      .then((result) => {
        var price = result.data.price;
        setPricejgowallet(Number(price).toFixed(2));
        $(".divLoading").hide();
        $(".pPrice").show();
      })
      .catch((err) => {});
  }

  function trylang() {
   console.log(statusschedule)
  }

  function getRateloop() {
    $(".imgInfo").hide();
    $(".pPrice").hide();
    $(".divLoading").show();
    const apiUrl_rate = appglobal.api.base_api + appglobal.api.calculate_rate;
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    };
    let ratedata = new FormData();
    var i;
    var j;
    ratedata.set("payment_method", "cod");
    ratedata.set("weight", weight);
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    for (i = 1, j = 0; i < coordinate.length; ++i, ++j) {
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[drop_off_latitude]",
        coordinate[i].lat
      );
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[drop_off_longitude]",
        coordinate[i].lng
      );
      ratedata.set(
        "drop_off_locations[" + j + "]" + "[booking_order]",
        i.toString()
      );
    }
    addlistservice.map((addservice) => {
      ratedata.set("additional_services[" + loopservices + "]", addservice),
        (loopservices = loopservices + 1);
    });
    axios
      .post(apiUrl_rate, ratedata, options)
      .then((result) => {
        var price = result.data.price;
        console.log(result)
        setPrice(Number(price).toFixed(2));
        setListdistance(result.data.distance);
        $(".imgInfo").show();
        $(".divLoading").hide();
        $(".pPrice").show();
        try {
          setBaserate(result.data.breakdown.base_rate);
          setPerkm(result.data.breakdown.per_km);
          setPlatformfee(result.data.breakdown.platform_fee);
          setTotaldropoff(result.data.breakdown.totalAdditionalDropOffRate);
          setTotalkm(result.data.breakdown.totalDistance);
          setSmsfee(result.data.breakdown.vonage_fee);
          setWeightfee(result.data.breakdown.weight_fee);
          setZoningfee(result.data.breakdown.zoning_fee);
        } catch (e) {}
      })
      .catch((err) => {});
  }

  function getRate() {
    $(".imgInfo").hide();
    $(".pPrice").hide();
    $(".divLoading").show();
    let ratedata = new FormData();
    ratedata.set("payment_method", "cod");
    ratedata.set("weight", weight);
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
    if (coordinate[6]) {
      ratedata.set(
        "drop_off_locations[5][drop_off_latitude]",
        coordinate[6].lat
      );
      ratedata.set(
        "drop_off_locations[5][drop_off_longitude]",
        coordinate[6].lng
      );
      ratedata.set("drop_off_locations[5][booking_order]", "6");
    }
    if (coordinate[7]) {
      ratedata.set(
        "drop_off_locations[6][drop_off_latitude]",
        coordinate[7].lat
      );
      ratedata.set(
        "drop_off_locations[6][drop_off_longitude]",
        coordinate[7].lng
      );
      ratedata.set("drop_off_locations[6][booking_order]", "7");
    }
    if (coordinate[8]) {
      ratedata.set(
        "drop_off_locations[7][drop_off_latitude]",
        coordinate[8].lat
      );
      ratedata.set(
        "drop_off_locations[7][drop_off_longitude]",
        coordinate[8].lng
      );
      ratedata.set("drop_off_locations[7][booking_order]", "8");
    }
    if (coordinate[9]) {
      ratedata.set(
        "drop_off_locations[8][drop_off_latitude]",
        coordinate[9].lat
      );
      ratedata.set(
        "drop_off_locations[8][drop_off_longitude]",
        coordinate[9].lng
      );
      ratedata.set("drop_off_locations[8][booking_order]", "9");
    }
    if (coordinate[10]) {
      ratedata.set(
        "drop_off_locations[9][drop_off_latitude]",
        coordinate[10].lat
      );
      ratedata.set(
        "drop_off_locations[9][drop_off_longitude]",
        coordinate[10].lng
      );
      ratedata.set("drop_off_locations[9][booking_order]", "10");
    }
    if (coordinate[11]) {
      ratedata.set(
        "drop_off_locations[10][drop_off_latitude]",
        coordinate[11].lat
      );
      ratedata.set(
        "drop_off_locations[10][drop_off_longitude]",
        coordinate[11].lng
      );
      ratedata.set("drop_off_locations[10][booking_order]", "11");
    }
    if (coordinate[12]) {
      ratedata.set(
        "drop_off_locations[11][drop_off_latitude]",
        coordinate[12].lat
      );
      ratedata.set(
        "drop_off_locations[11][drop_off_longitude]",
        coordinate[12].lng
      );
      ratedata.set("drop_off_locations[11][booking_order]", "12");
    }
    if (coordinate[13]) {
      ratedata.set(
        "drop_off_locations[12][drop_off_latitude]",
        coordinate[13].lat
      );
      ratedata.set(
        "drop_off_locations[12][drop_off_longitude]",
        coordinate[13].lng
      );
      ratedata.set("drop_off_locations[12][booking_order]", "13");
    }
    if (coordinate[14]) {
      ratedata.set(
        "drop_off_locations[13][drop_off_latitude]",
        coordinate[14].lat
      );
      ratedata.set(
        "drop_off_locations[13][drop_off_longitude]",
        coordinate[14].lng
      );
      ratedata.set("drop_off_locations[13][booking_order]", "14");
    }
    if (coordinate[15]) {
      ratedata.set(
        "drop_off_locations[14][drop_off_latitude]",
        coordinate[15].lat
      );
      ratedata.set(
        "drop_off_locations[14][drop_off_longitude]",
        coordinate[15].lng
      );
      ratedata.set("drop_off_locations[14][booking_order]", "15");
    }

    addlistservice.map((addservice) => {
      ratedata.set("additional_services[" + loopservices + "]", addservice),
        (loopservices = loopservices + 1);
    });

    const apiUrl_rate = appglobal.api.base_api + appglobal.api.calculate_rate;
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
        var price = result.data.price;
        setPrice(Number(price).toFixed(2));
        setListdistance(result.data.distance);
        $(".imgInfo").show();
        $(".divLoading").hide();
        $(".pPrice").show();
        try {
          setBaserate(result.data.breakdown.base_rate);
          setPerkm(result.data.breakdown.per_km);
          setPlatformfee(result.data.breakdown.platform_fee);
          setTotaldropoff(result.data.breakdown.totalAdditionalDropOffRate);
          setTotalkm(result.data.breakdown.totalKilometerRate);
          setSmsfee(result.data.breakdown.vonage_fee);
          setWeightfee(result.data.breakdown.weight_fee);
          setZoningfee(result.data.breakdown.zoning_fee);
        } catch (e) {}
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

    const apiUrl2 = appglobal.api.base_api + appglobal.api.card_details;

    axios.post(apiUrl2, {}, options1).then((result) => {
      $(".divLoading").hide();
      setListcard(result.data.user_card_details);
      if (result.data.user_card_details) {
        $("pNocard").show();
      } else {
        $("pNocard").hide();
      }
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
      } else if (payment == "cod" && codloc.length == 0) {
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
                  <p className="pErrorSub">Please select a payment location.</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        clickpayment = 1;

        $(".btnPayment").addClass("btn--loading");
        const options = {
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/json",
            Authorization: "Bearer " + AuthService.getToken(),
          },
        };

        let ratedata = new FormData();
        var i;
        var j;
        ratedata.set("payment_method", payment);
        ratedata.set("weight", weight);
        ratedata.set("pick_up_latitude", coordinate[0].lat);
        ratedata.set("pick_up_longitude", coordinate[0].lng);
        for (i = 1, j = 0; i < coordinate.length; ++i, ++j) {
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[drop_off_latitude]",
            coordinate[i].lat
          );
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[drop_off_longitude]",
            coordinate[i].lng
          );
          ratedata.set(
            "drop_off_locations[" + j + "]" + "[booking_order]",
            i.toString()
          );
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
        var a;
        var b;
        var c;
        formdata.set("customer_id", AuthService.getId());

        formdata.set("contact_name", coordinate[0].detailsname);
        formdata.set("contact_number", coordinate[0].detailsnumber);
        formdata.set("payment_method", payment);
        formdata.set("pick_up_address", address.label);
        formdata.set("pick_up_latitude", coordinate[0].lat);
        formdata.set("pick_up_longitude", coordinate[0].lng);
        formdata.set(
          "duration",
          Math.floor(Number(durationmap / 60)) + " mins"
        );
        if (payment == "debit_credit") {
          formdata.set("client_token", cardtoken);
        } else {
        }
        if (payment == "cod") {
          formdata.set("is_collection_point", codloc);
        }
        if (statusschedule == "true") {
          formdata.set("scheduled_time", formattime);
          formdata.set("scheduled_date", formatdate);
          scheduledbook = 1;
        }
        formdata.set("weight", weight);

        for (c = 0; c < listdistance.length; ++c) {
          formdata.set(
            "drop_off_locations[" + c + "]" + "[distance]",
            listdistance[c]
          );
        }

        for (a = 1, b = 0; a < coordinate.length; ++a, ++b) {
          if (coordinate[b].detailsAdd) {
            formdata.set("note", coordinate[a].detailsAdd);
          } else {
            formdata.set("note", "No notes to display");
          }

          if (coordinate[b].category) {
            formdata.set(
              "drop_off_locations[" + b + "]" + "[category_id]",
              coordinate[a].category
            );
          } else {
            formdata.set(
              "drop_off_locations[" + b + "]" + "[category_id]",
              "6"
            );
          }

          formdata.set(
            "drop_off_locations[" + b + "]" + "[drop_off_address]",
            coordinate[a].address
          );
          formdata.set(
            "drop_off_locations[" + b + "]" + "[drop_off_latitude]",
            coordinate[a].lat
          );
          formdata.set(
            "drop_off_locations[" + b + "]" + "[drop_off_longitude]",
            coordinate[a].lng
          );
          formdata.set(
            "drop_off_locations[" + b + "]" + "[booking_order]",
            a.toString()
          );
          formdata.set(
            "drop_off_locations[" + b + "]" + "[contact_name]",
            coordinate[a].detailsname
          );
          formdata.set(
            "drop_off_locations[" + b + "]" + "[contact_number]",
            coordinate[a].detailsnumber
          );
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
          appglobal.api.base_api + appglobal.api.calculate_rate;
        const apiUrl = appglobal.api.base_api + appglobal.api.booking;

        axios
          .post(apiUrl_rate, ratedata, options)
          .then((result) => {
            formdata.set("price", parseFloat(result.data.price));

            var price = parseFloat(result.data.price);

            axios
              .post(apiUrl, formdata, options)
              .then((result) => {
                for (var pair of formdata.entries()) {
                  console.log(pair[0], pair[1]);
                }
                console.log(result);
                if (
                  result.data.status == "Failed" ||
                  result.data.status == "failed"
                ) {
                  $(".btnPayment").removeClass("btn--loading");

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
                  console.log(result);
                  for (var pair of formdata.entries()) {
                    console.log(pair[0], pair[1]);
                  }
                  localStorage.setItem("activeid", result.data.data);
                  router.push("/profile");
                }
              })
              .catch((err) => {
                consoel.log(err);
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
    $(".pWalletno").hide();

    var countlocation = 0;
    locationCod.splice(0, locationCod.length);

    const promises = coordinate.map((event) =>
      locationCod.push({
        value: Number(event.id) - 1,
        label: event.address,
      })
    );

    Promise.all(promises).then(
      setCodselectlocation(""),
      setcodLoc(""),
      setlocationDropdown(locationCod),
      endPromise()
    );
  }

  function endPromise() {
    var x = 1;
    $(".divStopOff:visible")
      .find(".txtValidation")
      .each(function () {
        if (numberbooking > 9) {
          x = 0;
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
                    <p className="pErrorSub">Maximum booking allowed is 10.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if ($(this).val() == "") {
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
        } else if ($(this).val() != "") {
          $(".txtNumber").each(function () {
            if ($(this).val() != "") {
              if ($(this).val().length < 11) {
                $(this).css("border", "1px solid red");
                x = 0;
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
                            Input a valid contact number.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } 
            } 
          });
        }
        if (statusschedule == "true") {
      
          if (scheduletime == "") {
            x = 0;
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
                      <p className="pErrorSub">Please input a valid date.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
            $(".react-datepicker__input-container input").css(
              "borderColor",
              "red"
            );
          }
        }
      })
      .promise()
      .done(function () {
        if (x == 1) {
          getRateloop();
          getRatewallet();
          setMethod();
          $("#exampleModalCenter").modal("toggle");
        }
      });
  }

  function addCard() {
    sessionStorage.setItem("addpayment", "1");
    window.open("/profile", "_blank");
  }

  function breakDown() {
    swal(
      <div
        style={{
          width: "350px",
          padding: "20px",
          backgroundColor: "#F5F5F7",
          borderRadius: "10px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="pBreakdown">Breakdown</p>
            </div>
            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Base rate</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{baserate}</p>
            </div>
            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Km fee</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{perkm}</p>
            </div>
            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Total km</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{totalkm}</p>
            </div>

            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Additional Dropoff</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{totaldropoff}</p>
            </div>

            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Weight</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{weightfee}</p>
            </div>
            <div className="col-lg-8 text-left">
              <p className="pBreakdownsub">Zoning fee</p>
            </div>
            <div className="col-lg-4 text-right">
              <p className="pBreakdownsub">{zoningfee}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function setMethod(e) {
    $(".imgCheck").hide();
    $(".divCod").css("border", "1px solid #373A41");
    $(".divCod1").find(".imgCheck").fadeIn(150);
    setPayment("cod");
    $(".divCod1").css("border", "1px solid #FDBF00");
  }

  function setMethodWallet(e) {
    $(".imgCheck").hide();
    $(".divCod").css("border", "1px solid #373A41");
    $(e.currentTarget).find(".imgCheck").fadeIn(150);

    $(e.currentTarget).css("border", "1px solid #FDBF00");
    var walletvalue = Math.floor(wallet);
    var pricevalue = Math.floor(price);
    if (walletvalue < pricevalue) {
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

  function selectTime(e) {
    if (e.currentTarget.classList.contains("divTime2")) {
      $(".divTime").css("border-color", "#2c2c2c");
      $(".imgChecktime").hide();
      $(e.currentTarget).css("border-color", "#FADD5D");
      $(e.currentTarget).find(".imgChecktime").show();
      $(".react-datepicker__input-container ").attr(
        "style",
        "display: block !important"
      );
      setStatusschedule("true");
    } else {
      $(".divTime").css("border-color", "#2c2c2c");
      $(".imgChecktime").hide();
      $(e.currentTarget).css("border-color", "#FADD5D");
      $(e.currentTarget).find(".imgChecktime").show();
      $(".divTime").css("height", "auto");
      $(".react-datepicker__input-container ").attr(
        "style",
        "display: none !important"
      );
      setStatusschedule("false");
    }
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
                onClick={trylang}
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
                  title=""
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
                        maxLength="12"
                        className="txtNumber txtValidation txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                        onInput={numOnly}
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="txtAdditional"
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
                        maxLength="12"
                        className="txtNumber txtValidation txtAdditional"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                        onInput={numOnly}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdditional"
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
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "3",
                      className: "selectPlaces",
                      value: stop3,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                    className="img-fluid imgGps"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "4",
                      value: stop4,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                    className="img-fluid imgGps"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "5",
                      value: stop5,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="5"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                    className="img-fluid imgGps"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "6",
                      value: stop6,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="6"
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
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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

              <div
                onClick={() => ((click = 7), setId(7))}
                className="divStopoff5 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg"
                    className="img-fluid imgGps"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "7",
                      value: stop7,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="7"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 7)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 8), setId(8))}
                className="divStopoff6 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "8",
                      value: stop8,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="8"
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
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 8)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 9), setId(9))}
                className="divStopoff7 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "9",
                      value: stop9,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="9"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 9)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 10), setId(10))}
                className="divStopoff8 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "10",
                      value: stop10,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="10"
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
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 10)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 11), setId(11))}
                className="divStopoff9 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "11",
                      value: stop11,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="11"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 11)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 12), setId(12))}
                className="divStopoff10 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "12",
                      value: stop12,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="12"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 12)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 13), setId(13))}
                className="divStopoff11 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "13",
                      value: stop13,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="13"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 13)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 14), setId(14))}
                className="divStopoff12 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "14",
                      value: stop14,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="14"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 14)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>

              <div
                onClick={() => ((click = 15), setId(15))}
                className="divStopoff13 divStopOff div1"
                id="divStopoff"
              >
                <p className="pPick" style={{ marginTop: "30px" }}>
                  {" "}
                  <img
                    src="Image/mapgps.svg imgGps"
                    className="img-fluid"
                    style={{ marginRight: "15px" }}
                  ></img>
                  Drop Off Location
                </p>

                <div
                  className="form-inline"
                  style={{ width: "100%", marginLeft: "5%" }}
                >
                  <GooglePlacesAutocomplete
                    selectProps={{
                      instanceId: "15",
                      value: stop15,
                      onChange: handleChangeStop,
                      styles: customStyles2,
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ph"],
                      },
                    }}
                  />
                  <img
                    src="Image/maps.png"
                    className="img-fluid imgMap1"
                    onClick={opensweetalert}
                  ></img>
                  <img
                    src="Image/remove.png"
                    className="img-fluid  imgDelete"
                    id="15"
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
                          maxLength="12"
                          className="txtNumber txtValidation  txtAdditional"
                          onChange={(evt) => updateInputValueNumber(evt)}
                          placeholder="Contact Number"
                          onInput={numOnly}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="txtAdditional"
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
                          onClick={() => (click = 15)}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="pAdd">&#x2b; Add details</p>
                </div>
              </div>
            </div>

            <button className="btnAddStopoff" onClick={btnAddstop}>
              Add drop-off
            </button>

            <div className="divCategory">
              <p
                className="pPick"
                style={{ fontSize: "0+--*.9rem", display: "none" }}
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
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-12">
                  <div className="form-inline">
                    <img
                      src="Image/clock.png"
                      className="img-fluid imgClock"
                      style={{ width: "25px" }}
                    ></img>
                    <p className="pTime">Time</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="divTime divTime2" onClick={selectTime}>
                    <img
                      src="Image/check.png"
                      className="img-fluid imgChecktime"
                      style={{ display: "none" }}
                    ></img>
                    <p className="pDivtime">Schedule</p>
                    <p className="pDivtimesub">
                      We will book your delivery with your given time and date.
                    </p>
                    <DatePicker
                      selected={scheduletime}
                      onChange={changeScheduled}
                      showTimeSelect
                      withPortal
                      minDate={new Date()}
                      placeholderText="Click to select a date"
                      filterTime={filterPassedTime}
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="divTime divTime1"
                    style={{ borderColor: "#FADD5D" }}
                    onClick={selectTime}
                  >
                    <img
                      src="Image/check.png"
                      className="img-fluid imgChecktime"
                    ></img>
                    <p className="pDivtime">Same day</p>
                    <p className="pDivtimesub">
                      We will book your delivery after your payment.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6"></div>
                <div className="col-lg-6"></div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
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
                      onMouseUp={setWeightrate}
                      onChange={getWeight}
                    />
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "15px" }}>
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
                  <div
                    className="form-inline"
                    style={{ marginTop: "5px", position: "relative" }}
                  >
                    <p className="pPrice">&#8369;{Math.floor(price)}.00</p>
                    <div style={{ postiion: "relative" }}>
                      <img
                        src="Image/information.png"
                        className="imgInfo"
                        onClick={breakDown}
                      ></img>
                    </div>
                  </div>
                  <p className="pPriceSub">
                    This is your final payment, please review and confirm your
                    destination/s. Then click place order to proceed to payment
                    page.
                  </p>
                  <button className="btnBook btnBook1" onClick={gotoPayment}>
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
            className="modal-content mode modalPayment"
            style={{ padding: "15px" }}
          >
            <div className="modal-header mode modalPayment">
              <p className="pMode">Mode of payment</p>
              <p className="pModeSub">
                Please make a payment below to start your booking process. If
                your payment method is not there you can add your own below.
              </p>
            </div>
            <div className="modal-body mode modalPayment">
              <div className="divCod divCod1" onClick={setMethod}>
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
                      Select payment location
                    </p>
                    <Select
                      options={locationDropdown}
                      value={codselectlocation}
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
                  <div className="col-lg-6">
                    <p className="pCod">JGO Wallet</p>
                    <p className="pCodSub">Deducted in your JGO wallet</p>
                    <p className="pWalletModal1">
                      {wallet}
                      <span className="pPoints">points</span>
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="pWalletModal">&#8369;{pricejgowallet}</p>
                  </div>
                </div>
              </div>
              <p className="pWalletno">Insufficient Jgo wallet amount</p>
              <div className="row d-none">
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
              <p className="text-center pNocard d-none">
                No credit/debit card to display
              </p>
              <div className="divLoading d-none">
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
                .filter(
                  (event) =>
                    event.maskedCardNumber !== null && event.cardStatus == "0"
                )
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
                  <button className="btnPayment">Coming soon</button>
                </div>
                <div className="col-lg-5">
                  <a
                    className="btn btnPayment btnpad"
                    style={{ color: " white" }}
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
