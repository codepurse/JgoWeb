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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/map/config */ "./component/map/config.js");
/* harmony import */ var _component_map_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_map_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-places-autocomplete */ "./node_modules/react-google-places-autocomplete/build/index.es.js");
/* harmony import */ var _component_custommap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/custommap */ "./component/custommap.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert/with-react */ "./node_modules/@sweetalert/with-react/dist/sweetalert.js");
/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\deliver.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






function App() {
  _s();

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

    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default.a.close();
  }

  function clickSubmit(e) {
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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);

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
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value.label);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);

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
    _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_8___default()(__jsx("div", {
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 114,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 153,
      columnNumber: 9
    }
  }));
}

_s(App, "zFMC0KU8b8nr5BrKrDLxHvl4blc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiY2xpY2siLCJnZXRBZGQiLCJjb29yZGluYXRlcyIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsInBpY2tvZmYiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiY2xpY2tTdWJtaXQiLCJlIiwib3JpZ2luIiwiaWQiLCJjb29yZGluYXRlIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRyZXNzIiwiYWRkcmVzc0Ryb3AiLCJkcm9wb2ZmIiwicGlja29mZmxhbmciLCJkcm9wb2ZmbGF0IiwicmVmcmVzaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRDb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzRHJvcCIsImhhbmRsZUNoYW5nZSIsImdlb2NvZGVCeUFkZHJlc3MiLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0TG5nIiwiaGFuZGxlQ2hhbmdlRHJvcCIsIm9wZW5zd2VldGFsZXJ0IiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImluc3RhbmNlSWQiLCJvbkNoYW5nZSIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImNvdW50cnkiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDNUIsTUFBSUMsS0FBSjs7QUFFQSxXQUFTQyxNQUFULEdBQWtCO0FBQ2hCLFFBQUlELEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZF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QUVtQixXQUZJO0FBR1hvQixjQUFRLEVBQUVOO0FBSEMsS0FEZjtBQU1FLHlCQUFxQixFQUFFO0FBQ3JCTywyQkFBcUIsRUFBRTtBQUNyQkMsZUFBTyxFQUFFLENBQUMsSUFBRDtBQURZO0FBREYsS0FOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBYUU7QUFDRSxPQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxXQUFPLEVBQUVQLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBcEJGLENBRkYsRUEyQ0k7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUUzQixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0osQ0FERjtBQXFERDs7R0F4SnVCcEIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjJjMjM2N2FmNTg0ODA5ZWMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnQvbWFwL2NvbmZpZ1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDdXN0b21tYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21tYXBcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWRkKCkge1xyXG4gICAgaWYgKGNsaWNrID09PSAwKSB7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb29yZGluYXRlc0Ryb3AubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzRHJvcC5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1N1Ym1pdChlKSB7XHJcbiAgICBjb25zdCBvcmlnaW4gPSB7XHJcbiAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgfTtcclxuICAgIGNvb3JkaW5hdGUucHVzaChvcmlnaW4pO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgIGxhdDogY29vcmRpbmF0ZXNEcm9wLmxhdCxcclxuICAgICAgbG5nOiBjb29yZGluYXRlc0Ryb3AubG5nLFxyXG4gICAgICBpZDogXCIyXCIsXHJcbiAgICB9O1xyXG4gICAgY29vcmRpbmF0ZS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkcmVzc0Ryb3BcIiwgYWRkcmVzc0Ryb3AubGFiZWwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaWNrb2ZmbGF0XCIsIGNvb3JkaW5hdGVzLmxhdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBpY2tvZmZsbmdcIiwgY29vcmRpbmF0ZXMubG5nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJvcG9mZmxhdFwiLCBjb29yZGluYXRlc0Ryb3AubGF0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJvcG9mZmxuZ1wiLCBjb29yZGluYXRlc0Ryb3AubG5nKTtcclxuXHJcbiAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZiA9IGFkZHJlc3MubGFiZWw7XHJcbiAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZiA9IGFkZHJlc3NEcm9wLmxhYmVsO1xyXG5cclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcblxyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYXQgPSBjb29yZGluYXRlc0Ryb3AubGF0O1xyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gMTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcCwgc2V0Q29vcmRpbmF0ZXNEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBEcmFnXCI+RHJhZyB0aGUgbWFya2VyIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkRvbmVcIiBvbkNsaWNrPXtnZXRBZGR9PlxyXG4gICAgICAgICAgRG9uZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxDdXN0b21tYXA+PC9DdXN0b21tYXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbERlbGl2ZXJcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDApfT5cclxuICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDEpfSBzdHlsZT0ge3ttYXJnaW5Ub3A6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3NEcm9wLFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VEcm9wLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0fVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9