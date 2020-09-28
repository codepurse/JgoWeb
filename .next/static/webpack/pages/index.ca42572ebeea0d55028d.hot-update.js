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
      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_7___default()({
        text: "Hello world!"
      });
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
        position: "relative"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "pDrag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, "Drag the marker to set location"), __jsx("button", {
      className: "btnDone",
      onClick: getAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, "Done"), __jsx(_component_custommap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    })));
  }

  return __jsx("div", {
    className: "col-lg-6 colDeliver",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 140,
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
      lineNumber: 145,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "Image/google-maps.png",
    className: "img-fluid imgMap",
    onClick: opensweetalert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2RlbGl2ZXIuanMiXSwibmFtZXMiOlsiQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xpY2siLCJnZXRBZGQiLCJjb29yZGluYXRlcyIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJkcm9wb2ZmbGFuZyIsInNldEFkZHJlc3MiLCJ2YWx1ZSIsInBpY2tvZmYiLCJsYWJlbCIsInNldEFkZHJlc3NEcm9wIiwiY29vcmRpbmF0ZXNEcm9wIiwic3dhbCIsImNsb3NlIiwiY2xpY2tTdWJtaXQiLCJlIiwiYWRkcmVzcyIsImFkZHJlc3NEcm9wIiwidGV4dCIsIm9yaWdpbiIsImlkIiwiY29vcmRpbmF0ZSIsInB1c2giLCJkZXN0aW5hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZHJvcG9mZiIsInBpY2tvZmZsYW5nIiwiZHJvcG9mZmxhdCIsInJlZnJlc2giLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0Q29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlc0Ryb3AiLCJoYW5kbGVDaGFuZ2UiLCJnZW9jb2RlQnlBZGRyZXNzIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsImhhbmRsZUNoYW5nZURyb3AiLCJvcGVuc3dlZXRhbGVydCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJpbnN0YW5jZUlkIiwib25DaGFuZ2UiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxLQUFKOztBQUVBLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEIsUUFBSUQsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZkUsaUJBQVcsQ0FBQ0MsR0FBWixHQUFrQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCQyxVQUE5QztBQUNBTixpQkFBVyxDQUFDTyxHQUFaLEdBQWtCTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJHLFdBQTlDO0FBQ0FDLGdCQUFVLENBQUM7QUFDVEMsYUFBSyxFQUFFUixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJNLE9BRDFCO0FBRVRDLGFBQUssRUFBRVYsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCTTtBQUYxQixPQUFELENBQVY7QUFJRCxLQVBELE1BT087QUFDTEUsb0JBQWMsQ0FBQztBQUNiSCxhQUFLLEVBQUVSLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk0sT0FEdEI7QUFFYkMsYUFBSyxFQUFFVixNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJNO0FBRnRCLE9BQUQsQ0FBZDtBQUlBRyxxQkFBZSxDQUFDYixHQUFoQixHQUFzQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCQyxVQUFsRDtBQUNBUSxxQkFBZSxDQUFDUCxHQUFoQixHQUFzQkwsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCRyxXQUFsRDtBQUNEOztBQUNETyxpRUFBSSxDQUFDQyxLQUFMO0FBQ0Q7O0FBRUQsV0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDdEIsUUFBSUMsT0FBTyxLQUFLLEVBQVosSUFBa0JDLFdBQVcsS0FBSyxFQUF0QyxFQUEwQztBQUN4Q0wsbUVBQUksQ0FBQztBQUNITSxZQUFJLEVBQUU7QUFESCxPQUFELENBQUo7QUFHRCxLQUpELE1BSU87QUFDTCxVQUFNQyxNQUFNLEdBQUc7QUFDYnJCLFdBQUcsRUFBRUQsV0FBVyxDQUFDQyxHQURKO0FBRWJNLFdBQUcsRUFBRVAsV0FBVyxDQUFDTyxHQUZKO0FBR2JnQixVQUFFLEVBQUU7QUFIUyxPQUFmO0FBS0FDLGdCQUFVLENBQUNDLElBQVgsQ0FBZ0JILE1BQWhCO0FBQ0EsVUFBTUksV0FBVyxHQUFHO0FBQ2xCekIsV0FBRyxFQUFFYSxlQUFlLENBQUNiLEdBREg7QUFFbEJNLFdBQUcsRUFBRU8sZUFBZSxDQUFDUCxHQUZIO0FBR2xCZ0IsVUFBRSxFQUFFO0FBSGMsT0FBcEI7QUFLQUMsZ0JBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsV0FBaEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVo7QUFFQUssa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixFQUFnQ1gsT0FBTyxDQUFDUCxLQUF4QztBQUNBaUIsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixFQUFvQ1YsV0FBVyxDQUFDUixLQUFoRDtBQUNBaUIsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQzlCLFdBQVcsQ0FBQ0MsR0FBL0M7QUFDQTRCLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUM5QixXQUFXLENBQUNPLEdBQS9DO0FBQ0FzQixrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DaEIsZUFBZSxDQUFDYixHQUFuRDtBQUNBNEIsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQ2hCLGVBQWUsQ0FBQ1AsR0FBbkQ7QUFFQUwsWUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCTSxPQUE1QixHQUFzQ1EsT0FBTyxDQUFDUCxLQUE5QztBQUNBVixZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEIwQixPQUE1QixHQUFzQ1gsV0FBVyxDQUFDUixLQUFsRDtBQUVBVixZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJDLFVBQTVCLEdBQXlDUSxlQUFlLENBQUNiLEdBQXpEO0FBQ0FDLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0QjJCLFdBQTVCLEdBQTBDbEIsZUFBZSxDQUFDUCxHQUExRDtBQUVBTCxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEI0QixVQUE1QixHQUF5Q25CLGVBQWUsQ0FBQ2IsR0FBekQ7QUFDQUMsWUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCRyxXQUE1QixHQUEwQ00sZUFBZSxDQUFDUCxHQUExRDtBQUNBTCxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEI2QixPQUE1QixHQUFzQyxDQUF0QztBQUNBdEMsWUFBTSxDQUFDNkIsSUFBUCxDQUFZLE1BQVo7QUFDRDtBQUNGOztBQTdEMkIsd0JBK0RFVSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQS9ERjtBQUFBO0FBQUEsTUErRHJCakIsT0EvRHFCO0FBQUEsTUErRFpWLFVBL0RZOztBQUFBLHlCQWdFVTBCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBaEVWO0FBQUE7QUFBQSxNQWdFckJoQixXQWhFcUI7QUFBQSxNQWdFUlAsY0FoRVE7O0FBQUEseUJBaUVVc0IsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQ25EbkMsT0FBRyxFQUFFLElBRDhDO0FBRW5ETSxPQUFHLEVBQUU7QUFGOEMsR0FBZixDQWpFVjtBQUFBO0FBQUEsTUFpRXJCUCxXQWpFcUI7QUFBQSxNQWlFUnFDLGNBakVROztBQUFBLHlCQXFFa0JGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUMzRG5DLE9BQUcsRUFBRSxJQURzRDtBQUUzRE0sT0FBRyxFQUFFO0FBRnNELEdBQWYsQ0FyRWxCO0FBQUE7QUFBQSxNQXFFckJPLGVBckVxQjtBQUFBLE1BcUVKd0Isa0JBckVJOztBQTBFNUIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPN0IsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHOEIseUZBQWdCLENBQUM5QixLQUFLLENBQUNFLEtBQVAsQ0FEbkI7O0FBQUE7QUFDYjZCLHFCQURhO0FBQUE7QUFBQSxxQkFFRUMsa0ZBQVMsQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUZYOztBQUFBO0FBRWJFLG9CQUZhO0FBR25CaEIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBWjtBQUNBRCx3QkFBVSxDQUFDQyxLQUFELENBQVY7QUFDQTJCLDRCQUFjLENBQUNNLE1BQUQsQ0FBZDs7QUFMbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQSxNQUFNSyxnQkFBZ0I7QUFBQSxpTUFBRyxrQkFBT2xDLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRDhCLHlGQUFnQixDQUFDOUIsS0FBSyxDQUFDRSxLQUFQLENBRGY7O0FBQUE7QUFDakI2QixxQkFEaUI7QUFBQTtBQUFBLHFCQUVGQyxrRkFBUyxDQUFDRCxPQUFPLENBQUMsQ0FBRCxDQUFSLENBRlA7O0FBQUE7QUFFakJFLG9CQUZpQjtBQUd2QjlCLDRCQUFjLENBQUNILEtBQUQsQ0FBZDtBQUNBNEIsZ0NBQWtCLENBQUNLLE1BQUQsQ0FBbEI7O0FBSnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBT0EsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QjlCLGlFQUFJLENBQ0Y7QUFDRSxXQUFLLEVBQUU7QUFDTCtCLG9CQUFZLEVBQUUsTUFEVDtBQUVMQyxnQkFBUSxFQUFFLFFBRkw7QUFHTEMsZ0JBQVEsRUFBRTtBQUhMLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FQRixFQVFFO0FBQVEsZUFBUyxFQUFDLFNBQWxCO0FBQTRCLGFBQU8sRUFBRWpELE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixFQVdFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLENBREUsQ0FBSjtBQWVEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBT0QsS0FBSyxHQUFHLENBQWY7QUFBQSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUNFLGVBQVcsRUFBRTtBQUNYWSxXQUFLLEVBQUVTLE9BREk7QUFFWDhCLGdCQUFVLEVBQUUsR0FGRDtBQUdYQyxjQUFRLEVBQUVYO0FBSEMsS0FEZjtBQU1FLHlCQUFxQixFQUFFO0FBQ3JCWSwyQkFBcUIsRUFBRTtBQUNyQkMsZUFBTyxFQUFFLENBQUMsSUFBRDtBQURZO0FBREYsS0FOekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBYUU7QUFDRSxPQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxXQUFPLEVBQUVQLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREYsRUFvQkU7QUFDRSxhQUFTLEVBQUMsYUFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU8vQyxLQUFLLEdBQUcsQ0FBZjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFBRXVELGVBQVMsRUFBRTtBQUFiLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsd0VBQUQ7QUFDRSxlQUFXLEVBQUU7QUFDWEosZ0JBQVUsRUFBRSxHQUREO0FBRVh2QyxXQUFLLEVBQUVVLFdBRkk7QUFHWDhCLGNBQVEsRUFBRU47QUFIQyxLQURmO0FBTUUseUJBQXFCLEVBQUU7QUFDckJPLDJCQUFxQixFQUFFO0FBQ3JCQyxlQUFPLEVBQUUsQ0FBQyxJQUFEO0FBRFk7QUFERixLQU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFpQkU7QUFDRSxPQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFTLEVBQUMsa0JBRlo7QUFHRSxXQUFPLEVBQUVQLGNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQXBCRixDQUZGLEVBK0NFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLFNBQUssRUFBQyxRQUhSO0FBSUUsV0FBTyxFQUFFNUIsV0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0NGLENBREY7QUF3REQ7O0dBbkt1QnRCLEc7VUFDUEUscUQ7OztLQURPRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNhNDI1NzJlYmVlYTBkNTUwMjhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnQvbWFwL2NvbmZpZ1wiO1xyXG5pbXBvcnQgR29vZ2xlUGxhY2VzQXV0b2NvbXBsZXRlLCB7XHJcbiAgZ2VvY29kZUJ5QWRkcmVzcyxcclxuICBnZXRMYXRMbmcsXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBDdXN0b21tYXAgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21tYXBcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgY2xpY2s7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFkZCgpIHtcclxuICAgIGlmIChjbGljayA9PT0gMCkge1xyXG4gICAgICBjb29yZGluYXRlcy5sYXQgPSBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdDtcclxuICAgICAgY29vcmRpbmF0ZXMubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgICBzZXRBZGRyZXNzKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFkZHJlc3NEcm9wKHtcclxuICAgICAgICB2YWx1ZTogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYsXHJcbiAgICAgICAgbGFiZWw6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmLFxyXG4gICAgICB9KTtcclxuICAgICAgY29vcmRpbmF0ZXNEcm9wLmxhdCA9IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0O1xyXG4gICAgICBjb29yZGluYXRlc0Ryb3AubG5nID0gZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nO1xyXG4gICAgfVxyXG4gICAgc3dhbC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xpY2tTdWJtaXQoZSkge1xyXG4gICAgaWYgKGFkZHJlc3MgPT09IFwiXCIgfHwgYWRkcmVzc0Ryb3AgPT09IFwiXCIpIHtcclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgdGV4dDogXCJIZWxsbyB3b3JsZCFcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvcmlnaW4gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcsXHJcbiAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjb29yZGluYXRlLnB1c2gob3JpZ2luKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XHJcbiAgICAgICAgbGF0OiBjb29yZGluYXRlc0Ryb3AubGF0LFxyXG4gICAgICAgIGxuZzogY29vcmRpbmF0ZXNEcm9wLmxuZyxcclxuICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvb3JkaW5hdGUucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZGRyZXNzXCIsIGFkZHJlc3MubGFiZWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFkZHJlc3NEcm9wXCIsIGFkZHJlc3NEcm9wLmxhYmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaWNrb2ZmbGF0XCIsIGNvb3JkaW5hdGVzLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGlja29mZmxuZ1wiLCBjb29yZGluYXRlcy5sbmcpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyb3BvZmZsYXRcIiwgY29vcmRpbmF0ZXNEcm9wLmxhdCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJvcG9mZmxuZ1wiLCBjb29yZGluYXRlc0Ryb3AubG5nKTtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmID0gYWRkcmVzcy5sYWJlbDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSBhZGRyZXNzRHJvcC5sYWJlbDtcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuXHJcbiAgICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0ID0gY29vcmRpbmF0ZXNEcm9wLmxhdDtcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmZsYW5nID0gY29vcmRpbmF0ZXNEcm9wLmxuZztcclxuICAgICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnJlZnJlc2ggPSAxO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9tYXBcIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzRHJvcCwgc2V0QWRkcmVzc0Ryb3BdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsYXQ6IG51bGwsXHJcbiAgICBsbmc6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nvb3JkaW5hdGVzRHJvcCwgc2V0Q29vcmRpbmF0ZXNEcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZS5sYWJlbCk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRHJvcCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdlb2NvZGVCeUFkZHJlc3ModmFsdWUubGFiZWwpO1xyXG4gICAgY29uc3QgbGF0TG5nID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdHNbMF0pO1xyXG4gICAgc2V0QWRkcmVzc0Ryb3AodmFsdWUpO1xyXG4gICAgc2V0Q29vcmRpbmF0ZXNEcm9wKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlbnN3ZWV0YWxlcnQoKSB7XHJcbiAgICBzd2FsKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBEcmFnXCI+RHJhZyB0aGUgbWFya2VyIHRvIHNldCBsb2NhdGlvbjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkRvbmVcIiBvbkNsaWNrPXtnZXRBZGR9PlxyXG4gICAgICAgICAgRG9uZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxDdXN0b21tYXA+PC9DdXN0b21tYXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbERlbGl2ZXJcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IChjbGljayA9IDApfT5cclxuICAgICAgICAgIDxHb29nbGVQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgc2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICB2YWx1ZTogYWRkcmVzcyxcclxuICAgICAgICAgICAgICBpbnN0YW5jZUlkOiBcIjFcIixcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFtcInBoXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJJbWFnZS9nb29nbGUtbWFwcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTWFwXCJcclxuICAgICAgICAgICAgb25DbGljaz17b3BlbnN3ZWV0YWxlcnR9XHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gKGNsaWNrID0gMSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICBzZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlSWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBhZGRyZXNzRHJvcCxcclxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRHJvcCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXV0b2NvbXBsZXRpb25SZXF1ZXN0PXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBbXCJwaFwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiSW1hZ2UvZ29vZ2xlLW1hcHMucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZ01hcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5zd2VldGFsZXJ0fVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0blN1Ym1pdFwiXHJcbiAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0fVxyXG4gICAgICA+PC9pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==