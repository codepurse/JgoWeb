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
    if (address === "") {
      alert("bawal");
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
        lineNumber: 97,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 136,
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
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 161,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiY2xpY2siLCJnZXRBZGQiLCJjb29yZGluYXRlcyIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsInBpY2tvZmYiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiY2xpY2tTdWJtaXQiLCJlIiwiYWRkcmVzcyIsImFsZXJ0Iiwib3JpZ2luIiwiaWQiLCJjb29yZGluYXRlIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRyZXNzRHJvcCIsImRyb3BvZmYiLCJwaWNrb2ZmbGFuZyIsImRyb3BvZmZsYXQiLCJyZWZyZXNoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldENvb3JkaW5hdGVzIiwic2V0Q29vcmRpbmF0ZXNEcm9wIiwiaGFuZGxlQ2hhbmdlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJoYW5kbGVDaGFuZ2VEcm9wIiwib3BlbnN3ZWV0YWxlcnQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiaW5zdGFuY2VJZCIsIm9uQ2hhbmdlIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFJQyxLQUFKOztBQUVBLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEIsUUFBSUQsS0FBSyxLQUFLLENBQWQsRUFB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QUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHdFQUFEO0FBQ0UsZUFBVyxFQUFFO0FBQ1hKLGdCQUFVLEVBQUUsR0FERDtBQUVYdkMsV0FBSyxFQUFFb0IsV0FGSTtBQUdYb0IsY0FBUSxFQUFFTjtBQUhDLEtBRGY7QUFNRSx5QkFBcUIsRUFBRTtBQUNyQk8sMkJBQXFCLEVBQUU7QUFDckJDLGVBQU8sRUFBRSxDQUFDLElBQUQ7QUFEWTtBQURGLEtBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQWlCRTtBQUNFLE9BQUcsRUFBQyx1QkFETjtBQUVFLGFBQVMsRUFBQyxrQkFGWjtBQUdFLFdBQU8sRUFBRVAsY0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBcEJGLENBRkYsRUErQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUU1QixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsQ0FERjtBQXdERDs7R0EvSnVCcEIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWU5ZjQwOTE4YmRmNzk0YTAyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnQvbWFwL2NvbmZpZ1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDdXN0b21tYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21tYXBcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHZhciBjbGljaztcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWRkKCkge1xyXG4gICAgaWYgKGNsaWNrID09PSAwKSB7XHJcbiAgICAgIGNvb3JkaW5hdGVzLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlcy5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICAgIHNldEFkZHJlc3Moe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWRkcmVzc0Ryb3Aoe1xyXG4gICAgICAgIHZhbHVlOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZixcclxuICAgICAgICBsYWJlbDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb29yZGluYXRlc0Ryb3AubGF0ID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQ7XHJcbiAgICAgIGNvb3JkaW5hdGVzRHJvcC5sbmcgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmc7XHJcbiAgICB9XHJcbiAgICBzd2FsLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja1N1Ym1pdChlKSB7XHJcbiAgICBpZiAoYWRkcmVzcyA9PT0gXCJcIikge1xyXG4gICAgICBhbGVydChcImJhd2FsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3JpZ2luID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nLFxyXG4gICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgfTtcclxuICAgICAgY29vcmRpbmF0ZS5wdXNoKG9yaWdpbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICAgIGxhdDogY29vcmRpbmF0ZXNEcm9wLmxhdCxcclxuICAgICAgICBsbmc6IGNvb3JkaW5hdGVzRHJvcC5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRkcmVzc1wiLCBhZGRyZXNzLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzRHJvcFwiLCBhZGRyZXNzRHJvcC5sYWJlbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxhdFwiLCBjb29yZGluYXRlcy5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBpY2tvZmZsbmdcIiwgY29vcmRpbmF0ZXMubG5nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkcm9wb2ZmbGF0XCIsIGNvb3JkaW5hdGVzRHJvcC5sYXQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsbmdcIiwgY29vcmRpbmF0ZXNEcm9wLmxuZyk7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZiA9IGFkZHJlc3MubGFiZWw7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmID0gYWRkcmVzc0Ryb3AubGFiZWw7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcblxyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5yZWZyZXNoID0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcCwgc2V0Q29vcmRpbmF0ZXNEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBEcmFnXCI+RHJhZyB0aGUgbWFya2VyIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkRvbmVcIiBvbkNsaWNrPXtnZXRBZGR9PlxyXG4gICAgICAgICAgRG9uZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxDdXN0b21tYXA+PC9DdXN0b21tYXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbERlbGl2ZXJcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDApfT5cclxuICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0blN1Ym1pdFwiXHJcbiAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0fVxyXG4gICAgICA+PC9pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==