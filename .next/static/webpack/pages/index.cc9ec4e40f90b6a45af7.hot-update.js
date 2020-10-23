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
      return _objectSpread(_objectSpread({}, base), {}, {
        background: "transparent",
        color: "red",
        border: "1px solid lightgray",
        borderRadius: "5px",
        width: "100%",
        padding: "2px",
        marginTop: "5px",
        boxShadow: state.isFocused ? "#EDC728" : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "#EDC728" : ""
        }
      });
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "white"
      });
    },
    option: function option(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "black"
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
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
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
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
          lineNumber: 81,
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
          lineNumber: 83,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, "Warning"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 100,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
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
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
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
          lineNumber: 107,
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
          lineNumber: 109,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, "Please enter a valid address in both textbox", " "))))));
    } else {
      $(".btn").addClass("btn--loading");
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
          Authorization: "Bearer " + _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].getToken()
        }
      };
      var ratedata = new FormData();
      ratedata.set("pick_up_latitude", coordinates.lat);
      ratedata.set("pick_up_longitude", coordinates.lng);
      ratedata.set("drop_off_locations[0][drop_off_latitude]", coordinatesDrop.lat);
      ratedata.set("drop_off_locations[0][drop_off_longitude]", coordinatesDrop.lng);
      ratedata.set("drop_off_locations[0][booking_order]", "1");
      ratedata.set("additional_services[0]", "1");
      var apiUrl_rate = "https://staging-api.jgo.com.ph/api/auth/calculate-rate";
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(apiUrl_rate, ratedata, options).then(function (result) {
        localStorage.setItem("price", result.data.price);
        router.push("/map");
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
                    lineNumber: 208,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209,
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
                    lineNumber: 210,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214,
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
                    lineNumber: 215,
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
                    lineNumber: 217,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219,
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
        lineNumber: 265,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
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
      lineNumber: 286,
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
      lineNumber: 287,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 307,
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
      lineNumber: 312,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }))), __jsx("a", {
    className: "btn btnSubmit",
    style: {
      marginTop: "10px"
    },
    onClick: clickSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 7
    }
  }, "Deliver", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 11
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 11
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xpY2siLCJSZWFjdCIsInVzZVN0YXRlIiwidG9rZW51c2VyIiwic2V0VG9rZW51c2VyIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbVN0eWxlczEiLCJjb250cm9sIiwiYmFzZSIsInN0YXRlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYm94U2hhZG93IiwiaXNGb2N1c2VkIiwiYm9yZGVyQ29sb3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwib3B0aW9uIiwidXNlRWZmZWN0IiwibG9nZ2VkSW5Vc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVXNlciIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiZ2V0QWRkIiwiZ2xvYmFsIiwiY29uZmlnIiwicGxhY2UiLCJkZWxpdmVyIiwicGlja29mZiIsImluY2x1ZGVzIiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJwaWNrb2ZmbGF0IiwibG5nIiwiZHJvcG9mZmxhbmciLCJzZXRBZGRyZXNzIiwidmFsdWUiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiYm9yZGVyTGVmdCIsInRleHRBbGlnbiIsImNsaWNrU3VibWl0IiwiZSIsImFkZHJlc3MiLCJhZGRyZXNzRHJvcCIsIiQiLCJhZGRDbGFzcyIsIm9yaWdpbiIsImlkIiwiY29vcmRpbmF0ZSIsInB1c2giLCJkZXN0aW5hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiZHJvcG9mZiIsInBpY2tvZmZsYW5nIiwiZHJvcG9mZmxhdCIsInJlZnJlc2giLCJvcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJBdXRoU2VydmljZSIsImdldFRva2VuIiwicmF0ZWRhdGEiLCJGb3JtRGF0YSIsInNldCIsImFwaVVybF9yYXRlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnIiLCJzZXRDb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzRHJvcCIsImhhbmRsZUNoYW5nZSIsImdlb2NvZGVCeUFkZHJlc3MiLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0TG5nIiwic3RyIiwibiIsImhhbmRsZUNoYW5nZURyb3AiLCJvcGVuc3dlZXRhbGVydCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJwbGFjZWhvbGRlciIsImluc3RhbmNlSWQiLCJvbkNoYW5nZSIsInN0eWxlcyIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsS0FBSjs7QUFGNEIsd0JBR01DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSE47QUFBQTtBQUFBLE1BR3JCQyxTQUhxQjtBQUFBLE1BR1ZDLFlBSFU7O0FBQUEseUJBSUZILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSkU7QUFBQTtBQUFBLE1BSXJCRyxLQUpxQjtBQUFBLE1BSWRDLFFBSmM7O0FBTTVCLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsV0FBTyxFQUFFLGlCQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw2Q0FDSkQsSUFESTtBQUVQRSxrQkFBVSxFQUFFLGFBRkw7QUFHUEMsYUFBSyxFQUFFLEtBSEE7QUFJUEMsY0FBTSxFQUFFLHFCQUpEO0FBTVBDLG9CQUFZLEVBQUUsS0FOUDtBQU9QQyxhQUFLLEVBQUUsTUFQQTtBQVFQ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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLENBbkRGLENBREY7QUE4REQ7O0dBM1V1QnhELEc7VUFDUEUscUQ7OztLQURPRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjOWVjNGU0MGY5MGI2YTQ1YWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUsIHtcclxuICBnZW9jb2RlQnlBZGRyZXNzLFxyXG4gIGdldExhdExuZyxcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IEN1c3RvbW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbW1hcFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBjbGljaztcclxuICBjb25zdCBbdG9rZW51c2VyLCBzZXRUb2tlbnVzZXJdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzMSA9IHtcclxuICAgIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uYmFzZSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIixcclxuXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjJweFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogc3RhdGUuaXNGb2N1c2VkID8gXCIjRURDNzI4XCIgOiBudWxsLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0dGVzIHRoZSBkaWZmZXJlbnQgc3RhdGVzIG9mIGJvcmRlclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBzdGF0ZS5pc0ZvY3VzZWQgPyBcIiNFREM3MjhcIiA6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgICBvcHRpb246IChwcm92aWRlZCkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kVXNlciA9IEpTT04ucGFyc2UobG9nZ2VkSW5Vc2VyKTtcclxuICAgICAgc2V0VG9rZW51c2VyKGZvdW5kVXNlci50b2tlbik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBnZXRBZGQoKSB7XHJcbiAgICBpZiAoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIikgPT09IHRydWUpIHtcclxuICAgICAgaWYgKGNsaWNrID09PSAwKSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZXMubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgICAgY29vcmRpbmF0ZXMubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICAgICAgdmFsdWU6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFkZHJlc3NEcm9wKHtcclxuICAgICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb29yZGluYXRlc0Ryb3AubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgICAgY29vcmRpbmF0ZXNEcm9wLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgfVxyXG4gICAgICBzd2FsLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDUwcHhcIiwgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0ZGRTkwMFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkltYWdlL2NvbXBsYWluLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5XYXJuaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yU3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBlbnRlcmVkIGFkZHJlc3MgaXMgbm90IHlldCBpbiBvdXIgc2VydmljZSBhcmVhLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xpY2tTdWJtaXQoZSkge1xyXG4gIFxyXG4gICAgaWYgKGFkZHJlc3MgPT09IFwiXCIgfHwgYWRkcmVzc0Ryb3AgPT09IFwiXCIpIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNjNjI4MjhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS93YXJuaW5nLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjMycHhcIiB9fT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzIGluIGJvdGggdGV4dGJveHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuYnRuXCIpLmFkZENsYXNzKFwiYnRuLS1sb2FkaW5nXCIpO1xyXG4gICAgICBjb25zdCBvcmlnaW4gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlc0Ryb3AubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXNEcm9wLmxuZyxcclxuICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzXCIsIGFkZHJlc3MubGFiZWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkZHJlc3NEcm9wXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaWNrb2ZmbGF0XCIsIGNvb3JkaW5hdGVzLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxuZ1wiLCBjb29yZGluYXRlcy5sbmcpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsYXRcIiwgY29vcmRpbmF0ZXNEcm9wLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJvcG9mZmxuZ1wiLCBjb29yZGluYXRlc0Ryb3AubG5nKTtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmID0gYWRkcmVzcy5sYWJlbDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSBhZGRyZXNzRHJvcC5sYWJlbDtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnJlZnJlc2ggPSAxO1xyXG5cclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJhdGVkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcInBpY2tfdXBfbGF0aXR1ZGVcIiwgY29vcmRpbmF0ZXMubGF0KTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFwicGlja191cF9sb25naXR1ZGVcIiwgY29vcmRpbmF0ZXMubG5nKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xhdGl0dWRlXVwiLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzRHJvcC5sYXRcclxuICAgICAgKTtcclxuICAgICAgcmF0ZWRhdGEuc2V0KFxyXG4gICAgICAgIFwiZHJvcF9vZmZfbG9jYXRpb25zWzBdW2Ryb3Bfb2ZmX2xvbmdpdHVkZV1cIixcclxuICAgICAgICBjb29yZGluYXRlc0Ryb3AubG5nXHJcbiAgICAgICk7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImRyb3Bfb2ZmX2xvY2F0aW9uc1swXVtib29raW5nX29yZGVyXVwiLCBcIjFcIik7XHJcbiAgICAgIHJhdGVkYXRhLnNldChcImFkZGl0aW9uYWxfc2VydmljZXNbMF1cIiwgXCIxXCIpO1xyXG5cclxuICAgICAgY29uc3QgYXBpVXJsX3JhdGUgPVxyXG4gICAgICAgIFwiaHR0cHM6Ly9zdGFnaW5nLWFwaS5qZ28uY29tLnBoL2FwaS9hdXRoL2NhbGN1bGF0ZS1yYXRlXCI7XHJcblxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGFwaVVybF9yYXRlLCByYXRlZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByaWNlXCIsIHJlc3VsdC5kYXRhLnByaWNlKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL21hcFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AsIHNldEFkZHJlc3NEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AsIHNldENvb3JkaW5hdGVzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcbiAgICBpZiAobiA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgICAgc2V0Q29vcmRpbmF0ZXMobGF0TG5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcblxyXG4gICAgaWYgKG4gPT09IHRydWUpIHtcclxuICAgICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgICBzZXRDb29yZGluYXRlc0Ryb3AobGF0TG5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwRHJhZ1wiPkRyYWcgdGhlIG1hcmtlciB0byBzZXQgbG9jYXRpb248L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Eb25lXCIgb25DbGljaz17Z2V0QWRkfT5cclxuICAgICAgICAgIERvbmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Q3VzdG9tbWFwPjwvQ3VzdG9tbWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xEZWxpdmVyXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZVwiPkJvb2sgeW91ciBkZWxpdmVyeSBub3chPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAwKX0+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGljay11cCBMb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgc3R5bGVzOiBjdXN0b21TdHlsZXMxLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkRyb3Atb2ZmIExvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICAgIHN0eWxlczogY3VzdG9tU3R5bGVzMSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG5TdWJtaXRcIiAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fSBvbkNsaWNrPXtjbGlja1N1Ym1pdH0+XHJcbiAgICAgICAgRGVsaXZlclxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgICAgPGI+PC9iPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9