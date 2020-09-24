import React, { Component } from "react";
import { render } from "react-dom";
import dynamic from 'next/dynamic'


const Leaflet = dynamic(
    () => import('../map/leafletmap'),
    { ssr: false }
  )


const App = () => {
  return <Leaflet zoom={14} center={{ lat: 14.5995, lng: 120.9842 }} />;
};

export default App;
