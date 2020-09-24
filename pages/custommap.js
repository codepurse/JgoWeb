import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "auto",
};
const style = {
  width: "100%",
  height: "100%",
  margin: "auto",
};
export class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          position: { lat: "", lng: "" },
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    Geocode.setApiKey("AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4");
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat);
    console.log(lng);

    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        global.config.place.deliver.pickoff = address;
        global.config.place.deliver.pickofflat = lat;
        global.config.place.deliver.dropofflang = lng;
      },
      (error) => {
        console.error(error);
      }
    );

    this.setState((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng },
          },
        ],
      };
    });
    this.state.markers.length = 0;
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          height: "500px",
        }}
      >
        <Map
          google={this.props.google}
          style={style}
          className={"map"}
          zoom={12}
          onClick={this.onClick}
          initialCenter={{
            lat: 14.5995,
            lng: 120.9842
          }}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4",
})(MainMap);
