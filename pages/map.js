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

export default function map() {
  const router = useRouter();
  var places_data = coordinate;
  var click;

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
    setAddress({
      value: localStorage.getItem("address"),
      label: localStorage.getItem("address"),
    });
    setAddressDrop({
      value: localStorage.getItem("addressDrop"),
      label: localStorage.getItem("addressDrop"),
    });
  }, []);

  {
    /* All array and variables needed */
  }
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
    setAddressDrop(value);
    setCoordinatesDrop(latLng);
    try {
      var objIndex = places_data.findIndex((obj) => obj.id == click);
      (places_data[objIndex].lat = latLng.lat),
        (places_data[objIndex].lng = latLng.lng),
        console.log(coordinate);
      router.push("");
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "2",
      };
      coordinate.push(destination);
      router.push("");
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
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "3",
      };
      coordinate.push(destination);
      router.push("");
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
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "4",
      };
      coordinate.push(destination);
      router.push("");
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
  function deleteAdd() {
    var index = places_data
      .map((x) => {
        return x.id;
      })
      .indexOf(click);
    places_data.splice(index, 1);
    console.log(places_data);
    router.push("");
  }

  return (
    <>
      <Header></Header>
      <div className="container-fluid conMap">
        <Componentdidmount></Componentdidmount>

        <div className="row">
          <div className="col-lg-6 colLeft">
            <div
              className="row align-items-center"
              style={{ padding: "40px 0px" }}
            >
              <div className="col-lg-4">
                <img src="Image/logo.png" className="img-fluid imgLogo"></img>
              </div>
              <div className="col-lg-8">
                <ul className="my-row">
                  <li>HOME</li>
                  <li>DELIVER</li>
                  <li>CONTACT</li>
                  <li>LOGIN</li>
                </ul>
              </div>
            </div>

            {/* Pick off */}
            <p className="pPick">
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid"
                style={{ marginRight: "10px" }}
              ></img>{" "}
              Pick Up Location
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
                <p className="pAdd">&#x2b; Add details</p>
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="txtName"
                        onChange={(evt) => updateInputValue(evt)}
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber"
                        onChange={(evt) => updateInputValueAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
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
              Drop Off Location
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
                <p className="pAdd">&#x2b; Add details</p>
                <div className="divAdd">
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        onChange={(evt) => updateInputValue(evt)}
                        className="txtName"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop off number 2 */}
            <div
              onClick={() => (click = 3)}
              style={{ display: "none" }}
              className="divStopoff1 divStopOff"
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
                style={{ width: "95%", marginLeft: "5%" }}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "3",
                    value: addressDrop1,
                    onChange: handleChangeDrop1,
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
                ></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
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
                        className="txtName"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop off number 3 */}
            <div
              onClick={() => (click = 4)}
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
                style={{ width: "95%", marginLeft: "5%" }}
              >
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "4",
                    value: addressDrop2,
                    onChange: handleChangeDrop2,
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
                ></img>
                <img
                  src="Image/remove.png"
                  className="img-fluid  imgDelete"
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
                        className="txtName"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtNumber"
                        onChange={(evt) => updateInputValueNumber(evt)}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="txtAdd"
                        onChange={(evt) => updateInputAdd(evt)}
                        placeholder="Blk/Floor/Unit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btnAddStopoff">Add Stop-off</button>
            <p className="pNote">Note: Delivery only within Metro Manila</p>
            <div className="divCategory">
              <p className="pPick" style={{ fontSize: "1rem" }}>
                Category
              </p>
              <div className="row">
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
                  <p className="pAdditional">Additional Services</p>
                </div>
                <div className="col-lg-3 p-1">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Insulated Box</p>
                  </div>
                </div>
                <div className="col-lg-3 p-1">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Cash Handling</p>
                  </div>
                </div>
                <div className="col-lg-3 p-1">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Queueing Service</p>
                  </div>
                </div>
                <div className="col-lg-3 p-1">
                  <div className="boxAdditional">
                    <p className="pAdditonalBox">Pabili Service</p>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "25px", padding: "0px" }}
              >
                <div className="col-lg-6" style={{ paddingLeft: "0px;" }}>
                  <div className="form-inline">
                    <img
                      src="Image/mastercard.svg"
                      className="img-fluid"
                      style={{ width: "50px" }}
                    ></img>
                    <p
                      className="pCardNumber"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Mastercard 8278
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src="Image/instant.svg"
                    className="img-fluid imgInstant"
                  ></img>
                </div>
                <div className="col-lg-12">
                  <Link href="">
                    <p className="pNext">Next >></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 colMap">
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
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Mode of Payment
              </h5>
            </div>
            <div className="modal-body">
              <div className="form-inline formCard">
                <img
                  src="Image/mastercard.svg"
                  className="img-fluid"
                  style={{ width: "35px" }}
                ></img>
                <p
                  className="pCardNumberModal"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Mastercard 8278
                </p>
              </div>
              <div className="form-inline formCard">
                <img
                  src="Image/visa.png"
                  className="img-fluid"
                  style={{ width: "35px" }}
                ></img>
                <p
                  className="pCardNumberModal"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Visa 8278
                </p>
              </div>
              <div className="form-inline formCard">
                <img
                  src="Image/cash.png"
                  className="img-fluid"
                  style={{ width: "35px" }}
                ></img>
                <p
                  className="pCardNumberModal"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Cash on delivery
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img src="Image/instant.svg" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <button className="btnBookModal">BOOK</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
