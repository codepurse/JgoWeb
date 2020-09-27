exports.ids = [7];
exports.modules = {

/***/ "2YpH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("caYK");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GNgB");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wQcg");
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], _extends({
    ref: initMarker
  }, props));
};

class MapExample extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      key: 1,
      address: ""
    };
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {}

  componentDidMount() {
    setTimeout(() => this.myRef.current.leafletElement.invalidateSize(), 100);
  }

  handleClick(e) {
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);
    react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.setApiKey("AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4");
    react_geocode__WEBPACK_IMPORTED_MODULE_3___default.a.fromLatLng(e.latlng.lat, e.latlng.lng).then(response => {
      const address = response.results[0].formatted_address;
      console.log(address);
      global.config.place.deliver.pickoff = address;
      global.config.place.deliver.pickofflat = e.latlng.lat;
      global.config.place.deliver.dropofflang = e.latlng.lng;
      this.setState({
        address: address
      });
    }, error => {
      console.error(error);
    });
    this.setState({
      currentPos: e.latlng
    });
  }

  render() {
    return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      ref: this.myRef,
      className: "map",
      center: this.props.center,
      zoom: this.props.zoom,
      onClick: this.handleClick
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
      attribution: "\xA9 <a href=\"https://stadiamaps.com/\">Stadia Maps</a>, \xA9 <a href=\"https://openmaptiles.org/\">OpenMapTiles</a> \xA9 <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors",
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
    }), this.state.currentPos && __jsx(MyMarker, {
      position: this.state.currentPos
    }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
      position: this.state.currentPos
    }, "Current location: ", __jsx("pre", null, this.state.address))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapExample);

/***/ })

};;