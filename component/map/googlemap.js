import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";
import "./config";

function MapDirectionsRenderer(props) {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { places, travelMode } = props;

    const waypoints = places.map((p) => ({
      location: { lat: p.lat, lng: p.lng },
      stopover: true,
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else{
          
        }
      }
    );
  });

  if (error) {
    return <h1>{error}</h1>;
  }
  return directions && <DirectionsRenderer directions={directions} />;
}

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
      defaultOptions={{fullscreenControl: false, mapTypeControl: false, scaleControl: false, streetViewControl: false,}}
    >
      {props.markers.map((marker, index) => {
        const position = { lat: marker.lat, lng: marker.lng };
        return <Marker key={index} position={position} />;
      })}
      <MapDirectionsRenderer
        places={props.markers}
        travelMode={google.maps.TravelMode.DRIVING}
      />
    </GoogleMap>
  ))
);

export default Map;
