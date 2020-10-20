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
        lineNumber: 43,
        columnNumber: 12
      }
    }, error);
  }

  return directions && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["DirectionsRenderer"], {
    directions: directions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 50,
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
      icon: {
        strokeColor: "red",
        scale: 3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    });
  }), __jsx(MapDirectionsRenderer, {
    places: props.markers,
    travelMode: google.maps.TravelMode.DRIVING,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21hcC9nb29nbGVtYXAuanMiXSwibmFtZXMiOlsiTWFwRGlyZWN0aW9uc1JlbmRlcmVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbnMiLCJzZXREaXJlY3Rpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInBsYWNlcyIsInRyYXZlbE1vZGUiLCJ3YXlwb2ludHMiLCJtYXAiLCJwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJzdG9wb3ZlciIsIm9yaWdpbiIsInNoaWZ0IiwiZGVzdGluYXRpb24iLCJwb3AiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImRlZmF1bHRDZW50ZXIiLCJkZWZhdWx0Wm9vbSIsImZ1bGxzY3JlZW5Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiLCJtYXJrZXJzIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsInN0cm9rZUNvbG9yIiwic2NhbGUiLCJUcmF2ZWxNb2RlIiwiRFJJVklORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxJQUFELENBRFI7QUFBQSxNQUM3QkMsVUFENkI7QUFBQSxNQUNqQkMsYUFEaUI7O0FBQUEsbUJBRVZGLHNEQUFRLENBQUMsSUFBRCxDQUZFO0FBQUEsTUFFN0JHLEtBRjZCO0FBQUEs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Q0FBQzJDLE9BRGhCO0FBRUUsY0FBVSxFQUFFdEIsTUFBTSxDQUFDQyxJQUFQLENBQVkyQixVQUFaLENBQXVCQyxPQUZyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUdGLENBRFk7QUFBQSxDQUFELENBRFMsQ0FBeEI7TUFBTXJCLEc7QUFvSFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcC5iNWE0MjRiMjEyZmNjZTYyYWY0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgTWFya2VyLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIE1hcERpcmVjdGlvbnNSZW5kZXJlcihwcm9wcykge1xyXG4gIGNvbnN0IFtkaXJlY3Rpb25zLCBzZXREaXJlY3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBsYWNlcywgdHJhdmVsTW9kZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gcGxhY2VzLm1hcCgocCkgPT4gKHtcclxuICAgICAgbG9jYXRpb246IHsgbGF0OiBwLmxhdCwgbG5nOiBwLmxuZyB9LFxyXG4gICAgICBzdG9wb3ZlcjogdHJ1ZSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9yaWdpbiA9IHdheXBvaW50cy5zaGlmdCgpLmxvY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB3YXlwb2ludHMucG9wKCkubG9jYXRpb247XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGUsXHJcbiAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgxPntlcnJvcn08L2gxPjtcclxuICB9XHJcbiAgcmV0dXJuIGRpcmVjdGlvbnMgJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkaXJlY3Rpb25zfSAvPjtcclxufVxyXG5cclxuY29uc3QgTWFwID0gd2l0aFNjcmlwdGpzKFxyXG4gIHdpdGhHb29nbGVNYXAoKHByb3BzKSA9PiAoXHJcbiAgICA8R29vZ2xlTWFwXHJcbiAgICAgIGRlZmF1bHRDZW50ZXI9e3Byb3BzLmRlZmF1bHRDZW50ZXJ9XHJcbiAgICAgIGRlZmF1bHRab29tPXtwcm9wcy5kZWZhdWx0Wm9vbX1cclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICB7IGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMyNDJmM2VcIiB9XSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzI0MmYzZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLCBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjZDU5NTYzXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjMjYzYzNmXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM2YjlhNzZcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzM4NDE0ZVwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzIxMmEzN1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiM5Y2E1YjNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNzQ2ODU1XCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiMxZjI4MzVcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiBcIiNmM2QxOWNcIiB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzJmMzk0OFwiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiI2Q1OTU2M1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogXCIjNTE1YzZkXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6IFwiIzE3MjYzY1wiIH1dLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHsgbGF0OiBtYXJrZXIubGF0LCBsbmc6IG1hcmtlci5sbmcgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBzY2FsZTogMyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxNYXBEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICBwbGFjZXM9e3Byb3BzLm1hcmtlcnN9XHJcbiAgICAgICAgdHJhdmVsTW9kZT17Z29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HfVxyXG4gICAgICAvPlxyXG4gICAgPC9Hb29nbGVNYXA+XHJcbiAgKSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==