module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/map": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/map.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

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
      src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
      integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
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
    }), __jsx("script", {
      src: "go.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
      refresh: ""
    }
  }
};

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
        lineNumber: 44,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 24
    }
  });
}

const Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
  defaultCenter: props.defaultCenter,
  defaultZoom: props.defaultZoom,
  defaultOptions: {
    fullscreenControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
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
      lineNumber: 58,
      columnNumber: 16
    }
  });
}), __jsx(MapDirectionsRenderer, {
  places: props.markers,
  travelMode: google.maps.TravelMode.DRIVING,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 7
  }
}))));
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./component/map/leaflet.js":
/*!**********************************!*\
  !*** ./component/map/leaflet.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\leaflet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Leaflet = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../map/leafletmap */ "./component/map/leafletmap.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../map/leafletmap */ "./component/map/leafletmap.js")],
    modules: ['../map/leafletmap']
  }
});

const App = () => {
  return __jsx(Leaflet, {
    zoom: 14,
    center: {
      lat: 14.5995,
      lng: 120.9842
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./component/map/maploader.js":
/*!************************************!*\
  !*** ./component/map/maploader.js ***!
  \************************************/
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
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\maploader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const googleMapsApiKey = "AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4";
const places = coordinate;

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_map_maploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/map/maploader */ "./component/map/maploader.js");
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-places-autocomplete */ "react-google-places-autocomplete");
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var _component_map_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/map/leaflet */ "./component/map/leaflet.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert/with-react */ "@sweetalert/with-react");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function map() {
  const [tokenuser, setTokenuser] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var places_data = coordinate;
  var click;
  const customStyles1 = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "100%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "white"
    })
  };
  const customStyles2 = {
    control: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      background: "transparent",
      color: "white",
      border: "1px solid #2c2c2c",
      boxShadow: "none",
      borderRadius: "5px",
      width: "95%",
      padding: "2px",
      marginTop: "5px",
      boxShadow: state.isFocused ? "#EDC728" : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }
    }),
    singleValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
      color: "white"
    })
  };
  {
    /* Passing localstorage value in pickoff, dropoff and map */
  }

  if (false) {} else {}

  {
    /* Modal for custom map */
  }

  function opensweetalert() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "5px",
        width: "800px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }), __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, "Click the map to set location"), __jsx("button", {
      className: "btnSet",
      onClick: setAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, "SET")));
  }

  function opensweetalertcard() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
      className: "divCard",
      style: {
        width: " 450px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      style: {
        borderRadius: "25px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pMode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, "Mode of Payment"))), __jsx("div", {
      className: "row",
      style: {
        marginTop: "5px",
        padding: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-inline formCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "Image/mastercard.svg",
      className: "img-fluid",
      style: {
        width: "35px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "pCardNumberModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, "Mastercard 8278"))), __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-inline formCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "Image/visa.png",
      className: "img-fluid",
      style: {
        width: "35px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "pCardNumberModal",
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "Visa 8278"))), __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-inline formCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "Image/cash.png",
      className: "img-fluid",
      style: {
        width: "35px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "pCardNumberModal",
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }
    }, "Cash on delivery")))), __jsx("div", {
      className: "row align-items-center",
      style: {
        marginTop: "20px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/instant.svg",
      className: "img-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "btnBookModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, "BOOK"))))));
  }

  {
    /* Setting the address of pickoff and dropoff after the page loaded */
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const foundUser = JSON.parse(loggedInUser);
      setTokenuser(foundUser.token);
    }

    setAddress({
      value: localStorage.getItem("address"),
      label: localStorage.getItem("address")
    });
    setAddressDrop({
      value: localStorage.getItem("addressDrop"),
      label: localStorage.getItem("addressDrop")
    });
    var price_total = localStorage.getItem("price");
    setPrice(Number(price_total).toFixed(2));
    console.log(localStorage.getItem("price"));
  }, []);
  {
    /* All array and variables needed */
  }
  const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [addressDrop, setAddressDrop] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [addressDrop1, setAddressDrop1] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [addressDrop2, setAddressDrop2] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [coordinates, setCoordinates] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    lat: null,
    lng: null
  });
  const [coordinatesDrop, setCoordinatesDrop] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    lat: null,
    lng: null
  });
  const [coordinatesDrop1, setCoordinatesDrop1] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    lat: null,
    lng: null
  });
  const [coordinatesDrop2, setCoordinatesDrop2] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    lat: null,
    lng: null
  });
  {
    /* Pickoff setting and passing data to array and to the component itself */
  }

  const handleChange = async value => {
    const results = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);
    const latLng = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila");

    if (n === true) {
      setAddress(value);
      setCoordinates(latLng);

      try {
        var objIndex = places_data.findIndex(obj => obj.id == click);
        places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, places_data[objIndex].address = value.label, console.log(coordinate);
        getRate();
        router.push("");
      } catch (err) {
        const destination = {
          address: value.label,
          lat: latLng.lat,
          lng: latLng.lng,
          id: "1"
        };
        coordinate.push(destination);
        console.log(coordinate);
        getRate();
        router.push("");
      }
    } else {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row align-items-center",
        style: {
          borderLeft: "3px solid #FFE900"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "Image/complain.png",
        style: {
          width: "32px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-lg-10",
        style: {
          textAlign: "left"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 17
        }
      }, "Warning"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 17
        }
      }, "The entered address is not yet in our service area."))))));
    }
  };

  {
    /* Dropoff setting and passing data to array and to the component itself */
  }

  const handleChangeDrop = async value => {
    const results = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);
    const latLng = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);
    var str = value.label;
    var n = str.includes("Metro Manila");

    if (n === true) {
      try {
        setAddressDrop(value);
        setCoordinatesDrop(latLng);
        var objIndex = places_data.findIndex(obj => obj.id == click);
        places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
        router.push("");
        getRate();
      } catch (err) {
        const destination = {
          lat: latLng.lat,
          lng: latLng.lng,
          id: "2"
        };
        coordinate.push(destination);
        getRate();
        router.push("");
      }
    } else {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row align-items-center",
        style: {
          borderLeft: "3px solid #FFE900"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "Image/complain.png",
        style: {
          width: "32px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-lg-10",
        style: {
          textAlign: "left"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 17
        }
      }, "Warning"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 17
        }
      }, "The entered address is not yet in our service area."))))));
    }
  };

  {
    /* Stopoff #1 setting and passing data to array and to the component itself */
  }

  const handleChangeDrop1 = async value => {
    const results = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);
    const latLng = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);
    setAddressDrop1(value);
    setCoordinatesDrop1(latLng);

    try {
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
      router.push("");
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "3"
      };
      coordinate.push(destination);
      router.push("");
    }
  };

  {
    /* Stopoff #2 setting and passing data to array and to the component itself */
  }

  const handleChangeDrop2 = async value => {
    const results = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);
    const latLng = await Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);
    setAddressDrop2(value);
    setCoordinatesDrop2(latLng);

    try {
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
      router.push("");
    } catch (err) {
      const destination = {
        lat: latLng.lat,
        lng: latLng.lng,
        id: "4"
      };
      coordinate.push(destination);
      router.push("");
    }
  };

  {
    /* Passing name in additional details based on click value */
  }

  function updateInputValue(evt) {
    try {
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].detailsname = evt.target.value, console.log(coordinate);
    } catch (err) {
      console.log(err);
    }
  }

  {
    /* Passing number in additional details based on click value */
  }

  function updateInputValueNumber(evt) {
    try {
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].detailsnumber = evt.target.value, console.log(coodinate);
    } catch (err) {
      console.log(evt.target.value);
    }
  }

  {
    /* Passing address in additional details based on click value */
  }

  function updateInputValueAdd(evt) {
    try {
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].detailsAdd = evt.target.value, console.log(coordinate);
    } catch (err) {
      console.log(evt.target.value);
    }
  }

  {
    /* Passing lat, Lng and geocode of the address in component this function is for the custom map */
  }

  function setAdd() {
    if (click === 1) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddress({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff
      });
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].lat = coordinates.lat, places_data[objIndex].lng = coordinates.lng, console.log(coordinate);
      router.push("");
    } else if (click === 2) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddressDrop({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff
      });
      var objIndex = places_data.findIndex(obj => obj.id == click);
      places_data[objIndex].lat = coordinates.lat, places_data[objIndex].lng = coordinates.lng, console.log(coordinate);
      router.push("");
    }

    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_9___default.a.close();
  }

  {
    /* Function to delete index in array */
  }

  function deleteAdd() {
    var index = places_data.map(x => {
      return x.id;
    }).indexOf(click);
    places_data.splice(index, 1);
    console.log(places_data);
    router.push("");
  }

  function getRate() {
    let ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set("drop_off_locations[0][drop_off_longitude]", coordinate[1].lng);
    ratedata.set("drop_off_locations[0][booking_order]", "1");
    ratedata.set("additional_services[0]", "");

    if (coordinate[2]) {
      ratedata.set("drop_off_locations[1][drop_off_latitude]", coordinate[2].lat);
      ratedata.set("drop_off_locations[1][drop_off_longitude]", coordinate[2].lng);
      ratedata.set("drop_off_locations[1][booking_order]", "");
      ratedata.set("additional_services[1]", "");
    }

    if (coordinate[3]) {
      ratedata.set("drop_off_locations[2][drop_off_latitude]", coordinate[3].lat);
      ratedata.set("drop_off_locations[2][drop_off_longitude]", coordinate[3].lng);
      ratedata.set("drop_off_locations[2][booking_order]", "");
      ratedata.set("additional_services[2]", "");
    }

    const apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(apiUrl_rate, ratedata, options).then(result => {
      var price = result.data.price;
      setPrice(Number(price).toFixed(2));
    }).catch(err => {});
  }

  function btnPlaceorder() {
    const options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser
      }
    };
    let ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set("drop_off_locations[0][drop_off_longitude]", coordinate[1].lng);
    ratedata.set("drop_off_locations[0][booking_order]", "1");
    ratedata.set("additional_services[0]", "");

    if (coordinate[2]) {
      ratedata.set("drop_off_locations[1][drop_off_latitude]", coordinate[2].lat);
      ratedata.set("drop_off_locations[1][drop_off_longitude]", coordinate[2].lng);
      ratedata.set("drop_off_locations[1][booking_order]", "");
      ratedata.set("additional_services[1]", "");
    }

    if (coordinate[3]) {
      ratedata.set("drop_off_locations[2][drop_off_latitude]", coordinate[3].lat);
      ratedata.set("drop_off_locations[2][drop_off_longitude]", coordinate[3].lng);
      ratedata.set("drop_off_locations[2][booking_order]", "");
      ratedata.set("additional_services[2]", "");
    }

    let formdata = new FormData();
    formdata.set("customer_id", _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["default"].getId());
    formdata.set("booking_type_id", "2");
    formdata.set("contact_name", "Alfon");
    formdata.set("contact_number", "312321");
    formdata.set("pick_up_address", address.label);
    formdata.set("pick_up_latitude", coordinate[0].lat);
    formdata.set("pick_up_longitude", coordinate[0].lng);
    formdata.set("drop_off_locations[0][drop_off_address]", addressDrop.label);
    formdata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    formdata.set("drop_off_locations[0][drop_off_longitude]", coordinate[1].lng);
    formdata.set("drop_off_locations[0][booking_order]", "1");
    formdata.set("drop_off_locations[0][contact_name]", "karen");
    formdata.set("drop_off_locations[0][contact_number]", "12321");
    formdata.set("drop_off_locations[0][category_id]", "1");
    formdata.set("drop_off_locations[0][distance]", "5.382620231139828");
    formdata.set("additional_services[0]", "1");

    if (coordinate[2]) {
      formdata.set("drop_off_locations[1][drop_off_address]", addressDrop1.label);
      formdata.set("drop_off_locations[1][drop_off_latitude]", coordinate[2].lat);
      formdata.set("drop_off_locations[1][drop_off_longitude]", coordinate[2].lng);
      formdata.set("drop_off_locations[1][booking_order]", "2");
      formdata.set("drop_off_locations[1][contact_name]", "Mark");
      formdata.set("drop_off_locations[1][contact_number]", "12321");
      formdata.set("drop_off_locations[1][category_id]", "1");
      formdata.set("drop_off_locations[1][distance]", "5.382620231139828");
      formdata.set("additional_services[1]", "1");
    }

    const apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    const apiUrl = "http://localhost:8000/api/auth/booking";
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(apiUrl_rate, ratedata, options).then(result => {
      formdata.set("price", result.data.price);
      var price = result.data.price;
      setPrice(Number(price).toFixed(2));
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(apiUrl, formdata, options).then(result => {}).catch(err => {});
    }).catch(err => {});
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row align-items-center",
    style: {
      padding: "40px 0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 19
    }
  }, "LOGIN"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 13
    }
  }, " ", __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "10px",
      width: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 15
    }
  }), " ", "Pickup"), __jsx("div", {
    onClick: () => click = 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-inline",
    style: {
      width: "95%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    selectProps: {
      instanceId: "1",
      value: address,
      onChange: handleChange,
      styles: customStyles1
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtName txtAdditional",
    onChange: evt => updateInputValue(evt),
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: evt => updateInputValueNumber(evt),
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: evt => updateInputValueAdd(evt),
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("p", {
    className: "pPick",
    style: {
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 13
    }
  }, " ", __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 15
    }
  }), "Dropoff"), __jsx("div", {
    onClick: () => click = 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-inline",
    style: {
      width: "95%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    selectProps: {
      instanceId: "2",
      value: addressDrop,
      onChange: handleChangeDrop,
      styles: customStyles1
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: evt => updateInputValue(evt),
    className: "txtName txtAdditional",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: evt => updateInputValueNumber(evt),
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd txtAdditional",
    onChange: evt => updateInputAdd(evt),
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("div", {
    onClick: () => click = 3,
    style: {
      display: "none"
    },
    className: "divStopoff1 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pPick",
    style: {
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 15
    }
  }, " ", __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 17
    }
  }), "Stop Off Location"), __jsx("div", {
    className: "form-inline",
    style: {
      width: "100%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    selectProps: {
      instanceId: "3",
      value: addressDrop1,
      onChange: handleChangeDrop1,
      styles: customStyles2
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: evt => updateInputValue(evt),
    className: "txtName",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: evt => updateInputValueNumber(evt),
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd",
    onChange: evt => updateInputAdd(evt),
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    onClick: () => click = 4,
    style: {
      display: "none"
    },
    className: "divStopoff2 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pPick",
    style: {
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 15
    }
  }, " ", __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 17
    }
  }), "Stop Off Location"), __jsx("div", {
    className: "form-inline",
    style: {
      width: "100%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    selectProps: {
      instanceId: "4",
      value: addressDrop2,
      onChange: handleChangeDrop2,
      styles: customStyles2
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: evt => updateInputValue(evt),
    className: "txtName",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: evt => updateInputValueNumber(evt),
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd",
    onChange: evt => updateInputAdd(evt),
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 23
    }
  })))))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 13
    }
  }, "Add Stop-off"), __jsx("p", {
    className: "pNote",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pPick",
    style: {
      fontSize: "0.9rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 15
    }
  }, "Category"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 23
    }
  }, "DOCUMENT")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 23
    }
  }, "OTHERS")))), __jsx("div", {
    className: "col-lg-12 col-md-12 col-12",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 19
    }
  }, "Note: MAXIMUM WEIGHT IS 10kg"))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAdditional",
    style: {
      fontSize: "0.9rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 21
    }
  }, "Queueing"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 21
    }
  }, "Pabili Service")))), __jsx("div", {
    className: "row ",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 19
    }
  }, "Payment")), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/credit-card.png",
    className: "img-fluid",
    style: {
      width: "30px",
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPrice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 19
    }
  }, "\u20B1", price), __jsx("p", {
    className: "pPriceSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 19
    }
  }, "This is your final payment, please confirm your destination and go proceed to payment page."), __jsx("button", {
    className: "btnBook",
    onClick: btnPlaceorder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 19
    }
  }, "Place order"))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "25px",
      padding: "0px",
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    style: {
      paddingLeft: "0px;"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1081,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/mastercard.svg",
    className: "img-fluid",
    style: {
      width: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pCardNumber",
    onClick: opensweetalertcard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 21
    }
  }, "Mastercard 8278"))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid imgInstant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pNext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 21
    }
  }, "Next >>")))))), __jsx("div", {
    className: "col-lg-7 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "modal fade",
    id: "exampleModalCenter",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalCenterTitle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLongTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 15
    }
  }, "Mode of Payment")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/mastercard.svg",
    className: "img-fluid",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 17
    }
  }, "Mastercard 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/visa.png",
    className: "img-fluid",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 17
    }
  }, "Visa 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/cash.png",
    className: "img-fluid",
    style: {
      width: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 17
    }
  }, "Cash on delivery"))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnBookModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 19
    }
  }, "BOOK"))))))));
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

/***/ "@sweetalert/with-react":
/*!*****************************************!*\
  !*** external "@sweetalert/with-react" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sweetalert/with-react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-geocode":
/*!********************************!*\
  !*** external "react-geocode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-places-autocomplete":
/*!***************************************************!*\
  !*** external "react-google-places-autocomplete" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-places-autocomplete");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9tYXAvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9tYXAvZ29vZ2xlbWFwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9tYXAvbGVhZmxldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbWFwL21hcGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ2VvY29kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxlYWZsZXRcIiJdLCJuYW1lcyI6WyJjb21wb25lbnRNb3VudCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2NyaXB0cyIsInNyYyIsIm1hcCIsIml0ZW0iLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsImhlYWRlciIsImNvb3JkaW5hdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicGlja29mZiIsImRyb3BvZmYiLCJwaWNrb2ZmbGF0IiwicGlja29mZmxhbmciLCJkcm9wb2ZmbGF0IiwiZHJvcG9mZmxhbmciLCJyZWZyZXNoIiwiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJkaXJlY3Rpb25zIiwic2V0RGlyZWN0aW9ucyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsIm1hcmtlcnMiLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJMZWFmbGV0IiwiZHluYW1pYyIsInNzciIsIkFwcCIsImdvb2dsZU1hcHNBcGlLZXkiLCJsb2FkaW5nRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJtYXBFbGVtZW50IiwiaGVpZ2h0IiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiY2xlYW5QYXRobmFtZSIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInRva2VudXNlciIsInNldFRva2VudXNlciIsInVzZVJvdXRlciIsInBsYWNlc19kYXRhIiwiY2xpY2siLCJjdXN0b21TdHlsZXMxIiwiY29udHJvbCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsImN1c3RvbVN0eWxlczIiLCJvcGVuc3dlZXRhbGVydCIsInN3YWwiLCJvdmVyZmxvdyIsInNldEFkZCIsIm9wZW5zd2VldGFsZXJ0Y2FyZCIsImxvZ2dlZEluVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3VuZFVzZXIiLCJKU09OIiwicGFyc2UiLCJ0b2tlbiIsInNldEFkZHJlc3MiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwicHJpY2VfdG90YWwiLCJzZXRQcmljZSIsIk51bWJlciIsInRvRml4ZWQiLCJsb2ciLCJwcmljZSIsImFkZHJlc3MiLCJhZGRyZXNzRHJvcCIsImFkZHJlc3NEcm9wMSIsInNldEFkZHJlc3NEcm9wMSIsImFkZHJlc3NEcm9wMiIsInNldEFkZHJlc3NEcm9wMiIsImNvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlc0Ryb3AiLCJzZXRDb29yZGluYXRlc0Ryb3AiLCJjb29yZGluYXRlc0Ryb3AxIiwic2V0Q29vcmRpbmF0ZXNEcm9wMSIsImNvb3JkaW5hdGVzRHJvcDIiLCJzZXRDb29yZGluYXRlc0Ryb3AyIiwiaGFuZGxlQ2hhbmdlIiwicmVzdWx0cyIsImdlb2NvZGVCeUFkZHJlc3MiLCJsYXRMbmciLCJnZXRMYXRMbmciLCJuIiwiaW5jbHVkZXMiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsImlkIiwiZ2V0UmF0ZSIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJoYW5kbGVDaGFuZ2VEcm9wIiwiaGFuZGxlQ2hhbmdlRHJvcDEiLCJoYW5kbGVDaGFuZ2VEcm9wMiIsInVwZGF0ZUlucHV0VmFsdWUiLCJldnQiLCJkZXRhaWxzbmFtZSIsInVwZGF0ZUlucHV0VmFsdWVOdW1iZXIiLCJkZXRhaWxzbnVtYmVyIiwiY29vZGluYXRlIiwidXBkYXRlSW5wdXRWYWx1ZUFkZCIsImRldGFpbHNBZGQiLCJjbG9zZSIsImRlbGV0ZUFkZCIsIngiLCJpbmRleE9mIiwic3BsaWNlIiwicmF0ZWRhdGEiLCJGb3JtRGF0YSIsImFwaVVybF9yYXRlIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJidG5QbGFjZW9yZGVyIiwiZm9ybWRhdGEiLCJBdXRoU2VydmljZSIsImdldElkIiwiYXBpVXJsIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsInVwZGF0ZUlucHV0QWRkIiwiZGlzcGxheSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJBUElfVVJMIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImdldEN1cnJlbnRVc2VyIiwiZm5hbWUiLCJ1c2VyIiwiZ2V0RnVsbG5hbWUiLCJjaGVja0xvZ2luIiwiJCIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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LE9BQWIsQ0FBcUIsT0FBckIsQ0FBckI7O0FBQ0EsUUFBSUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQUosRUFBbUM7QUFDakMsWUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWCxDQUFsQjtBQUNBLFlBQU0wRixLQUFLLEdBQUd2RixTQUFTLENBQUN3RixJQUFWLENBQWVuRCxFQUE3QjtBQUNBLGFBQU9rRCxLQUFQO0FBQ0Q7QUFDRjs7QUFFREcsWUFBVSxHQUFHO0FBQ1gsVUFBTTdGLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXJCOztBQUNBLFFBQUlGLFlBQUosRUFBa0I7QUFDaEIsWUFBTUcsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWCxDQUFsQjtBQUVBOEYsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxJQUFkO0FBQ0FELE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsSUFBZjtBQUNBRCxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRSxJQUFqQjtBQUNBelgsYUFBTyxDQUFDdVMsR0FBUixDQUFZWCxTQUFaO0FBQ0Q7QUFDRjs7QUExQ2U7O0FBNkNILG1FQUFJcUUsV0FBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL21hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL21hcFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tYXAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjb21wb25lbnRNb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IHNjcmlwdHMgPSBbeyBzcmM6IFwiU2NyaXB0L2pnby5qc1wiIH1dO1xyXG4gICAgc2NyaXB0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgc2NyaXB0LnNyYyA9IGl0ZW0uc3JjO1xyXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudE1vdW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBoZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8dGl0bGU+SmdvIFdlYnNpdGU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiQ3NzL2luZGV4LmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcblxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtRGZYZHoyaHRQSDBsc1NTczVuQ1RwdWovenk0QytPR3BhbW9GVnkzOE1WQm5FK0liYlZZVWV3K09yQ1hhUmtmalwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lEenppX1ZCY2YyT2VmNkxUVmlMVTc2N1VQTkhsbkl6ZTQmbGlicmFyaWVzPXBsYWNlc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjcuMS9kaXN0L2xlYWZsZXQuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi14b2RaQk5UQzVuMTdYdDJhdFRQdUUxSHhqVk1TdkxWVzlvY3FVS0xzQ0M1Q1hkYnFDbWJsQXNoT01BUzYva2VxcS9zTVpNWjE5c2NSNFBzWkNoU1I3QT09XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS43LjEvZGlzdC9sZWFmbGV0LmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi1YUW9ZTXFNVEs4THZkeFhZRzNuWjQ0OGhPRVFpZ2xmcWtKczFOT1FWNDRjV25VckJjOFBrQU9jWHkyMHcwdmxhWGFWVWVhcklPQmhpWFo1VjN5bnh3QT09XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJnby5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJjb29yZGluYXRlID0gW1xyXG5cclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmNvbmZpZyA9IHtcclxuICBwbGFjZToge1xyXG4gICAgZGVsaXZlcjoge1xyXG4gICAgICBwaWNrb2ZmOiBcIlwiLFxyXG4gICAgICBkcm9wb2ZmOiBcIlwiLFxyXG4gICAgICBwaWNrb2ZmbGF0OiBcIlwiLFxyXG4gICAgICBwaWNrb2ZmbGFuZzogXCJcIixcclxuICAgICAgZHJvcG9mZmxhdDogXCJcIixcclxuICAgICAgZHJvcG9mZmxhbmc6IFwiXCIsXHJcbiAgICAgIHJlZnJlc2g6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICBHb29nbGVNYXAsXHJcbiAgd2l0aFNjcmlwdGpzLFxyXG4gIE1hcmtlcixcclxuICBEaXJlY3Rpb25zUmVuZGVyZXIsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmltcG9ydCBcIi4vY29uZmlnXCI7XHJcblxyXG5mdW5jdGlvbiBNYXBEaXJlY3Rpb25zUmVuZGVyZXIocHJvcHMpIHtcclxuICBjb25zdCBbZGlyZWN0aW9ucywgc2V0RGlyZWN0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwbGFjZXMsIHRyYXZlbE1vZGUgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHdheXBvaW50cyA9IHBsYWNlcy5tYXAoKHApID0+ICh7XHJcbiAgICAgIGxvY2F0aW9uOiB7IGxhdDogcC5sYXQsIGxuZzogcC5sbmcgfSxcclxuICAgICAgc3RvcG92ZXI6IHRydWUsXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcmlnaW4gPSB3YXlwb2ludHMuc2hpZnQoKS5sb2NhdGlvbjtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gd2F5cG9pbnRzLnBvcCgpLmxvY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcclxuICAgICAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlLFxyXG4gICAgICAgIHdheXBvaW50czogd2F5cG9pbnRzLFxyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb25zKHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8aDE+e2Vycm9yfTwvaDE+O1xyXG4gIH1cclxuICByZXR1cm4gZGlyZWN0aW9ucyAmJiA8RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2RpcmVjdGlvbnN9IC8+O1xyXG59XHJcblxyXG5jb25zdCBNYXAgPSB3aXRoU2NyaXB0anMoXHJcbiAgd2l0aEdvb2dsZU1hcCgocHJvcHMpID0+IChcclxuICAgIDxHb29nbGVNYXBcclxuICAgICAgZGVmYXVsdENlbnRlcj17cHJvcHMuZGVmYXVsdENlbnRlcn1cclxuICAgICAgZGVmYXVsdFpvb209e3Byb3BzLmRlZmF1bHRab29tfVxyXG4gICAgICBkZWZhdWx0T3B0aW9ucz17e2Z1bGxzY3JlZW5Db250cm9sOiBmYWxzZSwgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLCBzY2FsZUNvbnRyb2w6IGZhbHNlLCBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH07XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXIga2V5PXtpbmRleH0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPjtcclxuICAgICAgfSl9XHJcbiAgICAgIDxNYXBEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICBwbGFjZXM9e3Byb3BzLm1hcmtlcnN9XHJcbiAgICAgICAgdHJhdmVsTW9kZT17Z29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HfVxyXG4gICAgICAvPlxyXG4gICAgPC9Hb29nbGVNYXA+XHJcbiAgKSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcblxyXG5jb25zdCBMZWFmbGV0ID0gZHluYW1pYyhcclxuICAgICgpID0+IGltcG9ydCgnLi4vbWFwL2xlYWZsZXRtYXAnKSxcclxuICAgIHsgc3NyOiBmYWxzZSB9XHJcbiAgKVxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gPExlYWZsZXQgem9vbT17MTR9IGNlbnRlcj17eyBsYXQ6IDE0LjU5OTUsIGxuZzogMTIwLjk4NDIgfX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9nb29nbGVtYXAnO1xyXG5pbXBvcnQgXCIuL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IGdvb2dsZU1hcHNBcGlLZXkgPSBcIkFJemFTeUR6emlfVkJjZjJPZWY2TFRWaUxVNzY3VVBOSGxuSXplNFwiO1xyXG5cclxuY29uc3QgcGxhY2VzID0gY29vcmRpbmF0ZTtcclxuXHJcbmNvbnN0IEFwcCA9IHByb3BzID0+IHtcclxuICBcclxuICBjb25zdCB7XHJcbiAgICBsb2FkaW5nRWxlbWVudCxcclxuICAgIGNvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBtYXBFbGVtZW50LFxyXG4gICAgZGVmYXVsdENlbnRlcixcclxuICAgIGRlZmF1bHRab29tXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8TWFwXHJcbiAgICAgIGdvb2dsZU1hcFVSTD17XHJcbiAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JyArXHJcbiAgICAgICAgZ29vZ2xlTWFwc0FwaUtleSArXHJcbiAgICAgICAgJyZsaWJyYXJpZXM9Z2VvbWV0cnksZHJhd2luZyxwbGFjZXMnXHJcbiAgICAgIH1cclxuICAgICAgbWFya2Vycz17cGxhY2VzfVxyXG4gICAgICBsb2FkaW5nRWxlbWVudD17bG9hZGluZ0VsZW1lbnQgfHwgPGRpdiBzdHlsZT17e2hlaWdodDogYDEwMCVgfX0vPn1cclxuICAgICAgY29udGFpbmVyRWxlbWVudD17Y29udGFpbmVyRWxlbWVudCB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjEwMHZoXCJ9fS8+fVxyXG4gICAgICBtYXBFbGVtZW50PXttYXBFbGVtZW50IHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6IGAxMDAlYH19Lz59XHJcbiAgICAgIFxyXG4gICAgICBkZWZhdWx0Wm9vbT17ZGVmYXVsdFpvb20gfHwgMTF9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBMZWFmbGV0IGZyb20gXCIuLi9jb21wb25lbnQvbWFwL2xlYWZsZXRcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwKCkge1xyXG4gIGNvbnN0IFt0b2tlbnVzZXIsIHNldFRva2VudXNlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgcGxhY2VzX2RhdGEgPSBjb29yZGluYXRlO1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMyID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBsb2NhbHN0b3JhZ2UgdmFsdWUgaW4gcGlja29mZiwgZHJvcG9mZiBhbmQgbWFwICovXHJcbiAgfVxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9PT0gXCJcIikge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwicGlja29mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbG5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJwaWNrb2ZmbG5nXCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcImRyb3BvZmZsbmdcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwiZHJvcG9mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHtcclxuICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQpLFxyXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxuZyksXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0KSxcclxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcpLFxyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gXCIxXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIE1vZGFsIGZvciBjdXN0b20gbWFwICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5zd2VldGFsZXJ0KCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGVhZmxldD48L0xlYWZsZXQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyYWdcIj5DbGljayB0aGUgbWFwIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blNldFwiIG9uQ2xpY2s9e3NldEFkZH0+XHJcbiAgICAgICAgICBTRVRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnRjYXJkKCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiIDQ1MHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kZVwiPk1vZGUgb2YgUGF5bWVudDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXN0ZXJjYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiPk1hc3RlcmNhcmQgODI3ODwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGZvcm1DYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Zpc2EucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQ2FyZE51bWJlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFZpc2EgODI3OFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2FzaC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FzaCBvbiBkZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaW5zdGFudC5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va01vZGFsXCI+Qk9PSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBTZXR0aW5nIHRoZSBhZGRyZXNzIG9mIHBpY2tvZmYgYW5kIGRyb3BvZmYgYWZ0ZXIgdGhlIHBhZ2UgbG9hZGVkICovXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBzZXRUb2tlbnVzZXIoZm91bmRVc2VyLnRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICB2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgfSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NEcm9wXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzRHJvcFwiKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHByaWNlX3RvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKTtcclxuICAgIHNldFByaWNlKE51bWJlcihwcmljZV90b3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaWNlXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHtcclxuICAgIC8qIEFsbCBhcnJheSBhbmQgdmFyaWFibGVzIG5lZWRlZCAqL1xyXG4gIH1cclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wMSwgc2V0QWRkcmVzc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcDIsIHNldEFkZHJlc3NEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wLCBzZXRDb29yZGluYXRlc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AxLCBzZXRDb29yZGluYXRlc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wMiwgc2V0Q29vcmRpbmF0ZXNEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIHtcclxuICAgIC8qIFBpY2tvZmYgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHZhciBzdHIgPSB2YWx1ZS5sYWJlbDtcclxuICAgIHZhciBuID0gc3RyLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpO1xyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmFkZHJlc3MgPSB2YWx1ZS5sYWJlbCksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgICBhZGRyZXNzOiB2YWx1ZS5sYWJlbCxcclxuICAgICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICAgIGxuZzogbGF0TG5nLmxuZyxcclxuICAgICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0ZGRTkwMFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NvbXBsYWluLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5XYXJuaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBlbnRlcmVkIGFkZHJlc3MgaXMgbm90IHlldCBpbiBvdXIgc2VydmljZSBhcmVhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIERyb3BvZmYgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEcm9wID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICB2YXIgc3RyID0gdmFsdWUubGFiZWw7XHJcbiAgICB2YXIgbiA9IHN0ci5pbmNsdWRlcyhcIk1ldHJvIE1hbmlsYVwiKTtcclxuXHJcbiAgICBpZiAobiA9PT0gdHJ1ZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldEFkZHJlc3NEcm9wKHZhbHVlKTtcclxuICAgICAgICBzZXRDb29yZGluYXRlc0Ryb3AobGF0TG5nKTtcclxuICAgICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGxhdExuZy5sYXQpLFxyXG4gICAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBTdG9wb2ZmICMxIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcDEgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wMSh2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AxKGxhdExuZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogU3RvcG9mZiAjMiBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcDIodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wMihsYXRMbmcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgIGxuZzogbGF0TG5nLmxuZyxcclxuICAgICAgICBpZDogXCI0XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbmFtZSBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZShldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNuYW1lID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbnVtYmVyIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc251bWJlciA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2RpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGFkZHJlc3MgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzQWRkID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGxhdCwgTG5nIGFuZCBnZW9jb2RlIG9mIHRoZSBhZGRyZXNzIGluIGNvbXBvbmVudCB0aGlzIGZ1bmN0aW9uIGlzIGZvciB0aGUgY3VzdG9tIG1hcCAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRBZGQoKSB7XHJcbiAgICBpZiAoY2xpY2sgPT09IDEpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGNvb3JkaW5hdGVzLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBjb29yZGluYXRlcy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gZWxzZSBpZiAoY2xpY2sgPT09IDIpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBjb29yZGluYXRlcy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gY29vcmRpbmF0ZXMubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBGdW5jdGlvbiB0byBkZWxldGUgaW5kZXggaW4gYXJyYXkgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlQWRkKCkge1xyXG4gICAgdmFyIGluZGV4ID0gcGxhY2VzX2RhdGFcclxuICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB4LmlkO1xyXG4gICAgICB9KVxyXG4gICAgICAuaW5kZXhPZihjbGljayk7XHJcbiAgICBwbGFjZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgY29uc29sZS5sb2cocGxhY2VzX2RhdGEpO1xyXG4gICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmF0ZSgpIHtcclxuICAgIGxldCByYXRlZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sYXRpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xvbmdpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxuZyk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzBdXCIsIFwiXCIpO1xyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzJdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtib29raW5nX29yZGVyXVwiLCBcIlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1syXVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcmVzdWx0LmRhdGEucHJpY2U7XHJcbiAgICAgICAgc2V0UHJpY2UoTnVtYmVyKHByaWNlKS50b0ZpeGVkKDIpKTtcclxuICAgICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ0blBsYWNlb3JkZXIoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmF0ZWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLCBjb29yZGluYXRlWzFdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5sbmdcclxuICAgICk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bYm9va2luZ19vcmRlcl1cIiwgXCIxXCIpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVsyXSkge1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bYm9va2luZ19vcmRlcl1cIiwgXCJcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMV1cIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoY29vcmRpbmF0ZVszXSkge1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bYm9va2luZ19vcmRlcl1cIiwgXCJcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMl1cIiwgXCJcIik7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiY3VzdG9tZXJfaWRcIiwgQXV0aFNlcnZpY2UuZ2V0SWQoKSk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJib29raW5nX3R5cGVfaWRcIiwgXCIyXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiY29udGFjdF9uYW1lXCIsIFwiQWxmb25cIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJjb250YWN0X251bWJlclwiLCBcIjMxMjMyMVwiKTtcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG5cclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9hZGRyZXNzXVwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9uYW1lXVwiLCBcImthcmVuXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NvbnRhY3RfbnVtYmVyXVwiLCBcIjEyMzIxXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZGlzdGFuY2VdXCIsIFwiNS4zODI2MjAyMzExMzk4MjhcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzBdXCIsIFwiMVwiKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVsyXSkge1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfYWRkcmVzc11cIiwgYWRkcmVzc0Ryb3AxLmxhYmVsKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLCBjb29yZGluYXRlWzJdLmxhdCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTsgIFxyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bYm9va2luZ19vcmRlcl1cIiwgXCIyXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY29udGFjdF9uYW1lXVwiLCBcIk1hcmtcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjb250YWN0X251bWJlcl1cIiwgXCIxMjMyMVwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkaXN0YW5jZV1cIiwgXCI1LjM4MjYyMDIzMTEzOTgyOFwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIjFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpVXJsX3JhdGUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jYWxjdWxhdGUtcmF0ZVwiO1xyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvYm9va2luZ1wiO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGFwaVVybF9yYXRlLCByYXRlZGF0YSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInByaWNlXCIscmVzdWx0LmRhdGEucHJpY2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IHJlc3VsdC5kYXRhLnByaWNlO1xyXG4gICAgICAgIHNldFByaWNlKE51bWJlcihwcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7fSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb25NYXBcIj5cclxuICAgICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sTGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI0MHB4IDBweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0xvZ29cIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5MT0dJTjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5IT01FPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFBpY2sgb2ZmICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIHdpZHRoOiBcIjE4cHhcIiB9fVxyXG4gICAgICAgICAgICAgID48L2ltZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgUGlja3VwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAxKX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZSB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbGsvRmxvb3IvVW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZFwiPiYjeDJiOyBBZGQgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3RvcCBvZmYgbnVtYmVyIDEgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIERyb3BvZmZcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IChjbGljayA9IDIpfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS1tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWUgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRBZGQgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dEFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsay9GbG9vci9Vbml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDMpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2U3RvcG9mZjEgZGl2U3RvcE9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIFN0b3AgT2ZmIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS1tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXAxXCJcclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcmVtb3ZlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCAgaW1nRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWRkfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZFwiPiYjeDJiOyBBZGQgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dEFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsay9GbG9vci9Vbml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAzICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gNCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZTdG9wb2ZmMiBkaXZTdG9wT2ZmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgU3RvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZW1vdmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWdEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVBZGR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0QWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0QWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxrL0Zsb29yL1VuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQWRkU3RvcG9mZlwiPkFkZCBTdG9wLW9mZjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgIE5vdGU6IERlbGl2ZXJ5IG9ubHkgd2l0aGluIE1ldHJvIE1hbmlsYVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Q2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDEtZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+RE9DVU1FTlQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAyLXBpenphLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5GT09EPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Nsb3RoaW5nLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5DTE9USElORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tZWRpY2FsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5NRURJQ0FMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5GUkFHSUxFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL290aGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5PVEhFUlM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLTEyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE5vdGVcIj5Ob3RlOiBNQVhJTVVNIFdFSUdIVCBJUyAxMGtnPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0aW9uYWxcIiBzdHlsZT17eyBmb250U2l6ZTogXCIwLjlyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+SW5zdWxhdGVkIEJveDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5DYXNoIEhhbmRsaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPlF1ZXVlaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPlBhYmlsaSBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGF5bWVudFwiPlBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2NyZWRpdC1jYXJkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMThweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlXCI+JiM4MzY5O3twcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQcmljZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgeW91ciBmaW5hbCBwYXltZW50LCBwbGVhc2UgY29uZmlybSB5b3VyIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIGdvIHByb2NlZWQgdG8gcGF5bWVudCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va1wiIG9uQ2xpY2s9e2J0blBsYWNlb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYWNlIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyNXB4XCIsIHBhZGRpbmc6IFwiMHB4XCIsIGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjBweDtcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hc3RlcmNhcmQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJcIiBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydGNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgTWFzdGVyY2FyZCA4Mjc4XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvaW5zdGFudC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdJbnN0YW50XCJcclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE5leHRcIj5OZXh0ID4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sTWFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWFwIGZpeGVkLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxDZW50ZXJUaXRsZVwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMb25nVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIE1vZGUgb2YgUGF5bWVudFxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGZvcm1DYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hc3RlcmNhcmQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQ2FyZE51bWJlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE1hc3RlcmNhcmQgODI3OFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvdmlzYS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVmlzYSA4Mjc4XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9jYXNoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDYXNoIG9uIGRlbGl2ZXJ5XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2luc3RhbnQuc3ZnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkJvb2tNb2RhbFwiPkJPT0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL1wiO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgIGNvbnN0IGZuYW1lID0gZm91bmRVc2VyLnVzZXIuZm5hbWU7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZ1bGxuYW1lKCkge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgY29uc3QgZm5hbWUgPSBmb3VuZFVzZXIudXNlci5uYW1lO1xyXG4gICAgICByZXR1cm4gZm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJZCgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcbiAgICAgIGNvbnN0IGZuYW1lID0gZm91bmRVc2VyLnVzZXIuaWQ7XHJcbiAgICAgIHJldHVybiBmbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrTG9naW4oKSB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvZ2dlZEluVXNlcikge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXIgPSBKU09OLnBhcnNlKGxvZ2dlZEluVXNlcik7XHJcblxyXG4gICAgICAkKFwiLmNvbE1haW5cIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmNvbExvZ2luXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5jb2xEZWxpdmVyXCIpLnNob3coKTtcclxuICAgICAgY29uc29sZS5sb2coZm91bmRVc2VyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdlb2NvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9