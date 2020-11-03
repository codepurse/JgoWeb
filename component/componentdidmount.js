import React, { Component } from "react";

export class componentMount extends Component {

  componentDidMount() {
    let scripts = [{ src: "Script/jgo.js" }];
    scripts.map((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });


  }
  render() {
    return <div></div>;
  }
}

export default componentMount;
