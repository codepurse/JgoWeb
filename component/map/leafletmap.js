import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import "./config";
import Geocode from "react-geocode";
import L from "leaflet";
import { geocodeByAddress } from "react-google-places-autocomplete";



const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

let icon = L.icon({
  iconUrl: ('../Image/navigation.png'),

})

class MapExample extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      key: 1,
      address: "",
    };
    this.myRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
   
  }

  componentDidMount() {
      setTimeout(
        () =>  this.myRef.current.leafletElement.invalidateSize(), 
        100
      );
  }

  componentDidMount() {
  this.interval = setInterval(() => this.myRef.current.leafletElement.invalidateSize(), 1000);
}

  handleClick(e) {
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);
    Geocode.setApiKey("AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4");

    Geocode.fromLatLng(e.latlng.lat, e.latlng.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        global.config.place.deliver.pickoff = address;
        global.config.place.deliver.pickofflat = e.latlng.lat;
        global.config.place.deliver.dropofflang = e.latlng.lng;
        this.setState({ address: address });
      },
      (error) => {
        console.error(error);
      }
    );

    this.setState({ currentPos: e.latlng });
  }

  render() {
    return (
      <Map
        ref={this.myRef}
        className="map"
        center={this.props.center}
        zoom={this.props.zoom}
        onClick={this.handleClick}
        fullscreenControl = {true}
      >
          <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        {this.state.currentPos && (
          <MyMarker position={this.state.currentPos} icon = {icon}>
            <Popup position={this.state.currentPos}>
              Current location: <pre>{this.state.address}</pre>
            </Popup>
          </MyMarker>
        )}
      </Map>
    );
  }
}

export default MapExample;
