webpackHotUpdate_N_E("pages/map",{

/***/ "./component/map/googlemap.js":
/*!************************************!*\
  !*** ./component/map/googlemap.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./component/map/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Bitbucket\\Jgo\\component\\map\\googlemap.js",
    _s = $RefreshSig$(),
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MapDirectionsRenderer(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      directions = _useState[0],
      setDirections = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var places = props.places,
        travelMode = props.travelMode;
    var waypoints = places.map(function (p) {
      return {
        location: {
          lat: p.lat,
          lng: p.lng
        },
        stopover: true
      };
    });
    var origin = waypoints.shift().location;
    var destination = waypoints.pop().location;
    var directionsService = new google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode,
      waypoints: waypoints
    }, function (result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {}
    });
  });

  if (error) {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 24
    }
  });
}

_s(MapDirectionsRenderer, "EbZ3rf2k47q8bOIBnVG92TiLXsw=");

_c = MapDirectionsRenderer;
var Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(_c3 = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(_c2 = function _c2(props) {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultCenter: props.defaultCenter,
    defaultZoom: props.defaultZoom,
    defaultOptions: {
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, props.markers.map(function (marker, index) {
    var position = {
      lat: marker.lat,
      lng: marker.lng
    };
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      position: position,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 16
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}));
_c4 = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "MapDirectionsRenderer");
$RefreshReg$(_c2, "Map$withScriptjs$withGoogleMap");
$RefreshReg$(_c3, "Map$withScriptjs");
$RefreshReg$(_c4, "Map");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsIm1hcmtlcnMiLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsSUFBRCxDQURSO0FBQUEsTUFDN0JDLFVBRDZCO0FBQUEsTUFDakJDLGFBRGlCOztBQUFBLG1CQUVWRixzREFBUSxDQUFDLElBQUQsQ0FGRTtBQUFBLE1BRTdCRyxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQjs7QUFJcENDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ05DLE1BRE0sR0FDaUJQLEtBRGpCLENBQ05PLE1BRE07QUFBQSxRQUNFQyxVQURGLEdBQ2lCUixLQURqQixDQUNFUSxVQURGO0FBR2QsUUFBTUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsYUFBUTtBQUNuQ0MsZ0JBQVEsRUFBRTtBQUFFQyxhQUFHLEVBQUVGLENBQUMsQ0FBQ0UsR0FBVDtBQUFjQyxhQUFHLEVBQUVILENBQUMsQ0FBQ0c7QUFBckIsU0FEeUI7QUFFbkNDLGdCQUFRLEVBQUU7QUFGeUIsT0FBUjtBQUFBLEtBQVgsQ0FBbEI7QUFJQSxRQUFNQyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ1EsS0FBVixHQUFrQkwsUUFBakM7QUFDQSxRQUFNTSxXQUFXLEdBQUdULFNBQVMsQ0FBQ1UsR0FBVixHQUFnQlAsUUFBcEM7QUFFQSxRQUFNUSxpQkFBaUIsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsaUJBQWhCLEVBQTFCO0FBQ0FILHFCQUFpQixDQUFDSSxLQUFsQixDQUNFO0FBQ0VSLFlBQU0sRUFBRUEsTUFEVjtBQUVFRSxpQkFBVyxFQUFFQSxXQUZmO0FBR0VWLGdCQUFVLEVBQUVBLFVBSGQ7QUFJRUMsZUFBUyxFQUFFQTtBQUpiLEtBREYsRUFPRSxVQUFDZ0IsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ2xCLFVBQUlBLE1BQU0sS0FBS0wsTUFBTSxDQUFDQyxJQUFQLENBQVlLLGdCQUFaLENBQTZCQyxFQUE1QyxFQUFnRDtBQUM5Q3pCLHFCQUFhLENBQUNzQixNQUFELENBQWI7QUFDRCxPQUZELE1BRU0sQ0FFTDtBQUNGLEtBYkg7QUFlRCxHQTFCUSxDQUFUOztBQTRCQSxNQUFJckIsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLEtBQUwsQ0FBUDtBQUNEOztBQUNELFNBQU9GLFVBQVUsSUFBSSxNQUFDLG9FQUFEO0FBQW9CLGNBQVUsRUFBRUEsVUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQjtBQUNEOztHQXBDUUgscUI7O0tBQUFBLHFCO0FBc0NULElBQU04QixHQUFHLEdBQUdDLHNFQUFZLE9BQ3RCQyx1RUFBYSxPQUFDLGFBQUMvQixLQUFEO0FBQUEsU0FDWixNQUFDLDJEQUFEO0FBQ0UsaUJBQWEsRUFBRUEsS0FBSyxDQUFDZ0MsYUFEdkI7QUFFRSxlQUFXLEVBQUVoQyxLQUFLLENBQUNpQyxXQUZyQjtBQUdFLGtCQUFjLEVBQUU7QUFBQ0MsdUJBQWlCLEVBQUUsS0FBcEI7QUFBMkJDLG9CQUFjLEVBQUUsS0FBM0M7QUFBa0RDLGtCQUFZLEVBQUUsS0FBaEU7QUFBdUVDLHVCQUFpQixFQUFFO0FBQTFGLEtBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR3JDLEtBQUssQ0FBQ3NDLE9BQU4sQ0FBYzVCLEdBQWQsQ0FBa0IsVUFBQzZCLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUNwQyxRQUFNQyxRQUFRLEdBQUc7QUFBRTVCLFNBQUcsRUFBRTBCLE1BQU0sQ0FBQzFCLEdBQWQ7QUFBbUJDLFNBQUcsRUFBRXlCLE1BQU0sQ0FBQ3pCO0FBQS9CLEtBQWpCO0FBQ0EsV0FBTyxNQUFDLHdEQUFEO0FBQVEsU0FBRyxFQUFFMEIsS0FBYjtBQUFvQixjQUFRLEVBQUVDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBSEEsQ0FMSCxFQVNFLE1BQUMscUJBQUQ7QUFDRSxVQUFNLEVBQUV6QyxLQUFLLENBQUNzQyxPQURoQjtBQUVFLGNBQVUsRUFBRWpCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZb0IsVUFBWixDQUF1QkMsT0FGckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRFk7QUFBQSxDQUFELENBRFMsQ0FBeEI7TUFBTWQsRztBQW1CU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFwLjlmZjE2NDI3NWQxN2EyMjZjMzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhHb29nbGVNYXAsXHJcbiAgR29vZ2xlTWFwLFxyXG4gIHdpdGhTY3JpcHRqcyxcclxuICBNYXJrZXIsXHJcbiAgRGlyZWN0aW9uc1JlbmRlcmVyLFxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgXCIuL2NvbmZpZ1wiO1xyXG5cclxuZnVuY3Rpb24gTWFwRGlyZWN0aW9uc1JlbmRlcmVyKHByb3BzKSB7XHJcbiAgY29uc3QgW2RpcmVjdGlvbnMsIHNldERpcmVjdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgcGxhY2VzLCB0cmF2ZWxNb2RlIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB3YXlwb2ludHMgPSBwbGFjZXMubWFwKChwKSA9PiAoe1xyXG4gICAgICBsb2NhdGlvbjogeyBsYXQ6IHAubGF0LCBsbmc6IHAubG5nIH0sXHJcbiAgICAgIHN0b3BvdmVyOiB0cnVlLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gd2F5cG9pbnRzLnNoaWZ0KCkubG9jYXRpb247XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHdheXBvaW50cy5wb3AoKS5sb2NhdGlvbjtcclxuXHJcbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXHJcbiAgICAgICAgdHJhdmVsTW9kZTogdHJhdmVsTW9kZSxcclxuICAgICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xyXG4gICAgICAgICAgc2V0RGlyZWN0aW9ucyhyZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgxPntlcnJvcn08L2gxPjtcclxuICB9XHJcbiAgcmV0dXJuIGRpcmVjdGlvbnMgJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkaXJlY3Rpb25zfSAvPjtcclxufVxyXG5cclxuY29uc3QgTWFwID0gd2l0aFNjcmlwdGpzKFxyXG4gIHdpdGhHb29nbGVNYXAoKHByb3BzKSA9PiAoXHJcbiAgICA8R29vZ2xlTWFwXHJcbiAgICAgIGRlZmF1bHRDZW50ZXI9e3Byb3BzLmRlZmF1bHRDZW50ZXJ9XHJcbiAgICAgIGRlZmF1bHRab29tPXtwcm9wcy5kZWZhdWx0Wm9vbX1cclxuICAgICAgZGVmYXVsdE9wdGlvbnM9e3tmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsIG1hcFR5cGVDb250cm9sOiBmYWxzZSwgc2NhbGVDb250cm9sOiBmYWxzZSwgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5tYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IG1hcmtlci5sYXQsIGxuZzogbWFya2VyLmxuZyB9O1xyXG4gICAgICAgIHJldHVybiA8TWFya2VyIGtleT17aW5kZXh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgICA8TWFwRGlyZWN0aW9uc1JlbmRlcmVyXHJcbiAgICAgICAgcGxhY2VzPXtwcm9wcy5tYXJrZXJzfVxyXG4gICAgICAgIHRyYXZlbE1vZGU9e2dvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR31cclxuICAgICAgLz5cclxuICAgIDwvR29vZ2xlTWFwPlxyXG4gICkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=