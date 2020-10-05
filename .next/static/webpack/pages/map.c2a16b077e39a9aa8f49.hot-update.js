webpackHotUpdate_N_E("pages/map",{

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_map_maploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/map/maploader */ "./component/map/maploader.js");
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-places-autocomplete */ "./node_modules/react-google-places-autocomplete/build/index.es.js");
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var _component_map_leaflet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/map/leaflet */ "./component/map/leaflet.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\map.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










function map() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var places_data = coordinate;
  var click;
  {
    /* Passing localstorage value in pickoff, dropoff and map */
  }

  if (true) {
    if (global.config.place.deliver.refresh === "") {
      global.config.place.deliver.pickofflat = localStorage.getItem("pickofflat");
      global.config.place.deliver.pickofflng = localStorage.getItem("pickofflng");
      global.config.place.deliver.dropofflng = localStorage.getItem("dropofflng");
      global.config.place.deliver.dropofflat = localStorage.getItem("dropofflat");
      var origin = {
        lat: parseFloat(global.config.place.deliver.pickofflat),
        lng: parseFloat(global.config.place.deliver.pickofflng),
        id: "1"
      };
      coordinate.push(origin);
      var destination = {
        lat: parseFloat(global.config.place.deliver.dropofflat),
        lng: parseFloat(global.config.place.deliver.dropofflng),
        id: "2"
      };
      coordinate.push(destination);
      console.log(coordinate);
      global.config.place.deliver.refresh = "1";
    }
  } else {}

  {
    /* Modal for custom map */
  }

  function opensweetalert() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default()(__jsx("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "5px",
        width: "800px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }), __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, "Click the map to set location"), __jsx("button", {
      className: "btnSet",
      onClick: setAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, "SET")));
  }

  function opensweetalertcard() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default()(__jsx("div", {
      className: "divCard",
      style: {
        width: " 450px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pMode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 86,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-inline formCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
        lineNumber: 89,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "pCardNumberModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, "Mastercard 8278"))), __jsx("div", {
      className: "col-lg-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-inline formCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 101,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "pCardNumberModal",
      "data-toggle": "modal",
      "data-target": "#exampleModalCenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, "Visa 8278")))))));
  }

  {
    /* Setting the address of pickoff and dropoff after the page loaded */
  }
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setAddress({
      value: localStorage.getItem("address"),
      label: localStorage.getItem("address")
    });
    setAddressDrop({
      value: localStorage.getItem("addressDrop"),
      label: localStorage.getItem("addressDrop")
    });
  }, []);
  {
    /* All array and variables needed */
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      address = _useState[0],
      setAddress = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      addressDrop = _React$useState2[0],
      setAddressDrop = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      addressDrop1 = _React$useState4[0],
      setAddressDrop1 = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      addressDrop2 = _React$useState6[0],
      setAddressDrop2 = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      coordinates = _React$useState8[0],
      setCoordinates = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      coordinatesDrop = _React$useState10[0],
      setCoordinatesDrop = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      coordinatesDrop1 = _React$useState12[0],
      setCoordinatesDrop1 = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      coordinatesDrop2 = _React$useState14[0],
      setCoordinatesDrop2 = _React$useState14[1];

  {
    /* Pickoff setting and passing data to array and to the component itself */
  }

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
      var results, latLng, str, n, objIndex, _destination;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["geocodeByAddress"])(value.label);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["getLatLng"])(results[0]);

            case 5:
              latLng = _context.sent;
              str = value.label;
              n = str.includes("Metro Manila");

              if (n === true) {
                setAddress(value);
                setCoordinates(latLng);

                try {
                  objIndex = places_data.findIndex(function (obj) {
                    return obj.id == click;
                  });
                  places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, places_data[objIndex].address = value.label, console.log(coordinate);
                  router.push("");
                } catch (err) {
                  _destination = {
                    address: value.label,
                    lat: latLng.lat,
                    lng: latLng.lng,
                    id: "1"
                  };
                  coordinate.push(_destination);
                  console.log(coordinate);
                  router.push("");
                }
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 11
                  }
                }, __jsx("div", {
                  className: "row align-items-center",
                  style: {
                    borderLeft: "3px solid #FFE900"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 15
                  }
                }, __jsx("img", {
                  src: "Image/complain.png",
                  style: {
                    width: "32px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 17
                  }
                })), __jsx("div", {
                  className: "col-lg-10",
                  style: {
                    textAlign: "left"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 17
                  }
                }, "The entered address is not yet in our service area."))))));
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  {
    /* Dropoff setting and passing data to array and to the component itself */
  }

  var handleChangeDrop = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var results, latLng, str, n, objIndex, _destination2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["geocodeByAddress"])(value.label);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["getLatLng"])(results[0]);

            case 5:
              latLng = _context2.sent;
              str = value.label;
              n = str.includes("Metro Manila");

              if (n === true) {
                try {
                  setAddressDrop(value);
                  setCoordinatesDrop(latLng);
                  objIndex = places_data.findIndex(function (obj) {
                    return obj.id == click;
                  });
                  places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
                  router.push("");
                } catch (err) {
                  _destination2 = {
                    lat: latLng.lat,
                    lng: latLng.lng,
                    id: "2"
                  };
                  coordinate.push(_destination2);
                  router.push("");
                }
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 11
                  }
                }, __jsx("div", {
                  className: "row align-items-center",
                  style: {
                    borderLeft: "3px solid #FFE900"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 15
                  }
                }, __jsx("img", {
                  src: "Image/complain.png",
                  style: {
                    width: "32px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 17
                  }
                })), __jsx("div", {
                  className: "col-lg-10",
                  style: {
                    textAlign: "left"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 17
                  }
                }, "The entered address is not yet in our service area."))))));
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChangeDrop(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  {
    /* Stopoff #1 setting and passing data to array and to the component itself */
  }

  var handleChangeDrop1 = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
      var results, latLng, objIndex, _destination3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["geocodeByAddress"])(value.label);

            case 2:
              results = _context3.sent;
              _context3.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["getLatLng"])(results[0]);

            case 5:
              latLng = _context3.sent;
              setAddressDrop1(value);
              setCoordinatesDrop1(latLng);

              try {
                objIndex = places_data.findIndex(function (obj) {
                  return obj.id == click;
                });
                places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
                router.push("");
              } catch (err) {
                _destination3 = {
                  lat: latLng.lat,
                  lng: latLng.lng,
                  id: "3"
                };
                coordinate.push(_destination3);
                router.push("");
              }

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleChangeDrop1(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  {
    /* Stopoff #2 setting and passing data to array and to the component itself */
  }

  var handleChangeDrop2 = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(value) {
      var results, latLng, objIndex, _destination4;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["geocodeByAddress"])(value.label);

            case 2:
              results = _context4.sent;
              _context4.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["getLatLng"])(results[0]);

            case 5:
              latLng = _context4.sent;
              setAddressDrop2(value);
              setCoordinatesDrop2(latLng);

              try {
                objIndex = places_data.findIndex(function (obj) {
                  return obj.id == click;
                });
                places_data[objIndex].lat = latLng.lat, places_data[objIndex].lng = latLng.lng, console.log(coordinate);
                router.push("");
              } catch (err) {
                _destination4 = {
                  lat: latLng.lat,
                  lng: latLng.lng,
                  id: "4"
                };
                coordinate.push(_destination4);
                router.push("");
              }

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleChangeDrop2(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  {
    /* Passing name in additional details based on click value */
  }

  function updateInputValue(evt) {
    try {
      var objIndex = places_data.findIndex(function (obj) {
        return obj.id == click;
      });
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
      var objIndex = places_data.findIndex(function (obj) {
        return obj.id == click;
      });
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
      var objIndex = places_data.findIndex(function (obj) {
        return obj.id == click;
      });
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
      var objIndex = places_data.findIndex(function (obj) {
        return obj.id == click;
      });
      places_data[objIndex].lat = coordinates.lat, places_data[objIndex].lng = coordinates.lng, console.log(coordinate);
      router.push("");
    } else if (click === 2) {
      coordinates.lat = global.config.place.deliver.pickofflat;
      coordinates.lng = global.config.place.deliver.dropofflang;
      setAddressDrop({
        value: global.config.place.deliver.pickoff,
        label: global.config.place.deliver.pickoff
      });
      var objIndex = places_data.findIndex(function (obj) {
        return obj.id == click;
      });
      places_data[objIndex].lat = coordinates.lat, places_data[objIndex].lng = coordinates.lng, console.log(coordinate);
      router.push("");
    }

    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_12___default.a.close();
  }

  {
    /* Function to delete index in array */
  }

  function deleteAdd() {
    var index = places_data.map(function (x) {
      return x.id;
    }).indexOf(click);
    places_data.splice(index, 1);
    console.log(places_data);
    router.push("");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-6 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 406,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 19
    }
  }, "HOME"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 19
    }
  }, "DELIVER"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 19
    }
  }, "CONTACT"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 19
    }
  }, "LOGIN")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, " ", __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    }
  }), " ", "Pick Up Location"), __jsx("div", {
    onClick: function onClick() {
      return click = 1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
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
      lineNumber: 434,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectProps: {
      instanceId: "1",
      value: address,
      onChange: handleChange
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtName",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 23
    }
  })))))), __jsx("p", {
    className: "pPick",
    style: {
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
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
      lineNumber: 492,
      columnNumber: 15
    }
  }), "Drop Off Location"), __jsx("div", {
    onClick: function onClick() {
      return click = 2;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
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
      lineNumber: 500,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectProps: {
      instanceId: "2",
      value: addressDrop,
      onChange: handleChangeDrop
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    className: "txtName",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd",
    onChange: function onChange(evt) {
      return updateInputAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    onClick: function onClick() {
      return click = 3;
    },
    style: {
      display: "none"
    },
    className: "divStopoff1 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
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
      lineNumber: 561,
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
      lineNumber: 563,
      columnNumber: 17
    }
  }), "Stop Off Location"), __jsx("div", {
    className: "form-inline",
    style: {
      width: "95%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectProps: {
      instanceId: "3",
      value: addressDrop1,
      onChange: handleChangeDrop1
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    className: "txtName",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd",
    onChange: function onChange(evt) {
      return updateInputAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    onClick: function onClick() {
      return click = 4;
    },
    style: {
      display: "none"
    },
    className: "divStopoff2 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
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
      lineNumber: 636,
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
      lineNumber: 638,
      columnNumber: 17
    }
  }), "Stop Off Location"), __jsx("div", {
    className: "form-inline",
    style: {
      width: "95%",
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectProps: {
      instanceId: "4",
      value: addressDrop2,
      onChange: handleChangeDrop2
    },
    autocompletionRequest: {
      componentRestrictions: {
        country: ["ph"]
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    className: "txtName",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd",
    onChange: function onChange(evt) {
      return updateInputAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 23
    }
  })))))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 13
    }
  }, "Add Stop-off"), __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pPick",
    style: {
      fontSize: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 15
    }
  }, "Category"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 23
    }
  }, "DOCUMENT")))), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
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
      lineNumber: 777,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
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
      lineNumber: 784,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-3 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-3 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-3 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 21
    }
  }, "Queueing Service"))), __jsx("div", {
    className: "col-lg-3 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 21
    }
  }, "Pabili Service")))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "25px",
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
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
      lineNumber: 813,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
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
      lineNumber: 815,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pCardNumber",
    onClick: opensweetalertcard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 21
    }
  }, "Mastercard 8278"))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid imgInstant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pNext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 21
    }
  }, "Next >>")))))), __jsx("div", {
    className: "col-lg-6 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
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
      lineNumber: 846,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLongTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 15
    }
  }, "Mode of Payment")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
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
      lineNumber: 863,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 17
    }
  }, "Mastercard 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
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
      lineNumber: 877,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 17
    }
  }, "Visa 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
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
      lineNumber: 891,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 17
    }
  }, "Cash on delivery"))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnBookModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 19
    }
  }, "BOOK"))))))));
}

_s(map, "+p9u7gEpzqQQ4HaCoseh8Ymg3KM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsInJvdXRlciIsInVzZVJvdXRlciIsInBsYWNlc19kYXRhIiwiY29vcmRpbmF0ZSIsImNsaWNrIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicmVmcmVzaCIsInBpY2tvZmZsYXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGlja29mZmxuZyIsImRyb3BvZmZsbmciLCJkcm9wb2ZmbGF0Iiwib3JpZ2luIiwibGF0IiwicGFyc2VGbG9hdCIsImxuZyIsImlkIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsIm9wZW5zd2VldGFsZXJ0Iiwic3dhbCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsInNldEFkZCIsIm9wZW5zd2VldGFsZXJ0Y2FyZCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJ1c2VFZmZlY3QiLCJzZXRBZGRyZXNzIiwidmFsdWUiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiUmVhY3QiLCJhZGRyZXNzRHJvcCIsImFkZHJlc3NEcm9wMSIsInNldEFkZHJlc3NEcm9wMSIsImFkZHJlc3NEcm9wMiIsInNldEFkZHJlc3NEcm9wMiIsImNvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlc0Ryb3AiLCJzZXRDb29yZGluYXRlc0Ryb3AiLCJjb29yZGluYXRlc0Ryb3AxIiwic2V0Q29vcmRpbmF0ZXNEcm9wMSIsImNvb3JkaW5hdGVzRHJvcDIiLCJzZXRDb29yZGluYXRlc0Ryb3AyIiwiaGFuZGxlQ2hhbmdlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJzdHIiLCJuIiwiaW5jbHVkZXMiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsImVyciIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJoYW5kbGVDaGFuZ2VEcm9wIiwiaGFuZGxlQ2hhbmdlRHJvcDEiLCJoYW5kbGVDaGFuZ2VEcm9wMiIsInVwZGF0ZUlucHV0VmFsdWUiLCJldnQiLCJkZXRhaWxzbmFtZSIsInRhcmdldCIsInVwZGF0ZUlucHV0VmFsdWVOdW1iZXIiLCJkZXRhaWxzbnVtYmVyIiwiY29vZGluYXRlIiwidXBkYXRlSW5wdXRWYWx1ZUFkZCIsImRldGFpbHNBZGQiLCJkcm9wb2ZmbGFuZyIsInBpY2tvZmYiLCJjbG9zZSIsImRlbGV0ZUFkZCIsImluZGV4IiwieCIsImluZGV4T2YiLCJzcGxpY2UiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJpbnN0YW5jZUlkIiwib25DaGFuZ2UiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwidXBkYXRlSW5wdXRBZGQiLCJkaXNwbGF5IiwiZm9udFNpemUiLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLFdBQVcsR0FBR0MsVUFBbEI7QUFDQSxNQUFJQyxLQUFKO0FBRUE7QUFDRTtBQUNEOztBQUNELFlBQXFCO0FBQ25CLFFBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkMsT0FBNUIsS0FBd0MsRUFBNUMsRUFBZ0Q7QUFDOUNKLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkUsVUFBNUIsR0FBeUNDLFlBQVksQ0FBQ0MsT0FBYixDQUN2QyxZQUR1QyxDQUF6QztBQUdBUCxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJLLFVB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QUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixDQUpGLEVBU0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREYsQ0FURixFQWNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBZEYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMs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UyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLGFBQVMsRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUpGLENBREYsQ0FsREYsQ0FERixDQVJGLENBL2JGLENBREY7QUEwZ0JEOztHQXo0QnVCL0IsRztVQUNQRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXAuYzJhMTZiMDc3ZTM5YTlhYThmNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBMZWFmbGV0IGZyb20gXCIuLi9jb21wb25lbnQvbWFwL2xlYWZsZXRcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgcGxhY2VzX2RhdGEgPSBjb29yZGluYXRlO1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBsb2NhbHN0b3JhZ2UgdmFsdWUgaW4gcGlja29mZiwgZHJvcG9mZiBhbmQgbWFwICovXHJcbiAgfVxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9PT0gXCJcIikge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwicGlja29mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbG5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJwaWNrb2ZmbG5nXCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcImRyb3BvZmZsbmdcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwiZHJvcG9mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHtcclxuICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQpLFxyXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxuZyksXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0KSxcclxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcpLFxyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gXCIxXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIE1vZGFsIGZvciBjdXN0b20gbWFwICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5zd2VldGFsZXJ0KCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGVhZmxldD48L0xlYWZsZXQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyYWdcIj5DbGljayB0aGUgbWFwIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blNldFwiIG9uQ2xpY2s9e3NldEFkZH0+XHJcbiAgICAgICAgICBTRVRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnRjYXJkKCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiIDQ1MHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGVcIj5Nb2RlIG9mIFBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiwgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFzdGVyY2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgTWFzdGVyY2FyZCA4Mjc4XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS92aXNhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBWaXNhIDgyNzhcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogU2V0dGluZyB0aGUgYWRkcmVzcyBvZiBwaWNrb2ZmIGFuZCBkcm9wb2ZmIGFmdGVyIHRoZSBwYWdlIGxvYWRlZCAqL1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NcIiksXHJcbiAgICAgIGxhYmVsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NcIiksXHJcbiAgICB9KTtcclxuICAgIHNldEFkZHJlc3NEcm9wKHtcclxuICAgICAgdmFsdWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRkcmVzc0Ryb3BcIiksXHJcbiAgICAgIGxhYmVsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NEcm9wXCIpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB7XHJcbiAgICAvKiBBbGwgYXJyYXkgYW5kIHZhcmlhYmxlcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wLCBzZXRBZGRyZXNzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AxLCBzZXRBZGRyZXNzRHJvcDFdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wMiwgc2V0QWRkcmVzc0Ryb3AyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AsIHNldENvb3JkaW5hdGVzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcDEsIHNldENvb3JkaW5hdGVzRHJvcDFdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AyLCBzZXRDb29yZGluYXRlc0Ryb3AyXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuXHJcbiAge1xyXG4gICAgLyogUGlja29mZiBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcbiAgICBpZiAobiA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgICAgc2V0Q29vcmRpbmF0ZXMobGF0TG5nKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGxhdExuZy5sYXQpLFxyXG4gICAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uYWRkcmVzcyA9IHZhbHVlLmxhYmVsKSxcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICAgIGFkZHJlc3M6IHZhbHVlLmxhYmVsLFxyXG4gICAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBEcm9wb2ZmIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0ZGRTkwMFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NvbXBsYWluLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5XYXJuaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBlbnRlcmVkIGFkZHJlc3MgaXMgbm90IHlldCBpbiBvdXIgc2VydmljZSBhcmVhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFN0b3BvZmYgIzEgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEcm9wMSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3AxKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzRHJvcDEobGF0TG5nKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGxhdExuZy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiM1wiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBTdG9wb2ZmICMyIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcDIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wMih2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AyKGxhdExuZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjRcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBuYW1lIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc25hbWUgPSBldnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBudW1iZXIgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzbnVtYmVyID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vZGluYXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgYWRkcmVzcyBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZUFkZChldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNBZGQgPSBldnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbGF0LCBMbmcgYW5kIGdlb2NvZGUgb2YgdGhlIGFkZHJlc3MgaW4gY29tcG9uZW50IHRoaXMgZnVuY3Rpb24gaXMgZm9yIHRoZSBjdXN0b20gbWFwICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldEFkZCgpIHtcclxuICAgIGlmIChjbGljayA9PT0gMSkge1xyXG4gICAgICBjb29yZGluYXRlcy5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgY29vcmRpbmF0ZXMubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICBzZXRBZGRyZXNzKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gY29vcmRpbmF0ZXMubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGNvb3JkaW5hdGVzLmxuZyksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgfSBlbHNlIGlmIChjbGljayA9PT0gMikge1xyXG4gICAgICBjb29yZGluYXRlcy5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgY29vcmRpbmF0ZXMubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGNvb3JkaW5hdGVzLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBjb29yZGluYXRlcy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH1cclxuICAgIHN3YWwuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIEZ1bmN0aW9uIHRvIGRlbGV0ZSBpbmRleCBpbiBhcnJheSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVBZGQoKSB7XHJcbiAgICB2YXIgaW5kZXggPSBwbGFjZXNfZGF0YVxyXG4gICAgICAubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHguaWQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5pbmRleE9mKGNsaWNrKTtcclxuICAgIHBsYWNlc19kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZXNfZGF0YSk7XHJcbiAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb25NYXBcIj5cclxuICAgICAgICA8Q29tcG9uZW50ZGlkbW91bnQ+PC9Db21wb25lbnRkaWRtb3VudD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sTGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI0MHB4IDBweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0xvZ29cIj48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5IT01FPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkRFTElWRVI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+Q09OVEFDVDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5MT0dJTjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQaWNrIG9mZiAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPntcIiBcIn1cclxuICAgICAgICAgICAgICBQaWNrIFVwIExvY2F0aW9uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAxKX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbGsvRmxvb3IvVW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMSAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgRHJvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IChjbGljayA9IDIpfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZFwiPiYjeDJiOyBBZGQgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dEFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsay9GbG9vci9Vbml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAyICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMyl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZTdG9wb2ZmMSBkaXZTdG9wT2ZmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgU3RvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wMSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcDEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS1tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZW1vdmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWdEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVBZGR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0QWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0QWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxrL0Zsb29yL1VuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3RvcCBvZmYgbnVtYmVyIDMgKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSA0KX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdlN0b3BvZmYyIGRpdlN0b3BPZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICBTdG9wIE9mZiBMb2NhdGlvblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3JlbW92ZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgIGltZ0RlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUFkZH1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRBZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbGsvRmxvb3IvVW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5BZGRTdG9wb2ZmXCI+QWRkIFN0b3Atb2ZmPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOb3RlXCI+Tm90ZTogRGVsaXZlcnkgb25seSB3aXRoaW4gTWV0cm8gTWFuaWxhPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDEtZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+RE9DVU1FTlQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMi1waXp6YS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+Rk9PRDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkNMT1RISU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tZWRpY2FsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5NRURJQ0FMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDEtZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+RlJBR0lMRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2Uvb3RoZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk9USEVSUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiPk5vdGU6IE1BWElNVU0gV0VJR0hUIElTIDEwa2c8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRpb25hbFwiPkFkZGl0aW9uYWwgU2VydmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5JbnN1bGF0ZWQgQm94PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPkNhc2ggSGFuZGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+UXVldWVpbmcgU2VydmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5QYWJpbGkgU2VydmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgcGFkZGluZzogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIwcHg7XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXN0ZXJjYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyXCIgb25DbGljaz17b3BlbnN3ZWV0YWxlcnRjYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIE1hc3RlcmNhcmQgODI3OFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2luc3RhbnQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nSW5zdGFudFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOZXh0XCI+TmV4dCA+PjwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbE1hcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdk1hcCBmaXhlZC10b3BcIj5cclxuICAgICAgICAgICAgICA8R29vZ2xlbWFwPjwvR29vZ2xlbWFwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTG9uZ1RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBNb2RlIG9mIFBheW1lbnRcclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXN0ZXJjYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNYXN0ZXJjYXJkIDgyNzhcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGZvcm1DYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Zpc2EucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQ2FyZE51bWJlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFZpc2EgODI3OFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2FzaC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FzaCBvbiBkZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9pbnN0YW50LnN2Z1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Cb29rTW9kYWxcIj5CT09LPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=