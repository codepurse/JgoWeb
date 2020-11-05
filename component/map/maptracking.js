import React from "react";
import ReactDOM from "react-dom";
import Map from "./trackingmap";

export default function maptracking() {
  const track = [
    {
      id: 1,
      name: "Park Slope",
      latitude: "40.6710729",
      longitude: "-73.9988001",
      icon: "Image/placeholder.png"
    },
    {
      id: 2,
      name: "Bushwick",
      latitude: "40.6942861",
      longitude: "-73.9389312",
    },
    {
      id: 3,
      name: "East New York",
      latitude: "40.6577799",
      longitude: "-73.9147716",
      icon: "Image/motorcycle.png"
    },
  ];    

 


  return (
    <Map
      center={{ lat: 40.6451594, lng: -74.0850826 }}
      zoom={10}
      places={track}
    />
  );
}
