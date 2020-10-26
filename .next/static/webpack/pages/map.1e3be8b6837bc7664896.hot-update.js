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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);





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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      fullname = _React$useState4[0],
      setFullname = _React$useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var places_data = coordinate;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      click_id = _React$useState6[0],
      setId = _React$useState6[1];

  var bookingtype = [{
    value: "Delivered",
    label: "Delivered"
  }, {
    value: "Looking for Driver",
    label: "Looking for Driver"
  }, {
    value: "Ongoing",
    label: "Ongoing"
  }];
  var customStyles = {
    control: function control(base, state) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
        background: "transparent",
        color: "white",
        border: "none",
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
    },
    container: function container(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        width: "100%"
      });
    }
  };
  var click;
  var customStyles1 = {
    control: function control(base, state) {
      var _objectSpread3;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread3 = {
        background: "transparent",
        color: "white",
        border: "1px solid #2c2c2c",
        boxShadow: "none",
        borderRadius: "5px",
        width: "100%",
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
  var customStyles2 = {
    control: function control(base, state) {
      var _objectSpread4;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread4 = {
        background: "transparent",
        color: "white",
        border: "1px solid #2c2c2c",
        boxShadow: "none",
        borderRadius: "5px",
        width: "95%",
        padding: "2px",
        marginTop: "5px"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread4, "boxShadow", state.isFocused ? "#EDC728" : null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread4, "&:hover", {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#EDC728" : ""
      }), _objectSpread4));
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
        lineNumber: 144,
        columnNumber: 7
      }
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }), __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, "Click the map to set location"), __jsx("button", {
      className: "btnSet",
      onClick: setAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, "SET")));
  }

  {
    /* Setting the address of pickoff and dropoff after the page loaded */
  }
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setFullname(_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getFullname());
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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      price = _React$useState8[0],
      setPrice = _React$useState8[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      address = _useState[0],
      setAddress = _useState[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      addressDrop = _React$useState10[0],
      setAddressDrop = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      addressDrop1 = _React$useState12[0],
      setAddressDrop1 = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      addressDrop2 = _React$useState14[0],
      setAddressDrop2 = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      coordinates = _React$useState16[0],
      setCoordinates = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      coordinatesDrop = _React$useState18[0],
      setCoordinatesDrop = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState19, 2),
      coordinatesDrop1 = _React$useState20[0],
      setCoordinatesDrop1 = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState21, 2),
      coordinatesDrop2 = _React$useState22[0],
      setCoordinatesDrop2 = _React$useState22[1];

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
                    lineNumber: 242,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243,
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
                    lineNumber: 244,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248,
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
                    lineNumber: 249,
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
                    lineNumber: 251,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253,
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
                    lineNumber: 295,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296,
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
                    lineNumber: 297,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 301,
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
                    lineNumber: 302,
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
                    lineNumber: 304,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306,
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
    axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
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
    formdata.set("contact_name", "asdasd");
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
    axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
      formdata.set("price", result.data.price);
      var price = result.data.price;
      setPrice(Number(price).toFixed(2));
      axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(apiUrl, formdata, options).then(function (result) {})["catch"](function (err) {});
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
      lineNumber: 666,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
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
      lineNumber: 672,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 21
    }
  }, __jsx("li", {
    style: {
      textTransform: "capitalize"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 23
    }
  }, fullname))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
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
      lineNumber: 696,
      columnNumber: 15
    }
  }), " ", "Pickup"), __jsx("div", {
    onClick: function onClick() {
      return click = 1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
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
      lineNumber: 704,
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
      lineNumber: 708,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
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
      lineNumber: 731,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
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
      lineNumber: 739,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
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
      lineNumber: 747,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
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
      lineNumber: 762,
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
      lineNumber: 764,
      columnNumber: 15
    }
  }), "Dropoff"), __jsx("div", {
    onClick: function onClick() {
      return click = 2;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
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
      lineNumber: 772,
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
      lineNumber: 776,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
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
      lineNumber: 799,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
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
      lineNumber: 807,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
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
      lineNumber: 815,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 21
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_15__["default"], {
    options: bookingtype,
    styles: customStyles,
    placeholder: "Select Date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
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
      lineNumber: 836,
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
      lineNumber: 841,
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
      lineNumber: 842,
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
      lineNumber: 850,
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
      lineNumber: 855,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
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
      lineNumber: 869,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
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
      lineNumber: 880,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
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
      lineNumber: 888,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
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
      lineNumber: 896,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
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
      lineNumber: 910,
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
      lineNumber: 915,
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
      lineNumber: 917,
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
      lineNumber: 925,
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
      lineNumber: 929,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
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
      lineNumber: 943,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
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
      lineNumber: 954,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
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
      lineNumber: 962,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
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
      lineNumber: 970,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
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
      lineNumber: 983,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pPick",
    style: {
      fontSize: "0.9rem",
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 15
    }
  }, "Category"), __jsx("div", {
    className: "row",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 23
    }
  }, "DOCUMENT")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
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
      lineNumber: 1060,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
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
      lineNumber: 1067,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
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
      lineNumber: 1069,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1073,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-4 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    onClick: checkdata,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
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
      lineNumber: 1098,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 19
    }
  }, "Payment")), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
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
      lineNumber: 1103,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPrice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 19
    }
  }, "\u20B1", price), __jsx("p", {
    className: "pPriceSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 19
    }
  }, "This is your final payment, please confirm your destination and go proceed to payment page."), __jsx("button", {
    className: "btnBook",
    onClick: btnPlaceorder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 19
    }
  }, "Place order"))))), __jsx("div", {
    className: "col-lg-7 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
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
      lineNumber: 1129,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
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
      lineNumber: 1138,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pMode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 15
    }
  }, "Mode of payment"), __jsx("p", {
    className: "pModeSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 15
    }
  }, "Please make a payment below to start your booking process. If your payment methos is not there you can add your own below.")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1149,
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
      lineNumber: 1150,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 21
    }
  }, "Cash on delivery"), __jsx("p", {
    className: "pCodSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 21
    }
  }, "Pay once when its delivered")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pPriceModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
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
      lineNumber: 1166,
      columnNumber: 15
    }
  }, "Payment Details"), __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/visa.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
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
      lineNumber: 1176,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pCardType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 19
    }
  }, "Credit Card"), __jsx("p", {
    className: "pCardNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 19
    }
  }, "1234 xxxx xxxx 1234")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAddMethod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 19
    }
  }, "ADD PAYMENT METHOD")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 19
    }
  }, "Payment")))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 13
    }
  })))));
}

_s(map, "WfhP4vL8zKAPsc90Sy7AbO5DFUg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2tlbnVzZXIiLCJzZXRUb2tlbnVzZXIiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwicGxhY2VzX2RhdGEiLCJjb29yZGluYXRlIiwiY2xpY2tfaWQiLCJzZXRJZCIsImJvb2tpbmd0eXBlIiwidmFsdWUiLCJsYWJlbCIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJiYXNlIiwic3RhdGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJpc0ZvY3VzZWQiLCJib3JkZXJDb2xvciIsInNpbmdsZVZhbHVlIiwicHJvdmlkZWQiLCJjb250YWluZXIiLCJjbGljayIsImN1c3RvbVN0eWxlczEiLCJjdXN0b21TdHlsZXMyIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicmVmcmVzaCIsInBpY2tvZmZsYXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGlja29mZmxuZyIsImRyb3BvZmZsbmciLCJkcm9wb2ZmbGF0Iiwib3JpZ2luIiwibGF0IiwicGFyc2VGbG9hdCIsImxuZyIsImlkIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsIm9wZW5zd2VldGFsZXJ0Iiwic3dhbCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJzZXRBZGQiLCJ1c2VFZmZlY3QiLCJBdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwibG9nZ2VkSW5Vc2VyIiwiZm91bmRVc2VyIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJzZXRBZGRyZXNzIiwic2V0QWRkcmVzc0Ryb3AiLCJwcmljZV90b3RhbCIsInNldFByaWNlIiwiTnVtYmVyIiwidG9GaXhlZCIsInByaWNlIiwiYWRkcmVzcyIsImFkZHJlc3NEcm9wIiwiYWRkcmVzc0Ryb3AxIiwic2V0QWRkcmVzc0Ryb3AxIiwiYWRkcmVzc0Ryb3AyIiwic2V0QWRkcmVzc0Ryb3AyIiwiY29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzRHJvcCIsInNldENvb3JkaW5hdGVzRHJvcCIsImNvb3JkaW5hdGVzRHJvcDEiLCJzZXRDb29yZGluYXRlc0Ryb3AxIiwiY29vcmRpbmF0ZXNEcm9wMiIsInNldENvb3JkaW5hdGVzRHJvcDIiLCJoYW5kbGVDaGFuZ2UiLCJnZW9jb2RlQnlBZGRyZXNzIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsInN0ciIsIm4iLCJpbmNsdWRlcyIsIm9iakluZGV4IiwiZmluZEluZGV4Iiwib2JqIiwiZ2V0UmF0ZSIsImVyciIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJoYW5kbGVDaGFuZ2VEcm9wIiwiaGFuZGxlQ2hhbmdlRHJvcDEiLCJoYW5kbGVDaGFuZ2VEcm9wMiIsInVwZGF0ZUlucHV0VmFsdWUiLCJldnQiLCJkZXRhaWxzbmFtZSIsInRhcmdldCIsInVwZGF0ZUlucHV0VmFsdWVOdW1iZXIiLCJkZXRhaWxzbnVtYmVyIiwiY29vZGluYXRlIiwidXBkYXRlSW5wdXRWYWx1ZUFkZCIsImRldGFpbHNBZGQiLCJkcm9wb2ZmbGFuZyIsInBpY2tvZmYiLCJjbG9zZSIsImRlbGV0ZUFkZCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJhdGVkYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcGlVcmxfcmF0ZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiYnRuUGxhY2VvcmRlciIsImZvcm1kYXRhIiwiZ2V0SWQiLCJhcGlVcmwiLCJjaGVja2RhdGEiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImRpc3BsYXkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUNNQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUROO0FBQUE7QUFBQSxNQUNyQkMsU0FEcUI7QUFBQSxNQUNWQyxZQURVOztBQUFBLHlCQUVJSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZKO0FBQUE7QUFBQSxNQUVyQkcsUUFGcUI7QUFBQSxNQUVYQyxXQUZXOztBQUc1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHQyxVQUFsQjs7QUFKNEIseUJBS0ZULDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTEU7QUFBQTtBQUFBLE1BS3JCUyxRQUxxQjtBQUFBLE1BS1hDLEtBTFc7O0FBTTVCLE1BQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsU0FBSyxFQUFFO0FBQTdCLEdBRGtCLEVBRWxCO0FBQUVELFNBQUssRUFBRSxvQkFBVDtBQUErQkMsU0FBSyxFQUFFO0FBQXRDLEdBRmtCLEVBR2xCO0FBQUVELFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUU7QUFBM0IsR0FIa0IsQ0FBcEI7QUFLQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFdBQU8sRUFBRSxpQkFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUE7O0FBQUEsNkNBQ0pELElBREk7QUFFUEUsa0JBQVUsRUFBRSxhQUZMO0FBR1BDLGFBQUssRUFBRSxPQUhBO0FBSVBDLGNBQU0s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LGFBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG1CQUROO0FBRUUsYUFBUyxFQUFDLHNDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLENBREYsQ0FERixDQWxDRixFQTZDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLG9CQUROO0FBRUUsYUFBUyxFQUFDLHNDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLENBREYsQ0FERixDQTdDRixFQXdERTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGlCQUROO0FBRUUsYUFBUyxFQUFDLHNDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxj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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBRTtBQUFFRCxhQUFPLEVBQUU7QUFBWCxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLENBSkYsRUFRRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsQ0FSRixFQVdFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVhGLENBMUJGLENBUkYsRUFrREU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbERGLENBREYsQ0FSRixDQWhkRixDQURGO0FBa2hCRDs7R0F4cEN1QjFCLEc7VUFHUFEscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwLjFlM2JlOGI2ODM3YmM3NjY0ODk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSwge1xyXG4gIGdlb2NvZGVCeUFkZHJlc3MsXHJcbiAgZ2V0TGF0TG5nLFxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50ZGlkbW91bnQgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudFwiO1xyXG5pbXBvcnQgTGVhZmxldCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9sZWFmbGV0XCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAoKSB7XHJcbiAgY29uc3QgW3Rva2VudXNlciwgc2V0VG9rZW51c2VyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIHBsYWNlc19kYXRhID0gY29vcmRpbmF0ZTtcclxuICBjb25zdCBbY2xpY2tfaWQsIHNldElkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGJvb2tpbmd0eXBlID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEZWxpdmVyZWRcIiwgbGFiZWw6IFwiRGVsaXZlcmVkXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiTG9va2luZyBmb3IgRHJpdmVyXCIsIGxhYmVsOiBcIkxvb2tpbmcgZm9yIERyaXZlclwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIk9uZ29pbmdcIiwgbGFiZWw6IFwiT25nb2luZ1wiIH0sXHJcbiAgXTtcclxuICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICAgIGNvbnRhaW5lcjogKGJhc2UpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIHZhciBjbGljaztcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IG51bGwsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgLy8gT3ZlcndyaXR0ZXMgdGhlIGRpZmZlcmVudCBzdGF0ZXMgb2YgYm9yZGVyXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgc2luZ2xlVmFsdWU6IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21TdHlsZXMyID0ge1xyXG4gICAgY29udHJvbDogKGJhc2UsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzJjMmMyY1wiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBsb2NhbHN0b3JhZ2UgdmFsdWUgaW4gcGlja29mZiwgZHJvcG9mZiBhbmQgbWFwICovXHJcbiAgfVxyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9PT0gXCJcIikge1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwicGlja29mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbG5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJwaWNrb2ZmbG5nXCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcImRyb3BvZmZsbmdcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwiZHJvcG9mZmxhdFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHtcclxuICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQpLFxyXG4gICAgICAgIGxuZzogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxuZyksXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0KSxcclxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsbmcpLFxyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gXCIxXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIE1vZGFsIGZvciBjdXN0b20gbWFwICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5zd2VldGFsZXJ0KCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGVhZmxldD48L0xlYWZsZXQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyYWdcIj5DbGljayB0aGUgbWFwIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blNldFwiIG9uQ2xpY2s9e3NldEFkZH0+XHJcbiAgICAgICAgICBTRVRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogU2V0dGluZyB0aGUgYWRkcmVzcyBvZiBwaWNrb2ZmIGFuZCBkcm9wb2ZmIGFmdGVyIHRoZSBwYWdlIGxvYWRlZCAqL1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RnVsbG5hbWUoQXV0aFNlcnZpY2UuZ2V0RnVsbG5hbWUoKSk7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBzZXRUb2tlbnVzZXIoZm91bmRVc2VyLnRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICB2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzXCIpLFxyXG4gICAgfSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgIHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZHJlc3NEcm9wXCIpLFxyXG4gICAgICBsYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzRHJvcFwiKSxcclxuICAgIH0pO1xyXG4gICAgdmFyIHByaWNlX3RvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKTtcclxuICAgIHNldFByaWNlKE51bWJlcihwcmljZV90b3RhbCkudG9GaXhlZCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaWNlXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHtcclxuICAgIC8qIEFsbCBhcnJheSBhbmQgdmFyaWFibGVzIG5lZWRlZCAqL1xyXG4gIH1cclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wMSwgc2V0QWRkcmVzc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcDIsIHNldEFkZHJlc3NEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wLCBzZXRDb29yZGluYXRlc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AxLCBzZXRDb29yZGluYXRlc0Ryb3AxXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wMiwgc2V0Q29vcmRpbmF0ZXNEcm9wMl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIHtcclxuICAgIC8qIFBpY2tvZmYgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHZhciBzdHIgPSB2YWx1ZS5sYWJlbDtcclxuICAgIHZhciBuID0gc3RyLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpO1xyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmFkZHJlc3MgPSB2YWx1ZS5sYWJlbCksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgYWRkcmVzczogdmFsdWUubGFiZWwsXHJcbiAgICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICAgIGdldFJhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBEcm9wb2ZmIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogU3RvcG9mZiAjMSBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AxID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcDEodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wMShsYXRMbmcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBTdG9wb2ZmICMyIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcDIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wMih2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AyKGxhdExuZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBsYXRMbmcubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICBsbmc6IGxhdExuZy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiNFwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbmFtZSBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZShldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNuYW1lID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbnVtYmVyIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc251bWJlciA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2RpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGFkZHJlc3MgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzQWRkID0gZXZ0LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIGxhdCwgTG5nIGFuZCBnZW9jb2RlIG9mIHRoZSBhZGRyZXNzIGluIGNvbXBvbmVudCB0aGlzIGZ1bmN0aW9uIGlzIGZvciB0aGUgY3VzdG9tIG1hcCAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRBZGQoKSB7XHJcbiAgICBpZiAoY2xpY2sgPT09IDEpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGNvb3JkaW5hdGVzLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBjb29yZGluYXRlcy5sbmcpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIH0gZWxzZSBpZiAoY2xpY2sgPT09IDIpIHtcclxuICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBjb29yZGluYXRlcy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gY29vcmRpbmF0ZXMubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBGdW5jdGlvbiB0byBkZWxldGUgaW5kZXggaW4gYXJyYXkgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlQWRkKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlc19kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwbGFjZXNfZGF0YVtpXS5pZCA9PSBlLmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICBwbGFjZXNfZGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZXNfZGF0YSk7XHJcbiAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgIGdldFJhdGUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJhdGUoKSB7XHJcbiAgICBsZXQgcmF0ZWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLCBjb29yZGluYXRlWzFdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5sbmdcclxuICAgICk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bYm9va2luZ19vcmRlcl1cIiwgXCIxXCIpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVsyXSkge1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bYm9va2luZ19vcmRlcl1cIiwgXCIyXCIpO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzFdXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvb3JkaW5hdGVbM10pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiM1wiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1syXVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChhcGlVcmxfcmF0ZSwgcmF0ZWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICB2YXIgcHJpY2UgPSByZXN1bHQuZGF0YS5wcmljZTtcclxuICAgICAgICBzZXRQcmljZShOdW1iZXIocHJpY2UpLnRvRml4ZWQoMikpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnRuUGxhY2VvcmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVbMF0uZGV0YWlsc25hbWUpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VudXNlcixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xhdGl0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbG9uZ2l0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubG5nKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCJcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIjNcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMl1cIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJjdXN0b21lcl9pZFwiLCBBdXRoU2VydmljZS5nZXRJZCgpKTtcclxuICAgIGZvcm1kYXRhLnNldChcImJvb2tpbmdfdHlwZV9pZFwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJjb250YWN0X25hbWVcIiwgXCJhc2Rhc2RcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJjb250YWN0X251bWJlclwiLCBjb29yZGluYXRlWzBdLmRldGFpbHNudW1iZXIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwibm90ZVwiLCBjb29yZGluYXRlWzBdLmRldGFpbHNBZGQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9hZGRyZXNzXCIsIGFkZHJlc3MubGFiZWwpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9sYXRpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxhdCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJwaWNrX3VwX2xvbmdpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxuZyk7XHJcblxyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2FkZHJlc3NdXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9uYW1lXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmRldGFpbHNuYW1lXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtjb250YWN0X251bWJlcl1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5kZXRhaWxzbnVtYmVyXHJcbiAgICApO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZGlzdGFuY2VdXCIsIFwiNS40XCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIjFcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2FkZHJlc3NdXCIsXHJcbiAgICAgICAgYWRkcmVzc0Ryb3AxLmxhYmVsXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtib29raW5nX29yZGVyXVwiLCBcIjJcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjb250YWN0X25hbWVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5kZXRhaWxzbmFtZVxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY29udGFjdF9udW1iZXJdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5kZXRhaWxzbnVtYmVyXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtjYXRlZ29yeV9pZF1cIiwgXCIxXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZGlzdGFuY2VdXCIsIFwiNS4zODI2MjAyMzExMzk4MjhcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMV1cIiwgXCIxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9hZGRyZXNzXVwiLFxyXG4gICAgICAgIGFkZHJlc3NEcm9wMi5sYWJlbFxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bYm9va2luZ19vcmRlcl1cIiwgXCIzXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bY29udGFjdF9uYW1lXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10uZGV0YWlsc25hbWVcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2NvbnRhY3RfbnVtYmVyXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10uZGV0YWlsc251bWJlclxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bY2F0ZWdvcnlfaWRdXCIsIFwiMVwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Rpc3RhbmNlXVwiLCBcIjUuMzgyNjIwMjMxMTM5ODI4XCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzJdXCIsIFwiMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9ib29raW5nXCI7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZm9ybWRhdGEuc2V0KFwicHJpY2VcIiwgcmVzdWx0LmRhdGEucHJpY2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IHJlc3VsdC5kYXRhLnByaWNlO1xyXG4gICAgICAgIHNldFByaWNlKE51bWJlcihwcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KGFwaVVybCwgZm9ybWRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7fSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja2RhdGEoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjbGlja19pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGFjZXNfZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29uTWFwXCI+XHJcbiAgICAgICAgPENvbXBvbmVudGRpZG1vdW50PjwvQ29tcG9uZW50ZGlkbW91bnQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbExlZnRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNDBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdMb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGxpPkhPTUU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUGljayBvZmYgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgd2lkdGg6IFwiMThweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPntcIiBcIn1cclxuICAgICAgICAgICAgICBQaWNrdXBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IChjbGljayA9IDEpfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5NSVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZSB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlQWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAxICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICBEcm9wb2ZmXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAyKX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TmFtZSB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVOdW1iZXIoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250YWN0IE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtib29raW5ndHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAyICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKChjbGljayA9IDMpLCBzZXRJZChcIjNcIikpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2U3RvcG9mZjEgZGl2U3RvcE9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIFN0b3AgT2ZmIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcDEsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbWFwcy5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwMVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZW1vdmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWdEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVBZGR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWUgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZUFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFN0b3Agb2ZmIG51bWJlciAzICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKChjbGljayA9IDQpLCBzZXRJZCg0KSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXZTdG9wb2ZmMiBkaXZTdG9wT2ZmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgU3RvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCI1JVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbWFwcy5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwMVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9yZW1vdmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWdEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVBZGR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWUgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZUFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRcIj4mI3gyYjsgQWRkIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkFkZFN0b3BvZmZcIj5BZGQgU3RvcC1vZmY8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE5vdGVcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICBOb3RlOiBEZWxpdmVyeSBvbmx5IHdpdGhpbiBNZXRybyBNYW5pbGFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBQaWNrXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiLCBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkRPQ1VNRU5UPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMi1waXp6YS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+Rk9PRDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9jbG90aGluZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+Q0xPVEhJTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWVkaWNhbC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+TUVESUNBTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDEtZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+RlJBR0lMRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9vdGhlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+T1RIRVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC0xMlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOb3RlXCI+Tm90ZTogTUFYSU1VTSBXRUlHSFQgSVMgMTBrZzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdGlvbmFsXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMC45cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbCBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEluc3VsYXRlZCBCb3hcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCIgb25DbGljaz17Y2hlY2tkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgIENhc2ggSGFuZGxpbmdcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+UGFiaWxpIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQYXltZW50XCI+UGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY3JlZGl0LWNhcmQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwcHhcIiwgbWFyZ2luTGVmdDogXCIxOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUHJpY2VcIj4mIzgzNjk7e3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB5b3VyIGZpbmFsIHBheW1lbnQsIHBsZWFzZSBjb25maXJtIHlvdXIgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBhbmQgZ28gcHJvY2VlZCB0byBwYXltZW50IHBhZ2UuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Cb29rXCIgb25DbGljaz17YnRuUGxhY2VvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxhY2Ugb3JkZXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sTWFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TWFwIGZpeGVkLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxDZW50ZXJcIlxyXG4gICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxDZW50ZXJUaXRsZVwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCIgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGVcIj5Nb2RlIG9mIHBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE1vZGVTdWJcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBtYWtlIGEgcGF5bWVudCBiZWxvdyB0byBzdGFydCB5b3VyIGJvb2tpbmcgcHJvY2Vzcy4gSWZcclxuICAgICAgICAgICAgICAgIHlvdXIgcGF5bWVudCBtZXRob3MgaXMgbm90IHRoZXJlIHlvdSBjYW4gYWRkIHlvdXIgb3duIGJlbG93LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Q29kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL3Blc28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1NXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvZFwiPkNhc2ggb24gZGVsaXZlcnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENvZFN1YlwiPlBheSBvbmNlIHdoZW4gaXRzIGRlbGl2ZXJlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUHJpY2VNb2RhbFwiPiYjODM2OTt7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiLCBtYXJnaW5Ub3A6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUGF5bWVudCBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3Zpc2EucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQ2FyZFR5cGVcIj5DcmVkaXQgQ2FyZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJcIj4xMjM0IHh4eHggeHh4eCAxMjM0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkTWV0aG9kXCI+QUREIFBBWU1FTlQgTUVUSE9EPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blBheW1lbnRcIj5QYXltZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=