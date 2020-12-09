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
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f5f5f2"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.medical",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "color": "#71c8d4"
          }
      ]
  },
  {
      "featureType": "landscape",
      "stylers": [
          {
              "color": "#e5e8e7"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "color": "#8ba129"
          }
      ]
  },
  {
      "featureType": "road",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#c7c7c7"
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "color": "#a0d3d3"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "color": "#91b65d"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "gamma": 1.51
          }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road"
  },
  {
      "featureType": "road"
  },
  {},
  {
      "featureType": "road.highway"
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
