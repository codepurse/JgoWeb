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
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\JgoWeb\\component\\map\\googlemap.js",
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
        lineNumber: 46,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
    options: {
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      }, {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#263c3f"
        }]
      }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6b9a76"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }]
      }, {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#212a37"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9ca5b3"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#746855"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#1f2835"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#f3d19c"
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#2f3948"
        }]
      }, {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#17263c"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#515c6d"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#17263c"
        }]
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      style: {
        backgroundColor: "#0000ff",
        fillColor: "#0000ff",
        strokeColor: "0000ff"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    polylineOptions: polylineOptionsActual,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiLCJtYXJrZXJzIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJwb2x5bGluZU9wdGlvbnNBY3R1YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBQUEsa0JBSUFDLHNEQUFRLENBQUMsSUFBRCxDQUpSO0FBQUEsTUFJN0JDLFVBSjZCO0FBQUEsTUFJakJDLGFBSmlCOztBQUFBLG1CQUtW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QUFBO0FBQUEsTUFERjtBQVdELEdBYkEsQ0E3RkgsRUEyR0UsTUFBQyxxQkFBRDtBQUNFLFVBQU0sRUFBRWpELEtBQUssQ0FBQzJDLE9BRGhCO0FBRUUsY0FBVSxFQUFFdEIsTUFBTSxDQUFDQyxJQUFQLENBQVk0QixVQUFaLENBQXVCQyxPQUZyQztBQUdFLG1CQUFlLEVBQUlDLHFCQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0dGLENBRFk7QUFBQSxDQUFELENBSFMsQ0FBeEI7TUFBTXZCLEc7QUF3SFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC4wNTU5OTY4MWE5MjFjODBmZjAxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgTWFya2VyLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcERpcmVjdGlvbnNSZW5kZXJlcihwcm9wcykge1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IFtkaXJlY3Rpb25zLCBzZXREaXJlY3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBsYWNlcywgdHJhdmVsTW9kZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gcGxhY2VzLm1hcCgocCkgPT4gKHtcclxuICAgICAgbG9jYXRpb246IHsgbGF0OiBwLmxhdCwgbG5nOiBwLmxuZyB9LFxyXG4gICAgICBzdG9wb3ZlcjogdHJ1ZSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9yaWdpbiA9IHdheXBvaW50cy5zaGlmdCgpLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB3YXlwb2ludHMucG9wKCkubG9jYXRpb247XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGUsXHJcbiAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgxPntlcnJvcn08L2gxPjtcclxuICB9XHJcbiAgcmV0dXJuIGRpcmVjdGlvbnMgJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkaXJlY3Rpb25zfSAvPjtcclxufVxyXG5cclxuY29uc3QgTWFwID0gd2l0aFNjcmlwdGpzKFxyXG5cclxuICBcclxuICB3aXRoR29vZ2xlTWFwKChwcm9wcykgPT4gKFxyXG4gICAgPEdvb2dsZU1hcFxyXG4gICAgICBkZWZhdWx0Q2VudGVyPXtwcm9wcy5kZWZhdWx0Q2VudGVyfVxyXG4gICAgICBkZWZhdWx0Wm9vbT17cHJvcHMuZGVmYXVsdFpvb219XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgeyBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLCBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjQyZjNlXCIgfV0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNDJmM2VcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIiwgc3R5bGVyczogW3sgY29sb3I6IFwiIzc0Njg1NVwiIH1dIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzI2M2MzZlwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNmI5YTc2XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMzODQxNGVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyMTJhMzdcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjOWNhNWIzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzc0Njg1NVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMWYyODM1XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZjNkMTljXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyZjM5NDhcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXQuc3RhdGlvblwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNkNTk1NjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxNzI2M2NcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzUxNWM2ZFwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxNzI2M2NcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7IGxhdDogbWFya2VyLmxhdCwgbG5nOiBtYXJrZXIubG5nIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgZmlsbENvbG9yOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIwMDAwZmZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxNYXBEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICBwbGFjZXM9e3Byb3BzLm1hcmtlcnN9XHJcbiAgICAgICAgdHJhdmVsTW9kZT17Z29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HfVxyXG4gICAgICAgIHBvbHlsaW5lT3B0aW9ucz0geyBwb2x5bGluZU9wdGlvbnNBY3R1YWwgfSBcclxuICAgICAgLz5cclxuICAgIDwvR29vZ2xlTWFwPlxyXG4gICkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=