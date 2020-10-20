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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_map_maploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/map/maploader */ "./component/map/maploader.js");
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/header */ "./component/header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-google-places-autocomplete */ "./node_modules/react-google-places-autocomplete/build/index.es.js");
/* harmony import */ var _component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/componentdidmount */ "./component/componentdidmount.js");
/* harmony import */ var _component_map_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/map/leaflet */ "./component/map/leaflet.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\pages\\map.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function map() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      tokenuser = _React$useState2[0],
      setTokenuser = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var places_data = coordinate;
  var click;
  var customStyles1 = {
    control: function control(base, state) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
        background: "transparent",
        color: "white",
        border: "1px solid #2c2c2c",
        boxShadow: "none",
        borderRadius: "5px",
        width: "100%",
        padding: "2px",
        marginTop: "5px"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "&:hover", {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }), _objectSpread2));
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "white"
      });
    }
  };
  var customStyles2 = {
    control: function control(base, state) {
      var _objectSpread3;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread3 = {
        background: "transparent",
        color: "white",
        border: "1px solid #2c2c2c",
        boxShadow: "none",
        borderRadius: "5px",
        width: "95%",
        padding: "2px",
        marginTop: "5px"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, "&:hover", {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }), _objectSpread3));
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "white"
      });
    }
  };
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
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default()(__jsx("div", {
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
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default()(__jsx("div", {
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      var foundUser = JSON.parse(loggedInUser);
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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      price = _React$useState4[0],
      setPrice = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      address = _useState[0],
      setAddress = _useState[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      addressDrop = _React$useState6[0],
      setAddressDrop = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      addressDrop1 = _React$useState8[0],
      setAddressDrop1 = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      addressDrop2 = _React$useState10[0],
      setAddressDrop2 = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      coordinates = _React$useState12[0],
      setCoordinates = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      coordinatesDrop = _React$useState14[0],
      setCoordinatesDrop = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      coordinatesDrop1 = _React$useState16[0],
      setCoordinatesDrop1 = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      coordinatesDrop2 = _React$useState18[0],
      setCoordinatesDrop2 = _React$useState18[1];

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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(value.label);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);

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
                  getRate();
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
                  getRate();
                }
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
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
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
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
                  __self: _this,
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
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 283,
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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(value.label);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);

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
                  getRate();
                } catch (err) {
                  _destination2 = {
                    lat: latLng.lat,
                    lng: latLng.lng,
                    id: "2"
                  };
                  coordinate.push(_destination2);
                  getRate();
                  router.push("");
                }
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
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
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
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
                  __self: _this,
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
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336,
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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(value.label);

            case 2:
              results = _context3.sent;
              _context3.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);

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
                getRate();
              } catch (err) {
                _destination3 = {
                  lat: latLng.lat,
                  lng: latLng.lng,
                  id: "3"
                };
                coordinate.push(_destination3);
                router.push("");
                getRate();
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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(value.label);

            case 2:
              results = _context4.sent;
              _context4.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);

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
                getRate();
              } catch (err) {
                _destination4 = {
                  lat: latLng.lat,
                  lng: latLng.lng,
                  id: "4"
                };
                coordinate.push(_destination4);
                router.push("");
                getRate();
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

    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_13___default.a.close();
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

  function getRate() {
    var ratedata = new FormData();
    ratedata.set("pick_up_latitude", coordinate[0].lat);
    ratedata.set("pick_up_longitude", coordinate[0].lng);
    ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    ratedata.set("drop_off_locations[0][drop_off_longitude]", coordinate[1].lng);
    ratedata.set("drop_off_locations[0][booking_order]", "1");
    ratedata.set("additional_services[0]", "");

    if (coordinate[2]) {
      ratedata.set("drop_off_locations[1][drop_off_latitude]", coordinate[2].lat);
      ratedata.set("drop_off_locations[1][drop_off_longitude]", coordinate[2].lng);
      ratedata.set("drop_off_locations[1][booking_order]", "2");
      ratedata.set("additional_services[1]", "");
    }

    if (coordinate[3]) {
      ratedata.set("drop_off_locations[2][drop_off_latitude]", coordinate[3].lat);
      ratedata.set("drop_off_locations[2][drop_off_longitude]", coordinate[3].lng);
      ratedata.set("drop_off_locations[2][booking_order]", "3");
      ratedata.set("additional_services[2]", "");
    }

    var apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    var options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
      var price = result.data.price;
      setPrice(Number(price).toFixed(2));
    })["catch"](function (err) {});
  }

  function btnPlaceorder() {
    console.log(coordinate[0].detailsname);
    var options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        Authorization: "Bearer " + tokenuser
      }
    };
    var ratedata = new FormData();
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

    var formdata = new FormData();
    formdata.set("customer_id", _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getId());
    formdata.set("booking_type_id", "2");
    formdata.set("contact_name", "Asdas");
    formdata.set("contact_number", coordinate[0].detailsnumber);
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

    var apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
    var apiUrl = "http://localhost:8000/api/auth/booking";
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
      formdata.set("price", result.data.price);
      var price = result.data.price;
      setPrice(Number(price).toFixed(2));
      axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(apiUrl, formdata, options).then(function (result) {})["catch"](function (err) {});
    })["catch"](function (err) {});
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
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
      lineNumber: 655,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 19
    }
  }, "LOGIN"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
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
      lineNumber: 673,
      columnNumber: 15
    }
  }), " ", "Pickup"), __jsx("div", {
    onClick: function onClick() {
      return click = 1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
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
      lineNumber: 681,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 685,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtName txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
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
      lineNumber: 738,
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
      lineNumber: 740,
      columnNumber: 15
    }
  }), "Dropoff"), __jsx("div", {
    onClick: function onClick() {
      return click = 2;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
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
      lineNumber: 748,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 752,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(evt) {
      return updateInputValue(evt);
    },
    className: "txtName txtAdditional",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueNumber(evt);
    },
    placeholder: "Contact Number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtAdd txtAdditional",
    onChange: function onChange(evt) {
      return updateInputAdd(evt);
    },
    placeholder: "Blk/Floor/Unit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("div", {
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
      lineNumber: 805,
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
      lineNumber: 810,
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
      lineNumber: 812,
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
      lineNumber: 820,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 824,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
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
      lineNumber: 852,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
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
      lineNumber: 860,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
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
      lineNumber: 868,
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
      lineNumber: 881,
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
      lineNumber: 886,
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
      lineNumber: 888,
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
      lineNumber: 896,
      columnNumber: 15
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 900,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 17
    }
  }, "+ Add details"), __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
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
      lineNumber: 928,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
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
      lineNumber: 936,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 943,
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
      lineNumber: 944,
      columnNumber: 23
    }
  })))))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
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
      lineNumber: 956,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
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
      lineNumber: 960,
      columnNumber: 15
    }
  }, "Category"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 23
    }
  }, "DOCUMENT")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
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
      lineNumber: 1030,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
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
      lineNumber: 1037,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
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
      lineNumber: 1039,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 21
    }
  }, "Queueing"))), __jsx("div", {
    className: "col-lg-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
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
      lineNumber: 1064,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 19
    }
  }, "Payment")), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
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
      lineNumber: 1069,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPrice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 19
    }
  }, "\u20B1", price), __jsx("p", {
    className: "pPriceSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 19
    }
  }, "This is your final payment, please confirm your destination and go proceed to payment page."), __jsx("button", {
    className: "btnBook",
    onClick: btnPlaceorder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1081,
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
      lineNumber: 1086,
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
      lineNumber: 1090,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
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
      lineNumber: 1092,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "pCardNumber",
    onClick: opensweetalertcard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 21
    }
  }, "Mastercard 8278"))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid imgInstant",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pNext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 21
    }
  }, "Next >>")))))), __jsx("div", {
    className: "col-lg-7 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1116,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118,
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
      lineNumber: 1123,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLongTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 15
    }
  }, "Mode of Payment")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
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
      lineNumber: 1140,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 17
    }
  }, "Mastercard 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
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
      lineNumber: 1154,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 17
    }
  }, "Visa 8278")), __jsx("div", {
    className: "form-inline formCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
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
      lineNumber: 1168,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "pCardNumberModal",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 17
    }
  }, "Cash on delivery"))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/instant.svg",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnBookModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 19
    }
  }, "BOOK"))))))));
}

_s(map, "p64RRXU5oHz7/JoJ4uvS0N+ilYk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2tlbnVzZXIiLCJzZXRUb2tlbnVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwbGFjZXNfZGF0YSIsImNvb3JkaW5hdGUiLCJjbGljayIsImN1c3RvbVN0eWxlczEiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwiY3VzdG9tU3R5bGVzMiIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInJlZnJlc2giLCJwaWNrb2ZmbGF0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBpY2tvZmZsbmciLCJkcm9wb2ZmbG5nIiwiZHJvcG9mZmxhdCIsIm9yaWdpbiIsImxhdCIsInBhcnNlRmxvYXQiLCJsbmciLCJpZCIsInB1c2giLCJkZXN0aW5hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvcGVuc3dlZXRhbGVydCIsInN3YWwiLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwic2V0QWRkIiwib3BlbnN3ZWV0YWxlcnRjYXJkIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwiZm91bmRVc2VyIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJzZXRBZGRyZXNzIiwidmFsdWUiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwicHJpY2VfdG90YWwiLCJzZXRQcmljZSIsIk51bWJlciIsInRvRml4ZWQiLCJwcmljZSIsImFkZHJlc3MiLCJhZGRyZXNzRHJvcCIsImFkZHJlc3NEcm9wMSIsInNldEFkZHJlc3NEcm9wMSIsImFkZHJlc3NEcm9wMiIsInNldEFkZHJlc3NEcm9wMiIsImNvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlc0Ryb3AiLCJzZXRDb29yZGluYXRlc0Ryb3AiLCJjb29yZGluYXRlc0Ryb3AxIiwic2V0Q29vcmRpbmF0ZXNEcm9wMSIsImNvb3JkaW5hdGVzRHJvcDIiLCJzZXRDb29yZGluYXRlc0Ryb3AyIiwiaGFuZGxlQ2hhbmdlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJzdHIiLCJuIiwiaW5jbHVkZXMiLCJvYmpJbmRleCIsImZpbmRJbmRleCIsIm9iaiIsImdldFJhdGUiLCJlcnIiLCJib3JkZXJMZWZ0IiwidGV4dEFsaWduIiwiaGFuZGxlQ2hhbmdlRHJvcCIsImhhbmRsZUNoYW5nZURyb3AxIiwiaGFuZGxlQ2hhbmdlRHJvcDIiLCJ1cGRhdGVJbnB1dFZhbHVlIiwiZXZ0IiwiZGV0YWlsc25hbWUiLCJ0YXJnZXQiLCJ1cGRhdGVJbnB1dFZhbHVlTnVtYmVyIiwiZGV0YWlsc251bWJlciIsImNvb2RpbmF0ZSIsInVwZGF0ZUlucHV0VmFsdWVBZGQiLCJkZXRhaWxzQWRkIiwiZHJvcG9mZmxhbmciLCJwaWNrb2ZmIiwiY2xvc2UiLCJkZWxldGVBZGQiLCJpbmRleCIsIngiLCJpbmRleE9mIiwic3BsaWNlIiwicmF0ZWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwaVVybF9yYXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJidG5QbGFjZW9yZGVyIiwiZm9ybWRhdGEiLCJBdXRoU2VydmljZSIsImdldElkIiwiYXBpVXJsIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsInVwZGF0ZUlucHV0QWRkIiwiZGlzcGxheSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQi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QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGdCQUROO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUNFLGFBQVMsRUFBQyxrQkFEWjtBQUVFLG1CQUFZLE9BRmQ7QUFHRSxtQkFBWSxxQkFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLENBN0JGLENBTkYsRUFrREU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLGFBQVMsRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUpGLENBREYsQ0FsREYsQ0FERixDQVJGLENBM2RGLENBREY7QUFzaUJEOztHQTVwQ3VCbkIsRztVQUVQTSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXAuZGU4ZmEzMTQ0YzcwYzhkODUyYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBMZWFmbGV0IGZyb20gXCIuLi9jb21wb25lbnQvbWFwL2xlYWZsZXRcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwKCkge1xyXG4gIGNvbnN0IFt0b2tlbnVzZXIsIHNldFRva2VudXNlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgcGxhY2VzX2RhdGEgPSBjb29yZGluYXRlO1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMyID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBsb2NhbHN0b3JhZ2UgdmFsdWUgaW4gcGlja29mZiwgZHJvcG9mZiBhbmQgbWFwICovXHJcbiAgfVxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9PT0gXCJcIikge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwicGlja29mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbG5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJwaWNrb2ZmbG5nXCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcImRyb3BvZmZsbmdcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwiZHJvcG9mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHtcclxuICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQpLFxyXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxuZyksXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0KSxcclxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcpLFxyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gXCIxXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIE1vZGFsIGZvciBjdXN0b20gbWFwICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5zd2VldGFsZXJ0KCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGVhZmxldD48L0xlYWZsZXQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyYWdcIj5DbGljayB0aGUgbWFwIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blNldFwiIG9uQ2xpY2s9e3NldEFkZH0+XHJcbiAgICAgICAgICBTRVRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnRjYXJkKCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiIDQ1MHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTW9kZVwiPk1vZGUgb2YgUGF5bWVudDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXN0ZXJjYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiPk1hc3RlcmNhcmQgODI3ODwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGZvcm1DYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Zpc2EucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQ2FyZE51bWJlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFZpc2EgODI3OFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2FzaC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FzaCBvbiBkZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaW5zdGFudC5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va01vZGFsXCI+Qk9PSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBTZXR0aW5nIHRoZSBhZGRyZXNzIG9mIHBpY2tvZmYgYW5kIGRyb3BvZmYgYWZ0ZXIgdGhlIHBhZ2UgbG9hZGVkICovXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBzZXRUb2tlbnVzZXIoZm91bmRVc2VyLnRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICB2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgfSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NEcm9wXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzRHJvcFwiKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHByaWNlX3RvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKTtcclxuICAgIHNldFByaWNlKE51bWJlcihwcmljZV90b3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaWNlXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHtcclxuICAgIC8qIEFsbCBhcnJheSBhbmQgdmFyaWFibGVzIG5lZWRlZCAqL1xyXG4gIH1cclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wMSwgc2V0QWRkcmVzc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcDIsIHNldEFkZHJlc3NEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wLCBzZXRDb29yZGluYXRlc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AxLCBzZXRDb29yZGluYXRlc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wMiwgc2V0Q29vcmRpbmF0ZXNEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIHtcclxuICAgIC8qIFBpY2tvZmYgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHZhciBzdHIgPSB2YWx1ZS5sYWJlbDtcclxuICAgIHZhciBuID0gc3RyLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpO1xyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmFkZHJlc3MgPSB2YWx1ZS5sYWJlbCksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgYWRkcmVzczogdmFsdWUubGFiZWwsXHJcbiAgICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBEcm9wb2ZmIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogU3RvcG9mZiAjMSBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AxID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcDEodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wMShsYXRMbmcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBTdG9wb2ZmICMyIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcDIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wMih2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AyKGxhdExuZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiNFwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbmFtZSBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZShldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNuYW1lID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbnVtYmVyIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc251bWJlciA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2RpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGFkZHJlc3MgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzQWRkID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGxhdCwgTG5nIGFuZCBnZW9jb2RlIG9mIHRoZSBhZGRyZXNzIGluIGNvbXBvbmVudCB0aGlzIGZ1bmN0aW9uIGlzIGZvciB0aGUgY3VzdG9tIG1hcCAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRBZGQoKSB7XHJcbiAgICBpZiAoY2xpY2sgPT09IDEpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGNvb3JkaW5hdGVzLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBjb29yZGluYXRlcy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gZWxzZSBpZiAoY2xpY2sgPT09IDIpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBjb29yZGluYXRlcy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gY29vcmRpbmF0ZXMubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBGdW5jdGlvbiB0byBkZWxldGUgaW5kZXggaW4gYXJyYXkgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlQWRkKCkge1xyXG4gICAgdmFyIGluZGV4ID0gcGxhY2VzX2RhdGFcclxuICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB4LmlkO1xyXG4gICAgICB9KVxyXG4gICAgICAuaW5kZXhPZihjbGljayk7XHJcbiAgICBwbGFjZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgY29uc29sZS5sb2cocGxhY2VzX2RhdGEpO1xyXG4gICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSYXRlKCkge1xyXG4gICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xhdGl0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbG9uZ2l0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubG5nKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCJcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIjNcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMl1cIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpVXJsX3JhdGUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jYWxjdWxhdGUtcmF0ZVwiO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VudXNlcixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcmVzdWx0LmRhdGEucHJpY2U7XHJcbiAgICAgICAgc2V0UHJpY2UoTnVtYmVyKHByaWNlKS50b0ZpeGVkKDIpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ0blBsYWNlb3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlWzBdLmRldGFpbHNuYW1lKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbnVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByYXRlZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sYXRpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xvbmdpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxuZyk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzBdXCIsIFwiXCIpO1xyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzJdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtib29raW5nX29yZGVyXVwiLCBcIlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1syXVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1kYXRhLnNldChcImN1c3RvbWVyX2lkXCIsIEF1dGhTZXJ2aWNlLmdldElkKCkpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiYm9va2luZ190eXBlX2lkXCIsIFwiMlwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiY29udGFjdF9uYW1lXCIsIFwiQXNkYXNcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvbnRhY3RfbnVtYmVyXCIsIGNvb3JkaW5hdGVbMF0uZGV0YWlsc251bWJlcik7XHJcbiAgICBcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG5cclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9hZGRyZXNzXVwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9uYW1lXVwiLCBcImthcmVuXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NvbnRhY3RfbnVtYmVyXVwiLCBcIjEyMzIxXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZGlzdGFuY2VdXCIsIFwiNS4zODI2MjAyMzExMzk4MjhcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzBdXCIsIFwiMVwiKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVsyXSkge1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfYWRkcmVzc11cIixcclxuICAgICAgICBhZGRyZXNzRHJvcDEubGFiZWxcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMlwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2NvbnRhY3RfbmFtZV1cIiwgXCJNYXJrXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY29udGFjdF9udW1iZXJdXCIsIFwiMTIzMjFcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjYXRlZ29yeV9pZF1cIiwgXCIxXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZGlzdGFuY2VdXCIsIFwiNS4zODI2MjAyMzExMzk4MjhcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMV1cIiwgXCIxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwaVVybF9yYXRlID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvY2FsY3VsYXRlLXJhdGVcIjtcclxuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2Jvb2tpbmdcIjtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChhcGlVcmxfcmF0ZSwgcmF0ZWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBmb3JtZGF0YS5zZXQoXCJwcmljZVwiLCByZXN1bHQuZGF0YS5wcmljZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcmVzdWx0LmRhdGEucHJpY2U7XHJcbiAgICAgICAgc2V0UHJpY2UoTnVtYmVyKHByaWNlKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLnBvc3QoYXBpVXJsLCBmb3JtZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHt9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbk1hcFwiPlxyXG4gICAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2xMZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjQwcHggMHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPkxPR0lOPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkhPTUU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUGljayBvZmYgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgd2lkdGg6IFwiMThweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPntcIiBcIn1cclxuICAgICAgICAgICAgICBQaWNrdXBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IChjbGljayA9IDEpfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZUFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsay9GbG9vci9Vbml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMSAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgRHJvcG9mZlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMil9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZSB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dEFkZCB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0QWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxrL0Zsb29yL1VuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAyICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMyl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZTdG9wb2ZmMSBkaXZTdG9wT2ZmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgU3RvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcDEsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZW1vdmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWdEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVBZGR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0QWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0QWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxrL0Zsb29yL1VuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3RvcCBvZmYgbnVtYmVyIDMgKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSA0KX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdlN0b3BvZmYyIGRpdlN0b3BPZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICBTdG9wIE9mZiBMb2NhdGlvblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCI0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wMixcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwMVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3JlbW92ZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgIGltZ0RlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUFkZH1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRBZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbGsvRmxvb3IvVW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5BZGRTdG9wb2ZmXCI+QWRkIFN0b3Atb2ZmPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOb3RlXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgTm90ZTogRGVsaXZlcnkgb25seSB3aXRoaW4gTWV0cm8gTWFuaWxhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5ET0NVTUVOVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDItcGl6emEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZPT0Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkNMT1RISU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21lZGljYWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk1FRElDQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZSQUdJTEU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2Uvb3RoZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk9USEVSUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiPk5vdGU6IE1BWElNVU0gV0VJR0hUIElTIDEwa2c8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRpb25hbFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5JbnN1bGF0ZWQgQm94PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPkNhc2ggSGFuZGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+UXVldWVpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+UGFiaWxpIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQYXltZW50XCI+UGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY3JlZGl0LWNhcmQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDogXCIxOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUHJpY2VcIj4mIzgzNjk7e3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB5b3VyIGZpbmFsIHBheW1lbnQsIHBsZWFzZSBjb25maXJtIHlvdXIgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBhbmQgZ28gcHJvY2VlZCB0byBwYXltZW50IHBhZ2UuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Cb29rXCIgb25DbGljaz17YnRuUGxhY2VvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxhY2Ugb3JkZXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgcGFkZGluZzogXCIwcHhcIiwgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMHB4O1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFzdGVyY2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2FyZE51bWJlclwiIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0Y2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBNYXN0ZXJjYXJkIDgyNzhcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9pbnN0YW50LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ0luc3RhbnRcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTmV4dFwiPk5leHQgPj48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2xNYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZNYXAgZml4ZWQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZW1hcD48L0dvb2dsZW1hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImV4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExvbmdUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgTW9kZSBvZiBQYXltZW50XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgZm9ybUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFzdGVyY2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTWFzdGVyY2FyZCA4Mjc4XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBmb3JtQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS92aXNhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBWaXNhIDgyNzhcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGZvcm1DYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2Nhc2gucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQ2FyZE51bWJlck1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhc2ggb24gZGVsaXZlcnlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvaW5zdGFudC5zdmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va01vZGFsXCI+Qk9PSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9