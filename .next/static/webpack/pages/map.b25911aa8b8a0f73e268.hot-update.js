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
    value: "Document",
    label: "Document"
  }, {
    value: "Food",
    label: "Food"
  }, {
    value: "Cloting",
    label: "Clothing"
  }, {
    value: "Medical",
    label: "Medical"
  }, {
    value: "Fragile",
    label: "Fragile"
  }, {
    value: "Others",
    label: "Others"
  }];
  var customStyles = {
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
        marginTop: "10px"
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
        lineNumber: 147,
        columnNumber: 7
      }
    }, __jsx(_component_map_leaflet__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }), __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, "Click the map to set location"), __jsx("button", {
      className: "btnSet",
      onClick: setAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
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
                    lineNumber: 245,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246,
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
                    lineNumber: 247,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251,
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
                    lineNumber: 252,
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
                    lineNumber: 254,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256,
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
                    lineNumber: 298,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 299,
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
                    lineNumber: 300,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304,
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
                    lineNumber: 305,
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
                    lineNumber: 307,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 309,
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
      lineNumber: 669,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container-fluid conMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 7
    }
  }, __jsx(_component_componentdidmount__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-5 colLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
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
      lineNumber: 675,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "Image/logo.png",
    className: "img-fluid imgLogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "my-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 21
    }
  }, __jsx("li", {
    style: {
      textTransform: "capitalize"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 23
    }
  }, fullname))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("p", {
    className: "pPick",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
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
      lineNumber: 699,
      columnNumber: 15
    }
  }), " ", "Pickup"), __jsx("div", {
    onClick: function onClick() {
      return click = 1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
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
      lineNumber: 707,
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
      lineNumber: 711,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
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
      lineNumber: 734,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
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
      lineNumber: 742,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
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
      lineNumber: 750,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
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
      lineNumber: 765,
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
      lineNumber: 767,
      columnNumber: 15
    }
  }), "Dropoff"), __jsx("div", {
    onClick: function onClick() {
      return click = 2;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
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
      lineNumber: 775,
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
      lineNumber: 779,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
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
      lineNumber: 802,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
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
      lineNumber: 810,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
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
      lineNumber: 818,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 21
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_15__["default"], {
    options: bookingtype,
    styles: customStyles,
    onchange: handleChangeCategory1,
    placeholder: "Select Category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
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
      lineNumber: 840,
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
      lineNumber: 845,
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
      lineNumber: 846,
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
      lineNumber: 854,
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
      lineNumber: 859,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
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
      lineNumber: 873,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
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
      lineNumber: 884,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
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
      lineNumber: 892,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
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
      lineNumber: 900,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
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
      lineNumber: 914,
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
      lineNumber: 919,
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
      lineNumber: 921,
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
      lineNumber: 929,
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
      lineNumber: 933,
      columnNumber: 17
    }
  }), __jsx("img", {
    src: "Image/maps.png",
    className: "img-fluid imgMap1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
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
      lineNumber: 947,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "divHide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "divAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
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
      lineNumber: 958,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
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
      lineNumber: 966,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
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
      lineNumber: 974,
      columnNumber: 23
    }
  })))), __jsx("p", {
    className: "pAdd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 17
    }
  }, "+ Add details"))), __jsx("button", {
    className: "btnAddStopoff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
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
      lineNumber: 987,
      columnNumber: 13
    }
  }, "Note: Delivery only within Metro Manila"), __jsx("div", {
    className: "divCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
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
      lineNumber: 991,
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
      lineNumber: 997,
      columnNumber: 15
    }
  }, __jsx("div", {
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
    src: "Image/001-file.svg",
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
  }, "DOCUMENT")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/002-pizza.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 23
    }
  }, "FOOD")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/clothing.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 23
    }
  }, "CLOTHING")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/medical.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 23
    }
  }, "MEDICAL")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/001-file.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 23
    }
  }, "FRAGILE")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxCategory align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "Image/other.svg",
    className: "img-fluid mx-auto d-flex imgCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "pBoxCategory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
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
      lineNumber: 1064,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pNote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
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
      lineNumber: 1071,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
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
      lineNumber: 1073,
      columnNumber: 19
    }
  }, "Additional Services")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    "data-toggle": "modal",
    "data-target": "#exampleModalCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 21
    }
  }, "Insulated Box"))), __jsx("div", {
    className: "col-lg-4 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    onClick: checkdata,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 21
    }
  }, "Cash Handling"))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "boxAdditional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pAdditonalBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1098,
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
      lineNumber: 1102,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104,
      columnNumber: 19
    }
  }, "Payment")), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
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
      lineNumber: 1107,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pPrice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 19
    }
  }, "\u20B1", price), __jsx("p", {
    className: "pPriceSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 19
    }
  }, "This is your final payment, please confirm your destination and go proceed to payment page."), __jsx("button", {
    className: "btnBook",
    onClick: btnPlaceorder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 19
    }
  }, "Place order"))))), __jsx("div", {
    className: "col-lg-7 colMap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "divMap fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 13
    }
  }, __jsx(_component_map_maploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128,
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
      lineNumber: 1133,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
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
      lineNumber: 1142,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "pMode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 15
    }
  }, "Mode of payment"), __jsx("p", {
    className: "pModeSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 15
    }
  }, "Please make a payment below to start your booking process. If your payment methos is not there you can add your own below.")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "divCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
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
      lineNumber: 1154,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pCod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 21
    }
  }, "Cash on delivery"), __jsx("p", {
    className: "pCodSub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 21
    }
  }, "Pay once when its delivered")), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pPriceModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
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
      lineNumber: 1170,
      columnNumber: 15
    }
  }, "Payment Details"), __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "Image/visa.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
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
      lineNumber: 1180,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pCardType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 19
    }
  }, "Credit Card"), __jsx("p", {
    className: "pCardNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 19
    }
  }, "1234 xxxx xxxx 1234")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pAddMethod",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 19
    }
  }, "ADD PAYMENT METHOD")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btnPayment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 19
    }
  }, "Payment")))), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2tlbnVzZXIiLCJzZXRUb2tlbnVzZXIiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwicGxhY2VzX2RhdGEiLCJjb29yZGluYXRlIiwiY2xpY2tfaWQiLCJzZXRJZCIsImJvb2tpbmd0eXBlIiwidmFsdWUiLCJsYWJlbCIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJiYXNlIiwic3RhdGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJpc0ZvY3VzZWQiLCJib3JkZXJDb2xvciIsInNpbmdsZVZhbHVlIiwicHJvdmlkZWQiLCJjb250YWluZXIiLCJjbGljayIsImN1c3RvbVN0eWxlczEiLCJjdXN0b21TdHlsZXMyIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicmVmcmVzaCIsInBpY2tvZmZsYXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGlja29mZmxuZyIsImRyb3BvZmZsbmciLCJkcm9wb2ZmbGF0Iiwib3JpZ2luIiwibGF0IiwicGFyc2VGbG9hdCIsImxuZyIsImlkIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsIm9wZW5zd2VldGFsZXJ0Iiwic3dhbCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJzZXRBZGQiLCJ1c2VFZmZlY3QiLCJBdXRoU2VydmljZSIsImdldEZ1bGxuYW1lIiwibG9nZ2VkSW5Vc2VyIiwiZm91bmRVc2VyIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJzZXRBZGRyZXNzIiwic2V0QWRkcmVzc0Ryb3AiLCJwcmljZV90b3RhbCIsInNldFByaWNlIiwiTnVtYmVyIiwidG9GaXhlZCIsInByaWNlIiwiYWRkcmVzcyIsImFkZHJlc3NEcm9wIiwiYWRkcmVzc0Ryb3AxIiwic2V0QWRkcmVzc0Ryb3AxIiwiYWRkcmVzc0Ryb3AyIiwic2V0QWRkcmVzc0Ryb3AyIiwiY29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzRHJvcCIsInNldENvb3JkaW5hdGVzRHJvcCIsImNvb3JkaW5hdGVzRHJvcDEiLCJzZXRDb29yZGluYXRlc0Ryb3AxIiwiY29vcmRpbmF0ZXNEcm9wMiIsInNldENvb3JkaW5hdGVzRHJvcDIiLCJoYW5kbGVDaGFuZ2UiLCJnZW9jb2RlQnlBZGRyZXNzIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsInN0ciIsIm4iLCJpbmNsdWRlcyIsIm9iakluZGV4IiwiZmluZEluZGV4Iiwib2JqIiwiZ2V0UmF0ZSIsImVyciIsImJvcmRlckxlZnQiLCJ0ZXh0QWxpZ24iLCJoYW5kbGVDaGFuZ2VEcm9wIiwiaGFuZGxlQ2hhbmdlRHJvcDEiLCJoYW5kbGVDaGFuZ2VEcm9wMiIsInVwZGF0ZUlucHV0VmFsdWUiLCJldnQiLCJkZXRhaWxzbmFtZSIsInRhcmdldCIsInVwZGF0ZUlucHV0VmFsdWVOdW1iZXIiLCJkZXRhaWxzbnVtYmVyIiwiY29vZGluYXRlIiwidXBkYXRlSW5wdXRWYWx1ZUFkZCIsImRldGFpbHNBZGQiLCJkcm9wb2ZmbGFuZyIsInBpY2tvZmYiLCJjbG9zZSIsImRlbGV0ZUFkZCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJhdGVkYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJhcGlVcmxfcmF0ZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiYnRuUGxhY2VvcmRlciIsImZvcm1kYXRhIiwiZ2V0SWQiLCJhcGlVcmwiLCJjaGVja2RhdGEiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5MSIsImRpc3BsYXkiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUNNQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUROO0FBQUE7QUFBQSxNQUNyQkMsU0FEcUI7QUFBQSxNQUNWQyxZQURVOztBQUFBLHlCQUVJSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZKO0FBQUE7QUFBQSxNQUVyQkcsUUFGcUI7QUFBQSxNQUVYQyxXQUZXOztBQUc1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHQyxVQUFsQjs7QUFKNEIseUJBS0ZULDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTEU7QUFBQTtBQUFBLE1BS3JCUyxRQUxxQjtBQUFBLE1BS1hDLEtBTFc7O0FBTTVCLE1BQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsU0FBSyxFQUFFO0FBQTVCLEdBRGtCLEVBRWxCO0FBQUVELFNBQUssRUFBRSxNQUFUO0FBQWlCQyxTQUFLLEVBQUU7QUFBeEIsR0FGa0IsRUFHbEI7QUFBRUQsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUhrQixFQUlsQjtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBSmtCLEVBS2xCO0FBQUVELFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUU7QUFBM0IsR0FMa0IsRUFNbEI7QUFB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REYsQ0FSRixDQWpkRixDQURGO0FBbWhCRDs7R0E1cEN1QjFCLEc7VUFHUFEscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwLmIyNTkxMWFhOGI4YTBmNzNlMjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9tYXAvbWFwbG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSwge1xyXG4gIGdlb2NvZGVCeUFkZHJlc3MsXHJcbiAgZ2V0TGF0TG5nLFxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50ZGlkbW91bnQgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnRkaWRtb3VudFwiO1xyXG5pbXBvcnQgTGVhZmxldCBmcm9tIFwiLi4vY29tcG9uZW50L21hcC9sZWFmbGV0XCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAoKSB7XHJcbiAgY29uc3QgW3Rva2VudXNlciwgc2V0VG9rZW51c2VyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIHBsYWNlc19kYXRhID0gY29vcmRpbmF0ZTtcclxuICBjb25zdCBbY2xpY2tfaWQsIHNldElkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGJvb2tpbmd0eXBlID0gW1xyXG4gICAgeyB2YWx1ZTogXCJEb2N1bWVudFwiLCBsYWJlbDogXCJEb2N1bWVudFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkZvb2RcIiwgbGFiZWw6IFwiRm9vZFwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIkNsb3RpbmdcIiwgbGFiZWw6IFwiQ2xvdGhpbmdcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJNZWRpY2FsXCIsIGxhYmVsOiBcIk1lZGljYWxcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJGcmFnaWxlXCIsIGxhYmVsOiBcIkZyYWdpbGVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJPdGhlcnNcIiwgbGFiZWw6IFwiT3RoZXJzXCIgfSxcclxuICBdO1xyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgICBjb250YWluZXI6IChiYXNlKSA9PiAoe1xyXG4gICAgICAuLi5iYXNlLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICB2YXIgY2xpY2s7XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlczEgPSB7XHJcbiAgICBjb250cm9sOiAoYmFzZSwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLmJhc2UsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMmMyYzJjXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMiA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyYzJjMmNcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFBhc3NpbmcgbG9jYWxzdG9yYWdlIHZhbHVlIGluIHBpY2tvZmYsIGRyb3BvZmYgYW5kIG1hcCAqL1xyXG4gIH1cclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZiAoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnJlZnJlc2ggPT09IFwiXCIpIHtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcInBpY2tvZmZsYXRcIlxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgIFwicGlja29mZmxuZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbG5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgXCJkcm9wb2ZmbG5nXCJcclxuICAgICAgKTtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICBcImRyb3BvZmZsYXRcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBvcmlnaW4gPSB7XHJcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0KSxcclxuICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsbmcpLFxyXG4gICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKG9yaWdpbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogcGFyc2VGbG9hdChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCksXHJcbiAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbG5nKSxcclxuICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9IFwiMVwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBNb2RhbCBmb3IgY3VzdG9tIG1hcCAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBvcGVuc3dlZXRhbGVydCgpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiODAwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExlYWZsZXQ+PC9MZWFmbGV0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBEcmFnXCI+Q2xpY2sgdGhlIG1hcCB0byBzZXQgbG9jYXRpb248L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TZXRcIiBvbkNsaWNrPXtzZXRBZGR9PlxyXG4gICAgICAgICAgU0VUXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIC8qIFNldHRpbmcgdGhlIGFkZHJlc3Mgb2YgcGlja29mZiBhbmQgZHJvcG9mZiBhZnRlciB0aGUgcGFnZSBsb2FkZWQgKi9cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZ1bGxuYW1lKEF1dGhTZXJ2aWNlLmdldEZ1bGxuYW1lKCkpO1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgc2V0VG9rZW51c2VyKGZvdW5kVXNlci50b2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRBZGRyZXNzKHtcclxuICAgICAgdmFsdWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRkcmVzc1wiKSxcclxuICAgICAgbGFiZWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRkcmVzc1wiKSxcclxuICAgIH0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICB2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZGRyZXNzRHJvcFwiKSxcclxuICAgICAgbGFiZWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRkcmVzc0Ryb3BcIiksXHJcbiAgICB9KTtcclxuICAgIHZhciBwcmljZV90b3RhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpY2VcIik7XHJcbiAgICBzZXRQcmljZShOdW1iZXIocHJpY2VfdG90YWwpLnRvRml4ZWQoMikpO1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB7XHJcbiAgICAvKiBBbGwgYXJyYXkgYW5kIHZhcmlhYmxlcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AsIHNldEFkZHJlc3NEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcDEsIHNldEFkZHJlc3NEcm9wMV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AyLCBzZXRBZGRyZXNzRHJvcDJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcCwgc2V0Q29vcmRpbmF0ZXNEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wMSwgc2V0Q29vcmRpbmF0ZXNEcm9wMV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcDIsIHNldENvb3JkaW5hdGVzRHJvcDJdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICB7XHJcbiAgICAvKiBQaWNrb2ZmIHNldHRpbmcgYW5kIHBhc3NpbmcgZGF0YSB0byBhcnJheSBhbmQgdG8gdGhlIGNvbXBvbmVudCBpdHNlbGYgKi9cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICB2YXIgc3RyID0gdmFsdWUubGFiZWw7XHJcbiAgICB2YXIgbiA9IHN0ci5pbmNsdWRlcyhcIk1ldHJvIE1hbmlsYVwiKTtcclxuICAgIGlmIChuID09PSB0cnVlKSB7XHJcbiAgICAgIHNldEFkZHJlc3ModmFsdWUpO1xyXG4gICAgICBzZXRDb29yZGluYXRlcyhsYXRMbmcpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5hZGRyZXNzID0gdmFsdWUubGFiZWwpLFxyXG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICAgIGFkZHJlc3M6IHZhbHVlLmxhYmVsLFxyXG4gICAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIlwiKTtcclxuICAgICAgICBnZXRSYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogRHJvcG9mZiBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHZhciBzdHIgPSB2YWx1ZS5sYWJlbDtcclxuICAgIHZhciBuID0gc3RyLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpO1xyXG5cclxuICAgIGlmIChuID09PSB0cnVlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgICAgIHNldENvb3JkaW5hdGVzRHJvcChsYXRMbmcpO1xyXG4gICAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGxhdExuZy5sbmcpLFxyXG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICAgIGxhdDogbGF0TG5nLmxhdCxcclxuICAgICAgICAgIGxuZzogbGF0TG5nLmxuZyxcclxuICAgICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgZ2V0UmF0ZSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0ZGRTkwMFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NvbXBsYWluLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5XYXJuaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBlbnRlcmVkIGFkZHJlc3MgaXMgbm90IHlldCBpbiBvdXIgc2VydmljZSBhcmVhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8qIFN0b3BvZmYgIzEgc2V0dGluZyBhbmQgcGFzc2luZyBkYXRhIHRvIGFycmF5IGFuZCB0byB0aGUgY29tcG9uZW50IGl0c2VsZiAqL1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEcm9wMSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3AxKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzRHJvcDEobGF0TG5nKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxhdCA9IGxhdExuZy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gbGF0TG5nLmxuZyksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICBnZXRSYXRlKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBsYXRMbmcubGF0LFxyXG4gICAgICAgIGxuZzogbGF0TG5nLmxuZyxcclxuICAgICAgICBpZDogXCIzXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICBnZXRSYXRlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLyogU3RvcG9mZiAjMiBzZXR0aW5nIGFuZCBwYXNzaW5nIGRhdGEgdG8gYXJyYXkgYW5kIHRvIHRoZSBjb21wb25lbnQgaXRzZWxmICovXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcDIodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wMihsYXRMbmcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gbGF0TG5nLmxhdCksXHJcbiAgICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sbmcgPSBsYXRMbmcubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHtcclxuICAgICAgICBsYXQ6IGxhdExuZy5sYXQsXHJcbiAgICAgICAgbG5nOiBsYXRMbmcubG5nLFxyXG4gICAgICAgIGlkOiBcIjRcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICAgIGdldFJhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIG5hbWUgaW4gYWRkaXRpb25hbCBkZXRhaWxzIGJhc2VkIG9uIGNsaWNrIHZhbHVlICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWUoZXZ0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5kZXRhaWxzbmFtZSA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICAvKiBQYXNzaW5nIG51bWJlciBpbiBhZGRpdGlvbmFsIGRldGFpbHMgYmFzZWQgb24gY2xpY2sgdmFsdWUgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvYmpJbmRleCA9IHBsYWNlc19kYXRhLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gY2xpY2spO1xyXG4gICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmRldGFpbHNudW1iZXIgPSBldnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29kaW5hdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBhZGRyZXNzIGluIGFkZGl0aW9uYWwgZGV0YWlscyBiYXNlZCBvbiBjbGljayB2YWx1ZSAqL1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlQWRkKGV2dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0uZGV0YWlsc0FkZCA9IGV2dC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogUGFzc2luZyBsYXQsIExuZyBhbmQgZ2VvY29kZSBvZiB0aGUgYWRkcmVzcyBpbiBjb21wb25lbnQgdGhpcyBmdW5jdGlvbiBpcyBmb3IgdGhlIGN1c3RvbSBtYXAgKi9cclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0QWRkKCkge1xyXG4gICAgaWYgKGNsaWNrID09PSAxKSB7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgb2JqSW5kZXggPSBwbGFjZXNfZGF0YS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IGNsaWNrKTtcclxuICAgICAgKHBsYWNlc19kYXRhW29iakluZGV4XS5sYXQgPSBjb29yZGluYXRlcy5sYXQpLFxyXG4gICAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubG5nID0gY29vcmRpbmF0ZXMubG5nKSxcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuICAgICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICB9IGVsc2UgaWYgKGNsaWNrID09PSAyKSB7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIHNldEFkZHJlc3NEcm9wKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIG9iakluZGV4ID0gcGxhY2VzX2RhdGEuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PSBjbGljayk7XHJcbiAgICAgIChwbGFjZXNfZGF0YVtvYmpJbmRleF0ubGF0ID0gY29vcmRpbmF0ZXMubGF0KSxcclxuICAgICAgICAocGxhY2VzX2RhdGFbb2JqSW5kZXhdLmxuZyA9IGNvb3JkaW5hdGVzLmxuZyksXHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgc3dhbC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLyogRnVuY3Rpb24gdG8gZGVsZXRlIGluZGV4IGluIGFycmF5ICovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUFkZChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuaWQpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZXNfZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocGxhY2VzX2RhdGFbaV0uaWQgPT0gZS5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgcGxhY2VzX2RhdGEuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocGxhY2VzX2RhdGEpO1xyXG4gICAgcm91dGVyLnB1c2goXCJcIik7XHJcbiAgICBnZXRSYXRlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSYXRlKCkge1xyXG4gICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xhdGl0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbG9uZ2l0dWRlXCIsIGNvb3JkaW5hdGVbMF0ubG5nKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZVsxXS5sYXQpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0ubG5nXHJcbiAgICApO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCJcIik7XHJcblxyXG4gICAgaWYgKGNvb3JkaW5hdGVbMl0pIHtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMlwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1sxXVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGlmIChjb29yZGluYXRlWzNdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtib29raW5nX29yZGVyXVwiLCBcIjNcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMl1cIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpVXJsX3JhdGUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jYWxjdWxhdGUtcmF0ZVwiO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VudXNlcixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdmFyIHByaWNlID0gcmVzdWx0LmRhdGEucHJpY2U7XHJcbiAgICAgICAgc2V0UHJpY2UoTnVtYmVyKHByaWNlKS50b0ZpeGVkKDIpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ0blBsYWNlb3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlWzBdLmRldGFpbHNuYW1lKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbnVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByYXRlZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sYXRpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxhdCk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJwaWNrX3VwX2xvbmdpdHVkZVwiLCBjb29yZGluYXRlWzBdLmxuZyk7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzBdXCIsIFwiXCIpO1xyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzJdKSB7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9sYXRpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxhdFxyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0ubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtib29raW5nX29yZGVyXVwiLCBcIjJcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMV1cIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoY29vcmRpbmF0ZVszXSkge1xyXG4gICAgICByYXRlZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bYm9va2luZ19vcmRlcl1cIiwgXCIzXCIpO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzJdXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiY3VzdG9tZXJfaWRcIiwgQXV0aFNlcnZpY2UuZ2V0SWQoKSk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJib29raW5nX3R5cGVfaWRcIiwgXCIxXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiY29udGFjdF9uYW1lXCIsIFwiYXNkYXNkXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiY29udGFjdF9udW1iZXJcIiwgY29vcmRpbmF0ZVswXS5kZXRhaWxzbnVtYmVyKTtcclxuICAgIGZvcm1kYXRhLnNldChcIm5vdGVcIiwgY29vcmRpbmF0ZVswXS5kZXRhaWxzQWRkKTtcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sYXQpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZVswXS5sbmcpO1xyXG5cclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9hZGRyZXNzXVwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVbMV0ubGF0KTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLFxyXG4gICAgICBjb29yZGluYXRlWzFdLmxuZ1xyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2NvbnRhY3RfbmFtZV1cIixcclxuICAgICAgY29vcmRpbmF0ZVsxXS5kZXRhaWxzbmFtZVxyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9udW1iZXJdXCIsXHJcbiAgICAgIGNvb3JkaW5hdGVbMV0uZGV0YWlsc251bWJlclxyXG4gICAgKTtcclxuICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtjYXRlZ29yeV9pZF1cIiwgXCIxXCIpO1xyXG4gICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Rpc3RhbmNlXVwiLCBcIjUuNFwiKTtcclxuICAgIGZvcm1kYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCIxXCIpO1xyXG5cclxuICAgIGlmIChjb29yZGluYXRlWzJdKSB7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1sxXVtkcm9wX29mZl9hZGRyZXNzXVwiLFxyXG4gICAgICAgIGFkZHJlc3NEcm9wMS5sYWJlbFxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVsyXS5sYXRcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzJdLmxuZ1xyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bYm9va2luZ19vcmRlcl1cIiwgXCIyXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY29udGFjdF9uYW1lXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0uZGV0YWlsc25hbWVcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2NvbnRhY3RfbnVtYmVyXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbMl0uZGV0YWlsc251bWJlclxyXG4gICAgICApO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMV1bY2F0ZWdvcnlfaWRdXCIsIFwiMVwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzFdW2Rpc3RhbmNlXVwiLCBcIjUuMzgyNjIwMjMxMTM5ODI4XCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJhZGRpdGlvbmFsX3NlcnZpY2VzWzFdXCIsIFwiMVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29vcmRpbmF0ZVszXSkge1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXHJcbiAgICAgICAgXCJkcm9wX29mZl9sb2NhdGlvbnNbMl1bZHJvcF9vZmZfYWRkcmVzc11cIixcclxuICAgICAgICBhZGRyZXNzRHJvcDIubGFiZWxcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVbM10ubGF0XHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZVszXS5sbmdcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiM1wiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2NvbnRhY3RfbmFtZV1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmRldGFpbHNuYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcclxuICAgICAgICBcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtjb250YWN0X251bWJlcl1cIixcclxuICAgICAgICBjb29yZGluYXRlWzNdLmRldGFpbHNudW1iZXJcclxuICAgICAgKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzJdW2NhdGVnb3J5X2lkXVwiLCBcIjFcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1syXVtkaXN0YW5jZV1cIiwgXCI1LjM4MjYyMDIzMTEzOTgyOFwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1syXVwiLCBcIjFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpVXJsX3JhdGUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9jYWxjdWxhdGUtcmF0ZVwiO1xyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvYm9va2luZ1wiO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGFwaVVybF9yYXRlLCByYXRlZGF0YSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGZvcm1kYXRhLnNldChcInByaWNlXCIsIHJlc3VsdC5kYXRhLnByaWNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSByZXN1bHQuZGF0YS5wcmljZTtcclxuICAgICAgICBzZXRQcmljZShOdW1iZXIocHJpY2UpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge30pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tkYXRhKCkge1xyXG4gICAgY29uc29sZS5sb2coY2xpY2tfaWQpO1xyXG4gICAgY29uc29sZS5sb2cocGxhY2VzX2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNvbk1hcFwiPlxyXG4gICAgICAgIDxDb21wb25lbnRkaWRtb3VudD48L0NvbXBvbmVudGRpZG1vdW50PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2xMZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjQwcHggMHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5IT01FPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFBpY2sgb2ZmICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIHdpZHRoOiBcIjE4cHhcIiB9fVxyXG4gICAgICAgICAgICAgID48L2ltZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgUGlja3VwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAxKX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTUlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWUgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZUFkZChldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMSAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgRHJvcG9mZlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMil9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjk1JVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE5hbWUgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlTnVtYmVyKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROdW1iZXIgdHh0QWRkaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB1cGRhdGVJbnB1dFZhbHVlQWRkKGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Ym9va2luZ3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNoYW5nZSA9IHtoYW5kbGVDaGFuZ2VDYXRlZ29yeTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICgoY2xpY2sgPSAzKSwgc2V0SWQoXCIzXCIpKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpdlN0b3BvZmYxIGRpdlN0b3BPZmZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXBncHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICBTdG9wIE9mZiBMb2NhdGlvblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDMpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL21hcHMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcmVtb3ZlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCAgaW1nRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWRkfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdG9wIG9mZiBudW1iZXIgMyAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICgoY2xpY2sgPSA0KSwgc2V0SWQoNCkpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2U3RvcG9mZjIgZGl2U3RvcE9mZlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21hcGdwcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIFN0b3AgT2ZmIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wMixcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IGN1c3RvbVN0eWxlczIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL21hcHMucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcDFcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvcmVtb3ZlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCAgaW1nRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQWRkfVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZBZGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHROYW1lIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZShldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0TnVtYmVyIHR4dEFkZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdXBkYXRlSW5wdXRWYWx1ZU51bWJlcihldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dE51bWJlciB0eHRBZGRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHVwZGF0ZUlucHV0VmFsdWVBZGQoZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkXCI+JiN4MmI7IEFkZCBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5BZGRTdG9wb2ZmXCI+QWRkIFN0b3Atb2ZmPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBOb3RlXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgTm90ZTogRGVsaXZlcnkgb25seSB3aXRoaW4gTWV0cm8gTWFuaWxhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZDYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwUGlja1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIwLjlyZW1cIiwgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5ET0NVTUVOVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS8wMDItcGl6emEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZPT0Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvY2xvdGhpbmcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkNMT1RISU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21lZGljYWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk1FRElDQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAxLWZpbGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPkZSQUdJTEU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2Uvb3RoZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk9USEVSUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtMTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiPk5vdGU6IE1BWElNVU0gV0VJR0hUIElTIDEwa2c8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRpb25hbFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuOXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnN1bGF0ZWQgQm94XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiIG9uQ2xpY2s9e2NoZWNrZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXNoIEhhbmRsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPlBhYmlsaSBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGF5bWVudFwiPlBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL2NyZWRpdC1jYXJkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMThweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlXCI+JiM4MzY5O3twcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQcmljZVN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgeW91ciBmaW5hbCBwYXltZW50LCBwbGVhc2UgY29uZmlybSB5b3VyIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIGdvIHByb2NlZWQgdG8gcGF5bWVudCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQm9va1wiIG9uQ2xpY2s9e2J0blBsYWNlb3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYWNlIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbE1hcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdk1hcCBmaXhlZC10b3BcIj5cclxuICAgICAgICAgICAgICA8R29vZ2xlbWFwPjwvR29vZ2xlbWFwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZU1vZGFsQ2VudGVyXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RlXCI+TW9kZSBvZiBwYXltZW50PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBNb2RlU3ViXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgbWFrZSBhIHBheW1lbnQgYmVsb3cgdG8gc3RhcnQgeW91ciBib29raW5nIHByb2Nlc3MuIElmXHJcbiAgICAgICAgICAgICAgICB5b3VyIHBheW1lbnQgbWV0aG9zIGlzIG5vdCB0aGVyZSB5b3UgY2FuIGFkZCB5b3VyIG93biBiZWxvdy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNvZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9wZXNvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb2RcIj5DYXNoIG9uIGRlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDb2RTdWJcIj5QYXkgb25jZSB3aGVuIGl0cyBkZWxpdmVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFByaWNlTW9kYWxcIj4mIzgzNjk7e3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBNb2RlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiwgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBheW1lbnQgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS92aXNhLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmRUeXBlXCI+Q3JlZGl0IENhcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBDYXJkTnVtYmVyXCI+MTIzNCB4eHh4IHh4eHggMTIzNDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZE1ldGhvZFwiPkFERCBQQVlNRU5UIE1FVEhPRDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5QYXltZW50XCI+UGF5bWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9