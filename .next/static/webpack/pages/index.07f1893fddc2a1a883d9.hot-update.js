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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-places-autocomplete */ "./node_modules/react-google-places-autocomplete/build/index.es.js");
/* harmony import */ var _component_custommap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/custommap */ "./component/custommap.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\deliver.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






function App() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var click;

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

      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default.a.close();
    } else {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
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
          lineNumber: 41,
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
          lineNumber: 43,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, "Warning"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, "The entered address is not yet in our service area."))))));
    }
  }

  function clickSubmit(e) {
    if (address === "" || addressDrop === "") {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
        style: {
          width: "450px",
          padding: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
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
          lineNumber: 66,
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
          lineNumber: 68,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "pError",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, "Error"), __jsx("p", {
        className: "pErrorSub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
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
      router.push("/map");
    }
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      address = _React$useState2[0],
      setAddress = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      addressDrop = _React$useState4[0],
      setAddressDrop = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      coordinates = _React$useState6[0],
      setCoordinates = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      coordinatesDrop = _React$useState8[0],
      setCoordinatesDrop = _React$useState8[1];

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
      var results, latLng, str, n;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["geocodeByAddress"])(value.label);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["getLatLng"])(results[0]);

            case 5:
              latLng = _context.sent;
              str = value.label;
              n = str.includes("Metro Manila");

              if (n === true) {
                setAddress(value);
                setCoordinates(latLng);
              } else {
                _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
                  style: {
                    width: "450px",
                    padding: "10px"
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 9
                  }
                }, __jsx("div", {
                  className: "container",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135,
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
                    lineNumber: 136,
                    columnNumber: 13
                  }
                }, __jsx("div", {
                  className: "col-lg-2",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140,
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
                    lineNumber: 141,
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
                    lineNumber: 143,
                    columnNumber: 15
                  }
                }, __jsx("p", {
                  className: "pError",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 17
                  }
                }, "Warning"), __jsx("p", {
                  className: "pErrorSub",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145,
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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["geocodeByAddress"])(value.label);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["getLatLng"])(results[0]);

            case 5:
              latLng = _context2.sent;
              str = value.label;
              n = str.includes("Metro Manila");
              setAddressDrop(value);
              setCoordinatesDrop(latLng);

              if (n === true) {
                alert("asdas");
              }

            case 11:
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
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        width: "800px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 191,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectProps: {
      value: address,
      instanceId: "1",
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
      lineNumber: 192,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 215,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }))), __jsx("input", {
    type: "button",
    className: "btnSubmit",
    value: "SUBMIT",
    onClick: clickSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }));
}

_s(App, "0rj3b8az6A7tZWXKQ7J+RPknxYg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xpY2siLCJnZXRBZGQiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJwaWNrb2ZmIiwiaW5jbHVkZXMiLCJjb29yZGluYXRlcyIsImxhdCIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsImxhYmVsIiwic2V0QWRkcmVzc0Ryb3AiLCJjb29yZGluYXRlc0Ryb3AiLCJzd2FsIiwiY2xvc2UiLCJ3aWR0aCIsInBhZGRpbmciLCJib3JkZXJMZWZ0IiwidGV4dEFsaWduIiwiY2xpY2tTdWJtaXQiLCJlIiwiYWRkcmVzcyIsImFkZHJlc3NEcm9wIiwib3JpZ2luIiwiaWQiLCJjb29yZGluYXRlIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkcm9wb2ZmIiwicGlja29mZmxhbmciLCJkcm9wb2ZmbGF0IiwicmVmcmVzaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRDb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzRHJvcCIsImhhbmRsZUNoYW5nZSIsImdlb2NvZGVCeUFkZHJlc3MiLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0TG5nIiwic3RyIiwibiIsImhhbmRsZUNoYW5nZURyb3AiLCJhbGVydCIsIm9wZW5zd2VldGFsZXJ0IiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImluc3RhbmNlSWQiLCJvbkNoYW5nZSIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImNvdW50cnkiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxH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O0FBQUEsS0FGWDtBQUdFLFNBQUssRUFBRTtBQUFFOEQsZUFBUyxFQUFFO0FBQWIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx3RUFBRDtBQUNFLGVBQVcsRUFBRTtBQUNYSixnQkFBVSxFQUFFLEdBREQ7QUFFWDVDLFdBQUssRUFBRWEsV0FGSTtBQUdYZ0MsY0FBUSxFQUFFUDtBQUhDLEtBRGY7QUFNRSx5QkFBcUIsRUFBRTtBQUNyQlEsMkJBQXFCLEVBQUU7QUFDckJDLGVBQU8sRUFBRSxDQUFDLElBQUQ7QUFEWTtBQURGLEtBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQWlCRTtBQUNFLE9BQUcsRUFBQyx1QkFETjtBQUVFLGFBQVMsRUFBQyxrQkFGWjtBQUdFLFdBQU8sRUFBRVAsY0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBcEJGLENBRkYsRUErQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUU5QixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsQ0FERjtBQXdERDs7R0F6T3VCM0IsRztVQUNQRSxxRDs7O0tBRE9GLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdmMTg5M2ZkZGMyYTFhODgzZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUsIHtcclxuICBnZW9jb2RlQnlBZGRyZXNzLFxyXG4gIGdldExhdExuZyxcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IEN1c3RvbW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbW1hcFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWRkKCkge1xyXG4gICAgaWYgKGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLmluY2x1ZGVzKFwiTWV0cm8gTWFuaWxhXCIpID09PSB0cnVlKSB7XHJcbiAgICAgIGlmIChjbGljayA9PT0gMCkge1xyXG4gICAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICAgIGNvb3JkaW5hdGVzLmxuZyA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZztcclxuICAgICAgICBzZXRBZGRyZXNzKHtcclxuICAgICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICAgIGxhYmVsOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRBZGRyZXNzRHJvcCh7XHJcbiAgICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29vcmRpbmF0ZXNEcm9wLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICAgIGNvb3JkaW5hdGVzRHJvcC5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIH1cclxuICAgICAgc3dhbC5jbG9zZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dhbChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1MHB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNGRkU5MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJJbWFnZS9jb21wbGFpbi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+V2FybmluZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgZW50ZXJlZCBhZGRyZXNzIGlzIG5vdCB5ZXQgaW4gb3VyIHNlcnZpY2UgYXJlYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrU3VibWl0KGUpIHtcclxuICAgIGlmIChhZGRyZXNzID09PSBcIlwiIHx8IGFkZHJlc3NEcm9wID09PSBcIlwiKSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjYzYyODI4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2Uvd2FybmluZy5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIzMnB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEVycm9yXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcyBpbiBib3RoIHRleHRib3h7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcmlnaW4gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlc0Ryb3AubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXNEcm9wLmxuZyxcclxuICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzXCIsIGFkZHJlc3MubGFiZWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkZHJlc3NEcm9wXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaWNrb2ZmbGF0XCIsIGNvb3JkaW5hdGVzLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxuZ1wiLCBjb29yZGluYXRlcy5sbmcpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsYXRcIiwgY29vcmRpbmF0ZXNEcm9wLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJvcG9mZmxuZ1wiLCBjb29yZGluYXRlc0Ryb3AubG5nKTtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmID0gYWRkcmVzcy5sYWJlbDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSBhZGRyZXNzRHJvcC5sYWJlbDtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnJlZnJlc2ggPSAxO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9tYXBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AsIHNldEFkZHJlc3NEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AsIHNldENvb3JkaW5hdGVzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcbiAgICBpZiAobiA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgICAgc2V0Q29vcmRpbmF0ZXMobGF0TG5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3YWwoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NTBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRkZFOTAwXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiSW1hZ2UvY29tcGxhaW4ucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzJweFwiIH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFcnJvclwiPldhcm5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRXJyb3JTdWJcIj5cclxuICAgICAgICAgICAgICAgICAgVGhlIGVudGVyZWQgYWRkcmVzcyBpcyBub3QgeWV0IGluIG91ciBzZXJ2aWNlIGFyZWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgdmFyIHN0ciA9IHZhbHVlLmxhYmVsO1xyXG4gICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCJNZXRybyBNYW5pbGFcIik7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AobGF0TG5nKTtcclxuICAgIGlmIChuID09PSB0cnVlKSB7XHJcbiAgICAgIGFsZXJ0KFwiYXNkYXNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwRHJhZ1wiPkRyYWcgdGhlIG1hcmtlciB0byBzZXQgbG9jYXRpb248L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Eb25lXCIgb25DbGljaz17Z2V0QWRkfT5cclxuICAgICAgICAgIERvbmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Q3VzdG9tbWFwPjwvQ3VzdG9tbWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xEZWxpdmVyXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZVwiPkJvb2sgeW91ciBkZWxpdmVyeSBub3chPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAwKX0+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDEpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjJcIixcclxuICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzc0Ryb3AsXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZURyb3AsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS1tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJidG5TdWJtaXRcIlxyXG4gICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICBvbkNsaWNrPXtjbGlja1N1Ym1pdH1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=