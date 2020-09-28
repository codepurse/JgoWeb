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
    src: "Image/maps.png",
    className: "img-fluid",
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
    className: "img-fluid",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/map",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "button",
    className: "btnSubmit",
    value: "SUBMIT",
    onClick: clickSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwiY2xpY2siLCJnZXRBZGQiLCJjb29yZGluYXRlcyIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsInBpY2tvZmYiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiY2xpY2tTdWJtaXQiLCJlIiwib3JpZ2luIiwiaWQiLCJjb29yZGluYXRlIiwicHVzaCIsImRlc3RpbmF0aW9uIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRyZXNzIiwiYWRkcmVzc0Ryb3AiLCJkcm9wb2ZmIiwicGlja29mZmxhbmciLCJkcm9wb2ZmbGF0IiwicmVmcmVzaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRDb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzRHJvcCIsImhhbmRsZUNoYW5nZSIsImdlb2NvZGVCeUFkZHJlc3MiLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0TG5nIiwiaGFuZGxlQ2hhbmdlRHJvcCIsIm9wZW5zd2VldGFsZXJ0IiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImluc3RhbmNlSWQiLCJvbkNoYW5nZSIsImNvbXBvbmVudFJlc3RyaWN0aW9ucyIsImNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDNUIsTUFBSUMsS0FBSjs7QUFFQSxXQUFTQyxNQUFULEdBQWtCO0FBQ2hCLFFBQUlELEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZFLGlCQUFXLENBQUNDLEdBQVosR0FBa0JDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkMsVUFBOUM7QUFDQU4saUJBQVcsQ0FBQ08sR0FBWixHQUFrQkwsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCRyxXQUE5QztBQUNBQyxnQkFBVSxDQUFDO0FBQ1RDLGFBQUssRUFBRVIsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCTSxPQUQxQjtBQUVUQyxhQUFLLEVBQUVWLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk07QUFGMUIsT0FBRCxDQUFWO0FBSUQsS0FQRCxNQU9PO0FBQ0xFLG9CQUFjLENBQUM7QUFDYkgsYUFBSyxFQUFFUixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJNLE9BRHRCO0FBRWJDLGFBQUssRUFBRVYsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCTTtBQUZ0QixPQUFELENBQWQ7QUFJQUcscUJBQWUsQ0FBQ2IsR0FBaEIsR0FBc0JDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkMsVUFBbEQ7QUFDQVEscUJBQWUsQ0FBQ1AsR0FBaEIsR0FBc0JMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkcsV0FBbEQ7QUFDRDs7QUFDRE8saUVBQUksQ0FBQ0MsS0FBTDtBQUNEOztBQUVELFdBQVNDLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3RCLFFBQU1DLE1BQU0sR0FBRztBQUNibEIsU0FBRyxFQUFFRCxXQUFXLENBQUNDLEdBREo7QUFFYk0sU0FBRyxFQUFFUCxXQUFXLENBQUNPLEdBRko7QUFHYmEsUUFBRSxFQUFFO0FBSFMsS0FBZjtBQUtBQyxjQUFVLENBQUNDLElBQVgsQ0FBZ0JILE1BQWhCO0FBQ0EsUUFBTUksV0FBVyxHQUFHO0FBQ2xCdEIsU0FBRyxFQUFFYSxlQUFlLENBQUNiLEdBREg7QUFFbEJNLFNBQUcsRUFBRU8sZUFBZSxDQUFDUCxHQUZIO0FBR2xCYSxRQUFFLEVBQUU7QUFIYyxLQUFwQjtBQUtBQyxjQUFVLENBQUNDLElBQVgsQ0FBZ0JDLFdBQWhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBRUFLLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NDLE9BQU8sQ0FBQ2hCLEtBQXhDO0FBQ0FjLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NFLFdBQVcsQ0FBQ2pCLEtBQWhEO0FBQ0FjLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMzQixXQUFXLENBQUNDLEdBQS9DO0FBQ0F5QixnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DM0IsV0FBVyxDQUFDTyxHQUEvQztBQUNBbUIsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQ2IsZUFBZSxDQUFDYixHQUFuRDtBQUNBeUIsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQ2IsZUFBZSxDQUFDUCxHQUFuRDtBQUVBTCxVQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJNLE9BQTVCLEdBQXNDaUIsT0FBTyxDQUFDaEIsS0FBOUM7QUFDQVYsVUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCeUIsT0FBNUIsR0FBc0NELFdBQVcsQ0FBQ2pCLEtBQWxEO0FBRUFWLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QkMsVUFBNUIsR0FBeUNRLGVBQWUsQ0FBQ2IsR0FBekQ7QUFDQUMsVUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCMEIsV0FBNUIsR0FBMENqQixlQUFlLENBQUNQLEdBQTFEO0FBRUFMLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QjJCLFVBQTVCLEdBQXlDbEIsZUFBZSxDQUFDYixHQUF6RDtBQUNBQyxVQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJHLFdBQTVCLEdBQTBDTSxlQUFlLENBQUNQLEdBQTFEO0FBQ0FMLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QjRCLE9BQTVCLEdBQXNDLENBQXRDO0FBQ0Q7O0FBckQyQix3QkF1REVDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBdkRGO0FBQUE7QUFBQSxNQXVEckJQLE9BdkRxQjtBQUFBLE1BdURabkIsVUF2RFk7O0FBQUEseUJBd0RVeUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0F4RFY7QUFBQTtBQUFBLE1Bd0RyQk4sV0F4RHFCO0FBQUEsTUF3RFJoQixjQXhEUTs7QUFBQSx5QkF5RFVxQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDbkRsQyxPQUFHLEVBQUUsSUFEOEM7QUFFbkRNLE9BQUcsRUFBRTtBQUY4QyxHQUFmLENBekRWO0FBQUE7QUFBQSxNQXlEckJQLFdBekRxQjtBQUFBLE1BeURSb0MsY0F6RFE7O0FBQUEseUJBNkRrQkYsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQzNEbEMsT0FBRyxFQUFFLElBRHNEO0FBRTNETSxPQUFHLEVBQUU7QUFGc0QsR0FBZixDQTdEbEI7QUFBQTtBQUFBLE1BNkRyQk8sZUE3RHFCO0FBQUEsTUE2REp1QixrQkE3REk7O0FBa0U1QixNQUFNQyxZQUFZO0FBQUEsZ01BQUcsaUJBQU81QixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0c2Qix5RkFBZ0IsQ0FBQzdCLEtBQUssQ0FBQ0UsS0FBUCxDQURuQjs7QUFBQTtBQUNiNEIscUJBRGE7QUFBQTtBQUFBLHFCQUVFQyxrRkFBUyxDQUFDRCxPQUFPLENBQUMsQ0FBRCxDQUFSLENBRlg7O0FBQUE7QUFFYkUsb0JBRmE7QUFHbkJsQixxQkFBTyxDQUFDQyxHQUFSLENBQVlmLEtBQVo7QUFDQUQsd0JBQVUsQ0FBQ0MsS0FBRCxDQUFWO0FBQ0EwQiw0QkFBYyxDQUFDTSxNQUFELENBQWQ7O0FBTG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpKLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBUUEsTUFBTUssZ0JBQWdCO0FBQUEsaU1BQUcsa0JBQU9qQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0Q2Qix5RkFBZ0IsQ0FBQzdCLEtBQUssQ0FBQ0UsS0FBUCxDQURmOztBQUFBO0FBQ2pCNEIscUJBRGlCO0FBQUE7QUFBQSxxQkFFRkMsa0ZBQVMsQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUZQOztBQUFBO0FBRWpCRSxvQkFGaUI7QUFHdkI3Qiw0QkFBYyxDQUFDSCxLQUFELENBQWQ7QUFDQTJCLGdDQUFrQixDQUFDSyxNQUFELENBQWxCOztBQUp1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQkMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQU9BLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEI3QixpRUFBSSxDQUNGO0FBQ0UsV0FBSyxFQUFFO0FBQ0w4QixvQkFBWSxFQUFFLE1BRFQ7QUFFTEMsZ0JBQVEsRUFBRSxRQUZMO0FBR0xDLGdCQUFRLEVBQUU7QUFITCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFHLGVBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBUEYsRUFRRTtBQUFRLGVBQVMsRUFBQyxTQUFsQjtBQUE0QixhQUFPLEVBQUVoRCxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsRUFXRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixDQURFLENBQUo7QUFlRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLFdBQU8sRUFBRTtBQUFBLGFBQU9ELEtBQUssR0FBRyxDQUFmO0FBQUEsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWFksV0FBSyxFQUFFa0IsT0FESTtBQUVYb0IsZ0JBQVUsRUFBRSxHQUZEO0FBR1hDLGNBQVEsRUFBRVg7QUFIQyxLQURmO0FBTUUseUJBQXFCLEVBQUU7QUFDckJZLDJCQUFxQixFQUFFO0FBQ3JCQyxlQUFPLEVBQUUsQ0FBQyxJQUFEO0FBRFk7QUFERixLQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFhRTtBQUNFLE9BQUcsRUFBQyxnQkFETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsV0FBTyxFQUFFUCxjQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURGLEVBb0JFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBTzlDLEtBQUssR0FBRyxDQUFmO0FBQUEsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWGtELGdCQUFVLEVBQUUsR0FERDtBQUVYdEMsV0FBSyxFQUFFbUIsV0FGSTtBQUdYb0IsY0FBUSxFQUFFTjtBQUhDLEtBRGY7QUFNRSx5QkFBcUIsRUFBRTtBQUNyQk8sMkJBQXFCLEVBQUU7QUFDckJDLGVBQU8sRUFBRSxDQUFDLElBQUQ7QUFEWTtBQURGLEtBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWFFO0FBQ0UsT0FBRyxFQUFDLHVCQUROO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxXQUFPLEVBQUVQLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBcEJGLENBRkYsRUEyQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxTQUFLLEVBQUMsUUFIUjtBQUlFLFdBQU8sRUFBRTNCLFdBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBM0NGLENBREY7QUFzREQ7O0dBekp1QnBCLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI4Yzg1MmUyMzFlM2NjNjdjY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50L21hcC9jb25maWdcIjtcclxuaW1wb3J0IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSwge1xyXG4gIGdlb2NvZGVCeUFkZHJlc3MsXHJcbiAgZ2V0TGF0TG5nLFxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgQ3VzdG9tbWFwIGZyb20gXCIuLi9jb21wb25lbnQvY3VzdG9tbWFwXCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICB2YXIgY2xpY2s7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFkZCgpIHtcclxuICAgIGlmIChjbGljayA9PT0gMCkge1xyXG4gICAgICBjb29yZGluYXRlcy5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgY29vcmRpbmF0ZXMubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICBzZXRBZGRyZXNzKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFkZHJlc3NEcm9wKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgICAgY29vcmRpbmF0ZXNEcm9wLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlc0Ryb3AubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgfVxyXG4gICAgc3dhbC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xpY2tTdWJtaXQoZSkge1xyXG4gICAgY29uc3Qgb3JpZ2luID0ge1xyXG4gICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcclxuICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcsXHJcbiAgICAgIGlkOiBcIjFcIixcclxuICAgIH07XHJcbiAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xyXG4gICAgICBsYXQ6IGNvb3JkaW5hdGVzRHJvcC5sYXQsXHJcbiAgICAgIGxuZzogY29vcmRpbmF0ZXNEcm9wLmxuZyxcclxuICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgfTtcclxuICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkZHJlc3NcIiwgYWRkcmVzcy5sYWJlbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkZHJlc3NEcm9wXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxhdFwiLCBjb29yZGluYXRlcy5sYXQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaWNrb2ZmbG5nXCIsIGNvb3JkaW5hdGVzLmxuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsYXRcIiwgY29vcmRpbmF0ZXNEcm9wLmxhdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsbmdcIiwgY29vcmRpbmF0ZXNEcm9wLmxuZyk7XHJcblxyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYgPSBhZGRyZXNzLmxhYmVsO1xyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSBhZGRyZXNzRHJvcC5sYWJlbDtcclxuXHJcbiAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IGNvb3JkaW5hdGVzRHJvcC5sYXQ7XHJcbiAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhbmcgPSBjb29yZGluYXRlc0Ryb3AubG5nO1xyXG5cclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZyA9IGNvb3JkaW5hdGVzRHJvcC5sbmc7XHJcbiAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucmVmcmVzaCA9IDE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWRkcmVzc0Ryb3AsIHNldEFkZHJlc3NEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG5nOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb29yZGluYXRlc0Ryb3AsIHNldENvb3JkaW5hdGVzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlcyhsYXRMbmcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURyb3AgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZW9jb2RlQnlBZGRyZXNzKHZhbHVlLmxhYmVsKTtcclxuICAgIGNvbnN0IGxhdExuZyA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRzWzBdKTtcclxuICAgIHNldEFkZHJlc3NEcm9wKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzRHJvcChsYXRMbmcpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5zd2VldGFsZXJ0KCkge1xyXG4gICAgc3dhbChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwRHJhZ1wiPkRyYWcgdGhlIG1hcmtlciB0byBzZXQgbG9jYXRpb248L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Eb25lXCIgb25DbGljaz17Z2V0QWRkfT5cclxuICAgICAgICAgIERvbmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Q3VzdG9tbWFwPjwvQ3VzdG9tbWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xEZWxpdmVyXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZVwiPkJvb2sgeW91ciBkZWxpdmVyeSBub3chPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvbkNsaWNrPXsoKSA9PiAoY2xpY2sgPSAwKX0+XHJcbiAgICAgICAgICA8R29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgIHNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgaW5zdGFuY2VJZDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuc3dlZXRhbGVydH1cclxuICAgICAgICAgID48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9PlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9tYXBcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0fVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=