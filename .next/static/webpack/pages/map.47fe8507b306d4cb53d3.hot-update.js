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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      click_id = _React$useState4[0],
      setId = _React$useState4[1];

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
        lineNumber: 110,
        columnNumber: 7
      }
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }), __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, "Click the map to set location"), __jsx("button", {
      className: "btnSet",
      onClick: setAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, "SET")));
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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      price = _React$useState6[0],
      setPrice = _React$useState6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      address = _useState[0],
      setAddress = _useState[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      addressDrop = _React$useState8[0],
      setAddressDrop = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      addressDrop1 = _React$useState10[0],
      setAddressDrop1 = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      addressDrop2 = _React$useState12[0],
      setAddressDrop2 = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      coordinates = _React$useState14[0],
      setCoordinates = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      coordinatesDrop = _React$useState16[0],
      setCoordinatesDrop = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      coordinatesDrop1 = _React$useState18[0],
      setCoordinatesDrop1 = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState19, 2),
      coordinatesDrop2 = _React$useState20[0],
      setCoordinatesDrop2 = _React$useState20[1];

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
                    lineNumber: 207,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208,
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
                    lineNumber: 209,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213,
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
                    lineNumber: 214,
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
                    lineNumber: 216,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218,
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
                    lineNumber: 260,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261,
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
                    lineNumber: 262,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266,
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
                    lineNumber: 267,
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
                    lineNumber: 269,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271,
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

  function deleteAdd(e) {
    console.log(e.currentTarget.id);

    for (var i = 0; i < places_data.length; i++) {
      if (places_data[i].id == e.currentTarget.id) {
        places_data.splice(i, 1);
      }
    }

    console.log(places_data);
    router.push("");
    getRate();
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
      ratedata.set("drop_off_locations[1][booking_order]", "2");
      ratedata.set("additional_services[1]", "");
    }

    if (coordinate[3]) {
      ratedata.set("drop_off_locations[2][drop_off_latitude]", coordinate[3].lat);
      ratedata.set("drop_off_locations[2][drop_off_longitude]", coordinate[3].lng);
      ratedata.set("drop_off_locations[2][booking_order]", "3");
      ratedata.set("additional_services[2]", "");
    }

    var formdata = new FormData();
    formdata.set("customer_id", _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getId());
    formdata.set("booking_type_id", "1");
    formdata.set("contact_number", coordinate[0].detailsnumber);
    formdata.set("note", coordinate[0].detailsAdd);
    formdata.set("pick_up_address", address.label);
    formdata.set("pick_up_latitude", coordinate[0].lat);
    formdata.set("pick_up_longitude", coordinate[0].lng);
    formdata.set("drop_off_locations[0][drop_off_address]", addressDrop.label);
    formdata.set("drop_off_locations[0][drop_off_latitude]", coordinate[1].lat);
    formdata.set("drop_off_locations[0][drop_off_longitude]", coordinate[1].lng);
    formdata.set("drop_off_locations[0][booking_order]", "1");
    formdata.set("drop_off_locations[0][contact_name]", coordinate[1].detailsname);
    formdata.set("drop_off_locations[0][contact_number]", coordinate[1].detailsnumber);
    formdata.set("drop_off_locations[0][category_id]", "1");
    formdata.set("drop_off_locations[0][distance]", "5.4");
    formdata.set("additional_services[0]", "1");

    if (coordinate[2]) {
      formdata.set("drop_off_locations[1][drop_off_address]", addressDrop1.label);
      formdata.set("drop_off_locations[1][drop_off_latitude]", coordinate[2].lat);
      formdata.set("drop_off_locations[1][drop_off_longitude]", coordinate[2].lng);
      formdata.set("drop_off_locations[1][booking_order]", "2");
      formdata.set("drop_off_locations[1][contact_name]", coordinate[2].detailsname);
      formdata.set("drop_off_locations[1][contact_number]", coordinate[2].detailsnumber);
      formdata.set("drop_off_locations[1][category_id]", "1");
      formdata.set("drop_off_locations[1][distance]", "5.382620231139828");
      formdata.set("additional_services[1]", "1");
    }

    if (coordinate[3]) {
      formdata.set("drop_off_locations[2][drop_off_address]", addressDrop2.label);
      formdata.set("drop_off_locations[2][drop_off_latitude]", coordinate[3].lat);
      formdata.set("drop_off_locations[2][drop_off_longitude]", coordinate[3].lng);
      formdata.set("drop_off_locations[2][booking_order]", "3");
      formdata.set("drop_off_locations[2][contact_name]", coordinate[3].detailsname);
      formdata.set("drop_off_locations[2][contact_number]", coordinate[3].detailsnumber);
      formdata.set("drop_off_locations[2][category_id]", "1");
      formdata.set("drop_off_locations[2][distance]", "5.382620231139828");
      formdata.set("additional_services[2]", "1");
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

  function checkdata() {
    console.log(click_id);
    console.log(places_data);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_component_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
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
      lineNumber: 637,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 19
    }
  }, "LOGIN"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
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
      lineNumber: 655,
      columnNumber: 15
    }
  }), " ", "Pickup"), __jsx("div", {
    onClick: function onClick() {
      return click = 1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
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
      lineNumber: 663,
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
      lineNumber: 667,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
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
      lineNumber: 690,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
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
      lineNumber: 698,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Note",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
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
      lineNumber: 721,
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
      lineNumber: 723,
      columnNumber: 15
    }
  }), "Dropoff"), __jsx("div", {
    onClick: function onClick() {
      return click = 2;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
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
      lineNumber: 731,
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
      lineNumber: 735,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
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
      lineNumber: 758,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
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
      lineNumber: 766,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Note",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("div", {
    onClick: function onClick() {
      return click = 3, setId("3");
    },
    style: {
      display: "none"
    },
    className: "divStopoff1 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
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
      lineNumber: 793,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/mapgps.svg",
    className: "img-fluid",
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 17
    }
  }), "Stop Off Location"), __jsx("div", {
    className: "form-inline",
    style: {
      width: "100%",
      marginLeft: "5%"
    },
    onClick: function onClick() {
      return click = 3;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
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
      lineNumber: 807,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    id: "3",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
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
      lineNumber: 832,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
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
      lineNumber: 840,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Note",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("div", {
    onClick: function onClick() {
      return click = 4, setId(4);
    },
    style: {
      display: "none"
    },
    className: "divStopoff2 divStopOff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
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
      lineNumber: 867,
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
      lineNumber: 869,
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
      lineNumber: 877,
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
      lineNumber: 881,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/remove.png",
    className: "img-fluid  imgDelete",
    id: "4",
    onClick: deleteAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
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
      lineNumber: 906,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
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
      lineNumber: 914,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    className: "txtNumber txtAdditional",
    onChange: function onChange(evt) {
      return updateInputValueAdd(evt);
    },
    placeholder: "Note",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
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
      lineNumber: 935,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
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
      lineNumber: 939,
      columnNumber: 15
    }
  }, "Category"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 943,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 23
    }
  }, "DOCUMENT")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
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
      lineNumber: 1009,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
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
      lineNumber: 1016,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
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
      lineNumber: 1018,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-4 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    onClick: checkdata,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
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
      lineNumber: 1047,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 19
    }
  }, "Payment")), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
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
      lineNumber: 1052,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPrice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 19
    }
  }, "\u20B1", price), __jsx("p", {
    className: "pPriceSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 19
    }
  }, "This is your final payment, please confirm your destination and go proceed to payment page."), __jsx("button", {
    className: "btnBook",
    onClick: btnPlaceorder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 19
    }
  }, "Place order"))))), __jsx("div", {
    className: "col-lg-7 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1073,
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
      lineNumber: 1078,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    style: {
      padding: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pMode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 15
    }
  }, "Mode of payment"), __jsx("p", {
    className: "pModeSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 15
    }
  }, "Please make a payment below to start your booking process. If your payment methos is not there you can add your own below.")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "Image/peso.png",
    className: "img-fluid mx-auto d-flex",
    style: {
      width: "55px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1105,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 21
    }
  }, "Cash on delivery"), __jsx("p", {
    className: "pCodSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 21
    }
  }, "Pay once when its delivered")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pPriceModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 21
    }
  }, "\u20B1", price)))), __jsx("p", {
    className: "pMode",
    style: {
      fontSize: "1rem",
      marginTop: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 15
    }
  }, "Payment Details"), __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/visa.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-9",
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pCardType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 19
    }
  }, "Credit Card"), __jsx("p", {
    className: "pCardNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 19
    }
  }, "1234 xxxx xxxx 1234")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAddMethod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 19
    }
  }, "ADD PAYMENT METHOD")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 19
    }
  }, "Payment")))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 13
    }
  })))));
}

_s(map, "m7ql3NM9vHDf+G4TgqEc/34i/O4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2tlbnVzZXIiLCJzZXRUb2tlbnVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwbGFjZXNfZGF0YSIsImNvb3JkaW5hdGUiLCJjbGlja19pZCIsInNldElkIiwiY2xpY2siLCJjdXN0b21TdHlsZXMxIiwiY29udHJvbCIsImJhc2UiLCJzdGF0ZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImlzRm9jdXNlZCIsImJvcmRlckNvbG9yIiwic2luZ2xlVmFsdWUiLCJwcm92aWRlZCIsImN1c3RvbVN0eWxlczIiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJyZWZyZXNoIiwicGlja29mZmxhdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwaWNrb2ZmbG5nIiwiZHJvcG9mZmxuZyIsImRyb3BvZmZsYXQiLCJvcmlnaW4iLCJsYXQiLCJwYXJzZUZsb2F0IiwibG5nIiwiaWQiLCJwdXNoIiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwib3BlbnN3ZWV0YWxlcnQiLCJzd2FsIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsInNldEFkZCIsInVzZUVmZmVjdCIsImxvZ2dlZEluVXNlciIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwic2V0QWRkcmVzcyIsInZhbHVlIiwibGFiZWwiLCJzZXRBZGRyZXNzRHJvcCIsInByaWNlX3RvdGFsIiwic2V0UHJpY2UiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwicHJpY2UiLCJhZGRyZXNzIiwiYWRkcmVzc0Ryb3AiLCJhZGRyZXNzRHJvcDEiLCJzZXRBZGRyZXNzRHJvcDEiLCJhZGRyZXNzRHJvcDIiLCJzZXRBZGRyZXNzRHJvcDIiLCJjb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXNEcm9wIiwic2V0Q29vcmRpbmF0ZXNEcm9wIiwiY29vcmRpbmF0ZXNEcm9wMSIsInNldENvb3JkaW5hdGVzRHJvcDEiLCJjb29yZGluYXRlc0Ryb3AyIiwic2V0Q29vcmRpbmF0ZXNEcm9wMiIsImhhbmRsZUNoYW5nZSIsImdlb2NvZGVCeUFkZHJlc3MiLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0TG5nIiwic3RyIiwibiIsImluY2x1ZGVzIiwib2JqSW5kZXgiLCJmaW5kSW5kZXgiLCJvYmoiLCJnZXRSYXRlIiwiZXJyIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsImhhbmRsZUNoYW5nZURyb3AiLCJoYW5kbGVDaGFuZ2VEcm9wMSIsImhhbmRsZUNoYW5nZURyb3AyIiwidXBkYXRlSW5wdXRWYWx1ZSIsImV2dCIsImRldGFpbHNuYW1lIiwidGFyZ2V0IiwidXBkYXRlSW5wdXRWYWx1ZU51bWJlciIsImRldGFpbHNudW1iZXIiLCJjb29kaW5hdGUiLCJ1cGRhdGVJbnB1dFZhbHVlQWRkIiwiZGV0YWlsc0FkZCIsImRyb3BvZmZsYW5nIiwicGlja29mZiIsImNsb3NlIiwiZGVsZXRlQWRkIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicmF0ZWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwaVVybF9yYXRlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJidG5QbGFjZW9yZGVyIiwiZm9ybWRhdGEiLCJBdXRoU2VydmljZSIsImdldElkIiwiYXBpVXJsIiwiY2hlY2tkYXRhIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImRpc3BsYXkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUNNQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUROO0FBQUE7QUFBQSxNQUNyQkMsU0FEcUI7QUFBQSxNQUNWQyxZQURVOztBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHQyxVQUFsQjs7QUFINEIseUJBSUZQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSkU7QUFBQTtBQUFBLE1BSXJCTyxRQUpxQjtBQUFBLE1BSVhDLEtBSlc7O0FBSzVCLE1BQUlDLEtBQUo7QUFFQSxNQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFdBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUE7O0FBQUEsNkNBQ0pELElBREk7QUFFUEUsa0JBQVUsRUFBRSxhQUZMO0FBR1BDLGFBQUssRUFBRSxPQUhBO0FBSVBDLGNBQU0sRUFBRSxtQkFKRDtBQUtQQyxpQkFBUyxFQUFFLE1BTEo7QUFNUEMsb0JBQVksRUFBRSxLQU5QO0FBT1BDLGFBQUssRUFBRSxNQVBBO0FBUVBDLGVBQU8sRUFBRSxLQVJGO0FBU1BDLGlCQUFTLEVBQUU7QUFUSixnSUFVSVIsS0FBSyxDQUFDUyxTQUFOLEdBQWtCLFNBQWxCLEdBQThCLElBVmxDLDZHQVdQLFNBWE8sRUFXSTtBQUNUO0FBQ0FDLG1CQUFXLEVBQUVWLEtBQUssQ0FBQ1MsU0FBTixHQUFrQixTQUFsQixHQUE4QjtBQUZsQyxPQVhKO0FBQUEsS0FEVztBQWlCcEJFLGVBQVcsRUFBRSxxQkFBQ0MsUUFBRDtBQUFBLDZDQUNSQSxRQURRO0FBRVhWLGFBQUssRUFBRTtBQUZJO0FBQUE7QUFqQk8sR0FBdEI7QUF1QkEsTUFBTVcsYUFBYSxHQUFHO0FBQ3BCZixXQUFPLEVBQUUsaUJBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBOztBQUFBLDZDQUNKRCxJQURJO0FBRVBFLGtCQUFVLEVBQUUsYUFGTDtBQUdQQyxhQUFLLEVBQUUsT0FIQTtBQUlQQyxjQUFNLEVBQUUsbUJBSkQ7QUFLUEMsaUJBQVMsRUFBRSxNQUxKO0FBTVBDLG9CQUFZLEVBQUUsS0FOUDtBQU9QQyxhQUFLLEVBQUUsS0FQQTtBQVFQQyxlQUFPLEVBQUUsS0FSRjtBQVNQQyxpQkFBUyxFQUFFO0FBVEosZ0lBVUlSLEtBQUssQ0FBQ1MsU0FBTixHQUFrQixTQUFsQixHQUE4QixJQVZsQyw2R0FXUCxTQVhPLEVBV0k7QUFDVDtBQUNBQyxtQkFBVyxFQUFFVixLQUFLLENBQUNTLFNBQU4sR0FBa0IsU0FBbEIsR0FBOEI7QUFGbEMsT0FYSjtBQUFBLEtBRFc7QUFpQnBCRSxlQUFXLEVBQUUscUJBQUNDLFFBQUQ7QUFBQSw2Q0FDUkEsUUFEUTtBQUVYVixhQUFLLEVBQUU7QUFGSTtBQUFBO0FBakJPLEdBQXRCO0FBdUJBO0FBQ0U7QUFDRDs7QUFDRCxZQUFxQjtBQUNuQixRQUFJWSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJDLE9BQTVCLEtBQXdDLEVBQTVDLEVBQWdEO0FBQzlDSixZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJFLFVBQTVCLEdBQXlDQyxZQUFZLENBQUNDLE9BQWIsQ0FDdkMsWUFEdUMsQ0FBekM7QUFHQVAsWUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCSyxVQUE1QixHQUF5Q0YsWUFBWSxDQUFDQyxPQUFiLENBQ3ZDLFlBRHVDLENBQXpDO0FBR0FQLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk0sVUFBNUIsR0FBeUNILFlBQVksQ0FBQ0MsT0FBYixDQUN2QyxZQUR1QyxDQUF6QztBQUdBUCxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJPLFVBQTVCLEdBQXlDSixZQUFZLENBQUNDLE9BQWIsQ0FDdkMsWUFEdUMsQ0FBekM7QUFHQSxVQUFNSSxNQUFNLEdBQUc7QUFDYkMsV0FBRyxFQUFFQyxVQUFVLENBQUNiLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkUsVUFBN0IsQ0FERjtBQUViUyxXQUFHLEVBQUVELFVBQVUsQ0FBQ2IsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCSyxVQUE3QixDQUZGO0FBR2JPLFVBQUUsRUFBRTtBQUhTLE9BQWY7QUFLQXBDLGdCQUFVLENBQUNxQyxJQUFYLENBQWdCTCxNQUFoQjtBQUNBLFVBQU1NLFdBQVcsR0FBRztBQUNsQkwsV0FBRyxFQUFFQyxVQUFVLENBQUNiLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk8sVUFBN0IsQ0FERztBQUVsQkksV0FBRyxFQUFFRCxVQUFVLENBQUNiLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk0sVUFBN0IsQ0FGRztBQUdsQk0sVUFBRSxFQUFFO0FBSGMsT0FBcEI7QUFLQXBDLGdCQUFVLENBQUNxQyxJQUFYLENBQWdCQyxXQUFoQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWXhDLFVBQVo7QUFDQXFCLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkMsT0FBNUIsR0FBc0MsR0FBdEM7QUFDRDtBQUNGLEdBN0JELE1BNkJPLEVBQ047O0FBRUQ7QUFDRTtBQUNEOztBQUNELFdBQVNnQixjQUFULEdBQTBCO0FBQ3hCQyxrRUFBSSxDQUNGO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsVUFETDtBQUVMQyxnQkFBUSxFQUFFLFFBRkw7QUFHTGhDLG9CQUFZLEVBQUUsS0FIVDtBQUlMQyxhQUFLLEVBQUU7QUFKRixPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQVNFO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FURixFQVVFO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQTJCLGFBQU8sRUFBRWdDLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixDQURFLENBQUo7QUFnQkQ7O0FBRUQ7QUFDRTtBQUNEO0FBQ0RDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR3BCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFyQjs7QUFDQSxRQUFJRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBSixFQUFtQztBQUNqQyxVQUFNb0IsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxDQUFsQjtBQUNBbkQsa0JBQVksQ0FBQ29ELFNBQVMsQ0FBQ0csS0FBWCxDQUFaO0FBQ0Q7O0FBQ0RDLGNBQVUsQ0FBQztBQUNUQyxXQUFLLEVBQUUxQixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FERTtBQUVUMEIsV0FBSyxFQUFFM0IsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCO0FBRkUsS0FBRCxDQUFWO0FBSUEyQixrQkFBYyxDQUFDO0FBQ2JGLFdBQUssRUFBRTFCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQURNO0FBRWIwQixXQUFLLEVBQUUzQixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckI7QUFGTSxLQUFELENBQWQ7QUFJQSxRQUFJNEIsV0FBVyxHQUFHN0IsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWxCO0FBQ0E2QixZQUFRLENBQUNDLE1BQU0sQ0FBQ0YsV0FBRCxDQUFOLENBQW9CRyxPQUFwQixDQUE0QixDQUE1QixDQUFELENBQVI7QUFDQXBCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWjtBQUNELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkE7QUFDRTtBQUNEOztBQXRJMkIseUJBdUlGbkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0F2SUU7QUFBQTtBQUFBLE1BdUlyQmtFLEtBdklxQjtBQUFBLE1BdUlkSCxRQXZJYzs7QUFBQSxrQkF3SUUvRCxzREFBUSxDQUFDLElBQUQsQ0F4SVY7QUFBQSxNQXdJckJtRSxPQXhJcUI7QUFBQSxNQXdJWlQsVUF4SVk7O0FBQUEseUJBeUlVM0QsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0F6SVY7QUFBQTtBQUFBLE1BeUlyQm9FLFdBeklxQjtBQUFBLE1BeUlSUCxjQXpJUTs7QUFBQSx5QkEwSVk5RCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQTFJWjtBQUFBO0FBQUEsTUEwSXJCcUUsWUExSXFCO0FBQUEsTUEwSVBDLGVBMUlPOztBQUFBLDBCQTJJWXZFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBM0laO0FBQUE7QUFBQSxNQTJJckJ1RSxZQTNJcUI7QUFBQSxNQTJJUEMsZUEzSU87O0FBQUEsMEJBNElVekUsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQ25EdUMsT0FBRyxFQUFFLElBRDhDO0FBRW5ERSxPQUFHLEVBQUU7QUFGOEMsR0FBZixDQTVJVjtBQUFBO0FBQUEsTUE0SXJCZ0MsV0E1SXFCO0FBQUEsTUE0SVJDLGNBNUlROztBQUFBLDBCQWdKa0IzRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDM0R1QyxPQUFHLEVBQUUsSUFEc0Q7QUFFM0RFLE9BQUcsRUFBRTtBQUZzRCxHQUFmLENBaEpsQjtBQUFBO0FBQUEsTUFnSnJCa0MsZUFoSnFCO0FBQUEsTUFnSkpDLGtCQWhKSTs7QUFBQSwwQkFvSm9CN0UsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQzdEdUMsT0FBRyxFQUFFLElBRHdEO0FBRTdERSxPQUFHLEVBQUU7QUFGd0QsR0FBZixDQXBKcEI7QUFBQTtBQUFBLE1Bb0pyQm9DLGdCQXBKcUI7QUFBQSxNQW9KSEMsbUJBcEpHOztBQUFBLDBCQXdKb0IvRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDN0R1QyxPQUFHLEVBQUUsSUFEd0Q7QUFFN0RFLE9BQUcsRUFBRTtBQUZ3RCxHQUFmLENBeEpwQjtBQUFBO0FBQUEsTUF3SnJCc0MsZ0JBeEpxQjtBQUFBLE1Bd0pIQyxtQkF4Skc7O0FBNko1QjtBQUNFO0FBQ0Q7O0FBQ0QsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPdEIsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR3VCLDBGQUFnQixDQUFDdkIsS0FBSyxDQUFDQyxLQUFQLENBRG5COztBQUFBO0FBQ2J1QixxQkFEYTtBQUFBO0FBQUEscUJBRUVDLG1GQUFTLENBQUNELE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FGWDs7QUFBQTtBQUViRSxvQkFGYTtBQUdmQyxpQkFIZSxHQUdUM0IsS0FBSyxDQUFDQyxLQUhHO0FBSWYyQixlQUplLEdBSVhELEdBQUcsQ0FBQ0UsUUFBSixDQUFhLGNBQWIsQ0FKVzs7QUFLbkIsa0JBQUlELENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2Q3QiwwQkFBVSxDQUFDQyxLQUFELENBQVY7QUFDQWUsOEJBQWMsQ0FBQ1csTUFBRCxDQUFkOztBQUNBLG9CQUFJO0FBQ0VJLDBCQURGLEdBQ2FwRixXQUFXLENBQUNxRixTQUFaLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSwyQkFBU0EsR0FBRyxDQUFDakQsRUFBSixJQUFVakMsS0FBbkI7QUFBQSxtQkFBdEIsQ0FEYjtBQUVESiw2QkFBVyxDQUFDb0YsUUFBRCxDQUFYLENBQXNCbEQsR0FBdEIsR0FBNEI4QyxNQUFNLENBQUM5QyxHQUFwQyxFQUNHbEMsV0FBVyxDQUFDb0YsUUFBRCxDQUFYLENBQXNCaEQsR0FBdEIsR0FBNEI0QyxNQUFNLENBQUM1QyxHQUR0QyxFQUVHcEMsV0FBVyxDQUFDb0YsUUFBRCxDQUFYLENBQXNCdEIsT0FBdEIsR0FBZ0NSLEtBQUssQ0FBQ0MsS0FGekMsRUFHRWYsT0FBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFaLENBSEY7QUFJQUgsd0JBQU0sQ0FBQ3dDLElBQVAsQ0FBWSxFQUFaO0FBQ0FpRCx5QkFBTztBQUNSLGlCQVJELENBUUUsT0FBT0MsR0FBUCxFQUFZO0FBQ05qRCw4QkFETSxHQUNRO0FBQ2xCdUIsMkJBQU8sRUFBRVIsS0FBSyxDQUFDQyxLQURHO0FBRWxCckIsdUJBQUcsRUFBRThDLE1BQU0sQ0FBQzlDLEdBRk07QUFHbEJFLHVCQUFHLEVBQUU0QyxNQUFNLENBQUM1QyxHQUhNO0FBSWxCQyxzQkFBRSxFQUFFO0FBSmMsbUJBRFI7QUFPWnBDLDRCQUFVLENBQUNxQyxJQUFYLENBQWdCQyxZQUFoQjtBQUNBQyx5QkFBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFaO0FBQ0FILHdCQUFNLENBQUN3QyxJQUFQLENBQVksRUFBWjtBQUNBaUQseUJBQU87QUFDUjtBQUNGLGVBdkJELE1BdUJPO0FBQ0w1Qyw4RUFBSSxDQUNGO0FBQUssdUJBQUssRUFBRTtBQUFFN0IseUJBQUssRUFBRSxPQUFUO0FBQWtCQywyQkFBTyxFQUFFO0FBQTNCLG1CQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0U7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRTtBQUNFLDJCQUFTLEVBQUMsd0JBRFo7QUFFRSx1QkFBSyxFQUFFO0FBQUUwRSw4QkFBVSxFQUFFO0FBQWQsbUJBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJRTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNFO0FBQUsscUJBQUcsRUFBQyxvQkFBVDtBQUE4Qix1QkFBSyxFQUFFO0FBQUUzRSx5QkFBSyxFQUFFO0FBQVQsbUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FKRixFQU9FO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQTJCLHVCQUFLLEVBQUU7QUFBRTRFLDZCQUFTLEVBQUU7QUFBYixtQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRTtBQUFHLDJCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBRywyQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFGRixDQVBGLENBREYsQ0FERixDQURFLENBQUo7QUFvQkQ7O0FBakRrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaZCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQW9EQTtBQUNFO0FBQ0Q7O0FBQ0QsTUFBTWUsZ0JBQWdCO0FBQUEsaU1BQUcsa0JBQU9yQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEdUIsMEZBQWdCLENBQUN2QixLQUFLLENBQUNDLEtBQVAsQ0FEZjs7QUFBQTtBQUNqQnVCLHFCQURpQjtBQUFBO0FBQUEscUJBRUZDLG1GQUFTLENBQUNELE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FGUDs7QUFBQTtBQUVqQkUsb0JBRmlCO0FBR25CQyxpQkFIbUIsR0FHYjNCLEtBQUssQ0FBQ0MsS0FITztBQUluQjJCLGVBSm1CLEdBSWZELEdBQUcsQ0FBQ0UsUUFBSixDQUFhLGNBQWIsQ0FKZTs7QUFNdkIsa0JBQUlELENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2Qsb0JBQUk7QUFDRjFCLGdDQUFjLENBQUNGLEtBQUQsQ0FBZDtBQUNBaUIsb0NBQWtCLENBQUNTLE1BQUQsQ0FBbEI7QUFDSUksMEJBSEYsR0FHYXBGLFdBQVcsQ0FBQ3FGLFNBQVosQ0FBc0IsVUFBQ0MsR0FBRDtBQUFBLDJCQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLG1CQUF0QixDQUhiO0FBSURKLDZCQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JsRCxHQUF0QixHQUE0QjhDLE1BQU0sQ0FBQzlDLEdBQXBDLEVBQ0dsQyxXQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JoRCxHQUF0QixHQUE0QjRDLE1BQU0sQ0FBQzVDLEdBRHRDLEVBRUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsVUFBWixDQUZGO0FBR0FILHdCQUFNLENBQUN3QyxJQUFQLENBQVksRUFBWjtBQUNBaUQseUJBQU87QUFDUixpQkFURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNOakQsK0JBRE0sR0FDUTtBQUNsQkwsdUJBQUcsRUFBRThDLE1BQU0sQ0FBQzlDLEdBRE07QUFFbEJFLHVCQUFHLEVBQUU0QyxNQUFNLENBQUM1QyxHQUZNO0FBR2xCQyxzQkFBRSxFQUFFO0FBSGMsbUJBRFI7QUFNWnBDLDRCQUFVLENBQUNxQyxJQUFYLENBQWdCQyxhQUFoQjtBQUNBZ0QseUJBQU87QUFDUHpGLHdCQUFNLENBQUN3QyxJQUFQLENBQVksRUFBWjtBQUNEO0FBQ0YsZUFwQkQsTUFvQk87QUFDTEssOEVBQUksQ0FDRjtBQUFLLHVCQUFLLEVBQUU7QUFBRTdCLHlCQUFLLEVBQUUsT0FBVDtBQUFrQkMsMkJBQU8sRUFBRTtBQUEzQixtQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0U7QUFDRSwyQkFBUyxFQUFDLHdCQURaO0FBRUUsdUJBQUssRUFBRTtBQUFFMEUsOEJBQVUsRUFBRTtBQUFkLG1CQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSUU7QUFBSywyQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRTtBQUFLLHFCQUFHLEVBQUMsb0JBQVQ7QUFBOEIsdUJBQUssRUFBRTtBQUFFM0UseUJBQUssRUFBRTtBQUFULG1CQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBSkYsRUFPRTtBQUFLLDJCQUFTLEVBQUMsV0FBZjtBQUEyQix1QkFBSyxFQUFFO0FBQUU0RSw2QkFBUyxFQUFFO0FBQWIsbUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0U7QUFBRywyQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsMkJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBRkYsQ0FQRixDQURGLENBREYsQ0FERSxDQUFKO0FBb0JEOztBQS9Dc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJDLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFrREE7QUFDRTtBQUNEOztBQUNELE1BQU1DLGlCQUFpQjtBQUFBLGlNQUFHLGtCQUFPdEMsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRnVCLDBGQUFnQixDQUFDdkIsS0FBSyxDQUFDQyxLQUFQLENBRGQ7O0FBQUE7QUFDbEJ1QixxQkFEa0I7QUFBQTtBQUFBLHFCQUVIQyxtRkFBUyxDQUFDRCxPQUFPLENBQUMsQ0FBRCxDQUFSLENBRk47O0FBQUE7QUFFbEJFLG9CQUZrQjtBQUd4QmYsNkJBQWUsQ0FBQ1gsS0FBRCxDQUFmO0FBQ0FtQixpQ0FBbUIsQ0FBQ08sTUFBRCxDQUFuQjs7QUFDQSxrQkFBSTtBQUNFSSx3QkFERixHQUNhcEYsV0FBVyxDQUFDcUYsU0FBWixDQUFzQixVQUFDQyxHQUFEO0FBQUEseUJBQVNBLEdBQUcsQ0FBQ2pELEVBQUosSUFBVWpDLEtBQW5CO0FBQUEsaUJBQXRCLENBRGI7QUFFREosMkJBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmxELEdBQXRCLEdBQTRCOEMsTUFBTSxDQUFDOUMsR0FBcEMsRUFDR2xDLFdBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmhELEdBQXRCLEdBQTRCNEMsTUFBTSxDQUFDNUMsR0FEdEMsRUFFRUksT0FBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFaLENBRkY7QUFHQUgsc0JBQU0sQ0FBQ3dDLElBQVAsQ0FBWSxFQUFaO0FBQ0FpRCx1QkFBTztBQUNSLGVBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDTmpELDZCQURNLEdBQ1E7QUFDbEJMLHFCQUFHLEVBQUU4QyxNQUFNLENBQUM5QyxHQURNO0FBRWxCRSxxQkFBRyxFQUFFNEMsTUFBTSxDQUFDNUMsR0FGTTtBQUdsQkMsb0JBQUUsRUFBRTtBQUhjLGlCQURSO0FBTVpwQywwQkFBVSxDQUFDcUMsSUFBWCxDQUFnQkMsYUFBaEI7QUFDQXpDLHNCQUFNLENBQUN3QyxJQUFQLENBQVksRUFBWjtBQUNBaUQsdUJBQU87QUFDUjs7QUFyQnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCSyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBd0JBO0FBQ0U7QUFDRDs7QUFDRCxNQUFNQyxpQkFBaUI7QUFBQSxpTUFBRyxrQkFBT3ZDLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0Z1QiwwRkFBZ0IsQ0FBQ3ZCLEtBQUssQ0FBQ0MsS0FBUCxDQURkOztBQUFBO0FBQ2xCdUIscUJBRGtCO0FBQUE7QUFBQSxxQkFFSEMsbUZBQVMsQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUZOOztBQUFBO0FBRWxCRSxvQkFGa0I7QUFHeEJiLDZCQUFlLENBQUNiLEtBQUQsQ0FBZjtBQUNBcUIsaUNBQW1CLENBQUNLLE1BQUQsQ0FBbkI7O0FBQ0Esa0JBQUk7QUFDRUksd0JBREYsR0FDYXBGLFdBQVcsQ0FBQ3FGLFNBQVosQ0FBc0IsVUFBQ0MsR0FBRDtBQUFBLHlCQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLGlCQUF0QixDQURiO0FBRURKLDJCQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JsRCxHQUF0QixHQUE0QjhDLE1BQU0sQ0FBQzlDLEdBQXBDLEVBQ0dsQyxXQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JoRCxHQUF0QixHQUE0QjRDLE1BQU0sQ0FBQzVDLEdBRHRDLEVBRUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsVUFBWixDQUZGO0FBR0FILHNCQUFNLENBQUN3QyxJQUFQLENBQVksRUFBWjtBQUNBaUQsdUJBQU87QUFDUixlQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ05qRCw2QkFETSxHQUNRO0FBQ2xCTCxxQkFBRyxFQUFFOEMsTUFBTSxDQUFDOUMsR0FETTtBQUVsQkUscUJBQUcsRUFBRTRDLE1BQU0sQ0FBQzVDLEdBRk07QUFHbEJDLG9CQUFFLEVBQUU7QUFIYyxpQkFEUjtBQU1acEMsMEJBQVUsQ0FBQ3FDLElBQVgsQ0FBZ0JDLGFBQWhCO0FBQ0F6QyxzQkFBTSxDQUFDd0MsSUFBUCxDQUFZLEVBQVo7QUFDQWlELHVCQUFPO0FBQ1I7O0FBckJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQk0saUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQXdCQTtBQUNFO0FBQ0Q7O0FBQ0QsV0FBU0MsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQStCO0FBQzdCLFFBQUk7QUFDRixVQUFJWCxRQUFRLEdBQUdwRixXQUFXLENBQUNxRixTQUFaLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLE9BQXRCLENBQWY7QUFDQ0osaUJBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQlksV0FBdEIsR0FBb0NELEdBQUcsQ0FBQ0UsTUFBSixDQUFXM0MsS0FBaEQsRUFDRWQsT0FBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFaLENBREY7QUFFRCxLQUpELENBSUUsT0FBT3VGLEdBQVAsRUFBWTtBQUNaaEQsYUFBTyxDQUFDQyxHQUFSLENBQVkrQyxHQUFaO0FBQ0Q7QUFDRjs7QUFFRDtBQUNFO0FBQ0Q7O0FBQ0QsV0FBU1Usc0JBQVQsQ0FBZ0NILEdBQWhDLEVBQXFDO0FBQ25DLFFBQUk7QUFDRixVQUFJWCxRQUFRLEdBQUdwRixXQUFXLENBQUNxRixTQUFaLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLE9BQXRCLENBQWY7QUFDQ0osaUJBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmUsYUFBdEIsR0FBc0NKLEdBQUcsQ0FBQ0UsTUFBSixDQUFXM0MsS0FBbEQsRUFDRWQsT0FBTyxDQUFDQyxHQUFSLENBQVkyRCxTQUFaLENBREY7QUFFRCxLQUpELENBSUUsT0FBT1osR0FBUCxFQUFZO0FBQ1poRCxhQUFPLENBQUNDLEdBQVIsQ0FBWXNELEdBQUcsQ0FBQ0UsTUFBSixDQUFXM0MsS0FBdkI7QUFDRDtBQUNGOztBQUVEO0FBQ0U7QUFDRDs7QUFDRCxXQUFTK0MsbUJBQVQsQ0FBNkJOLEdBQTdCLEVBQWtDO0FBQ2hDLFFBQUk7QUFDRixVQUFJWCxRQUFRLEdBQUdwRixXQUFXLENBQUNxRixTQUFaLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLE9BQXRCLENBQWY7QUFDQ0osaUJBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmtCLFVBQXRCLEdBQW1DUCxHQUFHLENBQUNFLE1BQUosQ0FBVzNDLEtBQS9DLEVBQ0VkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsVUFBWixDQURGO0FBRUQsS0FKRCxDQUlFLE9BQU91RixHQUFQLEVBQVk7QUFDWmhELGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsR0FBRyxDQUFDRSxNQUFKLENBQVczQyxLQUF2QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDRTtBQUNEOztBQUNELFdBQVNSLE1BQVQsR0FBa0I7QUFDaEIsUUFBSTFDLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZnRSxpQkFBVyxDQUFDbEMsR0FBWixHQUFrQlosTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCRSxVQUE5QztBQUNBeUMsaUJBQVcsQ0FBQ2hDLEdBQVosR0FBa0JkLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QjhFLFdBQTlDO0FBQ0FsRCxnQkFBVSxDQUFDO0FBQ1RDLGFBQUssRUFBRWhDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QitFLE9BRDFCO0FBRVRqRCxhQUFLLEVBQUVqQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEIrRTtBQUYxQixPQUFELENBQVY7QUFJQSxVQUFJcEIsUUFBUSxHQUFHcEYsV0FBVyxDQUFDcUYsU0FBWixDQUFzQixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDakQsRUFBSixJQUFVakMsS0FBbkI7QUFBQSxPQUF0QixDQUFmO0FBQ0NKLGlCQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JsRCxHQUF0QixHQUE0QmtDLFdBQVcsQ0FBQ2xDLEdBQXpDLEVBQ0dsQyxXQUFXLENBQUNvRixRQUFELENBQVgsQ0FBc0JoRCxHQUF0QixHQUE0QmdDLFdBQVcsQ0FBQ2hDLEdBRDNDLEVBRUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsVUFBWixDQUZGO0FBR0FILFlBQU0sQ0FBQ3dDLElBQVAsQ0FBWSxFQUFaO0FBQ0QsS0FaRCxNQVlPLElBQUlsQyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUN0QmdFLGlCQUFXLENBQUNsQyxHQUFaLEdBQWtCWixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJFLFVBQTlDO0FBQ0F5QyxpQkFBVyxDQUFDaEMsR0FBWixHQUFrQmQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCOEUsV0FBOUM7QUFDQS9DLG9CQUFjLENBQUM7QUFDYkYsYUFBSyxFQUFFaEMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCK0UsT0FEdEI7QUFFYmpELGFBQUssRUFBRWpDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QitFO0FBRnRCLE9BQUQsQ0FBZDtBQUlBLFVBQUlwQixRQUFRLEdBQUdwRixXQUFXLENBQUNxRixTQUFaLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNqRCxFQUFKLElBQVVqQyxLQUFuQjtBQUFBLE9BQXRCLENBQWY7QUFDQ0osaUJBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmxELEdBQXRCLEdBQTRCa0MsV0FBVyxDQUFDbEMsR0FBekMsRUFDR2xDLFdBQVcsQ0FBQ29GLFFBQUQsQ0FBWCxDQUFzQmhELEdBQXRCLEdBQTRCZ0MsV0FBVyxDQUFDaEMsR0FEM0MsRUFFRUksT0FBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFaLENBRkY7QUFHQUgsWUFBTSxDQUFDd0MsSUFBUCxDQUFZLEVBQVo7QUFDRDs7QUFDREssa0VBQUksQ0FBQzhELEtBQUw7QUFDRDs7QUFFRDtBQUNFO0FBQ0Q7O0FBQ0QsV0FBU0MsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDcEJuRSxXQUFPLENBQUNDLEdBQVIsQ0FBWWtFLENBQUMsQ0FBQ0MsYUFBRixDQUFnQnZFLEVBQTVCOztBQUNBLFNBQUssSUFBSXdFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc3RyxXQUFXLENBQUM4RyxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxVQUFJN0csV0FBVyxDQUFDNkcsQ0FBRCxDQUFYLENBQWV4RSxFQUFmLElBQXFCc0UsQ0FBQyxDQUFDQyxhQUFGLENBQWdCdkUsRUFBekMsRUFBNkM7QUFDM0NyQyxtQkFBVyxDQUFDK0csTUFBWixDQUFtQkYsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDRDtBQUNGOztBQUVEckUsV0FBTyxDQUFDQyxHQUFSLENBQVl6QyxXQUFaO0FBQ0FGLFVBQU0sQ0FBQ3dDLElBQVAsQ0FBWSxFQUFaO0FBQ0FpRCxXQUFPO0FBQ1I7O0FBRUQsV0FBU0EsT0FBVCxHQUFtQjtBQUNqQixRQUFJeUIsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBZjtBQUNBRCxZQUFRLENBQUNFLEdBQVQsQ0FBYSxrQkFBYixFQUFpQ2pILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBQS9DO0FBQ0E4RSxZQUFRLENBQUNFLEdBQVQsQ0FBYSxtQkFBYixFQUFrQ2pILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY21DLEdBQWhEO0FBQ0E0RSxZQUFRLENBQUNFLEdBQVQsQ0FBYSwwQ0FBYixFQUF5RGpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBQXZFO0FBQ0E4RSxZQUFRLENBQUNFLEdBQVQsQ0FDRSwyQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbUMsR0FGaEI7QUFJQTRFLFlBQVEsQ0FBQ0UsR0FBVCxDQUFhLHNDQUFiLEVBQXFELEdBQXJEO0FBQ0FGLFlBQVEsQ0FBQ0UsR0FBVCxDQUFhLHdCQUFiLEVBQXVDLEVBQXZDOztBQUVBLFFBQUlqSCxVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCK0csY0FBUSxDQUFDRSxHQUFULENBQ0UsMENBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBRmhCO0FBSUE4RSxjQUFRLENBQUNFLEdBQVQsQ0FDRSwyQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbUMsR0FGaEI7QUFJQTRFLGNBQVEsQ0FBQ0UsR0FBVCxDQUFhLHNDQUFiLEVBQXFELEdBQXJEO0FBQ0FGLGNBQVEsQ0FBQ0UsR0FBVCxDQUFhLHdCQUFiLEVBQXVDLEVBQXZDO0FBQ0Q7O0FBQ0QsUUFBSWpILFVBQVUsQ0FBQyxDQUFELENBQWQsRUFBbUI7QUFDakIrRyxjQUFRLENBQUNFLEdBQVQsQ0FDRSwwQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjaUMsR0FGaEI7QUFJQThFLGNBQVEsQ0FBQ0UsR0FBVCxDQUNFLDJDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNtQyxHQUZoQjtBQUlBNEUsY0FBUSxDQUFDRSxHQUFULENBQWEsc0NBQWIsRUFBcUQsR0FBckQ7QUFDQUYsY0FBUSxDQUFDRSxHQUFULENBQWEsd0JBQWIsRUFBdUMsRUFBdkM7QUFDRDs7QUFFRCxRQUFNQyxXQUFXLEdBQUcsK0NBQXBCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLGFBQU8sRUFBRTtBQUNQQyxjQUFNLEVBQUUsbUNBREQ7QUFFUCx3QkFBZ0Isa0JBRlQ7QUFHUEMscUJBQWEsRUFBRSxZQUFZM0g7QUFIcEI7QUFESyxLQUFoQjtBQVFBNEgsaURBQUssQ0FDRkMsSUFESCxDQUNRTixXQURSLEVBQ3FCSCxRQURyQixFQUMrQkksT0FEL0IsRUFFR00sSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFJOUQsS0FBSyxHQUFHOEQsTUFBTSxDQUFDQyxJQUFQLENBQVkvRCxLQUF4QjtBQUNBSCxjQUFRLENBQUNDLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWNELE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUFSO0FBQ0QsS0FMSCxXQU1TLFVBQUM0QixHQUFELEVBQVMsQ0FBRSxDQU5wQjtBQU9EOztBQUVELFdBQVNxQyxhQUFULEdBQXlCO0FBQ3ZCckYsV0FBTyxDQUFDQyxHQUFSLENBQVl4QyxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMrRixXQUExQjtBQUNBLFFBQU1vQixPQUFPLEdBQUc7QUFDZEMsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxtQ0FERDtBQUVQLHdCQUFnQixrQkFGVDtBQUdQQyxxQkFBYSxFQUFFLFlBQVkzSDtBQUhwQjtBQURLLEtBQWhCO0FBUUEsUUFBSW9ILFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWY7QUFDQUQsWUFBUSxDQUFDRSxHQUFULENBQWEsa0JBQWIsRUFBaUNqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNpQyxHQUEvQztBQUNBOEUsWUFBUSxDQUFDRSxHQUFULENBQWEsbUJBQWIsRUFBa0NqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNtQyxHQUFoRDtBQUNBNEUsWUFBUSxDQUFDRSxHQUFULENBQWEsMENBQWIsRUFBeURqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNpQyxHQUF2RTtBQUNBOEUsWUFBUSxDQUFDRSxHQUFULENBQ0UsMkNBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY21DLEdBRmhCO0FBSUE0RSxZQUFRLENBQUNFLEdBQVQsQ0FBYSxzQ0FBYixFQUFxRCxHQUFyRDtBQUNBRixZQUFRLENBQUNFLEdBQVQsQ0FBYSx3QkFBYixFQUF1QyxFQUF2Qzs7QUFFQSxRQUFJakgsVUFBVSxDQUFDLENBQUQsQ0FBZCxFQUFtQjtBQUNqQitHLGNBQVEsQ0FBQ0UsR0FBVCxDQUNFLDBDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNpQyxHQUZoQjtBQUlBOEUsY0FBUSxDQUFDRSxHQUFULENBQ0UsMkNBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY21DLEdBRmhCO0FBSUE0RSxjQUFRLENBQUNFLEdBQVQsQ0FBYSxzQ0FBYixFQUFxRCxHQUFyRDtBQUNBRixjQUFRLENBQUNFLEdBQVQsQ0FBYSx3QkFBYixFQUF1QyxFQUF2QztBQUNEOztBQUNELFFBQUlqSCxVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCK0csY0FBUSxDQUFDRSxHQUFULENBQ0UsMENBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBRmhCO0FBSUE4RSxjQUFRLENBQUNFLEdBQVQsQ0FDRSwyQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbUMsR0FGaEI7QUFJQTRFLGNBQVEsQ0FBQ0UsR0FBVCxDQUFhLHNDQUFiLEVBQXFELEdBQXJEO0FBQ0FGLGNBQVEsQ0FBQ0UsR0FBVCxDQUFhLHdCQUFiLEVBQXVDLEVBQXZDO0FBQ0Q7O0FBRUQsUUFBSVksUUFBUSxHQUFHLElBQUliLFFBQUosRUFBZjtBQUNBYSxZQUFRLENBQUNaLEdBQVQsQ0FBYSxhQUFiLEVBQTRCYSwrREFBVyxDQUFDQyxLQUFaLEVBQTVCO0FBQ0FGLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLGlCQUFiLEVBQWdDLEdBQWhDO0FBRUFZLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLGdCQUFiLEVBQStCakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFja0csYUFBN0M7QUFDQTJCLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLE1BQWIsRUFBcUJqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNxRyxVQUFuQztBQUNBd0IsWUFBUSxDQUFDWixHQUFULENBQWEsaUJBQWIsRUFBZ0NwRCxPQUFPLENBQUNQLEtBQXhDO0FBQ0F1RSxZQUFRLENBQUNaLEdBQVQsQ0FBYSxrQkFBYixFQUFpQ2pILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBQS9DO0FBQ0E0RixZQUFRLENBQUNaLEdBQVQsQ0FBYSxtQkFBYixFQUFrQ2pILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY21DLEdBQWhEO0FBRUEwRixZQUFRLENBQUNaLEdBQVQsQ0FBYSx5Q0FBYixFQUF3RG5ELFdBQVcsQ0FBQ1IsS0FBcEU7QUFDQXVFLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLDBDQUFiLEVBQXlEakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjaUMsR0FBdkU7QUFDQTRGLFlBQVEsQ0FBQ1osR0FBVCxDQUNFLDJDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNtQyxHQUZoQjtBQUlBMEYsWUFBUSxDQUFDWixHQUFULENBQWEsc0NBQWIsRUFBcUQsR0FBckQ7QUFDQVksWUFBUSxDQUFDWixHQUFULENBQ0UscUNBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYytGLFdBRmhCO0FBSUE4QixZQUFRLENBQUNaLEdBQVQsQ0FDRSx1Q0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFja0csYUFGaEI7QUFJQTJCLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLG9DQUFiLEVBQW1ELEdBQW5EO0FBQ0FZLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLGlDQUFiLEVBQWdELEtBQWhEO0FBQ0FZLFlBQVEsQ0FBQ1osR0FBVCxDQUFhLHdCQUFiLEVBQXVDLEdBQXZDOztBQUVBLFFBQUlqSCxVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCNkgsY0FBUSxDQUFDWixHQUFULENBQ0UseUNBREYsRUFFRWxELFlBQVksQ0FBQ1QsS0FGZjtBQUlBdUUsY0FBUSxDQUFDWixHQUFULENBQ0UsMENBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2lDLEdBRmhCO0FBSUE0RixjQUFRLENBQUNaLEdBQVQsQ0FDRSwyQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjbUMsR0FGaEI7QUFJQTBGLGNBQVEsQ0FBQ1osR0FBVCxDQUFhLHNDQUFiLEVBQXFELEdBQXJEO0FBQ0FZLGNBQVEsQ0FBQ1osR0FBVCxDQUNFLHFDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMrRixXQUZoQjtBQUlBOEIsY0FBUSxDQUFDWixHQUFULENBQ0UsdUNBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2tHLGFBRmhCO0FBSUEyQixjQUFRLENBQUNaLEdBQVQsQ0FBYSxvQ0FBYixFQUFtRCxHQUFuRDtBQUNBWSxjQUFRLENBQUNaLEdBQVQsQ0FBYSxpQ0FBYixFQUFnRCxtQkFBaEQ7QUFDQVksY0FBUSxDQUFDWixHQUFULENBQWEsd0JBQWIsRUFBdUMsR0FBdkM7QUFDRDs7QUFFRCxRQUFJakgsVUFBVSxDQUFDLENBQUQsQ0FBZCxFQUFtQjtBQUNqQjZILGNBQVEsQ0FBQ1osR0FBVCxDQUNFLHlDQURGLEVBRUVoRCxZQUFZLENBQUNYLEtBRmY7QUFJQXVFLGNBQVEsQ0FBQ1osR0FBVCxDQUNFLDBDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNpQyxHQUZoQjtBQUlBNEYsY0FBUSxDQUFDWixHQUFULENBQ0UsMkNBREYsRUFFRWpILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY21DLEdBRmhCO0FBSUEwRixjQUFRLENBQUNaLEdBQVQsQ0FBYSxzQ0FBYixFQUFxRCxHQUFyRDtBQUNBWSxjQUFRLENBQUNaLEdBQVQsQ0FDRSxxQ0FERixFQUVFakgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjK0YsV0FGaEI7QUFJQThCLGNBQVEsQ0FBQ1osR0FBVCxDQUNFLHVDQURGLEVBRUVqSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNrRyxhQUZoQjtBQUlBMkIsY0FBUSxDQUFDWixHQUFULENBQWEsb0NBQWIsRUFBbUQsR0FBbkQ7QUFDQVksY0FBUSxDQUFDWixHQUFULENBQWEsaUNBQWIsRUFBZ0QsbUJBQWhEO0FBQ0FZLGNBQVEsQ0FBQ1osR0FBVCxDQUFhLHdCQUFiLEVBQXVDLEdBQXZDO0FBQ0Q7O0FBRUQsUUFBTUMsV0FBVyxHQUFHLCtDQUFwQjtBQUNBLFFBQU1jLE1BQU0sR0FBRyx3Q0FBZjtBQUVBVCxpREFBSyxDQUNGQyxJQURILENBQ1FOLFdBRFIsRUFDcUJILFFBRHJCLEVBQytCSSxPQUQvQixFQUVHTSxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCRyxjQUFRLENBQUNaLEdBQVQsQ0FBYSxPQUFiLEVBQXNCUyxNQUFNLENBQUNDLElBQVAsQ0FBWS9ELEtBQWxDO0FBQ0EsVUFBSUEsS0FBSyxHQUFHOEQsTUFBTSxDQUFDQyxJQUFQLENBQVkvRCxLQUF4QjtBQUNBSCxjQUFRLENBQUNDLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWNELE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUFSO0FBQ0E0RCxtREFBSyxDQUNGQyxJQURILENBQ1FRLE1BRFIsRUFDZ0JILFFBRGhCLEVBQzBCVixPQUQxQixFQUVHTSxJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZLENBQUUsQ0FGdEIsV0FHUyxVQUFDbkMsR0FBRCxFQUFTLENBQUUsQ0FIcEI7QUFJRCxLQVZILFdBV1MsVUFBQ0EsR0FBRCxFQUFTLENBQUUsQ0FYcEI7QUFZRDs7QUFFRCxXQUFTMEMsU0FBVCxHQUFxQjtBQUNuQjFGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdkMsUUFBWjtBQUNBc0MsV0FBTyxDQUFDQyxHQUFSLENBQVl6QyxXQUFaO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUFFZSxhQUFPLEVBQUU7QUFBWCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxnQkFBVDtBQUEwQixhQUFTLEVBQUMsbUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBREYsQ0FQRixDQURGLEVBaUJFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsRUFFRTtBQUNFLE9BQUcsRUFBQyxrQkFETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVvSCxpQkFBVyxFQUFFLE1BQWY7QUFBdUJySCxXQUFLLEVBQUU7QUFBOUIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNVSxHQU5WLFdBakJGLEVBMEJFO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBT1YsS0FBSyxHQUFHLENBQWY7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxhQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVVLFdBQUssRUFBRSxLQUFUO0FBQWdCc0gsZ0JBQVUsRUFBRTtBQUE1QixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHlFQUFEO0FBQ0UsZUFBVyxFQUFFO0FBQ1hDLGdCQUFVLEVBQUUsR0FERDtBQUVYL0UsV0FBSyxFQUFFUSxPQUZJO0FBR1h3RSxjQUFRLEVBQUUxRCxZQUhDO0FBSVgyRCxZQUFNLEVBQUVsSTtBQUpHLEtBRGY7QUFPRSx5QkFBcUIsRUFBRTtBQUNyQm1JLDJCQUFxQixFQUFFO0FBQ3JCQyxlQUFPLEVBQUUsQ0FBQyxJQUFEO0FBRFk7QUFERixLQVB6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFpQkU7QUFDRSxPQUFHLEVBQUMsZ0JBRE47QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxXQUFPLEVBQUUvRixjQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERixFQXdCRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHVCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDcUQsR0FBRDtBQUFBLGFBQVNELGdCQUFnQixDQUFDQyxHQUFELENBQXpCO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxNQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyx5QkFGWjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0EsR0FBRDtBQUFBLGFBQVNHLHNCQUFzQixDQUFDSCxHQUFELENBQS9CO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxnQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWlCRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHlCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDQSxHQUFEO0FBQUEsYUFBU00sbUJBQW1CLENBQUNOLEdBQUQsQ0FBNUI7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFDLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLENBREYsQ0FERixFQThCRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUJGLENBeEJGLENBMUJGLEVBcUZFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFFO0FBQUUvRSxlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVFO0FBQ0UsT0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxTQUFLLEVBQUU7QUFBRW1ILGlCQUFXLEVBQUU7QUFBZixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixZQXJGRixFQThGRTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU8vSCxLQUFLLEdBQUcsQ0FBZjtBQUFBLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGFBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRVUsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JzSCxnQkFBVSxFQUFFO0FBQTVCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseUVBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWEMsZ0JBQVUsRUFBRSxHQUREO0FBRVgvRSxXQUFLLEVBQUVTLFdBRkk7QUFHWHVFLGNBQVEsRUFBRTNDLGdCQUhDO0FBSVg0QyxZQUFNLEVBQUVsSTtBQUpHLEtBRGY7QUFPRSx5QkFBcUIsRUFBRTtBQUNyQm1JLDJCQUFxQixFQUFFO0FBQ3JCQyxlQUFPLEVBQUUsQ0FBQyxJQUFEO0FBRFk7QUFERixLQVB6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFpQkU7QUFDRSxPQUFHLEVBQUMsZ0JBRE47QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxXQUFPLEVBQUUvRixjQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERixFQXdCRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHVCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDcUQsR0FBRDtBQUFBLGFBQVNELGdCQUFnQixDQUFDQyxHQUFELENBQXpCO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxNQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyx5QkFGWjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0EsR0FBRDtBQUFBLGFBQVNHLHNCQUFzQixDQUFDSCxHQUFELENBQS9CO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxnQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWlCRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHlCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDQSxHQUFEO0FBQUEsYUFBU00sbUJBQW1CLENBQUNOLEdBQUQsQ0FBNUI7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFDLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLENBREYsQ0FERixFQTZCRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLENBeEJGLENBOUZGLEVBd0pFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBUTNGLEtBQUssR0FBRyxDQUFULEVBQWFELEtBQUssQ0FBQyxHQUFELENBQXpCO0FBQUEsS0FEWDtBQUVFLFNBQUssRUFBRTtBQUFFdUksYUFBTyxFQUFFO0FBQVgsS0FGVDtBQUdFLGFBQVMsRUFBQyx3QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUU7QUFBRTFILGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxrQkFETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVtSCxpQkFBVyxFQUFFO0FBQWYsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsc0JBTEYsRUFjRTtBQUNFLGFBQVMsRUFBQyxhQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVySCxXQUFLLEVBQUUsTUFBVDtBQUFpQnNILGdCQUFVLEVBQUU7QUFBN0IsS0FGVDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU9oSSxLQUFLLEdBQUcsQ0FBZjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMseUVBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWGlJLGdCQUFVLEVBQUUsR0FERDtBQUVYL0UsV0FBSyxFQUFFVSxZQUZJO0FBR1hzRSxjQUFRLEVBQUUxQyxpQkFIQztBQUlYMkMsWUFBTSxFQUFFbEg7QUFKRyxLQURmO0FBT0UseUJBQXFCLEVBQUU7QUFDckJtSCwyQkFBcUIsRUFBRTtBQUNyQkMsZUFBTyxFQUFFLENBQUMsSUFBRDtBQURZO0FBREYsS0FQekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBa0JFO0FBQUssT0FBRyxFQUFDLGdCQUFUO0FBQTBCLGFBQVMsRUFBQyxtQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQW1CRTtBQUNFLE9BQUcsRUFBQyxrQkFETjtBQUVFLGFBQVMsRUFBQyxzQkFGWjtBQUdFLE1BQUUsRUFBQyxHQUhMO0FBSUUsV0FBTyxFQUFFL0IsU0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBZEYsRUF3Q0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyx1QkFGWjtBQUdFLFlBQVEsRUFBRSxrQkFBQ1gsR0FBRDtBQUFBLGFBQVNELGdCQUFnQixDQUFDQyxHQUFELENBQXpCO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxNQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyx5QkFGWjtBQUdFLFlBQVEsRUFBRSxrQkFBQ0EsR0FBRDtBQUFBLGFBQVNHLHNCQUFzQixDQUFDSCxHQUFELENBQS9CO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxnQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQWlCRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHlCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDQSxHQUFEO0FBQUEsYUFBU00sbUJBQW1CLENBQUNOLEdBQUQsQ0FBNUI7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFDLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLENBREYsQ0FERixFQTZCRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLENBeENGLENBeEpGLEVBa09FO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBUTNGLEtBQUssR0FBRyxDQUFULEVBQWFELEtBQUssQ0FBQyxDQUFELENBQXpCO0FBQUEsS0FEWDtBQUVFLFNBQUssRUFBRTtBQUFFdUksYUFBTyxFQUFFO0FBQVgsS0FGVDtBQUdFLGFBQVMsRUFBQyx3QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUU7QUFBRTFILGVBQVMsRUFBRTtBQUFiLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUU7QUFDRSxPQUFHLEVBQUMsa0JBRE47QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLFNBQUssRUFBRTtBQUFFbUgsaUJBQVcsRUFBRTtBQUFmLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHNCQUxGLEVBZUU7QUFDRSxhQUFTLEVBQUMsYUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFckgsV0FBSyxFQUFFLE1BQVQ7QUFBaUJzSCxnQkFBVSxFQUFFO0FBQTdCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseUVBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWEMsZ0JBQVUsRUFBRSxHQUREO0FBRVgvRSxXQUFLLEVBQUVZLFlBRkk7QUFHWG9FLGNBQVEsRUFBRXpDLGlCQUhDO0FBSVgwQyxZQUFNLEVBQUVsSDtBQUpHLEtBRGY7QUFPRSx5QkFBcUIsRUFBRTtBQUNyQm1ILDJCQUFxQixFQUFFO0FBQ3JCQyxlQUFPLEVBQUUsQ0FBQyxJQUFEO0FBRFk7QUFERixLQVB6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFpQkU7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsYUFBUyxFQUFDLG1CQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFO0FBQ0UsT0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBUyxFQUFDLHNCQUZaO0FBR0UsTUFBRSxFQUFDLEdBSEw7QUFJRSxXQUFPLEVBQUUvQixTQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsQ0FmRixFQXdDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHVCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDWCxHQUFEO0FBQUEsYUFBU0QsZ0JBQWdCLENBQUNDLEdBQUQsQ0FBekI7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFDLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLHlCQUZaO0FBR0UsWUFBUSxFQUFFLGtCQUFDQSxHQUFEO0FBQUEsYUFBU0csc0JBQXNCLENBQUNILEdBQUQsQ0FBL0I7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFDLGdCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBaUJFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMseUJBRlo7QUFHRSxZQUFRLEVBQUUsa0JBQUNBLEdBQUQ7QUFBQSxhQUFTTSxtQkFBbUIsQ0FBQ04sR0FBRCxDQUE1QjtBQUFBLEtBSFo7QUFJRSxlQUFXLEVBQUMsTUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqQkYsQ0FERixDQURGLEVBNkJFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkYsQ0F4Q0YsQ0FsT0YsRUEwU0U7QUFBUSxhQUFTLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkExU0YsRUEyU0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUU7QUFBRTJDLGFBQU8sRUFBRTtBQUFYLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBM1NGLEVBOFNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG9CQUROO0FBRUUsYUFBUyxFQUFDLHNDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixDQURGLENBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMscUJBRE47QUFFRSxhQUFTLEVBQUMsc0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsQ0FERixDQURGLENBWkYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsOERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxvQkFETjtBQUVFLGFBQVMsRUFBQyxzQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsQ0FERixDQURGLENBdkJGLEVBa0NFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsbUJBRE47QUFFRSxhQUFTLEVBQUMsc0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQURGLENBbENGLEVBNkNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxhQUFTLEVBQUMsc0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQURGLENBN0NGLEVBd0RFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsaUJBRE47QUFFRSxhQUFTLEVBQUMsc0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsQ0FERixDQURGLENBeERGLEVBbUVFO0FBQ0UsYUFBUyxFQUFDLDRCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVELGFBQU8sRUFBRTtBQUFYLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FKRixDQW5FRixDQUpGLEVBOEVFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUUxSCxlQUFTLEVBQUU7QUFBYixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUEyQixTQUFLLEVBQUU7QUFBRTJILGNBQVEsRUFBRTtBQUFaLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBWSxPQUZkO0FBR0UsbUJBQVkscUJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGLENBTkYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUE2QixXQUFPLEVBQUVULFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixDQWpCRixFQXlCRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQXpCRixDQTlFRixFQTZHRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBRTtBQUFFbEgsZUFBUyxFQUFFO0FBQWIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyx1QkFETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVGLFdBQUssRUFBRSxNQUFUO0FBQWlCc0gsZ0JBQVUsRUFBRTtBQUE3QixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBV0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQThCdkUsS0FBOUIsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtR0FGRixFQU1FO0FBQVEsYUFBUyxFQUFDLFNBQWxCO0FBQTRCLFdBQU8sRUFBRWdFLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsQ0FYRixDQTdHRixDQTlTRixDQURGLEVBb2JFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXBiRixDQUhGLENBRkYsRUFnY0U7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLE1BQUUsRUFBQyxvQkFGTDtBQUdFLFlBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLHVCQUFnQix5QkFMbEI7QUFNRSxtQkFBWSxNQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFvRCxRQUFJLEVBQUMsVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsU0FBSyxFQUFFO0FBQUU5RyxhQUFPLEVBQUU7QUFBWCxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtJQUZGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsZ0JBRE47QUFFRSxhQUFTLEVBQUMsMEJBRlo7QUFHRSxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUcsYUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FGRixDQVJGLEVBWUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW1DK0MsS0FBbkMsQ0FERixDQVpGLENBREYsQ0FERixFQW9CRTtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsU0FBSyxFQUFFO0FBQUU4RSxjQUFRLEVBQUUsTUFBWjtBQUFvQjNILGVBQVMsRUFBRTtBQUEvQixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGLEVBMEJFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxnQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUVELGFBQU8sRUFBRTtBQUFYLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkYsQ0FKRixFQVFFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQVJGLEVBV0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBWEYsQ0ExQkYsQ0FSRixFQWtERTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsREYsQ0FERixDQVJGLENBaGNGLENBREY7QUFrZ0JEOztHQXRtQ3VCdEIsRztVQUVQTSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXAuNDdmZTg1MDdiMzA2ZDRjYjUzZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9tYXBsb2FkZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRkaWRtb3VudCBmcm9tIFwiLi4vY29tcG9uZW50L2NvbXBvbmVudGRpZG1vdW50XCI7XHJcbmltcG9ydCBMZWFmbGV0IGZyb20gXCIuLi9jb21wb25lbnQvbWFwL2xlYWZsZXRcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwKCkge1xyXG4gIGNvbnN0IFt0b2tlbnVzZXIsIHNldFRva2VudXNlcl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgcGxhY2VzX2RhdGEgPSBjb29yZGluYXRlO1xyXG4gIGNvbnN0IFtjbGlja19pZCwgc2V0SWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgdmFyIGNsaWNrO1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMxID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczIgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMmMyYzJjXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgd2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGxvY2Fsc3RvcmFnZSB2YWx1ZSBpbiBwaWNrb2ZmLCBkcm9wb2ZmIGFuZCBtYXAgKi9cclxuICB9XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgaWYgKGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID09PSBcIlwiKSB7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJwaWNrb2ZmbGF0XCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcInBpY2tvZmZsbmdcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwiZHJvcG9mZmxuZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJkcm9wb2ZmbGF0XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgb3JpZ2luID0ge1xyXG4gICAgICAgIGxhdDogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCksXHJcbiAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbG5nKSxcclxuICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChvcmlnaW4pO1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYXQpLFxyXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxuZyksXHJcbiAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnJlZnJlc2ggPSBcIjFcIjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogTW9kYWwgZm9yIGN1c3RvbSBtYXAgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjgwMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMZWFmbGV0PjwvTGVhZmxldD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwRHJhZ1wiPkNsaWNrIHRoZSBtYXAgdG8gc2V0IGxvY2F0aW9uPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuU2V0XCIgb25DbGljaz17c2V0QWRkfT5cclxuICAgICAgICAgIFNFVFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBTZXR0aW5nIHRoZSBhZGRyZXNzIG9mIHBpY2tvZmYgYW5kIGRyb3BvZmYgYWZ0ZXIgdGhlIHBhZ2UgbG9hZGVkICovXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBzZXRUb2tlbnVzZXIoZm91bmRVc2VyLnRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICB2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgfSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NEcm9wXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzRHJvcFwiKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHByaWNlX3RvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKTtcclxuICAgIHNldFByaWNlKE51bWJlcihwcmljZV90b3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaWNlXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHtcclxuICAgIC8qIEFsbCBhcnJheSBhbmQgdmFyaWFibGVzIG5lZWRlZCAqL1xyXG4gIH1cclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wMSwgc2V0QWRkcmVzc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcDIsIHNldEFkZHJlc3NEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wLCBzZXRDb29yZGluYXRlc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AxLCBzZXRDb29yZGluYXRlc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wMiwgc2V0Q29vcmRpbmF0ZXNEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIHtcclxuICAgIC8qIFBpY2tvZmYgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHZhciBzdHIgPSB2YWx1ZS5sYWJlbDtcclxuICAgIHZhciBuID0gc3RyLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpO1xyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmFkZHJlc3MgPSB2YWx1ZS5sYWJlbCksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgYWRkcmVzczogdmFsdWUubGFiZWwsXHJcbiAgICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBEcm9wb2ZmIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogU3RvcG9mZiAjMSBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AxID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcDEodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wMShsYXRMbmcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBTdG9wb2ZmICMyIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcDIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wMih2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AyKGxhdExuZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiNFwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbmFtZSBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZShldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNuYW1lID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbnVtYmVyIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc251bWJlciA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2RpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGFkZHJlc3MgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzQWRkID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGxhdCwgTG5nIGFuZCBnZW9jb2RlIG9mIHRoZSBhZGRyZXNzIGluIGNvbXBvbmVudCB0aGlzIGZ1bmN0aW9uIGlzIGZvciB0aGUgY3VzdG9tIG1hcCAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRBZGQoKSB7XHJcbiAgICBpZiAoY2xpY2sgPT09IDEpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGNvb3JkaW5hdGVzLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBjb29yZGluYXRlcy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gZWxzZSBpZiAoY2xpY2sgPT09IDIpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBjb29yZGluYXRlcy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gY29vcmRpbmF0ZXMubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBGdW5jdGlvbiB0byBkZWxldGUgaW5kZXggaW4gYXJyYXkgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlQWRkKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlc19kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwbGFjZXNfZGF0YVtpXS5pZCA9PSBlLmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICBwbGFjZXNfZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZXNfZGF0YSk7XHJcbiAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIGdldFJhdGUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJhdGUoKSB7XHJcbiAgICBsZXQgcmF0ZWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLCBjb29yZGluYXRlWzFdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5sbmdcclxuICAgICk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bYm9va2luZ19vcmRlcl1cIiwgXCIxXCIpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVsyXSkge1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bYm9va2luZ19vcmRlcl1cIiwgXCIyXCIpO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzFdXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvb3JkaW5hdGVbM10pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiM1wiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1syXVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChhcGlVcmxfcmF0ZSwgcmF0ZWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICB2YXIgcHJpY2UgPSByZXN1bHQuZGF0YS5wcmljZTtcclxuICAgICAgICBzZXRQcmljZShOdW1iZXIocHJpY2UpLnRvRml4ZWQoMikpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnRuUGxhY2VvcmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVbMF0uZGV0YWlsc25hbWUpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VudXNlcixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xhdGl0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbG9uZ2l0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubG5nKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCJcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIjNcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMl1cIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJjdXN0b21lcl9pZFwiLCBBdXRoU2VydmljZS5nZXRJZCgpKTtcclxuICAgIGZvcm1kYXRhLnNldChcImJvb2tpbmdfdHlwZV9pZFwiLCBcIjFcIik7XHJcbiAgICBcclxuICAgIGZvcm1kYXRhLnNldChcImNvbnRhY3RfbnVtYmVyXCIsIGNvb3JkaW5hdGVbMF0uZGV0YWlsc251bWJlcik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJub3RlXCIsIGNvb3JkaW5hdGVbMF0uZGV0YWlsc0FkZCApXHJcbiAgICBmb3JtZGF0YS5zZXQoXCJwaWNrX3VwX2FkZHJlc3NcIiwgYWRkcmVzcy5sYWJlbCk7IFxyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9sYXRpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxhdCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJwaWNrX3VwX2xvbmdpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxuZyk7XHJcblxyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2FkZHJlc3NdXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9uYW1lXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmRldGFpbHNuYW1lXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtjb250YWN0X251bWJlcl1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5kZXRhaWxzbnVtYmVyXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZGlzdGFuY2VdXCIsIFwiNS40XCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIjFcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2FkZHJlc3NdXCIsXHJcbiAgICAgICAgYWRkcmVzc0Ryb3AxLmxhYmVsXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtib29raW5nX29yZGVyXVwiLCBcIjJcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjb250YWN0X25hbWVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5kZXRhaWxzbmFtZVxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY29udGFjdF9udW1iZXJdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5kZXRhaWxzbnVtYmVyXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjYXRlZ29yeV9pZF1cIiwgXCIxXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZGlzdGFuY2VdXCIsIFwiNS4zODI2MjAyMzExMzk4MjhcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMV1cIiwgXCIxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9hZGRyZXNzXVwiLFxyXG4gICAgICAgIGFkZHJlc3NEcm9wMi5sYWJlbFxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bYm9va2luZ19vcmRlcl1cIiwgXCIzXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bY29udGFjdF9uYW1lXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10uZGV0YWlsc25hbWVcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2NvbnRhY3RfbnVtYmVyXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10uZGV0YWlsc251bWJlclxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bY2F0ZWdvcnlfaWRdXCIsIFwiMVwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Rpc3RhbmNlXVwiLCBcIjUuMzgyNjIwMjMxMTM5ODI4XCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzJdXCIsIFwiMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9ib29raW5nXCI7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicHJpY2VcIiwgcmVzdWx0LmRhdGEucHJpY2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IHJlc3VsdC5kYXRhLnByaWNlO1xyXG4gICAgICAgIHNldFByaWNlKE51bWJlcihwcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7fSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja2RhdGEoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjbGlja19pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZXNfZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uTWFwXCI+XHJcbiAgICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbExlZnRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNDBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdMb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+TE9HSU48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+SE9NRTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQaWNrIG9mZiAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCB3aWR0aDogXCIxOHB4XCIgfX1cclxuICAgICAgICAgICAgICA+PC9pbWc+e1wiIFwifVxyXG4gICAgICAgICAgICAgIFBpY2t1cFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZFwiPiYjeDJiOyBBZGQgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU3RvcCBvZmYgbnVtYmVyIDEgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIERyb3BvZmZcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IChjbGljayA9IDIpfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcHMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICgoY2xpY2sgPSAzKSwgc2V0SWQoXCIzXCIpKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdlN0b3BvZmYxIGRpdlN0b3BPZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICBTdG9wIE9mZiBMb2NhdGlvblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDMpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL21hcHMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcmVtb3ZlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCAgaW1nRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWRkfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMyAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICgoY2xpY2sgPSA0KSwgc2V0SWQoNCkpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2U3RvcG9mZjIgZGl2U3RvcE9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIFN0b3AgT2ZmIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMixcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL21hcHMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcmVtb3ZlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCAgaW1nRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWRkfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5BZGRTdG9wb2ZmXCI+QWRkIFN0b3Atb2ZmPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOb3RlXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgTm90ZTogRGVsaXZlcnkgb25seSB3aXRoaW4gTWV0cm8gTWFuaWxhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5ET0NVTUVOVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDItcGl6emEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZPT0Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkNMT1RISU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21lZGljYWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk1FRElDQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZSQUdJTEU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2Uvb3RoZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk9USEVSUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiPk5vdGU6IE1BWElNVU0gV0VJR0hUIElTIDEwa2c8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRpb25hbFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnN1bGF0ZWQgQm94XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiIG9uQ2xpY2s9e2NoZWNrZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXNoIEhhbmRsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPlBhYmlsaSBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGF5bWVudFwiPlBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2NyZWRpdC1jYXJkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMThweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlXCI+JiM4MzY5O3twcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQcmljZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgeW91ciBmaW5hbCBwYXltZW50LCBwbGVhc2UgY29uZmlybSB5b3VyIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIGdvIHByb2NlZWQgdG8gcGF5bWVudCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va1wiIG9uQ2xpY2s9e2J0blBsYWNlb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYWNlIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbE1hcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdk1hcCBmaXhlZC10b3BcIj5cclxuICAgICAgICAgICAgICA8R29vZ2xlbWFwPjwvR29vZ2xlbWFwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RlXCI+TW9kZSBvZiBwYXltZW50PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgbWFrZSBhIHBheW1lbnQgYmVsb3cgdG8gc3RhcnQgeW91ciBib29raW5nIHByb2Nlc3MuIElmXHJcbiAgICAgICAgICAgICAgICB5b3VyIHBheW1lbnQgbWV0aG9zIGlzIG5vdCB0aGVyZSB5b3UgY2FuIGFkZCB5b3VyIG93biBiZWxvdy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNvZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9wZXNvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb2RcIj5DYXNoIG9uIGRlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb2RTdWJcIj5QYXkgb25jZSB3aGVuIGl0cyBkZWxpdmVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlTW9kYWxcIj4mIzgzNjk7e3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBNb2RlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiwgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBheW1lbnQgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS92aXNhLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmRUeXBlXCI+Q3JlZGl0IENhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyXCI+MTIzNCB4eHh4IHh4eHggMTIzNDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZE1ldGhvZFwiPkFERCBQQVlNRU5UIE1FVEhPRDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5QYXltZW50XCI+UGF5bWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9