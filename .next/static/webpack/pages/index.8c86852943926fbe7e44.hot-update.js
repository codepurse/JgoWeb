webpackHotUpdate_N_E("pages/index",{

/***/ "./component/deliver.js":
/*!******************************!*\
  !*** ./component/deliver.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-places-autocomplete */ "./node_modules/react-google-places-autocomplete/build/index.es.js");
/* harmony import */ var _component_custommap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/custommap */ "./component/custommap.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");





var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\deliver.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function App() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var click;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      tokenuser = _React$useState2[0],
      setTokenuser = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      price = _React$useState4[0],
      setPrice = _React$useState4[1];

  var customStyles1 = {
    control: function control(base, state) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, base), {}, (_objectSpread2 = {
        background: "transparent",
        color: "white",
        border: "1px solid lightgray",
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var loggedInUser = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      var foundUser = JSON.parse(loggedInUser);
      setTokenuser(foundUser.token);
    }
  }, []);

  function getAdd() {
    if (global.config.place.deliver.pickoff.includes("Metro Manila") === true) {
      if (click === 0) {
        coordinates.lat = global.config.place.deliver.pickofflat;
        coordinates.lng = global.config.place.deliver.dropofflang;
        setAddress({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff
        });
      } else {
        setAddressDrop({
          value: global.config.place.deliver.pickoff,
          label: global.config.place.deliver.pickoff
        });
        coordinatesDrop.lat = global.config.place.deliver.pickofflat;
        coordinatesDrop.lng = global.config.place.deliver.dropofflang;
      }

      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default.a.close();
    } else {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
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
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
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
          lineNumber: 79,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, "Warning"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "The entered address is not yet in our service area."))))));
    }
  }

  function clickSubmit(e) {
    if (address === "" || addressDrop === "") {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row align-items-center",
        style: {
          borderLeft: "3px solid #c62828"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "Image/warning.png",
        style: {
          width: "32px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 104,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, "Please enter a valid address in both textbox", " "))))));
    } else {
      var origin = {
        lat: coordinates.lat,
        lng: coordinates.lng,
        id: "1"
      };
      coordinate.push(origin);
      var destination = {
        lat: coordinatesDrop.lat,
        lng: coordinatesDrop.lng,
        id: "2"
      };
      coordinate.push(destination);
      console.log(coordinate);
      localStorage.setItem("address", address.label);
      localStorage.setItem("addressDrop", addressDrop.label);
      localStorage.setItem("pickofflat", coordinates.lat);
      localStorage.setItem("pickofflng", coordinates.lng);
      localStorage.setItem("dropofflat", coordinatesDrop.lat);
      localStorage.setItem("dropofflng", coordinatesDrop.lng);
      global.config.place.deliver.pickoff = address.label;
      global.config.place.deliver.dropoff = addressDrop.label;
      global.config.place.deliver.pickofflat = coordinatesDrop.lat;
      global.config.place.deliver.pickofflang = coordinatesDrop.lng;
      global.config.place.deliver.dropofflat = coordinatesDrop.lat;
      global.config.place.deliver.dropofflang = coordinatesDrop.lng;
      global.config.place.deliver.refresh = 1;
      var options = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          Authorization: "Bearer " + tokenuser
        }
      };
      var ratedata = new FormData();
      ratedata.set("pick_up_latitude", coordinates.lat);
      ratedata.set("pick_up_longitude", coordinates.lng);
      ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinatesDrop.lat);
      ratedata.set("drop_off_locations[0][drop_off_longitude]", coordinatesDrop.lng);
      ratedata.set("drop_off_locations[0][booking_order]", "1");
      ratedata.set("additional_services[0]", "1");
      var formdata = new FormData();
      formdata.set("customer_id", _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].getId());
      formdata.set("booking_type_id", "2");
      formdata.set("contact_name", "Alfon");
      formdata.set("contact_number", "312321");
      formdata.set("pick_up_address", address.label);
      formdata.set("pick_up_latitude", coordinates.lat);
      formdata.set("pick_up_longitude", coordinates.lng);
      formdata.set("drop_off_locations[0][drop_off_address]", addressDrop.label);
      formdata.set("drop_off_locations[0][drop_off_latitude]", coordinatesDrop.lat);
      formdata.set("drop_off_locations[0][drop_off_longitude]", coordinatesDrop.lng);
      formdata.set("drop_off_locations[0][booking_order]", "1");
      formdata.set("drop_off_locations[0][contact_name]", "karen");
      formdata.set("drop_off_locations[0][contact_number]", "12321");
      formdata.set("drop_off_locations[0][category_id]", "1");
      formdata.set("drop_off_locations[0][distance]", "5.382620231139828");
      formdata.set("additional_services[0]", "1");
      var apiUrl_rate = "http://localhost:8000/api/auth/calculate-rate";
      var apiUrl = "http://localhost:8000/api/auth/booking";
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
        formdata.set("price", result.data.price);
        localStorage.setItem("price", result.data.price);
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(apiUrl, formdata, options).then(function (result) {})["catch"](function (err) {});
      })["catch"](function (err) {});
    }
  }

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      address = _React$useState6[0],
      setAddress = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      addressDrop = _React$useState8[0],
      setAddressDrop = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      coordinates = _React$useState10[0],
      setCoordinates = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      coordinatesDrop = _React$useState12[0],
      setCoordinatesDrop = _React$useState12[1];

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
      var results, latLng, str, n;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);

            case 5:
              latLng = _context.sent;
              str = value.label;
              n = str.includes("Metro Manila");

              if (n === true) {
                setAddress(value);
                setCoordinates(latLng);
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224,
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
                    lineNumber: 225,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229,
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
                    lineNumber: 230,
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
                    lineNumber: 232,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234,
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

  var handleChangeDrop = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var results, latLng, str, n;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);

            case 5:
              latLng = _context2.sent;
              str = value.label;
              n = str.includes("Metro Manila");

              if (n === true) {
                setAddressDrop(value);
                setCoordinatesDrop(latLng);
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257,
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
                    lineNumber: 258,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262,
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
                    lineNumber: 263,
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
                    lineNumber: 265,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267,
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

  function opensweetalert() {
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        width: "800px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-inline",
    onClick: function onClick() {
      return click = 0;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectProps: {
      placeholder: "Pick-up Location",
      value: address,
      instanceId: "1",
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
      lineNumber: 302,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-inline",
    onClick: function onClick() {
      return click = 1;
    },
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectProps: {
      placeholder: "Drop-off Location",
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
      lineNumber: 327,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }))), __jsx("input", {
    type: "button",
    className: "btnSubmit",
    value: "SUBMIT",
    onClick: clickSubmit,
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 7
    }
  }));
}

_s(App, "xp2XWXocGz/PR7cg2uzLP6zkoKU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xpY2siLCJSZWFjdCIsInVzZVN0YXRlIiwidG9rZW51c2VyIiwic2V0VG9rZW51c2VyIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbVN0eWxlczEiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiZ2V0QWRkIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicGlja29mZiIsImluY2x1ZGVzIiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJwaWNrb2ZmbGF0IiwibG5nIiwiZHJvcG9mZmxhbmciLCJzZXRBZGRyZXNzIiwidmFsdWUiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsImNsaWNrU3VibWl0IiwiZSIsImFkZHJlc3MiLCJhZGRyZXNzRHJvcCIsIm9yaWdpbiIsImlkIiwiY29vcmRpbmF0ZSIsInB1c2giLCJkZXN0aW5hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiZHJvcG9mZiIsInBpY2tvZmZsYW5nIiwiZHJvcG9mZmxhdCIsInJlZnJlc2giLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJyYXRlZGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiZm9ybWRhdGEiLCJBdXRoU2VydmljZSIsImdldElkIiwiYXBpVXJsX3JhdGUiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImVyciIsInNldENvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXNEcm9wIiwiaGFuZGxlQ2hhbmdlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJzdHIiLCJuIiwiaGFuZGxlQ2hhbmdlRHJvcCIsIm9wZW5zd2VldGFsZXJ0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxLQUFKOztBQUY0Qix3QkFHTUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FITjtBQUFBO0FBQUEsTUFHckJDLFNBSHFCO0FBQUEsTUFHVkMsWUFIVTs7QUFBQSx5QkFJRkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKRTtBQUFBO0FBQUEsTUFJckJHLEtBSnFCO0FBQUEsTUFJZEMsUUFKYzs7QUFNNUIsTUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxXQUFPLEVBQUUsaUJBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBOztBQUFBLDZDQUNKRCxJQURJO0FBRVBFLGtCQUFVLEVBQUUsYUFGTDtBQUdQQyxhQUFLLEVBQUUsT0FIQTtBQUlQQyxjQUFNLEVBQUUscUJBSkQ7QUFLUEMsaUJBQVMsRUFBRSxNQUxKO0FBTVBDLG9CQUFZLEVBQUUsS0FOUDtBQU9Q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O0FBSUUsV0FBTyxFQUFFNUMsV0FKWDtBQUtFLFNBQUssRUFBRTtBQUFFbEMsZUFBUyxFQUFFO0FBQWIsS0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRGLENBREY7QUE2REQ7O0dBelZ1QnJCLEc7VUFDUEUscUQ7OztLQURPRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjODY4NTI5NDM5MjZmYmU3ZTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUsIHtcclxuICBnZW9jb2RlQnlBZGRyZXNzLFxyXG4gIGdldExhdExuZyxcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IEN1c3RvbW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbW1hcFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBjbGljaztcclxuICBjb25zdCBbdG9rZW51c2VyLCBzZXRUb2tlbnVzZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgcGFkZGluZzogXCIycHhcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IHN0YXRlLmlzRm9jdXNlZCA/IFwiI0VEQzcyOFwiIDogbnVsbCxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAvLyBPdmVyd3JpdHRlcyB0aGUgZGlmZmVyZW50IHN0YXRlcyBvZiBib3JkZXJcclxuICAgICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzaW5nbGVWYWx1ZTogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgY29uc3QgZm91bmRVc2VyID0gSlNPTi5wYXJzZShsb2dnZWRJblVzZXIpO1xyXG4gICAgICBzZXRUb2tlbnVzZXIoZm91bmRVc2VyLnRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFkZCgpIHtcclxuICAgIGlmIChnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZi5pbmNsdWRlcyhcIk1ldHJvIE1hbmlsYVwiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZiAoY2xpY2sgPT09IDApIHtcclxuICAgICAgICBjb29yZGluYXRlcy5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgICAgc2V0QWRkcmVzcyh7XHJcbiAgICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvb3JkaW5hdGVzRHJvcC5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgICBjb29yZGluYXRlc0Ryb3AubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICB9XHJcbiAgICAgIHN3YWwuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1N1Ym1pdChlKSB7XHJcbiAgICBpZiAoYWRkcmVzcyA9PT0gXCJcIiB8fCBhZGRyZXNzRHJvcCA9PT0gXCJcIikge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI2M2MjgyOFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL3dhcm5pbmcucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MgaW4gYm90aCB0ZXh0Ym94e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3JpZ2luID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nLFxyXG4gICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKG9yaWdpbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXNEcm9wLmxhdCxcclxuICAgICAgICBsbmc6IGNvb3JkaW5hdGVzRHJvcC5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzRHJvcFwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxhdFwiLCBjb29yZGluYXRlcy5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBpY2tvZmZsbmdcIiwgY29vcmRpbmF0ZXMubG5nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkcm9wb2ZmbGF0XCIsIGNvb3JkaW5hdGVzRHJvcC5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsbmdcIiwgY29vcmRpbmF0ZXNEcm9wLmxuZyk7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZiA9IGFkZHJlc3MubGFiZWw7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmID0gYWRkcmVzc0Ryb3AubGFiZWw7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gMTtcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VudXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZXMubGF0KTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZXMubG5nKVxyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbGF0aXR1ZGVdXCIsIGNvb3JkaW5hdGVzRHJvcC5sYXQpO1xyXG4gICAgICByYXRlZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bZHJvcF9vZmZfbG9uZ2l0dWRlXVwiLCBjb29yZGluYXRlc0Ryb3AubG5nKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Jvb2tpbmdfb3JkZXJdXCIsIFwiMVwiKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIjFcIik7XHJcblxyXG4gICAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiY3VzdG9tZXJfaWRcIiwgQXV0aFNlcnZpY2UuZ2V0SWQoKSk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImJvb2tpbmdfdHlwZV9pZFwiLCBcIjJcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImNvbnRhY3RfbmFtZVwiLCBcIkFsZm9uXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJjb250YWN0X251bWJlclwiLCBcIjMxMjMyMVwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwicGlja191cF9hZGRyZXNzXCIsIGFkZHJlc3MubGFiZWwpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJwaWNrX3VwX2xhdGl0dWRlXCIsIGNvb3JkaW5hdGVzLmxhdCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcInBpY2tfdXBfbG9uZ2l0dWRlXCIsIGNvb3JkaW5hdGVzLmxuZyk7XHJcbiAgXHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9hZGRyZXNzXVwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sYXRpdHVkZV1cIiwgY29vcmRpbmF0ZXNEcm9wLmxhdCk7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkcm9wX29mZl9sb25naXR1ZGVdXCIsIGNvb3JkaW5hdGVzRHJvcC5sbmcpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bYm9va2luZ19vcmRlcl1cIiwgXCIxXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9uYW1lXVwiLCBcImthcmVuXCIpO1xyXG4gICAgICBmb3JtZGF0YS5zZXQoXCJkcm9wX29mZl9sb2NhdGlvbnNbMF1bY29udGFjdF9udW1iZXJdXCIsIFwiMTIzMjFcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtjYXRlZ29yeV9pZF1cIixcIjFcIik7XHJcbiAgICAgIGZvcm1kYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtkaXN0YW5jZV1cIiwgXCI1LjM4MjYyMDIzMTEzOTgyOFwiKTtcclxuICAgICAgZm9ybWRhdGEuc2V0KFwiYWRkaXRpb25hbF9zZXJ2aWNlc1swXVwiLCBcIjFcIik7XHJcblxyXG4gICAgICBjb25zdCBhcGlVcmxfcmF0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcbiAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9hdXRoL2Jvb2tpbmdcIjtcclxuICAgICAgXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYXBpVXJsX3JhdGUsIHJhdGVkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgZm9ybWRhdGEuc2V0KFwicHJpY2VcIixyZXN1bHQuZGF0YS5wcmljZSk7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJpY2VcIiwgcmVzdWx0LmRhdGEucHJpY2UpO1xyXG4gICAgICAgICBheGlvc1xyXG4gICAgICAgICAucG9zdChhcGlVcmwsIGZvcm1kYXRhLCBvcHRpb25zKVxyXG4gICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AsIHNldEFkZHJlc3NEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AsIHNldENvb3JkaW5hdGVzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcbiAgICBpZiAobiA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgICAgc2V0Q29vcmRpbmF0ZXMobGF0TG5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgICBzZXRDb29yZGluYXRlc0Ryb3AobGF0TG5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwRHJhZ1wiPkRyYWcgdGhlIG1hcmtlciB0byBzZXQgbG9jYXRpb248L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Eb25lXCIgb25DbGljaz17Z2V0QWRkfT5cclxuICAgICAgICAgIERvbmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Q3VzdG9tbWFwPjwvQ3VzdG9tbWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xEZWxpdmVyXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZVwiPkJvb2sgeW91ciBkZWxpdmVyeSBub3chPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAwKX0+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGljay11cCBMb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMxLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkRyb3Atb2ZmIExvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0blN1Ym1pdFwiXHJcbiAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0fVxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=