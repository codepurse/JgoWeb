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
    try {
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
          } else {
          }
        }
      );
    
    } catch (e) {}
  }, [props]);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    directions && (
      <DirectionsRenderer
        directions={directions}
        options={{
          polylineOptions: {
            strokeOpacity: 1,
            strokeColor: "#424242",
          },
          markerOptions: {
            icon: {
              scaledSize: new google.maps.Size(35, 35),
              url: "",
            },
          },
        }}
      />
    )
  );
}

const style = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#46bcec"
          },
          {
              "visibility": "on"
          }
      ]
  }
]

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultCenter={props.defaultCenter}
      defaultZoom={props.defaultZoom}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        styles: style,
      }}
    >
      {props.markers.map((marker, index, places) => {
        const position = { lat: marker.lat, lng: marker.lng };

        return <Marker key={index} position={position} icon={marker.icon} />;
      })}
      <MapDirectionsRenderer
        places={props.markers}
        travelMode={google.maps.TravelMode.DRIVING}
      />
    </GoogleMap>
  );
});

export default Map;
