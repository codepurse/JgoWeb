module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mapbooking.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/componentdidmount.js":
/*!****************************************!*\
  !*** ./component/componentdidmount.js ***!
  \****************************************/
/*! exports provided: componentMount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentMount", function() { return componentMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\componentdidmount.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class componentMount extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    let scripts = [{
      src: "Script/jgo.js"
    }];
    scripts.map(item => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 12
      }
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (componentMount);

/***/ }),

/***/ "./component/header.js":
/*!*****************************!*\
  !*** ./component/header.js ***!
  \*****************************/
/*! exports provided: header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, "Jgo Website"), __jsx("link", {
      rel: "stylesheet",
      href: "Css/index.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.5.1.js",
      integrity: "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
      integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4&libraries=places",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
      integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
      crossorigin: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      integrity: "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
      crossorigin: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "go.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./component/map/config.js":
/*!*********************************!*\
  !*** ./component/map/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

coordinate = [];
module.exports = global.config = {
  place: {
    deliver: {
      pickoff: "",
      dropoff: "",
      pickofflat: "",
      pickofflang: "",
      dropofflat: "",
      dropofflang: "",
      refresh: "",
      table_id: ""
    }
  }
};
tablemap = [];
coordinatebook = [];

/***/ }),

/***/ "./component/map/googlemap.js":
/*!************************************!*\
  !*** ./component/map/googlemap.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\googlemap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MapDirectionsRenderer(props) {
  const {
    0: directions,
    1: setDirections
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      places,
      travelMode
    } = props;
    const waypoints = places.map(p => ({
      location: {
        lat: p.lat,
        lng: p.lng
      },
      stopover: true
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;
    const directionsService = new google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode,
      waypoints: waypoints
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {}
    });
  });

  if (error) {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    options: {
      polylineOptions: {
        strokeOpacity: 8,
        strokeColor: "#FDD835"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  });
}

const Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
  defaultCenter: props.defaultCenter,
  defaultZoom: props.defaultZoom,
  options: {
    fullscreenControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    styles: [{
      elementType: "geometry",
      stylers: [{
        color: "#242f3e"
      }]
    }, {
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#242f3e"
      }]
    }, {
      elementType: "labels.text.fill",
      stylers: [{
        color: "#746855"
      }]
    }, {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#d59563"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#d59563"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#263c3f"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#6b9a76"
      }]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [{
        color: "#38414e"
      }]
    }, {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#212a37"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9ca5b3"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{
        color: "#746855"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#1f2835"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#f3d19c"
      }]
    }, {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{
        color: "#2f3948"
      }]
    }, {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#d59563"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#17263c"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#515c6d"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#17263c"
      }]
    }]
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }
}, props.markers.map((marker, index) => {
  const position = {
    lat: marker.lat,
    lng: marker.lng
  };
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    key: index,
    position: position,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  });
}), __jsx(MapDirectionsRenderer, {
  places: props.markers,
  travelMode: google.maps.TravelMode.DRIVING,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 7
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./component/map/maploaderbook.js":
/*!****************************************!*\
  !*** ./component/map/maploaderbook.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _googlemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemap */ "./component/map/googlemap.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\maploaderbook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
  return __jsx(_googlemap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&libraries=geometry,drawing,places',
    markers: places,
    loadingElement: loadingElement || __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 41
      }
    }),
    containerElement: containerElement || __jsx("div", {
      style: {
        height: "100vh"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 45
      }
    }),
    mapElement: mapElement || __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }),
    defaultZoom: defaultZoom || 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/mapbooking.js":
/*!*****************************!*\
  !*** ./pages/mapbooking.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapbooking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/map/maploaderbook */ "./component/map/maploaderbook.js");
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\mapbooking.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function mapbooking() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const [origin, setOrigin] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    lat: null,
    lng: null
  });
  const [fullname, setFullname] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const status = [{
    value: "Delivered",
    label: "Delivered"
  }, {
    value: "Looking for Driver",
    label: "Looking for Driver"
  }, {
    value: "Ongoing",
    label: "Ongoing"
  }];
  const [datebook, setDatebook] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [pricebook, setPricebook] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const statusColor = value => {
    switch (value) {
      case "in transit":
        return "intransitBook";

      case "Looking for Driver":
        return "looking";
    }
  };

  if (false) {}

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFullname(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].getFullname());
    console.log(global.config.place.deliver.table_id);

    if (tablemap) {
      console.log(tablemap);
      tablemap.filter(event => event.id === global.config.place.deliver.table_id).map(data => (coordinatebook.push({
        lat: Number(data.pick_up_latitude),
        lng: Number(data.pick_up_longitude)
      }), data.booking_drop_off_location.map(data => coordinatebook.push({
        lat: Number(data.drop_off_latitude),
        lng: Number(data.drop_off_longitude)
      }))));
    } else {}

    var d = tablemap[global.config.place.deliver.table_id - 1].created_at.slice(0, 10);
    setPricebook(tablemap[global.config.place.deliver.table_id - 1].total);
    setDatebook(d);
  }, [10]);

  function trylang() {
    console.log(JSON.stringify(coordinatebook));
    router.push("");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid h-100",
    style: {
      backgroundColor: "#15181A"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "divSidebar",
    style: {
      zIndex: "999999999999999"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "Image/horse.png",
    className: "img-fluid mx-auto d-flex",
    style: {
      width: "35px",
      marginTop: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "divMenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "no-bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/home.png",
    style: {
      width: "20px"
    },
    onClick: trylang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/truck.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/call.png",
    style: {
      width: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  })))))), __jsx("div", {
    className: "row h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-9 h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMapBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploaderbook__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "col-lg-3 colPackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circleBook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/profile.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: "packageFullname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, fullname), __jsx("p", {
    className: "pNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "09636787712"), __jsx("div", {
    className: "row",
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p2 text-center",
    style: {
      marginBottom: "2px",
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Date"), __jsx("p", {
    className: "pDate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, datebook)), __jsx("div", {
    className: "col-lg-6",
    style: {
      borderLeft: "1px solid  #414141",
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "p2 text-center",
    style: {
      marginBottom: "2px",
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "Price"), __jsx("p", {
    className: "pDate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, pricebook))), __jsx("hr", {
    className: "hrDashboard",
    style: {
      marginTop: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "p2",
    style: {
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Bookings"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, tablemap.filter(event => event.id === global.config.place.deliver.table_id).map(data => __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("ul", {
    key: data.id,
    style: {
      paddingLeft: "17px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "liBooking",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: statusColor(data.status),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 27
    }
  }, data.status), data.pick_up_address, __jsx("span", {
    className: "spanMore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 27
    }
  }, "\u2022\u2022\u2022"), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 27
    }
  }, __jsx("p", {
    className: "p3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, data.contact_name), __jsx("p", {
    className: "p3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, data.contact_number))), data.booking_drop_off_location.map(data => __jsx("li", {
    className: "liBooking",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, __jsx("p", {
    className: statusColor(data.status),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, data.status), data.drop_off_address, __jsx("span", {
    className: "spanMore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, "\u2022\u2022\u2022"), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "p3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 31
    }
  }, data.contact_name), __jsx("p", {
    className: "p3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 31
    }
  }, data.contact_number)))))))))))));
}

/***/ }),

/***/ "./services/auth.service.js":
/*!**********************************!*\
  !*** ./services/auth.service.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      const fname = foundUser.user.fname;
      return fname;
    }
  }

  getImage() {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      const fname = foundUser.user.fname;
      return fname;
    }
  }

  getFullname() {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      const fname = foundUser.user.name;
      return fname;
    }
  }

  getId() {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      const fname = foundUser.user.id;
      return fname;
    }
  }

  getToken() {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      const fname = foundUser.token;
      return fname;
    }
  }

  checkLogin() {
    const loggedInUser = localStorage.getItem("token");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      $(".colMain").hide();
      $(".colLogin").hide();
      $(".colDeliver").show();
      console.log(foundUser);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L21hcC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJib29rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hcGJvb2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiXSwibmFtZXMiOlsiY29tcG9uZW50TW91bnQiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInNjcmlwdHMiLCJzcmMiLCJtYXAiLCJpdGVtIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJoZWFkZXIiLCJjb29yZGluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmYiLCJkcm9wb2ZmIiwicGlja29mZmxhdCIsInBpY2tvZmZsYW5nIiwiZHJvcG9mZmxhdCIsImRyb3BvZmZsYW5nIiwicmVmcmVzaCIsInRhYmxlX2lkIiwidGFibGVtYXAiLCJjb29yZGluYXRlYm9vayIsIk1hcERpcmVjdGlvbnNSZW5kZXJlciIsInByb3BzIiwiZGlyZWN0aW9ucyIsInNldERpcmVjdGlvbnMiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJwbGFjZXMiLCJ0cmF2ZWxNb2RlIiwid2F5cG9pbnRzIiwicCIsImxvY2F0aW9uIiwibGF0IiwibG5nIiwic3RvcG92ZXIiLCJvcmlnaW4iLCJzaGlmdCIsImRlc3RpbmF0aW9uIiwicG9wIiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJnb29nbGUiLCJtYXBzIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJyb3V0ZSIsInJlc3VsdCIsInN0YXR1cyIsIkRpcmVjdGlvbnNTdGF0dXMiLCJPSyIsInBvbHlsaW5lT3B0aW9ucyIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VDb2xvciIsIk1hcCIsIndpdGhHb29nbGVNYXAiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJmdWxsc2NyZWVuQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJzdHlsZXMiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsImZlYXR1cmVUeXBlIiwibWFya2VycyIsIm1hcmtlciIsImluZGV4IiwicG9zaXRpb24iLCJUcmF2ZWxNb2RlIiwiRFJJVklORyIsImdvb2dsZU1hcHNBcGlLZXkiLCJBcHAiLCJsb2FkaW5nRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJtYXBFbGVtZW50IiwiaGVpZ2h0IiwibWFwYm9va2luZyIsInJvdXRlciIsInVzZVJvdXRlciIsInNldE9yaWdpbiIsIlJlYWN0IiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInZhbHVlIiwibGFiZWwiLCJkYXRlYm9vayIsInNldERhdGVib29rIiwicHJpY2Vib29rIiwic2V0UHJpY2Vib29rIiwic3RhdHVzQ29sb3IiLCJhdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImV2ZW50IiwiaWQiLCJkYXRhIiwicHVzaCIsIk51bWJlciIsInBpY2tfdXBfbGF0aXR1ZGUiLCJwaWNrX3VwX2xvbmdpdHVkZSIsImJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24iLCJkcm9wX29mZl9sYXRpdHVkZSIsImRyb3Bfb2ZmX2xvbmdpdHVkZSIsImQiLCJjcmVhdGVkX2F0Iiwic2xpY2UiLCJ0b3RhbCIsInRyeWxhbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJib3JkZXJMZWZ0IiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwicGlja191cF9hZGRyZXNzIiwiY29udGFjdF9uYW1lIiwiY29udGFjdF9udW1iZXIiLCJkcm9wX29mZl9hZGRyZXNzIiwiQVBJX1VSTCIsIkF1dGhTZXJ2aWNlIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdldEN1cnJlbnRVc2VyIiwibG9nZ2VkSW5Vc2VyIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsInBhcnNlIiwiZm5hbWUiLCJ1c2VyIiwiZ2V0SW1hZ2UiLCJuYW1lIiwiZ2V0SWQiLCJnZXRUb2tlbiIsInRva2VuIiwiY2hlY2tMb2dpbiIsIiQiLCJoaWRlIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9tYXBib29raW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYXBib29raW5nLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNvbXBvbmVudE1vdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgc2NyaXB0cyA9IFt7IHNyYzogXCJTY3JpcHQvamdvLmpzXCIgfV07XHJcbiAgICBzY3JpcHRzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gaXRlbS5zcmM7XHJcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50TW91bnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5KZ28gV2Vic2l0ZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJDc3MvaW5kZXguY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTI1Ni1RV283TER2eGJXVDJ0YmJROTdCNTN5Sm5ZVTNXaEgvQzh5Y2JSQWtqUERjPVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lEenppX1ZCY2YyT2VmNkxUVmlMVTc2N1VQTkhsbkl6ZTQmbGlicmFyaWVzPXBsYWNlc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjcuMS9kaXN0L2xlYWZsZXQuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi14b2RaQk5UQzVuMTdYdDJhdFRQdUUxSHhqVk1TdkxWVzlvY3FVS0xzQ0M1Q1hkYnFDbWJsQXNoT01BUzYva2VxcS9zTVpNWjE5c2NSNFBzWkNoU1I3QT09XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS43LjEvZGlzdC9sZWFmbGV0LmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi1YUW9ZTXFNVEs4THZkeFhZRzNuWjQ0OGhPRVFpZ2xmcWtKczFOT1FWNDRjV25VckJjOFBrQU9jWHkyMHcwdmxhWGFWVWVhcklPQmhpWFo1VjN5bnh3QT09XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImdvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XHJcbiIsImNvb3JkaW5hdGUgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmNvbmZpZyA9IHtcclxuICBwbGFjZToge1xyXG4gICAgZGVsaXZlcjoge1xyXG4gICAgICBwaWNrb2ZmOiBcIlwiLFxyXG4gICAgICBkcm9wb2ZmOiBcIlwiLFxyXG4gICAgICBwaWNrb2ZmbGF0OiBcIlwiLFxyXG4gICAgICBwaWNrb2ZmbGFuZzogXCJcIixcclxuICAgICAgZHJvcG9mZmxhdDogXCJcIixcclxuICAgICAgZHJvcG9mZmxhbmc6IFwiXCIsXHJcbiAgICAgIHJlZnJlc2g6IFwiXCIsXHJcbiAgICAgIHRhYmxlX2lkOiBcIlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxudGFibGVtYXAgPSBbXTtcclxuXHJcbmNvb3JkaW5hdGVib29rID0gW107XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICBHb29nbGVNYXAsXHJcbiAgd2l0aFNjcmlwdGpzLFxyXG4gIE1hcmtlcixcclxuICBEaXJlY3Rpb25zUmVuZGVyZXIsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmltcG9ydCBcIi4vY29uZmlnXCI7XHJcblxyXG5mdW5jdGlvbiBNYXBEaXJlY3Rpb25zUmVuZGVyZXIocHJvcHMpIHtcclxuICBjb25zdCBbZGlyZWN0aW9ucywgc2V0RGlyZWN0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwbGFjZXMsIHRyYXZlbE1vZGUgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHdheXBvaW50cyA9IHBsYWNlcy5tYXAoKHApID0+ICh7XHJcbiAgICAgIGxvY2F0aW9uOiB7IGxhdDogcC5sYXQsIGxuZzogcC5sbmcgfSxcclxuICAgICAgc3RvcG92ZXI6IHRydWUsXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcmlnaW4gPSB3YXlwb2ludHMuc2hpZnQoKS5sb2NhdGlvbjtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gd2F5cG9pbnRzLnBvcCgpLmxvY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcclxuICAgICAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlLFxyXG4gICAgICAgIHdheXBvaW50czogd2F5cG9pbnRzLFxyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb25zKHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxoMT57ZXJyb3J9PC9oMT47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICBkaXJlY3Rpb25zICYmIChcclxuICAgICAgPERpcmVjdGlvbnNSZW5kZXJlclxyXG4gICAgICAgIGRpcmVjdGlvbnM9e2RpcmVjdGlvbnN9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgcG9seWxpbmVPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDgsXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiNGREQ4MzVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIClcclxuICApO1xyXG59XHJcblxyXG5jb25zdCBNYXAgPSAoXHJcbiAgd2l0aEdvb2dsZU1hcCgocHJvcHMpID0+IChcclxuICAgIDxHb29nbGVNYXBcclxuICAgICAgZGVmYXVsdENlbnRlcj17cHJvcHMuZGVmYXVsdENlbnRlcn1cclxuICAgICAgZGVmYXVsdFpvb209e3Byb3BzLmRlZmF1bHRab29tfVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgIHsgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIiwgc3R5bGVyczogW3sgY29sb3I6IFwiIzI0MmYzZVwiIH1dIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjQyZjNlXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM3NDY4NTVcIiB9XSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNjNjM2ZcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzZiOWE3NlwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMzg0MTRlXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjEyYTM3XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzljYTViM1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM3NDY4NTVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzFmMjgzNVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2YzZDE5Y1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMmYzOTQ4XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0LnN0YXRpb25cIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMTcyNjNjXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM1MTVjNmRcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMTcyNjNjXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5tYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IG1hcmtlci5sYXQsIGxuZzogbWFya2VyLmxuZyB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICBcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAgPE1hcERpcmVjdGlvbnNSZW5kZXJlclxyXG4gICAgICAgIHBsYWNlcz17cHJvcHMubWFya2Vyc31cclxuICAgICAgICB0cmF2ZWxNb2RlPXtnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkd9XHJcbiAgICAgIC8+XHJcbiAgICA8L0dvb2dsZU1hcD5cclxuICApKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vZ29vZ2xlbWFwJztcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcblxyXG5jb25zdCBnb29nbGVNYXBzQXBpS2V5ID0gXCJBSXphU3lEenppX1ZCY2YyT2VmNkxUVmlMVTc2N1VQTkhsbkl6ZTRcIjtcclxuXHJcbmNvbnN0IHBsYWNlcyA9IGNvb3JkaW5hdGVib29rO1xyXG5cclxuY29uc3QgQXBwID0gcHJvcHMgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHtcclxuICAgIGxvYWRpbmdFbGVtZW50LFxyXG4gICAgY29udGFpbmVyRWxlbWVudCxcclxuICAgIG1hcEVsZW1lbnQsXHJcbiAgICBkZWZhdWx0Q2VudGVyLFxyXG4gICAgZGVmYXVsdFpvb21cclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxNYXBcclxuICAgICAgZ29vZ2xlTWFwVVJMPXtcclxuICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0nICtcclxuICAgICAgICBnb29nbGVNYXBzQXBpS2V5ICtcclxuICAgICAgICAnJmxpYnJhcmllcz1nZW9tZXRyeSxkcmF3aW5nLHBsYWNlcydcclxuICAgICAgfVxyXG4gICAgICBtYXJrZXJzPXtwbGFjZXN9XHJcbiAgICAgIGxvYWRpbmdFbGVtZW50PXtsb2FkaW5nRWxlbWVudCB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWB9fS8+fVxyXG4gICAgICBjb250YWluZXJFbGVtZW50PXtjb250YWluZXJFbGVtZW50IHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19Lz59XHJcbiAgICAgIG1hcEVsZW1lbnQ9e21hcEVsZW1lbnQgfHwgPGRpdiBzdHlsZT17e2hlaWdodDogYDEwMCVgfX0vPn1cclxuICAgICAgXHJcbiAgICAgIGRlZmF1bHRab29tPXtkZWZhdWx0Wm9vbSB8fCAxMX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvaGVhZGVyXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyYm9va1wiO1xyXG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwYm9va2luZygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3JpZ2luLCBzZXRPcmlnaW5dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3RhdHVzID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEZWxpdmVyZWRcIiwgbGFiZWw6IFwiRGVsaXZlcmVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIsIGxhYmVsOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9uZ29pbmdcIiwgbGFiZWw6IFwiT25nb2luZ1wiIH0sXHJcbiAgXTtcclxuICBjb25zdCBbZGF0ZWJvb2ssIHNldERhdGVib29rXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZWJvb2ssIHNldFByaWNlYm9va10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdGF0dXNDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiaW4gdHJhbnNpdFwiOlxyXG4gICAgICAgIHJldHVybiBcImludHJhbnNpdEJvb2tcIjtcclxuICAgICAgY2FzZSBcIkxvb2tpbmcgZm9yIERyaXZlclwiOlxyXG4gICAgICAgIHJldHVybiBcImxvb2tpbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZiAodGFibGVtYXAubGVuZ3RoID09IDApIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZ1bGxuYW1lKGF1dGhTZXJ2aWNlLmdldEZ1bGxuYW1lKCkpO1xyXG4gICAgY29uc29sZS5sb2coZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnRhYmxlX2lkKTtcclxuICAgIGlmICh0YWJsZW1hcCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWJsZW1hcCk7XHJcbiAgICAgIHRhYmxlbWFwXHJcbiAgICAgICAgLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQpXHJcbiAgICAgICAgLm1hcChcclxuICAgICAgICAgIChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhdDogTnVtYmVyKGRhdGEucGlja191cF9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgbG5nOiBOdW1iZXIoZGF0YS5waWNrX3VwX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLmJvb2tpbmdfZHJvcF9vZmZfbG9jYXRpb24ubWFwKChkYXRhKSA9PlxyXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVib29rLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5kcm9wX29mZl9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLmRyb3Bfb2ZmX2xvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gICAgdmFyIGQgPSB0YWJsZW1hcFtnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgLSAxXS5jcmVhdGVkX2F0LnNsaWNlKFxyXG4gICAgICAwLFxyXG4gICAgICAxMFxyXG4gICAgKTtcclxuICAgIHNldFByaWNlYm9vayh0YWJsZW1hcFtnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWQgLSAxXS50b3RhbCk7XHJcbiAgICBzZXREYXRlYm9vayhkKTtcclxuICB9LCBbMTBdKTtcclxuXHJcbiAgZnVuY3Rpb24gdHJ5bGFuZygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVib29rKSk7XHJcbiAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGgtMTAwXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE1MTgxQVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdlNpZGViYXJcIiBzdHlsZT17eyB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5XCIgfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIkltYWdlL2hvcnNlLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiwgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SWNvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuby1idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9ob21lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dHJ5bGFuZ31cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS90cnVjay5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NhbGwucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05IGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWFwQm9va1wiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbFBhY2thZ2VcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZUJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvcHJvZmlsZS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhY2thZ2VGdWxsbmFtZVwiPntmdWxsbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE51bWJlclwiPjA5NjM2Nzg3NzEyPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGUgPSB7e3BhZGRpbmc6IFwiMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZSA9IHt7cGFkZGluZzogXCIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMnB4XCIsIGZvbnRTaXplOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEYXRlXCI+e2RhdGVib29rfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlID0ge3tib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAgIzQxNDE0MVwiLCBwYWRkaW5nOiBcIjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicDIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIycHhcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBEYXRlXCI+e3ByaWNlYm9va308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJEYXNoYm9hcmRcIiBzdHlsZSA9IHt7bWFyZ2luVG9wOiBcIjhweFwifX0+PC9ocj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwMlwiIHN0eWxlID0ge3ttYXJnaW5MZWZ0OiBcIjE4cHhcIn19PkJvb2tpbmdzPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGFibGVtYXBcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZXZlbnQpID0+IGV2ZW50LmlkID09PSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIudGFibGVfaWRcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2RhdGEuaWR9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjE3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpQm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucGlja191cF9hZGRyZXNzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjI2OyYjODIyNjsmIzgyMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib29raW5nX2Ryb3Bfb2ZmX2xvY2F0aW9uLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaUJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3RhdHVzQ29sb3IoZGF0YS5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZHJvcF9vZmZfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5Nb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODIyNjsmIzgyMjY7JiM4MjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAzXCI+e2RhdGEuY29udGFjdF9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDNcIj57ZGF0YS5jb250YWN0X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL1wiO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgIGNvbnN0IGZuYW1lID0gZm91bmRVc2VyLnVzZXIuZm5hbWU7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEltYWdlKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgY29uc3QgZm5hbWUgPSBmb3VuZFVzZXIudXNlci5mbmFtZTtcclxuICAgICAgcmV0dXJuIGZuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RnVsbG5hbWUoKSB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBjb25zdCBmbmFtZSA9IGZvdW5kVXNlci51c2VyLm5hbWU7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgY29uc3QgZm5hbWUgPSBmb3VuZFVzZXIudXNlci5pZDtcclxuICAgICAgcmV0dXJuIGZuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBjb25zdCBmbmFtZSA9IGZvdW5kVXNlci50b2tlbjtcclxuICAgICAgcmV0dXJuIGZuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tMb2dpbigpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9nZ2VkSW5Vc2VyKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuXHJcbiAgICAgICQoXCIuY29sTWFpblwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIuY29sTG9naW5cIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmNvbERlbGl2ZXJcIikuc2hvdygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==