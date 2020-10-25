import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './googlemap';
import "./config";


const googleMapsApiKey = "AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4";

const places = coordinatebook;

const App = props => {
  
  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    
    <Map
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        googleMapsApiKey +
        '&libraries=geometry,drawing,places'
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "100vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      
      defaultZoom={defaultZoom || 11}
    />
  );
};


export default App;