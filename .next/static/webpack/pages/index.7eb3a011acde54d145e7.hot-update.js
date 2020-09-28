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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var click;

  function getAdd() {
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
  }

  function clickSubmit(e) {
    if (address === "" || addressDrop === "") {
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()(__jsx("div", {
        style: {
          width: "500px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "Image/close.png",
        style: {
          width: "25px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "col-lg-9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }))));
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
      var results, latLng;
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
              console.log(value);
              setAddress(value);
              setCoordinates(latLng);

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
      var results, latLng;
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
              setAddressDrop(value);
              setCoordinatesDrop(latLng);

            case 8:
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
        lineNumber: 110,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 150,
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
      lineNumber: 155,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xpY2siLCJnZXRBZGQiLCJjb29yZGluYXRlcyIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsInBpY2tvZmYiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiY2xpY2tTdWJtaXQiLCJlIiwiYWRkcmVzcyIsImFkZHJlc3NEcm9wIiwid2lkdGgiLCJvcmlnaW4iLCJpZCIsImNvb3JkaW5hdGUiLCJwdXNoIiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRyb3BvZmYiLCJwaWNrb2ZmbGFuZyIsImRyb3BvZmZsYXQiLCJyZWZyZXNoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldENvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXNEcm9wIiwiaGFuZGxlQ2hhbmdlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJoYW5kbGVDaGFuZ2VEcm9wIiwib3BlbnN3ZWV0YWxlcnQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsS0FB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LEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUU1QixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsQ0FERjtBQXdERDs7R0E3S3VCdEIsRztVQUNQRSxxRDs7O0tBRE9GLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2ViM2EwMTFhY2RlNTRkMTQ1ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudC9tYXAvY29uZmlnXCI7XHJcbmltcG9ydCBHb29nbGVQbGFjZXNBdXRvY29tcGxldGUsIHtcclxuICBnZW9jb2RlQnlBZGRyZXNzLFxyXG4gIGdldExhdExuZyxcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IEN1c3RvbW1hcCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbW1hcFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWRkKCkge1xyXG4gICAgaWYgKGNsaWNrID09PSAwKSB7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb29yZGluYXRlc0Ryb3AubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzRHJvcC5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1N1Ym1pdChlKSB7XHJcbiAgICBpZiAoYWRkcmVzcyA9PT0gXCJcIiB8fCBhZGRyZXNzRHJvcCA9PT0gXCJcIikge1xyXG4gICAgICBzd2FsKFxyXG4gICAgICAgIDxkaXYgc3R5bGUgPSB7e3dpZHRoOiBcIjUwMHB4XCJ9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmMgPSBcIkltYWdlL2Nsb3NlLnBuZ1wiIHN0eWxlID0ge3t3aWR0aDogXCIyNXB4XCJ9fT48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3JpZ2luID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nLFxyXG4gICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKG9yaWdpbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXNEcm9wLmxhdCxcclxuICAgICAgICBsbmc6IGNvb3JkaW5hdGVzRHJvcC5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzRHJvcFwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxhdFwiLCBjb29yZGluYXRlcy5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBpY2tvZmZsbmdcIiwgY29vcmRpbmF0ZXMubG5nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkcm9wb2ZmbGF0XCIsIGNvb3JkaW5hdGVzRHJvcC5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsbmdcIiwgY29vcmRpbmF0ZXNEcm9wLmxuZyk7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZiA9IGFkZHJlc3MubGFiZWw7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmID0gYWRkcmVzc0Ryb3AubGFiZWw7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gMTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbWFwXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkZHJlc3NEcm9wLCBzZXRBZGRyZXNzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXNEcm9wLCBzZXRDb29yZGluYXRlc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldEFkZHJlc3ModmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXMobGF0TG5nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEcm9wID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzRHJvcCh2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlc0Ryb3AobGF0TG5nKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBvcGVuc3dlZXRhbGVydCgpIHtcclxuICAgIHN3YWwoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjgwMHB4XCJcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyYWdcIj5EcmFnIHRoZSBtYXJrZXIgdG8gc2V0IGxvY2F0aW9uPC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRG9uZVwiIG9uQ2xpY2s9e2dldEFkZH0+XHJcbiAgICAgICAgICBEb25lXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPEN1c3RvbW1hcD48L0N1c3RvbW1hcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sRGVsaXZlclwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVcIj5Cb29rIHlvdXIgZGVsaXZlcnkgbm93ITwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMCl9PlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeTogW1wicGhcIl0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIkltYWdlL2dvb2dsZS1tYXBzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWdNYXBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAxKX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICB2YWx1ZT1cIlNVQk1JVFwiXHJcbiAgICAgICAgb25DbGljaz17Y2xpY2tTdWJtaXR9XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9