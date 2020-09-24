import React, { Component } from "react";
import Googlemap from "../component/map/maploader";
import Header from "../component/header";
import "../component/map/config";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Componentdidmount from "../component/componentdidmount";

export default function backup() {
  const searchOptions = {
    componentRestrictions: { country: ["ph"] },
  };

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

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    console.log(coordinates.lat);
  };

  const handleSelectDrop = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddressDrop(value);
    setCoordinatesDrop(latLng);
    global.config.place.deliver.dropofflat = coordinatesDrop.lat;
    global.config.place.deliver.dropofflang = coordinatesDrop.lng;
    console.log(coordinates.lat);
  };

  return (
    <>
      <div className="container-fluid conMap h-100">
        <Componentdidmount></Componentdidmount>

        <Header></Header>
        <div className="row align-items-center h-100">
          <div className="col-lg-6 colLeft">
            <p className="pPick">
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid"
                style={{ marginRight: "10px" }}
              ></img>{" "}
              Pick Up Location
            </p>
            <input
              type="text"
              className="txtPickup"
              defaultValue={global.config.place.deliver.pickoff}
            ></input>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
              searchOptions={searchOptions}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    value={global.config.place.deliver.pickoff}
                    {...getInputProps({
                      className: "location-search-input-map",
                    })}
                  />

                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? {
                            backgroundColor: "#fafafa",
                            cursor: "pointer",
                          }
                        : {
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                          };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className: "input-suggestion",
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <p className="pPick-up"></p>
            <p className="pPick" style={{ marginTop: "30px" }}>
              {" "}
              <img
                src="Image/mapgps.svg"
                className="img-fluid"
                style={{ marginRight: "15px" }}
              ></img>
              Drop Off Location
            </p>
            <PlacesAutocomplete
              value={addressDrop}
              onChange={setAddressDrop}
              onSelect={handleSelectDrop}
              searchOptions={searchOptions}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    value="asdasdasd"
                    {...getInputProps({
                      className: "location-search-input-map",
                    })}
                  />

                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? {
                            backgroundColor: "#fafafa",
                            cursor: "pointer",
                          }
                        : {
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                          };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className: "input-suggestion",
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <input
              type="text"
              className="txtDropoff"
              defaultValue={global.config.place.deliver.dropoff}
            ></input>
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
                  <p className="pNext">Next >></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 colMap">
            <Googlemap></Googlemap>
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
