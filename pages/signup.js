import React, { Component } from "react";
import Select from "react-select";

const regions = require("philippines/regions");
const province = require("philippines/provinces");
const cities = require("philippines/cities");

export class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regions_api: {
        value: "",
        name: "",
      },
      province_api: {
        value: "",
        name: "",
      },
      cities_api: {
        value: "",
        name: "",
      },
      region_change: "",
      province_change: "",
    };
  }

  componentDidMount() {
    const data_regions = regions.map((d) => ({
      value: d.key,
      label: d.name,
    }));
    this.setState({ regions_api: data_regions });
  }

  HandleChangeRegion(e) {
    this.setState({ region_change: e.value });
    const data = province
      .filter((person) => person.region === e.value)
      .map((d) => ({
        id: d.key,
        value: d.key,
        label: d.name,
      }));
    this.setState({ province_api: data });
  }

  HandleChangeProvince(e) {
    this.setState({province_change: e.value });
    const data = cities
      .filter((person) => person.province === e.id)
      .map((d) => ({
        value: d.name,
        label: d.name,
      }));
    this.setState({cities_api: data});
  }

  render() {
    return (
      <div>
        <Select
          options={this.state.regions_api}
          onChange={this.HandleChangeRegion.bind(this)}
        />
        <Select
          options={this.state.province_api}
          onChange={this.HandleChangeProvince.bind(this)}
        />
        <Select options={this.state.cities_api} />
      </div>
    );
  }
}

export default signup;
