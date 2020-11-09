import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './trackingmap';
import "./config";


const googleMapsApiKey = "AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4";


const track = tracks;    


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
      markers={track}
      loadingElement={loadingElement || <div style={{height: `100%`, width: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "100vh", width: "100%"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      
      defaultZoom={Number(defaultZoom)}
    />
  );
};


export default App;