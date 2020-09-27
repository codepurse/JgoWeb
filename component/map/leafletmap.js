import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker, withLeaflet } from "react-leaflet";
import "./config";
import Geocode from "react-geocode";
import { geocodeByAddress } from "react-google-places-autocomplete";

const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

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
      >
        <TileLayer    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        {this.state.currentPos && (
          <MyMarker position={this.state.currentPos}>
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
